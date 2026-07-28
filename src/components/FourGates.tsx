'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { UsersThree, CurrencyDollar, Handshake, Certificate, type Icon } from '@phosphor-icons/react'

const VIEWPORT    = { once: true, margin: '-60px 0px' } as const
const EASE        = [0.25, 0.1, 0.25, 1] as const
const SPRING_EASE = [0.32, 0.72, 0, 1] as const

type Gate = { num: string; title: string; body: string; Icon: Icon }

const GATES: Gate[] = [
  {
    num:   '01 — Recruitment',
    title: 'Recruitment & community support',
    body:  'A community or recruitment partner helps identify participants and defines attendance support, case-management coordination, supportive services, and data responsibilities.',
    Icon:  UsersThree,
  },
  {
    num:   '02 — Funding',
    title: 'Funding & fiscal alignment',
    body:  'A funding or fiscal partner establishes how the cohort is supported, administered, and reported before delivery obligations begin.',
    Icon:  CurrencyDollar,
  },
  {
    num:   '03 — Employer',
    title: 'Employer commitment',
    body:  'Participating employers validate role relevance, inform capstone expectations, and commit to a defined interview opportunity for qualified completers.',
    Icon:  Handshake,
  },
  {
    num:   '04 — Articulation',
    title: 'Articulation or apprenticeship pathway',
    body:  'A signed progression route with an apprenticeship sponsor, union local, county college, or employer training program creates a credible next step beyond completion.',
    Icon:  Certificate,
  },
]

// Per-cell border rules for the 2×2 grid
const CELL_BORDERS: Record<number, string> = {
  0: 'border-b border-sediment/20 lg:border-r',
  1: 'border-b border-sediment/20',
  2: 'border-b border-sediment/20 lg:border-b-0 lg:border-r',
  3: '',
}

export function FourGates() {
  const reduce = useReducedMotion()

  return (
    <>
      {/* ── The four commitments ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="gates-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section intro — a regular part of this section now, not a separate hero */}
        <div className="max-w-[56rem] mx-auto mb-12 lg:mb-14">
          <motion.p
            className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            § 20 — Partnership
          </motion.p>

          <motion.h2
            id="gates-heading"
            className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] tracking-[-0.03em] text-anthracite italic mb-6 max-w-[26ch] [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 22 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: SPRING_EASE }}>
            A disciplined pathway requires four commitments before instruction begins.
          </motion.h2>

          <motion.p
            className="text-[14.5px] text-anthracite/75 leading-[1.7] max-w-[64ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
            These are preconditions, not preferences. Aedifica does not open a cohort until all
            four are in place, because every outcome we publish depends on them being real
            before day one. Naming them early is also the fastest way for a prospective partner
            to see whether the pieces are in reach.
          </motion.p>
        </div>

        {/* 2×2 grid — all cells on snow surface, sediment dividers */}
        <div className="max-w-[56rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {GATES.map(({ num, title, body, Icon: IconComp }, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={i}
                  className={[
                    'py-8 lg:py-10',
                    CELL_BORDERS[i],
                    isLeft ? 'lg:pr-12 xl:pr-16' : 'lg:pl-12 xl:pl-16',
                  ].filter(Boolean).join(' ')}
                  initial={reduce ? undefined : { opacity: 0, y: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.55, delay: i * 0.08, ease: SPRING_EASE }}>

                  <div className="flex items-center gap-3 mb-5">
                    <IconComp size={22} weight="regular" className="text-clay" aria-hidden={true} />
                    <span className="text-[10.5px] uppercase tracking-[0.12em] text-clay font-medium" style={{ fontFamily: 'var(--font-body)' }}>{num}</span>
                  </div>

                  <h3
                    className="text-[1.125rem] lg:text-[1.25rem] leading-[1.25] tracking-[-0.015em] text-anthracite mb-3 font-medium"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {title}
                  </h3>
                  <p
                    className="text-[13.5px] text-anthracite/75 leading-[1.7] max-w-[46ch]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {body}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Footer CTA */}
        <motion.div
          className="max-w-[56rem] mx-auto border-t border-sediment/20 pt-8 lg:pt-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.6, delay: 0.2, ease: EASE }}>
          <div>
            <span
              className="inline-block text-[10.5px] uppercase tracking-[0.14em] border border-ink-soft/40 text-ink-soft px-2.5 py-1 mb-3 select-none"
              style={{ fontFamily: 'var(--font-body)' }}>
              Founding partnership
            </span>
            <p
              className="text-[1.0625rem] lg:text-[1.1875rem] text-anthracite/80 italic leading-[1.5] max-w-[44ch]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
              Curriculum without these commitments is a class.{' '}
              <span className="text-wine not-italic font-medium">Aedifica is designed to build a pathway.</span>
            </p>
          </div>
          <Link href="#contact-form"
            className="flex-shrink-0 inline-flex items-center justify-center bg-anthracite text-white text-[13px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-colors duration-150 hover:bg-anthracite/85"
            style={{ fontFamily: 'var(--font-body)' }}>
            Discuss a Founding Partnership
          </Link>
        </motion.div>

      </div>
      </section>
    </>
  )
}
