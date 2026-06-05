import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const

const PARTNERS = [
  {
    name: 'Education institutions',
    desc: 'Build student pathways connecting construction learning, career readiness, future credentials, and articulation possibilities.',
    cta: 'Discuss an Education Partnership',
    to: '/partner',
  },
  {
    name: 'Workforce and community organizations',
    desc: 'Connect adult participants to a practical bridge cohort designed around employer relevance, support coordination, and advancement.',
    cta: 'Discuss a Rebuild Cohort',
    to: '/partner',
  },
  {
    name: 'Employers',
    desc: 'Help validate the roles, participate in capstone experiences, and meet prepared emerging talent through an accountable interview model.',
    cta: 'Become an Employer Partner',
    to: '/partner',
  },
  {
    name: 'Funding and state partners',
    desc: 'Support a measurable workforce model designed for credible reporting, employer linkage, and responsible scale.',
    cta: 'Request an Institutional Briefing',
    to: '/partner',
  },
] as const

export function Partnership() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-snow py-16 lg:py-24" aria-labelledby="partnership-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1fr_0.5fr] lg:gap-16 xl:gap-20 lg:items-start">

          {/* DOM order 1: heading — first on mobile (above rows), right column on desktop */}
          <motion.h2
            id="partnership-heading"
            className="text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic mb-12 lg:mb-0 lg:col-start-2 lg:row-start-1 lg:sticky lg:top-24 lg:pt-6"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: EASE }}>
            A pathway is built by institutions that are ready to be accountable together.
          </motion.h2>

          {/* DOM order 2: partner rows — left column on desktop */}
          <div className="lg:col-start-1 lg:row-start-1">
            {PARTNERS.map(({ name, desc, cta, to }, i) => (
              <motion.div
                key={name}
                className="border-t border-sediment/25 py-8 lg:py-9"
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: i * 0.065, ease: EASE }}>
                <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1.5 lg:gap-10 mb-3">
                  <h3
                    className="text-[1.125rem] lg:text-[1.25rem] leading-[1.2] tracking-[-0.02em] text-anthracite italic"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {name}
                  </h3>
                  <Link
                    to={to}
                    className="flex-shrink-0 inline-flex items-center gap-2 text-[13px] text-datum tracking-[-0.01em] group self-start"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {cta}
                    <span
                      className="transition-transform duration-150 group-hover:translate-x-1"
                      aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
                <p
                  className="text-[14px] text-anthracite/60 leading-[1.7]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {desc}
                </p>
              </motion.div>
            ))}
            <div className="border-t border-sediment/25" aria-hidden="true" />
          </div>

        </div>
      </div>
    </section>
  )
}
