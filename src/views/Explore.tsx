'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { CaretDown } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const GAINS = [
  {
    heading: 'Awareness of careers',
    body: 'Engineering and construction-management roles become concrete: who does the work, what it involves day to day, and what the pathways into it look like.',
  },
  {
    heading: 'Design-build confidence',
    body: 'Students plan, build, test, and revise, gaining real confidence with the engineering design process through challenges they own, not watch.',
  },
  {
    heading: 'Teamwork and communication',
    body: 'Structured team roles and public presentations build the habits that transfer well beyond the program: listening, leading, and explaining decisions clearly.',
  },
  {
    heading: 'Pathways made visible',
    body: 'Engineering, planning, sustainability, and infrastructure become tangible alongside the concrete next steps that connect school to CTE, college, and opportunity.',
  },
] as const

const CAMPS = [
  {
    name: 'Middle School Engineering Explorers Camp',
    grade: 'Grades 6–8',
    duration: '2 weeks',
    objectives:
      'Engineering identity, teamwork, design thinking, measurement, testing, and iteration.',
    activities: [
      'Rotating mini-challenges across structures, circuits, robotics, water, energy, and materials',
      'Bridge and tower design with load testing and failure analysis',
      'Material comparison lab: cardboard, wood, plastics, and recycled content',
      'Circuits, sensors, and basic robotics obstacle challenge',
      'Renewable energy and stormwater exploration activities',
      'Design sprint: identify a local problem, build a prototype, present at STEM Expo',
    ],
    project: 'STEM Expo prototype, poster, and individual reflection',
  },
  {
    name: 'Construction, Architecture & Built Environment Camp',
    grade: 'Grades 7–12',
    duration: '1–2 weeks',
    objectives:
      'Design, estimating, scheduling, safety, sustainability, and construction logistics.',
    activities: [
      'Site logistics planning activity for a real or simulated NJ project',
      'Quantity takeoff exercise using simplified drawings',
      'Scale model construction with constrained materials',
      'Construction sequencing game: schedule a project from ground to finish',
    ],
    project: 'Sustainable school addition or community facility proposal',
  },
  {
    name: 'Girls in Engineering & Technology Camp',
    grade: 'Grades 6–10',
    duration: '1–2 weeks',
    objectives:
      'STEM identity, leadership, confidence, coding and design skills, and mentoring networks.',
    activities: [
      'Mentor panels with women practicing in engineering and technology fields',
      'Coding and digital design project',
      'Engineering prototype challenge with team roles',
      'Leadership workshops and structured team-building activities',
    ],
    project: 'Team prototype and personal STEM pathway plan',
  },
] as const

// ── Day-by-day map for the Engineering Explorers camp (CAMPS[0] only) —
// pulled from the client's summer-camps curriculum doc. Same StdBadge system.
type DayChip = { code: string; cat: StdCat; desc: string }
type CampDay = { day: number; week: string; question: string; desc: string; chips: DayChip[] }

const EXPLORERS_DAYS: CampDay[] = [
  {
    day: 1, week: 'Week 1 · Explore the domains',
    question: 'What do engineers do?',
    desc: 'Team-building, the engineering design cycle, and a local New Jersey problem gallery. Students set up engineering notebooks and agree on team norms.',
    chips: [
      { code: 'Engineering practices', cat: 'sci', desc: 'NJSLS-S science and engineering practices.' },
      { code: 'STEM identity', cat: 'car', desc: 'Career awareness and STEM identity.' },
      { code: 'Team norms', cat: 'ela', desc: 'Collaboration and team norms.' },
    ],
  },
  {
    day: 2, week: 'Week 1 · Explore the domains',
    question: 'Structures and forces',
    desc: 'Bridge and tower design, load testing, and failure analysis. Students record a load-test data table and revise their sketches based on evidence.',
    chips: [
      { code: 'MS-ETS1', cat: 'sci', desc: 'Engineering design; physical science of forces.' },
      { code: 'Forces', cat: 'sci', desc: 'Structures, forces, and material performance.' },
      { code: 'Data analysis', cat: 'math', desc: 'Collect and analyze load-test data.' },
    ],
  },
  {
    day: 3, week: 'Week 1 · Explore the domains',
    question: 'Materials matter',
    desc: 'Compare cardboard, wood, plastics, and recycled materials in a material-choice lab. Students build a materials selection chart and justify choices with evidence.',
    chips: [
      { code: 'Structure–property', cat: 'sci', desc: 'Structure–property relationships of materials.' },
      { code: 'Argument from evidence', cat: 'ela', desc: 'Construct an argument from evidence.' },
    ],
  },
  {
    day: 4, week: 'Week 1 · Explore the domains',
    question: 'Circuits and sensors',
    desc: 'Build an LED circuit and use a sensor to collect data. Students keep a working circuit and a troubleshooting log as they debug.',
    chips: [
      { code: 'Energy systems', cat: 'sci', desc: 'Energy systems and energy transfer.' },
      { code: 'CS / devices', cat: 'des', desc: 'Computer-science and device thinking.' },
    ],
  },
  {
    day: 5, week: 'Week 1 · Explore the domains',
    question: 'Robotics basics',
    desc: 'Build and code simple robot movement through an obstacle challenge. Students demonstrate controlled movement and iterate on their programs.',
    chips: [
      { code: 'Algorithms', cat: 'des', desc: 'Algorithms and sequencing.' },
      { code: 'Debugging', cat: 'des', desc: 'Debugging and troubleshooting.' },
      { code: 'Iteration', cat: 'des', desc: 'Iteration and refinement.' },
    ],
  },
  {
    day: 6, week: 'Week 1 · Explore the domains',
    question: 'Water, flooding and stormwater',
    desc: 'Model runoff and infiltration, test water quality, and map school drainage. Students record stormwater observations relevant to New Jersey flooding.',
    chips: [
      { code: 'Earth systems', cat: 'sci', desc: 'Earth systems and the water cycle.' },
      { code: 'Human impact', cat: 'sci', desc: 'Human impact on natural systems; NJ flood relevance.' },
    ],
  },
  {
    day: 7, week: 'Week 1 · Explore the domains',
    question: 'Renewable energy and efficiency',
    desc: 'A solar or wind mini-challenge and a school energy-audit walk. Students produce an energy prototype or an audit checklist.',
    chips: [
      { code: 'Energy transfer', cat: 'sci', desc: 'Energy transfer and transformation.' },
      { code: 'Sustainability', cat: 'sci', desc: 'Sustainability and efficiency.' },
    ],
  },
  {
    day: 8, week: 'Week 2 · Design sprint & STEM Expo',
    question: 'Design sprint begins',
    desc: 'Teams select a local problem and define criteria and constraints. They draft a problem statement and a prototype plan.',
    chips: [
      { code: 'Design thinking', cat: 'des', desc: 'Design thinking and framing.' },
      { code: 'Define problems', cat: 'sci', desc: 'Defining engineering problems.' },
    ],
  },
  {
    day: 9, week: 'Week 2 · Design sprint & STEM Expo',
    question: 'Build, test, revise',
    desc: 'Prototype construction, testing, peer critique, and redesign. Students produce a prototype v2 and record their test results.',
    chips: [
      { code: 'Optimization', cat: 'sci', desc: 'Optimization of a design solution.' },
      { code: 'Test data', cat: 'math', desc: 'Collect and interpret test data.' },
      { code: 'Redesign', cat: 'des', desc: 'Evidence-based redesign.' },
    ],
  },
  {
    day: 10, week: 'Week 2 · Design sprint & STEM Expo',
    question: 'STEM Expo',
    desc: 'Poster, pitch rehearsal, and a public presentation. Students present the prototype and poster and write an individual reflection on their growth.',
    chips: [
      { code: 'Communication', cat: 'ela', desc: 'Technical communication and presentation.' },
      { code: 'Evidence', cat: 'ela', desc: 'Support claims with evidence.' },
      { code: 'Career readiness', cat: 'car', desc: 'Career readiness and pathway awareness.' },
    ],
  },
]

const QUOTES = [
  {
    text: 'When we mess up, this only sets you up for a new door to open.',
    featured: true,
  },
  {
    text: 'Engineering is "designing, creating, testing, and improving solutions."',
    featured: false,
  },
  {
    text: 'It is as important to learn as to succeed.',
    featured: false,
  },
  {
    text: 'Not everything will be easy.',
    featured: false,
  },
  {
    text: 'Engineering means "designing for sustainability" and "using serious critical thinking skills."',
    featured: false,
  },
] as const

// ── Standards snapshot: same badge system as Pathway and Launch. Codes are
// pulled directly from the Bridging Brilliance curriculum (the full matrix
// lives there) so this stays a real, condensed preview, not invented content.
type StdCat = 'sci' | 'math' | 'ela' | 'des' | 'car'
type StdChip = { code: string; desc: string }

const STD_COLORS: Record<StdCat, string> = {
  sci:  '#16243F',
  math: '#9C5500',
  ela:  '#1E7A72',
  des:  '#3E5C8A',
  car:  '#7A4E63',
}

const STD_FRAMEWORKS: { cat: StdCat; name: string; desc: string; chips: StdChip[] }[] = [
  {
    cat: 'sci',
    name: 'NGSS / NJSLS-Science',
    desc: 'Engineering design: defining problems, testing solutions, analyzing data.',
    chips: [
      { code: 'MS-ETS1-1', desc: 'Define criteria and constraints of a design problem.' },
      { code: 'MS-ETS1-3', desc: 'Analyze test data to identify the best characteristics.' },
    ],
  },
  {
    cat: 'math',
    name: 'NJSLS-Mathematics',
    desc: 'Scale drawings, unit rates, and the geometry behind truss and bridge design.',
    chips: [
      { code: '7.RP.A', desc: 'Scale drawings, unit rates, and efficiency metrics.' },
      { code: '7.G · 8.G', desc: 'Geometry of trusses, scale, and similarity.' },
    ],
  },
  {
    cat: 'ela',
    name: 'NJSLS-English Language Arts',
    desc: 'Argument writing and presenting findings with evidence.',
    chips: [
      { code: 'W.AW.7.1', desc: 'Write arguments to defend the best design.' },
      { code: 'SL.PI.7.4', desc: 'Present findings with multimedia.' },
    ],
  },
  {
    cat: 'des',
    name: 'Design, Technology & CS',
    desc: 'The engineering design process and computational tools for data.',
    chips: [
      { code: '8.2.8.ED', desc: 'Apply the engineering design process.' },
      { code: '8.1.8.DA', desc: 'Data and analysis with computational tools.' },
    ],
  },
  {
    cat: 'car',
    name: 'Career Readiness',
    desc: 'Career awareness and structured critical thinking.',
    chips: [
      { code: '9.2.8.CAP', desc: 'Career awareness, exploration, and planning.' },
      { code: '9.4.8.CT', desc: 'Critical thinking and problem solving.' },
    ],
  },
]

function StdBadge({ cat, chip }: { cat: StdCat; chip: StdChip }) {
  return (
    <span
      title={chip.desc}
      className="inline-block text-[9px] font-medium tracking-[0.03em] px-1.5 py-0.5 text-white leading-none cursor-help whitespace-nowrap"
      style={{ backgroundColor: STD_COLORS[cat], fontFamily: 'var(--font-body)' }}>
      {chip.code}
    </span>
  )
}

export function Explore() {
  const reduce = useReducedMotion()
  const [openCamps, setOpenCamps] = useState<Set<number>>(new Set())
  const toggleCamp = (i: number) =>
    setOpenCamps(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-datum min-h-[65vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="explore-h1">

        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-[40%]"
          style={{ willChange: 'opacity, transform' }}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.25, ease: EASE }}>
          <img
            src="/images/explore-hero.jpg"
            alt="Middle school students building bridge prototypes together in Aedifica Explore engineering program, New Jersey"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(25%) contrast(1.08)' }}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="lg:max-w-[58%] lg:pr-8 xl:pr-12">

            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/15 text-white px-3 py-1 mb-10 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
              Hands-On STEM · Middle & High School
            </motion.span>

            <motion.h1
              id="explore-h1"
              className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.97] tracking-[-0.035em] text-white italic mb-10 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              Career discovery for students who haven't been shown the construction door yet.
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-x-0 gap-y-3"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.38, ease: EASE }}>
              {(['Middle and high school', 'New Jersey', 'Camps and workshops'] as const).map((item, i) => (
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

      {/* ── What Explore Delivers ── bg-snow */}
      <section className="bg-snow py-14 lg:py-22 overflow-hidden" aria-labelledby="explore-delivers-h2">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            id="explore-delivers-h2"
            className="text-[2.5rem] lg:text-[4rem] xl:text-[5rem] leading-[1.04] tracking-[-0.035em] text-anthracite italic mb-16 lg:mb-20 max-w-[22ch] [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 32 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.7, ease: SPRING }}>
            Students build, test, present, and discover, before they have to choose.
          </motion.h2>

          <motion.p
            className="text-[15.5px] text-anthracite/72 leading-[1.72] max-w-[68ch] mb-14 lg:mb-18"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
            Explore introduces students to construction, engineering, planning, teamwork, and project thinking through accessible, hands-on activities. Learners build, test, plan, and present while discovering the people and decisions behind buildings and infrastructure, at the age when those discoveries still shape direction.
          </motion.p>

          <motion.p
            className="text-[14.5px] text-anthracite/72 leading-[1.72] max-w-[68ch] -mt-8 lg:-mt-12 mb-14 lg:mb-18"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}>
            Explore can be adapted for grades 6 to 9, after-school groups, camps, community-based
            organizations, enrichment programs, and school-day workshops, offered as a single workshop,
            multi-session series, summer camp module, or partner-funded enrichment program.
          </motion.p>

          {/* Program facts + sample activities — asymmetric pair */}
          <div className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-14 xl:gap-20 mb-16 lg:mb-20 lg:items-start">
            <div className="mb-12 lg:mb-0">
              {([
                ['Audience', 'Middle-school students, grades 6–9; after-school, camp, and community programs'],
                ['Learning model', 'Studio-style, project-based learning in collaborative design teams with engineering notebooks and public showcases'],
                ['What students gain', 'Awareness of engineering and construction-management careers, confidence with design-build thinking, teamwork and communication practice, and early exposure to engineering, planning, sustainability, and community impact'],
                ['Career exposure', 'Career role-play (owner, designer, estimator, scheduler, field manager) plus professional judges and campus visits'],
              ] as const).map(([label, value], i) => (
                <motion.div
                  key={label}
                  className="grid grid-cols-1 sm:grid-cols-[170px_1fr] gap-2 sm:gap-8 py-5 border-t border-sediment/25 last:border-b last:border-sediment/25"
                  initial={reduce ? undefined : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, delay: i * 0.05, ease: EASE }}>
                  <p
                    className="text-[10.5px] uppercase tracking-[0.16em] text-datum pt-1 select-none"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {label}
                  </p>
                  <p
                    className="text-[14px] text-anthracite/78 leading-[1.68]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {value}
                  </p>
                </motion.div>
              ))}

              <motion.p
                className="mt-8 text-[1.125rem] lg:text-[1.25rem] italic text-anthracite/85 leading-[1.5] max-w-[52ch]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.15, ease: EASE }}>
                Built, tested, revised, not watched. Students understand tension, compression, and cost
                most deeply when a prototype fails in front of them and they have to explain why.
              </motion.p>
            </div>

            <motion.div
              className="bg-datum px-8 py-9 lg:px-10 lg:py-10"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: SPRING }}>
              <h3
                className="text-[1.375rem] lg:text-[1.5rem] text-white italic leading-[1.2] tracking-[-0.02em] mb-7"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Sample activities and student deliverables.
              </h3>
              <ul className="list-none space-y-3.5 mb-7">
                {([
                  'Bridge or tower design challenge',
                  'Mini site-planning activity',
                  'Materials and load-testing demonstration',
                  'Neighborhood infrastructure mapping',
                  'Career role-play: owner, designer, estimator, scheduler, field manager',
                ] as const).map((act) => (
                  <li key={act} className="flex gap-3.5 items-start">
                    <span className="flex-shrink-0 w-[4px] h-[4px] bg-white/55 mt-[8px]" aria-hidden="true" />
                    <span
                      className="text-[14px] text-white/95 leading-[1.6]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {act}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                className="text-[12px] text-white/90 uppercase tracking-[0.06em] leading-[1.7] border-t border-white/20 pt-5"
                style={{ fontFamily: 'var(--font-body)' }}>
                Deliverables: engineering notebook · tested prototype · STEM Expo poster · reflection
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-sediment/25">
            {GAINS.map(({ heading, body }, i) => (
              <motion.div
                key={heading}
                className={[
                  'pt-8 lg:pt-10 pb-8 lg:pb-12',
                  i < 3 ? 'lg:pr-8 xl:pr-10 lg:border-r lg:border-sediment/25' : '',
                  i > 0 ? 'lg:pl-8 xl:pl-10' : '',
                  i < 2 ? 'border-b border-sediment/25 sm:border-b-0' : '',
                ].filter(Boolean).join(' ')}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: i * 0.07, ease: EASE }}>
                <p
                  className="text-[1rem] lg:text-[1.0625rem] text-anthracite italic leading-[1.25] tracking-[-0.015em] mb-3"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {heading}
                </p>
                <p
                  className="text-[13.5px] text-anthracite/70 leading-[1.65]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Sample Summer Programs ── bg-bone */}
      <section className="bg-bone py-12 lg:py-18" aria-labelledby="camps-h2">
        <div className="max-w-7xl mx-auto px-6">

          <div className="lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-16 xl:gap-24 lg:items-start mb-10 lg:mb-12">
            <div>
              <motion.h2
                id="camps-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic mb-4 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                Three program formats built around different learners.
              </motion.h2>
            </div>
            <motion.p
              className="text-[14.5px] text-anthracite/70 leading-[1.72] lg:pt-2"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              Each camp model targets a different learner profile and goal: from early STEM identity through gender-equity access to construction and infrastructure career literacy. All three share the same instructional core: build, test, present.
            </motion.p>
          </div>

          {/* Camp accordion */}
          <motion.div
            className="bg-snow"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}>

            {CAMPS.map(({ name, grade, duration, objectives, activities, project }, i) => (
              <div key={name} className="border-t border-sediment/15">
                <button
                  className="w-full text-left px-7 lg:px-10 py-5 flex items-start gap-5 hover:bg-bone/50 transition-colors duration-150"
                  onClick={() => toggleCamp(i)}
                  aria-expanded={openCamps.has(i)}
                  aria-controls={`camp-body-${i}`}>

                  <div className="flex-shrink-0 w-[104px] mt-0.5">
                    <span
                      className="text-[11px] font-medium text-datum block leading-none mb-1"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {grade}
                    </span>
                    <span
                      className="text-[11.5px] text-anthracite/75 uppercase tracking-[0.05em] block"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {duration}
                    </span>
                  </div>

                  <span
                    className="flex-1 text-[15px] lg:text-[1.0625rem] text-anthracite italic leading-[1.3] tracking-[-0.015em]"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {name}
                  </span>

                  <motion.span
                    className="flex-shrink-0 text-anthracite/35 mt-1"
                    animate={{ rotate: openCamps.has(i) ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: EASE }}>
                    <CaretDown size={13} aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openCamps.has(i) && (
                    <motion.div
                      id={`camp-body-${i}`}
                      key="body"
                      initial={reduce ? undefined : { height: 0, opacity: 0 }}
                      animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                      exit={reduce ? undefined : { height: 0, opacity: 0 }}
                      transition={reduce ? undefined : { duration: 0.22, ease: EASE }}
                      style={{ overflow: 'hidden' }}>
                      <div className="px-7 lg:px-10 pb-7 lg:pl-[calc(2.5rem+104px)]">
                        <p
                          className="text-[13.5px] text-anthracite/75 leading-[1.68] mb-5 italic"
                          style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                          {objectives}
                        </p>
                        <div className="lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-10">
                          <div>
                            <p
                              className="text-[11px] uppercase tracking-[0.12em] text-anthracite/75 mb-3"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              Major activities
                            </p>
                            <ul className="space-y-2">
                              {activities.map(act => (
                                <li key={act} className="flex gap-2.5 items-start">
                                  <span className="w-[4px] h-[4px] bg-datum/50 rounded-full flex-shrink-0 mt-[7px]" aria-hidden="true" />
                                  <span
                                    className="text-[13px] text-anthracite/75 leading-[1.6]"
                                    style={{ fontFamily: 'var(--font-body)' }}>
                                    {act}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-6 lg:mt-0">
                            <p
                              className="text-[11px] uppercase tracking-[0.12em] text-anthracite/75 mb-3"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              Final project
                            </p>
                            <p
                              className="text-[13.5px] text-anthracite/75 leading-[1.6]"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              {project}
                            </p>
                          </div>
                        </div>

                        {/* Day-by-day map — Engineering Explorers camp only */}
                        {i === 0 && (
                          <div className="mt-8 pt-6 border-t border-sediment/15">
                            <p
                              className="text-[11px] uppercase tracking-[0.12em] text-anthracite/75 mb-4"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              Day-by-day map
                            </p>
                            <div className="divide-y divide-sediment/12">
                              {EXPLORERS_DAYS.map((d, di) => (
                                <div key={d.day} className="py-3.5">
                                  {(di === 0 || d.week !== EXPLORERS_DAYS[di - 1].week) && (
                                    <p
                                      className="text-[10px] text-datum uppercase tracking-[0.1em] mb-2.5"
                                      style={{ fontFamily: 'var(--font-body)' }}>
                                      {d.week}
                                    </p>
                                  )}
                                  <div className="flex gap-4 items-start">
                                    <span
                                      className="flex-shrink-0 w-6 text-[10.5px] text-anthracite/78 uppercase tracking-[0.04em] pt-1"
                                      style={{ fontFamily: 'var(--font-body)' }}>
                                      D{d.day}
                                    </span>
                                    <div className="flex-1">
                                      <p
                                        className="text-[13px] text-anthracite italic leading-[1.4] mb-1"
                                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                                        {d.question}
                                      </p>
                                      <p
                                        className="text-[12px] text-anthracite/78 leading-[1.55] mb-2"
                                        style={{ fontFamily: 'var(--font-body)' }}>
                                        {d.desc}
                                      </p>
                                      <div className="flex flex-wrap gap-1.5">
                                        {d.chips.map(c => <StdBadge key={c.code} cat={c.cat} chip={c} />)}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="border-t border-sediment/15" />
          </motion.div>

        </div>
      </section>

      {/* ── Where Explore Leads ── bg-snow */}
      <section className="bg-snow py-12 lg:py-18" aria-labelledby="leads-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-14 xl:gap-20 lg:items-start">

            {/* Left: content */}
            <div>
              <p
                className="text-[10.5px] text-anthracite/75 uppercase tracking-[0.2em] mb-6 select-none"
                style={{ fontFamily: 'var(--font-body)' }}>
                Model program
              </p>

              <motion.h2
                id="leads-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic mb-6 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                Bridging Brilliance: what a full Explore curriculum looks like in practice.
              </motion.h2>

              <motion.p
                className="text-[15px] text-anthracite/75 leading-[1.72] mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
                In spring 2025, twenty-one Hillside Innovation Academy seventh and eighth graders spent ten weeks as engineers, designing, building, testing, and defending a bridge across the Hudson River. The Bridging Brilliance program is the curriculum model that shows what Explore looks like when it runs as a full school-year engagement: three units, twelve weeks, four student teams, a final showcase at Stevens Institute of Technology.
              </motion.p>

              <motion.p
                className="text-[15px] text-anthracite/75 leading-[1.72] mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.13, ease: EASE }}>
                Six of the eleven eighth-grade participants earned acceptance to the selective Union County Vocational-Technical Schools for 2025–26. The full curriculum, standards alignment, assessment framework, and unit maps are on the Bridging Brilliance page.
              </motion.p>
            </div>

            {/* Right: image placeholder */}
            <div className="mt-10 lg:mt-0">
              <motion.div
                className="overflow-hidden mb-0 h-[260px] lg:h-[360px]"
                initial={reduce ? undefined : { opacity: 0, x: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
                <img
                  src="/images/bb-students.jpg"
                  alt="Hillside Innovation Academy students presenting bridge prototypes at Stevens Institute of Technology"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </motion.div>

              {/* Stat strip below image */}
              <motion.div
                className="grid grid-cols-3 border border-t-0 border-sediment/20 divide-x divide-sediment/20"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.2, ease: EASE }}>
                {[
                  { value: '21', label: 'learners, 2025' },
                  { value: '10 wks', label: 'full program' },
                  { value: '55%', label: 'to selective STEM HS' },
                ].map(({ value, label }) => (
                  <div key={label} className="px-5 py-4">
                    <p
                      className="text-[1.5rem] lg:text-[1.875rem] text-datum italic leading-none tracking-[-0.025em] mb-1"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                      {value}
                    </p>
                    <p
                      className="text-[11px] text-anthracite/78 leading-[1.4]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>

          {/* Standards preview — full width, real codes from Bridging Brilliance */}
          <div className="mt-4 lg:mt-5 border-t border-sediment/20 pt-6">
            <p
              className="text-[11px] uppercase tracking-[0.12em] text-anthracite/75 mb-4"
              style={{ fontFamily: 'var(--font-body)' }}>
              Standards this program addresses
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-6 gap-y-6">
              {STD_FRAMEWORKS.map((fw, i) => (
                <motion.div
                  key={fw.name}
                  initial={reduce ? undefined : { opacity: 0, y: 10 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, delay: i * 0.06, ease: EASE }}>
                  <p
                    className="text-[13px] text-anthracite/90 mb-1"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {fw.name}
                  </p>
                  <p
                    className="text-[12px] text-anthracite/70 leading-[1.5] mb-2 min-h-[3.375rem]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {fw.desc}
                  </p>
                  <div className="flex flex-nowrap gap-1.5">
                    {fw.chips.map(c => <StdBadge key={c.code} cat={fw.cat} chip={c} />)}
                  </div>
                </motion.div>
              ))}
            </div>
            <p
              className="text-[11.5px] text-anthracite/78 italic pt-5 mb-8"
              style={{ fontFamily: 'var(--font-body)' }}>
              Full alignment matrix, all twelve weeks, on the Bridging Brilliance page.
            </p>
          </div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.18, ease: EASE }}>
            <Link href="/curriculum/bridging-brilliance"
              className="inline-flex items-center gap-2.5 bg-anthracite text-white text-[13.5px] tracking-[-0.01em] px-6 py-3 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-anthracite/90 group"
              style={{ fontFamily: 'var(--font-body)' }}>
              View the Bridging Brilliance curriculum
              <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* ── In Their Own Words ── bg-anthracite */}
      <section className="bg-anthracite py-14 lg:py-22" aria-labelledby="quotes-h2">
        <div className="max-w-7xl mx-auto px-6">

          <div className="lg:grid lg:grid-cols-[1fr_1.8fr] lg:gap-20 xl:gap-28 lg:items-start mb-12 lg:mb-16">
            <div>
              <motion.h2
                id="quotes-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.07] tracking-[-0.03em] text-white italic [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                In their own words.
              </motion.h2>
            </div>
            <motion.p
              className="text-[15px] text-white/60 leading-[1.72] lg:pt-14 xl:pt-16"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
              Ten weeks is enough time to change how a student sees a bridge, and themselves. These are reflections from the 2025 Building Bridges cohort: seventh and eighth graders who arrived describing engineering as "fixing things" and left talking about prototypes, sustainability, and what to do when a design fails. Student quotes are anonymized to protect privacy.
            </motion.p>
          </div>

          {/* Featured quote */}
          <motion.div
            className="border-t border-white/12 pt-10 lg:pt-12 pb-10 lg:pb-12 border-b border-white/12 mb-0"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
            <p
              className="text-[2rem] lg:text-[3rem] xl:text-[3.75rem] text-white italic leading-[1.1] tracking-[-0.03em] max-w-[26ch] [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              "{QUOTES[0].text}"
            </p>
            <p
              className="text-[12px] text-white/60 mt-5 uppercase tracking-[0.1em]"
              style={{ fontFamily: 'var(--font-body)' }}>
              Student reflection · 2025 Building Bridges cohort
            </p>
          </motion.div>

          {/* Remaining quotes: 2-col divide-y */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 divide-white/10">
            {QUOTES.slice(1).map(({ text }, i) => (
              <motion.div
                key={text}
                className={[
                  'py-8 lg:py-10',
                  i % 2 === 0 ? 'lg:pr-14 xl:pr-20 lg:border-r lg:border-white/10' : 'lg:pl-14 xl:pl-20',
                ].join(' ')}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: (i % 2) * 0.07, ease: EASE }}>
                <p
                  className="text-[1.375rem] lg:text-[1.625rem] xl:text-[1.875rem] text-white/88 italic leading-[1.25] tracking-[-0.02em] mb-4 [text-wrap:balance]"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  "{text}"
                </p>
                <p
                  className="text-[11.5px] text-white/60 uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Student reflection · 2025 Building Bridges cohort
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── bg-snow with datum inner */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-label="Bring Explore to your school">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-datum px-10 pt-16 pb-12 lg:px-16 lg:pt-20 lg:pb-14 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-white italic mb-6 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Start with curiosity. Build toward opportunity.
            </h2>

            <p
              className="text-[15px] text-white/90 leading-[1.7] max-w-[52ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Aedifica works with schools, districts, and community partners to design Explore programs that fit their learners, schedule, and goals. No standard format required.
            </p>

            <Link href="/partner"
              className="inline-flex items-center justify-center gap-2 bg-white text-datum text-[13.5px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-white/92 group"
              style={{ fontFamily: 'var(--font-body)' }}>
              Discuss an Explore partnership
              <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
