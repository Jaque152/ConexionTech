"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";
import { useLanguage } from "@/lib/language-context";

export function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="servicios"
      className="border-y border-slate-800 bg-slate-900/30 py-24 sm:py-32 relative"
    >
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
      
      <div className="mx-auto max-w-[1400px] container-px relative z-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sky-500 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
              {t.services.eyebrow}
            </span>
            <Reveal>
              <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase tracking-tight leading-[1.1] text-slate-200 sm:text-5xl">
                {t.services.title}
              </h2>
            </Reveal>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400 font-mono">
            {t.services.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {t.services.items.map((item, i) => (
            <Reveal key={item.n} delay={i * 0.1}>
              <Link
                href="/servicios"
                className="group flex flex-col h-full rounded-xl border border-slate-800 bg-slate-950/50 p-8 transition-all duration-300 hover:border-sky-500/50 hover:bg-slate-900 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)]"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="font-mono text-4xl font-black text-slate-800 transition-colors duration-300 group-hover:text-sky-500/30">
                    {item.n}
                  </span>
                  <span className="grid h-10 w-10 place-items-center rounded bg-slate-900 border border-slate-800 text-slate-500 transition-all duration-300 group-hover:border-sky-500 group-hover:bg-sky-500 group-hover:text-slate-950">
                    <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold uppercase tracking-tight text-slate-200 mb-3 transition-colors duration-300 group-hover:text-sky-400">
                  {item.title}
                </h3>
                <p className="font-mono text-[0.85rem] leading-relaxed text-slate-500 mt-auto">
                  {item.desc}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}