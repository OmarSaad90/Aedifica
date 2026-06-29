import { PageIntro, CTASection } from "@/components/sections";
import { Container } from "@/components/primitives";
import { InsightCard } from "@/components/cards";
import { insights } from "@/data/insights";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Insights & Research",
  description:
    "An evidence-led view of construction-management workforce pathways in New Jersey — for funders, districts, employers, and workforce partners.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Insights & research"
        title="An evidence-led voice on construction-management workforce pathways."
        copy="Short, original analysis for the people designing, funding, and hiring from these pathways. No unsupported statistics — claims are sourced or framed as design positions."
      />
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((i) => <InsightCard key={i.slug} insight={i} />)}
          </div>
        </Container>
      </section>
      <CTASection
        title="Designing a pathway, or funding one?"
        copy="Aedifica turns these positions into practice — through Launch advisory engagements and Rebuild cohorts."
        primary={{ label: "Partner With Us", href: "/partner" }}
        secondary={{ label: "Explore the services", href: "/services" }}
      />
    </>
  );
}
