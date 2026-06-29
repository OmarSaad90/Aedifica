"use client";

import Link from "next/link";
import { useState } from "react";
import { primaryNav, headerCta } from "@/data/navigation";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-rule-soft bg-paper/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-baseline gap-3">
          <span className="font-mono text-base font-semibold uppercase tracking-[0.2em] text-ink">
            Aedifica
          </span>
          <span className="hidden text-[0.78rem] text-muted sm:inline">{site.tagline}</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {primaryNav.map((l) => (
            <Link key={l.href} href={l.href} className="text-[0.9rem] font-medium text-slate hover:text-accent">
              {l.label}
            </Link>
          ))}
          <Link href={headerCta.href} className="btn btn-dark px-5 py-2.5 text-[0.85rem]">
            {headerCta.label}
          </Link>
        </nav>

        <button
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-rule-soft bg-paper md:hidden" aria-label="Mobile">
          <div className="container-x flex flex-col gap-1 py-4">
            {primaryNav.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-[0.95rem] font-medium text-slate">
                {l.label}
              </Link>
            ))}
            <Link href={headerCta.href} onClick={() => setOpen(false)} className="btn btn-dark mt-2">
              {headerCta.label}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
