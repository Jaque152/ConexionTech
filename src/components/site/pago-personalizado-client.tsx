"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ChevronRight, Database } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { useCart } from "@/lib/cart-context";
import { ProductPlan } from "@/lib/products";

type Fields = "nombre" | "correo" | "referencia" | "monto";
type FormState = Record<Fields, string>;

const EMPTY: FormState = { nombre: "", correo: "", referencia: "", monto: "" };

export function PagoPersonalizadoClient() {
  const { t } = useLanguage();
  const { add, open } = useCart();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  const update = (k: Fields, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.nombre.trim()) e.nombre = t.customPayment.errName;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.correo)) e.correo = t.customPayment.errEmail;
    if (!form.referencia.trim()) e.referencia = t.customPayment.errRef;
    
    const amountVal = parseFloat(form.monto);
    if (isNaN(amountVal) || amountVal <= 0) e.monto = t.customPayment.errAmount;

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const customProduct: ProductPlan = {
      id: `custom-payment-${Date.now()}`,
      priceMXN: parseFloat(form.monto),
      taxIncluded: false,
      currency: "MXN + IVA",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80", 
      es: { name: `${form.referencia}`, description: `Nombre: ${form.nombre} | Correo: ${form.correo}`, features: ["Transacción segura"] },
      en: { name: `${form.referencia}`, description: `Name: ${form.nombre} | Email: ${form.correo}`, features: ["Secure transaction"] },
    };

    add(customProduct);
    open();
    toast.success(t.customPayment.toastAdded);
    setForm(EMPTY);
  };

  const inputClass = "h-12 w-full rounded border border-slate-800 bg-slate-950 px-4 text-sm text-slate-200 outline-none transition-all focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder:text-slate-600";

  return (
    <section className="min-h-[calc(100vh-68px)] bg-slate-950 py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="mx-auto grid max-w-[1200px] gap-12 container-px lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20 relative z-10">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-sky-500 flex items-center gap-2 mb-6">
            <Database className="h-4 w-4" />
            SECURE_GATEWAY
          </span>
          <h1 className="text-5xl font-black uppercase tracking-tight text-slate-200 sm:text-6xl leading-[1]">
            {t.customPayment.title1}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
              {t.customPayment.title2}
            </span>
          </h1>
          <p className="mt-8 max-w-sm text-slate-400 font-mono text-sm leading-relaxed border-l-2 border-slate-800 pl-4">
            {t.customPayment.desc}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/80 p-7 shadow-2xl sm:p-10 backdrop-blur-md">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-[0.65rem] uppercase tracking-widest text-slate-500">{t.customPayment.nameLabel}</label>
                <input type="text" value={form.nombre} onChange={(e) => update("nombre", e.target.value)} className={inputClass} />
                {errors.nombre && <p className="mt-1.5 font-mono text-[0.64rem] uppercase text-red-400">{errors.nombre}</p>}
              </div>
              <div>
                <label className="mb-2 block font-mono text-[0.65rem] uppercase tracking-widest text-slate-500">{t.customPayment.emailLabel}</label>
                <input type="email" value={form.correo} onChange={(e) => update("correo", e.target.value)} className={inputClass} />
                {errors.correo && <p className="mt-1.5 font-mono text-[0.64rem] uppercase text-red-400">{errors.correo}</p>}
              </div>
            </div>

            <div>
              <label className="mb-2 block font-mono text-[0.65rem] uppercase tracking-widest text-slate-500">{t.customPayment.refLabel}</label>
              <input type="text" value={form.referencia} onChange={(e) => update("referencia", e.target.value)} className={inputClass} />
              {errors.referencia && <p className="mt-1.5 font-mono text-[0.64rem] uppercase text-red-400">{errors.referencia}</p>}
            </div>

            <div>
              <label className="mb-2 block font-mono text-[0.65rem] uppercase tracking-widest text-slate-500">{t.customPayment.amountLabel}</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-slate-500">$</span>
                <input type="number" step="0.01" min="1" value={form.monto} onChange={(e) => update("monto", e.target.value)} className={`${inputClass} pl-8 font-mono text-lg`} />
              </div>
              {errors.monto && <p className="mt-1.5 font-mono text-[0.64rem] uppercase text-red-400">{errors.monto}</p>}
            </div>

            <div className="pt-4">
              <button type="submit" className="group flex h-12 w-full items-center justify-center gap-2 rounded bg-sky-600 font-mono text-sm font-bold tracking-widest uppercase text-slate-950 transition-colors hover:bg-sky-500">
                {t.customPayment.button}
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 text-center font-mono text-[0.65rem] uppercase tracking-widest text-slate-600">
              <p>{t.customPayment.note1}</p>
              <p>{t.customPayment.note2}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}