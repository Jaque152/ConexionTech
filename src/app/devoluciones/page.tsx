"use client";

import { useLanguage } from "@/lib/language-context";

export default function DevolucionesPage() {
  const { lang } = useLanguage();

  const content = {
    es: {
      title: "Política de Reembolsos y Cancelaciones",
      subtitle: "HERMITAGETECH ENTERPRISES, S.A.P.I. DE C.V.",
      date: "Fecha de última actualización: Septiembre de 2026",
      intro: "Esta política aplica a todos los planes y proyectos digitales contratados a través de conexiontech.com.mx con la Empresa, incluyendo, pero no limitado a: planes de sitios web, tiendas en línea, plataformas especializadas, planes de branding + web y proyectos digitales a la medida.",
      sections: [
        {
          title: "A. Naturaleza de los servicios y consideraciones generales",
          body: [
            "Los servicios que ofrece la Empresa son de carácter digital y personalizado. Cada proyecto implica dedicación de horas de análisis, diseño, desarrollo y comunicación específica con el Cliente. Por esta razón, los pagos que se realizan se destinan de forma directa al trabajo profesional que se va ejecutando."
          ]
        },
        {
          title: "B. Cancelaciones antes de iniciar el proyecto",
          body: [
            "Se considera que un proyecto “no ha iniciado” cuando:",
            "• El Cliente ha realizado el pago, pero aún no ha enviado información mínima (brief, contenidos, referencias) ni se ha agendado reunión de arranque, y",
            "• La Empresa no ha comenzado a trabajar en propuestas, estructuras o configuraciones técnicas.",
            "Si el Cliente solicita cancelar en esta etapa inicial, la Empresa podrá evaluar el caso y, de manera excepcional, ofrecer la devolución parcial o total del monto pagado. El porcentaje de reembolso se definirá considerando comisiones financieras, costos administrativos y cualquier trabajo preliminar realizado."
          ]
        },
        {
          title: "C. Cancelaciones una vez iniciado el trabajo",
          body: [
            "Se entiende que el proyecto “ha iniciado” desde el momento en que la Empresa:",
            "• Ha enviado primera propuesta de diseño, estructura o wireframe, o",
            "• Ha configurado un entorno de prueba, CMS, plantilla o plataforma, o",
            "• Ha dedicado horas de trabajo a la revisión de requisitos, arquitectura del sitio o desarrollo técnico.",
            "Si el Cliente decide cancelar después de iniciado el trabajo, los pagos realizados se consideran no reembolsables, salvo que la Empresa, de forma discrecional, determine un reembolso parcial tomando en cuenta el porcentaje de avance efectivamente desarrollado.",
            "En todo caso, el Cliente será informado del estado del proyecto y del valor aproximado del trabajo ya ejecutado."
          ]
        },
        {
          title: "D. Planes estándar vs. proyectos a la medida",
          body: [
            "• En planes estándar (por ejemplo: Plan Landing Page Emprendedor, Plan Presencia Digital Básica, Plan Sitio Web Profesional, Plan Tienda en Línea Básica, etc.), la Empresa podrá, en algunos casos, ofrecer reembolsos parciales si la cancelación ocurre en fases muy tempranas y el trabajo avanzado es limitado.",
            "• En proyectos a la medida o desarrollos con alto grado de personalización, los importes de anticipo suelen corresponder casi en su totalidad al tiempo de análisis y diseño inicial; por ello, como regla general, dichos anticipos no son reembolsables una vez iniciado el trabajo.",
            "Cualquier excepción será valorada caso por caso y comunicada por escrito al Cliente."
          ]
        },
        {
          title: "E. Cambios de plan o reajustes de alcance",
          body: [
            "Si el Cliente desea cambiar de plan (por ejemplo, de un plan básico a uno superior) antes de que se haya comenzado el trabajo, el importe ya pagado puede aplicarse como saldo a favor para el nuevo plan, ajustando la diferencia de precio.",
            "Si el cambio de plan se solicita después de iniciado el proyecto, la Empresa revisará el avance y determinará si:",
            "• El trabajo realizado es compatible con el nuevo plan y solo requiere un ajuste de precio, o",
            "• Se trata prácticamente de un proyecto distinto, en cuyo caso se cotizará como un nuevo servicio."
          ]
        },
        {
          title: "F. Reembolsos por errores imputables a la Empresa",
          body: [
            "Si, por una causa directamente atribuible a la Empresa, no fuera posible entregar el servicio contratado en los términos básicos acordados (por ejemplo, imposibilidad técnica no prevista y no imputable al Cliente), la Empresa se compromete a llegar a un acuerdo de reembolso parcial o total, considerando el trabajo aprovechable que se haya generado (diseños, estructuras, contenidos) y que el Cliente pueda utilizar.",
            "Este tipo de casos se analizarán individualmente, con el objetivo de alcanzar una solución justa para ambas partes."
          ]
        },
        {
          title: "G. No hay reembolsos por factores fuera del control de la Empresa",
          body: [
            "No procederán reembolsos cuando la imposibilidad de avanzar o concluir el proyecto se deba a circunstancias ajenas a la Empresa, por ejemplo:",
            "• Falta de entrega de información, contenidos o respuestas por parte del Cliente.",
            "• Problemas con proveedores externos contratados directamente por el Cliente (hosting, dominios, correos, pasarelas de pago ajenas).",
            "• Cambios de estrategia del Cliente, pérdida de interés en el proyecto, cierre de negocio u otros motivos internos del Cliente.",
            "En estos supuestos, los pagos realizados se consideran honorarios por el tiempo y trabajo efectivamente disponibles, aunque el proyecto no llegue a publicarse."
          ]
        },
        {
          title: "H. Reembolsos parciales y forma de pago del reembolso",
          body: [
            "Cuando aplique un reembolso (total o parcial), éste se realizará preferentemente utilizando el mismo medio de pago empleado por el Cliente, es decir, a través de la pasarela o agregador de pagos y la tarjeta asociada, salvo que por razones técnicas sea necesario acordar otro medio.",
            "El tiempo que tarde en reflejarse el importe dependerá de los procesos internos de la institución bancaria y de la plataforma de cobro. La Empresa notificará al Cliente por correo electrónico una vez que haya iniciado el proceso de reembolso."
          ]
        },
        {
          title: "I. Servicios complementarios y renovaciones",
          body: [
            "Servicios como mantenimiento mensual, campañas de anuncios, gestión de contenidos, alojamiento o renovaciones anuales (cuando sean ofrecidos por la Empresa) se cobran normalmente por periodos definidos.",
            "Los montos pagados por periodos ya iniciados no serán reembolsables, salvo que se indique expresamente lo contrario en la oferta específica del servicio."
          ]
        },
        {
          title: "J. Procedimiento para solicitar cancelación o reembolso",
          body: [
            "Para solicitar una cancelación o plantear un posible reembolso, el Cliente deberá escribir a hola@conexiontech.com.mx indicando:",
            "• Nombre o razón social.",
            "• Número de proyecto o referencia del plan contratado.",
            "• Fecha de contratación y forma de pago.",
            "• Breve explicación del motivo de la cancelación o inconformidad.",
            "La Empresa analizará la solicitud, revisará el estado del proyecto y comunicará al Cliente, por escrito, la resolución y, en su caso, el monto y forma del reembolso que proceda, si alguno."
          ]
        },
        {
          title: "K. Relación con otras políticas y marco legal",
          body: [
            "Esta Política de Reembolsos y Cancelaciones complementa los Términos y Condiciones de Servicio Digital y no limita los derechos que correspondan al Cliente conforme a la legislación mexicana aplicable en materia de prestación de servicios y comercio electrónico.",
            "En caso de discrepancia entre esta Política y alguna condición particular acordada por escrito con el Cliente (por ejemplo, en una propuesta o contrato específico), prevalecerá lo que se haya pactado de manera expresa para ese proyecto."
          ]
        }
      ]
    },
    en: {
      title: "Refunds and Cancellations Policy",
      subtitle: "HERMITAGETECH ENTERPRISES, S.A.P.I. DE C.V.",
      date: "Last updated: September 2026",
      intro: "This policy applies to all digital plans and projects contracted through conexiontech.com.mx with the Company, including, but not limited to: website plans, online stores, specialized platforms, branding + web plans, and custom digital projects.",
      sections: [
        {
          title: "A. Nature of services and general considerations",
          body: [
            "The services offered by the Company are of a digital and personalized nature. Each project implies dedication of hours of analysis, design, development, and specific communication with the Client. For this reason, the payments made are directly allocated to the professional work that is being executed."
          ]
        },
        {
          title: "B. Cancellations before starting the project",
          body: [
            "A project is considered “not started” when:",
            "• The Client has made the payment, but has not yet sent minimum information (brief, content, references) nor scheduled a kickoff meeting, and",
            "• The Company has not started working on proposals, structures, or technical configurations.",
            "If the Client requests to cancel in this initial stage, the Company will be able to evaluate the case and, exceptionally, offer a partial or total refund of the amount paid. The refund percentage will be defined considering financial commissions, administrative costs, and any preliminary work carried out."
          ]
        },
        {
          title: "C. Cancellations once the work has started",
          body: [
            "It is understood that the project “has started” from the moment the Company:",
            "• Has sent the first design proposal, structure, or wireframe, or",
            "• Has configured a test environment, CMS, template, or platform, or",
            "• Has dedicated work hours to reviewing requirements, site architecture, or technical development.",
            "If the Client decides to cancel after the work has started, the payments made are considered non-refundable, unless the Company, at its discretion, determines a partial refund taking into account the percentage of progress effectively developed.",
            "In any case, the Client will be informed of the project status and the approximate value of the work already executed."
          ]
        },
        {
          title: "D. Standard plans vs. custom projects",
          body: [
            "• In standard plans (e.g.: Entrepreneur Landing Page Plan, Basic Digital Presence Plan, Professional Website Plan, Basic Online Store Plan, etc.), the Company may, in some cases, offer partial refunds if the cancellation occurs in very early phases and the advanced work is limited.",
            "• In custom projects or highly customized developments, advance payments usually correspond almost entirely to the initial analysis and design time; therefore, as a general rule, such advances are non-refundable once the work has started.",
            "Any exception will be evaluated on a case-by-case basis and communicated in writing to the Client."
          ]
        },
        {
          title: "E. Plan changes or scope readjustments",
          body: [
            "If the Client wishes to change the plan (for example, from a basic plan to a higher one) before the work has started, the amount already paid can be applied as a positive balance for the new plan, adjusting the price difference.",
            "If the plan change is requested after the project has started, the Company will review the progress and determine if:",
            "• The work done is compatible with the new plan and only requires a price adjustment, or",
            "• It is practically a different project, in which case it will be quoted as a new service."
          ]
        },
        {
          title: "F. Refunds due to errors attributable to the Company",
          body: [
            "If, due to a cause directly attributable to the Company, it is not possible to deliver the contracted service under the agreed basic terms (for example, unforeseen technical impossibility not attributable to the Client), the Company commits to reaching a partial or total refund agreement, considering the usable work generated (designs, structures, content) that the Client can use.",
            "These types of cases will be analyzed individually, with the aim of reaching a fair solution for both parties."
          ]
        },
        {
          title: "G. No refunds for factors beyond the Company's control",
          body: [
            "Refunds will not proceed when the inability to advance or conclude the project is due to circumstances beyond the Company's control, for example:",
            "• Failure to deliver information, content, or responses by the Client.",
            "• Problems with external providers hired directly by the Client (hosting, domains, emails, third-party payment gateways).",
            "• Client's strategy changes, loss of interest in the project, business closure, or other internal reasons of the Client.",
            "In these cases, the payments made are considered fees for the time and work effectively available, even if the project is never published."
          ]
        },
        {
          title: "H. Partial refunds and refund payment method",
          body: [
            "When a refund applies (total or partial), it will preferably be made using the same payment method used by the Client, that is, through the payment gateway or aggregator and the associated card, unless for technical reasons it is necessary to agree on another method.",
            "The time it takes for the amount to reflect will depend on the internal processes of the banking institution and the collection platform. The Company will notify the Client by email once the refund process has started."
          ]
        },
        {
          title: "I. Complementary services and renewals",
          body: [
            "Services such as monthly maintenance, ad campaigns, content management, hosting, or annual renewals (when offered by the Company) are normally charged for defined periods.",
            "Amounts paid for periods already started will not be refundable, unless expressly indicated otherwise in the specific service offer."
          ]
        },
        {
          title: "J. Procedure to request cancellation or refund",
          body: [
            "To request a cancellation or raise a possible refund, the Client must write to hola@conexiontech.com.mx indicating:",
            "• Name or business name.",
            "• Project number or reference of the contracted plan.",
            "• Date of contracting and payment method.",
            "• Brief explanation of the reason for cancellation or non-conformity.",
            "The Company will analyze the request, review the project status, and communicate to the Client, in writing, the resolution and, where appropriate, the amount and form of the refund that applies, if any."
          ]
        },
        {
          title: "K. Relationship with other policies and legal framework",
          body: [
            "This Refunds and Cancellations Policy complements the Digital Service Terms and Conditions and does not limit the rights corresponding to the Client under the applicable Mexican legislation regarding the provision of services and electronic commerce.",
            "In the event of a discrepancy between this Policy and any specific condition agreed in writing with the Client (for example, in a specific proposal or contract), what was expressly agreed for that project will prevail."
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
          SYS_LOG: {t.date}
        </p>
        <p className="mt-8 font-mono text-sm leading-relaxed text-slate-400 border-l-2 border-slate-800 pl-4">
          {t.intro}
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