import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { BackgroundPaths } from './BackgroundPaths'

const EASE   = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1]   as const

export function Hero() {
  const reduce = useReducedMotion()

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
          className="text-[2.5rem] lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic pb-1 mb-7 max-w-[26ch]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 28 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.7, delay: 0.22, ease: SPRING }}
        >
          New Jersey needs a construction-management workforce pathway.{' '}
          We are <span className="text-datum">building</span> it.
        </motion.h1>

        <motion.p
          className="text-[15.5px] text-anthracite/65 leading-[1.65] max-w-[54ch] mb-9"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}
        >
          Aedifica connects overlooked talent, education institutions, workforce
          partners, and employers through disciplined, credential-aligned programs
          designed for credible entry, advancement, and measurable outcomes.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 mb-6"
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.45, delay: 0.47, ease: EASE }}
        >
          <Link
            to="/partner"
            className="inline-flex items-center bg-patina text-white text-[13px] font-medium px-6 py-3 tracking-[-0.01em] hover:bg-patina/85 transition-colors duration-150 active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            Partner with Aedifica
          </Link>
          <Link
            to="/services/rebuild"
            className="inline-flex items-center border border-datum text-datum text-[13px] font-medium px-6 py-3 tracking-[-0.01em] hover:bg-datum/6 transition-colors duration-150 active:scale-[0.98] whitespace-nowrap cursor-pointer"
          >
            Explore Aedifica Rebuild
          </Link>
        </motion.div>

        <motion.p
          className="text-[11.5px] text-anthracite/40 leading-relaxed max-w-[50ch]"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.4, delay: 0.58, ease: EASE }}
        >
          Initial Year 1 focus: Rebuild adult bridge cohorts and Launch grant
          strategy services. Expansion offerings follow credible outcome evidence.
        </motion.p>

      </div>
    </section>
  )
}
