import Link from "next/link";
import { PageIntro, AudienceRouter, CTASection } from "@/components/sections";
import { Container, SectionEyebrow } from "@/components/primitives";
import { ProgramCard } from "@/components/cards";
import { ServiceComparisonGrid } from "@/components/blocks";
import { services } from "@/data/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Services · Construction-management workforce offerings",
  description:
    "Five connected offerings — Rebuild, Launch, Pathway, Talent Pipeline, and Explore — designed as on-ramps into construction management. Rebuild and Launch lead at launch stage.",
  path: "/services",
});

const decisionTree = [
  { when: "You need an adult bridge cohort", then: "Rebuild", href: "/services/rebuild" },
  { when: "You need grant or pathway design", then: "Launch", href: "/services/launch" },
  { when: "You are a school or district", then: "Pathway", href: "/services/pathway" },
  { when: "You want early exposure for students", then: "Explore", href: "/services/explore" },
  { when: "You are an employer seeking talent", then: "Talent Pipeline", href: "/services/talent-pipeline" },
];

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="Choose the pathway that fits your learner, school, or workforce goal."
        copy="Aedifica programs are designed as connected on-ramps into construction management. Start with exposure, build structured learning, bridge adult talent, or launch a full workforce pathway with partners. Rebuild and Launch lead at launch stage; the rest activate as outcomes establish the model."
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <ProgramCard key={s.slug} service={s} />)}
          </div>
        </Container>
      </section>

      <section className="border-y border-rule-soft bg-cream py-16 lg:py-20">
        <Container>
          <SectionEyebrow>Compare</SectionEyebrow>
          <h2 className="mb-8 max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
            The offerings in one decision structure.
          </h2>
          <ServiceComparisonGrid />
          <p className="mt-6 text-[0.85rem] text-muted">
            Final program formats, calendars, costs, and credentials are customized by partner and cohort.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-20">
        <Container>
          <SectionEyebrow>Which offering fits?</SectionEyebrow>
          <h2 className="max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
            A short path to the right starting point.
          </h2>
          <div className="mt-8 divide-y divide-rule-soft border-y border-rule-soft">
            {decisionTree.map((d) => (
              <Link key={d.then} href={d.href} className="group flex flex-wrap items-center justify-between gap-3 py-5 hover:bg-cream">
                <span className="text-[1.05rem] text-slate">
                  <span className="font-mono text-[0.72rem] uppercase tracking-wide text-muted">If</span>{" "}
                  {d.when}
                </span>
                <span className="inline-flex items-center gap-2 font-semibold text-accent">
                  → {d.then}
                  <span className="transition-transform group-hover:translate-x-1">↗</span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <AudienceRouter />

      <CTASection
        title="Not sure where to start?"
        copy="Tell us who you serve and what outcome you need. Aedifica will help identify the right pathway model."
        primary={{ label: "Find your pathway", href: "/partner" }}
        secondary={{ label: "Request a planning call", href: "/partner" }}
      />
    </>
  );
}
