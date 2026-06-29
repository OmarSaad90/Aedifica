'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { BackgroundPaths } from './BackgroundPaths'

const EASE   = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1]   as const

const AUDIENCES = [
  {
    label: 'Students and learners',
    cta: { text: 'See all programs', to: '/services' },
    alt: { text: 'Apply to a program', to: '/apply' },
  },
  {
    label: 'Schools and districts',
    cta: { text: 'Partner with Aedifica', to: '/partner' },
    alt: { text: 'Explore school programs', to: '/services/explore' },
  },
  {
    label: 'Workforce partners',
    cta: { text: 'Discuss a cohort partnership', to: '/partner' },
    alt: { text: 'View Aedifica Rebuild', to: '/services/rebuild' },
  },
  {
    label: 'Employers',
    cta: { text: 'Explore the Talent Pipeline', to: '/services/talent-pipeline' },
    alt: { text: 'Start a partnership conversation', to: '/partner' },
  },
] as const

export function Hero() {
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const current = AUDIENCES[active]

  return (
    <section
      className="relative min-h-[90vh] bg-snow flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <BackgroundPaths />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full py-16">

        <motion.p
          className="text-[10.5px] uppercase tracking-[0.22em] text-datum mb-7 leading-none"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}
        >
          Construction-Management Workforce Architecture · New Jersey
        </motion.p>

        <motion.h1
          id="hero-heading"
          className="text-[2.75rem] lg:text-[3.5rem] xl:text-[4.75rem] leading-[1.05] tracking-[-0.03em] text-anthracite italic pb-1 mb-7 max-w-[24ch] [text-wrap:balance]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 28 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.7, delay: 0.22, ease: SPRING }}
        >
          Construction shapes every community. Too many capable people never see a clear path into it.
        </motion.h1>

        <motion.p
          className="text-[15.5px] text-anthracite/70 leading-[1.65] max-w-[54ch] mb-9"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}
        >
          Aedifica builds education-to-workforce pathways that help students, adult learners, and institutions move from exposure to skills, from skills to credentials, and from credentials to opportunity.
        </motion.p>

        {/* Audience selector */}
        <motion.div
          className="mb-7"
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.45, delay: 0.44, ease: EASE }}
        >
          <p
            className="text-[11px] text-anthracite/65 uppercase tracking-[0.15em] mb-3 select-none"
            style={{ fontFamily: 'var(--font-body)' }}>
            I am a
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2" role="group" aria-label="Select your role">
            {AUDIENCES.map(({ label }, i) => (
              <button
                key={label}
                onClick={() => setActive(i)}
                aria-pressed={active === i}
                className={[
                  'py-2 text-[13.5px] tracking-[-0.01em] transition-colors duration-150',
                  active === i
                    ? 'text-anthracite border-b border-anthracite'
                    : 'text-anthracite/55 hover:text-anthracite/80',
                ].join(' ')}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* CTAs — swap with audience selection */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active}
            className="flex flex-wrap gap-3 mb-6"
            initial={reduce ? undefined : { opacity: 0, y: 8 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={reduce ? undefined : { duration: 0.2, ease: EASE }}
          >
            <Link href={current.cta.to}
              className="inline-flex items-center bg-patina text-white text-[13px] font-medium px-6 py-3 tracking-[-0.01em] hover:bg-patina/85 transition-colors duration-150 active:scale-[0.98] whitespace-nowrap"
            >
              {current.cta.text}
            </Link>
            <Link href={current.alt.to}
              className="inline-flex items-center border border-datum text-datum text-[13px] font-medium px-6 py-3 tracking-[-0.01em] hover:bg-datum/6 transition-colors duration-150 active:scale-[0.98] whitespace-nowrap"
            >
              {current.alt.text}
            </Link>
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  )
}
