"use client";

import { StoreGrid } from "@/components/site/store-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { useLanguage } from "@/lib/language-context";

export function ServiciosClient() {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-950 min-h-screen">
      <section className="relative isolate overflow-hidden">
        <div aria-hidden className="absolute inset-0 -z-10 cyber-grid opacity-30" />
        
        {/* Ambient Glows */}
        <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -left-32 top-[-20%] h-[460px] w-[460px] rounded-full bg-sky-500/10 blur-[120px]" />
          <div className="absolute right-[-10%] top-10 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[120px]" />
        </div>
        
        <div className="mx-auto max-w-[1400px] container-px pb-10 pt-14 sm:pt-20">
          <span className="font-mono text-xs uppercase tracking-widest text-sky-500 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
            {t.servicesPage.eyebrow}
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-slate-200 sm:text-7xl">
            {t.servicesPage.titlePart1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              {t.servicesPage.titlePart2}
            </span>
          </h1>
          <p className="mt-6 max-w-xl font-mono text-sm leading-relaxed text-slate-400 border-l-2 border-slate-800 pl-4">
            {t.servicesPage.desc}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] container-px pb-20 sm:pb-28">
        <StoreGrid />
      </section>

      <CtaBand />
    </div>
  );
}