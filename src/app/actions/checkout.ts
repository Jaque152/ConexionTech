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
      throw new Error("Variables de entorno de Etomin no configuradas.");
    }

    // A. AUTENTICACIÓN
    const authResponse = await etominClient.post("/signin", {
      email: emailStr,
      password: passwordStr,
    });
    
    const authToken = authResponse.data?.authToken;
    if (!authToken) throw new Error("Error de autenticación con la pasarela Etomin.");

    // B. TOKENIZACIÓN
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
      { headers: { Authorization: `Bearer ${authToken}` } }
    );

    const cardToken = tokenResponse.data?.cardNumberToken;
    if (!cardToken) throw new Error("Error al procesar la tarjeta.");

    // C. PROCESAR VENTA
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

    // D. EVALUAR RESPUESTA
    const isApproved = saleResponse.data.status?.toUpperCase() === "APPROVED";

    if (!isApproved) {
      return { success: false, error: "Pago declinado. Revisa los fondos o intenta con otra tarjeta." };
    }

    // E. CORREOS
    await enviarCorreos(orderId, form, items, totals, currentLang);

    return { success: true, orderId };
    
  } catch (error: any) {
    console.error("❌ Checkout Error (Etomin):", error.response?.data || error.message);
    const errorMessage = error.response?.data?.message || error.message || "Ocurrió un error al procesar el pago.";
    return { success: false, error: errorMessage };
  }
}

// 4. NOTIFICACIONES
async function enviarCorreos(
  orderId: string,
  form: CheckoutFormState,
  items: CheckoutItem[],
  totals: { subtotal: number; iva: number; total: number },
  lang: "es" | "en"
) {
  const adminEmail = process.env.ADMIN_EMAIL || "hola@conexiontech.com.mx";
  const senderEmail = "ConexionTech <hola@conexiontech.com.mx>"; 
  const currentLang = lang || "es";

  const emailBody = `
    <div style="font-family: monospace; max-w: 600px; margin: 0 auto; background-color: #0f172a; padding: 40px; color: #94a3b8;">
      <h2 style="color: #f8fafc;">NUEVA ORDEN: ${orderId}</h2>
      <p>Usuario: <strong style="color: #0ea5e9;">${form.nombre}</strong></p>
      <p>Total: $${totals.total.toFixed(2)} MXN</p>
      <p>Status: VERIFIED_AND_ENCRYPTED</p>
    </div>
  `;

  try {
    await resend.emails.send({
      from: senderEmail,
      to: form.email,
      subject: `Log de Operación - Tx: ${orderId}`,
      html: emailBody,
    });
    await resend.emails.send({
      from: senderEmail,
      to: adminEmail,
      subject: `💰 [SYS_NOTIFY] INGRESO APROBADO: ${orderId}`,
      html: emailBody,
    });
  } catch (err) {
    console.error("❌ Error ejecutando Resend:", err);
  }
}