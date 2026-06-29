import { Container, SectionEyebrow } from "./primitives";
import { MetricCard } from "./cards";
import { outcomeCommitments } from "@/data/projects";

const gates = [
  { n: "01", title: "CBO / recruitment partner", body: "A signed agreement defining recruitment, case management, attendance intervention, supportive services, and data responsibilities." },
  { n: "02", title: "Funding / fiscal partner", body: "A signed subrecipient, fee-for-service, or employer-funded agreement specifying payment triggers and reimbursement timing." },
  { n: "03", title: "Employer commitment", body: "A signed letter requiring interviews for a specified number of completers, with target role titles and wage bands." },
  { n: "04", title: "Articulation pathway", body: "A signed pathway with a registered apprenticeship sponsor, union local, county college, or employer training program." },
];

export function FourGatesPathway() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionEyebrow>How the pathway holds</SectionEyebrow>
        <h2 className="max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
          A cohort does not start until four artifacts are signed.
        </h2>
        <p className="mt-4 max-w-text text-[1.05rem] leading-relaxed text-slate">
          Curriculum without an employer commitment is a class. Employer commitment without a recruitment and funding
          partner is a sales deck. Aedifica becomes a venture only when the four-gate system is signed.
        </p>
        <div className="mt-10 grid gap-px overflow-hidden rounded-md border border-rule-soft bg-rule-soft sm:grid-cols-2 lg:grid-cols-4">
          {gates.map((g) => (
            <div key={g.n} className="bg-paper p-6">
              <span className="font-mono text-[0.9rem] font-semibold text-accent">{g.n}</span>
              <h3 className="mt-3 text-[1.05rem] font-bold leading-snug text-ink">{g.title}</h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-slate">{g.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function OutcomeCommitment() {
  return (
    <section id="outcome-commitment" className="bg-cream py-16 lg:py-20">
      <Container>
        <SectionEyebrow>Outcome reporting commitment</SectionEyebrow>
        <h2 className="max-w-2xl text-[clamp(1.6rem,3vw,2.2rem)] font-bold leading-tight text-ink">
          What Aedifica will measure — and report on a consistent definition.
        </h2>
        <p className="mt-4 max-w-text text-[1.05rem] leading-relaxed text-slate">
          These are commitments, not results. Workforce outcomes for Rebuild will be published as cohorts are delivered.
          Placement is reported separately from continuing education, and a definition set in Cohort 1 is the same
          definition used in Cohort 8.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {outcomeCommitments.map((m) => (
            <MetricCard key={m.label} metric={m} />
          ))}
        </div>
      </Container>
    </section>
  );
}

const roadmap = [
  { q: "Months 1–3", body: "Secure the four launch gates. Run 15–20 employer discovery interviews. Build the role-ladder matrix. Draft Cohort 1 curriculum only after employer role validation." },
  { q: "Months 4–6", body: "Finalize Cohort 1 funding. Sign a founding employer membership. Recruit the instructor bench. Execute the articulation pathway. Close 1–2 paid Launch advisory contracts." },
  { q: "Months 7–9", body: "Deliver Cohort 1. Track attendance, credentials, assessments, interviews, and placements. Publish an internal outcome memo. Begin Cohort 2 planning." },
  { q: "Months 10–12", body: "Release the Cohort 1 outcome report. Convert employers to paid memberships. Begin Pathway pilot conversations for the following academic year." },
];

export function Timeline() {
  return (
    <div className="relative border-l border-rule pl-8">
      {roadmap.map((r, i) => (
        <div key={i} className="relative pb-10 last:pb-0">
          <span className="absolute -left-[37px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-paper" aria-hidden="true" />
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">{r.q}</p>
          <p className="mt-2 text-[0.98rem] leading-relaxed text-slate">{r.body}</p>
        </div>
      ))}
    </div>
  );
}
