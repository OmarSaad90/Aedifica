'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { GraduationCap, UsersThree, Briefcase, Bank, type Icon } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const

type Partner = {
  Icon: Icon
  name: string
  desc: string
  cta: string
  to: string
}

const PARTNERS: Partner[] = [
  {
    Icon: GraduationCap,
    name: 'Education institutions',
    desc: 'Build student pathways connecting construction learning, career readiness, future credentials, and articulation possibilities.',
    cta: 'Discuss an Education Partnership',
    to: '/partner',
  },
  {
    Icon: UsersThree,
    name: 'Workforce and community organizations',
    desc: 'Connect adult participants to a practical bridge cohort designed around employer relevance, support coordination, and advancement.',
    cta: 'Discuss a Rebuild Cohort',
    to: '/partner',
  },
  {
    Icon: Briefcase,
    name: 'Employers',
    desc: 'Help validate the roles, participate in capstone experiences, and meet prepared emerging talent through an accountable interview model.',
    cta: 'Become an Employer Partner',
    to: '/partner',
  },
  {
    Icon: Bank,
    name: 'Funding and state partners',
    desc: 'Support a measurable workforce model designed for credible reporting, employer linkage, and responsible scale.',
    cta: 'Request an Institutional Briefing',
    to: '/partner',
  },
]

export function Partnership() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-snow py-12 lg:py-18" aria-labelledby="partnership-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1fr_0.5fr] lg:gap-16 xl:gap-20 lg:items-start">

          {/* DOM order 1: heading + photo — first on mobile, right column on desktop */}
          <div className="lg:col-start-2 lg:row-start-1 lg:sticky lg:top-24 lg:pt-6">
            <motion.h2
              id="partnership-heading"
              className="text-[2.25rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic mb-10 lg:mb-8"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: EASE }}>
              A pathway is built by institutions that are ready to be accountable together.
            </motion.h2>

            {/* Placeholder image — replace with real photo */}
            <motion.div
              className="mt-8 lg:mt-0 overflow-hidden"
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: 0.15, ease: EASE }}>
              <img
                src="/images/partnership-event.jpg"
                alt="Aedifica partnership event with students and educators, New Jersey"
                width={2048}
                height={1536}
                className="w-full h-auto object-cover"
                style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* DOM order 2: partner rows — left column on desktop */}
          <div className="lg:col-start-1 lg:row-start-1">
            {PARTNERS.map(({ Icon: IconComp, name, desc, cta, to }, i) => (
              <motion.div
                key={name}
                className="border-t border-sediment/25 py-8 lg:py-9"
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: i * 0.065, ease: EASE }}>

                <IconComp
                  size={36}
                  weight="regular"
                  className="text-ink-soft mb-4"
                  aria-hidden={true}
                />

                <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-1.5 lg:gap-10 mb-3">
                  <h3
                    className="text-[1rem] lg:text-[1.0625rem] leading-[1.25] tracking-[-0.01em] text-anthracite font-medium"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {name}
                  </h3>
                  <Link href={to}
                    className="flex-shrink-0 inline-flex items-center gap-2 text-[13px] text-anthracite tracking-[-0.01em] group self-start"
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
                  className="text-[14px] text-anthracite/70 leading-[1.7]"
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
