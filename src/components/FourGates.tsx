import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const

const GATES = [
  {
    num: '01',
    title: 'Recruitment and community support',
    body: 'A community or recruitment partner helps identify participants and define attendance support, case-management coordination, supportive services, and data responsibilities.',
  },
  {
    num: '02',
    title: 'Funding and fiscal alignment',
    body: 'A funding or fiscal partner establishes how the cohort is supported, administered, and reported before delivery obligations begin.',
  },
  {
    num: '03',
    title: 'Employer commitment',
    body: 'Participating employers help validate role relevance, inform capstone expectations, and commit to a defined interview opportunity for qualified completers.',
  },
  {
    num: '04',
    title: 'Articulation or apprenticeship pathway',
    body: 'A signed progression route with an apprenticeship sponsor, union local, county college, or employer training program creates a credible next step beyond completion.',
  },
] as const

export function FourGates() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-snow py-16 lg:py-24" aria-labelledby="gates-heading">
      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          className="text-[10.5px] text-quarry uppercase tracking-[0.22em] mb-8 select-none"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
          From Readiness to Advancement
        </motion.p>

        <motion.h2
          id="gates-heading"
          className="text-[2.25rem] lg:text-[3.25rem] xl:text-[3.875rem] leading-[1.08] tracking-[-0.028em] text-anthracite italic mb-12 lg:mb-16 max-w-[34ch]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.55, delay: 0.06, ease: EASE }}>
          A disciplined pathway requires four commitments before instruction begins.
        </motion.h2>

        <div className="max-w-[56rem] mx-auto grid grid-cols-1 lg:grid-cols-2">
          {GATES.map(({ num, title, body }, i) => {
            const isLeft = i % 2 === 0
            const isTop = i < 2
            const isLast = i === 3
            return (
              <motion.div
                key={num}
                className={[
                  'py-8 lg:py-10',
                  (i === 0 || i === 3) ? 'bg-sediment' : '',
                  (i === 0 || i === 3)
                    ? 'px-5 lg:px-8 xl:px-10'
                    : (isLeft ? 'lg:pr-10 xl:pr-14' : 'lg:pl-10 xl:pl-14'),
                  !isLast ? 'border-b border-sediment/25' : '',
                  !isTop ? 'lg:border-b-0' : '',
                  isLeft ? 'lg:border-r lg:border-sediment/25' : '',
                ].filter(Boolean).join(' ')}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: i * 0.07, ease: EASE }}>
                <span
                  className="block text-[10.5px] text-datum uppercase tracking-[0.18em] mb-4 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                  aria-hidden="true">
                  {num}
                </span>
                <h3
                  className="text-[1.125rem] lg:text-[1.25rem] leading-[1.25] tracking-[-0.02em] text-anthracite italic mb-3"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {title}
                </h3>
                <p
                  className="text-[14px] text-anthracite/60 leading-[1.7]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {body}
                </p>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          className="max-w-[56rem] mx-auto border-t border-sediment/25 pt-10 lg:pt-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.6, delay: 0.15, ease: EASE }}>
          <p
            className="text-[1.125rem] lg:text-[1.25rem] text-anthracite italic leading-[1.5] max-w-[44ch]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            Curriculum without these commitments is a class. Aedifica is designed to build a pathway.
          </p>
          <Link
            to="/partner"
            className="flex-shrink-0 inline-flex items-center justify-center bg-patina text-white text-[14px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-patina/85"
            style={{ fontFamily: 'var(--font-body)' }}>
            Discuss a Founding Partnership
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
