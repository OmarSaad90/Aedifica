'use client'
import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { PageCTA } from '../components/PageCTA'
import {
  UsersThree, GraduationCap, Buildings, Certificate,
  CheckCircle, CaretDown, Camera, type Icon,
} from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

type LaunchAudience = { type: string; desc: string; Icon: Icon }

const AUDIENCES: LaunchAudience[] = [
  {
    type: 'Community-based organizations',
    desc: 'Developing employment or pre-apprenticeship programming with limited internal capacity to navigate complex workforce funding structures.',
    Icon: UsersThree,
  },
  {
    type: 'County colleges',
    desc: 'Connecting available funding to credentials, articulation agreements, and employment pathways for adult and non-traditional learners.',
    Icon: GraduationCap,
  },
  {
    type: 'Districts and vocational institutions',
    desc: 'Pursuing career-connected learning resources, CTE expansion, and workforce-aligned program development.',
    Icon: Buildings,
  },
  {
    type: 'Training providers',
    desc: 'Refining an apprenticeship or construction workforce proposal with competitive program architecture and measurable outcomes.',
    Icon: Certificate,
  },
]

const GAIN_ITEMS = [
  {
    num: '01',
    name: 'A clear launch model and learner journey',
    body: 'A defined program model and a mapped learner journey: from recruitment and intake through completion, credential, and placement.',
  },
  {
    num: '02',
    name: 'A curriculum framework aligned to real roles',
    body: 'A curriculum framework mapped to actual construction-management roles and the credentials employers recognize and require.',
  },
  {
    num: '03',
    name: 'An employer advisory structure',
    body: 'A working employer advisory structure that keeps the program tied to hiring needs and builds the relationships that lead to placements.',
  },
  {
    num: '04',
    name: 'An implementation calendar and staffing plan',
    body: 'A realistic implementation calendar and staffing plan: who does what, when, and with what resources, from setup through first cohort.',
  },
  {
    num: '05',
    name: 'An evaluation and reporting framework',
    body: 'An evaluation and reporting framework that defines outcomes up front and produces the data funders, boards, and agencies require.',
  },
] as const

const PROCESS_STEPS = [
  {
    heading: 'Partner discovery workshop',
    body: 'A working session to surface your goals, constraints, assets, and the learners and employers you serve: the foundation for everything that follows.',
  },
  {
    heading: 'Labor-market and learner-need framing',
    body: 'A clear-eyed read of regional demand and learner need, framing the specific workforce gap the program will close.',
  },
  {
    heading: 'Curriculum map and credential alignment',
    body: 'A curriculum map aligned to construction-management roles and the industry-recognized credentials that make graduates employable.',
  },
  {
    heading: 'Employer advisory board setup',
    body: 'The structure and recruitment to stand up an employer advisory board that keeps the program accountable to real hiring needs.',
  },
  {
    heading: 'Grant narrative and budget support',
    body: 'Support on the grant narrative and budget: the funding strategy and documentation that make the program financially real.',
  },
  {
    heading: 'Pilot cohort launch plan',
    body: 'A concrete launch plan for the first cohort: timeline, staffing, recruitment, delivery, and the outcome measures you will report against.',
  },
] as const

const DELIVERABLES = [
  {
    num: '01',
    name: 'Opportunity and eligibility review',
    body: 'Assessment of the most relevant funding vehicles for the organization\'s current program capacity, mission alignment, and geographic focus.',
    phase: 'Discovery',
  },
  {
    num: '02',
    name: 'Program architecture',
    body: 'Design of the program structure: delivery model, learning objectives, partner roles, and the measurable outcomes framework required for competitive proposals.',
    phase: 'Architecture',
  },
  {
    num: '03',
    name: 'Partner and evidence matrix',
    body: 'Documentation of the institutional partners, employer commitments, and evidence base required to make the program credible to reviewers.',
    phase: 'Architecture',
  },
  {
    num: '04',
    name: 'Narrative and proposal authoring',
    body: 'Development of the program narrative, participant-outcome projections, and a proposal document aligned to funder requirements and review criteria.',
    phase: 'Authoring',
  },
  {
    num: '05',
    name: 'Budget and measurement alignment',
    body: 'Budget construction, allowable cost review, and outcome metric calibration to ensure the request is fundable and the program is reportable.',
    phase: 'Authoring',
  },
  {
    num: '06',
    name: 'Submission readiness review',
    body: 'Final review of proposal completeness, required attachments, funder alignment, and submission logistics before the deadline.',
    phase: 'Submission',
  },
] as const

const MODULES = [
  {
    num: 'Module 1',
    tier: 'Entry tier',
    title: 'Foundations of Green Construction',
    hours: '32 hrs · In-person',
    body: 'Green building principles, the LEED framework, NJ energy-code awareness, and the daily sustainable site practices that define green construction work.',
    handsOn: 'Green vocabulary workshop; sustainable site walk-through; sustainability opportunity scan; conventional-vs-green CM case discussion.',
    deliverables: 'Green jobsite checklist; sustainability reflection; core-terminology quiz.',
  },
  {
    num: 'Module 2',
    tier: 'Entry tier',
    title: 'Construction Management Essentials',
    hours: '40 hrs · In-person',
    body: 'The project lifecycle, CPM scheduling, cost control, subcontractor coordination, and scope management: the core mechanics of running construction work.',
    handsOn: 'Build a simple schedule; scope responsibility matrix; RFI/submittal review; delay scenario; coordination meeting role-play.',
    deliverables: 'Basic CPM schedule; cost-control worksheet; coordination memo; skills assessment.',
  },
  {
    num: 'Module 3',
    tier: 'Entry tier',
    title: 'OSHA 30-Hour Construction Safety',
    hours: '30 hrs · In-person',
    body: 'OSHA regulations, fall protection, hazard identification, and site safety planning: the baseline supervisory safety credential employers require.',
    handsOn: 'Job hazard analysis; PPE demonstration; site safety inspection; toolbox talk; safety plan review.',
    deliverables: 'OSHA 30 training completion; JHA; toolbox talk; safety quiz.',
  },
  {
    num: 'Module 4',
    tier: 'Advanced tier',
    title: 'Green Design, Specification & Technology',
    hours: '36 hrs · Hybrid',
    body: 'Green specification reading, BIM basics, energy-modeling coordination, and sustainable materials: the documentation and technology of green delivery.',
    handsOn: 'Green spec review; sustainable material submittal; BIM coordination demo; compliance gap analysis; documentation checklist.',
    deliverables: 'Green specification review worksheet; sustainable submittal log; technology reflection.',
  },
  {
    num: 'Module 5',
    tier: 'Advanced tier',
    title: 'Energy Efficiency & Building Systems',
    hours: '32 hrs · Hybrid',
    body: 'Building-envelope oversight, HVAC coordination, solar PV management, commissioning, and the EmPower NJ project context that frames retrofit work.',
    handsOn: 'Envelope checklist; HVAC coordination case; retrofit sequencing; commissioning document review; solar PV coordination discussion.',
    deliverables: 'Energy-efficiency coordination plan; commissioning checklist; retrofit sequence diagram.',
  },
  {
    num: 'Module 6',
    tier: 'Advanced tier',
    title: 'Environmental Compliance & Green Infrastructure',
    hours: '30 hrs · In-person',
    body: 'NJDEP stormwater concepts, green-infrastructure BMP oversight, permits, ESG documentation, and environmental site controls.',
    handsOn: 'Stormwater BMP inspection; site logistics plan; permit checklist; green-infrastructure case; environmental incident response.',
    deliverables: 'Environmental compliance checklist; site protection plan; BMP inspection summary.',
  },
  {
    num: 'Module 7',
    tier: 'Advanced tier',
    title: 'LEED Certification Preparation & Exam',
    hours: '24 hrs · Hybrid + exam',
    body: 'LEED credit categories, contractor responsibilities, documentation, and structured preparation for the LEED Green Associate exam.',
    handsOn: 'LEED category review; practice exam questions; documentation scenario; construction activities mapped to LEED credits.',
    deliverables: 'LEED GA practice test; LEED documentation checklist; LEED GA exam attempt.',
  },
  {
    num: 'Module 8',
    tier: 'Advanced tier',
    title: 'PMI-CAPM Preparation & Exam',
    hours: '16 hrs · Hybrid + exam',
    body: 'PMBOK process groups, knowledge areas, practice exams, and PMI application support, preparing participants for the CAPM credential.',
    handsOn: 'CAPM terminology drill; practice exam; project scenario exercises; risk register; stakeholder communication plan.',
    deliverables: 'CAPM practice exam; CAPM application checklist; CAPM exam attempt.',
  },
] as const

const CAPSTONE_ITEMS = [
  'Project overview and sustainability goals',
  'Scope of work summary',
  'Preliminary construction schedule',
  'Cost-control plan',
  'Safety plan summary',
  'Green materials and specification review',
  'Energy-efficiency coordination plan',
  'Environmental compliance checklist',
  'LEED documentation strategy',
  'Risk register and mitigation plan',
  'Final presentation to industry reviewers',
] as const

const CREDENTIALS = [
  {
    name: 'OSHA 30-Hour',
    org: 'U.S. Occupational Safety and Health Administration',
    target: '100%',
  },
  {
    name: 'LEED Green Associate',
    org: 'U.S. Green Building Council',
    target: '85%',
  },
  {
    name: 'PMI-CAPM',
    org: 'Project Management Institute',
    target: '75%',
  },
] as const

const CAREER_ROLES = [
  {
    title: 'Assistant Construction Manager',
    desc: 'Project coordination, documentation, meetings, schedule tracking, and field coordination.',
  },
  {
    title: 'Assistant Project Manager',
    desc: 'Scope, budget, change orders, RFIs, submittals, and stakeholder communication.',
  },
  {
    title: 'Project Coordinator',
    desc: 'Logs, schedules, meeting notes, document control, and communication workflows.',
  },
  {
    title: 'Construction Site Coordinator',
    desc: 'Daily site activities, subcontractor coordination, logistics, and field reporting.',
  },
  {
    title: 'Field Engineer Assistant',
    desc: 'Field documentation, layout coordination, inspections, and technical issue tracking.',
  },
  {
    title: 'Sustainability Coordinator',
    desc: 'LEED documentation, green materials tracking, waste management, and sustainability reporting.',
  },
  {
    title: 'Safety Coordinator',
    desc: 'Hazard identification, safety documentation, toolbox talks, and compliance monitoring.',
  },
  {
    title: 'Energy Efficiency Project Coordinator',
    desc: 'Retrofit sequencing, envelope/HVAC coordination, commissioning, and owner communication.',
  },
] as const

const FUNDING = [
  {
    name: 'Pre-Apprenticeship in Career Education (PACE)',
    note: 'NJ Department of Labor and Workforce Development',
  },
  {
    name: 'Growing Apprenticeships in New Sectors (GAINS)',
    note: 'NJ DOL, sector-specific workforce expansion',
  },
  {
    name: 'NJ Economic Development Authority workforce opportunities',
    note: 'NJEDA career pathway and workforce investment programs',
  },
  {
    name: 'Workforce Innovation and Opportunity Act Title I pathways',
    note: 'Federal WIOA: adult, dislocated worker, and youth services',
  },
  {
    name: 'Federal apprenticeship and workforce-related opportunities',
    note: 'DOL apprenticeship, infrastructure workforce, and related federal programs',
  },
] as const

const DIFFERENTIATORS = [
  'Program structure designed before the proposal is written',
  'Partner and employer matrix built before the ask',
  'Outcomes framework calibrated to funder expectations from the start',
  'Budget and allowable cost review before submission',
] as const

export function Launch() {
  const reduce = useReducedMotion()
  const [openModule, setOpenModule] = useState<number | null>(null)

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-sediment min-h-[65vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="launch-h1">

        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-[40%]"
          style={{ willChange: 'opacity, transform' }}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.25, ease: EASE }}>
          <img
            src="/images/planning-session.jpg"
            alt="Workforce development planning session with construction professionals, New Jersey"
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
              Grant Strategy · Institutional Service
            </motion.span>

            <motion.h1
              id="launch-h1"
              className="text-[2.75rem] lg:text-[4.5rem] xl:text-[6rem] leading-[0.96] tracking-[-0.035em] text-anthracite italic mb-10"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              Fund workforce pathways designed to deliver and report outcomes.
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-x-0 gap-y-3"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.4, ease: EASE }}>
              {(['Fixed-fee', 'Institutions', 'New Jersey'] as const).map((item, i) => (
                <span
                  key={item}
                  className="text-[13px] text-anthracite/85 tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {item}
                  {i < 2 && <span className="mx-4 text-anthracite/20" aria-hidden="true">·</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who It Serves ── bg-snow */}
      <section className="bg-snow py-12 lg:py-18" aria-labelledby="launch-serves-h2">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            id="launch-serves-h2"
            className="text-[2.25rem] lg:text-[4rem] xl:text-[5.25rem] leading-[1.04] tracking-[-0.03em] text-anthracite italic mb-14 lg:mb-20"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.7, ease: SPRING }}>
            Built for institutions serious about funding programs the right way.
          </motion.h2>

          <div className="border-t border-sediment/25">
            {AUDIENCES.map(({ type, desc, Icon: IconComp }, i) => (
              <motion.div
                key={type}
                className="grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] lg:gap-16 xl:gap-24 border-b border-sediment/25 py-7 lg:py-8 lg:items-start"
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: i * 0.07, ease: EASE }}>
                <div>
                  <IconComp size={20} weight="regular" className="text-anthracite/45 mb-2.5" aria-hidden={true} />
                  <h3
                    className="text-[1.125rem] lg:text-[1.375rem] xl:text-[1.875rem] text-anthracite italic leading-[1.2] tracking-[-0.02em] mb-2 lg:mb-0"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {type}
                  </h3>
                </div>
                <p
                  className="text-[14.5px] text-anthracite/75 leading-[1.7]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── What You Will Gain ── bg-bone */}
      <section className="bg-bone py-12 lg:py-18" aria-labelledby="gain-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.4fr_1fr] lg:gap-16 xl:gap-24 lg:items-start">

            {/* Numbered list — wider left col on desktop, below heading on mobile */}
            <div className="lg:order-1 border-t border-sediment/20">
              {GAIN_ITEMS.map(({ num, name, body }, i) => (
                <motion.div
                  key={num}
                  className="py-6 border-b border-sediment/20 grid grid-cols-[52px_1fr] gap-5 lg:gap-6"
                  initial={reduce ? undefined : { opacity: 0, y: 14 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, delay: i * 0.06, ease: EASE }}>
                  <span
                    className="text-[1.875rem] text-datum/35 italic leading-[1.1] mt-0.5"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                    aria-hidden="true">
                    {num}
                  </span>
                  <div>
                    <h3
                      className="text-[1rem] lg:text-[1.125rem] text-anthracite italic leading-[1.25] tracking-[-0.015em] mb-1.5"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {name}
                    </h3>
                    <p
                      className="text-[13.5px] text-anthracite/70 leading-[1.68]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Heading + image — narrower right col on desktop, first on mobile */}
            <div className="lg:order-2 mb-10 lg:mb-0 order-first">
              <motion.h2
                id="gain-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.5rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic mb-8 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                Everything a program needs to launch well.
              </motion.h2>

              <motion.div
                className="hidden lg:block overflow-hidden min-h-[200px]"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.25, ease: EASE }}
                aria-hidden="true">
                <img
                  src="/images/presentation-day.jpg"
                  alt="Aedifica program planning session with institutional partners"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Program Architecture First ── bg-snow */}
      <section className="bg-snow py-12 lg:py-18" aria-label="What makes Launch different">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.15fr_1fr] lg:gap-14 xl:gap-20 lg:items-start">

            <div>
              <motion.div
                className="overflow-hidden mb-10 h-[220px] lg:h-[260px]"
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
                <img
                  src="/images/stevens-students.jpg"
                  alt="Program design students at Stevens Institute of Technology, New Jersey"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </motion.div>

              <motion.p
                className="text-[2rem] lg:text-[2.5rem] xl:text-[3rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, delay: 0.1, ease: EASE }}>
                A fundable proposal describes a program that can deliver. Launch designs the program first.
              </motion.p>
            </div>

            <div className="lg:pt-6 mt-10 lg:mt-0">
              <motion.p
                className="text-[15.5px] text-anthracite/75 leading-[1.72] mb-7"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
                Most grant-writing services produce proposals. Launch produces program architecture first: a defined delivery model, a realistic outcomes framework, and a partner matrix that funders and reviewers can evaluate on its own merits.
              </motion.p>

              <motion.p
                className="text-[15.5px] text-anthracite/75 leading-[1.72] mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.14, ease: EASE }}>
                When the narrative follows a credible architecture, the proposal is stronger. When the program is designed to be reportable, the funder's confidence is founded on something real.
              </motion.p>

              <motion.ul
                className="list-none space-y-3.5"
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.2, ease: EASE }}>
                {DIFFERENTIATORS.map(pt => (
                  <li key={pt} className="flex gap-3.5 items-start">
                    <span className="flex-shrink-0 w-[4px] h-[4px] bg-anthracite/30 mt-[8px]" aria-hidden="true" />
                    <span
                      className="text-[14px] text-anthracite/75 leading-[1.65]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {pt}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── How It Works ── bg-bone */}
      <section className="bg-bone py-12 lg:py-18" aria-labelledby="process-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.5fr_1fr] lg:gap-16 xl:gap-24 lg:items-start">

            {/* Heading + intro + image — first in DOM for mobile, right col on desktop */}
            <div className="lg:order-2">
              <motion.h2
                id="process-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.07] tracking-[-0.03em] text-anthracite italic mb-5 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                A structured path from intention to cohort.
              </motion.h2>
              <motion.p
                className="text-[14.5px] text-anthracite/70 leading-[1.7] mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
                Launch is a guided engagement. Aedifica leads partners through the work that turns a program idea into a funded, staffed, employer-backed pathway ready to enroll its first cohort.
              </motion.p>

              <motion.div
                className="hidden lg:block overflow-hidden min-h-[200px]"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.25, ease: EASE }}
                aria-hidden="true">
                <img
                  src="/images/launch-workshop.jpg"
                  alt="Aedifica collaborative workshop with program partners"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </motion.div>
            </div>

            {/* Steps — wider left col on desktop, below heading on mobile */}
            <div className="mt-10 lg:mt-0 lg:order-1">
              {PROCESS_STEPS.map(({ heading, body }, i) => (
                <motion.div
                  key={heading}
                  className="flex gap-4 py-5 border-b border-sediment/20 first:border-t first:border-sediment/20"
                  initial={reduce ? undefined : { opacity: 0, x: -16 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, delay: i * 0.055, ease: EASE }}>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-anthracite/10 text-anthracite/60 flex items-center justify-center text-[11px] font-medium mt-0.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                    aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3
                      className="text-[1rem] lg:text-[1.0625rem] text-anthracite italic leading-[1.25] tracking-[-0.015em] mb-1.5"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {heading}
                    </h3>
                    <p
                      className="text-[13.5px] text-anthracite/70 leading-[1.65]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Six Deliverables ── bg-anthracite */}
      <section
        className="bg-anthracite py-14 lg:py-20 relative overflow-hidden"
        aria-labelledby="deliverables-h2">

        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-20 xl:gap-28 lg:items-start mb-14 lg:mb-16">
            <div>
              <motion.p
                className="text-[10.5px] text-white/50 uppercase tracking-[0.22em] mb-6 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
                What Launch delivers
              </motion.p>
              <motion.h2
                id="deliverables-h2"
                className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4rem] leading-[1.07] tracking-[-0.03em] text-white italic"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                Six stages. One fixed-fee engagement.
              </motion.h2>
            </div>
            <motion.p
              className="text-[15px] text-white/60 leading-[1.72] lg:pt-14 xl:pt-16"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
              Launch is scoped as a complete engagement: from identifying the right funding opportunity through final submission. The fixed-fee model ensures that program-design work is built in, not billed separately.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-white/10">
            {DELIVERABLES.map(({ num, name, body, phase }, i) => (
              <motion.div
                key={num}
                className="border-b border-white/10 py-6 lg:py-7 lg:odd:pr-12 xl:odd:pr-16 lg:even:pl-12 xl:even:pl-16 lg:even:border-l lg:even:border-white/10"
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: (i % 2) * 0.06, ease: EASE }}>
                <div className="flex items-baseline justify-between mb-3.5">
                  <span
                    className="text-[1.875rem] lg:text-[2.25rem] text-white/22 italic leading-none"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                    aria-hidden="true">
                    {num}
                  </span>
                  <span
                    className="text-[9.5px] text-white/50 uppercase tracking-[0.16em] bg-white/8 px-2.5 py-1 select-none"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {phase}
                  </span>
                </div>
                <h3
                  className="text-[1.0625rem] lg:text-[1.1875rem] text-white italic leading-[1.2] tracking-[-0.02em] mb-2"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {name}
                </h3>
                <p
                  className="text-[13.5px] text-white/60 leading-[1.68]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── BUILD NJ GREEN ── bg-bone */}
      <section className="bg-bone py-12 lg:py-18" aria-labelledby="program-h2">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section heading */}
          <div className="lg:grid lg:grid-cols-[1fr_1.6fr] lg:gap-12 mb-10 lg:mb-12">
            <motion.h2
              id="program-h2"
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic mb-4 lg:mb-0"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
              An example program, fully designed.
            </motion.h2>
            <motion.p
              className="text-[14.5px] text-anthracite/70 leading-[1.72] lg:pt-2"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              BUILD NJ GREEN shows what a Launch partnership produces: a 16-week adult workforce training program with credential targets, a full 8-module curriculum, and a capstone simulation, ready to fund and run.
            </motion.p>
          </div>

          {/* Program header block */}
          <motion.div
            className="bg-anthracite px-8 py-8 lg:px-10 lg:py-9"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
            <p
              className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3"
              style={{ fontFamily: 'var(--font-body)' }}>
              Adult Workforce Program · 16 Weeks · 240 Hours
            </p>
            <h3
              className="text-[1.75rem] lg:text-[2.25rem] text-white italic leading-[1.1] tracking-[-0.025em] mb-3"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              BUILD NJ GREEN
            </h3>
            <p
              className="text-[14px] text-white/72 leading-[1.72] max-w-[68ch] mb-6"
              style={{ fontFamily: 'var(--font-body)' }}>
              A credential-bearing adult-learning pathway that combines construction-management fundamentals with green-building specialization, jobsite safety, environmental compliance, energy-efficient systems, LEED documentation, and project-management certification preparation.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-4 pt-5 border-t border-white/10">
              {[
                { label: 'Length', value: '16 weeks / 240 hours' },
                { label: 'Audience', value: 'Adult learners & incumbent workers' },
                { label: 'Delivery', value: 'In-person & hybrid' },
                { label: 'Credentials', value: 'OSHA 30 · LEED GA · PMI-CAPM' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-[9.5px] uppercase tracking-[0.14em] text-white/60 mb-1" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
                  <p className="text-[13px] text-white/82 leading-[1.4]" style={{ fontFamily: 'var(--font-body)' }}>{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Intro paragraph */}
          <div className="bg-snow px-8 py-5 lg:px-10 border-b border-sediment/15">
            <p
              className="text-[14px] text-anthracite/72 leading-[1.7]"
              style={{ fontFamily: 'var(--font-body)' }}>
              Participants learn through applied case studies, hands-on workshops, digital tools, construction-management simulations, credential study sessions, and a final capstone project, preparing for high-mobility supervisory roles in green construction.
            </p>
          </div>

          {/* Accordion */}
          <div className="bg-snow">
            <div className="px-8 lg:px-10 pt-5 pb-2">
              <p
                className="text-[10px] uppercase tracking-[0.18em] text-anthracite/70"
                style={{ fontFamily: 'var(--font-body)' }}>
                The eight modules
              </p>
            </div>

            {MODULES.map(({ num, tier, title, hours, body, handsOn, deliverables }, i) => (
              <div key={num} className="border-t border-sediment/15">
                <button
                  className="w-full text-left px-8 lg:px-10 py-4 flex items-center gap-4 hover:bg-bone/50 transition-colors duration-150"
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  aria-expanded={openModule === i}
                  aria-controls={`module-body-${i}`}>

                  <div className="flex-shrink-0 w-[76px]">
                    <span
                      className="text-[11.5px] text-datum font-medium block leading-none"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {num}
                    </span>
                    <span
                      className="text-[9.5px] text-anthracite/55 uppercase tracking-[0.05em] block mt-1"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {tier}
                    </span>
                  </div>

                  <span
                    className="flex-1 text-[14px] text-anthracite italic leading-[1.35] tracking-[-0.01em]"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {title}
                  </span>

                  <span
                    className="hidden lg:block flex-shrink-0 text-[12px] text-anthracite/75 mr-3"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {hours}
                  </span>

                  <motion.span
                    className="flex-shrink-0 text-anthracite/35"
                    animate={{ rotate: openModule === i ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: EASE }}>
                    <CaretDown size={13} aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openModule === i && (
                    <motion.div
                      id={`module-body-${i}`}
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: EASE }}
                      style={{ overflow: 'hidden' }}>
                      <div className="px-8 lg:px-10 pb-5 lg:pl-[calc(2.5rem+76px)]">
                        <p
                          className="text-[13.5px] text-anthracite/70 leading-[1.68] mb-4"
                          style={{ fontFamily: 'var(--font-body)' }}>
                          {body}
                        </p>
                        <div className="space-y-2.5">
                          <div className="flex gap-3 items-start">
                            <span
                              className="text-[11.5px] font-medium text-anthracite/75 flex-shrink-0 min-w-[100px]"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              Hands-on
                            </span>
                            <span
                              className="text-[12.5px] text-anthracite/78 leading-[1.6]"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              {handsOn}
                            </span>
                          </div>
                          <div className="flex gap-3 items-start">
                            <span
                              className="text-[11.5px] font-medium text-anthracite/75 flex-shrink-0 min-w-[100px]"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              Deliverables
                            </span>
                            <span
                              className="text-[12.5px] text-anthracite/78 leading-[1.6]"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              {deliverables}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Capstone block */}
            <div className="mx-6 lg:mx-8 my-5 bg-datum/6 px-6 py-5">
              <h4
                className="text-[1rem] text-anthracite italic leading-[1.25] tracking-[-0.015em] mb-2.5"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Capstone: Green Construction Management Simulation
              </h4>
              <p
                className="text-[13.5px] text-anthracite/70 leading-[1.68] mb-4"
                style={{ fontFamily: 'var(--font-body)' }}>
                Participants complete a capstone that simulates the work of a green construction manager on a sustainable building, retrofit, or infrastructure project, developed across the program and submitted as a professional project-management portfolio.
              </p>
              <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-1.5">
                {CAPSTONE_ITEMS.map(item => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <span className="w-[4px] h-[4px] bg-datum rounded-full flex-shrink-0 mt-[7px]" aria-hidden="true" />
                    <span
                      className="text-[13px] text-anthracite/78 leading-[1.6]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Credentials strip */}
          <div className="mt-3 grid grid-cols-1 lg:grid-cols-3 border border-sediment/20 divide-y divide-sediment/20 lg:divide-y-0 lg:divide-x lg:divide-sediment/20">
            {CREDENTIALS.map(({ name, org, target }) => (
              <div key={name} className="bg-snow px-6 py-5 flex flex-col">
                <p
                  className="text-[2rem] italic text-datum leading-none tracking-[-0.03em] mb-1.5"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  {target}
                </p>
                <p
                  className="text-[10px] uppercase tracking-[0.12em] text-anthracite/75 mb-2.5"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  target completers
                </p>
                <p
                  className="text-[15px] italic text-anthracite leading-[1.25] tracking-[-0.015em]"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {name}
                </p>
                <p
                  className="text-[12px] text-anthracite/75 mt-1 leading-[1.4]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {org}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-[12px] text-anthracite/78 italic text-center mt-6 max-w-[68ch] mx-auto leading-[1.6]"
            style={{ fontFamily: 'var(--font-body)' }}>
            BUILD NJ GREEN is a model program designed through Launch. Labor-market figures and training-provider registry findings are verified with the partner before any grant submission or public release.
          </p>

        </div>
      </section>

      {/* ── Career Pathway Outcomes ── bg-snow */}
      <section className="bg-snow py-12 lg:py-18" aria-labelledby="roles-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.6fr] lg:gap-16 xl:gap-24 lg:items-start">

            <div>
              <motion.h2
                id="roles-h2"
                className="text-[1.875rem] lg:text-[2.5rem] xl:text-[3rem] leading-[1.08] tracking-[-0.028em] text-anthracite italic mb-4 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                The roles a Launch program prepares people for.
              </motion.h2>
              <motion.p
                className="text-[14.5px] text-anthracite/70 leading-[1.7] mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
                A well-designed pathway points at real jobs. BUILD NJ GREEN, for example, prepares participants for the supervisory and coordination roles that deliver green construction projects.
              </motion.p>

              <motion.div
                className="hidden lg:block overflow-hidden min-h-[180px]"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.25, ease: EASE }}
                aria-hidden="true">
                <img
                  src="/images/site-tour.jpg"
                  alt="Construction site tour for BUILD NJ GREEN program participants"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </motion.div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-sediment/20">
                {CAREER_ROLES.map(({ title, desc }, i) => (
                  <motion.div
                    key={title}
                    className="py-4 border-b border-sediment/20 flex gap-3 items-start lg:odd:pr-8 lg:even:pl-8 lg:even:border-l lg:even:border-sediment/20"
                    initial={reduce ? undefined : { opacity: 0, y: 12 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.35, delay: (i % 2) * 0.05, ease: EASE }}>
                    <CheckCircle size={15} weight="fill" className="text-datum/55 flex-shrink-0 mt-[3px]" aria-hidden="true" />
                    <div>
                      <p
                        className="text-[13.5px] text-anthracite italic leading-[1.3] tracking-[-0.01em] mb-0.5"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                        {title}
                      </p>
                      <p
                        className="text-[12.5px] text-anthracite/78 leading-[1.55]"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Relevant Funding ── bg-bone */}
      <section className="bg-bone py-12 lg:py-18" aria-labelledby="funding-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-16 xl:gap-24 lg:items-start">

            <div>
              <motion.h2
                id="funding-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-5"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                New Jersey is deploying significant workforce investment.
              </motion.h2>
              <motion.p
                className="text-[14.5px] text-anthracite/75 leading-[1.7]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
                Institutions that access it with credible program design will define the next generation of pathways. Launch is relevant to organizations pursuing any of the funding vehicles on the right. An initial opportunity review determines fit, eligibility, and timeline before any engagement begins.
              </motion.p>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="border-t border-sediment/25">
                {FUNDING.map(({ name, note }, i) => (
                  <motion.div
                    key={name}
                    className="border-b border-sediment/25 py-6 lg:py-7"
                    initial={reduce ? undefined : { opacity: 0, y: 14 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.4, delay: i * 0.06, ease: EASE }}>
                    <p
                      className="text-[1rem] lg:text-[1.125rem] text-anthracite italic leading-[1.3] tracking-[-0.015em] mb-1.5"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {name}
                    </p>
                    <p
                      className="text-[12.5px] text-anthracite/72 leading-[1.5]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {note}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <PageCTA
        id="launch-cta"
        heading="A funding opportunity review is the first step."
        body="Submit a funding opportunity for initial review. Aedifica will assess fit, eligibility, and timeline before any engagement begins. No commitment required."
        primary={{ label: 'Discuss a Launch Engagement', to: '/partner' }}
        color="sediment"
      />

    </main>
  )
}
