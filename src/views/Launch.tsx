'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { UsersThree, Blueprint, Package, Clock, ClipboardText, type Icon } from '@phosphor-icons/react'
import {
  CurriculumShell,
  Band,
  StandardsMatrix,
  InstructionalApproach,
  DeliverablesTable,
  CurriculumFooter,
  type WeekRow,
} from '../components/CurriculumShell'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const INFO_ROWS: { Icon: Icon; label: string; value: string }[] = [
  { Icon: ClipboardText, label: 'Status', value: 'Designed, CBO partners engaged, grant applications submitted; no cohort delivered' },
  { Icon: UsersThree, label: 'Audience', value: 'Workforce boards · county colleges · vocational and trade schools · agencies · employers' },
  { Icon: Blueprint, label: 'Format', value: 'Design + build + implementation support' },
  { Icon: Package, label: 'Deliverables', value: 'Curriculum, instructor capacity, outcome framework' },
  { Icon: Clock, label: 'Duration', value: 'Scoped to the institution, typically 2–4 terms to ownership' },
]

const MINI_LIST = [
  'Radically legible design: implementable by the people inheriting it',
  'Green-building, energy-efficiency, and resilience standards built in',
  'Same-definition outcome reporting from cohort one',
] as const

const CREDENTIALS = [
  { name: 'OSHA 30-Hour', org: 'U.S. OSHA', desc: 'Baseline supervisory safety credential required by many general contractors and construction employers.', target: '100%' },
  { name: 'LEED Green Associate', org: 'U.S. Green Building Council', desc: 'Professional credential for green-building practitioners and construction staff supporting LEED projects.', target: '85%' },
  { name: 'PMI-CAPM', org: 'Project Management Institute', desc: 'Entry-level project-management credential valued for assistant project manager, coordinator, and CM candidates.', target: '75%' },
] as const

const CAPSTONE_ROWS = [
  { name: 'Project Overview and Sustainability Goals', desc: 'Define the project, owner needs, green objectives, and performance priorities.' },
  { name: 'Scope of Work Summary', desc: 'Identify major work packages, project boundaries, responsibilities, and key deliverables.' },
  { name: 'Preliminary Construction Schedule', desc: 'Create a basic CPM or milestone schedule with sequencing logic and schedule risks.' },
  { name: 'Cost-Control Plan', desc: 'Develop a budget tracking approach, cost categories, unit costs, change order awareness, and reporting process.' },
  { name: 'Safety Plan Summary', desc: 'Prepare a supervisory safety plan section, hazard analysis, PPE expectations, and toolbox talk topic.' },
  { name: 'Green Materials and Specification Review', desc: 'Review sustainable materials, submittals, documentation requirements, and compliance risks.' },
  { name: 'Energy-Efficiency Coordination Plan', desc: 'Coordinate envelope, HVAC, solar PV, commissioning, and energy performance documentation.' },
  { name: 'Environmental Compliance Checklist', desc: 'Address stormwater, erosion control, permits, BMPs, waste tracking, and pollution prevention.' },
  { name: 'LEED Documentation Strategy', desc: 'Map construction activities to LEED credit categories and identify documentation responsibilities.' },
  { name: 'Risk Register and Mitigation Plan', desc: 'Identify project risks, probability/impact, mitigation actions, owners, and response plans.' },
  { name: 'Final Presentation', desc: 'Present the project management plan to instructors, peers, and industry reviewers.' },
] as const

const CAREER_ROLES = [
  { tag: 'Role 01', title: 'Assistant Construction Manager', desc: 'Supports project coordination, documentation, meetings, schedule tracking, and field coordination.' },
  { tag: 'Role 02', title: 'Assistant Project Manager', desc: 'Supports scope, budget, change orders, RFIs, submittals, and stakeholder communication.' },
  { tag: 'Role 03', title: 'Project Coordinator', desc: 'Maintains logs, schedules, meeting notes, document control, and communication workflows.' },
  { tag: 'Role 04', title: 'Construction Site Coordinator', desc: 'Assists with daily site activities, subcontractor coordination, logistics, and field reporting.' },
  { tag: 'Role 05', title: 'Field Engineer Assistant', desc: 'Supports field documentation, layout coordination, inspections, and technical issue tracking.' },
  { tag: 'Role 06', title: 'Sustainability Coordinator', desc: 'Assists with LEED documentation, green materials tracking, waste management, and reporting.' },
  { tag: 'Role 07', title: 'Safety Coordinator', desc: 'Supports hazard identification, safety documentation, toolbox talks, and compliance monitoring.' },
  { tag: 'Role 08', title: 'Energy Efficiency Coordinator', desc: 'Assists with retrofit sequencing, envelope/HVAC coordination, commissioning, and owner communication.' },
]

// ── Phase 01: Foundations & Core CM, weeks 1–6 ──
const PHASE1_WEEKS: WeekRow[] = [
  { num: 1, unit: 'Week', question: 'What is a green Construction Manager, and why now?',
    desc: <>Program orientation and adult-scholar expectations; New Jersey&rsquo;s <strong className="text-anthracite/90 font-medium">green economy context</strong> and the Construction Manager role; the credential pathway; and the launch of the capstone project each participant builds across all sixteen weeks.</>,
    chips: [
      { code: 'Green economy', cat: 'sci', desc: 'Green economy overview: clean energy, retrofits, offshore wind, and sustainable infrastructure demand.' },
      { code: 'CM role', cat: 'math', desc: "The Construction Manager's coordination role across cost, schedule, quality, safety, and sustainability." },
      { code: 'Capstone launch', cat: 'car', desc: 'Capstone launch: participants begin the green construction management portfolio.' },
    ] },
  { num: 2, unit: 'Week', question: 'What makes a building, and a jobsite, green?',
    desc: <>Sustainable building principles and the <strong className="text-anthracite/90 font-medium">LEED framework</strong>; sustainable site practices, green materials and embodied carbon, construction waste reduction, and energy/carbon concepts; participants build a green jobsite checklist and NJ energy-code awareness.</>,
    chips: [
      { code: 'LEED framework', cat: 'sci', desc: 'LEED rating-system overview and the integrative, whole-building approach.' },
      { code: 'Materials & carbon', cat: 'sci', desc: 'Sustainable materials, recycled/regional content, and embodied carbon.' },
      { code: 'Waste reduction', cat: 'sci', desc: 'Construction waste reduction and diversion planning.' },
    ] },
  { num: 3, unit: 'Week', question: 'How does a construction project actually move?',
    desc: <>The construction project lifecycle and delivery methods; stakeholder roles; reading plans and specifications; scope management and the work-breakdown structure; and the documentation backbone, <strong className="text-anthracite/90 font-medium">RFIs, submittals, and coordination</strong>.</>,
    chips: [
      { code: 'Project lifecycle', cat: 'math', desc: 'Project delivery methods, lifecycle phases, and stakeholder roles.' },
      { code: 'Scope & WBS', cat: 'math', desc: 'Scope management and the work-breakdown structure (WBS).' },
      { code: 'RFIs / submittals', cat: 'math', desc: 'RFIs, submittals, and coordination documentation.' },
    ] },
  { num: 4, unit: 'Week', question: 'How do managers control schedule and cost?',
    desc: <><strong className="text-anthracite/90 font-medium">CPM scheduling</strong> fundamentals and look-ahead planning; cost estimating and cost tracking; change orders and their schedule and budget impact; and the project-controls habits that keep green projects on time and on budget.</>,
    chips: [
      { code: 'CPM schedule', cat: 'math', desc: 'Critical path method scheduling and look-ahead planning.' },
      { code: 'Cost control', cat: 'math', desc: 'Cost estimating, tracking, and reporting.' },
      { code: 'Change orders', cat: 'math', desc: 'Change-order review and impact analysis.' },
    ] },
  { num: 5, unit: 'Week', question: 'How do supervisors keep a jobsite safe? (OSHA 30 · Part I)',
    desc: <>OSHA orientation, rights and responsibilities, and supervisory safety duties; <strong className="text-anthracite/90 font-medium">fall protection</strong>, PPE, and ladder and scaffold awareness; hazard identification and the job hazard analysis that supervisors lead every day.</>,
    chips: [
      { code: 'OSHA 30', cat: 'ela', desc: 'OSHA 30-Hour Construction Safety, supervisory outreach credential.' },
      { code: 'Fall protection', cat: 'ela', desc: 'Fall protection systems and requirements.' },
      { code: 'PPE / JHA', cat: 'ela', desc: 'Personal protective equipment and job hazard analysis.' },
    ] },
  { num: 6, unit: 'Week', question: 'What hazards must a manager control? (OSHA 30 · Part II)',
    desc: <>Electrical, excavation and trenching, materials handling, and hazard communication; struck-by and caught-in hazards; <strong className="text-anthracite/90 font-medium">safety leadership</strong>, incident prevention, and toolbox talks, completing the OSHA 30-Hour credential.</>,
    chips: [
      { code: 'OSHA 30', cat: 'ela', desc: 'Completes the OSHA 30-Hour Construction Safety credential.' },
      { code: 'Electrical / excavation', cat: 'ela', desc: 'Electrical, excavation/trenching, and materials-handling hazards.' },
      { code: 'Safety leadership', cat: 'ela', desc: 'Safety leadership, toolbox talks, and incident prevention.' },
    ] },
]

// ── Phase 02: Green Systems, Energy & Environment, weeks 7–12 ──
const PHASE2_WEEKS: WeekRow[] = [
  { num: 7, unit: 'Week', question: 'How do managers read and enforce green specifications?',
    desc: <><strong className="text-anthracite/90 font-medium">Green specifications</strong> and sustainable submittals; low-VOC products, recycled and regional content, and construction waste-management plans; identifying compliance gaps between what is specified and what is delivered on site.</>,
    chips: [
      { code: 'Green specs', cat: 'sci', desc: 'Reading green specifications and sustainable material requirements.' },
      { code: 'Low-VOC / recycled', cat: 'sci', desc: 'Low-VOC products, recycled and regional content.' },
      { code: 'Submittals', cat: 'math', desc: 'Sustainable submittal review and compliance-gap analysis.' },
    ] },
  { num: 8, unit: 'Week', question: 'Which digital tools coordinate a green project?',
    desc: <><strong className="text-anthracite/90 font-medium">BIM basics</strong> and digital coordination; model review and clash awareness; energy-modeling coordination; and the documentation tools participants use to integrate technology into their capstone projects.</>,
    chips: [
      { code: 'BIM', cat: 'math', desc: 'Building Information Modeling basics and model review.' },
      { code: 'Digital coordination', cat: 'math', desc: 'Digital coordination and documentation tools.' },
      { code: 'Energy modeling', cat: 'des', desc: 'Energy-modeling coordination for performance targets.' },
    ] },
  { num: 9, unit: 'Week', question: 'How does the building envelope drive efficiency?',
    desc: <><strong className="text-anthracite/90 font-medium">Building envelope</strong> systems, insulation, air sealing, windows, and thermal bridging; energy-code awareness; and how a manager inspects and coordinates envelope work to hit energy-performance goals.</>,
    chips: [
      { code: 'Building envelope', cat: 'des', desc: 'Envelope systems: insulation, air sealing, windows, thermal bridging.' },
      { code: 'Air sealing', cat: 'des', desc: 'Air sealing and thermal-bridging control.' },
      { code: 'Energy code', cat: 'des', desc: 'Energy-code awareness and envelope inspection.' },
    ] },
  { num: 10, unit: 'Week', question: 'How are HVAC, solar, and commissioning coordinated?',
    desc: <>MEP coordination; <strong className="text-anthracite/90 font-medium">solar PV</strong> project-management basics; commissioning documentation; and the sequencing challenges of retrofits and occupied-building work under programs like EmPower NJ.</>,
    chips: [
      { code: 'HVAC / MEP', cat: 'des', desc: 'Mechanical/electrical/plumbing coordination.' },
      { code: 'Solar PV', cat: 'des', desc: 'Solar PV project-management basics.' },
      { code: 'Commissioning', cat: 'des', desc: 'Commissioning documentation and retrofit sequencing.' },
    ] },
  { num: 11, unit: 'Week', question: 'What environmental rules must a manager meet?',
    desc: <><strong className="text-anthracite/90 font-medium">NJDEP stormwater</strong> concepts, erosion and sediment control, permits and inspections, pollution prevention, and site-protection planning, plus the environmental documentation supervisors are responsible for.</>,
    chips: [
      { code: 'NJDEP stormwater', cat: 'des', desc: 'NJDEP stormwater concepts and erosion/sediment control.' },
      { code: 'Permits / erosion', cat: 'des', desc: 'Erosion control, permits, and inspections.' },
      { code: 'Site protection', cat: 'des', desc: 'Pollution prevention and site-protection planning.' },
    ] },
  { num: 12, unit: 'Week', question: 'How does green infrastructure get built and maintained?',
    desc: <>Green-infrastructure <strong className="text-anthracite/90 font-medium">best management practices</strong>, permeable pavement, bioswales, rain gardens, and detention systems; oversight responsibilities; and an environmental case study tying compliance to real site conditions.</>,
    chips: [
      { code: 'Green infrastructure', cat: 'des', desc: 'Green-infrastructure best management practices (BMPs).' },
      { code: 'Bioswales / BMPs', cat: 'des', desc: 'Bioswales, rain gardens, permeable pavement.' },
      { code: 'Detention', cat: 'des', desc: 'Detention systems and stormwater management.' },
    ] },
]

// ── Phase 03: Credentials & Capstone, weeks 13–16 ──
const PHASE3_WEEKS: WeekRow[] = [
  { num: 13, unit: 'Week', question: 'How do you earn the LEED Green Associate credential?',
    desc: <><strong className="text-anthracite/90 font-medium">LEED credit categories</strong> and the contractor&rsquo;s documentation responsibilities; construction activities mapped to LEED credits; documentation strategies; and practice exams that build readiness for the LEED GA exam.</>,
    chips: [
      { code: 'LEED GA', cat: 'sci', desc: 'LEED Green Associate, USGBC green-building credential.' },
      { code: 'Credit categories', cat: 'sci', desc: 'LEED credit categories and contractor responsibilities.' },
      { code: 'Documentation', cat: 'sci', desc: 'LEED documentation strategy and practice exams.' },
    ] },
  { num: 14, unit: 'Week', question: 'LEED exam, and building the capstone.',
    desc: <>LEED GA <strong className="text-anthracite/90 font-medium">exam</strong> support; then a capstone work session, sustainability strategy, LEED documentation, and portfolio development for the green construction management simulation each participant has been building since Week 1.</>,
    chips: [
      { code: 'LEED GA exam', cat: 'sci', desc: 'LEED Green Associate exam attempt.' },
      { code: 'Capstone', cat: 'car', desc: 'Capstone: green construction management simulation portfolio.' },
      { code: 'Portfolio', cat: 'car', desc: 'Portfolio development and sustainability strategy.' },
    ] },
  { num: 15, unit: 'Week', question: 'How do you manage a project like a PM? (CAPM prep)',
    desc: <><strong className="text-anthracite/90 font-medium">PMBOK</strong> process groups and knowledge areas, scope, schedule, cost, risk, and stakeholder management; a project risk register and stakeholder communication plan; PMI application support and practice questions.</>,
    chips: [
      { code: 'CAPM', cat: 'car', desc: 'PMI Certified Associate in Project Management preparation.' },
      { code: 'PMBOK', cat: 'car', desc: 'PMBOK process groups and knowledge areas.' },
      { code: 'Risk register', cat: 'car', desc: 'Risk register and stakeholder communication plan.' },
    ] },
  { num: 16, unit: 'Week', question: 'Exam, portfolio, and employer-ready presentation.',
    desc: <>CAPM <strong className="text-anthracite/90 font-medium">exam</strong> support; final portfolio submission; capstone presentations to instructors, peers, and industry reviewers; and employer-readiness activities, resume, interview practice, and program closeout.</>,
    chips: [
      { code: 'CAPM exam', cat: 'car', desc: 'PMI-CAPM exam attempt.' },
      { code: 'Final capstone', cat: 'car', desc: 'Final capstone presentation to industry reviewers.' },
      { code: 'Employer readiness', cat: 'car', desc: 'Resume, interview practice, and employer-readiness activities.' },
    ] },
]

export function Launch() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)

  return (
    <main>

      {/* ── Hero: color/picture split ── */}
      <section
        className="bg-sediment min-h-[62vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="launch-h1">

        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-[40%]"
          style={{ willChange: 'opacity, transform' }}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.25, ease: EASE }}>
          <img
            src="/images/launch-workshop.jpg"
            alt="Institutional workforce pathway planning workshop, New Jersey"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(25%) contrast(1.08)' }}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="lg:max-w-[58%] lg:pr-8 xl:pr-12">

            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.18em] bg-anthracite/10 text-anthracite px-3 py-1 mb-10 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
              Program 03 · Institutions
            </motion.span>

            <motion.h1
              id="launch-h1"
              className="text-[2.75rem] lg:text-[4.25rem] xl:text-[5.25rem] leading-[0.98] tracking-[-0.035em] text-anthracite italic mb-10 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              Launch is pathway architecture for institutions.
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-x-0 gap-y-3"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.4, ease: EASE }}>
              {(['Workforce boards & colleges', 'Design to ownership', 'New Jersey'] as const).map((item, i) => (
                <span key={item} className="text-[13px] text-anthracite/85 tracking-[-0.01em]" style={{ fontFamily: 'var(--font-body)' }}>
                  {item}
                  {i < 2 && <span className="mx-4 text-anthracite/20" aria-hidden="true">·</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Program intro + info rows ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="launch-intro-h2">
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
                Launch is pathway architecture for institutions: workforce boards, county colleges,
                agencies, and employers who need a construction-management pathway that outlives its
                founders. Aedifica designs the curriculum, builds instructor capacity, defines the
                outcome framework, and supports implementation until the institution owns it.
              </motion.p>
              <motion.p
                className="text-[14.5px] text-anthracite/72 leading-[1.72] max-w-[62ch] mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
                The flagship Launch design is <strong className="text-anthracite font-medium">BUILD NJ GREEN</strong>,
                a green-fluent construction-management pathway aligned to New Jersey's
                building-electrification mandates and clean-infrastructure funding priorities. The
                curriculum below is complete and ready to deliver; it has not yet been run with a cohort.
              </motion.p>

              {INFO_ROWS.map(({ Icon: IconComp, label, value }, i) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-4 py-4 border-t border-sediment/25 last:border-b"
                  initial={reduce ? undefined : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, delay: i * 0.05, ease: EASE }}>
                  <IconComp size={18} weight="regular" className="text-ink-soft flex-shrink-0 mt-0.5" aria-hidden={true} />
                  <div className="grid grid-cols-[110px_1fr] gap-4 flex-1">
                    <p className="text-[12.5px] uppercase tracking-[0.13em] text-ink-soft font-semibold pt-0.5" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
                    <p className="text-[13.5px] text-anthracite/80 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{value}</p>
                  </div>
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
                  src="/images/planning-session.jpg"
                  alt="Institutional partners in a Launch program-design planning session"
                  className="w-full h-[260px] lg:h-[320px] object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </motion.div>
              <ul className="list-none space-y-3">
                {MINI_LIST.map(item => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-[6px] h-[6px] rotate-45 bg-sediment mt-[7px]" aria-hidden="true" />
                    <span className="text-[13.5px] text-anthracite/78 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Curriculum shell ── bg-bone */}
      <section className="bg-bone py-14 lg:py-20 print:py-0" aria-labelledby="curriculum-h2" id="curriculum">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            className="border border-wine px-6 py-6 lg:px-8 lg:py-7 mb-12 lg:mb-14 print:hidden"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
            <p className="text-[10.5px] uppercase tracking-[0.16em] text-wine font-semibold mb-4 select-none" style={{ fontFamily: 'var(--font-body)' }}>This is a sample curriculum</p>
            <div className="space-y-3 max-w-[74ch]">
              <p className="text-[13.5px] text-anthracite/78 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
                <strong className="text-anthracite font-medium">What you see below is a sample, not the catalogue.</strong> <i>BUILD
                NJ GREEN</i> is a complete 16-week, 240-hour curriculum, designed in full and ready to deliver.
              </p>
              <p className="text-[13.5px] text-anthracite/78 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
                <strong className="text-anthracite font-medium">Delivery status.</strong> It has not yet been run with a cohort.
                Community-based partners are engaged and grant applications are submitted; no Launch cohort has been delivered to
                date. The full status ledger is in{' '}
                <Link href="/impact" className="text-anthracite underline underline-offset-2 decoration-anthracite/30 hover:decoration-anthracite transition-colors duration-150">Impact &amp; accountability</Link>.
              </p>
              <p className="text-[13.5px] text-anthracite/78 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
                <strong className="text-anthracite font-medium">We build to order.</strong> Launch is institutional pathway design:
                the curriculum is scoped to the partner, the funding stream, and the roles employers in your region are actually
                hiring for. BUILD NJ GREEN shows the depth of that work; it is not the only shape it takes.
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
            id="buildnjgreen"
            color="var(--color-sediment)"
            open={open}
            onToggle={() => setOpen(o => !o)}
            legendKeyLabel="Competency key, tap to filter"
            legendAriaLabel="Competency key, filter the weeks by domain"
            legendAllShownText="Showing all competency areas. Each of the sixteen weeks is tagged by competency area: green building, construction management, safety, energy & environment, and project management, and points toward the OSHA 30, LEED Green Associate, and PMI-CAPM credentials. Hover any tag for detail."
            meta="16 weeks · 240 hours · OSHA 30, LEED GA & PMI-CAPM preparation · full curriculum"
            collapsedTitle="BUILD NJ GREEN: Green Construction Management Workforce Curriculum"
            eyebrow="16-Week Workforce Program · Green Construction Management · New Jersey"
            title="Build NJ Green."
            intro="A 16-week, 240-hour adult training program that prepares New Jersey workers to lead the state's clean-energy, high-performance, and energy-efficiency projects as credentialed green Construction Managers. The program combines core construction-management practice with green building knowledge, jobsite safety, environmental compliance, energy-efficient systems, LEED documentation, and project-management certification preparation, through applied case studies, hands-on workshops, digital tools, construction-management simulations, credential study sessions, and a final capstone project."
            facts={[
              { value: '16', label: 'Weeks · 240 hours' },
              { value: '8', label: 'Modules · Entry & Advanced' },
              { value: '3', label: 'Industry credentials' },
              { value: '1', label: 'Capstone portfolio' },
            ]}
            toc={[
              { label: 'Foundations', href: '#launch-foundations' },
              { label: 'Green Systems', href: '#launch-systems' },
              { label: 'Credentials & Capstone', href: '#launch-capstone' },
              { label: 'Credentials', href: '#launch-credentials' },
              { label: 'Capstone Portfolio', href: '#launch-capstone-detail' },
              { label: 'Domains', href: '#launch-domains' },
              { label: 'Careers', href: '#launch-careers' },
            ]}
            frameworks={[
              { cat: 'sci', name: 'Green Building' },
              { cat: 'math', name: 'Construction Mgmt' },
              { cat: 'ela', name: 'Safety & OSHA' },
              { cat: 'des', name: 'Energy & Environment' },
              { cat: 'car', name: 'Project & Professional' },
            ]}>

            <Band dark color="var(--color-sediment)" id="launch-foundations" numLabel="01" rangeLabel="Entry Tier · Weeks 1–6" title="Foundations & Core Construction Management"
              desc="The entry tier establishes the green economy context and the core construction-management practice every supervisor needs, project lifecycle, scheduling, and cost control, and delivers the full OSHA 30-Hour Construction Safety credential."
              meta={[
                { label: 'Focus', value: 'Green building principles · CM fundamentals · jobsite safety leadership' },
                { label: 'Credential milestone', value: 'OSHA 30-Hour Construction Safety (100% of completers)' },
                { label: 'Key deliverables', value: 'Green jobsite checklist · CPM schedule · cost-control worksheet · job hazard analysis' },
              ]}
              weeks={PHASE1_WEEKS} />

            <Band dark color="var(--color-sediment)" id="launch-systems" numLabel="02" rangeLabel="Advanced Tier · Weeks 7–12" title="Green Systems, Energy & Environment"
              desc="The advanced tier builds the green specialization that sets these managers apart, green specifications and digital tools, energy-efficient building systems, and the environmental compliance and green-infrastructure oversight New Jersey projects demand."
              meta={[
                { label: 'Focus', value: 'Green specs & BIM · envelope, HVAC & solar · commissioning · environmental compliance' },
                { label: 'NJ program context', value: 'EmPower NJ retrofits · NJDEP stormwater & green infrastructure' },
                { label: 'Key deliverables', value: 'Green submittal log · energy-coordination plan · commissioning checklist · environmental compliance checklist' },
              ]}
              weeks={PHASE2_WEEKS} />

            <Band dark color="var(--color-sediment)" id="launch-capstone" numLabel="03" rangeLabel="Advanced Tier · Weeks 13–16" title="Credentials & Capstone"
              desc="The final tier converts the program into credentials and a portfolio: participants prepare for and sit the LEED Green Associate and PMI-CAPM exams, complete the green construction management capstone, and present to instructors and industry reviewers."
              meta={[
                { label: 'Focus', value: 'LEED GA exam · CAPM exam · capstone portfolio · employer readiness' },
                { label: 'Credential milestones', value: 'LEED Green Associate (85%) · PMI-CAPM (75% of completers)' },
                { label: 'Final deliverable', value: 'Green construction management portfolio + reviewed final presentation' },
              ]}
              weeks={PHASE3_WEEKS} />

            {/* Credentials trio */}
            <div id="launch-credentials" className="pt-10 lg:pt-12 border-t border-sediment/20 scroll-mt-24">
              <div className="max-w-[68ch] mb-8 lg:mb-10">
                <p className="text-[10.5px] uppercase tracking-[0.16em] text-ink-soft font-semibold mb-3" style={{ fontFamily: 'var(--font-body)' }}>Industry-recognized credentials</p>
                <h4 className="text-[1.5rem] lg:text-[1.75rem] text-anthracite italic leading-[1.15] tracking-[-0.02em] mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>Three stackable credentials by graduation</h4>
                <p className="text-[13.5px] text-anthracite/75 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>Every completer earns baseline supervisory safety certification and prepares for two nationally recognized green-building and project-management credentials, all at zero credential cost to participants under the proposed program model.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {CREDENTIALS.map(({ name, org, desc, target }) => (
                  <div key={name} className="border border-sediment/20 px-6 py-7">
                    <p className="text-[2rem] italic text-sediment leading-none tracking-[-0.03em] mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>{target}</p>
                    <p className="text-[10px] uppercase tracking-[0.12em] text-anthracite/60 mb-4" style={{ fontFamily: 'var(--font-body)' }}>target completers</p>
                    <p className="text-[1.0625rem] italic text-anthracite leading-none mb-1.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{name}</p>
                    <p className="text-[11px] text-anthracite/60 uppercase tracking-[0.08em] mb-3" style={{ fontFamily: 'var(--font-body)' }}>{org}</p>
                    <p className="text-[12.5px] text-anthracite/72 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <DeliverablesTable id="launch-capstone-detail" eyebrow="Capstone project" title="Green Construction Management Simulation"
              desc="Participants complete a capstone project that simulates the work of a green Construction Manager on a sustainable building, retrofit, or infrastructure project. The capstone is developed across the program and submitted as a professional project management portfolio."
              captionLabel="Capstone deliverables"
              columns={['Capstone deliverable', 'Description']}
              rows={CAPSTONE_ROWS} />

            <StandardsMatrix id="launch-domains" eyebrow="Consolidated competencies" title="Competency domain matrix"
              desc="The complete set of competencies BUILD NJ GREEN develops, grouped by domain and color-coded to the weekly tags above. Each domain threads through the sixteen weeks, the applied workshops, and the capstone portfolio."
              cards={[
                { cat: 'sci', name: 'Green Building', sub: 'Sustainability & LEED', items: [
                  { code: 'LEED', desc: 'LEED framework, credit categories, and contractor documentation.' },
                  { code: 'Materials', desc: 'Sustainable, recycled, low-VOC materials and embodied carbon.' },
                  { code: 'Waste', desc: 'Construction waste reduction and diversion planning.' },
                  { code: 'Specs', desc: 'Green specification reading and compliance-gap analysis.' },
                  { code: 'Energy code', desc: 'NJ energy-code awareness on green jobsites.' },
                ] },
                { cat: 'math', name: 'Construction Management', sub: 'Project controls', items: [
                  { code: 'Lifecycle', desc: 'Delivery methods, phases, and stakeholder roles.' },
                  { code: 'Scope · WBS', desc: 'Scope management and work-breakdown structure.' },
                  { code: 'CPM', desc: 'Critical-path scheduling and look-ahead planning.' },
                  { code: 'Cost', desc: 'Estimating, cost control, and change orders.' },
                  { code: 'Docs', desc: 'RFIs, submittals, coordination, and quality control.' },
                ] },
                { cat: 'ela', name: 'Safety & OSHA', sub: 'OSHA 30-Hour', items: [
                  { code: 'OSHA 30', desc: 'Full 30-Hour Construction Safety outreach credential.' },
                  { code: 'Fall / PPE', desc: 'Fall protection, PPE, ladders, and scaffolds.' },
                  { code: 'Hazards', desc: 'Electrical, excavation, struck-by, and caught-in.' },
                  { code: 'JHA', desc: 'Job hazard analysis and site inspection.' },
                  { code: 'Leadership', desc: 'Supervisory safety planning and toolbox talks.' },
                ] },
                { cat: 'des', name: 'Energy & Environment', sub: 'Systems & compliance', items: [
                  { code: 'Envelope', desc: 'Insulation, air sealing, windows, thermal bridging.' },
                  { code: 'MEP · Solar', desc: 'HVAC coordination, solar PV, and commissioning.' },
                  { code: 'Retrofit', desc: 'Retrofit sequencing and occupied-building work.' },
                  { code: 'Stormwater', desc: 'NJDEP stormwater, erosion control, and permits.' },
                  { code: 'Green infra', desc: 'BMPs, bioswales, and detention systems.' },
                ] },
                { cat: 'car', name: 'Project & Professional', sub: 'CAPM & capstone', items: [
                  { code: 'PMBOK', desc: 'Process groups and knowledge areas (CAPM).' },
                  { code: 'Risk', desc: 'Risk register and mitigation planning.' },
                  { code: 'Stakeholders', desc: 'Communication plans and stakeholder management.' },
                  { code: 'Capstone', desc: 'Green construction management portfolio.' },
                  { code: 'Readiness', desc: 'Resume, interview, and employer-facing skills.' },
                ] },
              ]} />

            <InstructionalApproach id="launch-careers" eyebrow="Career pathway outcomes" title="Roles this program prepares participants for"
              desc="BUILD NJ GREEN is built for advancement, from field experience or a career change into the coordination and supervisory-track roles that green projects need most."
              cells={CAREER_ROLES} />

            <CurriculumFooter
              programTitle="BUILD NJ GREEN"
              programDesc="A 16-week, 240-hour adult workforce program preparing New Jersey residents for green construction management careers across clean-energy, high-performance building, and energy-efficiency sectors."
              partners={['Aedifica, program operator', 'County colleges & workforce boards, delivery', 'Employer coalition, capstone & hiring']}
              frameworks={['OSHA 30-Hour Construction Safety', 'LEED Green Associate (USGBC)', 'PMI-CAPM (Project Management Institute)', 'NJDEP stormwater & green infrastructure', 'EmPower NJ retrofit context']}
              disclaimer="Curriculum derived from the BUILD NJ GREEN program narrative. Labor-market figures, report page references, and training-provider registry findings should be verified and inserted before final grant submission or public release."
            />
          </CurriculumShell>

        </div>
      </section>

      {/* ── CTA ── bg-snow wrapper, bg-sediment inner ── */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0 print:hidden" aria-label="Scope a Launch engagement">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-sediment px-10 pt-14 pb-12 lg:px-16 lg:pt-16 lg:pb-14 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/partner"
                className="inline-flex items-center justify-center gap-2 bg-anthracite text-white text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-anthracite/85 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Scope a Launch engagement
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link href="/research"
                className="inline-flex items-center justify-center gap-2 border border-anthracite/40 text-anthracite text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-colors duration-150 hover:bg-anthracite/8 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Read the Supervisor Gap report
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-[12.5px] text-anthracite leading-[1.65] max-w-[58ch] mx-auto">
              <strong className="font-medium">For institutions:</strong> what we design must be
              implementable by the people inheriting it, not only by the consultants who wrote it.
            </p>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
