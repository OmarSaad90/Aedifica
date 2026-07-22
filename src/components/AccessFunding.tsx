'use client'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const FUNDING = [
  { label: 'Districts', value: 'Pathway and Explore run on district, Title, and grant funding, scoped to the school year and budget cycle you actually have.' },
  { label: 'Workforce', value: 'Rebuild and Launch align to WIOA, state apprenticeship, and clean-energy workforce funding streams.' },
  { label: 'Employers', value: 'Talent Pipeline participation is structured as workforce investment, with outcome data that survives a board review.' },
  { label: 'Philanthropy', value: 'Mission-aligned funders underwrite wraparound supports and the research agenda that keeps the model honest.' },
  { label: 'New York', value: "Aedifica's high-school curriculum is aligned to New York standards, including CDOS (Career Development & Occupational Studies) and the NGSS engineering-design expectations." },
] as const

export function AccessFunding() {
  const reduce = useReducedMotion()

  return (
    <section id="access" className="bg-snow py-14 lg:py-20 scroll-mt-24" aria-labelledby="access-h2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-16 xl:gap-24 lg:items-start">

          <div>
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              <span className="w-7 h-[2px] bg-datum flex-shrink-0" aria-hidden="true" />
              <p className="text-[13.5px] uppercase tracking-[0.14em] text-datum font-medium" style={{ fontFamily: 'var(--font-body)' }}>Access & funding</p>
            </motion.div>
            <motion.h2
              id="access-h2"
              className="text-[2rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-6 [text-wrap:balance] scroll-mt-24"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
              No cost to learners. Full cost transparency to partners.
            </motion.h2>
            <motion.p
              className="text-[15px] text-anthracite/78 leading-[1.72] max-w-[52ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              Aedifica programs are funded through institutional partners, districts, workforce boards,
              agencies, employers, and philanthropy, and aligned to New Jersey's funded green and
              apprenticeship priorities. Learners never pay. Partners always know exactly what a cohort
              costs and what it returns.
            </motion.p>
          </div>

          <div className="mt-10 lg:mt-0">
            <div className="border-t border-sediment/25">
              {FUNDING.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-2 sm:gap-8 py-5 border-b border-sediment/25"
                  initial={reduce ? undefined : { opacity: 0, y: 14 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, delay: i * 0.06, ease: EASE }}>
                  <p className="text-[10.5px] uppercase tracking-[0.14em] text-datum pt-1" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
                  <p className="text-[13.5px] text-anthracite/78 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>{value}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
