"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { ArrowRight, Activity, Server, Code } from "lucide-react";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden min-h-[85vh] border-b border-slate-800 bg-slate-950 flex items-center pt-10 pb-16">
      {/* Fondo técnico interactivo */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      
      {/* Luces de neón ambientales sutiles */}
      <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
      
      <div className="mx-auto max-w-[1400px] container-px relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          
          {/* Columna Izquierda: Copy y CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded bg-slate-900 border border-slate-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-pulse" />
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-sky-400">
                {t.hero.eyebrow}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-200 tracking-tight leading-[1.05] mb-6 uppercase">
              {t.hero.titlePart1}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 block">
                {t.hero.titlePart2}
              </span>
            </h1>

            <p className="text-lg text-slate-400 mb-10 max-w-xl font-mono whitespace-pre-line leading-relaxed border-l-2 border-slate-800 pl-4">
              {t.hero.deliveryText}
            </p>

            <Link
              href="/contacto"
              className="inline-flex h-12 items-center justify-center rounded-sm bg-sky-600 px-8 font-mono text-sm font-bold tracking-widest text-slate-950 transition-colors hover:bg-sky-500 uppercase shadow-[0_0_15px_rgba(14,165,233,0.3)]"
            >
              {t.header.cta} <ArrowRight className="ml-3 h-4 w-4" />
            </Link>
          </motion.div>

          {/* Columna Derecha: Abstract Tech Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            <div className="col-span-2 bg-slate-900/80 border border-slate-800 rounded-lg p-6 backdrop-blur-md">
              <div className="flex justify-between items-start mb-4">
                <Code className="text-sky-500 h-6 w-6" />
                <span className="text-xs font-mono text-slate-500">SYS_V2026.1</span>
              </div>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-400 mb-2">Stack Operativo</p>
              <div className="flex gap-2 flex-wrap mt-3">
                {['Next.js 14', 'React', 'TypeScript', 'Node.js', 'Tailwind'].map(tech => (
                  <span key={tech} className="px-2 py-1 bg-slate-950 border border-slate-800 rounded text-[10px] text-sky-400 font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-6 backdrop-blur-md">
              <Server className="text-sky-500 h-6 w-6 mb-4" />
              <p className="text-2xl font-bold text-slate-200">99.9%</p>
              <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">Uptime Garantizado</p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 rounded-lg p-6 backdrop-blur-md">
              <Activity className="text-sky-500 h-6 w-6 mb-4" />
              <p className="text-2xl font-bold text-slate-200">&lt;50ms</p>
              <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">Latencia Promedio</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}