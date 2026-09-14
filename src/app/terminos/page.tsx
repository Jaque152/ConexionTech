"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function TerminosPage() {
  const { lang } = useLanguage();

  const content = {
    es: {
      title: "Términos y Condiciones",
      subtitle: "DIMMER POWER SHOPS, S.A DE C.V.",
      date: "Fecha de entrada en vigor: Septiembre de 2026",
      sections: [
        {
          title: "A. Marco general del servicio",
          body: [
            "La prestación de los servicios descritos en este sitio web corre a cargo de DIMMER POWER SHOPS, S.A DE C.V. (en adelante, “la Empresa”), con domicilio en Av. Chapultepec N°480 Piso 9 Dep. 901, Col. Roma Norte, C.P. 06700, Alcaldía Cuauhtémoc Ciudad de México.",
            "El uso del sitio conexiontech.com.mx y la contratación de cualquiera de los planes o proyectos digitales implica que el usuario (el “Cliente”) ha leído, comprende y acepta íntegramente estos Términos y Condiciones.",
            "Para consultas, aclaraciones o soporte, el Cliente puede contactar a la Empresa en el correo hola@conexiontech.com.mx y en el teléfono [+52] 1 55 5088 5510."
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
            "El Cliente se compromete a utilizar el sitio solo con fines lícitos y para contratar servicios digitales relacionados con la presencia en internet, diseño web, comercio electrónico o proyectos afines. No se permite el uso del sitio para actividades fraudulentas, ilícitas o que vulneren derechos de terceros."
          ]
        },
        {
          title: "D. Información de planes, alcances y precios",
          body: [
            "En el sitio se describen los distintos planes y servicios, incluyendo, entre otros, los siguientes ejemplos:",
            "• Planes de landing page y presencia básica (Landing Page Emprendedor, Presencia Digital Básica).",
            "• Planes de sitio web profesional y empresarial (Sitio Web Profesional, Web Empresarial, Web Corporativo Premium).",
            "• Planes de tienda en línea y ecommerce (Tienda en Línea Básica, Ecommerce Profesional, Ecommerce Avanzado).",
            "• Planes específicos para sectores (Plataforma de Cursos Online, Portal Inmobiliario, Portal de Empleo, Web para Restaurantes, Web para Profesionistas).",
            "• Planes combinados de marca + sitio web (Identidad Digital Emprendedor, Marca + Sitio Web Profesional, Branding + Web Empresarial).",
            "• Proyectos digitales a la medida, que se cotizan individualmente.",
            "Para cada plan se indica un precio en pesos mexicanos (MXN) al que debe añadirse el Impuesto al Valor Agregado (IVA) correspondiente, salvo que se señale expresamente que el precio ya incluye impuestos.",
            "Las descripciones de los planes (número de páginas, tipo de diseño, SEO inicial, integración con pasarelas de pago, panel administrador, cupón de descuento, integración con CRM, formularios, estadísticas, etc.) definen el alcance estándar del servicio. Cualquier funcionalidad, integración o desarrollo que exceda lo listado se considerará trabajo adicional y será objeto de cotización independiente.",
            "La Empresa puede actualizar en cualquier momento el catálogo de planes, sus características, precios y promociones, sin afectar los servicios ya contratados bajo condiciones previamente aceptadas."
          ]
        },
        {
          title: "E. Flujo de contratación y aceptación",
          body: [
            "El proceso general de contratación a través del sitio suele seguir estas etapas:",
            "• Paso 1: El Cliente revisa los planes disponibles o la opción de proyecto a la medida.",
            "• Paso 2: El Cliente selecciona un plan o solicita un proyecto personalizado, llenando el formulario correspondiente o utilizando los botones de “contactar” o “pagar”.",
            "• Paso 3: El sitio muestra el resumen del servicio, precio, impuestos aplicables y, en su caso, opciones de pago en línea.",
            "• Paso 4: El Cliente proporciona los datos necesarios de contacto y facturación y, en los casos de pago en línea, procede a realizar el pago mediante la pasarela indicada.",
            "• Paso 5: La Empresa confirma por correo electrónico la recepción del pago o, tratándose de proyectos a la medida, envía una propuesta formal con alcance, costo y tiempos de entrega, que el Cliente deberá aprobar expresamente.",
            "La aceptación del presupuesto, plan o propuesta —ya sea mediante pago, firma electrónica, correo de confirmación o cualquier otro medio de aceptación inequívoca— implica la conformidad del Cliente con estos Términos y Condiciones y con las condiciones particulares del servicio elegido."
          ]
        },
        {
          title: "F. Pagos, formas de cobro y agregador de pagos",
          body: [
            "Los importes de los planes y proyectos pueden cobrarse como pago único o bajo esquemas acordados caso por caso (por ejemplo, anticipo y saldo a la entrega), según se señale en el sitio o en la propuesta enviada al Cliente.",
            "En el sitio, cuando se habilita el pago en línea, los cargos se procesan a través de un agregador de pagos autorizado, que permite pagar con (i) tarjetas de crédito, y (ii) tarjetas de débito emitidas por instituciones financieras autorizadas.",
            "La Empresa no procesa directamente los datos completos de la tarjeta; dicha información se gestiona en la plataforma del agregador de pagos, sujeta a sus propios términos y políticas de seguridad y privacidad.",
            "El Cliente se obliga a cubrir puntualmente los importes pactados. En caso de falta de pago, pago incompleto o contracargos injustificados, la Empresa podrá suspender el desarrollo, pausar entregas, negar el acceso a paneles administrativos o, en su caso, retirar temporalmente el sitio publicado hasta que se regularice la situación."
          ]
        },
        {
          title: "G. Entrega de los servicios digitales",
          body: [
            "La entrega de los servicios puede adoptar alguna de las siguientes modalidades, según el plan contratado:",
            "• Publicación del sitio o tienda en el servidor del Cliente (cuando éste proporciona hosting y dominio).",
            "• Entrega de archivos y/o acceso a plataforma, con instrucciones para su publicación.",
            "• Puesta en marcha de plataformas específicas (LMS, portales, ecommerce) en la infraestructura acordada.",
            "• En el caso de identidad de marca, entrega de logotipos, paleta de color, tipografías y demás elementos en archivos digitales.",
            "Los plazos de entrega son estimados y se indican, en su caso, en la propuesta o comunicación específica del proyecto. Dichos plazos pueden verse afectados por:",
            "• Tiempos de aprobación de diseños por parte del Cliente.",
            "• Tiempos de entrega de contenidos, textos, imágenes o recursos que el Cliente deba proporcionar.",
            "• Cambios solicitados sobre diseños ya aprobados.",
            "• Factores técnicos o de fuerza mayor.",
            "La Empresa no será responsable por retrasos derivados de la falta de respuesta o de material por parte del Cliente."
          ]
        },
        {
          title: "H. Responsabilidades del Cliente durante el proyecto",
          body: [
            "El Cliente se compromete a:",
            "• Proporcionar información veraz y completa sobre su negocio, productos o servicios para que el desarrollo refleje adecuadamente su actividad.",
            "• Entregar en tiempo los textos, imágenes, logotipos, videos u otros contenidos que se hayan acordado que serán aportados por él.",
            "• Asegurarse de contar con los derechos de uso sobre todo material que facilite (fotos, marcas, textos, bases de datos, etc.) y sacar en paz y a salvo a la Empresa frente a cualquier reclamación de terceros por uso no autorizado de dicho contenido.",
            "El Cliente es responsable de revisar y aprobar las propuestas de diseño y los avances entregados. Cambios significativos solicitados después de haber dado su aprobación podrán implicar costos adicionales y ajustes en los tiempos de entrega."
          ]
        },
        {
          title: "I. Alcance, cambios y trabajo adicional",
          body: [
            "Cada plan incluye un conjunto definido de entregables (número de páginas, funcionalidades, secciones, integraciones, SEO inicial, etc.). Cuando el Cliente requiera funcionalidades adicionales (por ejemplo, más productos de los contemplados, integraciones especiales, módulos a medida o rediseños profundos), la Empresa emitirá una cotización adicional que deberá ser aceptada por el Cliente antes de realizarse el trabajo.",
            "Pequeños ajustes o correcciones dentro de lo razonable podrán estar incluidos; sin embargo, rondas adicionales de cambios o solicitudes que alteren sustancialmente el diseño o la estructura inicialmente aprobados podrán considerarse fuera de alcance y generar cargos extra."
          ]
        },
        {
          title: "J. Uso, mantenimiento y soporte posterior",
          body: [
            "Salvo que se haya contratado expresamente un servicio de mantenimiento o soporte continuo, la obligación principal de la Empresa se limita al desarrollo y entrega del sitio, tienda o plataforma conforme a las especificaciones del plan o propuesta.",
            "Servicios posteriores como: Actualización de contenidos, Cambios frecuentes en secciones, Mantenimiento técnico de CMS, plugins o componentes, Soporte para problemas derivados de manipulaciones hechas por el Cliente o por terceros. Se considerarán servicios independientes y requerirán un acuerdo adicional de alcance y honorarios."
          ]
        },
        {
          title: "K. Propiedad intelectual y licencias",
          body: [
            "Salvo pacto diferente, una vez liquidado el servicio contratado, el Cliente adquiere el derecho de uso sobre el sitio web, tienda o plataforma desarrollada, así como sobre los materiales de identidad de marca creados específicamente para su proyecto.",
            "No obstante, la Empresa podrá conservar derechos sobre frameworks, plantillas, código reutilizable, librerías, metodologías y otros componentes preexistentes que haya utilizado para la implementación, manteniendo una licencia de uso a favor del Cliente en los términos razonablemente necesarios para la operación del proyecto.",
            "El Cliente autoriza a la Empresa a incluir referencias visuales o menciones de los proyectos desarrollados (capturas, logo, nombre comercial) en su portafolio, sitio web o materiales comerciales, salvo que se acuerde por escrito lo contrario."
          ]
        },
        {
          title: "L. Datos personales y confidencialidad",
          body: [
            "El tratamiento de los datos personales que el Cliente facilite a través del sitio se rige por el Aviso de Privacidad de la Empresa.",
            "La Empresa y el Cliente se obligan a mantener la confidencialidad de la información técnica, comercial o estratégica que llegue a su conocimiento con motivo de la relación contractual, salvo obligación legal de revelarla o autorización expresa de la parte que sea titular de la información."
          ]
        },
        {
          title: "M. Cancelaciones, reembolsos y proyectos a la medida",
          body: [
            "Las reglas sobre cancelaciones, reembolsos parciales y devoluciones de pagos se detallan en la Política de Reembolsos y Devoluciones de la Empresa, que se considerará parte integrante de estos Términos y se encontrará disponible en el sitio web.",
            "En el caso de proyectos a la medida o desarrollos con alto grado de personalización, los pagos de anticipos y avances suelen destinarse al trabajo ya ejecutado; en consecuencia, los montos reembolsables —si los hay— se determinarán con base en la etapa del proyecto, el esfuerzo invertido y lo que marque dicha política específica."
          ]
        },
        {
          title: "N. Limitación de responsabilidad",
          body: [
            "La Empresa no garantiza resultados comerciales específicos (ventas, posicionamiento exacto en buscadores, número de visitas, número de registros, etc.), ya que estos dependen de múltiples factores ajenos a su control, como el modelo de negocio del Cliente, la competencia, la inversión publicitaria y el comportamiento del mercado.",
            "En la máxima medida permitida por la ley, la responsabilidad total de la Empresa frente al Cliente derivada de un servicio concreto se limitará al monto efectivamente pagado por dicho servicio, sin incluir conceptos de daños indirectos, pérdida de datos, lucro cesante o daños consecuenciales."
          ]
        },
        {
          title: "O. Modificaciones de los Términos",
          body: [
            "La Empresa puede actualizar estos Términos y Condiciones en cualquier momento. La versión vigente estará siempre disponible en el sitio web y se indicará la fecha de la última modificación.",
            "Las contrataciones realizadas con anterioridad se regirán por las condiciones vigentes al momento de su aceptación; el uso continuado del sitio y la contratación de nuevos servicios después de la publicación de una versión actualizada implican la aceptación de dichos cambios."
          ]
        },
        {
          title: "P. Ley aplicable y jurisdicción",
          body: [
            "Estos Términos y Condiciones se interpretan y aplican de conformidad con las leyes de los Estados Unidos Mexicanos.",
            "Para cualquier controversia derivada de la prestación de servicios digitales a través del sitio, la Empresa y el Cliente se someten a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando a cualquier otro fuero que pudiera corresponderles por razón de su domicilio presente o futuro."
          ]
        }
      ]
    },
    en: {
      title: "Terms and Conditions",
      subtitle: "DIMMER POWER SHOPS, S.A DE C.V.",
      date: "Effective date: September 2026",
      sections: [
        {
          title: "A. General Service Framework",
          body: [
            "The provision of services described on this website is carried out by DIMMER POWER SHOPS, S.A DE C.V. (hereinafter, “the Company”), located at Av. Chapultepec N°480 Piso 9 Dep. 901, Col. Roma Norte, C.P. 06700, Alcaldía Cuauhtémoc, Mexico City.",
            "The use of the website conexiontech.com.mx and the contracting of any of the digital plans or projects implies that the user (the “Client”) has read, understands, and fully accepts these Terms and Conditions.",
            "For inquiries, clarifications, or support, the Client may contact the Company at hola@conexiontech.com.mx and by phone at [+52] 1 55 5088 5510."
          ]
        },
        {
          title: "B. Nature of the Services",
          body: [
            "The Company offers, by way of illustration, web design and development services, online store implementation, specialized platforms (LMS, real estate portals, job portals), as well as digital identity, SEO, and digital marketing solutions.",
            "Services are primarily commercialized through predefined plans (e.g., Entrepreneur Landing Page Plan, Professional Website Plan, Advanced Ecommerce Plan, Online Course Platform Plan, Restaurant Web Plan, Professional Web Plan, Branding + Web Plans, etc.) and custom digital projects quoted on a case-by-case basis.",
            "Unless expressly stated otherwise, all services are provided 100% online, and delivery consists of the launch of the site/platform or the delivery of corresponding digital files (e.g., logos in PNG/JPG/vector formats)."
          ]
        },
        {
          title: "C. Target Audience of the Site",
          body: [
            "The site is exclusively aimed at adults of legal age with the legal capacity to contract under Mexican law, either personally or as representatives of companies or businesses.",
            "The Client agrees to use the site only for lawful purposes and to contract digital services related to internet presence, web design, e-commerce, or related projects. The use of the site for fraudulent, illegal activities, or activities that violate the rights of third parties is not permitted."
          ]
        },
        {
          title: "D. Plan Information, Scope, and Pricing",
          body: [
            "The site describes the various plans and services, including, among others:",
            "• Landing page and basic presence plans (Entrepreneur Landing Page, Basic Digital Presence).",
            "• Professional and corporate website plans (Professional Website, Corporate Web, Premium Corporate Web).",
            "• Online store and e-commerce plans (Basic Online Store, Professional Ecommerce, Advanced Ecommerce).",
            "• Industry-specific plans (Online Course Platform, Real Estate Portal, Job Portal, Restaurant Web, Professional Web).",
            "• Combined brand + website plans (Entrepreneur Digital Identity, Brand + Professional Website, Corporate Branding + Web).",
            "• Custom digital projects, quoted individually.",
            "For each plan, a price is indicated in Mexican pesos (MXN) to which the corresponding Value Added Tax (IVA) must be added, unless expressly stated that the price includes taxes.",
            "Plan descriptions (number of pages, design type, initial SEO, payment gateway integration, admin panel, discount coupons, CRM integration, forms, statistics, etc.) define the standard scope of service. Any functionality, integration, or development exceeding the listed items will be considered additional work and subject to independent quotation.",
            "The Company may update the plan catalog, features, pricing, and promotions at any time, without affecting previously contracted services under accepted conditions."
          ]
        },
        {
          title: "E. Contracting and Acceptance Flow",
          body: [
            "The general contracting process through the site typically follows these stages:",
            "• Step 1: The Client reviews available plans or custom project options.",
            "• Step 2: The Client selects a plan or requests a customized project, filling out the corresponding form or using the 'contact' or 'pay' buttons.",
            "• Step 3: The site displays a service summary, price, applicable taxes, and payment options.",
            "• Step 4: The Client provides necessary contact and billing details and, in cases of online payment, proceeds with payment through the indicated gateway.",
            "• Step 5: The Company confirms payment receipt via email or, in the case of custom projects, sends a formal proposal with scope, cost, and delivery times, which the Client must expressly approve.",
            "Acceptance of the budget, plan, or proposal—whether through payment, electronic signature, confirmation email, or any other unequivocal means of acceptance—implies the Client's agreement with these Terms and Conditions and the specific conditions of the chosen service."
          ]
        },
        {
          title: "F. Payments, Billing Methods, and Payment Aggregator",
          body: [
            "Plan and project amounts may be charged as a single payment or under agreed-upon schemes on a case-by-case basis (e.g., upfront payment and balance upon delivery), as indicated on the site or in the proposal sent to the Client.",
            "On the site, when online payment is enabled, charges are processed through an authorized payment aggregator that allows payments with (i) credit cards, and (ii) debit cards issued by authorized financial institutions.",
            "The Company does not directly process full card details; this info is managed by the payment aggregator's platform, subject to its own terms, security, and privacy policies.",
            "The Client is obligated to punctually cover the agreed amounts. In the event of non-payment, incomplete payment, or unjustified chargebacks, the Company may suspend development, pause deliveries, deny access to administrative panels, or, if applicable, temporarily take down the published site until the situation is resolved."
          ]
        },
        {
          title: "G. Delivery of Digital Services",
          body: [
            "Delivery may take any of the following forms, depending on the contracted plan:",
            "• Publishing the site or store on the Client's server (when the Client provides hosting and domain).",
            "• Delivery of files and/or platform access, with instructions for publication.",
            "• Launch of specific platforms (LMS, portals, ecommerce) on the agreed infrastructure.",
            "• For brand identity, delivery of logos, color palettes, typography, and other elements in digital files.",
            "Delivery times are estimated and are indicated, where applicable, in the project proposal or specific communication. These timelines may be affected by:",
            "• Client design approval times.",
            "• Delivery times for content, texts, images, or resources that the Client must provide.",
            "• Requested changes to already approved designs.",
            "• Technical or force majeure factors.",
            "The Company is not liable for delays caused by the Client's lack of response or materials."
          ]
        },
        {
          title: "H. Client Responsibilities During the Project",
          body: [
            "The Client agrees to:",
            "• Provide truthful and complete information about their business, products, or services so the development accurately reflects their activity.",
            "• Deliver on time the texts, images, logos, videos, or other contents agreed to be provided by them.",
            "• Ensure they hold usage rights for all provided materials (photos, trademarks, texts, databases, etc.) and indemnify the Company against any third-party claims for unauthorized use of such content.",
            "The Client is responsible for reviewing and approving design proposals and delivered progress. Significant changes requested after giving approval may incur additional costs and timeline adjustments."
          ]
        },
        {
          title: "I. Scope, Changes, and Additional Work",
          body: [
            "Each plan includes a defined set of deliverables (number of pages, functionalities, sections, integrations, initial SEO, etc.). When the Client requires additional functionalities (e.g., more products than contemplated, special integrations, custom modules, or deep redesigns), the Company will issue an additional quote that must be accepted by the Client before the work is carried out.",
            "Minor reasonable adjustments or corrections may be included; however, additional revision rounds or requests that substantially alter the initially approved design or structure may be considered out of scope and generate extra charges."
          ]
        },
        {
          title: "J. Post-Delivery Use, Maintenance, and Support",
          body: [
            "Unless a continuous maintenance or support service has been expressly contracted, the Company's primary obligation is limited to the development and delivery of the site, store, or platform according to the plan's or proposal's specifications.",
            "Subsequent services such as: Content updates, Frequent section changes, CMS, plugins or components technical maintenance, Support for problems derived from manipulation by the Client or third parties. These will be considered independent services and will require an additional scope and fee agreement."
          ]
        },
        {
          title: "K. Intellectual Property and Licenses",
          body: [
            "Unless otherwise agreed, once the service is fully paid, the Client acquires usage rights over the developed site, store, or platform, as well as over the brand identity materials created specifically for their project.",
            "However, the Company retains rights over pre-existing frameworks, templates, reusable code, libraries, methodologies, and other components used for implementation, granting the Client a usage license under reasonably necessary terms for the project's operation.",
            "The Client authorizes the Company to include visual references or mentions of the developed projects (screenshots, logo, trade name) in its portfolio, website, or commercial materials, unless agreed otherwise in writing."
          ]
        },
        {
          title: "L. Personal Data and Confidentiality",
          body: [
            "The processing of personal data provided by the Client through the site is governed by the Company's Privacy Policy.",
            "The Company and the Client agree to maintain the confidentiality of technical, commercial, or strategic information learned due to the contractual relationship, except for a legal obligation to disclose it or express authorization from the party owning the information."
          ]
        },
        {
          title: "M. Cancellations, Refunds, and Custom Projects",
          body: [
            "Rules regarding cancellations, partial refunds, and payment returns are detailed in the Company's Refunds and Cancellations Policy, which is considered an integral part of these Terms and will be available on the website.",
            "In the case of custom projects or highly customized developments, advance and progress payments generally go towards work already executed; consequently, refundable amounts—if any—will be determined based on the project's stage, invested effort, and what the specific policy dictates."
          ]
        },
        {
          title: "N. Limitation of Liability",
          body: [
            "The Company does not guarantee specific commercial results (sales, exact search engine ranking, number of visits, number of registrations, etc.), as these depend on multiple factors beyond its control, such as the Client's business model, competition, advertising investment, and market behavior.",
            "To the maximum extent permitted by law, the Company's total liability to the Client derived from a specific service is limited to the amount effectively paid for that service, excluding indirect damages, loss of data, loss of profit, or consequential damages."
          ]
        },
        {
          title: "O. Modifications to Terms",
          body: [
            "The Company may update these Terms and Conditions at any time. The current version will always be available on the website, and the date of the last modification will be indicated.",
            "Prior contracts will be governed by the conditions active at the time of their acceptance; continued use of the site and the contracting of new services after a new version's publication implies acceptance of such changes."
          ]
        },
        {
          title: "P. Governing Law and Jurisdiction",
          body: [
            "These Terms and Conditions are interpreted and enforced in accordance with the laws of the United Mexican States.",
            "For any controversy derived from the provision of digital services through the site, the Company and the Client submit to the jurisdiction of the competent courts of Mexico City, waiving any other jurisdiction that may correspond to them by reason of their present or future domicile."
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
        <p className="mt-4 font-mono text-sm uppercase tracking-widest text-sky-500">
          {t.subtitle}
        </p>
        <p className="mt-2 font-mono text-xs uppercase tracking-widest text-slate-500">
          {t.date}
        </p>
        
        <div className="mt-12 space-y-12">
          {t.sections.map((sec, i) => (
            <section key={i} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-sm">
              <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-sky-400">
                {sec.title}
              </h2>
              <div className="space-y-4 font-mono text-[0.85rem] leading-relaxed text-slate-400">
                {sec.body.map((paragraph, j) => {
                  if (paragraph.includes("Aviso de Privacidad de la Empresa.") || paragraph.includes("Company's Privacy Policy.")) {
                    return (
                      <p key={j}>
                        {lang === "es" ? "El tratamiento de los datos personales que el Cliente facilite a través del sitio se rige por el " : "The processing of personal data provided by the Client through the site is governed by the "}
                        <Link href="/privacidad" className="font-medium text-sky-400 underline underline-offset-4 hover:text-sky-300">
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