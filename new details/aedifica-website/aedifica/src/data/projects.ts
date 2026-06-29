// Verified figures only. Every metric here is drawn directly from the supplied
// Building Bridges / EIF reporting. Workforce-placement metrics for Rebuild do
// not yet exist and are represented as future reporting commitments, never as
// achieved outcomes.

export interface Metric {
  value: string;
  label: string;
  meaning: string;
  status: "verified" | "commitment";
}

// Verified educational-delivery metrics (Building Bridges, Spring 2025).
export const buildingBridgesMetrics: Metric[] = [
  { value: "21", label: "Students served", meaning: "Seventh and eighth graders completed the 10-week program.", status: "verified" },
  { value: "10 wks", label: "Program length", meaning: "A 10-week, school-day STEM elective.", status: "verified" },
  { value: "22%", label: "Of HIA enrollment", meaning: "Share of Hillside Innovation Academy enrollment the cohort represented in 2025.", status: "verified" },
  { value: "4", label: "Capstone teams", meaning: "Four team bridge prototypes built and defended before professional judges.", status: "verified" },
  { value: "55%", label: "Eighth-grade next step", meaning: "6 of 11 eighth-grade participants accepted into the selective UCVTS for 2025–26 — advanced STEM high schools, not workforce placement.", status: "verified" },
  { value: "Year 2", label: "Collaboration", meaning: "The second program year of the Hillside × Stevens collaboration, funded by the Engineering Information Foundation.", status: "verified" },
];

// What Aedifica will measure for Rebuild — commitments, not results.
export const outcomeCommitments: Metric[] = [
  { value: "Completion", label: "Cohort completion rate", meaning: "Reported per cohort on a consistent definition.", status: "commitment" },
  { value: "Credential", label: "Credential attainment", meaning: "Share of completers earning credential-aligned outcomes, where authorized.", status: "commitment" },
  { value: "Placement", label: "Employment placement", meaning: "Placement at 90 and 180 days, reported separately from continuing education.", status: "commitment" },
  { value: "Retention", label: "Retention", meaning: "Retention at 90 and 180 days, never blended with placement.", status: "commitment" },
  { value: "Apprenticeship", label: "Apprenticeship articulation", meaning: "Registered-apprenticeship admission among placements.", status: "commitment" },
  { value: "Wage", label: "Wage at placement", meaning: "Wage at placement and progression over time.", status: "commitment" },
];

export interface Project {
  slug: string;
  title: string;
  kicker: string;
  intro: string;
  status: "Verified prior delivery" | "Planned";
}

export const projects: Project[] = [
  {
    slug: "building-bridges",
    title: "Building Bridges at Hillside Innovation Academy",
    kicker: "Verified prior delivery · Middle-school STEM",
    intro:
      "A 10-week engineering program in which 21 Hillside middle schoolers designed, built, tested, and defended a bridge across the Hudson River — a Hillside Innovation Academy × Stevens Institute of Technology collaboration that informs the Aedifica Explore model.",
    status: "Verified prior delivery",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
