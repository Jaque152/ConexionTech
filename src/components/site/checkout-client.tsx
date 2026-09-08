"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { ArrowRight, Check, Lock, Minus, Plus, ShoppingBag, Trash2, Loader2, TerminalSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCart, IVA_RATE } from "@/lib/cart-context";
import { formatMXN } from "@/lib/products";
import { useLanguage } from "@/lib/language-context";
import { processCheckout, type CheckoutFormState, type CheckoutItem } from "@/app/actions/checkout";

const REQUIRED: (keyof CheckoutFormState)[] = ["nombre", "apellidos", "email", "telefono", "direccion", "ciudad", "estado", "cp", "card", "cardName", "exp", "cvc"];

function Field({ label, children, error, className }: { label: string; children: React.ReactNode; error?: string; className?: string; }) {
  return (
    <div className={className}>
      <label className="mb-2 block font-mono text-[0.65rem] uppercase tracking-widest text-slate-500">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 font-mono text-[0.64rem] uppercase tracking-wide text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

function SectionTitle({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <span className="grid h-6 w-6 place-items-center rounded bg-sky-500/20 font-mono text-[0.66rem] font-bold text-sky-400 border border-sky-500/30">
        {n}
      </span>
      <h2 className="font-mono text-lg font-bold text-slate-200 uppercase tracking-wide">{title}</h2>
    </div>
  );
}

const inputBase = "flex h-12 w-full rounded border border-slate-800 bg-slate-950 px-4 text-sm text-slate-200 transition-all focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 placeholder:text-slate-600";

export function CheckoutClient() {
  const { items, subtotal, iva, total, hydrated, setQty, remove, clear } = useCart();
  const { t, lang } = useLanguage();
  
  const [form, setForm] = useState<Partial<CheckoutFormState>>({ pais: "México" });
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormState, string>>>({});
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<{ no: string; total: number } | null>(null);

  const update = (k: keyof CheckoutFormState, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const fmtCard = (v: string) => v.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();
  const fmtExp = (v: string) => {
    const d = v.replace(/\D/g, "").slice(0, 4);
    return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
  };

  const validate = () => {
    const e: Partial<Record<keyof CheckoutFormState, string>> = {};
    for (const k of REQUIRED) if (!form[k]?.trim()) e[k] = t.checkout.requiredErr;
    if (form.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) e.email = t.checkout.invalidEmail;
    if (form.cp && !/^\d{5}$/.test(form.cp)) e.cp = t.checkout.digits5;
    if (form.card && form.card.replace(/\s/g, "").length < 15) e.card = t.checkout.incompleteNum;
    if (form.exp && !/^\d{2}\/\d{2}$/.test(form.exp)) e.exp = "MM/AA";
    if (form.cvc && !/^\d{3,4}$/.test(form.cvc)) e.cvc = "3–4";
    
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (items.length === 0) return;
    
    if (!validate()) {
      toast.error(t.checkout.toastReview, { description: t.checkout.toastReviewDesc });
      const first = document.querySelector("[data-error='true']");
      first?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    
    setLoading(true);

    const checkoutItems: CheckoutItem[] = items.map((i) => ({
      product: {
        id: i.product.id,
        priceMXN: i.product.priceMXN,
        es: { name: i.product.es.name },
        en: { name: i.product.en.name },
      },
      qty: i.qty,
    }));

    const result = await processCheckout({
      form: form as CheckoutFormState,
      items: checkoutItems,
      totals: { subtotal, iva, total },
      lang: lang as "es" | "en",
    });

    setLoading(false);

    if (result.success) {
      if (result.redirectTo) {
        window.location.href = result.redirectTo;
        return;
      }
      setOrder({ no: result.orderId!, total });
      clear();
      toast.success(t.checkout.toastConfirmed, { description: `${t.checkout.toastFolio} ${result.orderId}` });
    } else {
      toast.error("Error en el pago", { description: result.error });
    }
  };

  if (order) {
    return (
      <div className="mx-auto max-w-2xl container-px py-20 text-center sm:py-28 text-slate-200">
        <span className="mx-auto grid h-20 w-20 place-items-center rounded bg-sky-500/10 border border-sky-500/30 text-sky-400">
          <Check className="h-9 w-9" />
        </span>
        <h1 className="mt-8 text-4xl font-bold uppercase tracking-tight sm:text-5xl">
          {t.checkout.successThankYou}
        </h1>
        <p className="mt-4 text-slate-400 font-mono text-sm leading-relaxed max-w-lg mx-auto">
          {t.checkout.successDesc}
        </p>
        <div className="mx-auto mt-10 max-w-sm rounded-lg border border-slate-800 bg-slate-900 p-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
              {t.checkout.folioLabel}
            </span>
            <span className="font-mono text-sm font-bold text-sky-400">
              {order.no}
            </span>
          </div>
          <div className="flex items-center justify-between pt-4">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-500">
              {t.checkout.totalPaid}
            </span>
            <span className="font-mono text-xl font-bold text-slate-200">
              {formatMXN(order.total)} MXN
            </span>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild className="bg-sky-600 hover:bg-sky-500 text-slate-950 font-mono tracking-widest rounded-sm">
            <Link href="/servicios">{t.checkout.exploreMore}</Link>
          </Button>
          <Button asChild variant="outline" className="border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 font-mono tracking-widest rounded-sm">
            <Link href="/">{t.checkout.backHome}</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (hydrated && items.length === 0) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center container-px py-24 text-center sm:py-32">
        <span className="grid h-20 w-20 place-items-center rounded-lg border border-slate-800 bg-slate-900 text-slate-600">
          <TerminalSquare className="h-8 w-8" />
        </span>
        <h1 className="mt-7 text-3xl font-bold uppercase tracking-tight text-slate-200">
          {t.checkout.emptyTitle}
        </h1>
        <p className="mt-3 text-slate-500 font-mono text-sm">
          {t.checkout.emptyDesc}
        </p>
        <Button asChild className="mt-8 bg-sky-600 hover:bg-sky-500 text-slate-950 font-mono tracking-widest rounded-sm">
          <Link href="/servicios">
            {t.checkout.viewServices}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1400px] container-px py-12 sm:py-16 text-slate-200">
      <div className="mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-sky-500 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
          {t.checkout.eyebrow}
        </span>
        <h1 className="mt-4 text-4xl font-black uppercase tracking-tight sm:text-5xl">
          {t.checkout.title}
        </h1>
      </div>

      <form onSubmit={handleSubmit} noValidate className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:gap-12">
        <div className="space-y-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-sm">
            <SectionTitle n="01" title={t.checkout.contactSec} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t.checkout.name} error={errors.nombre}>
                <Input data-error={!!errors.nombre} className={inputBase} value={form.nombre || ""} onChange={(e) => update("nombre", e.target.value)} placeholder={t.checkout.name} />
              </Field>
              <Field label={t.checkout.lastName} error={errors.apellidos}>
                <Input className={inputBase} value={form.apellidos || ""} onChange={(e) => update("apellidos", e.target.value)} placeholder={t.checkout.lastName} />
              </Field>
              <Field label="Email" error={errors.email}>
                <Input type="email" className={inputBase} value={form.email || ""} onChange={(e) => update("email", e.target.value)} placeholder="root@dominio.com" />
              </Field>
              <Field label={t.contact.phone} error={errors.telefono}>
                <Input className={inputBase} value={form.telefono || ""} onChange={(e) => update("telefono", e.target.value)} placeholder="+52 ..." />
              </Field>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-sm">
            <SectionTitle n="02" title={t.checkout.billingSec} />
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t.checkout.company}>
                <Input className={inputBase} value={form.empresa || ""} onChange={(e) => update("empresa", e.target.value)} placeholder={t.checkout.companyPlaceholder} />
              </Field>
              <Field label={t.checkout.rfc}>
                <Input className={inputBase} value={form.rfc || ""} onChange={(e) => update("rfc", e.target.value.toUpperCase())} placeholder="XAXX010101000" />
              </Field>
              <Field label={t.checkout.address} error={errors.direccion} className="sm:col-span-2">
                <Input className={inputBase} value={form.direccion || ""} onChange={(e) => update("direccion", e.target.value)} placeholder={t.checkout.addressPlaceholder} />
              </Field>
              <Field label={t.checkout.city} error={errors.ciudad}>
                <Input className={inputBase} value={form.ciudad || ""} onChange={(e) => update("ciudad", e.target.value)} placeholder={t.checkout.city} />
              </Field>
              <Field label={t.checkout.state} error={errors.estado}>
                <Input className={inputBase} value={form.estado || ""} onChange={(e) => update("estado", e.target.value)} placeholder={t.checkout.state} />
              </Field>
              <Field label={t.checkout.zip} error={errors.cp}>
                <Input className={inputBase} value={form.cp || ""} onChange={(e) => update("cp", e.target.value.replace(/\D/g, "").slice(0, 5))} placeholder="06700" inputMode="numeric" />
              </Field>
              <Field label={t.checkout.country}>
                <select value={form.pais || "México"} onChange={(e) => update("pais", e.target.value)} className={inputBase}>
                  <option>México</option>
                  <option>Estados Unidos</option>
                  <option>Colombia</option>
                  <option>España</option>
                </select>
              </Field>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 backdrop-blur-sm">
            <SectionTitle n="03" title={t.checkout.paymentSec} />
            
            <div className="mb-6 flex items-center gap-2 rounded border border-sky-500/20 bg-sky-500/5 px-4 py-3 text-xs font-mono text-sky-400">
              <Lock className="h-4 w-4 shrink-0" />
              {t.checkout.protected}
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t.checkout.cardNumber} error={errors.card} className="sm:col-span-2">
                <Input className={inputBase} value={form.card || ""} onChange={(e) => update("card", fmtCard(e.target.value))} placeholder="0000 0000 0000 0000" inputMode="numeric" />
              </Field>
              <Field label={t.checkout.cardName} error={errors.cardName} className="sm:col-span-2">
                <Input className={inputBase} value={form.cardName || ""} onChange={(e) => update("cardName", e.target.value)} placeholder={t.checkout.cardNamePlaceholder} />
              </Field>
              <Field label={t.checkout.exp} error={errors.exp}>
                <Input className={inputBase} value={form.exp || ""} onChange={(e) => update("exp", fmtExp(e.target.value))} placeholder="MM/AA" inputMode="numeric" />
              </Field>
              <Field label="CVV" error={errors.cvc}>
                <Input type="password" className={inputBase} value={form.cvc || ""} onChange={(e) => update("cvc", e.target.value.replace(/\D/g, "").slice(0, 4))} placeholder="***" inputMode="numeric" />
              </Field>
              <Field label={t.checkout.notes} className="sm:col-span-2">
                <Textarea className="flex w-full rounded border border-slate-800 bg-slate-950 p-4 text-sm text-slate-200 transition-all focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 placeholder:text-slate-600" value={form.notas || ""} onChange={(e) => update("notas", e.target.value)} placeholder={t.checkout.notesPlaceholder} rows={3} />
              </Field>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-7 backdrop-blur-md">
            <p className="font-mono text-xs uppercase tracking-widest text-sky-500">{t.checkout.summaryEyebrow}</p>

            <div className="mt-6 max-h-[340px] space-y-4 overflow-y-auto pr-1">
              {items.map(({ product, qty }) => {
                const data = product[lang];
                return (
                  <div key={product.id} className="flex gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded border border-slate-800 bg-slate-950 overflow-hidden">
                       <img src={product.imageUrl} alt={data.name} className="h-full w-full object-cover opacity-60 mix-blend-luminosity" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-bold text-slate-200">
                        {data.name}
                      </p>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="inline-flex items-center rounded border border-slate-700 bg-slate-950">
                          <button type="button" onClick={() => setQty(product.id, qty - 1)} className="grid h-6 w-6 place-items-center text-slate-400 hover:text-sky-400"><Minus className="h-3 w-3" /></button>
                          <span className="w-5 text-center font-mono text-xs text-slate-300">{qty}</span>
                          <button type="button" onClick={() => setQty(product.id, qty + 1)} className="grid h-6 w-6 place-items-center text-slate-400 hover:text-sky-400"><Plus className="h-3 w-3" /></button>
                        </div>
                        <span className="font-mono text-xs text-slate-300">
                          {formatMXN(product.priceMXN * qty)} <span className="text-sky-500 ml-1">MXN</span>
                        </span>
                      </div>
                    </div>
                    <button type="button" onClick={() => remove(product.id)} className="self-start text-slate-600 hover:text-red-400">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>

            <dl className="mt-6 space-y-2 border-t border-slate-800 pt-5 font-mono text-sm">
              <div className="flex justify-between text-slate-500">
                <dt>{t.cart.subtotal}</dt>
                <dd className="text-slate-400">{formatMXN(subtotal)} MXN</dd>
              </div>
              <div className="flex justify-between text-slate-500">
                <dt>IVA ({Math.round(IVA_RATE * 100)}%)</dt>
                <dd className="text-slate-400">{formatMXN(iva)} MXN</dd>
              </div>
              <div className="flex items-baseline justify-between border-t border-slate-800 pt-4 mt-4">
                <dt className="text-base font-bold uppercase tracking-widest text-slate-300">
                  {t.cart.total}
                </dt>
                <dd className="text-2xl font-bold text-sky-400">
                  {formatMXN(total)} <span className="text-sm">MXN</span>
                </dd>
              </div>
            </dl>

            <Button type="submit" size="lg" className="mt-8 w-full bg-sky-600 hover:bg-sky-500 text-slate-950 font-mono tracking-widest uppercase rounded-sm" disabled={loading || items.length === 0}>
              {loading ? (
                <>{t.checkout.processing} <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>
              ) : (
                <>{t.checkout.placeOrder} <ArrowRight className="ml-2 h-4 w-4" /></>
              )}
            </Button>
          </div>
        </aside>
      </form>
    </div>
  );
}