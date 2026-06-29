import Link from "next/link";
import { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`container-x ${className}`}>{children}</div>;
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-4">{children}</p>;
}

export function TickRule({ className = "" }: { className?: string }) {
  return <div className={`tick-rule ${className}`} aria-hidden="true" />;
}

export function TrustNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-md border border-rule-soft bg-cream px-5 py-4">
      <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accent">Claim discipline</p>
      <p className="mt-1.5 text-[0.92rem] leading-relaxed text-slate">{children}</p>
    </div>
  );
}

export function Breadcrumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-muted">
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((c, i) => (
          <li key={i} className="flex items-center gap-2">
            {c.href ? (
              <Link href={c.href} className="hover:text-accent">{c.label}</Link>
            ) : (
              <span className="text-ink">{c.label}</span>
            )}
            {i < trail.length - 1 && <span aria-hidden="true" className="text-rule">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
