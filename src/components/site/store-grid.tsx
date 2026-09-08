"use client";

import { webPlans } from "@/lib/products";
import { ProductCard } from "./product-card";
import { useLanguage } from "@/lib/language-context";

export function StoreGrid() {
  const { t } = useLanguage();

  return (
    <div>
      <div className="flex items-center justify-between border-y border-slate-800 py-5">
        <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
          SYS_LOG: {String(webPlans.length).padStart(2, "0")} {t.store.plansCountLabel} disponibles
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {webPlans.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </div>
  );
}