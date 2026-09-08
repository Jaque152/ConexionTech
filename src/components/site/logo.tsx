import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-3 group", className)}>
      <div className="grid h-8 w-8 place-items-center rounded bg-slate-900 border border-sky-500/30 text-sky-400 transition-colors group-hover:border-sky-500">
        <Terminal className="h-4 w-4" />
      </div>
      <span className="font-mono text-sm font-bold tracking-widest text-slate-200">
        CONEXION<span className="text-sky-500">TECH</span>
      </span>
    </span>
  );
}