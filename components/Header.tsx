"use client";

import Link from "next/link";
import { useState } from "react";
import { company, navigation } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white shadow-soft">
            <span className="text-lg font-semibold text-accent">1001</span>
          </span>
          <span className="text-base font-semibold tracking-tight">
            1001 Мебель
            <span className="block text-xs font-normal text-slate/70">
              мебель на заказ в Сочи
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-accent">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={company.phoneHref}
            className="text-sm font-semibold text-slate hover:text-accent"
          >
            {company.phone}
          </a>
          <a
            href={company.whatsapp}
            className="rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-slate shadow-soft transition hover:-translate-y-0.5 hover:border-accent hover:text-accent"
          >
            WhatsApp
          </a>
        </div>

        <button
          className="flex items-center gap-2 rounded-full border border-line bg-white px-3 py-2 text-sm font-semibold text-slate shadow-soft lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Открыть меню"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Меню
        </button>
      </div>

      {open && (
        <div className="lg:hidden" id="mobile-menu">
          <div className="border-t border-line bg-sand px-4 py-5">
            <nav className="flex flex-col gap-3 text-base font-medium">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-white px-4 py-3 shadow-soft"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={company.phoneHref}
                className="rounded-xl border border-line bg-white px-4 py-3 text-center font-semibold"
              >
                {company.phone}
              </a>
              <a
                href={company.whatsapp}
                className="rounded-xl bg-graphite px-4 py-3 text-center font-semibold text-white"
              >
                WhatsApp
              </a>
              <button
                onClick={() => setOpen(false)}
                className="text-center text-sm text-slate/70"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
