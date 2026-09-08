"use client";

import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { useLanguage } from "@/lib/language-context";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="relative py-24 sm:py-32 bg-slate-950">
      <div className="mx-auto grid max-w-[1400px] gap-14 container-px lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-sky-500 flex items-center gap-2">
              <Terminal className="h-4 w-4" />
              {t.about.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl font-black uppercase tracking-tight leading-tight text-slate-200 sm:text-5xl lg:text-6xl">
              {t.about.titlePart1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                {t.about.titlePart2}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 max-w-xl space-y-5 font-mono text-[0.95rem] leading-relaxed text-slate-400">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Button asChild className="mt-10 bg-sky-600 hover:bg-sky-500 text-slate-950 font-mono tracking-widest uppercase rounded-sm">
              <Link href="/servicios">
                {t.about.ctaBtn}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative">
          {/* Panel Lateral Técnico */}
          <div className="relative rounded-xl border border-slate-800 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-md sm:p-10">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-t-xl" />
            
            <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
              {t.about.servicesIncludedEyebrow}
            </p>
            
            <ul className="mt-8 space-y-1">
              {t.about.servicesList.map((s, i) => (
                <li
                  key={s}
                  className="flex items-center gap-4 border-b border-slate-800/50 py-3 last:border-0"
                >
                  <span className="font-mono text-xs font-bold text-sky-500">
                    0{i + 1}_
                  </span>
                  <span className="font-mono text-sm font-medium text-slate-300">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Badge Flotante */}
          <div className="absolute -right-4 -top-6 grid h-24 w-24 place-items-center rounded bg-slate-950 border border-sky-500/30 shadow-[0_0_20px_rgba(14,165,233,0.15)] text-center text-slate-200">
            <span className="font-mono text-[0.65rem] font-bold uppercase leading-tight tracking-widest text-sky-400">
              {t.about.onlineBadgeLine1}
              <br />
              {t.about.onlineBadgeLine2}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}