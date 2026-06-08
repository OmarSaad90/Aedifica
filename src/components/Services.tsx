import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const PRIMARY = [
  {
    name: 'Aedifica Rebuild',
    body: 'A 12-week adult bridge cohort for construction-management-track opportunity.',
    cta: 'Explore Rebuild',
    to: '/services/rebuild',
  },
  {
    name: 'Aedifica Launch',
    body: 'Grant strategy for workforce programs built to report outcomes.',
    cta: 'Explore Launch',
    to: '/services/launch',
  },
] as const

export function Services() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone py-16 lg:py-24" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="flex justify-center mb-6"
          aria-hidden="true"
          initial={reduce ? undefined : { opacity: 0, scaleX: 0 }}
          whileInView={reduce ? undefined : { opacity: 1, scaleX: 1 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.5, ease: EASE }}
          style={{ originX: '50%' }}>
          <div className="w-8 h-[2px] bg-datum" />
        </motion.div>

        <motion.h2
          id="services-heading"
          className="text-[2.5rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[1.05] tracking-[-0.03em] text-anthracite italic mb-12 lg:mb-16 text-center mx-auto max-w-[22ch]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
          Focused first. Scalable after proof.
        </motion.h2>

        {/* Service cards — primary pair + expansion third */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 lg:gap-5">
          {PRIMARY.map(({ name, body, cta, to }, i) => (
            <motion.div
              key={name}
              className={`px-8 py-6 lg:px-10 lg:py-7 flex flex-col justify-between gap-4 transition-colors duration-200 ${i === 0 ? 'bg-datum' : 'bg-patina'}`}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: i * 0.1, ease: SPRING }}>
              <div>
                <h3
                  className="text-[2rem] lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em] italic mb-3 text-white"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  {name}
                </h3>
                <div className="w-7 h-px bg-white/20 mb-3" aria-hidden="true" />
                <p
                  className="text-[14px] leading-[1.65] text-white/70"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {body}
                </p>
              </div>
              <Link
                to={to}
                className="inline-flex items-center gap-2 text-[13px] tracking-[-0.01em] group self-start text-white"
                style={{ fontFamily: 'var(--font-body)' }}>
                {cta}
                <span
                  className="transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true">
                  →
                </span>
              </Link>
            </motion.div>
          ))}

          {/* Expansion Pathways — third outlined card, full width */}
          <motion.div
            className="lg:col-span-2 border border-sediment/40 bg-snow px-8 py-6 lg:px-10 lg:py-7 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 lg:gap-16 transition-colors duration-200 hover:border-anthracite/20"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.2, ease: SPRING }}>
            <div className="flex-1">
              <h3
                className="text-[1.125rem] lg:text-[1.25rem] leading-[1.2] tracking-[-0.02em] text-anthracite italic mb-3"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Expansion Pathways
              </h3>
              <p
                className="text-[14px] text-anthracite/65 leading-[1.7] max-w-[62ch]"
                style={{ fontFamily: 'var(--font-body)' }}>
                School curriculum, employer membership infrastructure, and student exposure modules
                designed to expand after credible Cohort 1 outcomes establish the foundation for scale.
              </p>
            </div>
            <Link
              to="/services"
              className="flex-shrink-0 inline-flex items-center gap-2 text-[13px] text-datum tracking-[-0.01em] group self-start lg:self-center"
              style={{ fontFamily: 'var(--font-body)' }}>
              View the expansion roadmap
              <span
                className="transition-transform duration-150 group-hover:translate-x-1"
                aria-hidden="true">
                →
              </span>
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
