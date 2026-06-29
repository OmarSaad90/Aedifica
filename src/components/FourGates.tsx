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
    num:   '01',
    title: 'Recruitment and community support',
    body:  'A community or recruitment partner helps identify participants and define attendance support, case-management coordination, supportive services, and data responsibilities.',
    Icon:  UsersThree,
  },
  {
    num:   '02',
    title: 'Funding and fiscal alignment',
    body:  'A funding or fiscal partner establishes how the cohort is supported, administered, and reported before delivery obligations begin.',
    Icon:  CurrencyDollar,
  },
  {
    num:   '03',
    title: 'Employer commitment',
    body:  'Participating employers help validate role relevance, inform capstone expectations, and commit to a defined interview opportunity for qualified completers.',
    Icon:  Handshake,
  },
  {
    num:   '04',
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
    <section className="bg-snow py-14 lg:py-20" aria-labelledby="gates-heading">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          id="gates-heading"
          className="text-[2.25rem] lg:text-[3.25rem] xl:text-[3.875rem] leading-[1.08] tracking-[-0.028em] text-anthracite italic mb-10 lg:mb-14 max-w-[32ch]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.55, delay: 0.06, ease: EASE }}>
          A disciplined pathway requires{' '}
          <span className="text-datum">four commitments</span>{' '}
          before instruction begins.
        </motion.h2>

        {/* 2×2 grid — all cells on snow surface, sediment dividers */}
        <div className="max-w-[56rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {GATES.map(({ title, body, Icon: IconComp }, i) => {
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

                  <IconComp size={22} weight="regular" className="text-datum mb-5" aria-hidden={true} />

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
          <p
            className="text-[1.0625rem] lg:text-[1.1875rem] text-anthracite/80 italic leading-[1.5] max-w-[44ch]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            Curriculum without these commitments is a class. Aedifica is designed to build a pathway.
          </p>
          <Link href="/partner"
            className="flex-shrink-0 inline-flex items-center justify-center bg-datum text-white text-[13px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-colors duration-150 hover:bg-datum/85"
            style={{ fontFamily: 'var(--font-body)' }}>
            Discuss a Founding Partnership
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
