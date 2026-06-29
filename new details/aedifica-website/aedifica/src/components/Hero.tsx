import Link from "next/link";
import { ReactNode } from "react";

export default function Hero({
  eyebrow,
  title,
  highlight,
  copy,
  primary,
  secondary,
  note,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  highlight?: string;
  copy: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  note?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="blueprint absolute inset-0 opacity-60" aria-hidden="true" />
      {/* structural line motif */}
      <svg className="absolute inset-x-0 top-0 h-40 w-full opacity-30" viewBox="0 0 1200 160" preserveAspectRatio="none" aria-hidden="true">
        <g stroke="#6667AB" strokeWidth="1" fill="none">
          <path d="M0 120 L1200 120" />
          <path d="M0 120 L150 50 L300 120 L450 50 L600 120 L750 50 L900 120 L1050 50 L1200 120" />
        </g>
      </svg>

      <div className="container-x relative py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5 text-white/60">{eyebrow}</p>
          <h1 className="text-[clamp(2.4rem,5vw,3.9rem)] font-bold leading-[1.05]">
            {title} {highlight && <span className="text-accent">{highlight}</span>}
          </h1>
          <p className="mt-6 max-w-2xl text-[1.15rem] leading-relaxed text-white/80">{copy}</p>

          {(primary || secondary) && (
            <div className="mt-9 flex flex-wrap gap-3">
              {primary && <Link href={primary.href} className="btn btn-primary">{primary.label}</Link>}
              {secondary && <Link href={secondary.href} className="btn btn-ghost">{secondary.label}</Link>}
            </div>
          )}

          {note && (
            <p className="mt-8 max-w-xl border-l-2 border-accent/60 pl-4 text-[0.9rem] leading-relaxed text-white/60">
              {note}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
