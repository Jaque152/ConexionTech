"use client";

import Link from "next/link";
import { Logo } from "./logo";
import { useLanguage } from "@/lib/language-context";

function SystemBadge({ text }: { text: string }) {
  return (
    <span className="grid h-8 place-items-center rounded bg-slate-900 border border-slate-800 px-3 font-mono text-[0.65rem] text-slate-400 uppercase tracking-widest">
      {text}
    </span>
  );
}

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
  const legalRoutes = ["/privacidad", "/terminos", "/devoluciones"];

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-[1400px] container-px">
        
        {/* BIG LINKS */}
        <div className="grid grid-cols-1 gap-6 border-b border-slate-800 py-12 sm:grid-cols-3">
          {t.footer.bigLinks.map((l: { href: string; label: string }) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-2xl font-bold uppercase tracking-widest text-slate-600 transition-colors hover:text-sky-400 sm:text-3xl"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* MAIN */}
        <div className="grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-6">
            <Logo />
            <div className="flex flex-col gap-3 mt-4">
              {t.footer.legal.map((label: string, index: number) => (
                <Link
                  key={label}
                  href={legalRoutes[index] || "#"}
                  className="w-fit font-mono text-[0.65rem] uppercase tracking-widest text-slate-500 transition-colors hover:text-sky-400"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-sky-500">
              {t.footer.contactEyebrow}
            </p>
            <div className="flex flex-col gap-3 font-mono text-sm mt-4">
              <a href="tel:+525555332498" className="text-slate-400 transition-colors hover:text-sky-400">
                +52 55 5533 2498
              </a>
              <a href="mailto:hola@conexiontech.com.mx" className="text-slate-400 transition-colors hover:text-sky-400">
                hola@conexiontech.com.mx
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-sky-500">
              {t.footer.addressEyebrow}
            </p>
            <p className="max-w-xs font-mono text-xs leading-relaxed text-slate-400 mt-4">
              {t.footer.addressText}
            </p>
            <div className="flex items-center gap-2 pt-1">
              <VisaBadge />
              <MastercardBadge />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-slate-800 py-7 sm:flex-row sm:items-center">
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-slate-600">
            {t.footer.copyright}
          </p>
          <p className="font-mono text-[0.6rem] uppercase tracking-widest text-slate-600">
            {t.footer.studio}
          </p>
        </div>
      </div>
    </footer>
  );
}