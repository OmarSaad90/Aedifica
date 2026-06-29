import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, Breadcrumbs, SectionEyebrow } from "@/components/primitives";
import { LinkCard } from "@/components/cards";
import { CTASection } from "@/components/sections";
import { insights, getInsight } from "@/data/insights";
import { getService } from "@/data/services";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const i = getInsight(params.slug);
  if (!i) return {};
  return pageMeta({ title: i.title, description: i.summary, path: `/insights/${i.slug}` });
}

export default function InsightArticle({ params }: { params: { slug: string } }) {
  const article = getInsight(params.slug);
  if (!article) notFound();
  const related = getService(article.relatedService);

  return (
    <>
      <section className="border-b border-rule-soft py-14 lg:py-16">
        <Container>
          <div className="max-w-text">
            <Breadcrumbs trail={[{ label: "Insights", href: "/insights" }, { label: article.title }]} />
            <p className="eyebrow mt-6">{article.audience}</p>
            <h1 className="mt-3 text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-tight text-ink">{article.title}</h1>
            <p className="mt-5 text-[1.15rem] leading-relaxed text-slate">{article.summary}</p>
          </div>
        </Container>
      </section>

      <article className="py-14 lg:py-16">
        <Container>
          <div className="prose-body max-w-text space-y-5">
            {article.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <div className="mt-14 max-w-text">
            <SectionEyebrow>Related</SectionEyebrow>
            <div className="grid gap-5 sm:grid-cols-2">
              {related && (
                <LinkCard title={related.name} copy={related.summary} href={`/services/${related.slug}`} cta="View offering" />
              )}
              <LinkCard
                title="Projects & Impact"
                copy="Verified prior delivery and Aedifica's outcome-reporting commitment."
                href="/impact"
                cta="View impact"
              />
            </div>
          </div>
        </Container>
      </article>

      <CTASection
        title="Turn the analysis into a pathway."
        copy="Aedifica designs and delivers what these articles describe — with discipline and published outcomes."
        primary={{ label: "Partner With Us", href: "/partner" }}
        secondary={{ label: "Read more insights", href: "/insights" }}
      />
    </>
  );
}
