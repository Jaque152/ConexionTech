"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowRight, Check, Loader2, Terminal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { processContact } from "@/app/actions/contact";

type Fields = "nombre" | "correo" | "telefono" | "asunto" | "mensaje";
type FormState = Record<Fields, string>;

const EMPTY: FormState = { nombre: "", correo: "", telefono: "", asunto: "", mensaje: "" };

function Field({ label, children, error, className }: { label: string; children: React.ReactNode; error?: string; className?: string; }) {
  return (
    <div className={className}>
      <label className="mb-2 block font-mono text-[0.65rem] uppercase tracking-widest text-slate-500">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 font-mono text-[0.64rem] uppercase tracking-wide text-red-400">{error}</p>}
    </div>
  );
}

const inputClass = "flex h-12 w-full rounded border border-slate-800 bg-slate-950 px-4 text-sm text-slate-200 transition-all focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 placeholder:text-slate-600";
const textareaClass = "flex w-full rounded border border-slate-800 bg-slate-950 p-4 text-sm text-slate-200 transition-all focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 placeholder:text-slate-600";

export function ContactForm() {
  const { t, lang } = useLanguage();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (k: Fields, v: string) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.nombre.trim()) e.nombre = t.contact.errName;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.correo)) e.correo = t.contact.errEmail;
    if (!form.mensaje.trim() || form.mensaje.trim().length < 5) e.mensaje = t.contact.errMsg;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) {
      toast.error(t.contact.toastTitle, { description: t.contact.toastDesc });
      return;
    }
    setLoading(true);
    const result = await processContact({ form, lang });
    setLoading(false);

    if (result.success) {
      setSent(true);
      toast.success(t.contact.sentToastTitle, { description: t.contact.sentToastDesc });
    } else {
      toast.error("Error", { description: "Hubo un fallo en la solicitud. Reintenta." });
    }
  };

  if (sent) {
    return (
      <div className="flex min-h-[440px] flex-col items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 p-10 text-center backdrop-blur-sm">
        <span className="grid h-16 w-16 place-items-center rounded bg-sky-500/10 border border-sky-500/30 text-sky-400">
          <Terminal className="h-7 w-7" />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-slate-200">
          {t.contact.successTitle}
        </h3>
        <p className="mt-3 max-w-sm text-slate-400 font-mono text-sm leading-relaxed">
          {t.contact.successDesc}
        </p>
        <Button variant="outline" className="mt-8 border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 font-mono tracking-widest rounded-sm" onClick={() => { setForm(EMPTY); setSent(false); }}>
          {t.contact.sendAnother}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-xl border border-slate-800 bg-slate-900/50 p-6 sm:p-9 backdrop-blur-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.contact.fullName} error={errors.nombre}>
          <Input className={inputClass} value={form.nombre} onChange={(e) => update("nombre", e.target.value)} placeholder={t.contact.namePlaceholder} />
        </Field>
        <Field label={t.contact.email} error={errors.correo}>
          <Input type="email" className={inputClass} value={form.correo} onChange={(e) => update("correo", e.target.value)} placeholder={t.contact.emailPlaceholder} />
        </Field>
        <Field label={t.contact.phone}>
          <Input className={inputClass} value={form.telefono} onChange={(e) => update("telefono", e.target.value)} placeholder={t.contact.phonePlaceholder} />
        </Field>
        <Field label={t.contact.subject}>
          <Input className={inputClass} value={form.asunto} onChange={(e) => update("asunto", e.target.value)} placeholder={t.contact.subjectPlaceholder} />
        </Field>
        <Field label={t.contact.message} error={errors.mensaje} className="sm:col-span-2">
          <Textarea className={textareaClass} value={form.mensaje} onChange={(e) => update("mensaje", e.target.value)} placeholder={t.contact.msgPlaceholder} rows={6} />
        </Field>
      </div>
      <Button type="submit" size="lg" className="mt-8 w-full bg-sky-600 hover:bg-sky-500 text-slate-950 font-mono tracking-widest uppercase rounded-sm" disabled={loading}>
        {loading ? (
          <>{t.contact.sending} <Loader2 className="ml-2 h-4 w-4 animate-spin" /></>
        ) : (
          <>{t.contact.submitBtn} <ArrowRight className="ml-2 h-4 w-4" /></>
        )}
      </Button>
    </form>
  );
}