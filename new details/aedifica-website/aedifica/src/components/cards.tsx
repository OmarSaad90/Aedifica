import Link from "next/link";
import { ReactNode } from "react";
import type { Service } from "@/data/services";
import type { Metric } from "@/data/projects";
import type { Insight } from "@/data/insights";
import type { Project } from "@/data/projects";

export function ProgramCard({ service }: { service: Service }) {
  return (
    <Link href={`/services/${service.slug}`} className="card card-hover group flex flex-col p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-accent">{service.stage}</span>
      </div>
      <h3 className="mt-3 text-xl font-bold text-ink">{service.shortName}</h3>
      <p className="mt-2 flex-1 text-[0.95rem] leading-relaxed text-slate">{service.summary}</p>
      <dl className="mt-5 space-y-1.5 border-t border-rule-soft pt-4 text-[0.8rem]">
        <div className="flex gap-2">
          <dt className="w-20 shrink-0 font-mono uppercase tracking-wide text-muted">Who</dt>
          <dd className="text-slate">{service.audience}</dd>
        </div>
      </dl>
      <span className="mt-5 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-accent">
        {service.cta.label} <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

export function MetricCard({ metric }: { metric: Metric }) {
  const isCommitment = metric.status === "commitment";
  return (
    <div className="card p-6">
      <div className="flex items-baseline justify-between">
        <span className={`font-mono text-[2rem] font-bold leading-none ${isCommitment ? "text-muted" : "text-accent"}`}>
          {metric.value}
        </span>
        <span
          className={`font-mono text-[0.6rem] uppercase tracking-[0.1em] ${
            isCommitment ? "text-muted" : "text-accent"
          }`}
        >
          {isCommitment ? "Will report" : "Verified"}
        </span>
      </div>
      <p className="mt-3 text-[0.95rem] font-semibold text-ink">{metric.label}</p>
      <p className="mt-1 text-[0.85rem] leading-relaxed text-slate">{metric.meaning}</p>
    </div>
  );
}

export function LinkCard({
  title,
  copy,
  href,
  cta = "Learn more",
}: {
  title: string;
  copy: string;
  href: string;
  cta?: string;
}) {
  return (
    <Link href={href} className="card card-hover group flex flex-col p-6">
      <h3 className="text-lg font-bold text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-slate">{copy}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-accent">
        {cta} <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <Link href={`/insights/${insight.slug}`} className="card card-hover group flex flex-col p-6">
      <span className="font-mono text-[0.66rem] uppercase tracking-[0.12em] text-accent">{insight.audience}</span>
      <h3 className="mt-3 text-lg font-bold leading-snug text-ink">{insight.title}</h3>
      <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-slate">{insight.summary}</p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-accent">
        Read <span className="transition-transform group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/impact/${project.slug}`} className="card card-hover group block overflow-hidden">
      <div className="relative flex h-44 items-end overflow-hidden bg-ink p-5">
        <div className="blueprint absolute inset-0 opacity-70" aria-hidden="true" />
        <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 400 180" preserveAspectRatio="none" aria-hidden="true">
          <g stroke="#6667AB" strokeWidth="1" fill="none">
            <path d="M0 120 L400 120" />
            <path d="M0 120 L80 60 L160 120 L240 60 L320 120 L400 60" />
          </g>
        </svg>
        <span className="relative font-mono text-[0.66rem] uppercase tracking-[0.12em] text-white/80">{project.kicker}</span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold leading-snug text-ink">{project.title}</h3>
        <p className="mt-2 text-[0.92rem] leading-relaxed text-slate">{project.intro}</p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-accent">
          Review project <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}

export function FeatureList({ items }: { items: (string | ReactNode)[] }) {
  return (
    <ul className="divide-y divide-rule-soft border-y border-rule-soft">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3 py-3.5">
          <svg className="mt-1 h-4 w-4 shrink-0 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span className="text-[0.98rem] leading-relaxed text-slate">{it}</span>
        </li>
      ))}
    </ul>
  );
}
