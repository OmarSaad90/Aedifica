import Link from "next/link";
import { PageIntro, CTASection } from "@/components/sections";
import { Container, SectionEyebrow, TrustNote } from "@/components/primitives";
import { ProjectCard, MetricCard } from "@/components/cards";
import { OutcomeCommitment } from "@/components/diagrams";
import { projects, buildingBridgesMetrics } from "@/data/projects";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Projects & Impact",
  description:
    "Verified prior educational delivery, separated cleanly from future workforce commitments. The Building Bridges project and Aedifica's outcome-reporting commitment.",
  path: "/impact",
});

export default function ImpactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Projects & impact"
        title="Evidence first — and honest about what is proven versus planned."
        copy="Aedifica separates two things that are easy to blur: verified prior educational delivery, and the workforce outcomes Rebuild will report once cohorts run. This page keeps them apart on purpose."
      />

      {/* Verified delivery */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionEyebrow>Verified prior delivery</SectionEyebrow>
          <h2 className="max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
            A credible, hands-on STEM pathway, already delivered.
          </h2>
          <p className="mt-4 max-w-text text-[1.05rem] leading-relaxed text-slate">
            Aedifica&apos;s foundation is real delivery — construction-management practice, pre-college engineering
            programming, and middle-school STEM. The Building Bridges project is the clearest example.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
            <div className="card flex flex-col justify-center p-8">
              <h3 className="text-lg font-bold text-ink">What this does and does not prove</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">
                Building Bridges demonstrates instructional capability, in-district delivery, and student engagement. It
                is not evidence of Aedifica workforce placement outcomes — those will be reported separately as Rebuild
                cohorts are delivered.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Verified metrics */}
      <section className="border-y border-rule-soft bg-cream py-16 lg:py-20">
        <Container>
          <SectionEyebrow>Building Bridges · verified figures</SectionEyebrow>
          <h2 className="mb-3 max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
            Documented results from the 2025 cohort.
          </h2>
          <p className="mb-10 max-w-text text-[0.95rem] text-slate">
            Every figure is drawn directly from the program&apos;s reporting. The eighth-grade next-step figure reflects
            acceptance into selective STEM high schools, not workforce placement.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {buildingBridgesMetrics.map((m) => <MetricCard key={m.label} metric={m} />)}
          </div>
          <div className="mt-8">
            <Link href="/impact/building-bridges" className="btn btn-dark">Review Building Bridges</Link>
          </div>
        </Container>
      </section>

      <OutcomeCommitment />

      <section className="py-12">
        <Container>
          <TrustNote>
            All measurable claims should be verified before publication. Outcome figures for Rebuild are future reporting
            commitments, not achieved results, and will be published as cohorts are delivered.
          </TrustNote>
        </Container>
      </section>

      <CTASection
        title="Partner on outcome reporting."
        copy="If you are a funder, district, or employer who cares about honest measurement, Aedifica wants to build the reporting standard with you."
        primary={{ label: "Request an Impact Briefing", href: "/partner?audience=funding" }}
        secondary={{ label: "Partner With Us", href: "/partner" }}
      />
    </>
  );
}
