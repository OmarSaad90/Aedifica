'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import {
  ClipboardText,
  UsersThree,
  Wrench,
  Certificate,
  Clock,
  type Icon,
} from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const MINI_LIST = [
  'Delivered as an overlay on your existing program, not a competing cohort',
  'Taught by working construction-management and engineering professionals',
  'Employer-validated capstone required before any credential',
  'Articulation toward county colleges, apprenticeship sponsors, and union locals',
  'Outcome data reported with the same definitions we publish everywhere else',
] as const

const FIELD_ROWS: { Icon: Icon; label: string; value: string }[] = [
  { Icon: ClipboardText, label: 'Status', value: 'Designed, overlay model complete; not yet delivered with a partner school' },
  { Icon: UsersThree, label: 'Audience', value: 'County vocational-technical schools · trade schools · adult trade programs' },
  { Icon: Wrench, label: 'Delivery', value: 'Layered onto an existing program, scoped to your calendar and cohort' },
  { Icon: Certificate, label: 'Credentials', value: 'OSHA 30-Hour Construction Safety, the outreach credential itself, issued on completion, plus structured exam preparation for LEED Green Associate (USGBC) and PMI CAPM. Aedifica delivers the preparation and the capstone; the credentialing bodies issue the credential. These stack alongside your existing award rather than replacing it.' },
]

const OPERATING_ROWS: [string, string][] = [
  ['Schedule footprint', 'Scoped to your existing program: a parallel block, an added module, or a capstone term.'],
  ['Who teaches', 'Aedifica instructors, alongside your faculty; they keep the shop and the student relationship.'],
  ['Your staff commitment', 'Planning hours plus weekly faculty involvement, confirmed with your team before launch.'],
  ['Room & materials', 'The school provides the space. Aedifica brings all materials.'],
  ['Cohort size', 'Minimum 10, maximum 25 per cohort.'],
  ['Lead time', 'Four weeks from signed agreement to first session. The programs are built and ready to run.'],
  ['Pilot option', 'Whether a single-cohort pilot fits, and on what terms, is confirmed with each partner.'],
]

export function Votech() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero: terracotta, no picture ── */}
      <section
        className="bg-terracotta min-h-[46vh] flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="votech-h1">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-anthracite/10 text-anthracite px-3 py-1 mb-10 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            For Vocational &amp; Trade Schools
          </motion.span>

          <motion.h1
            id="votech-h1"
            className="text-[2.75rem] lg:text-[clamp(2.5rem,5vw,4rem)] leading-[0.98] tracking-[-0.035em] text-anthracite italic mb-8 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            We don&rsquo;t replace your program. <span className="not-italic font-medium">We add the layer above it.</span>
          </motion.h1>

          <motion.p
            className="text-[14.5px] text-anthracite leading-[1.7]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
            Your training builds the craft. Aedifica adds the construction-management layer on top of
            it: scope, schedule, cost, safety, quality, and the supervisory skills that move a skilled
            tradesperson toward coordinator, estimator, scheduler, or field supervisor. You keep your
            program, your students, and your credential. We add the ceiling above it.
          </motion.p>

        </div>
      </section>

      {/* ── Proof + position ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-label="Why this overlay">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-20 lg:items-start">

            <motion.p
              className="text-[14.5px] text-anthracite/78 leading-[1.72] max-w-[64ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
              We come to this conversation having already sent students the other way. Of the
              eighth-graders in our Building Bridges cohort, 55%, six of eleven, were accepted to the
              highly selective Union County Vocational-Technical Schools for 2025&ndash;26. We spend our
              early programs pointing capable students toward vocational education. The overlay is the
              same relationship continued upward, for the adults your programs have already trained.{' '}
              <Link href="/impact" className="text-anthracite underline underline-offset-2 decoration-anthracite/30 hover:decoration-anthracite transition-colors duration-150">See the Building Bridges results</Link>.
            </motion.p>

            <motion.div
              className="mt-10 lg:mt-0"
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              <p className="text-[10.5px] uppercase tracking-[0.18em] text-ink-soft font-semibold mb-4 select-none" style={{ fontFamily: 'var(--font-body)' }}>The position</p>
              <p className="text-[1.5rem] lg:text-[1.75rem] text-anthracite leading-[1.3] italic" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                A student who finishes your program can build. We help them run the job. Those are
                different skills, and the second one is where the supervisory shortage is.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Mini-list + fieldlist ── bg-bone */}
      <section className="bg-bone py-14 lg:py-20" aria-label="What the overlay is">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-16 xl:gap-20 lg:items-start">

            <div>
              <motion.div
                className="overflow-hidden mb-8"
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
                <img
                  src="/images/votech-site-visit.avif"
                  alt="Vocational and trade program trainees on an active rail construction jobsite"
                  className="w-full h-[260px] lg:h-[320px] object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </motion.div>
              <ul className="list-none space-y-3">
                {MINI_LIST.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex gap-3 items-start"
                    initial={reduce ? undefined : { opacity: 0, y: 10 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.4, delay: i * 0.05, ease: EASE }}>
                    <span className="flex-shrink-0 w-[6px] h-[6px] rotate-45 bg-ink-soft mt-[7px]" aria-hidden="true" />
                    <span className="text-[13.5px] text-anthracite/78 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="mt-12 lg:mt-0">
              {FIELD_ROWS.map(({ Icon: IconComp, label, value }, i) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-4 py-4 border-t border-sediment/25 last:border-b"
                  initial={reduce ? undefined : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, delay: i * 0.05, ease: EASE }}>
                  <IconComp size={18} weight="regular" className="text-ink-soft flex-shrink-0 mt-0.5" aria-hidden={true} />
                  <div className="grid grid-cols-1 sm:grid-cols-[110px_1fr] gap-1 sm:gap-4 flex-1">
                    <p className="text-[12.5px] uppercase tracking-[0.13em] text-ink-soft font-semibold pt-0.5" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
                    <p className="text-[13.5px] text-anthracite/80 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── What it takes to run it ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="operating-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[46rem] mb-10 lg:mb-12">
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              <Clock size={16} weight="regular" className="text-ink-soft flex-shrink-0" aria-hidden={true} />
              <p className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium" style={{ fontFamily: 'var(--font-body)' }}>What it takes to run it</p>
            </motion.div>
            <motion.h2
              id="operating-h2"
              className="text-[1.875rem] lg:text-[2.5rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
              What we need from you, stated plainly.
            </motion.h2>
          </div>

          {OPERATING_ROWS.map(([label, value], i) => (
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

      {/* ── CTA ── bg-snow wrapper, bg-bone inner (no reserved program color for this page) ── */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-label="Talk to us about an overlay partnership">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-bone px-10 pt-14 pb-12 lg:px-16 lg:pt-16 lg:pb-14 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>


            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/partner"
                className="inline-flex items-center justify-center gap-2 bg-anthracite text-white text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-anthracite/85 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Talk to us about an overlay partnership
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link href="/programs/rebuild"
                className="inline-flex items-center justify-center gap-2 border border-anthracite text-anthracite text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-colors duration-150 hover:bg-anthracite/6 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                See the Rebuild curriculum
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-[12.5px] text-anthracite/80 leading-[1.65] max-w-[58ch] mx-auto">
              <strong className="font-medium text-anthracite">For CTE directors:</strong> the overlay is built to
              strengthen a program you already run, not to recruit against it. If Aedifica cannot
              demonstrate that your enrollment and your credential stay yours, we should not be in the
              building.
            </p>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
