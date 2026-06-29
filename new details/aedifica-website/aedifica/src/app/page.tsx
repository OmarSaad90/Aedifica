import Link from "next/link";
import Hero from "@/components/Hero";
import { Container, SectionEyebrow, TickRule } from "@/components/primitives";
import { AudienceRouter, CTASection } from "@/components/sections";
import { ProgramCard, ProjectCard } from "@/components/cards";
import { FourGatesPathway, OutcomeCommitment } from "@/components/diagrams";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Construction-Management Workforce Pathways for New Jersey",
  description: site.positioning,
  path: "/",
});

const proofBar = [
  { k: "Launch focus", v: "Rebuild & Launch" },
  { k: "Corridor", v: "Essex–Hudson–Passaic–Union" },
  { k: "Model", v: "Employer-validated, outcome-reported" },
  { k: "Prior delivery", v: "Building Bridges · 21 students" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow={site.eyebrow}
        title="New Jersey needs a construction-management workforce pathway."
        highlight="We are building it."
        copy="Aedifica connects overlooked talent, education institutions, workforce partners, and employers through disciplined, credential-aligned programs designed for credible entry, advancement, and measurable outcomes."
        primary={{ label: "Partner with Aedifica", href: "/partner" }}
        secondary={{ label: "Explore Aedifica Rebuild", href: "/services/rebuild" }}
        note={site.launchNote}
      />

      {/* Proof / accountability bar */}
      <section className="border-b border-rule-soft bg-cream">
        <Container>
          <dl className="grid grid-cols-2 gap-px divide-rule-soft py-8 lg:grid-cols-4">
            {proofBar.map((p) => (
              <div key={p.k} className="px-2">
                <dt className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-muted">{p.k}</dt>
                <dd className="mt-1.5 text-[1.05rem] font-semibold text-ink">{p.v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* The Gap */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionEyebrow>The gap</SectionEyebrow>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight text-ink">
                The talent exists. The structured route does not.
              </h2>
            </div>
            <div className="prose-body space-y-4 self-center">
              <p>
                New Jersey&apos;s construction workforce problem is not aggregate scarcity. It is channel formation.
                Available workers, CTE students, and overlooked adults lack a structured, credentialed route into
                employer-ready construction-management work.
              </p>
              <p>
                Pre-apprenticeship programs tend to produce laborer-track graduates. Large general contractors hire from
                four-year programs and union sponsorships. Between them sits a gap: no organization in the state
                systematically produces the supervisory-track talent — project administration, estimating, project
                controls, coordination — that mid-market contractors say they are most willing to interview for but
                cannot find.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container><TickRule /></Container>

      {/* The model */}
      <section className="py-16 lg:py-24">
        <Container>
          <SectionEyebrow>The Aedifica model</SectionEyebrow>
          <h2 className="max-w-3xl text-[clamp(1.8rem,3.5vw,2.6rem)] font-bold leading-tight text-ink">
            Workforce architecture, not isolated training.
          </h2>
          <p className="mt-5 max-w-text text-[1.1rem] leading-relaxed text-slate">
            Aedifica designs the pathway from exposure to credential, classroom to jobsite, and overlooked potential to
            measurable outcomes — then proves it on the published record. The offerings connect, but each is built to
            stand on its own.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => <ProgramCard key={s.slug} service={s} />)}
          </div>
          <div className="mt-8">
            <Link href="/services" className="text-[0.9rem] font-semibold text-accent hover:underline">
              Compare all five offerings →
            </Link>
          </div>
        </Container>
      </section>

      <FourGatesPathway />
      <AudienceRouter />

      {/* Impact preview */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <SectionEyebrow>Projects & impact</SectionEyebrow>
              <h2 className="max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
                Evidence first. Verified delivery, separated from future commitments.
              </h2>
            </div>
            <Link href="/impact" className="text-[0.9rem] font-semibold text-accent hover:underline">
              View all impact →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
            <div className="card flex flex-col justify-center p-8">
              <h3 className="text-lg font-bold text-ink">Rebuild workforce outcomes</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">
                Placement, retention, credential attainment, and wage progression will be published as Rebuild cohorts
                are delivered — reported on consistent definitions and never redefined.
              </p>
              <Link href="/impact#outcome-commitment" className="mt-4 text-[0.85rem] font-semibold text-accent hover:underline">
                See the reporting commitment →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <OutcomeCommitment />

      <CTASection
        eyebrow="Ready to build a pathway?"
        title="Whether you are an institution or an employer, the pathway starts with a conversation."
        copy="Aedifica can help define the pathway and deliver it with discipline — from the first discovery workshop to a delivered cohort and a published outcome report."
        primary={{ label: "Start a Partnership Conversation", href: "/partner" }}
        secondary={{ label: "Explore the services", href: "/services" }}
      />
    </>
  );
}
