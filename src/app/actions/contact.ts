"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// 1. DEFINIMOS LOS TIPOS ESTRICTOS
export interface ContactFormState {
  nombre: string;
  correo: string;
  telefono: string;
  asunto: string;
  mensaje: string;
}

export interface ContactPayload {
  form: ContactFormState;
  lang: "es" | "en";
}

// 2. APLICAMOS EL TIPO AL PAYLOAD
export async function processContact(payload: ContactPayload) {
  try {
    const { form, lang } = payload;
    const adminEmail = process.env.ADMIN_EMAIL || "hola@growthive.com.mx";
    const senderEmail = "Growthive <hola@growthive.com.mx>";

    const texts = {
      es: {
        subjectClient: "Hemos recibido tu mensaje - ConexionTech",
        subjectAdmin: `Nuevo mensaje de contacto: ${form.nombre}`,
        title: "¡Gracias por contactarnos!",
        hello: "Hola",
        intro: "Hemos recibido tu mensaje. Revisaremos los detalles de tu proyecto y nos pondremos en contacto contigo lo antes posible para enviarte una propuesta personalizada.",
        details: "Detalles de tu mensaje:",
        name: "Nombre:",
        email: "Email:",
        phone: "Teléfono:",
        subject: "Asunto:",
        message: "Mensaje:",
        footer: "Growthive — Estudio Digital CDMX."
      },
      en: {
        subjectClient: "We have received your message - ConexionTech",
        subjectAdmin: `New contact message: ${form.nombre}`,
        title: "Thank you for reaching out!",
        hello: "Hello",
        intro: "We have received your message. We will review your project details and get back to you as soon as possible with a custom proposal.",
        details: "Your message details:",
        name: "Name:",
        email: "Email:",
        phone: "Phone:",
        subject: "Subject:",
        message: "Message:",
        footer: "Growthive — Digital Studio CDMX."
      }
    };

    const t = texts[lang] || texts["es"];

    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto; color: #333;">
        <h2 style="color: #ce4b2a;">${t.title}</h2>
        <p>${t.hello} <strong>${form.nombre}</strong>,</p>
        <p>${t.intro}</p>
        
        <h3 style="margin-top: 30px;">${t.details}</h3>
        <p><strong>${t.name}</strong> ${form.nombre}<br/>
        <strong>${t.email}</strong> ${form.correo}<br/>
        <strong>${t.phone}</strong> ${form.telefono || "N/A"}<br/>
        <strong>${t.subject}</strong> ${form.asunto || "N/A"}<br/>
        <strong>${t.message}</strong><br/>
        ${form.mensaje}</p>

        <p style="margin-top: 30px; font-size: 12px; color: #888;">${t.footer}</p>
      </div>
    `;

    // 1. Correo de confirmación al cliente
    await resend.emails.send({
      from: senderEmail,
      to: form.correo,
      subject: t.subjectClient,
      html: emailBody,
    });

    // 2. Correo de notificación al Administrador
    await resend.emails.send({
      from: senderEmail,
      to: adminEmail,
      subject: t.subjectAdmin,
      html: `<div style="background-color: #f4ede0; padding: 20px;">${emailBody}</div>`,
    });

    return { success: true };
  } catch (error: unknown) {
    console.error("❌ Error en processContact:", error);
    const errorMessage = error instanceof Error ? error.message : "Ocurrió un error desconocido";
    return { success: false, error: errorMessage };
  }
}