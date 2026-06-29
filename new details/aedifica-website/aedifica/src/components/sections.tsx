import Link from "next/link";
import { ReactNode } from "react";
import { Container, SectionEyebrow } from "./primitives";
import { audienceRoutes } from "@/data/audiences";

export function PageIntro({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-rule-soft py-16 lg:py-20">
      <Container>
        <div className="max-w-text">
          {eyebrow && <SectionEyebrow>{eyebrow}</SectionEyebrow>}
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-tight text-ink">{title}</h1>
          {copy && <p className="mt-5 text-[1.15rem] leading-relaxed text-slate">{copy}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}

export function CTASection({
  eyebrow = "Get started",
  title,
  copy,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  copy: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="bg-ink text-white">
      <Container>
        <div className="py-20 text-center lg:py-24">
          <p className="eyebrow mb-4 text-accent">{eyebrow}</p>
          <h2 className="mx-auto max-w-2xl text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight">{title}</h2>
          <p className="mx-auto mt-5 max-w-xl text-[1.1rem] leading-relaxed text-white/80">{copy}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link href={primary.href} className="btn btn-primary">{primary.label}</Link>
            {secondary && <Link href={secondary.href} className="btn btn-ghost">{secondary.label}</Link>}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function AudienceRouter() {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <Container>
        <SectionEyebrow>Audience</SectionEyebrow>
        <h2 className="max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
          Which part of the pathway do you represent?
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {audienceRoutes.map((a) => (
            <Link
              key={a.key}
              href={a.href}
              className="card card-hover group flex items-center justify-between px-5 py-4"
            >
              <span className="text-[0.98rem] font-medium text-ink">{a.label}</span>
              <span className="font-mono text-accent transition-transform group-hover:translate-x-1">→</span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
