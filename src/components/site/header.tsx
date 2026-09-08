"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { useLanguage } from "@/lib/language-context";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const { count, toggle, hydrated } = useCart();
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* SYSTEM STATUS BAR (Reemplaza al Marquee) */}
      <div className="bg-sky-600 py-1.5 text-slate-950">
        <div className="mx-auto flex max-w-[1400px] justify-center sm:justify-between px-6 font-mono text-[0.65rem] uppercase tracking-widest font-bold">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-950 animate-pulse" />
            SYS_ONLINE_//_CDMX
          </span>
          <span className="hidden sm:block">STATUS: OK</span>
        </div>
      </div>

      {/* NAV */}
      <div
        className={cn(
          "transition-all duration-300 border-b",
          scrolled
            ? "border-slate-800 bg-slate-950/90 backdrop-blur-md"
            : "border-transparent bg-slate-950/50 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between gap-6 container-px">
          <Link href="/" aria-label="ConexionTech">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            {t.header.nav.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "font-mono text-[0.7rem] uppercase tracking-[0.16em] transition-colors",
                    active ? "text-sky-400" : "text-slate-400 hover:text-sky-400"
                  )}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            {/* SELECTOR IDIOMA */}
            <div className="flex items-center rounded border border-slate-800 bg-slate-900 p-0.5 font-mono text-[0.65rem] font-bold tracking-widest">
              <button
                type="button"
                onClick={() => setLang("es")}
                className={cn(
                  "rounded px-2.5 py-1 transition-colors",
                  lang === "es" ? "bg-sky-500 text-slate-950" : "text-slate-400 hover:text-slate-200"
                )}
              >
                ES
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={cn(
                  "rounded px-2.5 py-1 transition-colors",
                  lang === "en" ? "bg-sky-500 text-slate-950" : "text-slate-400 hover:text-slate-200"
                )}
              >
                EN
              </button>
            </div>

            <Button asChild size="sm" className="hidden sm:inline-flex bg-sky-600 text-slate-950 hover:bg-sky-500 font-mono text-xs uppercase tracking-widest rounded-sm">
              <Link href="/contacto">{t.header.cta}</Link>
            </Button>

            {/* CARRITO */}
            <button
              type="button"
              onClick={toggle}
              aria-label={t.header.cartAria}
              className="relative grid h-9 w-9 place-items-center rounded border border-slate-800 bg-slate-900 text-slate-300 transition-colors hover:border-sky-500 hover:text-sky-400"
            >
              <ShoppingBag className="h-4 w-4" />
              {hydrated && count > 0 && (
                <span className="absolute -right-1.5 -top-1.5 grid h-4 w-4 place-items-center rounded-full bg-sky-500 font-mono text-[9px] font-bold text-slate-950">
                  {count}
                </span>
              )}
            </button>

            {/* MENÚ MÓVIL */}
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  aria-label={t.header.menuAria}
                  className="grid h-9 w-9 place-items-center rounded border border-slate-800 bg-slate-900 text-slate-300 transition-colors hover:border-sky-500 hover:text-sky-400 md:hidden"
                >
                  <Menu className="h-4 w-4" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full border-l border-slate-800 bg-slate-950 p-0 text-slate-200 sm:max-w-sm"
              >
                <div className="flex h-full flex-col">
                  <div className="border-b border-slate-800 px-7 py-6">
                    <Logo />
                  </div>
                  <nav className="flex flex-1 flex-col justify-center gap-1 px-7">
                    {t.header.nav.map((l, i) => (
                      <SheetClose asChild key={l.href}>
                        <Link
                          href={l.href}
                          className="group flex items-center gap-4 border-b border-slate-800 py-5"
                        >
                          <span className="font-mono text-xs text-sky-500">
                            0{i + 1}_
                          </span>
                          <span className="font-mono text-xl font-bold uppercase tracking-widest text-slate-300 transition-colors group-hover:text-sky-400">
                            {l.label}
                          </span>
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="px-7 py-7">
                    <SheetClose asChild>
                      <Button asChild size="lg" className="w-full bg-sky-600 text-slate-950 hover:bg-sky-500 rounded-sm font-mono uppercase tracking-widest">
                        <Link href="/contacto">{t.header.cta}</Link>
                      </Button>
                    </SheetClose>
                    <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-slate-500 text-center">
                      {t.header.contactEmail}
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}