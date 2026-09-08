"use client";

import Link from "next/link";
import { ArrowRight, Braces } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/site/reveal";
import { useLanguage } from "@/lib/language-context";

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="proceso" className="relative py-24 bg-slate-950 border-t border-slate-800">
      <div className="mx-auto grid max-w-[1400px] gap-16 container-px lg:grid-cols-2">
        <div>
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-sky-500 flex items-center gap-2">
              <Braces className="h-4 w-4" />
              {t.process.eyebrow}
            </span>
            <h2 className="mt-6 text-4xl font-black uppercase tracking-tight text-slate-200 sm:text-5xl leading-[1.1]">
              {t.process.titlePart1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 block">
                {t.process.titlePart2}
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-6 max-w-md font-mono text-sm leading-relaxed text-slate-400 border-l-2 border-slate-800 pl-4">
              {t.process.desc}
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <Button asChild className="mt-10 bg-sky-600 text-slate-950 hover:bg-sky-500 font-mono uppercase tracking-widest rounded-sm">
              <Link href="/servicios">
                {t.process.ctaBtn}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>

        <div className="relative border-l-2 border-slate-800 pl-6 sm:pl-10">
          {t.process.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative mb-12 last:mb-0 group">
                <span className="absolute -left-[35px] sm:-left-[51px] top-1 h-4 w-4 rounded-full border-2 border-slate-950 bg-slate-700 group-hover:bg-sky-500 transition-colors" />
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <span className="font-mono text-[0.65rem] font-bold text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2 py-1 rounded">
                    PHASE_{s.n}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-slate-200 group-hover:text-sky-400 transition-colors">
                    {s.title}
                  </h3>
                </div>
                <p className="text-sm font-mono text-slate-500 max-w-sm">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}