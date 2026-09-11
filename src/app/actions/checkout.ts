"use server";

import { Resend } from "resend";
import axios from "axios";

const resend = new Resend(process.env.RESEND_API_KEY);

// 1. CONFIGURACIÓN CLIENTE ETOMIN
const ETOMIN_BASE_URL = "https://pagos.etomin.com/api/v1";

const etominClient = axios.create({
  baseURL: ETOMIN_BASE_URL,
  headers: {
    "accept": "application/json",
    "content-type": "application/json",
  },
});

// 2. DEFINIMOS LOS TIPOS ESTRICTOS
export interface CheckoutFormState {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
  empresa?: string;
  rfc?: string;
  direccion: string;
  ciudad: string;
  estado: string;
  cp: string;
  pais: string;
  card: string;
  cardName: string;
  exp: string;
  cvc: string;
  notas?: string;
}

export interface CheckoutItem {
  product: {
    id: string | number;
    priceMXN: number;
    es: { name: string };
    en: { name: string };
  };
  qty: number;
}

export interface CheckoutPayload {
  form: CheckoutFormState;
  items: CheckoutItem[];
  totals: {
    subtotal: number;
    iva: number;
    total: number;
  };
  lang: "es" | "en";
}

// 3. PROCESAMIENTO DEL PAGO CON ETOMIN
export async function processCheckout(payload: CheckoutPayload) {
  try {
    const { form, items, totals, lang } = payload;
    const orderId = `CT-${Math.floor(100000 + Math.random() * 899999)}`;
    const currentLang = lang || "es";

    const emailStr = process.env.ETOMIN_USER;
    const passwordStr = process.env.ETOMIN_PASSWORD;

    if (!emailStr || !passwordStr) {
      throw new Error("Variables de entorno de Etomin (User/Password) no configuradas.");
    }

    // A. AUTENTICACIÓN EN ETOMIN (Obtener AuthToken)
    const authResponse = await etominClient.post("/signin", {
      email: emailStr,
      password: passwordStr,
    });
    
    const authToken = authResponse.data?.authToken;
    if (!authToken) throw new Error("Error de autenticación con la pasarela Etomin.");

    // B. TOKENIZACIÓN DE LA TARJETA
    const expParts = form.exp.split("/");
    const expirationMonth = expParts[0].trim();
    const expirationYear = `20${expParts[1].trim()}`;

    const tokenResponse = await etominClient.post(
      "/card/tokenizer",
      {
        cardData: {
          cardNumber: form.card.replace(/\s/g, ""), 
          cardholderName: form.cardName,
          expirationMonth,
          expirationYear,
        },
      },
      {
        headers: { Authorization: `Bearer ${authToken}` },
      }
    );

    const cardToken = tokenResponse.data?.cardNumberToken;
    if (!cardToken) throw new Error("Error al procesar y tokenizar la tarjeta.");

    // C. PROCESAR LA VENTA
    const salePayload = {
      amount: Math.round(totals.total * 100) / 100,
      currency: "484", 
      reference: orderId,
      customerInformation: {
        firstName: form.nombre,
        lastName: form.apellidos,
        email: form.email,
        phone1: form.telefono,
        address1: form.direccion,
        address2: "", 
        city: form.ciudad,
        state: form.estado,
        postalCode: form.cp,
        country: form.pais === "México" ? "MX" : "US",
        company: form.empresa || "",
        ip: "127.0.0.1", 
      },
      cardData: {
        cardNumberToken: cardToken,
        cvv: form.cvc.replace(/\s/g, ""), 
      },
      metadata: {
        notes: form.notas || "Sin notas",
        source: "ConexionTech Checkout"
      }
    };

    const saleResponse = await etominClient.post("/sale", salePayload, {
      headers: { Authorization: `Bearer ${authToken}` },
    });

    const saleData = saleResponse.data;
    const isApproved = saleData.status?.toUpperCase() === "APPROVED";

    if (!isApproved) {
      console.error("❌ Pago Declinado por Etomin:", saleData);
      return { 
        success: false, 
        error: "El pago fue declinado. Revisa los fondos o intenta con otra tarjeta." 
      };
    }

    // E. ENVÍO DE CORREOS CONFIRMATORIOS AL SER APROBADO
    await enviarCorreos(orderId, form, items, totals, currentLang);

    return { success: true, orderId };
    
  } catch (error: unknown) {
    // RESOLUCIÓN DE TIPOS ESTRICTOS (Type Guards)
    if (axios.isAxiosError(error)) {
      console.error("❌ Checkout Error (Etomin Axios):", error.response?.data || error.message);
      
      // Aseguramos que errorMessage sea de tipo string usando coerción segura
      const responseMessage = error.response?.data?.message;
      const errorMessage = typeof responseMessage === 'string' 
        ? responseMessage 
        : error.message || "Ocurrió un error al procesar el pago.";
        
      return { success: false, error: errorMessage };
    } 
    
    if (error instanceof Error) {
      console.error("❌ Checkout Error (General):", error.message);
      return { success: false, error: error.message };
    }

    console.error("❌ Checkout Error (Desconocido):", error);
    return { success: false, error: "Ocurrió un error desconocido al procesar el pago." };
  }
}

// 4. ENVÍO DE CORREOS
async function enviarCorreos(
  orderId: string,
  form: CheckoutFormState,
  items: CheckoutItem[],
  totals: { subtotal: number; iva: number; total: number },
  lang: "es" | "en"
) {
  const adminEmail = process.env.ADMIN_EMAIL || "hola@conexiontech.com.mx";
  const senderEmail = "ConexionTech <hola@conexiontech.com.mx>"; 

  const texts = {
    es: {
      subjectClient: `Confirmacion de operación - ConexionTech`,
      subjectAdmin: `💰 [SYS_NOTIFY] INGRESO APROBADO: ${orderId} - ${form.nombre}`,
      title: `Confirmación de Despliegue: ${orderId}`,
      hello: `SYS_USER`,
      intro: `La transacción ha sido encriptada y validada exitosamente en la red de Etomin. El proceso de despliegue ha sido inicializado.`,
      totalPaid: `Total Transferido:`,
      clientData: `Parámetros de Cliente`,
      emailLabel: `Email:`,
      phoneLabel: `Teléfono:`,
      companyLabel: `Organización / RFC:`,
      footer: `ConexionTech — Ingeniería Web y Sistemas | CDMX.`
    },
    en: {
      subjectClient: `Operation Successful - ConexionTech`,
      subjectAdmin: `💰 [SYS_NOTIFY] INCOME APPROVED: ${orderId} - ${form.nombre}`,
      title: `Deployment Confirmation: ${orderId}`,
      hello: `SYS_USER`,
      intro: `The transaction has been successfully encrypted and validated on the Etomin network. The deployment process has been initialized.`,
      totalPaid: `Total Transferred:`,
      clientData: `Client Parameters`,
      emailLabel: `Email:`,
      phoneLabel: `Phone:`,
      companyLabel: `Organization / Tax ID:`,
      footer: `ConexionTech — Web Engineering & Systems | CDMX.`
    }
  };

  const t = texts[lang] || texts["es"];
  
  const itemsListHtml = items.map((i) => `
    <tr>
      <td style="padding: 12px 10px; border-bottom: 1px solid #1e293b; color: #cbd5e1; font-family: monospace;">${i.qty}x ${i.product[lang].name}</td>
      <td style="padding: 12px 10px; border-bottom: 1px solid #1e293b; text-align: right; color: #f8fafc; font-family: monospace;">$${(i.product.priceMXN * i.qty).toFixed(2)} MXN</td>
    </tr>
  `).join("");

  const emailBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-w: 600px; margin: 0 auto; background-color: #0f172a; padding: 40px; border-radius: 8px; border: 1px solid #1e293b; color: #94a3b8;">
      
      <div style="text-align: center; margin-bottom: 30px;">
        <span style="font-family: monospace; font-size: 24px; font-weight: 800; color: #0ea5e9; letter-spacing: 2px;">CONEXION<span style="color:#f8fafc">TECH</span></span>
      </div>

      <h2 style="color: #f8fafc; font-size: 20px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #1e293b; padding-bottom: 10px;">${t.title}</h2>
      
      <p style="margin-top: 20px;">${t.hello}: <strong style="color: #0ea5e9;">${form.nombre}</strong></p>
      <p style="line-height: 1.6;">${t.intro}</p>
      
      <div style="background-color: #020617; border-radius: 6px; padding: 20px; margin-top: 30px; border: 1px solid #1e293b;">
        <table style="width: 100%; border-collapse: collapse;">
          ${itemsListHtml}
          <tr>
            <td style="padding: 15px 10px 5px 10px; font-weight: bold; text-align: right; color: #94a3b8; font-family: monospace; text-transform: uppercase;">${t.totalPaid}</td>
            <td style="padding: 15px 10px 5px 10px; font-weight: bold; text-align: right; color: #0ea5e9; font-size: 18px;">$${totals.total.toFixed(2)} <span style="font-size: 12px;">MXN</span></td>
          </tr>
        </table>
      </div>

      <h3 style="margin-top: 40px; color: #f8fafc; font-size: 14px; font-family: monospace; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #1e293b; padding-bottom: 5px;">${t.clientData}</h3>
      <p style="line-height: 1.8; font-family: monospace;">
        <strong style="color: #64748b;">${t.emailLabel}</strong> <span style="color: #cbd5e1;">${form.email}</span><br/>
        <strong style="color: #64748b;">${t.phoneLabel}</strong> <span style="color: #cbd5e1;">${form.telefono}</span><br/>
        <strong style="color: #64748b;">${t.companyLabel}</strong> <span style="color: #cbd5e1;">${form.empresa || "N/A"} / ${form.rfc || "N/A"}</span>
      </p>

      <div style="margin-top: 50px; text-align: center; font-size: 11px; color: #475569; font-family: monospace; text-transform: uppercase; letter-spacing: 1px;">
        <p>SYS_STATUS: VERIFIED_AND_ENCRYPTED</p>
        <p>${t.footer}</p>
      </div>
    </div>
  `;

  try {
    await resend.emails.send({
      from: senderEmail,
      to: form.email,
      subject: t.subjectClient,
      html: emailBody,
    });

    await resend.emails.send({
      from: senderEmail,
      to: adminEmail,
      subject: t.subjectAdmin,
      html: `<div style="background-color: #020617; padding: 40px;">${emailBody}</div>`,
    });
  } catch (err: unknown) {
    // También aplicamos tipado estricto al catch de Resend
    if (err instanceof Error) {
      console.error("❌ Error ejecutando Resend:", err.message);
    } else {
      console.error("❌ Error desconocido ejecutando Resend:", err);
    }
  }
}
