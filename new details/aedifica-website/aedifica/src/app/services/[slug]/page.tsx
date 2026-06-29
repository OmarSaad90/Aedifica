import Link from "next/link";
import { notFound } from "next/navigation";
import { Container, SectionEyebrow, Breadcrumbs, TrustNote } from "@/components/primitives";
import { AudienceRouter } from "@/components/sections";
import { FeatureList, LinkCard } from "@/components/cards";
import { OutcomeCommitment } from "@/components/diagrams";
import { ExternalResourceLinks } from "@/components/blocks";
import { services, getService } from "@/data/services";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) return {};
  return pageMeta({ title: `${s.name}`, description: s.summary, path: `/services/${s.slug}` });
}

// services that show public-sector resource links, and the filter to use
const resourceFilter: Record<string, string> = {
  launch: "Launch",
  pathway: "Pathway",
  rebuild: "Rebuild",
};

export default function ServiceDetail({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) notFound();

  const related = s.related.map(getService).filter(Boolean);
  const isLaunchStage = s.stage === "Launch-stage";

  return (
    <>
      {/* Hero band */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="blueprint absolute inset-0 opacity-50" aria-hidden="true" />
        <Container>
          <div className="relative py-16 lg:py-20">
            <Breadcrumbs trail={[{ label: "Services", href: "/services" }, { label: s.shortName }]} />
            <div className="mt-6 flex items-center gap-3">
              <span className={`font-mono text-[0.66rem] uppercase tracking-[0.12em] ${isLaunchStage ? "text-accent" : "text-white/60"}`}>
                {s.stage}
              </span>
            </div>
            <h1 className="mt-3 max-w-3xl text-[clamp(2.1rem,4.5vw,3.4rem)] font-bold leading-[1.06]">{s.name}</h1>
            <p className="mt-5 max-w-2xl text-[1.15rem] leading-relaxed text-white/80">{s.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {s.ctas.slice(0, 2).map((c, i) => (
                <Link key={c.label} href={c.href} className={i === 0 ? "btn btn-primary" : "btn btn-ghost"}>
                  {c.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Stage note / claim discipline */}
      <section className="border-b border-rule-soft py-8">
        <Container>
          <TrustNote>{s.stageNote}</TrustNote>
        </Container>
      </section>

      {/* Positioning */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <SectionEyebrow>Positioning</SectionEyebrow>
              <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight text-ink">What {s.shortName} is.</h2>
            </div>
            <p className="self-center text-[1.1rem] leading-relaxed text-slate">{s.positioning}</p>
          </div>
        </Container>
      </section>

      {/* Who it's for */}
      <section className="border-t border-rule-soft bg-cream py-16 lg:py-20">
        <Container>
          <SectionEyebrow>Who it&apos;s for</SectionEyebrow>
          <h2 className="mb-8 max-w-2xl text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight text-ink">
            Built for the people and institutions ready to build.
          </h2>
          <FeatureList items={s.who} />
        </Container>
      </section>

      {/* What participants learn / what's included */}
      {s.learn && (
        <section className="py-16 lg:py-20">
          <Container>
            <SectionEyebrow>What it includes</SectionEyebrow>
            <h2 className="mb-10 max-w-2xl text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight text-ink">
              The work, in the tools of the work.
            </h2>
            <div className="grid gap-px overflow-hidden rounded-md border border-rule-soft bg-rule-soft sm:grid-cols-2">
              {s.learn.map((l) => (
                <div key={l.title} className="bg-paper p-6">
                  <h3 className="text-[1.05rem] font-bold text-ink">{l.title}</h3>
                  <p className="mt-2 text-[0.92rem] leading-relaxed text-slate">{l.body}</p>
                </div>
              ))}
            </div>
            {s.includes && (
              <div className="mt-10">
                <FeatureList items={s.includes} />
              </div>
            )}
          </Container>
        </section>
      )}

      {/* Public-sector resources for relevant services */}
      {resourceFilter[s.slug] && (
        <section className="border-t border-rule-soft py-12">
          <Container>
            <ExternalResourceLinks filter={resourceFilter[s.slug]} />
          </Container>
        </section>
      )}

      {/* Outcome commitment for launch-stage workforce offerings */}
      {s.slug === "rebuild" && <OutcomeCommitment />}

      {/* Related + CTAs */}
      <section className="border-t border-rule-soft py-16 lg:py-20">
        <Container>
          <SectionEyebrow>Take the next step</SectionEyebrow>
          <h2 className="mb-8 max-w-2xl text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight text-ink">
            Ways to engage with {s.shortName}.
          </h2>
          <div className="flex flex-wrap gap-3">
            {s.ctas.map((c, i) => (
              <Link key={c.label} href={c.href} className={i === 0 ? "btn btn-primary" : "btn btn-outline"}>
                {c.label}
              </Link>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-14">
              <p className="eyebrow mb-5">Related offerings</p>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => r && (
                  <LinkCard key={r.slug} title={r.name} copy={r.summary} href={`/services/${r.slug}`} cta="View" />
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>

      <AudienceRouter />
    </>
  );
}
