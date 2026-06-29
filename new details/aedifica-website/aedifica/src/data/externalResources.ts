// Every entry is a PLACEHOLDER. No external claim is hardcoded as verified.
// URLs must be confirmed against official sources before launch.
export interface ExternalResource {
  label: string;
  placement: string;
  reason: string;
  url: string; // placeholder
  status: "needs official URL verification before launch";
}

export const externalResources: ExternalResource[] = [
  {
    label: "NJDOE — Career & Technical Education / Perkins V",
    placement: "Pathway page · Funding & state partner section",
    reason: "CTE program-of-study and Perkins V outcome context for districts.",
    url: "#verify-njdoe-cte",
    status: "needs official URL verification before launch",
  },
  {
    label: "NJEDA — Workforce, innovation & economic development funding",
    placement: "Launch page · Funding & state partner section",
    reason: "Funding pathways for institutional partners.",
    url: "#verify-njeda",
    status: "needs official URL verification before launch",
  },
  {
    label: "NJDOL — Apprenticeship / pre-apprenticeship (NJBUILD, PACE, GAINS)",
    placement: "Launch page · Rebuild page",
    reason: "Apprenticeship alignment and workforce grant context.",
    url: "#verify-njdol",
    status: "needs official URL verification before launch",
  },
  {
    label: "NCCER — Credential information",
    placement: "Rebuild page (conditional / credential-aligned)",
    reason: "Credential-aligned reference; describe as pending authorization until confirmed.",
    url: "#verify-nccer",
    status: "needs official URL verification before launch",
  },
  {
    label: "OSHA — Outreach Training",
    placement: "Rebuild page (conditional)",
    reason: "Safety credential reference; describe accurately and conditionally.",
    url: "#verify-osha",
    status: "needs official URL verification before launch",
  },
  {
    label: "Stevens Institute of Technology — delivery experience",
    placement: "Impact · Building Bridges (only if approved for publication)",
    reason: "Prior delivery partner; publish only with approval.",
    url: "#verify-stevens",
    status: "needs official URL verification before launch",
  },
  {
    label: "Hillside Innovation Academy / Building Bridges",
    placement: "Building Bridges page (only if approved for publication)",
    reason: "Prior delivery site; publish only with approval.",
    url: "#verify-hia",
    status: "needs official URL verification before launch",
  },
];
