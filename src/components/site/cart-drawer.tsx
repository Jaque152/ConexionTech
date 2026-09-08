"use client";

import Link from "next/link";
import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart, IVA_RATE } from "@/lib/cart-context";
import { formatMXN } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";

export function CartDrawer() {
  const { items, count, subtotal, iva, total, isOpen, close, setQty, remove, clear } = useCart();
  const { t, lang } = useLanguage();

  return (
    <Sheet open={isOpen} onOpenChange={(o) => !o && close()}>
      <SheetContent
        side="right"
        className="flex w-full flex-col gap-0 border-l border-slate-800 bg-slate-950 p-0 text-slate-300 sm:max-w-md [&>button]:!text-slate-500 [&>button]:hover:!text-sky-400"
      >
        <SheetHeader className="border-b border-slate-800 px-6 py-5 text-left">
          <SheetTitle className="flex items-center gap-3 text-slate-200">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-500">{t.cart.title}</span>
            <span className="font-mono text-xs text-slate-600">
              [{String(count).padStart(2, "0")}]
            </span>
          </SheetTitle>
          <p className="font-mono text-lg font-bold text-slate-300">
            {t.cart.selection}
          </p>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-6 px-8 text-center">
            <div className="grid h-20 w-20 place-items-center rounded-full border border-dashed border-slate-800 bg-slate-900/50">
              <ShoppingBag className="h-7 w-7 text-slate-600" />
            </div>
            <div className="space-y-1.5">
              <p className="font-mono text-lg font-bold text-slate-300">
                {t.cart.emptyTitle}
              </p>
              <p className="text-sm text-slate-500">
                {t.cart.emptyDesc}
              </p>
            </div>
            <Button asChild className="bg-sky-600 text-slate-950 hover:bg-sky-500 font-mono uppercase tracking-wider rounded-sm mt-4" onClick={close}>
              <Link href="/servicios">
                {t.cart.viewServices}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 divide-y divide-slate-800/50 overflow-y-auto px-6">
              {items.map(({ product, qty }) => {
                const data = product[lang];
                
                return (
                  <div key={product.id} className="flex gap-4 py-5">
                    <div className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded border border-slate-800 bg-slate-900">
                      <img src={product.imageUrl} alt={data.name} className="h-full w-full object-cover opacity-60 mix-blend-luminosity" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-sky-500">
                        {product.currency}
                      </p>
                      <p className="mt-1 truncate text-[1.05rem] font-bold leading-tight text-slate-200">
                        {data.name}
                      </p>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="inline-flex items-center rounded border border-slate-800 bg-slate-900">
                          <button
                            type="button"
                            onClick={() => setQty(product.id, qty - 1)}
                            className="grid h-8 w-8 place-items-center text-slate-400 transition-colors hover:!text-sky-400"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="w-6 text-center font-mono text-sm text-slate-200">
                            {qty}
                          </span>
                          <button
                            type="button"
                            onClick={() => setQty(product.id, qty + 1)}
                            className="grid h-8 w-8 place-items-center text-slate-400 transition-colors hover:!text-sky-400"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                        <span className="font-mono text-sm text-slate-300">
                          {formatMXN(product.priceMXN * qty)} <span className="text-sky-500 text-[0.6rem] ml-1">MXN</span>
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(product.id)}
                      aria-label={t.cart.removeAria}
                      className="self-start text-slate-600 transition-colors hover:!text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 border-t border-slate-800 bg-slate-900/30 px-6 py-6">
              <dl className="space-y-2 font-mono text-sm">
                <div className="flex justify-between text-slate-500">
                  <dt>{t.cart.subtotal}</dt>
                  <dd className="text-slate-400">{formatMXN(subtotal)} MXN</dd>
                </div>
                <div className="flex justify-between text-slate-500">
                  <dt>IVA ({Math.round(IVA_RATE * 100)}%)</dt>
                  <dd className="text-slate-400">{formatMXN(iva)} MXN</dd>
                </div>
                <div className="flex items-baseline justify-between border-t border-slate-800 pt-3 text-slate-200">
                  <dt className="text-base font-bold uppercase tracking-widest">
                    {t.cart.total}
                  </dt>
                  <dd className="text-xl font-bold text-sky-400">
                    {formatMXN(total)} <span className="text-sm">MXN</span>
                  </dd>
                </div>
              </dl>
              <Button asChild size="lg" className="w-full bg-sky-600 text-slate-950 hover:bg-sky-500 font-mono tracking-widest rounded-sm" onClick={close}>
                <Link href="/checkout">
                  {t.cart.checkoutBtn}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <button
                type="button"
                onClick={clear}
                className="block w-full text-center font-mono text-[0.7rem] uppercase tracking-widest text-slate-600 transition-colors hover:!text-red-400"
              >
                {t.cart.clearBtn}
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}