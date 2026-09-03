"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useLanguage } from "@/lib/language-context";

function VisaBadge() {
  return (
    <span className="grid h-8 w-12 place-items-center rounded-md bg-cream-paper">
      <span className="font-display text-sm font-black italic tracking-tight text-ink">
        VISA
      </span>
    </span>
  );
}

function MastercardBadge() {
  return (
    <span className="flex h-8 w-12 items-center justify-center gap-[-6px] rounded-md bg-cream-paper">
      <span className="h-5 w-5 rounded-full bg-clay" />
      <span className="-ml-2 h-5 w-5 rounded-full bg-ochre/90 mix-blend-multiply" />
    </span>
  );
}

export function Footer() {
  const { t } = useLanguage();

  // Rutas correspondientes al orden de tu diccionario (Privacidad, Devoluciones, Términos)
  const legalRoutes = ["/privacidad", "/terminos", "/devoluciones"];

  return (
    <footer className="ink-panel text-cream-paper">
      <div className="mx-auto max-w-[1400px] container-px">
        {/* big links */}
        <div className="grid grid-cols-1 gap-6 border-b border-cream-paper/10 py-12 sm:grid-cols-3">
          {t.footer.bigLinks.map((l: { href: string; label: string }) => (
            <Link
              key={l.href}
              href={l.href}
              className="display text-4xl font-semibold uppercase text-cream-paper/85 transition-colors hover:text-clay sm:text-5xl"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* main */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-6">
            <Logo variant="cream" />
            <div className="flex flex-col gap-2">
              {t.footer.legal.map((label: string, index: number) => (
                <Link
                  key={label}
                  href={legalRoutes[index] || "#"}
                  className="w-fit font-mono text-[0.72rem] uppercase tracking-[0.12em] text-cream-paper/40 transition-colors hover:text-clay"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="eyebrow text-clay">{t.footer.contactEyebrow}</p>
            <div className="flex flex-col gap-2">
              <a
                href="tel:+525598261186"
                className="text-cream-paper/80 transition-colors hover:text-cream-paper"
              >
                +52 55 9826 1186
              </a>
              <a
                href="mailto:hola@growthive.com.mx"
                className="text-cream-paper/80 transition-colors hover:text-cream-paper"
              >
                hola@growthive.com.mx
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="eyebrow text-clay">{t.footer.addressEyebrow}</p>
            <p className="max-w-xs text-sm leading-relaxed text-cream-paper/80">
              {t.footer.addressText}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <VisaBadge />
              <MastercardBadge />
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-cream-paper/10 py-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-cream-paper/40">
            {t.footer.copyright}
          </p>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-cream-paper/40">
            {t.footer.studio}
          </p>
        </div>
      </div>
    </footer>
  );
}