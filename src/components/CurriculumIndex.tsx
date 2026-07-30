'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const CURRICULA = [
  {
    title: 'Bridging Brilliance: Engineering the Hudson',
    meta: 'Explore · Grades 7–8 · 12 weeks',
    desc: 'Three units, twelve weeks, standards-tagged: from the engineering design process to a load-tested bridge defended before professional judges.',
    to: '/partner',
    color: 'bg-datum',
  },
  {
    title: 'Summer STEM Camps',
    meta: 'Explore · Grades 6–12 · 1–2 weeks',
    desc: 'Engineering Explorers with the complete ten-day map, plus Construction & Built Environment and Girls in Engineering & Technology.',
    to: '/programs/explore',
    color: 'bg-datum',
  },
  {
    title: 'Resilient Futures',
    meta: 'Pathway · Grades 6–12 · three pathways',
    desc: 'Bridge Builders, Infrastructure Fellows with the Smart Cities studio, and STEM Research Scholars, with the full standards matrix and 21st CCLC map.',
    to: '/programs/pathway',
    color: 'bg-quarry',
  },
  {
    title: 'BUILD NJ GREEN',
    meta: 'Launch · Adults · 16 weeks / 240 hours',
    desc: 'Green construction management: OSHA 30, LEED Green Associate, and PMI-CAPM preparation, a capstone portfolio, and eight career roles.',
    to: '/programs/launch',
    color: 'bg-sediment',
  },
  {
    title: 'Rebuild curriculum outline',
    meta: 'Rebuild · Adults · 12 or 24 weeks',
    desc: 'Nine published learning areas behind the adult bridge cohort. Week-by-week syllabi are developed with each funding or delivery partner.',
    to: '/programs/rebuild',
    color: 'bg-rebuild',
  },
] as const

export function CurriculumIndex() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-anthracite py-12 lg:py-16" aria-labelledby="curriculum-index-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Horizontal header: heading left, intro right */}
        <div className="lg:flex lg:items-end lg:justify-between lg:gap-16 mb-9 lg:mb-11">
          <motion.h2
            id="curriculum-index-heading"
            className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.05] tracking-[-0.028em] text-white italic mb-4 lg:mb-0"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
            Curriculum index.
          </motion.h2>
          <motion.p
            className="text-[13.5px] text-white/70 leading-[1.65] max-w-[52ch] lg:text-right lg:pb-2"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
            Five published curricula, each with full instructional detail on its program page: weekly
            maps, standards codes, deliverables, and capstones.
          </motion.p>
        </div>

        {/* Compact grid: top-rule cells, 3-across at lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 xl:gap-x-14 gap-y-9">
          {CURRICULA.map(({ title, meta, desc, to, color }, i) => (
            <motion.div
              key={title}
              className="border-t border-white/20 pt-5 flex flex-col"
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.45, delay: Math.min((i % 3) * 0.07, 0.2), ease: EASE }}>
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className={`flex-shrink-0 w-[8px] h-[8px] rotate-45 ${color}`} aria-hidden="true" />
                <p
                  className="text-[10px] uppercase tracking-[0.14em] text-white/55 leading-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {meta}
                </p>
              </div>
              <h3
                className="text-[1.25rem] lg:text-[1.375rem] italic text-white leading-[1.15] tracking-[-0.016em] mb-2.5 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                {title}
              </h3>
              <p
                className="text-[12.5px] text-white/68 leading-[1.62] mb-3.5 flex-1"
                style={{ fontFamily: 'var(--font-body)' }}>
                {desc}
              </p>
              <Link href={to}
                className="inline-flex items-center gap-1.5 self-start py-2 -my-2 text-[12.5px] tracking-[-0.01em] underline underline-offset-4 group"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-datum-light)' }}>
                Open the curriculum
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
