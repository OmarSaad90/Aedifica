// Brand foundation and shared constants — single source of truth for site-wide copy.
export const site = {
  name: "Aedifica",
  legalName: "Aedifica LLC",
  tagline: "We build the builders.",
  mantra: "Earth. Engineers. Education.",
  domain: "https://edfca.netlify.app",
  eyebrow: "Construction-Management Workforce Architecture · New Jersey",
  promise:
    "Talent is not missing. The pathway is. Aedifica builds the pathway from exposure to credential, from classroom to jobsite, and from overlooked potential to measurable workforce outcomes.",
  positioning:
    "Aedifica builds disciplined construction-management workforce pathways that connect overlooked talent with education institutions, workforce partners, employers, and advancement opportunities through program design, employer validation, apprenticeship alignment, practical instruction, and transparent outcomes.",
  serviceArea: "New Jersey & the New York metro region",
  contactEmail: "info@edfca.com",
  launchNote:
    "Initial launch focus: Rebuild adult bridge cohorts and Launch pathway-design services. Expansion offerings follow credible implementation evidence and outcome reporting.",
} as const;

export type Audience =
  | "education"
  | "district"
  | "workforce"
  | "employer"
  | "funding"
  | "parent"
  | "learner";
