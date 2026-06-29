import type { Audience } from "./site";

export const audienceRoutes: {
  key: Audience;
  label: string;
  href: string;
}[] = [
  { key: "education", label: "Education Institution", href: "/partner?audience=education" },
  { key: "district", label: "School District / CTE Leader", href: "/partner?audience=district" },
  { key: "workforce", label: "Workforce / Community Organization", href: "/partner?audience=workforce" },
  { key: "employer", label: "Employer / Contractor", href: "/partner?audience=employer" },
  { key: "funding", label: "Funding / State Partner", href: "/partner?audience=funding" },
  { key: "parent", label: "Parent / Family", href: "/partner?audience=parent" },
  { key: "learner", label: "Learner", href: "/partner?audience=learner" },
];

// Friendly labels used to pre-fill / confirm the partner form when arriving via ?audience=
export const audienceLabels: Record<Audience, string> = {
  education: "Education institution",
  district: "School district / CTE leader",
  workforce: "Workforce / community organization",
  employer: "Employer / contractor",
  funding: "Funding / state partner",
  parent: "Parent / family",
  learner: "Learner",
};
