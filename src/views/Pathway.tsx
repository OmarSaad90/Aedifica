'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { Certificate, MapPin, Atom, Lightbulb, type Icon } from '@phosphor-icons/react'
import {
  CurriculumShell,
  Band,
  StandardsMatrix,
  InstructionalApproach,
  CurriculumFooter,
  type WeekRow,
} from '../components/CurriculumShell'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const INFO_ROWS = [
  ['Status', 'Continuously delivered every summer since 2022, Stevens pre-college'],
  ['Audience', 'High schools and districts, grades 9–12'],
  ['Format', 'District-embedded curriculum · project-based'],
  ['Alignment', 'NJ & NY standards · college articulation'],
  ['Outcome', 'Credential line-of-sight and industry exposure'],
] as const

const MINI_LIST = [
  'Resilient-futures curriculum: infrastructure, sustainability, and place',
  'Final projects presented for constructive peer and practitioner feedback',
  'Direct hand-off toward Launch-built institutional pathways',
] as const

const DELIVERY_STATS = [
  { value: '96–98%', label: 'rated the program Excellent each year, and 0% rated it Poor, all three years' },
  { value: '97–99%', label: 'rated Professor Karam Excellent (2022–2024)' },
  { value: '85–100%', label: 'rated the teaching above average on being motivating and approachable' },
  { value: '3 summers', label: '2022, 2023, and 2024, same course, same instructor' },
] as const

const STANDARDS_ROWS: { Icon: Icon; label: string; value: string }[] = [
  { Icon: Certificate, label: 'New Jersey (NJSLS)', value: 'HS-ETS1-1 → HS-ETS1-4 engineering design · ESS3 & Climate Change Education · 9.1 / 9.2 / 9.4 Career Readiness, Life Literacies & Key Skills.' },
  { Icon: MapPin, label: 'New York State', value: 'CDOS (Career Development & Occupational Studies) · Engineering Design · Earth Systems · Physical Science Applications · Sustainability.' },
  { Icon: Atom, label: 'NGSS', value: 'HS-ETS1-1 → 4 · HS-ESS3-1 · HS-ESS3-4 · HS-ESS3-6.' },
  { Icon: Lightbulb, label: '21st-century skills', value: 'Critical thinking · creativity · collaboration · communication · financial & global literacy.' },
]

const NINE_LESSONS = [
  'Engineering, infrastructure & society',
  'Sustainable development, the UN SDGs & climate',
  'The engineering design process',
  'Design: form vs. function, constraints & trade-offs',
  'Engineering design & architecture',
  'Bridge design: structures, loads & materials',
  'Financial evaluation: cost, ROI & life-cycle costing',
  'Environmental & social sustainability',
  'Traps in decision-making: bias, risk & analysis, into the final engineering project',
] as const

// ── Bridge Builders: 12 weeks ──
const BRIDGE_BUILDERS_WEEKS: WeekRow[] = [
  { num: 1, unit: 'Week', question: 'What is STEM, and how do engineers think?',
    desc: <>Program norms and the final-competition overview; how math, science, and engineering work together; the <strong className="text-anthracite/90 font-medium">engineering design process</strong> through a quick paper-tower challenge; students open their engineering notebooks.</>,
    chips: [
      { code: 'MS-ETS1-1', cat: 'sci', desc: 'Define the criteria and constraints of a design problem with sufficient precision.' },
      { code: 'MP1 · MP2', cat: 'math', desc: 'Make sense of problems and persevere; reason abstractly and quantitatively.' },
      { code: 'SL.PE.7.1', cat: 'ela', desc: 'Engage effectively in collaborative discussions.' },
      { code: 'W.IW.7.2', cat: 'ela', desc: 'Write informative/explanatory texts.' },
      { code: '9.4.8.CI.2', cat: 'car', desc: 'Career Readiness: generate ideas.' },
    ] },
  { num: 2, unit: 'Week', question: 'Why do we need sustainable infrastructure?',
    desc: <>Global challenges and the UN Sustainable Development Goals; a case study of aging and collapsing bridges; students map how a new Hudson crossing could advance specific SDGs. Quick-write: <strong className="text-anthracite/90 font-medium">why our community needs better bridges</strong>.</>,
    chips: [
      { code: 'MS-ESS3-3', cat: 'sci', desc: 'Apply scientific principles to design solutions that minimize human impact on the environment (extension).' },
      { code: 'RI.AA.7.7', cat: 'ela', desc: 'Evaluate the argument and claims in a text.' },
      { code: 'W.IW.7.2', cat: 'ela', desc: 'Write informative/explanatory texts.' },
      { code: '9.4.8.CT.1', cat: 'car', desc: 'Identify a problem from multiple viewpoints.' },
    ] },
  { num: 3, unit: 'Week', question: 'What exactly is the Hudson bridge problem?',
    desc: <>Teams investigate the geographic and social setting of a Hudson crossing using maps, photos, and demographic data; <strong className="text-anthracite/90 font-medium">define criteria and constraints</strong> (span, clearance, budget, environment, community need) and draft a formal problem statement.</>,
    chips: [
      { code: 'MS-ETS1-1', cat: 'sci', desc: 'Define the criteria and constraints of a design problem.' },
      { code: '7.RP.A', cat: 'math', desc: 'Analyze proportional relationships; scale and unit rates.' },
      { code: 'W.AW.7.1', cat: 'ela', desc: 'Write arguments to support claims.' },
      { code: 'SL.PE.7.1', cat: 'ela', desc: 'Collaborative discussions.' },
      { code: '9.4.8.IML.3', cat: 'car', desc: 'Evaluate digital sources.' },
    ] },
  { num: 4, unit: 'Week', question: 'How do structure and geometry keep bridges standing?',
    desc: 'Bridge types, beam, arch, truss, suspension, cable-stayed, and how form follows function; a mini-lab modeling forces in trusses and supports; students sketch two conceptual designs, labeling geometry and load paths.',
    chips: [
      { code: 'MS-ETS1-2', cat: 'sci', desc: 'Evaluate competing design solutions.' },
      { code: 'MS-PS2', cat: 'sci', desc: 'Forces and motion (extension).' },
      { code: '7.G', cat: 'math', desc: 'Draw, construct, and describe geometrical figures; angle relationships.' },
      { code: '8.G', cat: 'math', desc: 'Understand congruence and similarity (truss units).' },
      { code: 'W.IW.7.2', cat: 'ela', desc: 'Explain design choices in writing.' },
    ] },
  { num: 5, unit: 'Week', question: 'How can we design and model our bridges digitally?',
    desc: <>Students create a scaled drawing and a <strong className="text-anthracite/90 font-medium">digital model</strong> (Tinkercad, SketchUp, or similar); a mini-lesson on scale factor, ratios, and proportional reasoning; basic quantity calculations from their designs.</>,
    chips: [
      { code: 'MS-ETS1-4', cat: 'sci', desc: 'Develop a model to generate data for iterative testing and modification.' },
      { code: '7.RP.A', cat: 'math', desc: 'Scale and unit rates.' },
      { code: '7.EE.3', cat: 'math', desc: 'Solve multi-step real-life problems.' },
      { code: 'MP4', cat: 'math', desc: 'Model with mathematics.' },
      { code: '8.2.8.ED', cat: 'des', desc: 'Engineering design with technology tools.' },
    ] },
  { num: 6, unit: 'Week', question: 'Is our bridge financially sustainable?',
    desc: <>Cost estimating with materials sheets and unit costs (per meter of deck, per tower, per cable); simple payback and life-cycle thinking; students compute <strong className="text-anthracite/90 font-medium">cost per unit of load capacity</strong> as an efficiency metric.</>,
    chips: [
      { code: 'MS-ETS1-3', cat: 'sci', desc: 'Analyze data from tests to compare design solutions.' },
      { code: '7.RP.A.3', cat: 'math', desc: 'Multi-step ratio and percent problems.' },
      { code: '7.EE', cat: 'math', desc: 'Use variables to represent quantities; cost equations.' },
      { code: 'W.IW.7.2', cat: 'ela', desc: 'Informative writing, financial report section.' },
    ] },
  { num: 7, unit: 'Week', question: 'How do social and environmental factors shape the "best" design?',
    desc: <>Social sustainability and environmental justice, who benefits, who bears the costs; teams complete an <strong className="text-anthracite/90 font-medium">impact matrix</strong> scoring designs on social, economic, and environmental dimensions. Debate: is the lowest-cost bridge always best?</>,
    chips: [
      { code: 'MS-ETS1-1/2', cat: 'sci', desc: 'Criteria and constraints including social and environmental factors.' },
      { code: 'MS-ESS3-3', cat: 'sci', desc: 'Minimize human environmental impact (extension).' },
      { code: 'RI.CT.7.8', cat: 'ela', desc: "Compare and evaluate authors' perspectives." },
      { code: 'W.AW.7.1', cat: 'ela', desc: 'Write an argument on trade-offs.' },
      { code: 'SL.ES.7.3', cat: 'ela', desc: "Evaluate a speaker's argument." },
      { code: '9.4.8.CT.2', cat: 'car', desc: 'Evaluate diverse solutions.' },
    ] },
  { num: 8, unit: 'Week', question: 'What risks matter, and how do we choose among options?',
    desc: <>Risk, probability, and risk management with age-appropriate examples (overloading, storms, budget overruns); teams build a weighted <strong className="text-anthracite/90 font-medium">decision matrix</strong> across cost, strength, aesthetics, sustainability, and risk to compare alternatives.</>,
    chips: [
      { code: 'MS-ETS1-2', cat: 'sci', desc: 'Systematic evaluation of competing solutions.' },
      { code: 'MS-ETS1-3', cat: 'sci', desc: 'Analyze test data against criteria.' },
      { code: '7.SP', cat: 'math', desc: 'Investigate chance processes; informal probability.' },
      { code: '7.EE.3', cat: 'math', desc: 'Multi-step calculations; weighted scores.' },
      { code: 'SL.PE.7.1', cat: 'ela', desc: 'Collaborative discussion.' },
      { code: 'W.AW.7.1', cat: 'ela', desc: 'Justify the chosen option in writing.' },
    ] },
  { num: 9, unit: 'Week', question: 'How can we turn our design into a physical prototype?',
    desc: <>Teams build scaled <strong className="text-anthracite/90 font-medium">prototypes</strong> from final drawings under real constraints, limited materials budget, maximum length, minimum deck width, documenting issues and completing at least one redesign before the final build.</>,
    chips: [
      { code: 'MS-ETS1-2/3/4', cat: 'sci', desc: 'Develop and refine models using testable prototypes.' },
      { code: '7.G · 8.G', cat: 'math', desc: 'Measuring and adjusting geometry.' },
      { code: 'MP5', cat: 'math', desc: 'Use appropriate tools strategically.' },
      { code: '8.2.8.ED', cat: 'des', desc: 'Use tools and follow the design process.' },
    ] },
  { num: 10, unit: 'Week', question: 'How do we test, measure, and improve our bridges?',
    desc: <>A <strong className="text-anthracite/90 font-medium">bridge testing day</strong>: apply increasing load to failure, record maximum load and failure mode, collect deflection and cost data, graph results, and compare teams to identify the best design features across the cohort.</>,
    chips: [
      { code: 'MS-ETS1-3', cat: 'sci', desc: 'Analyze test data to identify best characteristics.' },
      { code: 'MS-ETS1-4', cat: 'sci', desc: 'Model for iterative testing.' },
      { code: '7.SP', cat: 'math', desc: 'Analyze and compare data distributions.' },
      { code: '7.RP · 7.EE', cat: 'math', desc: 'Load-to-cost ratios.' },
      { code: 'W.IW.7.2', cat: 'ela', desc: 'Lab report sections.' },
      { code: 'SL.II.7.2', cat: 'ela', desc: 'Interpret data in charts and graphs.' },
    ] },
  { num: 11, unit: 'Week', question: 'How do engineers communicate and justify their decisions?',
    desc: 'Students build a slide deck and short report, problem statement, design description, data and trade-offs, and a final claim for why their design is best, with mini-lessons on argument writing, technical vocabulary, and clear visual design.',
    chips: [
      { code: 'MS-ETS1-1–3', cat: 'sci', desc: 'Synthesize the entire design cycle.' },
      { code: 'W.AW.7.1', cat: 'ela', desc: 'Argument writing.' },
      { code: 'W.IW.7.2', cat: 'ela', desc: 'Technical explanation.' },
      { code: 'W.SE.7.6', cat: 'ela', desc: 'Gather and cite evidence.' },
      { code: 'SL.PI.7.4 · SL.UM.7.5', cat: 'ela', desc: 'Present claims with multimedia.' },
      { code: '9.4.8.IML.3 · TL.3', cat: 'car', desc: 'Represent data clearly; use digital tools.' },
    ] },
  { num: 12, unit: 'Week', question: "Which bridge best meets our community's needs? What did we learn?",
    desc: <>The capstone <strong className="text-anthracite/90 font-medium">Bridge Showcase &amp; Testing Competition</strong> before families, teachers, and partners; audiences score designs with a decision matrix; each student writes a reflection on how their thinking as an engineer changed over twelve weeks.</>,
    chips: [
      { code: 'MS-ETS1-1–4', cat: 'sci', desc: 'Capstone performance across the full design cycle.' },
      { code: 'SL.PE.7.1', cat: 'ela', desc: 'Collaborative discussion.' },
      { code: 'SL.PI.7.4/7.5', cat: 'ela', desc: 'Present findings with multimedia.' },
      { code: 'W.RW.7.7 · W.7.10', cat: 'ela', desc: 'Extended reflective writing.' },
      { code: '9.4.8.CI.3 · CT.3', cat: 'car', desc: 'Evaluate solutions; give feedback.' },
    ] },
]

// ── Infrastructure Fellows: 8 units + companion studio ──
const INFRA_FELLOWS_UNITS: WeekRow[] = [
  { num: 1, unit: 'Unit', question: 'Civil engineering & New Jersey infrastructure',
    desc: 'What civil engineers design and why infrastructure matters; mapping infrastructure systems; team roles and charters; a case-study gallery of NJ challenges and project-interest ranking.',
    chips: [
      { code: 'HS-ETS1-1', cat: 'sci', desc: 'Analyze a major global challenge to specify criteria and constraints.' },
      { code: 'N-Q', cat: 'math', desc: 'Use units to understand problems and guide solutions.' },
      { code: 'SL.PE.9-10.1', cat: 'ela', desc: 'Initiate and participate in collaborative discussions.' },
      { code: '9.2.12.CAP', cat: 'car', desc: 'Career awareness, exploration, preparation, and planning.' },
    ] },
  { num: 2, unit: 'Unit', question: 'Site analysis & defining the problem',
    desc: 'Reading a real site with maps, public datasets, and field observation; specifying quantitative criteria and constraints; writing a defensible engineering problem statement.',
    chips: [
      { code: 'HS-ETS1-1', cat: 'sci', desc: 'Specify qualitative and quantitative criteria and constraints.' },
      { code: 'A-CED', cat: 'math', desc: 'Create equations and inequalities to represent relationships.' },
      { code: 'S-ID', cat: 'math', desc: 'Summarize and interpret data.' },
      { code: 'W.RW.9-10.7', cat: 'ela', desc: 'Conduct short and sustained research.' },
    ] },
  { num: 3, unit: 'Unit', question: 'Structures, forces & geometry in practice',
    desc: "Load paths, member forces, and material behavior; applying geometry and modeling to evaluate structural options against the site's constraints.",
    chips: [
      { code: 'HS-ETS1-2', cat: 'sci', desc: 'Break a complex problem into manageable engineering problems.' },
      { code: 'G-MG', cat: 'math', desc: 'Apply geometric concepts in modeling situations.' },
      { code: 'MP4', cat: 'math', desc: 'Model with mathematics.' },
    ] },
  { num: 4, unit: 'Unit', question: 'Digital design & CAD',
    desc: 'Translating concepts into scaled technical drawings and CAD models; producing the dimensioned documentation engineers use to communicate and build.',
    chips: [
      { code: 'HS-ETS1-2', cat: 'sci', desc: 'Design a solution to a complex real-world problem.' },
      { code: 'G-MG', cat: 'math', desc: 'Apply geometric methods to solve design problems.' },
      { code: '8.2.12.ED', cat: 'des', desc: 'High-school engineering design and technological systems.' },
    ] },
  { num: 5, unit: 'Unit', question: 'Cost, constraints & project controls',
    desc: 'Quantity take-offs and cost estimating; budgets, schedules, and trade-offs; building a risk register and weighing prioritized criteria the way practicing engineers do.',
    chips: [
      { code: 'HS-ETS1-3', cat: 'sci', desc: 'Evaluate a solution based on prioritized criteria and trade-offs including cost, safety, reliability, and impacts.' },
      { code: 'N-Q', cat: 'math', desc: 'Reason quantitatively and use units.' },
      { code: 'A-CED', cat: 'math', desc: 'Create equations to model constraints.' },
    ] },
  { num: 6, unit: 'Unit', question: 'Stormwater & water infrastructure',
    desc: 'How communities manage water risk and protect public health; a stormwater walk and drainage sketch; green-infrastructure options and a lead-service-line case study.',
    chips: [
      { code: 'HS-ETS1-3', cat: 'sci', desc: 'Evaluate solutions accounting for environmental and societal impacts.' },
      { code: 'HS-ETS1-4', cat: 'sci', desc: 'Model the impact of proposed solutions on systems.' },
      { code: 'S-ID', cat: 'math', desc: 'Interpret data and patterns.' },
      { code: 'W.IW.9-10.2', cat: 'ela', desc: 'Write informative/explanatory texts, memo section.' },
    ] },
  { num: 7, unit: 'Unit', question: 'Coastal resilience & environmental justice',
    desc: 'Lessons from Hurricane Sandy; living-shoreline and protection options; an environmental-justice matrix and a resilience design charrette balancing protection, ecology, cost, and community.',
    chips: [
      { code: 'HS-ETS1-3', cat: 'sci', desc: 'Evaluate solutions with social, cultural, and environmental impacts.' },
      { code: 'HS-ETS1-4', cat: 'sci', desc: 'Use a computer simulation to model proposed solutions.' },
      { code: 'RI.AA.9-10', cat: 'ela', desc: 'Evaluate arguments and competing perspectives.' },
      { code: '9.4.12.CT', cat: 'car', desc: 'Evaluate diverse solutions and impacts.' },
    ] },
  { num: 8, unit: 'Unit', question: 'Technical briefing & public defense',
    desc: 'Synthesizing the project into a professional design brief and a 15-minute technical briefing defended before engineers and community partners, the studio capstone.',
    chips: [
      { code: 'HS-ETS1-1–4', cat: 'sci', desc: 'Synthesize and defend the full engineering solution.' },
      { code: 'SL.PI.9-10.4', cat: 'ela', desc: 'Present information, findings, and supporting evidence.' },
      { code: 'SL.UM.9-10.5', cat: 'ela', desc: 'Make strategic use of digital media.' },
      { code: 'W.AW.9-10.1', cat: 'ela', desc: 'Write arguments with valid reasoning and evidence.' },
    ] },
  { num: '+', unit: 'Studio', question: 'Companion studio: Smart Cities, Sensors & Environmental Monitoring (Grades 7–11)',
    desc: 'How sensors, data, and mapping help communities understand environmental conditions, sensor setup and calibration, data collection on flood-prone grounds, heat islands, air quality, and runoff, with dashboards and ethical data use. Deliverables: monitoring plan, dataset, dashboard, site map, recommendation memo.',
    chips: [
      { code: 'HS-ETS1-4', cat: 'sci', desc: 'Model the impact of proposed solutions within and between systems.' },
      { code: 'S-ID', cat: 'math', desc: 'Interpret data; investigate patterns of association.' },
      { code: 'S-IC', cat: 'math', desc: 'Make inferences and justify conclusions from data.' },
      { code: '8.1.12.DA', cat: 'des', desc: 'Computer science: data and analysis; networks.' },
      { code: '9.4.12.TL', cat: 'car', desc: 'Technology literacy and digital tools.' },
    ] },
]

// ── STEM Research Scholars: 6 phases ──
const RESEARCH_SCHOLARS_PHASES: WeekRow[] = [
  { num: 1, unit: 'Phase', question: 'Framing the research question',
    desc: 'Identifying a real New Jersey resilience problem; scoping a researchable question with measurable criteria and constraints; team charters and mentor matching.',
    chips: [
      { code: 'HS-ETS1-1', cat: 'sci', desc: 'Analyze a major global challenge to specify criteria and constraints.' },
      { code: 'W.RW.11-12.7', cat: 'ela', desc: 'Conduct sustained research to answer a question.' },
      { code: '9.2.12.CAP', cat: 'car', desc: 'Career awareness and planning.' },
    ] },
  { num: 2, unit: 'Phase', question: 'Literature & precedent review',
    desc: 'Locating and evaluating credible sources, prior solutions, and local precedents; synthesizing the state of knowledge into a written review with citations.',
    chips: [
      { code: 'RI.AA.11-12', cat: 'ela', desc: 'Integrate and evaluate multiple sources of information.' },
      { code: 'W.SE.11-12.6', cat: 'ela', desc: 'Gather relevant information; assess source credibility; cite.' },
      { code: '9.4.12.IML', cat: 'car', desc: 'Evaluate the credibility of sources.' },
    ] },
  { num: 3, unit: 'Phase', question: 'Methodology & design',
    desc: 'Designing a sound method, data collection, modeling, or prototyping, that can actually answer the question; planning for validity, sampling, and ethical data use.',
    chips: [
      { code: 'HS-ETS1-2', cat: 'sci', desc: 'Break a complex problem into manageable, solvable problems.' },
      { code: 'S-IC', cat: 'math', desc: 'Understand and evaluate random processes; make inferences.' },
      { code: 'N-Q', cat: 'math', desc: 'Reason quantitatively and use units.' },
    ] },
  { num: 4, unit: 'Phase', question: 'Data collection & analysis',
    desc: 'Carrying out the method; managing and analyzing data; interpreting results against the criteria and acknowledging uncertainty and limitations.',
    chips: [
      { code: 'HS-ETS1-4', cat: 'sci', desc: 'Use simulation/modeling to evaluate proposed solutions.' },
      { code: 'S-ID', cat: 'math', desc: 'Summarize, represent, and interpret data.' },
      { code: 'S-IC', cat: 'math', desc: 'Make inferences and justify conclusions.' },
      { code: '8.1.12.DA', cat: 'des', desc: 'Data analysis and computational tools.' },
    ] },
  { num: 5, unit: 'Phase', question: 'Recommendations & trade-offs',
    desc: 'Translating findings into evidence-based recommendations; weighing prioritized criteria, cost, equity, and environmental impact; building the capstone argument.',
    chips: [
      { code: 'HS-ETS1-3', cat: 'sci', desc: 'Evaluate a solution based on prioritized criteria and trade-offs.' },
      { code: 'W.AW.11-12.1', cat: 'ela', desc: 'Write arguments with valid reasoning and sufficient evidence.' },
      { code: '9.4.12.CT', cat: 'car', desc: 'Evaluate diverse solutions.' },
    ] },
  { num: 6, unit: 'Phase', question: 'Capstone & the public STEM Expo',
    desc: 'Producing a research poster and paper and defending the work in an oral presentation at a public STEM Expo before families, partners, and professional engineers.',
    chips: [
      { code: 'HS-ETS1-1–4', cat: 'sci', desc: 'Communicate and defend a complete engineering solution.' },
      { code: 'SL.PI.11-12.4', cat: 'ela', desc: 'Present findings, evidence, and reasoning clearly.' },
      { code: 'SL.UM.11-12.5', cat: 'ela', desc: 'Make strategic use of digital media.' },
      { code: 'W.11-12.10', cat: 'ela', desc: 'Produce clear and coherent writing.' },
    ] },
]

const CCLC_COMPONENTS = [
  { tag: 'Component 01', title: 'Academic remediation', desc: 'Daily certified-teacher tutoring in ELA and mathematics, tied to the same NJSLS standards the engineering units apply.' },
  { tag: 'Component 02', title: 'Academic enrichment', desc: 'The three engineering pathways above, the project-based, standards-aligned core of the program.' },
  { tag: 'Component 03', title: 'Positive youth development', desc: 'Authentic team roles, leadership through studio captains and the youth advisory board, and near-peer mentoring.' },
  { tag: 'Component 04', title: 'Cultural & arts', desc: 'Technical drawing, model-making, media documentation, and graphic communication of student work.' },
  { tag: 'Component 05', title: 'Health, nutrition & fitness', desc: 'Daily movement and wellness blocks plus nutrition education, connected where natural to public-health and built-environment themes.' },
  { tag: 'Component 06', title: 'Parental involvement', desc: 'Monthly family engagement, family STEM nights, the Bridge Showcase, and the public STEM Expo.' },
]

export function Pathway() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-quarry min-h-[56vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="pathway-h1">

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div>

            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.18em] bg-anthracite/10 text-anthracite px-3 py-1 mb-8 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
              Program 02 · High schools
            </motion.span>

            {/* A longer headline than the other program pages, so the scale steps down
                a notch from the shared clamp to keep this hero from wrapping to twice
                as many lines and ballooning past the others in height. */}
            <motion.h1
              id="pathway-h1"
              className="text-[2.25rem] lg:text-[3.25rem] xl:text-[3.875rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-8 max-w-[38ch] [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              Pathway brings a construction-management track into high schools and districts.
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-x-0 gap-y-3"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.38, ease: EASE }}>
              {(['Grades 9–12', 'District-embedded', 'NJ & NY aligned'] as const).map((item, i) => (
                <span key={item} className="text-[13px] text-anthracite tracking-[-0.01em]" style={{ fontFamily: 'var(--font-body)' }}>
                  {item}
                  {i < 2 && <span className="mx-4 text-anthracite/20" aria-hidden="true">·</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Program intro + info rows ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="pathway-intro-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-16 xl:gap-20 lg:items-start">

            <div>
              <motion.p
                className="text-[15.5px] text-anthracite/78 leading-[1.72] mb-6 max-w-[62ch]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, ease: EASE }}>
                Pathway brings a construction-management track into high schools and districts:
                pre-college rigor, project-based learning, and a curriculum that treats industry as a
                destination, not an afterthought. Students learn to read the built environment as form
                and function, and to see themselves running the projects that shape it.
              </motion.p>
              <motion.p
                className="text-[14.5px] text-anthracite/72 leading-[1.72] max-w-[62ch] mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
                The model draws directly on Aedifica's pre-college engineering delivery through Stevens
                Institute of Technology: students who finished those programs reported new vocabulary,
                new confidence, and new futures in civil engineering and construction management.
              </motion.p>
              <motion.p
                className="text-[14.5px] text-anthracite/72 leading-[1.72] max-w-[62ch] mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.14, ease: EASE }}>
                <strong className="text-anthracite font-medium">Existing STEM is a foundation, not a
                substitute.</strong> A strong STEM department teaches the science and math this work rests
                on. Engineering and construction management are a separate discipline: scope, schedule,
                cost, safety, sequencing, and one that sits outside most certification routes and
                teacher-preparation programs, because it is learned on projects rather than in coursework.
                Aedifica supplies instructors who practice it, and works alongside your educators rather
                than around them: they keep the classroom relationship, we bring the jobsite.
              </motion.p>

              {INFO_ROWS.map(([label, value], i) => (
                <motion.div
                  key={label}
                  className="grid grid-cols-[150px_1fr] gap-4 py-4 border-t border-sediment/25 last:border-b"
                  initial={reduce ? undefined : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, delay: i * 0.05, ease: EASE }}>
                  <p className="text-[12.5px] uppercase tracking-[0.13em] text-ink-soft font-semibold pt-0.5" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
                  <p className="text-[13.5px] text-anthracite/80 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{value}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 lg:mt-0">
              <motion.div
                className="overflow-hidden mb-8"
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
                <img
                  src="/images/stevens-program.jpg"
                  alt="High-school students in the Aedifica Pathway civil engineering program at Stevens Institute of Technology"
                  className="w-full h-[260px] lg:h-[320px] object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </motion.div>
              <ul className="list-none space-y-3">
                {MINI_LIST.map(item => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-[6px] h-[6px] rotate-45 bg-quarry mt-[7px]" aria-hidden="true" />
                    <span className="text-[13.5px] text-anthracite/78 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <motion.p
            className="text-[13px] text-anthracite/78 leading-[1.65] mt-10"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
            <strong className="text-anthracite font-medium">Delivery record:</strong> Pathway has been
            taught continuously every summer since 2022 in the Stevens Institute of Technology pre-college
            Civil Engineering course. Participant satisfaction data and sourcing are reported in{' '}
            <Link href="/impact" className="text-anthracite underline underline-offset-2 decoration-anthracite/30 hover:decoration-anthracite transition-colors duration-150">Impact &amp; accountability</Link>,
            alongside the Explore results.
          </motion.p>
        </div>
      </section>

      {/* ── Proven delivery: every summer since 2022 ── bg-bone */}
      <section className="bg-bone py-14 lg:py-20" aria-labelledby="delivery-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-16 xl:gap-20 lg:items-start mb-10 lg:mb-12">
            <div>
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
                <p className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium" style={{ fontFamily: 'var(--font-body)' }}>Proven delivery · Stevens pre-college</p>
              </motion.div>
              <motion.h2
                id="delivery-h2"
                className="text-[2rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
                The Pathway model, taught every summer since 2022.
              </motion.h2>
            </div>
            <motion.p
              className="text-[14.5px] text-anthracite/72 leading-[1.7] mt-6 lg:mt-2 max-w-[60ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              Aedifica's Pathway model is grounded in the Stevens Institute of Technology pre-college
              Civil Engineering course, taught by co-founder Dr. Karim Karam. Every summer since 2022,
              students rated the course and instructor consistently high.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l border-sediment/25">
            {DELIVERY_STATS.map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="border-r border-b border-sediment/25 px-5 py-6"
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.42, delay: i * 0.06, ease: EASE }}>
                <p className="text-[1.625rem] lg:text-[1.875rem] text-anthracite italic leading-none tracking-[-0.025em] mb-2.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>{value}</p>
                <p className="text-[12px] text-anthracite/72 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-[12px] text-anthracite/60 italic leading-[1.6] max-w-[70ch]" style={{ fontFamily: 'var(--font-body)' }}>
            Student satisfaction surveys, Stevens Institute of Technology Office of Pre-College
            Programs (2022–2024). These are participant ratings of the course and instructor, not
            academic-outcome measures. Enrollment, completion, and articulation figures for Pathway
            are not yet published.
          </p>
        </div>
      </section>

      {/* ── Principles of Civil Planning ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="lessons-h2">
        <div className="max-w-7xl mx-auto px-6">

          {/* Centered instead of pinned to either margin, so it doesn't repeat the
              same left-column shape as the section above it. */}
          <div className="mb-10 lg:mb-12 mx-auto max-w-[42rem] text-center">
            <motion.div
              className="flex items-center justify-center gap-3 mb-5"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              <p className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium" style={{ fontFamily: 'var(--font-body)' }}>Standards-aligned · New Jersey & New York</p>
            </motion.div>
            <motion.h2
              id="lessons-h2"
              className="text-[2rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-5 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
              Principles of Civil Planning, the pre-college curriculum.
            </motion.h2>
            <motion.p
              className="text-[14.5px] text-anthracite/72 leading-[1.7] mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              The high-school curriculum behind Pathway is a nine-lesson engineering-and-planning
              sequence, explicitly aligned to both New Jersey and New York standards.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-sediment/20 mb-14 lg:mb-16">
            {STANDARDS_ROWS.map(({ Icon: IconComp, label, value }, i) => (
              <motion.div
                key={label}
                className={`py-6 ${i > 0 ? 'lg:pl-8 xl:pl-10' : ''} ${i < 3 ? 'lg:pr-8 xl:pr-10 lg:border-r lg:border-sediment/20' : ''} border-b border-sediment/20 lg:border-b-0`}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.42, delay: i * 0.07, ease: EASE }}>
                <IconComp size={22} weight="regular" className="text-ink-soft mb-3.5" aria-hidden={true} />
                <p className="text-[1rem] text-anthracite font-medium tracking-[-0.01em] mb-2.5" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
                <p className="text-[13px] text-anthracite/70 leading-[1.6]" style={{ fontFamily: 'var(--font-body)' }}>{value}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-[10.5px] uppercase tracking-[0.14em] text-anthracite/55 mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            The nine lessons
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12">
            {NINE_LESSONS.map((lesson, i) => (
              <motion.div
                key={lesson}
                className="flex items-start gap-3 py-4 border-b border-sediment/20"
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.35, delay: Math.min(i * 0.04, 0.3), ease: EASE }}>
                <span className="flex-shrink-0 w-[9px] h-[9px] rotate-45 bg-quarry mt-[6px]" aria-hidden="true" />
                <span className="text-[14px] text-anthracite/85 leading-[1.45]" style={{ fontFamily: 'var(--font-body)' }}>
                  {lesson}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 lg:mt-14 print:hidden"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
            <p className="text-[10.5px] uppercase tracking-[0.16em] text-wine font-semibold mb-4 select-none" style={{ fontFamily: 'var(--font-body)' }}>This is a sample curriculum</p>
            <div className="space-y-3 max-w-[74ch]">
              <p className="text-[13.5px] text-anthracite/78 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
                <strong className="text-anthracite font-medium">What you see below is a sample, not the catalogue.</strong> <i>Resilient
                Futures</i> is a complete, real curriculum we have designed and can run; it exists to show a district how we build, not to
                define what a district receives.
              </p>
              <p className="text-[13.5px] text-anthracite/78 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
                <strong className="text-anthracite font-medium">Where it comes from.</strong> It is built on the Hillside–Stevens bridge
                programme and the Resilient Futures studio designs. Pathway&rsquo;s delivered record is continuous, every summer
                since 2022, of pre-college engineering at Stevens Institute of Technology, reported in{' '}
                <Link href="/impact" className="text-anthracite underline underline-offset-2 decoration-anthracite/30 hover:decoration-anthracite transition-colors duration-150">Impact &amp; accountability</Link>.
              </p>
              <p className="text-[13.5px] text-anthracite/78 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
                <strong className="text-anthracite font-medium">We build to order.</strong> Content, sequence, delivery mode, and calendar
                are scoped with your district, see &ldquo;Ways to run it&rdquo; above. If this sample does not fit your schedule or your
                cohort, we write the one that does.
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Curriculum shell ── bg-bone */}
      <section className="bg-bone py-14 lg:py-20 print:py-0" aria-labelledby="curriculum-h2" id="curriculum">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 lg:mb-12 print:hidden">
            <div>
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
                <p id="curriculum-h2" className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium" style={{ fontFamily: 'var(--font-body)' }}>Curriculum shells</p>
              </motion.div>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <button type="button" onClick={() => setOpen(true)} className="text-[11.5px] uppercase tracking-[0.08em] text-anthracite/75 border border-anthracite/20 px-3.5 py-2 hover:border-anthracite/45 transition-colors duration-150" style={{ fontFamily: 'var(--font-body)' }}>Expand all</button>
              <button type="button" onClick={() => setOpen(false)} className="text-[11.5px] uppercase tracking-[0.08em] text-anthracite/75 border border-anthracite/20 px-3.5 py-2 hover:border-anthracite/45 transition-colors duration-150" style={{ fontFamily: 'var(--font-body)' }}>Collapse all</button>
              <button type="button" onClick={() => { setOpen(true); setTimeout(() => window.print(), 350) }} className="text-[11.5px] uppercase tracking-[0.08em] text-anthracite/75 border border-anthracite/20 px-3.5 py-2 hover:border-anthracite/45 transition-colors duration-150" style={{ fontFamily: 'var(--font-body)' }}>Print curriculum</button>
            </div>
          </div>

          <CurriculumShell
            id="resilient"
            color="var(--color-quarry)"
            open={open}
            onToggle={() => setOpen(o => !o)}
            legendAriaLabel="Standards key, filter the units by framework"
            legendAllShownText="Showing all standards frameworks. Each week or unit carries the exact standards it addresses, color-coded and labeled by framework; hover any code for its full description. The master matrix at the end consolidates the complete alignment across all three pathways."
            meta="Grades 6–12 · three grade-band pathways · full curriculum"
            collapsedTitle="Resilient Futures: Standards-Aligned STEM Engineering Curriculum"
            eyebrow="Grades 6–12 · Engineering Design · Out-of-School-Time STEM"
            title="We build the builders."
            intro="The complete Resilient Futures curriculum, a three-pathway engineering program where students design real New Jersey infrastructure, from a first paper tower in grade 6 to a mentored capstone defended at a public STEM Expo."
            facts={[
              { value: '3', label: 'Grade-band pathways' },
              { value: '6–12', label: 'Students served' },
              { value: '5', label: 'Standards frameworks' },
              { value: '40+', label: 'Aligned standards' },
            ]}
            toc={[
              { label: 'Bridge Builders', href: '#pathway-bridge' },
              { label: 'Infrastructure Fellows', href: '#pathway-infra' },
              { label: 'Research Scholars', href: '#pathway-research' },
              { label: 'Standards Matrix', href: '#pathway-standards' },
              { label: '21st CCLC Map', href: '#pathway-cclc' },
            ]}
            frameworks={[
              { cat: 'sci', name: 'NGSS / Science' },
              { cat: 'math', name: 'NJSLS Math' },
              { cat: 'ela', name: 'NJSLS ELA' },
              { cat: 'des', name: 'Design & Tech' },
              { cat: 'car', name: 'Career Readiness' },
            ]}>

            <Band dark color="var(--color-quarry)" id="pathway-bridge" numLabel="01" rangeLabel="Grades 6–8 · Middle School" title="Bridge Builders"
              desc="A twelve-week engineering studio built on the proven Hillside–Stevens bridge program. Students run a full engineering design cycle on an authentic Hudson River crossing challenge: defining the problem, modeling and costing designs, weighing risk and sustainability, building and load-testing prototypes, and defending their work at a public showcase."
              meta={[
                { label: 'Essential question', value: 'How can young engineers design a bridge that is strong, affordable, sustainable, and useful to the community?' },
                { label: 'NJ anchor challenge', value: 'Hudson River crossing · aging bridges · flooding & transportation resilience' },
                { label: 'Student deliverables', value: 'Engineering notebook · scaled & digital model · cost estimate · risk/sustainability matrix · tested prototype · final presentation' },
              ]}
              weeks={BRIDGE_BUILDERS_WEEKS} />

            <Band dark color="var(--color-quarry)" id="pathway-infra" numLabel="02" rangeLabel="Grades 9–12 · High School" title="Infrastructure Fellows"
              desc="An applied civil-engineering pre-college studio. Fellows take a real local site, a bridge, intersection, stormwater system, water main, or coastline, through professional practice: site analysis, public datasets, CAD, cost and risk modeling, and a formal technical briefing. A companion Smart Cities studio adds sensors, data, and environmental monitoring."
              meta={[
                { label: 'Essential question', value: 'How do civil engineers design infrastructure that is safe, durable, affordable, sustainable, equitable, and resilient under real constraints?' },
                { label: 'NJ anchor challenge', value: 'Local bridge · intersection & transportation · stormwater & flooding · water infrastructure · coastal resilience' },
                { label: 'Core skills', value: 'Site analysis · public datasets · surveying · CAD · traffic counts · cost & risk · sensors & dashboards · technical briefing' },
                { label: 'Student deliverables', value: 'Design brief · technical drawings · calculations · cost estimate · risk register · sustainability matrix · 15-minute briefing' },
              ]}
              weeks={INFRA_FELLOWS_UNITS} />

            <Band dark color="var(--color-quarry)" id="pathway-research" numLabel="03" rangeLabel="Grades 11–12 · Advanced" title="STEM Research Scholars"
              desc="A mentored research and design intensive for advanced students. Scholars work in teams with university and professional mentors to investigate a real New Jersey resilience question, run a methodology, analyze data, and produce a capstone defended at a public STEM Expo, a true on-ramp to college research and engineering pathways."
              meta={[
                { label: 'Essential question', value: 'How can student researchers investigate a real resilience challenge and produce evidence-based recommendations?' },
                { label: 'Mentoring model', value: 'Near-peer college mentors and professional engineers via the Stevens partnership' },
                { label: 'Student deliverables', value: 'Research proposal · literature review · methodology · dataset & analysis · capstone poster & paper · oral defense at the STEM Expo' },
              ]}
              weeks={RESEARCH_SCHOLARS_PHASES} />

            <StandardsMatrix id="pathway-standards" eyebrow="Consolidated alignment" title="Standards alignment matrix"
              desc="The complete set of standards addressed across all three pathways, grouped by framework. Middle-grades codes follow the NJSLS 2023 revisions; high-school codes name the alignment targets carried across the Infrastructure Fellows and Research Scholars studios."
              cards={[
                { cat: 'sci', name: 'NGSS / NJSLS-Science', sub: 'Engineering design', items: [
                  { code: 'MS-ETS1-1', desc: 'Define criteria and constraints of a design problem.' },
                  { code: 'MS-ETS1-2', desc: 'Evaluate competing design solutions systematically.' },
                  { code: 'MS-ETS1-3', desc: 'Analyze test data to identify the best characteristics.' },
                  { code: 'MS-ETS1-4', desc: 'Develop a model for iterative testing and modification.' },
                  { code: 'MS-ESS3-3', desc: 'Minimize human environmental impact (extension).' },
                  { code: 'MS-PS2', desc: 'Forces and interactions (extension).' },
                  { code: 'HS-ETS1-1→4', desc: 'Define, design, evaluate, and model solutions to complex problems.' },
                ] },
                { cat: 'math', name: 'NJSLS-Mathematics', sub: 'Grades 7–8 & high school', items: [
                  { code: '7.RP.A.1–3', desc: 'Scale drawings, unit rates, efficiency metrics.' },
                  { code: '7.EE.3–4', desc: 'Multi-step calculations in cost and constraints.' },
                  { code: '7.G · 8.G', desc: 'Geometry of trusses, scale, similarity.' },
                  { code: '7.SP · 8.SP', desc: 'Analyze test data; scatter plots and association.' },
                  { code: 'N-Q · A-CED', desc: 'Quantities and modeling equations (HS).' },
                  { code: 'G-MG · S-ID · S-IC', desc: 'Geometric modeling and data analysis (HS).' },
                  { code: 'MP1–MP6', desc: 'Standards for Mathematical Practice throughout.' },
                ] },
                { cat: 'ela', name: 'NJSLS-English Language Arts', sub: 'Grades 7–12', items: [
                  { code: 'W.AW.1', desc: 'Argument writing, defend the best design.' },
                  { code: 'W.IW.2', desc: 'Informative/explanatory technical writing.' },
                  { code: 'W.RW.7 · W.SE.6', desc: 'Short research; gather and cite evidence.' },
                  { code: 'RI.AA · RI.CT · RL.CT', desc: 'Evaluate arguments on infrastructure and justice.' },
                  { code: 'SL.PE.1 · SL.II.2', desc: 'Collaborative discussion; interpret data.' },
                  { code: 'SL.PI.4 · SL.UM.5', desc: 'Present findings with multimedia.' },
                ] },
                { cat: 'des', name: 'Design, Technology & CS', sub: 'NJSLS 8.1 & 8.2', items: [
                  { code: '8.2.8.ED.1–7', desc: 'Apply the engineering design process.' },
                  { code: '8.2.8.ITH · NT', desc: "Technology's effect on people and the environment." },
                  { code: '8.2.8.ETW · EC', desc: 'Ethics, environment, and effects of technology.' },
                  { code: '8.2.12.ED', desc: 'High-school engineering design and systems.' },
                  { code: '8.1.12.DA', desc: 'Data and analysis; computational tools.' },
                ] },
                { cat: 'car', name: 'Career Readiness', sub: 'NJSLS 9.2 & 9.4', items: [
                  { code: '9.2.8.CAP.1–20', desc: 'Career awareness, exploration, and planning (Gr 8).' },
                  { code: '9.2.12.CAP', desc: 'Career preparation and planning (HS).' },
                  { code: '9.4.8/12.CI', desc: 'Creativity and innovation.' },
                  { code: '9.4.8/12.CT', desc: 'Critical thinking and problem solving.' },
                  { code: '9.4.8/12.IML', desc: 'Information and media literacy.' },
                  { code: '9.4.8/12.TL', desc: 'Technology literacy.' },
                ] },
              ]} />

            <InstructionalApproach id="pathway-cclc" eyebrow="Out-of-school-time fit" title="How the curriculum serves the six 21st CCLC components"
              desc="Resilient Futures runs as a STEM-themed program in which the engineering curriculum is the enrichment spine and the other required out-of-school-time components are built around it."
              cells={CCLC_COMPONENTS} />

            <CurriculumFooter
              programTitle="Resilient Futures"
              programDesc="A standards-aligned STEM engineering program for grades 6–12, built on the proven Hillside–Stevens engineering model and designed for free, year-round out-of-school-time delivery."
              partners={['Aedifica, program operator', 'Hillside Public Schools, school collaboration', 'Stevens Institute of Technology, university partner']}
              frameworks={['NGSS / NJSLS-Science', 'NJSLS-Mathematics', 'NJSLS-English Language Arts', 'Design, Technology & CS (8.1 / 8.2)', 'Career Readiness (9.2 / 9.4)']}
              disclaimer="Curriculum derived from the Bridging Brilliance / Building Bridges program and the Resilient Futures studio designs. High-school standard codes indicate alignment targets and should be confirmed against the current NJSLS revisions before publication."
            />
          </CurriculumShell>

        </div>
      </section>

      {/* ── Ways to run it ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20 print:hidden" aria-label="Ways to run it">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[46rem] mb-10 lg:mb-12">
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              <p className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium" style={{ fontFamily: 'var(--font-body)' }}>Ways to run it</p>
            </motion.div>
            <motion.h2
              className="text-[1.875rem] lg:text-[2.5rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-5 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
              Bespoke by design.
            </motion.h2>
            <motion.p
              className="text-[14.5px] text-anthracite/72 leading-[1.7] max-w-[64ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
              Pathway is built with your district rather than delivered to it. Content, delivery mode,
              and timeline are scoped with your team, and the content adapts to how your cohort learns:
              reading level, language supports, hands-on ratio, and pacing. The standards alignment
              holds regardless of the shape you choose. The Resilient Futures curriculum below is one
              instance, not the template.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y sm:divide-y-0 divide-sediment/20 border-t border-sediment/20 pt-1">
            {[
              ['Full-year course', 'A year-long track inside the school day, scoped to your master schedule.'],
              ['Semester course', 'A single-term version carrying the same standards in a compressed arc.'],
              ['Layered onto an existing course', 'A construction-management track added to a CTE, STEM, or engineering offering you already run.'],
              ['After-school or dual-period block', 'A recurring block for students who cannot fit a full course.'],
              ['Vacation & summer intensive', 'A concentrated build across a break: the model already delivered through Stevens pre-college.'],
              ['Cohort-tailored content', 'Pacing, reading level, language supports, and hands-on ratio set to the cohort you actually have.'],
            ].map(([title, body], i) => (
              <motion.div
                key={title}
                className="py-6 sm:pr-8 lg:pr-10"
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.42, delay: Math.min(i * 0.06, 0.3), ease: EASE }}>
                <p className="text-[1rem] text-anthracite font-medium tracking-[-0.01em] mb-2.5" style={{ fontFamily: 'var(--font-body)' }}>{title}</p>
                <p className="text-[13px] text-anthracite/70 leading-[1.6]" style={{ fontFamily: 'var(--font-body)' }}>{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What it takes to run it ── bg-bone */}
      <section className="bg-bone py-14 lg:py-20 print:hidden" aria-label="What it takes to run it">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[46rem] mb-10 lg:mb-12">
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              <p className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium" style={{ fontFamily: 'var(--font-body)' }}>What it takes to run it</p>
            </motion.div>
            <motion.h2
              className="text-[1.875rem] lg:text-[2.5rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-5 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
              What we need from you, stated plainly.
            </motion.h2>
            <motion.p
              className="text-[14.5px] text-anthracite/72 leading-[1.7] max-w-[62ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
              Before anyone evaluates curriculum, they need to know what this costs in schedule, staff
              time, and space. Here is the operating footprint.
            </motion.p>
          </div>

          {[
            ['Schedule footprint', 'Flexible, full-year, semester, layered, block, or intensive; see "Ways to run it" above.'],
            ['Who teaches', 'Aedifica supplies instructors who practice the work, alongside your educators; they keep the classroom relationship.'],
            ['Cohort size', 'Minimum 10, maximum 25 per cohort.'],
            ['Your staff commitment', 'Scoped with your team before the cohort starts, and published here once confirmed.'],
            ['Room & materials', 'The partner provides the room. Aedifica brings all materials: kits, consumables, and testing equipment.'],
            ['Lead time', 'Four weeks from signed agreement to first session. The programs are built and ready to run.'],
            ['Pilot option', 'Single-cohort pilots are available for partners who want to test the model before a full commitment.'],
          ].map(([label, value], i) => (
            <motion.div
              key={label}
              className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-2 sm:gap-8 py-4 border-t border-sediment/20 last:border-b"
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, delay: Math.min(i * 0.05, 0.3), ease: EASE }}>
              <p className="text-[12.5px] uppercase tracking-[0.13em] text-ink-soft font-semibold pt-0.5" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
              <p className="text-[13.5px] text-anthracite/80 leading-[1.55] max-w-[58ch]" style={{ fontFamily: 'var(--font-body)' }}>{value}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── bg-snow wrapper, bg-quarry inner ── */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0 print:hidden" aria-label="Build a Pathway in your district">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-quarry px-10 pt-14 pb-12 lg:px-16 lg:pt-16 lg:pb-14 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-8 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Co-authored with your educators.
            </h2>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/partner"
                className="inline-flex items-center justify-center gap-2 bg-anthracite text-white text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-anthracite/85 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Build a Pathway in your district
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link href="/research"
                className="inline-flex items-center justify-center gap-2 border border-anthracite/40 text-anthracite text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-colors duration-150 hover:bg-anthracite/8 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                See the evidence base
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-[12.5px] text-anthracite leading-[1.65] max-w-[58ch] mx-auto">
              <strong className="font-medium">For districts:</strong> Pathway is co-authored with your
              educators, designed <em>with</em> them, never at them, and implementable by the people who
              inherit it.
            </p>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
