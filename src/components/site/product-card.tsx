"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart, IVA_RATE } from "@/lib/cart-context";
import { formatMXN, type ProductPlan } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";

export function ProductCard({
  product,
  index,
}: {
  product: ProductPlan;
  index: number;
}) {
  const { add, open } = useCart();
  const { t, lang } = useLanguage();
  const [dialogOpen, setDialogOpen] = useState(false);

  const data = product[lang];

  const handleAdd = () => {
    add(product);
    toast.success(t.store.addedToastTitle, {
      description: data.name,
      action: { label: t.store.viewCartBtn, onClick: () => open() },
    });
  };

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:bg-slate-900 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] sm:p-5">
      <span className="pointer-events-none absolute right-4 top-3 z-10 font-mono text-4xl font-black text-slate-800/80 drop-shadow-md">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-950 border border-slate-800">
        <img
          src={product.imageUrl}
          alt={data.name}
          className="h-full w-full object-cover opacity-70 mix-blend-luminosity transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col px-1 pt-5">
        <h3 className="text-xl font-bold uppercase tracking-tight leading-snug text-slate-200">
          {data.name}
        </h3>
        <p className="mt-2 line-clamp-2 font-mono text-xs leading-relaxed text-slate-400">
          {data.description}
        </p>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-2xl font-bold text-sky-400">
              {formatMXN(product.priceMXN)}
            </p>
            <p className="mt-1 font-mono text-[0.65rem] uppercase tracking-widest text-slate-500">
              {product.currency}
            </p>
          </div>
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-1 font-mono text-[0.65rem] uppercase tracking-widest text-slate-500 transition-colors hover:text-sky-400"
              >
                {t.store.cardDetails}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </DialogTrigger>
            
            {/* ESTILOS DEL DIALOGO OSCURO */}
            <DialogContent className="max-h-[92dvh] w-[95vw] max-w-3xl overflow-y-auto overflow-x-hidden rounded-xl border-slate-800 bg-slate-950 p-0 sm:w-full [&>button]:right-4 [&>button]:top-4 [&>button]:z-50 [&>button]:rounded [&>button]:bg-slate-900 [&>button]:p-1.5 [&>button]:text-slate-400 hover:[&>button]:text-sky-400 [&>button]:border [&>button]:border-slate-800">
              <div className="grid gap-0 md:grid-cols-2">
                <div className="bg-slate-900/30 p-6 sm:p-8">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-slate-950 border border-slate-800">
                    <img
                      src={product.imageUrl}
                      alt={data.name}
                      className="h-full w-full object-cover opacity-80 mix-blend-luminosity"
                    />
                  </div>
                  <DialogTitle className="mt-5 text-2xl font-bold uppercase tracking-tight leading-tight text-slate-200">
                    {data.name}
                  </DialogTitle>
                  <p className="mt-3 font-mono text-xs leading-relaxed text-slate-400">
                    {data.description}
                  </p>
                </div>
                
                <div className="flex flex-col p-6 sm:p-8">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">{t.store.cardIncludes}</p>
                  <ul className="mt-4 flex-1 space-y-3">
                    {data.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 font-mono text-xs text-slate-300">
                        <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                          <Check className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 border-t border-slate-800 pt-5">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="font-mono text-[0.65rem] uppercase tracking-widest text-slate-500">
                        {t.store.cardTotalIva}
                      </span>
                      <span className="text-2xl font-bold text-sky-400">
                        {formatMXN(product.priceMXN * (1 + IVA_RATE))}
                      </span>
                    </div>
                    <Button
                      className="w-full bg-sky-600 hover:bg-sky-500 text-slate-950 font-mono tracking-widest uppercase rounded-sm"
                      size="lg"
                      onClick={() => {
                        handleAdd();
                        setDialogOpen(false);
                      }}
                    >
                      {t.store.cardHire}
                      <Plus className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <Button onClick={handleAdd} className="mt-5 w-full bg-slate-900 border border-slate-800 text-sky-500 hover:bg-sky-500 hover:text-slate-950 font-mono tracking-widest uppercase rounded-sm transition-colors">
          {t.store.cardHire}
          <Plus className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </article>
  );
}