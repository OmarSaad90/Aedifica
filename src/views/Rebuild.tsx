'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { CurriculumShell } from '../components/CurriculumShell'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const INFO_ROWS = [
  ['Status', 'Designed, curriculum complete; no cohort delivered'],
  ['Audience', 'Adult scholars · non-traditional talent'],
  ['Delivery models', 'Standalone cohort, or a construction-management overlay on an existing vocational or trade-school program'],
  ['Format', 'Bridge cohorts, scoped to partner capacity and funding cycle'],
  ['Supports', 'Wraparound services via community partners'],
  ['Cost to scholars', 'None, funded through institutional partners'],
] as const

const MINI_LIST = [
  'Construction-management fundamentals in the platforms employers use',
  'Credential attainment with apprenticeship articulation',
  'Employer-validated capstone and committed interviews',
] as const

const JOURNEY = [
  { stage: 'Starting point', note: 'Where each scholar begins: experience, goals, and readiness, honestly assessed.' },
  { stage: 'Construction-management vocabulary', note: 'The shared language of scope, schedule, cost, safety, and quality.' },
  { stage: 'Project lifecycle', note: 'How a project moves from idea to design to delivery to closeout.' },
  { stage: 'Reading drawings', note: 'Plans, specifications, and the documents the jobsite runs on.' },
  { stage: 'Estimating', note: 'Quantities, unit costs, and building a basic estimate.' },
  { stage: 'Scheduling', note: 'Sequencing work and building a simple project schedule.' },
  { stage: 'Site logistics', note: 'Planning access, staging, deliveries, and coordination on a working site.' },
  { stage: 'Safety', note: 'Hazard awareness and the safety habits supervisors are responsible for.' },
  { stage: 'Quality', note: 'Quality-control thinking and inspection walkthroughs.' },
  { stage: 'Documentation', note: 'Logs, records, and the paperwork that keeps projects accountable.' },
  { stage: 'Technology & AI tools', note: 'The software and AI-assisted tools used on modern construction projects.' },
  { stage: 'Communication', note: 'Professional, employer-facing communication in meetings and in writing.' },
  { stage: 'Resume development', note: 'Translating experience into a resume that speaks to construction employers.' },
  { stage: 'Interview preparation', note: 'Mock interviews and practice answering the questions employers ask.' },
  { stage: 'Portfolio / capstone presentation', note: 'A capstone artifact presented to instructors, partners, or employers.' },
  { stage: 'Employer expectations', note: 'What jobsites expect on day one: professionalism, reliability, and judgment.' },
  { stage: 'Next-step planning', note: 'A documented plan toward credentials, college programs, apprenticeships, or entry-level roles.' },
] as const

const LEARN_AREAS = [
  { num: 'Area 01', title: 'OSHA-10 / OSHA-30 preparation', desc: 'Hazard recognition, PPE, fall protection, and the supervisory safety responsibilities employers expect on day one. Credential attempt and coverage are confirmed per cohort.' },
  { num: 'Area 02', title: 'NCCER Core', desc: "The industry's foundational curriculum: basic safety, construction math, hand and power tools, construction drawings, communication, and employability skills." },
  { num: 'Area 03', title: 'Bluebeam & Procore foundations', desc: 'The two platforms most New Jersey general contractors actually run on: markup, takeoff, and document workflows in Bluebeam; project, daily log, and RFI workflows in Procore.' },
  { num: 'Area 04', title: 'BIM viewer literacy', desc: 'Navigating a coordinated model, understanding clashes, and using model views to read a project a set of 2D drawings cannot fully explain.' },
  { num: 'Area 05', title: 'Submittal, RFI & document-control fundamentals', desc: 'The paperwork backbone of a project: logs, transmittals, approvals, and the discipline that keeps a jobsite accountable and a schedule defensible.' },
  { num: 'Area 06', title: 'Estimating & scheduling', desc: 'Quantity take-offs, unit costs, and a basic estimate; sequencing logic, milestones, and a simple project schedule the scholar can explain and defend.' },
  { num: 'Area 07', title: 'Supervisory communication', desc: 'Toolbox talks, coordination meetings, written field reports, and the professional, employer-facing communication that separates a coordinator from a candidate.' },
  { num: 'Area 08', title: 'Employer-informed capstone', desc: 'A project artifact scoped with participating employers and presented to them: the evidence a scholar carries into the interview.' },
  { num: 'Area 09', title: 'Interview week', desc: 'Resume development, mock interviews, employer expectations, and the defined interview opportunity participating employers will commit to for qualified completers.' },
] as const

export function Rebuild() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState(false)

  return (
    <main>

      {/* ── Hero: color/picture split ── */}
      <section
        className="bg-rebuild-deep min-h-[62vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="rebuild-h1">

        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-[40%]"
          style={{ willChange: 'opacity, transform' }}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.25, ease: EASE }}>
          <img
            src="/images/site-tour.jpg"
            alt="Construction management professionals on site tour at Kalikow building, New Jersey"
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
              Program 04 · Adult scholars
            </motion.span>

            <motion.h1
              id="rebuild-h1"
              className="text-[2.75rem] lg:text-[4.25rem] xl:text-[5.25rem] leading-[0.98] tracking-[-0.035em] text-white italic mb-10 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              Rebuild is the adult bridge into construction-management-track roles.
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-x-0 gap-y-3"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.4, ease: EASE }}>
              {(['Flexible cohort length', 'New Jersey', 'Adult scholars'] as const).map((item, i) => (
                <span key={item} className="text-[13px] text-white/90 tracking-[-0.01em]" style={{ fontFamily: 'var(--font-body)' }}>
                  {item}
                  {i < 2 && <span className="mx-4 text-white/25" aria-hidden="true">·</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Program intro + info rows ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="rebuild-intro-h2">
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
                Rebuild is the adult bridge into construction-management-track roles: a cohort for people
                with enormous capacity who were poorly served by pathways designed for eighteen-year-olds.
                Adults returning to work after caregiving, transitioning from military service, changing
                industries, or rebuilding after justice involvement are not a beneficiary group here. They
                are the talent pipeline.
              </motion.p>
              <motion.p
                className="text-[14.5px] text-anthracite/72 leading-[1.72] max-w-[62ch] mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
                Every cohort is designed to end in an employer-validated capstone and a defined interview
                opportunity, because a credential without a door is just a certificate. Rebuild is
                designed and not yet delivered; the first cohort runs when funding and employer
                commitments are in place.
              </motion.p>
              <motion.p
                className="text-[14.5px] text-anthracite/72 leading-[1.72] max-w-[62ch] mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.14, ease: EASE }}>
                <strong className="text-anthracite font-medium">Rebuild also runs as an overlay.</strong> We
                partner with vocational and trade schools to strengthen programs they already deliver,
                rather than competing with them: their training builds the craft, and Rebuild adds the
                construction-management layer above it. The school keeps its program, its students, and
                its credential.{' '}
                <Link href="/trade-schools" className="text-datum hover:underline underline-offset-2">
                  See how the overlay works for vocational and trade schools
                </Link>.
              </motion.p>

              {INFO_ROWS.map(([label, value], i) => (
                <motion.div
                  key={label}
                  className="grid grid-cols-[150px_1fr] gap-4 py-4 border-t border-sediment/25 last:border-b"
                  initial={reduce ? undefined : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, delay: i * 0.05, ease: EASE }}>
                  <p className="text-[12.5px] uppercase tracking-[0.13em] text-datum pt-0.5" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
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
                  src="/images/bridge-shelves.jpg"
                  alt="Construction engineering models and textbooks used in Rebuild cohort study"
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

      {/* ── The Rebuild scholar journey ── bg-bone */}
      <section className="bg-bone py-14 lg:py-20" aria-labelledby="journey-h2">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            <span className="w-7 h-[2px] bg-datum flex-shrink-0" aria-hidden="true" />
            <p className="text-[13.5px] uppercase tracking-[0.14em] text-datum font-medium" style={{ fontFamily: 'var(--font-body)' }}>The Rebuild scholar journey, starting point to next step</p>
          </motion.div>
          <motion.h2
            id="journey-h2"
            className="text-[2rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-10 lg:mb-12 max-w-[28ch] [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 22 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
            Seventeen stages, in order.
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-14 border-t border-sediment/25">
            {JOURNEY.map(({ stage, note }, i) => (
              <motion.div
                key={stage}
                className="group flex gap-4 items-start border-b border-sediment/25 py-4 lg:py-5 transition-colors duration-200 hover:border-rebuild/50"
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.35, delay: Math.min((i % 3) * 0.05, 0.15), ease: EASE }}>
                <span
                  className="flex-shrink-0 w-8 text-[1.25rem] text-rebuild/55 italic leading-none pt-0.5 select-none tabular-nums transition-colors duration-200 group-hover:text-rebuild"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                  aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  {(i === 0 || i === JOURNEY.length - 1) && (
                    <span
                      className="block text-[9.5px] uppercase tracking-[0.14em] text-rebuild/70 mb-1.5"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {i === 0 ? 'Starts here' : 'Leads to'}
                    </span>
                  )}
                  <p className="text-[14.5px] text-anthracite font-medium leading-[1.35] tracking-[-0.01em] mb-1" style={{ fontFamily: 'var(--font-body)' }}>{stage}</p>
                  <p className="text-[12.5px] text-anthracite/70 leading-[1.6] transition-colors duration-200 group-hover:text-anthracite/85" style={{ fontFamily: 'var(--font-body)' }}>{note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Curriculum shell (light variant, no weekly bands) ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20 print:py-0" aria-labelledby="curriculum-h2" id="curriculum">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 lg:mb-12 print:hidden">
            <div>
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
                <span className="w-7 h-[2px] bg-datum flex-shrink-0" aria-hidden="true" />
                <p className="text-[13.5px] uppercase tracking-[0.14em] text-datum font-medium" style={{ fontFamily: 'var(--font-body)' }}>Curriculum shell</p>
              </motion.div>
              <motion.h2
                id="curriculum-h2"
                className="text-[2rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
                The curriculum behind the cohort.
              </motion.h2>
            </div>
            <div className="flex gap-2.5 flex-shrink-0">
              <button type="button" onClick={() => setOpen(true)} className="text-[11.5px] uppercase tracking-[0.08em] text-anthracite/75 border border-anthracite/20 px-3.5 py-2 hover:border-anthracite/45 transition-colors duration-150" style={{ fontFamily: 'var(--font-body)' }}>Expand</button>
              <button type="button" onClick={() => setOpen(false)} className="text-[11.5px] uppercase tracking-[0.08em] text-anthracite/75 border border-anthracite/20 px-3.5 py-2 hover:border-anthracite/45 transition-colors duration-150" style={{ fontFamily: 'var(--font-body)' }}>Collapse</button>
              <button type="button" onClick={() => { setOpen(true); setTimeout(() => window.print(), 350) }} className="text-[11.5px] uppercase tracking-[0.08em] text-anthracite/75 border border-anthracite/20 px-3.5 py-2 hover:border-anthracite/45 transition-colors duration-150" style={{ fontFamily: 'var(--font-body)' }}>Print</button>
            </div>
          </div>

          <CurriculumShell
            id="rebuild"
            color="var(--color-datum)"
            open={open}
            onToggle={() => setOpen(o => !o)}
            meta="Adults · flexible cohort length · nine learning areas · outline"
            collapsedTitle="Rebuild: the curriculum behind the cohort"
            eyebrow="Adult bridge cohort · Construction management · New Jersey"
            title="Nine learning areas, one employer-facing portfolio."
            intro="These are the published learning areas Rebuild cohorts are built from. They map onto the seventeen-stage scholar journey above: vocabulary and lifecycle first, then the tools and documents of the work, then the judgment and communication a supervisor is hired for, and finally the capstone and interview week that turn the cohort into a next step."
            facts={[]}
            frameworks={[]}>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-9">
              {LEARN_AREAS.map(({ num, title, desc }, i) => (
                <motion.div
                  key={num}
                  className="border-t border-sediment/20 pt-5"
                  initial={reduce ? undefined : { opacity: 0, y: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.42, delay: Math.min(i * 0.05, 0.3), ease: EASE }}>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-datum mb-2.5" style={{ fontFamily: 'var(--font-body)' }}>{num}</p>
                  <p className="text-[1.0625rem] text-anthracite italic leading-[1.25] tracking-[-0.015em] mb-2.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{title}</p>
                  <p className="text-[13px] text-anthracite/70 leading-[1.6]" style={{ fontFamily: 'var(--font-body)' }}>{desc}</p>
                </motion.div>
              ))}
            </div>

            <p className="mt-10 pt-8 border-t border-sediment/20 text-[12px] text-anthracite/60 leading-[1.65] max-w-[74ch]" style={{ fontFamily: 'var(--font-body)' }}>
              Learning areas are published as the curriculum spine of every Rebuild cohort. Week-by-week
              syllabi, credential inclusion, and cohort calendars are developed with each funding or
              delivery partner before launch and are not published here. Credential attainment is never
              guaranteed.
            </p>
          </CurriculumShell>

        </div>
      </section>

      {/* ── CTA ── bg-bone wrapper, bg-rebuild-deep inner ── */}
      <section className="bg-bone pt-10 lg:pt-16 pb-0 print:hidden" aria-label="Sponsor a Rebuild cohort">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-rebuild-deep px-10 pt-14 pb-12 lg:px-16 lg:pt-16 lg:pb-14 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-white italic mb-8 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              A real way in, for the people the system overlooked.
            </h2>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/partner"
                className="inline-flex items-center justify-center gap-2 bg-white text-rebuild-deep text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-white/92 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Sponsor a Rebuild cohort
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link href="/apply"
                className="inline-flex items-center justify-center gap-2 border border-white/65 text-white text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-colors duration-150 hover:bg-white/10 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                How cohorts are funded
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-[12.5px] text-white leading-[1.65] max-w-[58ch] mx-auto">
              <strong className="font-medium">For participants:</strong> a few practical capabilities can
              change how someone sees themselves, and open the door to better work, greater dignity, and
              a more financially secure future.
            </p>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
