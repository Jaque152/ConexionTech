"use client";

import Link from "next/link";
import { Mail, MapPin, Phone, TerminalSquare } from "lucide-react";
import { ContactForm } from "@/components/site/contact-form";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function ContactoClient() {
  const { t } = useLanguage();

  const DETAILS = [
    { icon: Phone, label: t.contactPage.detailsLabelPhone, value: "+52 55 5533 2498", href: "tel:+525555332498" },
    { icon: Mail, label: t.contactPage.detailsLabelEmail, value: "hola@conexiontech.com.mx", href: "mailto:hola@conexiontech.com.mx" },
    { icon: MapPin, label: t.contactPage.detailsLabelAddress, value: "AVENIDA FLORENCIA 57, INTERIOR 103 OFICINA 103-A, COLONIA JUÁREZ, ALCALDÍA CUAUHTÉMOC, C.P. 06600, CIUDAD DE MÉXICO", href: "#" },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-slate-950">
      <div className="absolute inset-0 cyber-grid opacity-50" />

      <div className="mx-auto grid max-w-[1400px] gap-12 container-px py-16 sm:py-24 lg:grid-cols-[0.85fr_1fr] lg:gap-16 relative z-10">
        <div className="lg:pt-6">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-500 flex items-center gap-2">
            <TerminalSquare className="h-4 w-4" />
            {t.contactPage.eyebrow}
          </span>
          <h1 className="mt-6 text-5xl font-black uppercase tracking-tight text-slate-200 sm:text-7xl leading-[0.9]">
            {t.contactPage.titlePart1}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 block">
              {t.contactPage.titlePart2}
            </span>
          </h1>
          <p className="mt-7 max-w-md text-lg leading-relaxed text-slate-400 font-mono">
            {t.contactPage.desc}
          </p>

          <Button asChild variant="outline" className="mt-8 border-sky-500/50 bg-transparent text-sky-400 hover:bg-sky-500/10 font-mono tracking-widest rounded-sm">
            <Link href="/personalizado">{t.contactPage.payBtn}</Link>
          </Button>

          <div className="mt-12 space-y-6 border-t border-slate-800 pt-8">
            {DETAILS.map((d) => (
              <a key={d.label} href={d.href} className="group flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded border border-slate-800 bg-slate-900 text-sky-500 transition-colors group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-slate-950">
                  <d.icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-mono text-[0.65rem] uppercase tracking-widest text-slate-500">
                    {d.label}
                  </span>
                  <span className="text-slate-300 font-medium transition-colors group-hover:text-sky-400">
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