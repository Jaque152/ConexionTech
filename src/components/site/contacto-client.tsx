"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function ContactoClient() {
  const { t } = useLanguage();

  const DETAILS = [
    { icon: Phone, label: t.contactPage.detailsLabelPhone, value: "+52 55 9826 1186", href: "tel:+525598261186" },
    { icon: Mail, label: t.contactPage.detailsLabelEmail, value: "hola@growthive.com.mx", href: "mailto:hola@growthive.com.mx" },
    {
      icon: MapPin,
      label: t.contactPage.detailsLabelAddress,
      value: "Boulevard Adolfo López Mateos 2165, Interior 607A Oficina 607A-B Piso 6, Colonia Los Alpes, Alcaldía Álvaro Obregón, C.P. 01010, Ciudad de México",
      href: "#",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -left-32 top-[-10%] h-[460px] w-[460px] rounded-full bg-clay/12 blur-[120px]" />
        <div className="absolute right-[-12%] top-1/2 h-[420px] w-[420px] rounded-full bg-ochre/12 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-[1400px] gap-12 container-px py-14 sm:py-20 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <div className="lg:pt-6">
          <span className="eyebrow inline-flex items-center gap-2.5 text-ink/60">
            <span className="h-2 w-2 rounded-full bg-clay" />
            {t.contactPage.eyebrow}
          </span>
          <h1 className="display mt-6 text-6xl font-black uppercase leading-[0.85] text-ink sm:text-8xl">
            {t.contactPage.titlePart1}
            <span className="italic text-clay">{t.contactPage.titlePart2}</span>
          </h1>
          <p className="mt-7 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.contactPage.desc}
          </p>

          <Button asChild variant="outline" className="mt-8">
            <Link href="/personalizado">{t.contactPage.payBtn}</Link>
          </Button>

          <div className="mt-12 space-y-5 border-t border-ink/10 pt-8">
            {DETAILS.map((d) => (
              <a
                key={d.label}
                href={d.href}
                className="group flex items-center gap-4"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink transition-colors group-hover:border-clay group-hover:bg-clay group-hover:text-cream-paper">
                  <d.icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {d.label}
                  </span>
                  <span className="text-ink transition-colors group-hover:text-clay">
                    {d.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}