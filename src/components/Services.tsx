import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const PRIMARY = [
  {
    name: 'Aedifica Rebuild',
    body: 'A 12-week adult bridge cohort for construction-management-track opportunity.',
    cta: 'Explore Rebuild',
    href: '#rebuild',
  },
  {
    name: 'Aedifica Launch',
    body: 'Grant strategy for workforce programs built to report outcomes.',
    cta: 'Explore Launch',
    href: '#launch',
  },
] as const

export function Services() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone py-16 lg:py-24" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          id="services-heading"
          className="text-[2.5rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[1.05] tracking-[-0.03em] text-anthracite italic mb-12 lg:mb-16 max-w-[18ch]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
          Focused first. Scalable after proof.
        </motion.h2>

        {/* Primary services — 2-col double-bezel cards */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 lg:gap-5">
          {PRIMARY.map(({ name, body, cta, href }, i) => (
            <motion.div
              key={name}
              className="border border-sediment/30 bg-snow px-8 py-9 lg:px-10 lg:py-10 flex flex-col justify-between gap-10 hover:border-anthracite/20 transition-colors duration-200"
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: i * 0.1, ease: SPRING }}>
              <div>
                <h3
                  className="text-[1.25rem] lg:text-[1.5rem] leading-[1.2] tracking-[-0.025em] text-anthracite italic mb-4"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {name}
                </h3>
                <p
                  className="text-[14.5px] text-anthracite/60 leading-[1.7]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {body}
                </p>
              </div>
              <a
                href={href}
                className="inline-flex items-center gap-2 text-[13px] text-datum tracking-[-0.01em] group self-start"
                style={{ fontFamily: 'var(--font-body)' }}>
                {cta}
                <span
                  className="transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true">
                  →
                </span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Expansion Pathways — tertiary strip */}
        <motion.div
          className="border-t border-sediment/25 mt-5 pt-8 lg:pt-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 lg:gap-16"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.55, delay: 0.2, ease: EASE }}>
          <div className="flex-1">
            <h3
              className="text-[1rem] lg:text-[1.125rem] leading-[1.3] tracking-[-0.02em] text-anthracite italic mb-2.5"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
              Expansion Pathways
            </h3>
            <p
              className="text-[13.5px] text-anthracite/55 leading-[1.7] max-w-[58ch]"
              style={{ fontFamily: 'var(--font-body)' }}>
              School curriculum, employer membership infrastructure, and student exposure modules
              designed to expand after credible Cohort 1 outcomes establish the foundation for scale.
            </p>
          </div>
          <a
            href="#expansion"
            className="flex-shrink-0 inline-flex items-center gap-2 text-[13px] text-datum tracking-[-0.01em] group self-start lg:mt-1"
            style={{ fontFamily: 'var(--font-body)' }}>
            View the expansion roadmap
            <span
              className="transition-transform duration-150 group-hover:translate-x-1"
              aria-hidden="true">
              →
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
