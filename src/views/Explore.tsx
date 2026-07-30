'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import {
  Cube,
  MapTrifold,
  Barbell,
  MapPin,
  UsersFour,
  Presentation,
  Lightning,
  ArrowsClockwise,
  CalendarBlank,
  Sun,
  Tent,
  Handshake,
  Notebook,
  Gauge,
  Microphone,
  UserFocus,
  type Icon,
} from '@phosphor-icons/react'
import {
  CurriculumShell,
  Band,
  ModelCards,
  StandardsMatrix,
  InstructionalApproach,
  CurriculumFooter,
  type WeekRow,
} from '../components/CurriculumShell'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const INFO_ROWS = [
  ['Status', 'Delivered, two years, as Building Bridges'],
  ['Audience', 'Middle-school scholars, grades 6–8'],
  ['Format', 'School-year modules · summer STEM camps'],
  ['Setting', 'Schools and community organizations'],
  ['Safety', 'Background-checked staff, supervision ratios, and FERPA-aligned data practices'],
  ['Cost to scholars', 'None, funded through institutional partners'],
] as const

const MINI_LIST = [
  'Hands-on builds, site thinking, and engineering vocabulary',
  'Career-awareness sessions with real practitioners',
  'A documented showcase at the end of every cohort',
] as const

const SESSION_ACTIVITIES: { Icon: Icon; title: string; body: string }[] = [
  { Icon: Cube, title: 'Bridge or tower design challenge', body: "Teams design, build, and test a structure against real constraints, then improve it when it doesn't hold." },
  { Icon: MapTrifold, title: 'Mini site-planning activity', body: 'Students lay out a small site, balancing space, access, and competing needs the way real planners do.' },
  { Icon: Barbell, title: 'Materials & load-testing demo', body: 'A hands-on look at how different materials carry weight, and what happens at the breaking point.' },
  { Icon: MapPin, title: 'Neighborhood infrastructure mapping', body: "Students map the roads, bridges, water, and power around them, and start to see infrastructure they'd never noticed." },
  { Icon: UsersFour, title: 'Career role-play', body: 'Students step into the roles that build a project: owner, designer, estimator, scheduler, and field manager.' },
  { Icon: Presentation, title: 'Present & share', body: 'Teams present what they built and what they learned, practicing the communication every engineer needs.' },
]

const RUN_MODELS: { Icon: Icon; title: string; body: string }[] = [
  { Icon: Lightning, title: 'Single workshop', body: 'A one-session spark for an event, a club, or a class period.' },
  { Icon: ArrowsClockwise, title: 'Multi-session series', body: 'A recurring after-school or in-school series that builds over weeks.' },
  { Icon: CalendarBlank, title: 'Semester course', body: 'A full-term course inside the school day, scoped to your master schedule.' },
  { Icon: Sun, title: 'Vacation & holiday intensive', body: 'A concentrated build across a school break: winter, spring, or summer.' },
  { Icon: Tent, title: 'Summer camp module', body: 'A multi-day or multi-week camp model with a culminating showcase.' },
  { Icon: Handshake, title: 'Partner-funded enrichment', body: 'A sponsored program delivered with a community or funding partner, including models that keep it free or low-cost for the families who need it most.' },
]

const EVIDENCE_ITEMS: { Icon: Icon; title: string; body: string }[] = [
  { Icon: Notebook, title: 'Engineering portfolio', body: 'Problem statement, sketches, scaled drawings, digital-model output, cost analysis, test data, and reflection, maintained across the program.' },
  { Icon: Gauge, title: 'Prototype & testing performance', body: 'Each prototype load-tested under controlled conditions and documented with maximum load, deflection, cost-efficiency, and failure-mode analysis.' },
  { Icon: Microphone, title: 'Presentation & written argument', body: 'A public presentation and a written design report, each scored against a published rubric.' },
  { Icon: UserFocus, title: 'Individual reflection', body: 'Every student reflects on growth in engineering thinking, collaboration, communication, and STEM identity.' },
]

// ── Bridging Brilliance: 12 weeks, 3 units ──
const BB_UNIT1_WEEKS: WeekRow[] = [
  {
    num: 1, unit: 'Week', question: 'What is STEM, and how do engineers think?',
    desc: <>Program introduction and norms; the final-competition overview; the <strong className="text-anthracite/90 font-medium">engineering design process</strong> through a quick low-stakes design challenge; students launch their engineering notebooks and vocabulary lists.</>,
    chips: [
      { code: 'MS-ETS1-1', cat: 'sci', desc: 'Define the criteria and constraints of a design problem with sufficient precision.' },
      { code: 'MP1 · MP2', cat: 'math', desc: 'Make sense of problems and persevere; reason abstractly and quantitatively.' },
      { code: 'SL.PE.7.1', cat: 'ela', desc: 'Engage effectively in collaborative discussions.' },
      { code: 'W.IW.7.2', cat: 'ela', desc: 'Write informative/explanatory texts.' },
      { code: '9.4.8.CI.2', cat: 'car', desc: 'Career Readiness: generate and evaluate ideas.' },
    ],
  },
  {
    num: 2, unit: 'Week', question: 'Why do we need sustainable infrastructure?',
    desc: 'Global challenges and the UN Sustainable Development Goals, infrastructure, climate, and equity; a study of aging and collapsing bridges and their community impacts; students map how a new Hudson crossing could advance specific SDGs.',
    chips: [
      { code: 'MS-ESS3-3/5', cat: 'sci', desc: 'Apply scientific principles to minimize human impact on the environment (extension).' },
      { code: 'RI.AA.7.7', cat: 'ela', desc: 'Evaluate the argument and specific claims in a text.' },
      { code: 'W.IW.7.2', cat: 'ela', desc: 'Write informative/explanatory texts.' },
      { code: '9.4.8.CT.1', cat: 'car', desc: 'Identify a problem from multiple perspectives.' },
    ],
  },
  {
    num: 3, unit: 'Week', question: 'What exactly is the Hudson bridge problem?',
    desc: <>Teams investigate the geographic and social setting using maps, Google Earth, photos, and demographic data; they <strong className="text-anthracite/90 font-medium">define criteria and constraints</strong>, span, clearance, budget, environment, community need, and draft a formal problem statement.</>,
    chips: [
      { code: 'MS-ETS1-1', cat: 'sci', desc: 'Define the criteria and constraints of a design problem.' },
      { code: '7.RP.A', cat: 'math', desc: 'Analyze proportional relationships; scale and unit rates.' },
      { code: 'W.AW.7.1', cat: 'ela', desc: 'Write arguments to support claims.' },
      { code: 'W.IW.7.2', cat: 'ela', desc: 'Write informative/explanatory texts.' },
      { code: 'SL.PE.7.1', cat: 'ela', desc: 'Collaborative discussions.' },
      { code: '9.4.8.IML.3', cat: 'car', desc: 'Evaluate the credibility of digital sources.' },
    ],
  },
]

const BB_UNIT2_WEEKS: WeekRow[] = [
  {
    num: 4, unit: 'Week', question: 'How do structure and geometry keep bridges standing?',
    desc: <>Beam, arch, truss, suspension, and cable-stayed bridges, and how form follows function; a mini-lab on forces in <strong className="text-anthracite/90 font-medium">trusses and supports</strong>; students sketch two conceptual designs, labeling geometry and load paths.</>,
    chips: [
      { code: 'MS-ETS1-2', cat: 'sci', desc: 'Evaluate competing design solutions.' },
      { code: 'MS-PS2', cat: 'sci', desc: 'Forces and motion (extension).' },
      { code: '7.G', cat: 'math', desc: 'Draw and describe geometrical figures; angle relationships.' },
      { code: '8.G', cat: 'math', desc: 'Congruence and similarity for truss units.' },
      { code: 'W.IW.7.2', cat: 'ela', desc: 'Explain design choices in writing.' },
    ],
  },
  {
    num: 5, unit: 'Week', question: 'How can we design and model our bridges digitally?',
    desc: <>Students choose a concept, create a scaled drawing on graph paper, and build a <strong className="text-anthracite/90 font-medium">digital model</strong> (Minecraft, Tinkercad, SketchUp, or similar); they calculate span, tower height, deck width, deck area, or cable length.</>,
    chips: [
      { code: 'MS-ETS1-4', cat: 'sci', desc: 'Develop a model to generate data for iterative testing.' },
      { code: '7.RP.A', cat: 'math', desc: 'Scale, ratios, and unit rates.' },
      { code: '7.EE.3', cat: 'math', desc: 'Solve multi-step real-life problems.' },
      { code: 'MP4', cat: 'math', desc: 'Model with mathematics.' },
      { code: '8.2.8.ED', cat: 'des', desc: 'Apply the engineering design process with technology tools.' },
    ],
  },
  {
    num: 6, unit: 'Week', question: 'Is our bridge financially sustainable?',
    desc: <>Cost estimating with materials sheets and unit costs; simple payback and life-cycle thinking; students compute <strong className="text-anthracite/90 font-medium">cost per unit of load capacity</strong> as an efficiency metric and write a financial report section.</>,
    chips: [
      { code: 'MS-ETS1-3', cat: 'sci', desc: 'Analyze data from tests to compare design solutions.' },
      { code: '7.RP.A.3', cat: 'math', desc: 'Multi-step ratio and percent problems.' },
      { code: '7.EE', cat: 'math', desc: 'Use variables and expressions; cost equations.' },
      { code: 'W.IW.7.2', cat: 'ela', desc: 'Informative writing, financial report section.' },
    ],
  },
  {
    num: 7, unit: 'Week', question: 'How do social and environmental factors shape the “best” design?',
    desc: <>Social sustainability, environmental justice, habitat, emissions, noise, and views; teams complete an <strong className="text-anthracite/90 font-medium">impact matrix</strong> scoring designs across social, economic, and environmental dimensions, then debate whether lowest cost is always best.</>,
    chips: [
      { code: 'MS-ETS1-1/2', cat: 'sci', desc: 'Criteria and constraints including social and environmental factors.' },
      { code: 'MS-ESS3-3', cat: 'sci', desc: 'Minimize human environmental impact (extension).' },
      { code: 'RI.CT.7.8', cat: 'ela', desc: "Compare and evaluate authors' perspectives." },
      { code: 'W.AW.7.1', cat: 'ela', desc: 'Write an argument on trade-offs.' },
      { code: 'SL.ES.7.3', cat: 'ela', desc: "Evaluate a speaker's argument." },
      { code: '9.4.8.CT.2', cat: 'car', desc: 'Evaluate diverse solutions.' },
    ],
  },
]

const BB_UNIT3_WEEKS: WeekRow[] = [
  {
    num: 8, unit: 'Week', question: 'What risks matter, and how do we choose among options?',
    desc: <>Risk, probability, and risk management with age-appropriate examples; students identify design risks and mitigations and build a weighted <strong className="text-anthracite/90 font-medium">decision matrix</strong> to compare design tweaks across cost, strength, risk, and sustainability.</>,
    chips: [
      { code: 'MS-ETS1-2', cat: 'sci', desc: 'Systematic evaluation of competing solutions.' },
      { code: 'MS-ETS1-3', cat: 'sci', desc: 'Analyze test data against criteria.' },
      { code: '7.SP', cat: 'math', desc: 'Investigate chance processes; informal probability.' },
      { code: '7.EE.3', cat: 'math', desc: 'Multi-step calculations; weighted scores.' },
      { code: 'SL.PE.7.1', cat: 'ela', desc: 'Collaborative discussion.' },
      { code: 'W.AW.7.1', cat: 'ela', desc: 'Justify the chosen option in writing.' },
    ],
  },
  {
    num: 9, unit: 'Week', question: 'How can we turn our design into a physical prototype?',
    desc: <>Teams build K&rsquo;Nex or similar <strong className="text-anthracite/90 font-medium">prototypes</strong> to scale under real constraints, limited materials, maximum length, minimum deck width, documenting issues and completing at least one redesign before the final build.</>,
    chips: [
      { code: 'MS-ETS1-2/3/4', cat: 'sci', desc: 'Develop and refine models using testable prototypes.' },
      { code: '7.G · 8.G', cat: 'math', desc: 'Measuring and adjusting geometry.' },
      { code: 'MP5', cat: 'math', desc: 'Use appropriate tools strategically.' },
      { code: '8.2.8.ED', cat: 'des', desc: 'Use tools and follow the engineering design process.' },
    ],
  },
  {
    num: 10, unit: 'Week', question: 'How do we test, measure, and improve our bridges?',
    desc: <>A <strong className="text-anthracite/90 font-medium">bridge testing day</strong>: apply increasing load to failure; record maximum load, deflection, cost, efficiency, and failure mode; graph and compare team data to identify the best design characteristics across the cohort.</>,
    chips: [
      { code: 'MS-ETS1-3', cat: 'sci', desc: 'Analyze test data to identify best characteristics.' },
      { code: 'MS-ETS1-4', cat: 'sci', desc: 'Model for iterative testing.' },
      { code: '7.SP', cat: 'math', desc: 'Analyze and compare data distributions.' },
      { code: '7.RP · 7.EE', cat: 'math', desc: 'Load-to-cost ratios and efficiency.' },
      { code: 'W.IW.7.2', cat: 'ela', desc: 'Lab report sections.' },
      { code: 'SL.II.7.2', cat: 'ela', desc: 'Interpret data in charts and graphs.' },
    ],
  },
  {
    num: 11, unit: 'Week', question: 'How do engineers communicate and justify their decisions?',
    desc: <>Students build a 3&ndash;4 slide deck and short report: problem context, design description, data, evaluation, trade-offs, and a final claim, with mini-lessons on <strong className="text-anthracite/90 font-medium">argument writing</strong> and visual design.</>,
    chips: [
      { code: 'MS-ETS1-1–3', cat: 'sci', desc: 'Synthesize the entire design cycle.' },
      { code: 'W.AW.7.1', cat: 'ela', desc: 'Argument writing.' },
      { code: 'W.IW.7.2', cat: 'ela', desc: 'Technical explanation.' },
      { code: 'W.SE.7.6', cat: 'ela', desc: 'Gather and cite evidence.' },
      { code: 'SL.PI.7.4 · UM.7.5', cat: 'ela', desc: 'Present claims with multimedia.' },
      { code: '9.4.8.TL.3', cat: 'car', desc: 'Use digital tools to represent data.' },
    ],
  },
  {
    num: 12, unit: 'Week', question: "Which bridge best meets our community's needs? What did we learn?",
    desc: <>The capstone <strong className="text-anthracite/90 font-medium">Bridge Showcase &amp; Testing Competition</strong> before peers, families, and STEM professionals; audiences score designs with a decision matrix; each student writes a reflection on how their thinking as an engineer changed.</>,
    chips: [
      { code: 'MS-ETS1-1–4', cat: 'sci', desc: 'Capstone performance across the full design cycle.' },
      { code: 'SL.PE.7.1', cat: 'ela', desc: 'Collaborative discussion.' },
      { code: 'SL.PI.7.4/7.5', cat: 'ela', desc: 'Present findings with multimedia.' },
      { code: 'W.RW.7.7 · W.7.10', cat: 'ela', desc: 'Extended reflective writing.' },
      { code: '9.4.8.CI.3 · CT.3', cat: 'car', desc: 'Evaluate solutions and give feedback.' },
    ],
  },
]

const BB_APPROACH = [
  { tag: 'Field 01', title: 'Project-based learning', desc: 'Students work through a full engineering design cycle connected to an authentic infrastructure challenge.' },
  { tag: 'Field 02', title: 'Collaborative design teams', desc: 'Structured roles: project manager, structural designer, data analyst, and communications lead.' },
  { tag: 'Field 03', title: 'Studio-style lessons', desc: 'Short mini-lessons in science, math, and ELA followed by extended design, build, test, and revision time.' },
  { tag: 'Field 04', title: 'Engineering notebooks', desc: 'A running portfolio of sketches, calculations, data, reflections, and design decisions.' },
  { tag: 'Field 05', title: 'Digital & physical modeling', desc: 'Mapping tools, scaled drawings, simple digital modeling, and hands-on construction materials.' },
  { tag: 'Field 06', title: 'Universal Design for Learning', desc: 'Graphic organizers, sentence frames, multilingual supports, vocabulary banks, and varied products.' },
  { tag: 'Field 07', title: 'Public showcase', desc: 'A final competition and presentation with peers, families, educators, and STEM professionals.' },
]

// ── Summer STEM Camps: 3 models + 10-day map (2 weeks) ──
const CAMP_MODELS = [
  {
    cat: 'sci' as const, name: 'Engineering Explorers', sub: 'Middle school',
    rows: [
      { label: 'Grades', value: '6–8' },
      { label: 'Duration', value: '2 weeks' },
      { label: 'Focus', value: 'Engineering identity, teamwork, design thinking, measurement, testing and iteration.' },
      { label: 'Activities', value: 'Rotating mini-challenges in structures, circuits, robotics, water, energy, and materials.' },
      { label: 'Final', value: 'STEM Expo prototype, poster, and reflection.' },
    ],
  },
  {
    cat: 'des' as const, name: 'Construction & Built Environment', sub: 'Secondary',
    rows: [
      { label: 'Grades', value: '7–12' },
      { label: 'Duration', value: '1–2 weeks' },
      { label: 'Focus', value: 'Design, estimating, scheduling, safety, sustainability, and construction logistics.' },
      { label: 'Activities', value: 'Site logistics plan, quantity takeoff, model build, and a construction-sequencing game.' },
      { label: 'Final', value: 'Sustainable school addition or community-facility proposal.' },
    ],
  },
  {
    cat: 'car' as const, name: 'Girls in Engineering & Technology', sub: 'Grades 6–10',
    rows: [
      { label: 'Grades', value: '6–10' },
      { label: 'Duration', value: '1–2 weeks' },
      { label: 'Focus', value: 'STEM identity, leadership, confidence, coding/design skills, and mentoring networks.' },
      { label: 'Activities', value: 'Mentor panels, a coding project, an engineering prototype, and leadership workshops.' },
      { label: 'Final', value: 'Team prototype and a personal STEM pathway plan.' },
    ],
  },
]

const SUMMER_WEEK1_DAYS: WeekRow[] = [
  {
    num: 1, unit: 'Day', question: 'What do engineers do?',
    desc: <>Team-building, the <strong className="text-anthracite/90 font-medium">engineering design cycle</strong>, and a local New Jersey problem gallery; students set up engineering notebooks and agree on team norms.</>,
    chips: [
      { code: 'Engineering practices', cat: 'sci', desc: 'NJSLS-S science and engineering practices.' },
      { code: 'STEM identity', cat: 'car', desc: 'Career awareness and STEM identity.' },
      { code: 'Team norms', cat: 'ela', desc: 'Collaboration and team norms.' },
    ],
  },
  {
    num: 2, unit: 'Day', question: 'Structures and forces',
    desc: <>Bridge and tower design, <strong className="text-anthracite/90 font-medium">load testing</strong>, and failure analysis; students record a load-test data table and revise their sketches based on evidence.</>,
    chips: [
      { code: 'MS-ETS1', cat: 'sci', desc: 'MS-ETS1 engineering design; physical science of forces.' },
      { code: 'Forces', cat: 'sci', desc: 'Forces and structural performance.' },
      { code: 'Data analysis', cat: 'math', desc: 'Collect and analyze load-test data.' },
    ],
  },
  {
    num: 3, unit: 'Day', question: 'Materials matter',
    desc: <>Compare cardboard, wood, plastics, and recycled materials in a <strong className="text-anthracite/90 font-medium">material-choice lab</strong>; students build a materials selection chart and justify choices with evidence.</>,
    chips: [
      { code: 'Structure–property', cat: 'sci', desc: 'Structure–property relationships of materials.' },
      { code: 'Argument from evidence', cat: 'ela', desc: 'Construct an argument from evidence.' },
    ],
  },
  {
    num: 4, unit: 'Day', question: 'Circuits and sensors',
    desc: <>Build an <strong className="text-anthracite/90 font-medium">LED circuit</strong> and use a sensor to collect data; students keep a working circuit and a troubleshooting log as they debug.</>,
    chips: [
      { code: 'Energy systems', cat: 'sci', desc: 'Energy systems and energy transfer.' },
      { code: 'CS / devices', cat: 'des', desc: 'Computer-science and device thinking.' },
    ],
  },
  {
    num: 5, unit: 'Day', question: 'Robotics basics',
    desc: <>Build and <strong className="text-anthracite/90 font-medium">code simple robot movement</strong> through an obstacle challenge; students demonstrate controlled movement and iterate on their programs.</>,
    chips: [
      { code: 'Algorithms', cat: 'des', desc: 'Algorithms and sequencing.' },
      { code: 'Debugging', cat: 'des', desc: 'Debugging and troubleshooting.' },
      { code: 'Iteration', cat: 'des', desc: 'Iteration and refinement.' },
    ],
  },
  {
    num: 6, unit: 'Day', question: 'Water, flooding and stormwater',
    desc: 'Model runoff and infiltration, test water quality, and map school drainage; students record stormwater observations relevant to New Jersey flooding.',
    chips: [
      { code: 'Earth systems', cat: 'sci', desc: 'Earth systems and the water cycle.' },
      { code: 'Human impact', cat: 'sci', desc: 'Human impact on natural systems; NJ flood relevance.' },
    ],
  },
  {
    num: 7, unit: 'Day', question: 'Renewable energy and efficiency',
    desc: <>A solar or wind mini-challenge and a school <strong className="text-anthracite/90 font-medium">energy-audit walk</strong>; students produce an energy prototype or an audit checklist.</>,
    chips: [
      { code: 'Energy transfer', cat: 'sci', desc: 'Energy transfer and transformation.' },
      { code: 'Sustainability', cat: 'sci', desc: 'Sustainability and efficiency.' },
    ],
  },
]

const SUMMER_WEEK2_DAYS: WeekRow[] = [
  {
    num: 8, unit: 'Day', question: 'Design sprint begins',
    desc: <>Teams select a local problem and <strong className="text-anthracite/90 font-medium">define criteria and constraints</strong>; they draft a problem statement and a prototype plan.</>,
    chips: [
      { code: 'Design thinking', cat: 'des', desc: 'Design thinking and framing.' },
      { code: 'Define problems', cat: 'sci', desc: 'Defining engineering problems.' },
    ],
  },
  {
    num: 9, unit: 'Day', question: 'Build, test, revise',
    desc: <>Prototype construction, testing, peer critique, and redesign; students produce a <strong className="text-anthracite/90 font-medium">prototype v2</strong> and record their test results.</>,
    chips: [
      { code: 'Optimization', cat: 'sci', desc: 'Optimization of a design solution.' },
      { code: 'Test data', cat: 'math', desc: 'Collect and interpret test data.' },
      { code: 'Redesign', cat: 'des', desc: 'Evidence-based redesign.' },
    ],
  },
  {
    num: 10, unit: 'Day', question: 'STEM Expo',
    desc: <>Poster, pitch rehearsal, and a public presentation; students present the prototype and poster and write an individual <strong className="text-anthracite/90 font-medium">reflection</strong> on their growth.</>,
    chips: [
      { code: 'Communication', cat: 'ela', desc: 'Technical communication and presentation.' },
      { code: 'Evidence', cat: 'ela', desc: 'Support claims with evidence.' },
      { code: 'Career readiness', cat: 'car', desc: 'Career readiness and pathway awareness.' },
    ],
  },
]

export function Explore() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState<Set<string>>(new Set())

  const toggle = (id: string) =>
    setOpen(prev => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  const expandAll = () => setOpen(new Set(['bb', 'summer']))
  const collapseAll = () => setOpen(new Set())
  const printCurriculum = () => {
    expandAll()
    setTimeout(() => window.print(), 350)
  }

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-datum min-h-[46vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="explore-h1">

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div>

            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/15 text-white px-3 py-1 mb-10 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
              Program 01 · Middle school
            </motion.span>

            <motion.h1
              id="explore-h1"
              className="text-[2.75rem] lg:text-[clamp(2.5rem,5vw,4rem)] lg:whitespace-nowrap leading-[0.97] tracking-[-0.035em] text-white italic mb-10"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              Explore is where the pathway begins.
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-x-0 gap-y-3"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.38, ease: EASE }}>
              {(['Grades 6–8', 'Schools & community organizations', 'No cost to scholars'] as const).map((item, i) => (
                <span
                  key={item}
                  className="text-[13px] text-white/90 tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {item}
                  {i < 2 && <span className="mx-4 text-white/18" aria-hidden="true">·</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Program intro + info rows ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="explore-intro-h2">
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
                Explore is where the pathway begins: career awareness and hands-on discovery in the built
                environment for middle-school scholars. Students meet the professionals who plan, manage,
                and deliver the places they live in, and discover that those careers are respected,
                achievable, and theirs to claim.
              </motion.p>
              <motion.p
                className="text-[14.5px] text-anthracite/72 leading-[1.72] max-w-[62ch] mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
                Delivery is community-based and school-friendly, built on the model proven through the
                Bridging Brilliance STEM program at Hillside Innovation Academy: a twelve-week intensive
                with twenty-one students, documented as an Aedifica delivery foundation.
              </motion.p>
              <motion.p
                className="text-[14.5px] text-anthracite/72 leading-[1.72] max-w-[62ch] mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.14, ease: EASE }}>
                <strong className="text-anthracite font-medium">This is not a second STEM class.</strong> If
                your school already has strong STEM, Explore adds the part that STEM programs rarely reach:
                engineering and construction practice. That gap isn&rsquo;t a reflection on your teachers;
                engineering practice sits outside most certification routes and teacher-preparation
                programs, because it&rsquo;s learned on projects rather than in coursework. Aedifica
                instructors are working construction-management and engineering professionals, so students
                learn the work from people who do it.
              </motion.p>

              <motion.div
                className="max-w-[62ch] mb-10"
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.18, ease: EASE }}>
                <p className="text-[10.5px] uppercase tracking-[0.14em] text-ink-soft font-semibold mb-3" style={{ fontFamily: 'var(--font-body)' }}>Where it leads</p>
                <p className="text-[1.375rem] lg:text-[1.625rem] text-anthracite italic leading-[1.2] tracking-[-0.02em] mb-4 [text-wrap:balance]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  Exposure that moves students into the state&rsquo;s most selective schools.
                </p>
                <p className="text-[14.5px] text-anthracite/72 leading-[1.72] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                  Explore is early exposure with a destination. In its first delivery as Building Bridges,
                  six of eleven eighth-graders, 55%, were accepted to the Union County Vocational-Technical
                  Schools for 2025&ndash;26, a rate the host school reported as far exceeding county averages.
                  UCVTS includes Union County Magnet High School, ranked #1 in New Jersey and #26 nationally,
                  alongside the Academy for Information Technology and the Academy for Allied Health Sciences.
                </p>
                <p className="text-[14.5px] text-anthracite/72 leading-[1.72]" style={{ fontFamily: 'var(--font-body)' }}>
                  That is the throughline of the whole pathway: middle-school exposure opens the door to
                  selective technical high schools, and from there to the credentialed, employer-connected
                  work that Pathway, Launch, and the overlay for vocational and trade schools carry forward.{' '}
                  <Link href="/trade-schools" className="text-anthracite underline underline-offset-2 decoration-anthracite/30 hover:decoration-anthracite transition-colors duration-150">
                    See how the same relationship extends to vocational and trade schools
                  </Link>, or{' '}
                  <Link href="/research/bridging-brilliance" className="text-anthracite underline underline-offset-2 decoration-anthracite/30 hover:decoration-anthracite transition-colors duration-150">
                    read the full Building Bridges results
                  </Link>.
                </p>
              </motion.div>

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
                  src="/images/explore-expo-1.avif"
                  alt="Hillside Innovation Academy students presenting bridge prototypes at Stevens Institute of Technology"
                  className="w-full h-[260px] lg:h-[320px] object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </motion.div>
              <ul className="list-none space-y-3">
                {MINI_LIST.map(item => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-[6px] h-[6px] rotate-45 bg-datum mt-[7px]" aria-hidden="true" />
                    <span className="text-[13.5px] text-anthracite/78 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Inside a session ── bg-bone */}
      <section className="bg-bone py-14 lg:py-20" aria-labelledby="session-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 lg:mb-12">
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              <p className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium" style={{ fontFamily: 'var(--font-body)' }}>Inside a session</p>
            </motion.div>
            <motion.h2
              id="session-h2"
              className="text-[2rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-6 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
              Hands-on from the first minute.
            </motion.h2>
            <motion.p
              className="text-[14.5px] text-anthracite/72 leading-[1.7] lg:whitespace-nowrap"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              Explore sessions are built around making and doing, mixed and matched to fit the age group,
              setting, and time available.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
            {SESSION_ACTIVITIES.map(({ Icon: IconComp, title, body }, i) => (
              <motion.div
                key={title}
                className="border-t border-sediment/25 pt-5"
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.42, delay: Math.min(i * 0.06, 0.3), ease: EASE }}>
                <IconComp size={22} weight="regular" className="text-ink-soft mb-3.5" aria-hidden={true} />
                <p className="text-[1.0625rem] text-anthracite italic leading-[1.25] tracking-[-0.015em] mb-2.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{title}</p>
                <p className="text-[13px] text-anthracite/70 leading-[1.6]" style={{ fontFamily: 'var(--font-body)' }}>{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ways to run it ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="run-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-16 xl:gap-20 lg:items-start mb-10 lg:mb-12">
            <div>
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
                <p className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium" style={{ fontFamily: 'var(--font-body)' }}>Ways to run it</p>
              </motion.div>
              <motion.h2
                id="run-h2"
                className="text-[1.875rem] lg:text-[2.5rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
                One program, many ways to run it.
              </motion.h2>
            </div>
            <motion.p
              className="text-[14.5px] text-anthracite/72 leading-[1.7] mt-6 lg:mt-2 max-w-[62ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              Explore is scoped with you, not delivered off a shelf. Content, delivery mode, and calendar
              are set by what your school actually has: a semester course, an add-on to an existing class,
              an after-school block, or a vacation or holiday intensive. The two curricula below are the
              same program in two shapes: Bridging Brilliance ran as a twelve-week in-school intensive, and
              Summer STEM Camps carries the same engineering thread across a school break. Content is also
              tuned to how a particular cohort learns: reading level, language supports, hands-on ratio,
              and pacing all move without changing the standards the program hits.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-x-8 divide-y sm:divide-y-0 divide-sediment/20 border-t border-sediment/20 pt-1">
            {RUN_MODELS.map(({ title, body }, i) => (
              <motion.div
                key={title}
                className="py-6"
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.42, delay: i * 0.06, ease: EASE }}>
                <p className="text-[1rem] text-anthracite font-medium tracking-[-0.01em] mb-2.5" style={{ fontFamily: 'var(--font-body)' }}>{title}</p>
                <p className="text-[13px] text-anthracite/70 leading-[1.6]" style={{ fontFamily: 'var(--font-body)' }}>{body}</p>
              </motion.div>
            ))}
          </div>
          <div className="hidden xl:grid xl:grid-cols-6 gap-x-8 mt-3">
            <p className="text-[10.5px] uppercase tracking-[0.12em] text-anthracite/50" style={{ fontFamily: 'var(--font-body)' }}>Lightest touch</p>
            <span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" /><span aria-hidden="true" />
            <p className="text-[10.5px] uppercase tracking-[0.12em] text-anthracite/50 text-right" style={{ fontFamily: 'var(--font-body)' }}>Deepest partnership</p>
          </div>
        </div>
      </section>

      {/* ── Evidence you can show ── bg-bone */}
      <section className="bg-bone py-14 lg:py-20" aria-labelledby="evidence-h2">
        <div className="max-w-7xl mx-auto px-6">
          {/* Centered, not another left-column split: this is the proof moment of the
              page, and it shouldn't sit in the same slot as the two sections above it. */}
          <div className="max-w-[46rem] mx-auto text-center mb-12 lg:mb-14">
            <motion.div
              className="flex items-center justify-center gap-3 mb-5"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              <p className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium" style={{ fontFamily: 'var(--font-body)' }}>Evidence you can show</p>
            </motion.div>
            <motion.h2
              id="evidence-h2"
              className="text-[2rem] lg:text-[3rem] leading-[1.1] tracking-[-0.028em] [text-wrap:balance] mb-5"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
              <Link href="/impact" className="text-anthracite italic hover:text-anthracite/70 transition-colors duration-150">
                Evidence schools and funders can show.
              </Link>
            </motion.h2>
            <motion.p
              className="text-[14.5px] text-anthracite/72 leading-[1.7] max-w-[56ch] mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              Assessment is built in from the first week. The Bridging Brilliance capstone produces
              visible, structured evidence, usable in parent communications, board reports, accreditation
              reviews, and grant applications.
            </motion.p>
            <motion.div
              className="mt-6"
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.16, ease: EASE }}>
              <Link href="/impact"
                className="inline-flex items-center gap-2 text-[13.5px] text-anthracite font-medium underline underline-offset-4 decoration-anthracite/30 hover:decoration-anthracite transition-colors duration-150 group">
                See the full impact results
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[56rem] mx-auto mb-14 lg:mb-16">
            <motion.div
              className="overflow-hidden"
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
              <img
                src="/images/explore-expo-2.avif"
                alt="Explore scholars presenting a bridge prototype and research poster at the STEM Expo"
                className="w-full h-[220px] object-cover"
                style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                loading="lazy"
              />
            </motion.div>
            <motion.div
              className="overflow-hidden"
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: 0.08, ease: EASE }}>
              <img
                src="/images/explore-expo-3.avif"
                alt="Explore scholars and families with a completed bridge prototype and research poster"
                className="w-full h-[220px] object-cover"
                style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* The four stages are the actual design cycle this program teaches, so a
              drawn thread connects them instead of four disconnected icon cards. */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-sediment/20">
            <svg className="hidden lg:block absolute left-0 top-0 w-full h-4 -mt-2 overflow-visible" preserveAspectRatio="none" aria-hidden="true">
              <motion.line
                x1="12.5%" y1="8" x2="87.5%" y2="8"
                stroke="var(--color-anthracite)" strokeOpacity="0.18" strokeWidth="1"
                initial={reduce ? undefined : { pathLength: 0 }}
                whileInView={reduce ? undefined : { pathLength: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.9, ease: EASE, delay: 0.1 }}
              />
            </svg>
            {['12.5%', '37.5%', '62.5%', '87.5%'].map((x, i) => (
              <div key={x} className="hidden lg:block absolute -top-[6px]" style={{ left: x }} aria-hidden="true">
                <motion.span
                  className="block w-2 h-2 -translate-x-1/2 rotate-45 bg-bone border border-anthracite/40"
                  initial={reduce ? undefined : { opacity: 0 }}
                  whileInView={reduce ? undefined : { opacity: 1 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.35, ease: EASE, delay: 0.4 + i * 0.1 }}
                />
              </div>
            ))}
            {EVIDENCE_ITEMS.map(({ title, body }, i) => (
              <motion.div
                key={title}
                className={`py-6 lg:pt-9 ${i > 0 ? 'lg:pl-8 xl:pl-10' : ''} ${i < 3 ? 'lg:pr-8 xl:pr-10 lg:border-r lg:border-sediment/20' : ''} border-b border-sediment/20 lg:border-b-0`}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.42, delay: i * 0.07, ease: EASE }}>
                <p className="text-[1rem] text-anthracite font-medium tracking-[-0.01em] mb-2.5" style={{ fontFamily: 'var(--font-body)' }}>{title}</p>
                <p className="text-[13px] text-anthracite/70 leading-[1.6]" style={{ fontFamily: 'var(--font-body)' }}>{body}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="mt-10 pt-8 border-t border-sediment/20 text-[13.5px] text-anthracite/75 leading-[1.65] max-w-[74ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.2, ease: EASE }}>
            <strong className="text-anthracite font-medium">Board-ready reporting.</strong> Aedifica
            delivers an end-of-program report, rubric scores, pre/post content assessments,
            participation, and survey data, to the school within 30 days of program close, formatted
            for direct inclusion in board materials, district reports, or funder communications.
          </motion.p>
        </div>
      </section>

      {/* ── Curriculum shells ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20 print:py-0" aria-labelledby="curriculum-h2" id="curriculum">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            className="mb-12 lg:mb-14 print:hidden"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
            <p className="text-[10.5px] uppercase tracking-[0.16em] text-wine font-semibold mb-4 select-none" style={{ fontFamily: 'var(--font-body)' }}>These are sample curricula</p>
            <div className="space-y-3 max-w-[74ch]">
              <p className="text-[13.5px] text-anthracite/78 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
                <strong className="text-anthracite font-medium">What you see below are samples, not the catalogue.</strong> They
                are complete, real curricula we have designed and can run, but they exist to show you how we build, not to define what you get.
              </p>
              <p className="text-[13.5px] text-anthracite/78 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
                <strong className="text-anthracite font-medium">Where they come from.</strong> Bridging
                Brilliance, Engineering the Hudson, was delivered at Hillside Innovation Academy with
                twenty-one students, and is documented in{' '}
                <Link href="/impact" className="text-anthracite underline underline-offset-2 decoration-anthracite/30 hover:decoration-anthracite transition-colors duration-150">Impact &amp; accountability</Link>.
                Summer STEM Camps is an Aedifica camp model designed for grades 6&ndash;12, designed and not yet delivered.
              </p>
              <p className="text-[13.5px] text-anthracite/78 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
                <strong className="text-anthracite font-medium">We build to order.</strong> Content, sequence, delivery mode, and calendar
                are scoped to a partner&rsquo;s requirements. If neither sample fits your school, we write the one that does, and the standards
                alignment holds either way.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 lg:mb-12 print:hidden">
            <div>
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
                <p id="curriculum-h2" className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium" style={{ fontFamily: 'var(--font-body)' }}>Sample curriculum shells, open what you need</p>
              </motion.div>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <button type="button" onClick={expandAll} className="text-[11.5px] uppercase tracking-[0.08em] text-anthracite/75 border border-anthracite/20 px-3.5 py-2 hover:border-anthracite/45 transition-colors duration-150" style={{ fontFamily: 'var(--font-body)' }}>Expand all</button>
              <button type="button" onClick={collapseAll} className="text-[11.5px] uppercase tracking-[0.08em] text-anthracite/75 border border-anthracite/20 px-3.5 py-2 hover:border-anthracite/45 transition-colors duration-150" style={{ fontFamily: 'var(--font-body)' }}>Collapse all</button>
              <button type="button" onClick={printCurriculum} className="text-[11.5px] uppercase tracking-[0.08em] text-anthracite/75 border border-anthracite/20 px-3.5 py-2 hover:border-anthracite/45 transition-colors duration-150" style={{ fontFamily: 'var(--font-body)' }}>Print curriculum</button>
            </div>
          </div>

          <div className="space-y-5 print:space-y-10">

            <CurriculumShell
              id="bb"
              color="var(--color-datum)"
              open={open.has('bb')}
              onToggle={() => toggle('bb')}
              meta="Grades 6–8 · 12-week middle-school STEM program · full curriculum"
              collapsedTitle="Bridging Brilliance: Engineering the Hudson"
              eyebrow="Grades 6–8 · Middle-School Engineering · 12-Week STEM Program"
              title="Bridging Brilliance."
              intro="A twelve-week program where middle-school students work as junior engineers to design, model, build, test, and defend a prototype bridge crossing the Hudson River, a full engineering design cycle aligned to New Jersey standards. In Bridging Brilliance: Engineering the Hudson, students must satisfy criteria and constraints for span, cost, structural performance, sustainability, and community impact. The course integrates science, engineering, mathematics, communication, and career-readiness skills to mirror authentic engineering practice."
              facts={[
                { value: '12', label: 'Weeks · Grades 6–8' },
                { value: '3', label: 'Design units' },
                { value: '5', label: 'Standards frameworks' },
                { value: '40+', label: 'Aligned standards' },
              ]}
              toc={[
                { label: 'Unit 1 · Foundations', href: '#bb-unit1' },
                { label: 'Unit 2 · Design & Modeling', href: '#bb-unit2' },
                { label: 'Unit 3 · Prototype & Compete', href: '#bb-unit3' },
                { label: 'Standards Matrix', href: '#bb-standards' },
                { label: 'Instructional Approach', href: '#bb-approach' },
              ]}
              frameworks={[
                { cat: 'sci', name: 'NGSS / Science' },
                { cat: 'math', name: 'NJSLS Math' },
                { cat: 'ela', name: 'NJSLS ELA' },
                { cat: 'des', name: 'Design & Tech' },
                { cat: 'car', name: 'Career Readiness' },
              ]}>

              <Band color="var(--color-datum)" id="bb-unit1" numLabel="01" rangeLabel="Unit 1 · Weeks 1–3" title="Engineering & Sustainability Foundations"
                desc="Students learn how engineers think and why sustainable infrastructure matters, then investigate the real Hudson River crossing, its geography, community, and needs, to define a formal engineering problem with criteria and constraints."
                meta={[
                  { label: 'Essential question', value: 'What is engineering, and why does our community need a sustainable Hudson crossing?' },
                  { label: 'Focus', value: 'Engineering design process · SDGs & equity · criteria and constraints' },
                  { label: 'Deliverables', value: 'Engineering notebook · community-need quick-write · team problem statement · criteria/constraints document' },
                ]}
                weeks={BB_UNIT1_WEEKS} />

              <Band color="var(--color-datum)" id="bb-unit2" numLabel="02" rangeLabel="Unit 2 · Weeks 4–7" title="Bridge Types, Geometry & Digital Modeling"
                desc="Students connect structure to function, model their bridges with scale drawings and digital tools, cost their designs as an efficiency metric, and weigh the social and environmental impact of the choices they make."
                meta={[
                  { label: 'Essential question', value: 'How can math and modeling produce a bridge that is strong, affordable, and sustainable?' },
                  { label: 'Focus', value: 'Bridge types & forces · scale & geometry · cost estimation · impact analysis' },
                  { label: 'Deliverables', value: 'Concept sketches · scaled & digital model · cost/sustainability report · social & environmental impact matrix' },
                ]}
                weeks={BB_UNIT2_WEEKS} />

              <Band color="var(--color-datum)" id="bb-unit3" numLabel="03" rangeLabel="Unit 3 · Weeks 8–12" title="Risk, Prototyping, Testing & Communication"
                desc="Students manage risk, build and load-test physical prototypes, analyze the data to improve their designs, and defend their solution with evidence at a public Bridge Showcase & Testing Competition."
                meta={[
                  { label: 'Essential question', value: "Which design best meets our community's needs, and how do we prove it?" },
                  { label: 'Focus', value: 'Risk & decision matrices · prototyping · testing & data · argument and presentation' },
                  { label: 'Deliverables', value: 'Weighted decision matrix · tested prototype · testing data & graphs · final presentation & report · individual reflection' },
                ]}
                weeks={BB_UNIT3_WEEKS} />

              <StandardsMatrix id="bb-standards" eyebrow="Consolidated alignment" title="Standards alignment matrix"
                desc="The complete set of standards addressed across the twelve weeks, grouped by framework. Codes follow the NJSLS 2023 revisions for grades 7–8 and the Next Generation Science Standards engineering-design expectations."
                cards={[
                  { cat: 'sci', name: 'NGSS / NJSLS-Science', sub: 'Engineering design', items: [
                    { code: 'MS-ETS1-1', desc: 'Define criteria and constraints of a design problem.' },
                    { code: 'MS-ETS1-2', desc: 'Evaluate competing design solutions systematically.' },
                    { code: 'MS-ETS1-3', desc: 'Analyze test data to identify the best characteristics.' },
                    { code: 'MS-ETS1-4', desc: 'Develop a model for iterative testing and modification.' },
                    { code: 'MS-ESS3-3/5', desc: 'Minimize human environmental impact (extension).' },
                    { code: 'MS-PS2', desc: 'Forces and interactions (extension).' },
                  ] },
                  { cat: 'math', name: 'NJSLS-Mathematics', sub: 'Grades 7–8', items: [
                    { code: '7.RP.A.1–3', desc: 'Scale drawings, unit rates, efficiency metrics.' },
                    { code: '7.EE.3–4', desc: 'Multi-step calculations in cost and constraints.' },
                    { code: '7.G · 8.G', desc: 'Geometry of trusses, scale, and similarity.' },
                    { code: '7.SP', desc: 'Probability, risk, and comparing test data.' },
                    { code: 'MP1–MP6', desc: 'Standards for Mathematical Practice throughout.' },
                  ] },
                  { cat: 'ela', name: 'NJSLS-English Language Arts', sub: 'Grades 7–8', items: [
                    { code: 'W.AW.7.1', desc: 'Argument writing, defend the best design.' },
                    { code: 'W.IW.7.2', desc: 'Informative/explanatory technical writing.' },
                    { code: 'W.RW.7.7 · W.SE.7.6', desc: 'Short research; gather and cite evidence.' },
                    { code: 'RI.AA · RI.CT', desc: 'Evaluate arguments on infrastructure and justice.' },
                    { code: 'SL.PE.7.1 · SL.II.7.2', desc: 'Collaborative discussion; interpret data.' },
                    { code: 'SL.PI.7.4 · SL.UM.7.5', desc: 'Present findings with multimedia.' },
                  ] },
                  { cat: 'des', name: 'Design, Technology & CS', sub: 'NJSLS 8.1 & 8.2', items: [
                    { code: '8.2.8.ED.1–7', desc: 'Apply the engineering design process.' },
                    { code: '8.2.8.ITH · NT', desc: "Technology's effect on people and the environment." },
                    { code: '8.2.8.ETW', desc: 'Ethics, environment, and effects of technology.' },
                    { code: '8.1.8.DA', desc: 'Data and analysis with computational tools.' },
                  ] },
                  { cat: 'car', name: 'Career Readiness', sub: 'NJSLS 9.2 & 9.4', items: [
                    { code: '9.2.8.CAP', desc: 'Career awareness, exploration, and planning.' },
                    { code: '9.4.8.CI', desc: 'Creativity and innovation.' },
                    { code: '9.4.8.CT', desc: 'Critical thinking and problem solving.' },
                    { code: '9.4.8.IML', desc: 'Information and media literacy.' },
                    { code: '9.4.8.TL', desc: 'Technology literacy.' },
                  ] },
                ]} />

              <InstructionalApproach id="bb-approach" eyebrow="Instructional model" title="How the program is taught"
                desc="Bridging Brilliance runs as a studio: short science, math, and ELA mini-lessons followed by extended time to design, build, test, and revise, with structures that keep every middle-school scholar engaged and supported."
                cells={BB_APPROACH} />

              <CurriculumFooter
                programTitle="Bridging Brilliance"
                programDesc="A 12-week middle-school engineering program, Engineering the Hudson, where grades 6–8 students design, build, test, and defend a prototype bridge through a full, standards-aligned engineering design cycle."
                partners={['Aedifica, program operator', 'Hillside Public Schools, school collaboration', 'Stevens Institute of Technology, university partner']}
                frameworks={['NGSS / NJSLS-Science', 'NJSLS-Mathematics (7–8)', 'NJSLS-English Language Arts (7–8)', 'Design, Technology & CS (8.1 / 8.2)', 'Career Readiness (9.2 / 9.4)']}
                disclaimer="Curriculum derived from the Bridging Brilliance: Engineering the Hudson program design. Standard codes indicate alignment targets and should be confirmed against the current NJSLS revisions before publication."
              />
            </CurriculumShell>

            <CurriculumShell
              id="summer"
              color="var(--color-datum)"
              open={open.has('summer')}
              onToggle={() => toggle('summer')}
              openLabel="Open programs"
              closeLabel="Close programs"
              legendAriaLabel="Standards key, filter the days by framework"
              legendAllShownText="Showing all standards frameworks. Each day is color-coded and labeled by its framework; hover any tag for detail."
              meta="Grades 6–12 · three camp models · full 10-day Engineering Explorers map"
              collapsedTitle="Summer STEM Camps: Engineering Explorers & Built-Environment Intensives"
              eyebrow="Grades 6–12 · Summer STEM Camps · 1–2 Week Intensives"
              title="Summer engineers."
              intro="Three hands-on summer camps that turn curiosity into engineering identity, from a two-week middle-school design studio to construction and girls-in-engineering intensives, each ending in a real prototype and a public showcase."
              facts={[
                { value: '3', label: 'Camp models' },
                { value: '6–12', label: 'Grades served' },
                { value: '1–2', label: 'Weeks each' },
                { value: '10', label: 'Featured day map' },
              ]}
              toc={[
                { label: 'Camp Models', href: '#summer-models' },
                { label: 'Explore Days', href: '#summer-week1' },
                { label: 'Design Sprint', href: '#summer-week2' },
                { label: 'Standards Matrix', href: '#summer-standards' },
              ]}
              frameworks={[
                { cat: 'sci', name: 'NGSS / Science' },
                { cat: 'math', name: 'Math & Data' },
                { cat: 'ela', name: 'ELA & Communication' },
                { cat: 'des', name: 'Design, Tech & CS' },
                { cat: 'car', name: 'Career Readiness' },
              ]}>

              <ModelCards id="summer-models" eyebrow="Choose a camp" title="Three summer camp models"
                desc="Each camp is a short, hands-on intensive with an authentic engineering focus and a public final project. The Engineering Explorers camp is mapped day-by-day below; all three share the same studio approach and standards frameworks."
                items={CAMP_MODELS} />

              <div className="pt-10 lg:pt-12 max-w-[68ch]">
                <p className="text-[10.5px] uppercase tracking-[0.16em] text-ink-soft font-semibold mb-3" style={{ fontFamily: 'var(--font-body)' }}>Featured map · Engineering Explorers · 2-week model</p>
                <h4 className="text-[1.5rem] lg:text-[1.75rem] text-anthracite italic leading-[1.15] tracking-[-0.02em] mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>Every day names the standards it teaches</h4>
                <p className="text-[13.5px] text-anthracite/75 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
                  The two-week Engineering Explorers camp runs ten studio days, seven days rotating through
                  the domains of engineering, then a three-day design sprint to the STEM Expo. Each day is
                  color-coded to its framework; hover any tag for detail, or tap a framework above to filter.
                </p>
              </div>

              <Band color="var(--color-datum)" id="summer-week1" numLabel="01" rangeLabel="Week 1 · Days 1–7" title="Explore the Engineering Domains"
                desc="A rotating tour through the core domains of engineering, structures, materials, circuits, robotics, water, and energy, building the skills, vocabulary, and confidence students carry into the design sprint."
                meta={[
                  { label: 'Focus', value: 'Engineering identity · measurement & testing · circuits, robotics & sustainability' },
                  { label: 'Daily deliverables', value: 'Engineering notebook · data tables · working circuit & robot · audit and observation notes' },
                  { label: 'Format', value: 'Short mini-lessons followed by hands-on rotating challenges' },
                ]}
                weeks={SUMMER_WEEK1_DAYS} />

              <Band color="var(--color-datum)" id="summer-week2" numLabel="02" rangeLabel="Week 2 · Days 8–10" title="Design Sprint & STEM Expo"
                desc="Teams choose a real local problem, define criteria and constraints, prototype and test under real limits, and present their solution at a public STEM Expo."
                meta={[
                  { label: 'Essential question', value: "Which solution best fits our community's problem, and how do we show it works?" },
                  { label: 'Focus', value: 'Design thinking · prototyping & testing · communication' },
                  { label: 'Deliverables', value: 'Problem statement & plan · prototype v2 & test results · poster, pitch & reflection' },
                ]}
                weeks={SUMMER_WEEK2_DAYS} />

              <StandardsMatrix id="summer-standards" eyebrow="Consolidated alignment" title="Standards alignment matrix"
                desc="The camps are enrichment intensives rather than graded courses, so alignment is expressed as the standards frameworks each day connects to. The Engineering Explorers map touches all five; the other camps draw from the same set."
                cards={[
                  { cat: 'sci', name: 'NGSS / Science', sub: 'Practices & core ideas', items: [
                    { code: 'MS-ETS1', desc: 'Engineering design: define, model, test, optimize.' },
                    { code: 'PS: Forces', desc: 'Structures, forces, and material performance.' },
                    { code: 'PS: Energy', desc: 'Energy systems, transfer, and efficiency.' },
                    { code: 'ESS: Earth', desc: 'Water, stormwater, and human impact.' },
                    { code: 'Practices', desc: 'Science & engineering practices throughout.' },
                  ] },
                  { cat: 'math', name: 'Math & Data', sub: 'Quantitative reasoning', items: [
                    { code: 'Measure', desc: 'Measurement and units in build and test.' },
                    { code: 'Data', desc: 'Record, graph, and compare test data.' },
                    { code: 'Optimize', desc: 'Efficiency metrics and trade-offs.' },
                  ] },
                  { cat: 'ela', name: 'ELA & Communication', sub: 'Explain & present', items: [
                    { code: 'Argument', desc: 'Argue from evidence for design choices.' },
                    { code: 'Present', desc: 'Poster, pitch, and public presentation.' },
                    { code: 'Reflect', desc: 'Written reflection on learning and growth.' },
                  ] },
                  { cat: 'des', name: 'Design, Technology & CS', sub: 'Build & code', items: [
                    { code: 'Design', desc: 'Design thinking and the engineering process.' },
                    { code: 'Circuits', desc: 'Circuits, sensors, and device thinking.' },
                    { code: 'Robotics', desc: 'Algorithms, coding, and debugging.' },
                    { code: 'Iterate', desc: 'Prototype, test, and redesign.' },
                  ] },
                  { cat: 'car', name: 'Career Readiness', sub: 'Identity & pathways', items: [
                    { code: 'Identity', desc: 'Engineering and STEM identity building.' },
                    { code: 'Teamwork', desc: 'Collaboration, roles, and leadership.' },
                    { code: 'Awareness', desc: 'Career awareness and pathway planning.' },
                  ] },
                ]} />

              <CurriculumFooter
                programTitle="Summer STEM Camps"
                programDesc="Three hands-on Aedifica summer intensives for grades 6–12, Engineering Explorers, Construction & Built Environment, and Girls in Engineering & Technology, each ending in a real prototype and a public showcase."
                partners={['Aedifica, program operator', 'Hillside Public Schools, school collaboration', 'Stevens Institute of Technology, university partner']}
                frameworks={['NGSS / NJSLS-Science', 'Mathematics & data analysis', 'NJSLS-English Language Arts', 'Design, Technology & CS', 'Career Readiness (9.2 / 9.4)']}
                disclaimer="Curriculum derived from the Aedifica summer STEM camp models and the Engineering Explorers 2-week design. Standards connections indicate alignment targets and should be confirmed against the current NJSLS revisions before publication."
              />
            </CurriculumShell>

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
            ['Schedule footprint', 'Flexible, single workshop through semester course; see “Ways to run it” above. Bridging Brilliance ran twelve weeks inside the school week.'],
            ['Who teaches', 'Aedifica instructors, working construction-management and engineering professionals, with your teacher of record present.'],
            ['Cohort size', 'Minimum 10, maximum 25. Bridging Brilliance ran with twenty-one students.'],
            ['Your staff commitment', 'Planning hours before the cohort, plus in-room hours per week for the teacher of record, confirmed with your team before launch.'],
            ['Room & materials', 'The partner provides the room. Aedifica brings all materials: kits, consumables, and testing equipment.'],
            ['Lead time', 'Four weeks from signed agreement to first session. The programs are built and ready to run.'],
            ['Pilot option', 'Whether a single-cohort pilot fits, and on what terms, is confirmed with each partner.'],
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

      {/* ── CTA ── bg-snow wrapper, bg-datum inner ── */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0 print:hidden" aria-label="Bring Explore to your school">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-datum px-10 pt-14 pb-12 lg:px-16 lg:pt-16 lg:pb-14 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-white italic mb-8 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Start with curiosity. Build toward opportunity.
            </h2>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/partner"
                className="inline-flex items-center justify-center gap-2 bg-white text-datum text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-white/92 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Bring Explore to your school
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link href="/partner"
                className="inline-flex items-center justify-center gap-2 border border-white/65 text-white text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-colors duration-150 hover:bg-white/10 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Ask about summer camps
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-[12.5px] text-white leading-[1.65] max-w-[56ch] mx-auto">
              For schools and community partners: Explore is designed to run inside a real school week,
              with real students, real materials, and a real showcase at the end. Programs are delivered
              by background-checked staff with appropriate supervision and student-privacy practices
              aligned to FERPA.
            </p>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
