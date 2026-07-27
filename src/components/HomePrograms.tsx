'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const PROGRAMS = [
  {
    chip: 'Program 01 · Middle school',
    name: 'Aedifica Explore',
    body: 'Career awareness and hands-on discovery in the built environment for middle-school scholars: the earliest, widest door into the pathway. Students meet the professions that shape their communities and begin speaking the language of engineering.',
    meta: ['Grades 6–8', 'School-year & summer', 'Community-based delivery'],
    cta: 'Explore the program',
    to: '/programs/explore',
    color: 'bg-datum',
    dark: false,
  },
  {
    chip: 'Program 02 · High schools & districts',
    name: 'Aedifica Pathway',
    body: 'A construction-management curriculum pathway for high schools and districts: pre-college rigor, project-based learning, and a direct line of sight to credentials, college articulation, and industry roles.',
    meta: ['Grades 9–12', 'District-embedded', 'Pre-college aligned'],
    cta: 'Explore the program',
    to: '/programs/pathway',
    color: 'bg-quarry',
    dark: true,
  },
  {
    chip: 'Program 03 · Institutions',
    name: 'Aedifica Launch',
    body: 'Institutional pathway design and implementation for workforce boards, county colleges, and employers: the architecture, curriculum, instructor capacity, and outcome reporting to stand up a construction-management pathway that lasts.',
    meta: ['Workforce partners', 'Design + delivery', 'Outcome reporting built in'],
    cta: 'Explore the program',
    to: '/programs/launch',
    color: 'bg-sediment',
    dark: true,
  },
  {
    chip: 'Program 04 · Adult scholars',
    name: 'Aedifica Rebuild',
    body: 'An adult bridge cohort into construction-management-track roles, scoped to your calendar and funding cycle, designed for overlooked talent: adults returning to work, changing industries, transitioning from military service, or rebuilding after justice involvement.',
    meta: ['Flexible cohort length', 'Wraparound supports', 'Employer-validated capstone'],
    cta: 'Explore the program',
    to: '/programs/rebuild',
    color: 'bg-rebuild-deep',
    dark: false,
  },
] as const

const PIPELINE = {
  chip: 'Program 05 · Employers',
  name: 'Aedifica Talent Pipeline',
  body: 'The employer-facing channel that completes the pathway: a structured connection between credentialed program completers and the contractors, owners, and agencies who need them, with defined interview commitments, apprenticeship articulation, and honest outcome data behind every referral.',
  meta: ['Interview commitments', 'Apprenticeship articulation', 'Capstone-vetted candidates', 'Same-definition outcome data'],
  cta: 'Explore the pipeline',
  to: '/programs/talent-pipeline',
  color: 'bg-pipeline',
  dark: true,
} as const

function MetaChips({ items, dark }: { items: readonly string[]; dark: boolean }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className={`text-[10px] uppercase tracking-[0.08em] px-2.5 py-1 border ${dark ? 'text-anthracite/80 border-anthracite/20' : 'text-white/85 border-white/25'}`}
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export function HomePrograms() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-snow py-12 lg:py-18" aria-labelledby="programs-heading">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
          <p
            className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium leading-none"
            style={{ fontFamily: 'var(--font-body)' }}>
            The five programs
          </p>
        </motion.div>

        <motion.h2
          id="programs-heading"
          className="text-[2.25rem] lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-5 max-w-[18ch]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
          Find your entry point.
        </motion.h2>

        <motion.p
          className="text-[15px] text-anthracite/75 leading-[1.65] max-w-[60ch] mb-12 lg:mb-16"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
          Five programs, one pathway, from middle school to employers. Find the door that fits your
          school, your organization, or your family.
        </motion.p>

        {/* 4-program quadrant panel — one sheet cut into equal cells by hairline mortar
            lines (the section's own bg-bone showing through a 2px gap), joined at the
            center by the house diamond glyph instead of four boxes sitting in a row. */}
        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-0.5">
          {PROGRAMS.map(({ chip, name, body, meta, cta, to, color, dark }, i) => (
            <motion.div
              key={name}
              className={`px-7 py-8 lg:px-9 lg:py-10 flex flex-col justify-between gap-7 min-h-[300px] lg:min-h-[340px] transition-[filter] duration-150 hover:brightness-110 ${color}`}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: i * 0.08, ease: SPRING }}>
              <div>
                <span
                  className={`block text-[10px] uppercase tracking-[0.12em] mb-3 ${dark ? 'text-anthracite/75' : 'text-white/80'}`}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {chip}
                </span>
                <h3
                  className={`text-[1.625rem] lg:text-[1.75rem] leading-[1.15] tracking-[-0.02em] italic mb-5 [text-wrap:balance] ${dark ? 'text-anthracite' : 'text-white'}`}
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  {name}
                </h3>
                <p
                  className={`text-[13.5px] leading-[1.6] mb-6 ${dark ? 'text-anthracite/85' : 'text-white/90'}`}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {body}
                </p>
                <MetaChips items={meta} dark={dark} />
              </div>

              <Link href={to}
                className={`inline-flex items-center gap-2 text-[13px] font-semibold tracking-[-0.01em] underline underline-offset-4 group self-start ${dark ? 'text-anthracite decoration-anthracite/35 hover:decoration-anthracite' : 'text-white decoration-white/45 hover:decoration-white'} transition-[text-decoration-color] duration-150`}
                style={{ fontFamily: 'var(--font-body)' }}>
                {cta}
                <span className="transition-transform duration-150 group-hover:translate-x-1 flex-shrink-0" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}

          {/* The crossing point — halo breaks the mortar lines cleanly behind the
              marker, same construction as HeroPathway's waypoints. */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden sm:block"
            aria-hidden="true"
          >
            <div className="relative w-9 h-9 -translate-x-1/2 -translate-y-1/2">
              <span className="absolute inset-0 rotate-45 bg-snow" />
              <span className="absolute inset-0 m-auto w-5 h-5 rotate-45 bg-anthracite" />
            </div>
          </div>
        </div>

        {/* Talent Pipeline — Program 05, full width. Same mortar gap as the panel
            above (2px at sm+, revealing bg-bone), so it reads as one more row of
            the same sheet rather than a separate block. */}
        <motion.div
          className={`mt-4 sm:mt-0.5 px-7 py-8 lg:px-10 lg:py-9 mb-10 lg:mb-12 grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:items-end gap-7 transition-[filter] duration-150 hover:brightness-110 ${PIPELINE.color}`}
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.6, delay: 0.32, ease: SPRING }}>
          <div>
            <span
              className="block text-[10px] uppercase tracking-[0.12em] text-anthracite/75 mb-3"
              style={{ fontFamily: 'var(--font-body)' }}>
              {PIPELINE.chip}
            </span>
            <h3
              className="text-[1.625rem] lg:text-[1.875rem] leading-[1.15] tracking-[-0.02em] italic text-anthracite mb-4 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              {PIPELINE.name}
            </h3>
            <p
              className="text-[13.5px] text-anthracite/85 leading-[1.6] max-w-[68ch] mb-6 lg:mb-0"
              style={{ fontFamily: 'var(--font-body)' }}>
              {PIPELINE.body}
            </p>
            <div className="lg:hidden">
              <MetaChips items={PIPELINE.meta} dark={true} />
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="hidden lg:block lg:max-w-[320px]">
              <MetaChips items={PIPELINE.meta} dark={true} />
            </div>
            <Link href={PIPELINE.to}
              className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-[-0.01em] underline underline-offset-4 group text-anthracite decoration-anthracite/35 hover:decoration-anthracite transition-[text-decoration-color] duration-150 flex-shrink-0"
              style={{ fontFamily: 'var(--font-body)' }}>
              {PIPELINE.cta}
              <span className="transition-transform duration-150 group-hover:translate-x-1 flex-shrink-0" aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.5, delay: 0.4, ease: EASE }}>
          <Link href="/programs#compare"
            className="inline-flex items-center gap-2 text-[14px] text-anthracite tracking-[-0.01em] group"
            style={{ fontFamily: 'var(--font-body)' }}>
            Compare all five, side by side
            <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
