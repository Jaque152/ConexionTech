"use client";

import Link from "next/link";
import { Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";

export function CtaBand() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 bg-slate-900 border-y border-slate-800">
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 mx-auto max-w-4xl">
        <Terminal className="h-10 w-10 text-sky-500 mb-6" />
        
        <h2 className="text-4xl sm:text-6xl font-black uppercase text-slate-200 tracking-tight leading-tight mb-8">
          {t.ctaBand.word}
        </h2>
        
        <Button asChild size="xl" className="bg-sky-600 text-slate-950 hover:bg-sky-500 font-mono tracking-widest uppercase rounded-sm shadow-[0_0_20px_rgba(14,165,233,0.3)]">
          <Link href="/contacto">
            {t.ctaBand.btnText}
          </Link>
        </Button>
      </div>
    </section>
  );
}