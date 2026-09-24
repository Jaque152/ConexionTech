"use client";

import { useLanguage } from "@/lib/language-context";

export default function PrivacidadPage() {
  const { lang } = useLanguage();

  const content = {
    es: {
      title: "Aviso de Privacidad",
      date: "Fecha de última actualización: Septiembre de 2026",
      sections: [
        {
          title: "A. Identidad y domicilio del responsable",
          body: [
            "HERMITAGETECH ENTERPRISES, S.A.P.I. DE C.V. (en lo sucesivo, “la Empresa”), con domicilio en AVENIDA FLORENCIA 57, INTERIOR 103 OFICINA 103-A, COLONIA JUÁREZ, ALCALDÍA CUAUHTÉMOC, C.P. 06600, CIUDAD DE MÉXICO, es responsable del tratamiento de los datos personales que nos proporcione con motivo del uso del sitio web URL DEL SITIO WEB PENDIENTE y de la contratación de nuestros servicios digitales.",
            "Para cualquier asunto relacionado con este Aviso de Privacidad, usted puede comunicarse al correo electrónico hola@conexiontech.com.mx y al teléfono +52 55 5533 2498.",
            "Este Aviso se emite en cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y los Lineamientos del Aviso de Privacidad."
          ]
        },
        {
          title: "B. Datos personales que recabamos",
          body: [
            "La Empresa recaba, por medios electrónicos y/o remotos, los siguientes tipos de datos personales cuando usted navega en el sitio, solicita información o contrata alguno de nuestros planes o proyectos digitales:",
            "• Datos de identificación: nombre completo, razón social (en su caso), RFC.",
            "• Datos de contacto: correo electrónico, número telefónico, ciudad o localidad.",
            "• Datos de facturación: RFC, razón social, domicilio fiscal, uso de CFDI.",
            "• Datos de contratación: servicios o planes de interés, historial de cotizaciones, proyectos contratados, montos y fechas de pago.",
            "• Datos de navegación: dirección IP, tipo de navegador, sistema operativo, páginas visitadas, tiempo de permanencia, cookies y tecnologías similares.",
            "En principio, la Empresa no solicita datos personales sensibles; en caso de que, de manera excepcional, sea necesario recabar este tipo de datos, se solicitará su consentimiento expreso y por escrito en términos de la legislación aplicable."
          ]
        },
        {
          title: "C. Finalidades del tratamiento",
          body: [
            "Los datos personales que recabamos serán utilizados para las siguientes finalidades:",
            "Finalidades primarias: Aquellas necesarias para la existencia, mantenimiento y cumplimiento de la relación jurídica con usted:",
            "• Identificarlo como Cliente y registrar su solicitud de información o contratación de servicios digitales.",
            "• Elaborar cotizaciones, propuestas y contratos de prestación de servicios.",
            "• Gestionar la contratación, configuración y desarrollo de los planes y proyectos digitales que usted solicite (sitios web, tiendas en línea, plataformas, branding, etc.).",
            "• Procesar pagos a través de las pasarelas autorizadas y emitir los comprobantes fiscales correspondientes.",
            "• Dar seguimiento a solicitudes de soporte, aclaraciones, modificaciones de proyecto y entrega de resultados.",
            "• Cumplir obligaciones de carácter contable, fiscal y administrativo derivadas de la relación con usted.",
            "La negativa para el uso de sus datos con estas finalidades primarias podría impedir que la Empresa le preste los servicios que ofrece.",
            "Finalidades secundarias: Adicionalmente, podremos utilizar sus datos personales para:",
            "• Enviarle comunicaciones comerciales relacionadas con nuevos planes, promociones, contenidos, eventos o actualizaciones sobre nuestros servicios digitales.",
            "• Realizar encuestas de satisfacción y estudios internos sobre calidad del servicio y mejora de procesos.",
            "• Elaborar estadísticas y reportes internos sobre hábitos de contratación y uso del sitio.",
            "Si usted no desea que sus datos sean tratados para estas finalidades secundarias, podrá manifestarlo en cualquier momento enviando un correo a hola@conexiontech.com.mx con el asunto “Limitación de finalidades secundarias”. Su negativa no será motivo para que le neguemos los servicios contratados."
          ]
        },
        {
          title: "D. Uso de cookies y tecnologías similares",
          body: [
            "El sitio conexiontech.com.mx utiliza cookies y tecnologías similares que permiten:",
            "• Facilitar la navegación y recordar ciertas preferencias del usuario.",
            "• Analizar el tráfico y desempeño del sitio.",
            "• Identificar secciones de mayor interés para mejorar contenidos y experiencia de usuario.",
            "Usted puede deshabilitar o eliminar las cookies a través de la configuración de su navegador; sin embargo, ciertas funciones del sitio podrían no operar correctamente si lo hace."
          ]
        },
        {
          title: "E. Transferencias de datos personales",
          body: [
            "La Empresa podrá compartir sus datos personales con terceros nacionales o extranjeros en los siguientes supuestos:",
            "• Proveedores de servicios tecnológicos (alojamiento web, correo electrónico, herramientas de gestión de proyectos, plataformas de analítica, CRM), exclusivamente para apoyar la operación del sitio y la prestación de los servicios.",
            "• Proveedores de servicios de pago y pasarelas en línea, para procesar transacciones con tarjeta de crédito o débito o medios electrónicos.",
            "• Asesores externos (contables, fiscales, legales, auditoría) para el cumplimiento de obligaciones legales.",
            "• Autoridades competentes, cuando una ley, reglamento u orden judicial así lo exijan.",
            "En todos los casos, la Empresa procurará que los terceros mantengan la confidencialidad de la información y la utilicen únicamente para las finalidades señaladas en este Aviso, adoptando las medidas de seguridad que resulten aplicables.",
            "Las transferencias distintas a las anteriores que requieran su consentimiento serán puestas en su conocimiento previamente, a fin de recabarlo según exija la ley."
          ]
        },
        {
          title: "F. Medios y procedimiento para ejercer Derechos ARCO",
          body: [
            "Como titular de los datos personales, usted puede ejercer en cualquier momento sus derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO), así como revocar el consentimiento otorgado, en los términos previstos por la Ley.",
            "Para ejercer dichos derechos, deberá enviar una solicitud a:",
            "• Correo electrónico: hola@conexiontech.com.mx",
            "• Domicilio: AVENIDA FLORENCIA 57, INTERIOR 103 OFICINA 103-A, COLONIA JUÁREZ, ALCALDÍA CUAUHTÉMOC, C.P. 06600, CIUDAD DE MÉXICO",
            "Su solicitud deberá contener, al menos:",
            "1. Nombre completo y un medio para comunicarle la respuesta (domicilio, correo electrónico o número telefónico).",
            "2. Copia de un documento que acredite su identidad o, en su caso, la representación legal (credencial oficial, poder, etc.).",
            "3. Descripción clara y precisa de los datos personales respecto de los que busca ejercer alguno de los derechos ARCO.",
            "4. Cualquier elemento que facilite la localización de los datos (por ejemplo, fecha de contratación, número de proyecto, correo utilizado).",
            "5. En caso de rectificación, la descripción de las modificaciones a realizarse y la documentación que sustente su petición.",
            "La Empresa acusará de recibido su solicitud en los plazos que fija la ley y dará respuesta dentro del término legal correspondiente, informando si la misma resulta procedente."
          ]
        },
        {
          title: "G. Opciones para limitar el uso o divulgación de sus datos",
          body: [
            "Además del ejercicio de derechos ARCO, usted puede limitar el uso o divulgación de sus datos personales con fines promocionales mediante una comunicación dirigida a hola@conexiontech.com.mx indicando su nombre completo y el alcance de la limitación solicitada (por ejemplo, “no deseo recibir correos promocionales”).",
            "La Empresa incorporará su registro a las listas internas de exclusión correspondientes para evitar el envío de comunicaciones con esas características."
          ]
        },
        {
          title: "H. Seguridad de la información",
          body: [
            "La Empresa implementa medidas de seguridad administrativas, técnicas y físicas para proteger sus datos personales contra daño, pérdida, alteración, destrucción o el uso, acceso o tratamiento no autorizado.",
            "Entre otras, se aplican controles de acceso a la información, uso de conexiones seguras en los sistemas que lo requieren, políticas internas de manejo de datos y acuerdos de confidencialidad con personal y proveedores que tienen contacto con la información."
          ]
        },
        {
          title: "I. Cambios al Aviso de Privacidad",
          body: [
            "La Empresa se reserva el derecho de modificar o actualizar en cualquier momento el contenido de este Aviso de Privacidad, para reflejar cambios en sus prácticas de tratamiento de datos, en la normativa aplicable o en los servicios ofrecidos.",
            "Las modificaciones estarán disponibles en el sitio web y se indicará en dicho medio la fecha de la última actualización. Le recomendamos revisar este Aviso de forma periódica."
          ]
        },
        {
          title: "J. Aceptación del Aviso de Privacidad",
          body: [
            "Al utilizar el sitio web, proporcionar sus datos a través de nuestros formularios de contacto o contratar alguno de nuestros planes o proyectos digitales, usted declara que ha leído este Aviso de Privacidad y que otorga su consentimiento para el tratamiento de sus datos personales conforme a los términos aquí establecidos."
          ]
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      date: "Last updated: September 2026",
      sections: [
        {
          title: "A. Identity and address of the responsible party",
          body: [
            "HERMITAGETECH ENTERPRISES, S.A.P.I. DE C.V. (hereinafter, \"the Company\"), located at AVENIDA FLORENCIA 57, INTERIOR 103 OFICINA 103-A, COLONIA JUÁREZ, ALCALDÍA CUAUHTÉMOC, C.P. 06600, CIUDAD DE MÉXICO, is responsible for the processing of the personal data you provide to us through the use of the website URL DEL SITIO WEB PENDIENTE and the contracting of our digital services.",
            "For any matter related to this Privacy Policy, you can contact us at the email hola@conexiontech.com.mx and at the phone number +52 55 5533 2498.",
            "This Policy is issued in compliance with the Federal Law on Protection of Personal Data Held by Private Parties, its Regulations, and the Privacy Policy Guidelines."
          ]
        },
        {
          title: "B. Personal data we collect",
          body: [
            "The Company collects, by electronic and/or remote means, the following types of personal data when you browse the site, request information, or contract any of our digital plans or projects:",
            "• Identification data: full name, business name (if applicable), Tax ID (RFC).",
            "• Contact data: email address, phone number, city, or location.",
            "• Billing data: Tax ID (RFC), business name, tax address, CFDI usage.",
            "• Contracting data: services or plans of interest, quote history, contracted projects, payment amounts, and dates.",
            "• Browsing data: IP address, browser type, operating system, pages visited, time spent, cookies, and similar technologies.",
            "In principle, the Company does not request sensitive personal data; in the event that, exceptionally, it is necessary to collect this type of data, your express written consent will be requested in terms of the applicable legislation."
          ]
        },
        {
          title: "C. Purposes of processing",
          body: [
            "The personal data we collect will be used for the following purposes:",
            "Primary purposes: Those necessary for the existence, maintenance, and fulfillment of the legal relationship with you:",
            "• Identify you as a Client and register your request for information or contracting of digital services.",
            "• Prepare quotes, proposals, and service provision contracts.",
            "• Manage the contracting, configuration, and development of the digital plans and projects you request (websites, online stores, platforms, branding, etc.).",
            "• Process payments through authorized gateways and issue corresponding tax receipts.",
            "• Follow up on support requests, clarifications, project modifications, and delivery of results.",
            "• Comply with accounting, tax, and administrative obligations derived from the relationship with you.",
            "Refusal to use your data for these primary purposes could prevent the Company from providing the services it offers.",
            "Secondary purposes: Additionally, we may use your personal data to:",
            "• Send you commercial communications related to new plans, promotions, content, events, or updates about our digital services.",
            "• Conduct satisfaction surveys and internal studies on service quality and process improvement.",
            "• Prepare statistics and internal reports on contracting habits and site usage.",
            "If you do not want your data to be processed for these secondary purposes, you can state so at any time by sending an email to hola@conexiontech.com.mx with the subject \"Limitation of secondary purposes\". Your refusal will not be a reason for us to deny you the contracted services."
          ]
        },
        {
          title: "D. Use of cookies and similar technologies",
          body: [
            "The conexiontech.com.mx site uses cookies and similar technologies that allow:",
            "• Facilitating navigation and remembering certain user preferences.",
            "• Analyzing traffic and site performance.",
            "• Identifying sections of greatest interest to improve content and user experience.",
            "You can disable or delete cookies through your browser settings; however, certain site functions may not operate correctly if you do so."
          ]
        },
        {
          title: "E. Personal data transfers",
          body: [
            "The Company may share your personal data with national or foreign third parties in the following cases:",
            "• Technology service providers (web hosting, email, project management tools, analytics platforms, CRM), exclusively to support the site's operation and the provision of services.",
            "• Online payment service providers and gateways, to process credit or debit card transactions or electronic means.",
            "• External advisors (accounting, tax, legal, auditing) for compliance with legal obligations.",
            "• Competent authorities, when a law, regulation, or court order so requires.",
            "In all cases, the Company will ensure that third parties maintain the confidentiality of the information and use it solely for the purposes indicated in this Policy, adopting applicable security measures.",
            "Transfers other than the above that require your consent will be brought to your attention beforehand, in order to obtain it as required by law."
          ]
        },
        {
          title: "F. Means and procedure to exercise ARCO Rights",
          body: [
            "As the owner of personal data, you can exercise your rights of Access, Rectification, Cancellation, and Opposition (ARCO) at any time, as well as revoke the consent granted, under the terms provided by the Law.",
            "To exercise these rights, you must send a request to:",
            "• Email: hola@conexiontech.com.mx",
            "• Address: AVENIDA FLORENCIA 57, INTERIOR 103 OFICINA 103-A, COLONIA JUÁREZ, ALCALDÍA CUAUHTÉMOC, C.P. 06600, CIUDAD DE MÉXICO",
            "Your request must contain at least:",
            "1. Full name and a means to communicate the response (address, email, or phone number).",
            "2. Copy of a document proving your identity or, where applicable, legal representation (official ID, power of attorney, etc.).",
            "3. Clear and precise description of the personal data regarding which you seek to exercise any of the ARCO rights.",
            "4. Any element that facilitates the location of the data (e.g., hiring date, project number, email used).",
            "5. In the case of rectification, the description of the modifications to be made and the documentation supporting your request.",
            "The Company will acknowledge receipt of your request within the deadlines established by law and will respond within the corresponding legal term, informing whether it is accepted."
          ]
        },
        {
          title: "G. Options to limit the use or disclosure of your data",
          body: [
            "In addition to exercising ARCO rights, you can limit the use or disclosure of your personal data for promotional purposes by communicating to hola@conexiontech.com.mx indicating your full name and the scope of the requested limitation (for example, \"I do not wish to receive promotional emails\").",
            "The Company will add your record to the corresponding internal exclusion lists to prevent the sending of communications with those characteristics."
          ]
        },
        {
          title: "H. Information Security",
          body: [
            "The Company implements administrative, technical, and physical security measures to protect your personal data against damage, loss, alteration, destruction, or unauthorized use, access, or processing.",
            "Among others, information access controls, the use of secure connections in systems that require it, internal data management policies, and confidentiality agreements with personnel and suppliers who have contact with the information are applied."
          ]
        },
        {
          title: "I. Changes to the Privacy Policy",
          body: [
            "The Company reserves the right to modify or update the content of this Privacy Policy at any time to reflect changes in its data processing practices, applicable regulations, or offered services.",
            "The modifications will be available on the website, and the date of the last update will be indicated therein. We recommend that you review this Policy periodically."
          ]
        },
        {
          title: "J. Acceptance of the Privacy Policy",
          body: [
            "By using the website, providing your data through our contact forms, or contracting any of our digital plans or projects, you declare that you have read this Privacy Policy and give your consent to the processing of your personal data under the terms established herein."
          ]
        }
      ]
    }
  };

  const t = content[lang] || content.es;

  return (
    <main className="min-h-screen bg-slate-950 py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        <h1 className="text-4xl font-black uppercase tracking-tight text-slate-200 sm:text-5xl">
          {t.title}
        </h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-sky-500">
          SYS_UPDATE: {t.date}
        </p>
        
        <div className="mt-12 space-y-12">
          {t.sections.map((sec, i) => (
            <section key={i} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-sky-400">
                {sec.title}
              </h2>
              <div className="space-y-4 font-mono text-[0.85rem] leading-relaxed text-slate-400">
                {sec.body.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}