import Link from "next/link";
import { Container, SectionEyebrow, Breadcrumbs, TrustNote } from "@/components/primitives";
import { MetricCard, FeatureList } from "@/components/cards";
import { CTASection } from "@/components/sections";
import { buildingBridgesMetrics } from "@/data/projects";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Building Bridges at Hillside Innovation Academy",
  description:
    "How 21 Hillside middle schoolers spent 10 weeks as engineers — designing, testing, and defending bridge prototypes. A Hillside Innovation Academy × Stevens collaboration informing the Aedifica Explore model.",
  path: "/impact/building-bridges",
});

const goals = [
  "Engage middle schoolers at a critical STEM inflection point through a sustained, hands-on engineering challenge.",
  "Connect engineering design to geography, transportation needs, community impact, and sustainability.",
  "Build proportional reasoning, data analysis, cost estimation, written communication, and public presentation.",
  "Serve as a STEM capstone and an on-ramp to high-school engineering and related pathways.",
];

const highlights = [
  "Students moved from describing engineering as “fixing things” to “designing, creating, testing, and improving solutions.”",
  "Four teams built and defended bridge prototypes before a panel of professional civil engineering judges.",
  "Families filled the room at Stevens for the final showcase — connecting student achievement to home and community.",
  "Six of eleven eighth-grade participants earned acceptance into the selective UCVTS for 2025–26.",
];

export default function BuildingBridges() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="blueprint absolute inset-0 opacity-50" aria-hidden="true" />
        <Container>
          <div className="relative py-16 lg:py-20">
            <Breadcrumbs trail={[{ label: "Impact", href: "/impact" }, { label: "Building Bridges" }]} />
            <p className="eyebrow mt-6 text-white/60">Verified prior delivery · Middle-school STEM</p>
            <h1 className="mt-3 max-w-3xl text-[clamp(2.1rem,4.5vw,3.4rem)] font-bold leading-[1.06]">
              Building Bridges at Hillside Innovation Academy
            </h1>
            <p className="mt-5 max-w-2xl text-[1.15rem] leading-relaxed text-white/80">
              A 10-week program in which 21 Hillside middle schoolers designed, built, tested, and defended a bridge
              across the Hudson River — a Hillside Innovation Academy × Stevens Institute of Technology collaboration that
              informs the Aedifica Explore model.
            </p>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div className="prose-body space-y-4">
              <SectionEyebrow>Program overview</SectionEyebrow>
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">Why the project matters.</h2>
              <p>
                Middle school is where students decide whether STEM is for them. Building Bridges meets students at that
                inflection point with real engineering work: define a problem, model and cost a design, weigh risk and
                sustainability, build and test a prototype, and defend the result in public.
              </p>
              <p>
                The program ran as a school-day STEM elective at a STEM-focused magnet middle school, with the school&apos;s
                own instructors carrying the learning through the week between sessions — a model of shared ownership
                between a district and a university partner.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">Program goals</p>
              <FeatureList items={goals} />
            </div>
          </div>
        </Container>
      </section>

      {/* Verified metrics */}
      <section className="border-y border-rule-soft bg-cream py-16 lg:py-20">
        <Container>
          <SectionEyebrow>Confirmed figures</SectionEyebrow>
          <h2 className="mb-8 max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
            Impact and success, on the record.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {buildingBridgesMetrics.map((m) => <MetricCard key={m.label} metric={m} />)}
          </div>
        </Container>
      </section>

      {/* Highlights */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionEyebrow>Key highlights</SectionEyebrow>
          <h2 className="mb-8 max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
            What changed for students.
          </h2>
          <FeatureList items={highlights} />
          <p className="mt-6 max-w-text text-[0.92rem] italic leading-relaxed text-muted">
            Student quotes and outcomes are anonymized to protect privacy. No family quote is published without consent,
            and names, faces, and voices are published only with written permission, including parent or guardian consent
            for minors.
          </p>
        </Container>
      </section>

      {/* Relevance + looking ahead */}
      <section className="border-t border-rule-soft bg-cream py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="prose-body space-y-4">
              <SectionEyebrow>Why it matters to partners</SectionEyebrow>
              <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight text-ink">
                Relevant to schools, families, and state partners.
              </h2>
              <p>
                For schools and parents, Building Bridges is a credible example of rigorous, hands-on STEM. For districts
                and state partners, it demonstrates in-district delivery, university partnership, and a clear line from
                early exposure toward advanced STEM pathways.
              </p>
            </div>
            <div className="prose-body space-y-4">
              <SectionEyebrow>Looking ahead</SectionEyebrow>
              <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight text-ink">An on-ramp, not an endpoint.</h2>
              <p>
                Building Bridges informs Aedifica Explore — and connects forward to Pathway as students move toward
                high-school construction-management and engineering coursework. No outcomes are guaranteed; the work is in
                keeping the door open.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <TrustNote>
              References to the Hillside Innovation Academy and Stevens Institute of Technology partnership should be
              confirmed as approved for publication before launch. All measurable claims should be verified before
              publishing.
            </TrustNote>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <div className="flex flex-wrap gap-3">
            <Link href="/services/explore" className="btn btn-dark">View Aedifica Explore</Link>
            <Link href="/services/pathway" className="btn btn-outline">Discuss a District STEM Pathway</Link>
            <Link href="/partner?audience=funding" className="btn btn-outline">Support a Future Cohort</Link>
          </div>
        </Container>
      </section>

      <CTASection
        title="Bring Explore to your school."
        copy="If Building Bridges is the kind of experience you want for your students, Aedifica can help you design it."
        primary={{ label: "Bring Explore to Your School", href: "/partner?audience=education" }}
        secondary={{ label: "Parent / Family Interest", href: "/partner?audience=parent" }}
      />
    </>
  );
}
