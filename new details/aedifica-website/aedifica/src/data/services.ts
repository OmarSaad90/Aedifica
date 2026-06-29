// Five offerings. Stage language is deliberate and claim-disciplined:
// Rebuild + Launch are launch-stage (Year 1). Pathway, Talent Pipeline, Explore
// are expansion-stage (Year 2+) and are positioned as planned / informed by prior
// delivery — never as already-proven workforce outcomes.

export type Stage = "Launch-stage" | "Expansion-stage";

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  stage: Stage;
  stageNote: string;
  audience: string;
  problem: string;
  format: string;
  outcome: string;
  cta: { label: string; href: string };
  summary: string;
  positioning: string;
  // page-level content
  who: string[];
  learn?: { title: string; body: string }[];
  includes?: string[];
  ctas: { label: string; href: string }[];
  related: string[]; // slugs
}

export const services: Service[] = [
  {
    slug: "rebuild",
    name: "Aedifica Rebuild",
    shortName: "Rebuild",
    stage: "Launch-stage",
    stageNote:
      "A launch-stage offering. Cohort design is complete; outcomes will be published once Cohort 1 is delivered.",
    audience: "Adult learners, workforce boards, community-based organizations, community colleges, funders, employers.",
    problem:
      "Overlooked and returning adults have field-ready aptitude but no structured, credential-aligned route into construction-management-track work.",
    format: "A 12-week adult bridge cohort, employer-informed, with a capstone and interview week.",
    outcome:
      "Graduates prepared for immediate entry roles and a documented progression toward construction-management-track work.",
    cta: { label: "Discuss a Rebuild Cohort", href: "/partner?audience=workforce" },
    summary:
      "An adult bridge cohort for overlooked and returning learners preparing for construction-management-track opportunity — built employer-backward, not textbook-forward.",
    positioning:
      "Rebuild does not promise to mint project engineers in twelve weeks. It prepares overlooked adults for immediate entry roles and a documented progression into construction-management-track work through credential-aligned training, digital-construction literacy, employer interviews, and articulation pathways.",
    who: [
      "Adults motivated to enter or advance in construction, including career changers, veterans, returning citizens, and caregivers returning to work.",
      "Workers with field experience who want a bridge from the field into the management side of construction.",
      "Workforce boards, community-based organizations, and community colleges seeking a credible adult cohort model.",
      "Employers and funders who want to sponsor or interview prepared, emerging talent.",
    ],
    learn: [
      { title: "Construction-management literacy", body: "Project lifecycle, roles, and the vocabulary of how work actually gets coordinated on a jobsite." },
      { title: "Drawings & documentation", body: "Reading a simplified set of construction drawings; RFIs, submittals, and project documentation." },
      { title: "Estimating & scheduling", body: "Building a basic estimate and a simple schedule, and understanding how the two move together." },
      { title: "Safety & quality", body: "Safety documentation and a quality-control walkthrough, with credential-aligned safety preparation." },
      { title: "Digital construction exposure", body: "Hands-on exposure to the software platforms and AI-assisted tools used in modern construction management." },
      { title: "Jobsite communication", body: "Supervisory communication, professional reporting, and employer-facing presentation." },
      { title: "Portfolio & capstone", body: "An employer-reviewed capstone project participants can explain in an interview." },
      { title: "Resume & interview readiness", body: "Resume development, mock interviews, and an employer interview model at the close of the cohort." },
    ],
    includes: [
      "A 12-week cohort model (final calendar set with each funding or partner cohort).",
      "Credential-aligned safety and construction-management preparation. Credential authorization is conditional and confirmed per cohort.",
      "An employer capstone and interview week built into the program.",
      "Wraparound supports defined with the recruitment and case-management partner.",
      "An outcome-reporting commitment: completion, credential attainment, placement, and retention reported on a consistent definition.",
    ],
    ctas: [
      { label: "Discuss a Rebuild Cohort", href: "/partner?audience=workforce" },
      { label: "Sponsor a Cohort", href: "/partner?audience=funding" },
      { label: "Participate as an Employer", href: "/partner?audience=employer" },
      { label: "Join the Interest List", href: "/partner?audience=learner" },
    ],
    related: ["launch", "talent-pipeline"],
  },
  {
    slug: "launch",
    name: "Aedifica Launch",
    shortName: "Launch",
    stage: "Launch-stage",
    stageNote: "A launch-stage advisory offering, available now.",
    audience: "Workforce boards, CBOs, districts, community colleges, public-sector partners, and grant applicants.",
    problem:
      "Institutions with a real mandate and audience lack the design, partnerships, and funding strategy to stand up a credible construction-management pathway.",
    format: "A fixed-fee advisory engagement: pathway design, funding strategy, and implementation support.",
    outcome:
      "A fundable, deliverable, measurable workforce pathway — designed before a dollar is spent on delivery.",
    cta: { label: "Request a Launch Diagnostic", href: "/partner?audience=funding" },
    summary:
      "Aedifica Launch helps institutions design, fund, and implement construction-management workforce pathways. This is pathway architecture, not merely grant writing.",
    positioning:
      "Launch helps institutions design, fund, and implement construction-management workforce pathways. Aedifica defines the target learner, employer need, program model, curriculum map, budget, funding strategy, delivery plan, and outcome measures — the full architecture of a program, ready to fund and run.",
    who: [
      "Community colleges, vocational partners, and CTE programs building or redesigning a pathway.",
      "Workforce boards, nonprofits, agencies, and community-based organizations pursuing workforce funding.",
      "Grant applicants preparing PACE, GAINS, NJEDA, WIOA Title I, or federal apprenticeship submissions.",
      "Employers and coalitions that want to anchor a credible local pipeline.",
    ],
    learn: [
      { title: "Grant strategy & proposal authoring", body: "Funding strategy and narrative for the right opportunities, with a compliance-aware budget." },
      { title: "Curriculum map & credential alignment", body: "A curriculum framework mapped to real construction-management roles and recognized credentials." },
      { title: "Employer commitment structure", body: "An employer advisory structure and the interview commitments that keep a program accountable to hiring." },
      { title: "Logic model & KPI dashboard", body: "A program logic model and the KPI dashboard funders, boards, and agencies require." },
      { title: "Partner consortium design", body: "A four-party partner cell — recruitment, fiscal, employer, and articulation — assembled and aligned." },
      { title: "Implementation playbook", body: "A realistic implementation calendar, staffing plan, and reporting framework through the first cohort." },
    ],
    includes: [
      "A partner discovery workshop and labor-market / learner-need framing.",
      "A curriculum map and credential alignment.",
      "Employer advisory board setup.",
      "Grant narrative and budget support.",
      "A pilot cohort launch plan with defined outcome measures.",
    ],
    ctas: [
      { label: "Request a Launch Diagnostic", href: "/partner?audience=funding" },
      { label: "Discuss a Grant-Backed Pathway", href: "/partner?audience=workforce" },
      { label: "Request an Institutional Briefing", href: "/partner?audience=education" },
    ],
    related: ["rebuild", "talent-pipeline", "pathway"],
  },
  {
    slug: "pathway",
    name: "Aedifica Pathway",
    shortName: "Pathway",
    stage: "Expansion-stage",
    stageNote:
      "A planned, expansion-stage offering informed by five years of prior high-school engineering delivery. It sequences after Cohort 1 outcome data publishes.",
    audience: "High schools, districts, charter networks, county vocational schools, ESCs, and CTE stakeholders.",
    problem:
      "Construction management is rarely visible to students as a serious, reachable career direction before they choose a path.",
    format: "A planned high-school curriculum overlay: semester or year modules, teacher PD, and capstones.",
    outcome:
      "A standards-aligned pathway that makes construction-management careers visible and credible to secondary students.",
    cta: { label: "Build a School Pathway", href: "/partner?audience=education" },
    summary:
      "A planned high-school construction-management pathway overlay for career readiness, CTE alignment, capstones, teacher support, and employer-informed learning.",
    positioning:
      "Aedifica Pathway is a planned high-school construction-management pathway overlay. Its instructional design is informed by five years of prior pre-college engineering delivery to high-school audiences. It is positioned here as planned and expansion-stage; it sequences after Rebuild Cohort 1 produces outcome data.",
    who: [
      "High schools and districts that want construction management visible as a serious career direction.",
      "Charter networks and county vocational schools building CTE programs of study.",
      "Educational service commissions and CTE stakeholders aligning to Perkins V outcomes.",
      "Parents who want to understand where a construction-management pathway can lead.",
    ],
    learn: [
      { title: "School-based curriculum", body: "Semester or year modules that move from idea to design to estimate to schedule to the field." },
      { title: "CTE & program-of-study alignment", body: "Designed for alignment with CTE pathways and Perkins V program-of-study expectations." },
      { title: "Credential & articulation mapping", body: "Credential and articulation mapping where appropriate, with conditional language until authorization is confirmed." },
      { title: "Teacher professional development", body: "Structured PD so a district's own educators can deliver the pathway with confidence." },
      { title: "Capstones & employer mentors", body: "Project capstones and employer-informed, work-based learning support." },
      { title: "District reporting", body: "Reporting designed for district and program-of-study requirements." },
    ],
    includes: [
      "Delivery options: curriculum licensing, school contracts, district partnerships, grant-funded programs, teacher PD, or Aedifica-led instruction.",
      "An example course — Principles of Civil Engineering — mapped to NJ, NY, and NGSS engineering connections.",
      "Standards codes presented as alignment targets, to be confirmed against current NJSLS / NYS revisions before publication.",
    ],
    ctas: [
      { label: "Build a School Pathway", href: "/partner?audience=education" },
      { label: "Discuss a District Pilot", href: "/partner?audience=district" },
      { label: "Request Curriculum Planning", href: "/partner?audience=education" },
    ],
    related: ["explore", "launch"],
  },
  {
    slug: "talent-pipeline",
    name: "Aedifica Talent Pipeline",
    shortName: "Talent Pipeline",
    stage: "Expansion-stage",
    stageNote:
      "An expansion-stage employer offering. It activates as Rebuild cohorts produce graduates, and converts to placement-based terms once placement and retention data exist.",
    audience: "Contractors, specialty contractors, CM firms, developers, and trade associations.",
    problem:
      "Employers want to shape and access emerging construction-management talent but have no structured way to do it before hiring.",
    format: "A founding employer membership: advisory seat, interview day, capstone participation, and first-look access.",
    outcome:
      "A structured relationship to emerging talent — with no guarantee of hires, and honest retention feedback over time.",
    cta: { label: "Join Employer Discovery", href: "/partner?audience=employer" },
    summary:
      "Aedifica helps employers shape and access emerging construction-management talent through role definition, capstones, interviews, mentoring, and retention feedback.",
    positioning:
      "Talent Pipeline gives employers a structured way to shape and access emerging construction-management talent through role validation, capstone participation, interviews, mentoring, and retention feedback. It does not guarantee hires; it builds a credible, repeatable relationship to prepared candidates.",
    who: [
      "Mid-market general contractors ($50M–$300M revenue) seeking emerging supervisory-track talent.",
      "Specialty subcontractors and CM firms building a reliable interview pipeline.",
      "Developers and trade associations supporting a regional talent base.",
      "Employer coalitions anchoring a local construction-management workforce.",
    ],
    learn: [
      { title: "Role validation", body: "Define the real entry and progression roles you hire for, with titles and wage bands." },
      { title: "Employer advisory participation", body: "An advisory-board seat that keeps curriculum tied to your actual hiring needs." },
      { title: "Capstone & interview days", body: "Project-simulation review, mock interviews, branded interview days, and first-look access." },
      { title: "Graduate profiles & retention check-ins", body: "Graduate profiles when available and retention check-ins once placement data exists." },
    ],
    includes: [
      "A founding employer membership with an advisory seat and one custom training module.",
      "No guarantee of hires — the relationship is structured around access and preparation, not promises.",
      "Conversion to retainer and placement-based terms once placement and retention data exist.",
    ],
    ctas: [
      { label: "Join Employer Discovery", href: "/partner?audience=employer" },
      { label: "Host a Capstone Review", href: "/partner?audience=employer" },
      { label: "Discuss Talent Pipeline Participation", href: "/partner?audience=employer" },
    ],
    related: ["rebuild"],
  },
  {
    slug: "explore",
    name: "Aedifica Explore",
    shortName: "Explore",
    stage: "Expansion-stage",
    stageNote:
      "An expansion-stage offering built on a completed middle-school STEM implementation. Prior delivery is evidence of engagement, not a workforce-outcome claim.",
    audience: "Middle schools, high schools, parents, districts, enrichment programs, and STEM coordinators.",
    problem:
      "Students rarely see construction, infrastructure, and the built environment as something they could design, shape, and belong to.",
    format: "Early-exposure modules, workshops, and camps with project-based learning and a public showcase.",
    outcome:
      "Early career awareness, design-build confidence, and STEM identity — an on-ramp, not an endpoint.",
    cta: { label: "Bring Explore to a School", href: "/partner?audience=education" },
    summary:
      "Early-exposure modules introducing students to construction, infrastructure, engineering, design, technology, and the built environment.",
    positioning:
      "Aedifica Explore introduces younger learners to the built environment through accessible, high-energy, project-based activities. It builds on a completed middle-school implementation — the Bridging Brilliance program at Hillside Innovation Academy — which provides local evidence of student engagement and in-district delivery experience.",
    who: [
      "Middle and high schools, districts, and STEM coordinators seeking project-based exposure.",
      "After-school programs, enrichment providers, and community partners.",
      "Parents and families looking for a first, real engineering experience for a student.",
      "Funders supporting early STEM access and career awareness.",
    ],
    learn: [
      { title: "Project-based learning", body: "Bridge and infrastructure design challenges that students build, test, and present." },
      { title: "Teamwork & public speaking", body: "Structured team roles and a public showcase that builds communication and confidence." },
      { title: "STEM confidence & career awareness", body: "Early exposure to engineering, planning, sustainability, and the people who build things." },
      { title: "Flexible formats", body: "A single workshop, a multi-session series, a summer camp module, or a partner-funded program." },
    ],
    includes: [
      "A featured example — Building Bridges — delivered with Hillside Innovation Academy and Stevens Institute of Technology.",
      "Parent-, school-, and funder-facing framing of why early exposure matters.",
      "Adaptable for grades 6–9, after-school groups, camps, and school-day workshops.",
    ],
    ctas: [
      { label: "Bring Explore to a School", href: "/partner?audience=education" },
      { label: "View Building Bridges", href: "/impact/building-bridges" },
      { label: "Parent / Family Interest", href: "/partner?audience=parent" },
    ],
    related: ["pathway"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
