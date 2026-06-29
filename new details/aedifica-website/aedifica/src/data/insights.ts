export interface Insight {
  slug: string;
  title: string;
  summary: string;
  audience: string;
  relatedService: string; // slug
  body: string[]; // paragraphs — original, claim-disciplined draft copy
}

export const insights: Insight[] = [
  {
    slug: "the-missing-construction-management-pathway",
    title: "The missing construction-management pathway in New Jersey",
    summary:
      "New Jersey's construction workforce problem is not aggregate scarcity — it is channel formation. The supervisory-track route most employers say they want does not yet exist at scale.",
    audience: "Funders · Workforce partners",
    relatedService: "launch",
    body: [
      "The familiar story about construction labor is a story about scarcity: not enough workers. In New Jersey, the more precise problem is channel formation. Available workers, CTE students, and overlooked adults lack a structured, credentialed route into employer-ready construction-management work — the project administration, estimating, project-controls, and coordination roles that mid-market general contractors say they are most willing to interview for but cannot reliably find.",
      "Existing pre-apprenticeship programs tend to produce laborer-track graduates. Large general contractors hire from four-year construction-management programs and union sponsorships. Between those two routes sits a gap: no organization in the state systematically produces supervisory-track talent and proves it with placement outcomes.",
      "Aedifica's thesis is that the opportunity is to build that channel deliberately — employer-backward, credential-aligned, and reported on a consistent definition — rather than to add another general training program to a crowded field. The channel is the product. The outcomes are the proof.",
    ],
  },
  {
    slug: "credentials-necessary-not-sufficient",
    title: "Why credentials are necessary but not sufficient",
    summary:
      "A credential opens a door. It does not walk a candidate through it. What converts training into employment is employer validation, articulation, and honest reporting.",
    audience: "Employers · Funders",
    relatedService: "rebuild",
    body: [
      "Credentials matter. Safety credentials, project-management credentials, and platform certifications are real signals that an employer can read. But a credential is necessary, not sufficient. Plenty of credentialed candidates never convert that credential into a first role, because the credential was never connected to a specific employer's hiring need.",
      "What closes the gap is structure around the credential: an employer who has validated the role, a capstone the candidate can defend, an interview that actually happens, and an articulation pathway into the next step. Those are design choices, not happy accidents.",
      "This is why Aedifica treats employer commitment as a launch gate rather than a nice-to-have. Curriculum without an employer commitment is a class. The credential is the beginning of the conversation, not the end of it.",
    ],
  },
  {
    slug: "what-employers-should-validate",
    title: "What employers should validate before supporting a cohort",
    summary:
      "Before an employer lends its name to a workforce program, there are a handful of things worth confirming — and a few promises worth refusing to make.",
    audience: "Employers",
    relatedService: "talent-pipeline",
    body: [
      "An employer's most valuable contribution to a workforce program is not money — it is validation. When a contractor confirms that a curriculum matches the work their teams actually do, and commits to interview qualified completers, the program gains something no grant can buy.",
      "Before lending that validation, an employer should confirm a few things: that the role titles and wage bands in the design are real, that the capstone reflects work the candidate would actually do, and that the program reports outcomes honestly rather than redefining 'placement' to flatter a headline.",
      "Equally important is what an employer should refuse to promise: guaranteed hires. A credible program structures access and preparation, not guarantees. That honesty is what makes the relationship durable.",
    ],
  },
  {
    slug: "districts-and-construction-management-pathways",
    title: "How districts can think about construction-management pathways",
    summary:
      "For districts navigating CTE redesign, construction management is an under-built program of study with a clear line to credentials, apprenticeship, and college credit.",
    audience: "Districts · CTE leaders",
    relatedService: "pathway",
    body: [
      "Federal program-of-study standards require CTE pathways to culminate in college credit, an industry-valued credential, or registered-apprenticeship enrollment. That requirement is pushing districts toward outcomes-reportable redesign — and construction management is an under-built option with a clear line to all three.",
      "The design question for a district is not whether students are interested. It is whether the pathway is visible early enough, rigorous enough, and connected enough to real next steps to be worth a program-of-study slot. That means teacher support, employer-informed capstones, and articulation that a counselor can actually explain.",
      "Aedifica Pathway is designed as an overlay that respects what a district already does well, rather than duplicating it — informed by prior high-school engineering delivery and positioned to sequence after adult-cohort outcomes establish the model.",
    ],
  },
  {
    slug: "why-outcome-reporting-matters",
    title: "Why outcome reporting matters in workforce programs",
    summary:
      "In a field where curriculum is commoditizing, the durable advantage is a published outcomes record that is never quietly redefined.",
    audience: "Funders · Workforce partners",
    relatedService: "launch",
    body: [
      "Curriculum content is commoditizing. Free university programs, published CTE courses, and credential-distribution partnerships mean that lesson plans are no longer scarce. The advantage in workforce development has moved downstream of curriculum.",
      "What compounds is the outcomes record: placement rate, retention rate, wage progression, employer-signed pathways, articulation agreements, and repeat hiring behavior — reported on the same definitions every cohort. A program that reports rigorously and never redefines its terms builds something a competitor cannot copy: trust.",
      "The discipline is unglamorous. Continuing education is reported separately from employment. 'Placement' means the same thing in Cohort 8 that it meant in Cohort 1. That consistency is the moat.",
    ],
  },
  {
    slug: "from-middle-school-to-workforce-readiness",
    title: "From middle-school exposure to workforce readiness",
    summary:
      "Early exposure does not place anyone in a job — but it changes who sees the built environment as a place they belong. That is where a pathway begins.",
    audience: "Parents · Districts · Funders",
    relatedService: "explore",
    body: [
      "A middle-school engineering program does not produce a construction manager. What it can do is change who imagines themselves in the field at all. In the Building Bridges program, students moved from describing engineering as 'fixing things' to describing it as designing, testing, and improving — and several eighth graders earned acceptance into selective STEM high schools.",
      "That shift is early and quiet, and it should not be oversold. Exposure is an on-ramp, not an endpoint, and no outcomes are guaranteed. But a pathway that only begins in adulthood is starting late for many learners.",
      "The honest framing is the useful one: early exposure widens the doorway. What a learner does after walking through it depends on everything that follows — which is exactly why the pathway has to connect.",
    ],
  },
  {
    slug: "designing-grant-backed-workforce-pathways",
    title: "How grant-backed workforce pathways should be designed",
    summary:
      "A fundable pathway is designed before it is funded. The four-party partner cell — recruitment, fiscal, employer, articulation — comes first.",
    audience: "Funders · Workforce partners",
    relatedService: "launch",
    body: [
      "The most common failure mode in grant-backed workforce programs is sequencing: writing the proposal before the partnership exists. A fundable pathway is designed first. The four-party partner cell — a recruitment and case-management partner, a fiscal and reporting partner, an employer commitment, and an articulation pathway — is what turns a proposal into a program.",
      "Each party owns what it does best. Community-based organizations own recruitment and supportive services. Colleges and workforce boards own fiscal capacity and reporting. Employers own role definitions and interview commitments. The program operator owns curriculum, instruction, capstone design, and outcome measurement.",
      "That division of labor is not bureaucracy — it is what lets a program scale beyond a single founder and survive a funder's due diligence. Launch exists to assemble it before the first dollar is spent.",
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
