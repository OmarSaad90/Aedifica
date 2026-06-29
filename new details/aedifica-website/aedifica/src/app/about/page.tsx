import { PageIntro, AudienceRouter, CTASection } from "@/components/sections";
import { Container, SectionEyebrow, TickRule } from "@/components/primitives";
import { site } from "@/data/site";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "About",
  description:
    "Aedifica is a New Jersey workforce-architecture company building construction-management pathways for overlooked learners, schools, and employers. Mission, origin, values, and leadership.",
  path: "/about",
});

const values = [
  { title: "Rigor as respect", body: "We do not simplify the work to make it accessible. We translate it. Holding learners to a real standard is how we show we believe they can meet it." },
  { title: "Translation, not transmission", body: "Curriculum is everywhere; translation is rare. Our job is to move people from where they are into work they can do — in the tools and language employers actually use." },
  { title: "Widened doorways", body: "We design for the people traditional systems overlook — justice-impacted adults, returning caregivers, veterans, and others ready to contribute. The talent pipeline, not the side door." },
  { title: "Built to be handed over", body: "We do not duplicate what partners already provide. We stay in our lane — curriculum, instruction, capstone, measurement — so the program can scale beyond any single founder." },
];

const leadership = [
  {
    name: "Dr. Karim Karam",
    role: "Co-Founder & CEO",
    bio: "Leads the graduate Construction Management program at Stevens Institute of Technology. Built and led the workforce at Sarooj Construction Company across 170+ infrastructure projects and $1B+ in value. Active PMI-NJ member; MIT graduate study and OpenCourseWare contributor.",
  },
  {
    name: "Dr. Nicole Silva",
    role: "Co-Founder & Community Partnerships Lead",
    bio: "Cross-sector workforce-development experience across Union and Essex counties, with documented community-organization relationships. Cultivated the partnership that enabled the team's existing joint programming.",
  },
  {
    name: "Kimi Stephenson",
    role: "Co-Founder & Community Program Lead",
    bio: "M.S. in Construction Engineering & Management, Stevens Institute of Technology. Professional contact with underserved-adult populations through consulting and state-agency work; co-delivered the Bridging Brilliance program with Dr. Karam.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="A workforce-architecture company, built from the talent the system overlooked."
        copy="Aedifica designs and delivers construction-management career pathways for schools, workforce partners, and employers — with a focus on learners who have talent but lack a clear route into the built environment."
      />

      {/* Mission + origin */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="prose-body space-y-4">
              <SectionEyebrow>Mission</SectionEyebrow>
              <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight text-ink">From foundations to futures.</h2>
              <p>
                Aedifica designs and delivers construction-management career pathways — adult bridge cohorts, school
                curriculum, and employer pipelines — that move overlooked learners from classroom to jobsite, with
                outcomes published on the record and an employer-validated capstone behind every credential.
              </p>
              <p className="font-medium text-ink">{site.promise}</p>
            </div>
            <div className="prose-body space-y-4">
              <SectionEyebrow>Origin</SectionEyebrow>
              <h2 className="text-[clamp(1.5rem,2.6vw,2rem)] font-bold leading-tight text-ink">Earth. Engineers. Education.</h2>
              <p>
                Aedifica grew from years of construction-management practice, teaching, pre-college engineering
                programming, and STEM outreach. The mantra names the work: the earth is the foundation — communities,
                infrastructure, and environment; engineers are the builders of possibility; education is the bridge that
                lets people enter that world and shape it.
              </p>
              <p>
                The United States is entering a generational period of infrastructure investment, and New Jersey and the
                New York metro will need not only engineers and tradespeople but the next generation of construction
                managers, coordinators, estimators, schedulers, and supervisors. Aedifica exists to build that route for
                the people ready to contribute.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Container><TickRule /></Container>

      {/* Values */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionEyebrow>Values</SectionEyebrow>
          <h2 className="mb-10 max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
            The operating principles behind the work.
          </h2>
          <div className="grid gap-px overflow-hidden rounded-md border border-rule-soft bg-rule-soft sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="bg-paper p-7">
                <h3 className="text-[1.15rem] font-bold text-ink">{v.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership */}
      <section className="border-t border-rule-soft bg-cream py-16 lg:py-20">
        <Container>
          <SectionEyebrow>Leadership</SectionEyebrow>
          <h2 className="mb-10 max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
            Three full-time co-founders.
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {leadership.map((m) => (
              <div key={m.name} className="card p-6">
                <div className="mb-4 h-14 w-14 rounded-full bg-accent-soft" aria-hidden="true" />
                <h3 className="text-lg font-bold text-ink">{m.name}</h3>
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-accent">{m.role}</p>
                <p className="mt-3 text-[0.9rem] leading-relaxed text-slate">{m.bio}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[0.85rem] text-muted">Advisory board profiles — employer, education, workforce, and community partners — will be added as confirmed.</p>
        </Container>
      </section>

      <AudienceRouter />

      <CTASection
        title="Build New Jersey's construction-management workforce with us."
        copy="Aedifica partners with institutions that want to turn interest into instruction, instruction into credentials, and credentials into opportunity."
        primary={{ label: "Partner With Us", href: "/partner" }}
        secondary={{ label: "View Impact", href: "/impact" }}
      />
    </>
  );
}
