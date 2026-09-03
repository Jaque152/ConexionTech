"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function TerminosPage() {
  const { lang } = useLanguage();

  const content = {
    es: {
      title: "Términos y Condiciones",
      subtitle: "SAINTBASSILS SYSTEMS, S.A.P.I. DE C.V.",
      date: "Fecha de entrada en vigor: Septiembre de 2026",
      sections: [
        {
          title: "A. Marco general del servicio",
          body: [
            "La prestación de los servicios descritos en este sitio web corre a cargo de SAINTBASSILS SYSTEMS, S.A.P.I. DE C.V. (en adelante, “la Empresa”), con domicilio en Boulevard Adolfo López Mateos 2165, Interior 607A, Oficina 607A-B, Piso 6, Colonia Los Alpes, Alcaldía Álvaro Obregón, C.P. 01010, Ciudad de México.",
            "El uso del sitio growthive.com.mx y la contratación de cualquiera de los planes o proyectos digitales implica que el usuario (el “Cliente”) ha leído, comprende y acepta íntegramente estos Términos y Condiciones.",
            "Para consultas, aclaraciones o soporte, el Cliente puede contactar a la Empresa en el correo hola@growthive.com.mx y en el teléfono [+52] 55 9826 1186"
          ]
        },
        {
          title: "B. Naturaleza de los servicios",
          body: [
            "La Empresa ofrece, de forma enunciativa, servicios de diseño y desarrollo web, implementación de tiendas en línea, plataformas especializadas (LMS, portales inmobiliarios, portales de empleo), así como soluciones de identidad digital, SEO y marketing digital.",
            "Los servicios se comercializan principalmente mediante planes predefinidos (por ejemplo: Plan Landing Page Emprendedor, Plan Sitio Web Profesional, Plan Ecommerce Avanzado, Plan Plataforma de Cursos Online, Plan Web para Restaurantes, Plan Web para Profesionistas, Planes de branding + web, etc.) y mediante proyectos digitales a la medida cotizados caso por caso.",
            "Salvo que se indique lo contrario de forma expresa, todos los servicios se prestan 100% en línea, y la entrega consiste en la puesta en marcha del sitio/plataforma o la entrega de los archivos digitales correspondientes (por ejemplo, logotipos en formatos PNG/JPG/vectorial)."
          ]
        },
        {
          title: "C. Público al que se dirige el sitio",
          body: [
            "El sitio está dirigido exclusivamente a personas mayores de edad con capacidad legal para contratar bajo las leyes mexicanas, ya sea a título personal o como representantes de empresas o negocios.",
            "El Cliente se compromete a utilizar el sitio solo con fines lícitos y para contratar servicios digitales relacionados con la presencia en internet, diseño web, comercio electrónico o proyectos afines.",
            "No se permite el uso del sitio para actividades fraudulentas, ilícitas o que vulneren derechos de terceros."
          ]
        },
        {
          title: "D. Información de planes, alcances y precios",
          body: [
            "En el sitio se describen los distintos planes y servicios, incluyendo, entre otros, los siguientes ejemplos:",
            "• Planes de landing page y presencia básica.",
            "• Planes de sitio web profesional y empresarial.",
            "• Planes de tienda en línea y ecommerce.",
            "• Planes específicos para sectores.",
            "• Planes combinados de marca + sitio web.",
            "• Proyectos digitales a la medida, que se cotizan individualmente.",
            "Para cada plan se indica un precio en pesos mexicanos (MXN) al que debe añadirse el Impuesto al Valor Agregado (IVA) correspondiente, salvo que se señale expresamente que el precio ya incluye impuestos.",
            "Las descripciones de los planes definen el alcance estándar del servicio. Cualquier funcionalidad, integración o desarrollo que exceda lo listado se considerará trabajo adicional y será objeto de cotización independiente.",
            "La Empresa puede actualizar en cualquier momento el catálogo de planes, sus características, precios y promociones, sin afectar los servicios ya contratados bajo condiciones previamente aceptadas."
          ]
        },
        {
          title: "E. Flujo de contratación y aceptación",
          body: [
            "El proceso general de contratación a través del sitio suele seguir estas etapas:",
            "• Paso 1: El Cliente revisa los planes disponibles o la opción de proyecto a la medida.",
            "• Paso 2: El Cliente selecciona un plan o solicita un proyecto personalizado.",
            "• Paso 3: El sitio muestra el resumen del servicio, precio, impuestos aplicables y, en su caso, opciones de pago en línea.",
            "• Paso 4: El Cliente proporciona los datos necesarios de contacto y facturación y procede a realizar el pago.",
            "• Paso 5: La Empresa confirma la recepción del pago o envía una propuesta formal que el Cliente deberá aprobar.",
            "La aceptación del presupuesto, plan o propuesta implica la conformidad del Cliente con estos Términos y Condiciones."
          ]
        },
        {
          title: "F. Pagos, formas de cobro y agregador de pagos",
          body: [
            "Los importes de los planes y proyectos pueden cobrarse como pago único o bajo esquemas acordados caso por caso, según se señale en el sitio o en la propuesta enviada al Cliente.",
            "En el sitio, cuando se habilita el pago en línea, los cargos se procesan a través de un agregador de pagos autorizado. La Empresa no procesa directamente los datos completos de la tarjeta; dicha información se gestiona en la plataforma del agregador de pagos.",
            "El Cliente se obliga a cubrir puntualmente los importes pactados. En caso de falta de pago, pago incompleto o contracargos injustificados, la Empresa podrá suspender el desarrollo o retirar temporalmente el sitio."
          ]
        },
        {
          title: "G. Entrega de los servicios digitales",
          body: [
            "La entrega de los servicios puede adoptar alguna de las siguientes modalidades:",
            "• Publicación del sitio o tienda en el servidor del Cliente.",
            "• Entrega de archivos y/o acceso a plataforma.",
            "• Puesta en marcha de plataformas específicas.",
            "• En el caso de identidad de marca, entrega de elementos en archivos digitales.",
            "Los plazos de entrega son estimados y pueden verse afectados por tiempos de aprobación, tiempos de entrega de contenidos del Cliente, cambios solicitados o fuerza mayor. La Empresa no será responsable por retrasos derivados de la falta de respuesta por parte del Cliente."
          ]
        },
        {
          title: "H. Responsabilidades del Cliente durante el proyecto",
          body: [
            "El Cliente se compromete a:",
            "• Proporcionar información veraz y completa sobre su negocio.",
            "• Entregar en tiempo los textos, imágenes, logotipos que deba aportar.",
            "• Asegurarse de contar con los derechos de uso sobre todo material que facilite y sacar en paz y a salvo a la Empresa frente a cualquier reclamación.",
            "El Cliente es responsable de revisar y aprobar las propuestas. Cambios significativos solicitados después de su aprobación podrán implicar costos adicionales."
          ]
        },
        {
          title: "I. Alcance, cambios y trabajo adicional",
          body: [
            "Cada plan incluye un conjunto definido de entregables. Cuando el Cliente requiera funcionalidades adicionales, la Empresa emitirá una cotización adicional que deberá ser aceptada.",
            "Pequeños ajustes podrán estar incluidos; sin embargo, rondas adicionales que alteren sustancialmente el diseño inicialmente aprobado podrán generar cargos extra."
          ]
        },
        {
          title: "J. Uso, mantenimiento y soporte posterior",
          body: [
            "Salvo que se haya contratado expresamente un servicio de mantenimiento o soporte continuo, la obligación principal de la Empresa se limita al desarrollo y entrega del proyecto.",
            "Servicios posteriores como actualización de contenidos, mantenimiento técnico de CMS o soporte por manipulaciones del Cliente, se considerarán servicios independientes."
          ]
        },
        {
          title: "K. Propiedad intelectual y licencias",
          body: [
            "Salvo pacto diferente, una vez liquidado el servicio contratado, el Cliente adquiere el derecho de uso sobre el sitio web, tienda o plataforma desarrollada.",
            "No obstante, la Empresa podrá conservar derechos sobre frameworks, plantillas, código reutilizable y metodologías, manteniendo una licencia de uso a favor del Cliente.",
            "El Cliente autoriza a la Empresa a incluir referencias visuales de los proyectos desarrollados en su portafolio o sitio web, salvo que se acuerde por escrito lo contrario."
          ]
        },
        {
          title: "L. Datos personales y confidencialidad",
          body: [
            "El tratamiento de los datos personales que el Cliente facilite a través del sitio se rige por el Aviso de Privacidad de la Empresa.",
            "La Empresa y el Cliente se obligan a mantener la confidencialidad de la información técnica o comercial que llegue a su conocimiento con motivo de la relación contractual."
          ]
        },
        {
          title: "M. Cancelaciones, reembolsos y proyectos a la medida",
          body: [
            "Las reglas sobre cancelaciones, reembolsos parciales y devoluciones se detallan en la Política de Reembolsos y Devoluciones de la Empresa, disponible en el sitio web.",
            "En proyectos a la medida, los pagos de anticipos suelen destinarse al trabajo ya ejecutado; en consecuencia, los montos reembolsables se determinarán con base en el esfuerzo invertido."
          ]
        },
        {
          title: "N. Limitación de responsabilidad",
          body: [
            "La Empresa no garantiza resultados comerciales específicos (ventas, posicionamiento, visitas), ya que dependen de factores ajenos a su control.",
            "En la máxima medida permitida por la ley, la responsabilidad total de la Empresa frente al Cliente se limitará al monto efectivamente pagado, sin incluir daños indirectos, pérdida de datos o lucro cesante."
          ]
        },
        {
          title: "O. Modificaciones de los Términos",
          body: [
            "La Empresa puede actualizar estos Términos y Condiciones en cualquier momento. La versión vigente estará siempre disponible en el sitio web.",
            "Las contrataciones anteriores se regirán por las condiciones vigentes al momento de su aceptación; el uso continuado implica la aceptación de dichos cambios."
          ]
        },
        {
          title: "P. Ley aplicable y jurisdicción",
          body: [
            "Estos Términos y Condiciones se interpretan y aplican de conformidad con las leyes de los Estados Unidos Mexicanos.",
            "Para cualquier controversia, la Empresa y el Cliente se someten a la jurisdicción de los tribunales competentes de la Ciudad de México."
          ]
        }
      ]
    },
    en: {
      title: "Terms and Conditions",
      subtitle: "SAINTBASSILS SYSTEMS, S.A.P.I. DE C.V.",
      date: "Effective date: September 2026",
      sections: [
        {
          title: "A. General Service Framework",
          body: [
            "The provision of services described on this website is carried out by SAINTBASSILS SYSTEMS, S.A.P.I. DE C.V. (hereinafter, “the Company”), located at Boulevard Adolfo López Mateos 2165, Interior 607A, Oficina 607A-B, Piso 6, Colonia Los Alpes, Alcaldía Álvaro Obregón, C.P. 01010, Mexico City.",
            "The use of the website growthive.com.mx and the contracting of any of the digital plans or projects implies that the user (the “Client”) has read, understands, and fully accepts these Terms and Conditions.",
            "For inquiries, clarifications, or support, the Client may contact the Company at hola@growthive.com.mx and by phone at [+52] 55 9826 1186"
          ]
        },
        {
          title: "B. Nature of the Services",
          body: [
            "The Company offers, by way of illustration, web design and development services, online store implementation, specialized platforms (LMS, real estate portals, job portals), as well as digital identity, SEO, and digital marketing solutions.",
            "Services are primarily commercialized through predefined plans (e.g., Entrepreneur Landing Page Plan, Professional Website Plan, Advanced Ecommerce Plan, etc.) and custom digital projects quoted on a case-by-case basis.",
            "Unless expressly stated otherwise, all services are provided 100% online, and delivery consists of the launch of the site/platform or the delivery of corresponding digital files (e.g., logos in PNG/JPG/vector formats)."
          ]
        },
        {
          title: "C. Target Audience of the Site",
          body: [
            "The site is exclusively aimed at adults of legal age with the legal capacity to contract under Mexican law, either personally or as representatives of companies or businesses.",
            "The Client agrees to use the site only for lawful purposes and to contract digital services related to internet presence, web design, e-commerce, or related projects.",
            "The use of the site for fraudulent, illegal activities, or activities that violate the rights of third parties is not permitted."
          ]
        },
        {
          title: "D. Plan Information, Scope, and Pricing",
          body: [
            "The site describes the various plans and services, including, among others:",
            "• Landing page and basic presence plans.",
            "• Professional and corporate website plans.",
            "• Online store and e-commerce plans.",
            "• Industry-specific plans.",
            "• Combined brand + website plans.",
            "• Custom digital projects, quoted individually.",
            "For each plan, a price is indicated in Mexican pesos (MXN) to which the corresponding Value Added Tax (IVA) must be added, unless expressly stated that the price includes taxes.",
            "Plan descriptions define the standard scope of service. Any functionality, integration, or development exceeding the listed items will be considered additional work and subject to independent quotation.",
            "The Company may update the plan catalog, features, pricing, and promotions at any time, without affecting previously contracted services under accepted conditions."
          ]
        },
        {
          title: "E. Contracting and Acceptance Flow",
          body: [
            "The general contracting process through the site typically follows these stages:",
            "• Step 1: The Client reviews available plans or custom project options.",
            "• Step 2: The Client selects a plan or requests a customized project.",
            "• Step 3: The site displays a service summary, price, applicable taxes, and payment options.",
            "• Step 4: The Client provides necessary contact and billing details and proceeds with payment.",
            "• Step 5: The Company confirms payment receipt or sends a formal proposal for the Client's approval.",
            "Acceptance of the budget, plan, or proposal implies the Client's agreement with these Terms and Conditions."
          ]
        },
        {
          title: "F. Payments, Billing Methods, and Payment Aggregator",
          body: [
            "Plan and project amounts may be charged as a single payment or under agreed-upon schemes on a case-by-case basis.",
            "On the site, when online payment is enabled, charges are processed through an authorized payment aggregator. The Company does not directly process full card details; this info is managed by the payment aggregator's platform.",
            "The Client is obligated to punctually cover the agreed amounts. In the event of non-payment, incomplete payment, or unjustified chargebacks, the Company may suspend development or temporarily take down the site."
          ]
        },
        {
          title: "G. Delivery of Digital Services",
          body: [
            "Delivery may take any of the following forms:",
            "• Publishing the site/store on the Client's server.",
            "• Delivery of files and/or platform access.",
            "• Launch of specific platforms.",
            "• For brand identity, delivery of digital elements.",
            "Delivery times are estimated and may be affected by approval times, client content delivery delays, requested changes, or force majeure. The Company is not liable for delays caused by lack of client response."
          ]
        },
        {
          title: "H. Client Responsibilities During the Project",
          body: [
            "The Client agrees to:",
            "• Provide truthful and complete information about their business.",
            "• Deliver texts, images, and logos on time.",
            "• Ensure they hold usage rights for all provided materials, indemnifying the Company against third-party claims.",
            "The Client is responsible for reviewing and approving proposals. Significant changes requested post-approval may incur additional costs."
          ]
        },
        {
          title: "I. Scope, Changes, and Additional Work",
          body: [
            "Each plan includes a defined set of deliverables. When additional features are required, the Company will issue a separate quote.",
            "Minor reasonable adjustments may be included; however, extensive additional revision rounds altering the initial approved design may generate extra charges."
          ]
        },
        {
          title: "J. Post-Delivery Use, Maintenance, and Support",
          body: [
            "Unless continuous support is expressly contracted, the Company's obligation is limited to the development and delivery of the project.",
            "Subsequent services like content updates, CMS technical maintenance, or support due to client manipulation are considered independent services."
          ]
        },
        {
          title: "K. Intellectual Property and Licenses",
          body: [
            "Unless otherwise agreed, once the service is fully paid, the Client acquires usage rights over the developed site/platform.",
            "However, the Company retains rights over pre-existing frameworks, templates, reusable code, and methodologies, granting the Client a usage license.",
            "The Client authorizes the Company to include visual references of the developed projects in its portfolio, unless agreed otherwise in writing."
          ]
        },
        {
          title: "L. Personal Data and Confidentiality",
          body: [
            "The processing of personal data provided by the Client is governed by the Company's Privacy Policy.",
            "Both parties agree to maintain the confidentiality of technical or commercial info shared during the contractual relationship."
          ]
        },
        {
          title: "M. Cancellations, Refunds, and Custom Projects",
          body: [
            "Rules regarding cancellations and partial refunds are detailed in the Company's Refunds and Cancellations Policy, available on the site.",
            "In custom projects, advance payments generally cover work already executed; refundable amounts, if any, are based on the invested effort."
          ]
        },
        {
          title: "N. Limitation of Liability",
          body: [
            "The Company does not guarantee specific commercial results (sales, SEO ranking, traffic), as they depend on external factors.",
            "To the maximum extent permitted by law, the Company's total liability is limited to the amount effectively paid by the Client, excluding indirect damages or loss of profits."
          ]
        },
        {
          title: "O. Modifications to Terms",
          body: [
            "The Company may update these Terms and Conditions at any time. The current version will always be available on the site.",
            "Prior contracts are governed by conditions active at their acceptance; continued use implies acceptance of the changes."
          ]
        },
        {
          title: "P. Governing Law and Jurisdiction",
          body: [
            "These Terms and Conditions are interpreted and enforced under the laws of the United Mexican States.",
            "For any dispute, the Company and the Client submit to the jurisdiction of the competent courts of Mexico City."
          ]
        }
      ]
    }
  };

  const t = content[lang] || content.es;

  return (
    <main className="min-h-screen bg-cream-paper py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6">
        <h1 className="display text-4xl font-bold text-ink sm:text-5xl">{t.title}</h1>
        <p className="mt-2 text-lg text-ink/60">{t.subtitle}</p>
        <p className="mt-4 font-mono text-sm uppercase tracking-widest text-clay">{t.date}</p>
        
        <div className="mt-12 space-y-12">
          {t.sections.map((sec, i) => (
            <section key={i}>
              <h2 className="display mb-4 text-2xl font-semibold text-ink">{sec.title}</h2>
              <div className="space-y-3 text-[0.95rem] leading-relaxed text-ink/80">
                {sec.body.map((paragraph, j) => {
                  if (paragraph.includes("Aviso de Privacidad de la Empresa.") || paragraph.includes("Company's Privacy Policy.")) {
                    return (
                      <p key={j}>
                        {lang === "es" ? "El tratamiento de los datos personales que el Cliente facilite a través del sitio se rige por el " : "The processing of personal data provided by the Client is governed by the "}
                        <Link href="/privacidad" className="font-medium text-clay underline underline-offset-4">
                          {lang === "es" ? "Aviso de Privacidad de la Empresa." : "Company's Privacy Policy."}
                        </Link>
                      </p>
                    )
                  }
                  return <p key={j}>{paragraph}</p>
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}