'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { HeroPathway } from './HeroPathway'

const EASE   = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1]   as const

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      className="relative bg-snow overflow-hidden min-h-[calc(100vh-130px)] flex items-center"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 lg:py-16">
        <div className="lg:flex lg:items-start lg:gap-8 xl:gap-10">
        <div className="lg:flex-1">

        <motion.h1
          id="hero-heading"
          className="text-[3rem] lg:text-[4.5rem] xl:text-[6rem] leading-[1.05] tracking-[-0.03em] text-anthracite italic pb-1 mb-8 lg:mb-9"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 28 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.7, delay: 0.1, ease: SPRING }}
        >
          <span className="block whitespace-nowrap mb-2 lg:mb-3">New Jersey is being rebuilt.</span>
          <span className="block text-wine">Its builders are not.</span>
        </motion.h1>

        <motion.p
          className="text-[16.5px] lg:text-[18px] text-anthracite/70 leading-[1.65] max-w-[62ch] mb-9 lg:mb-11"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.55, delay: 0.26, ease: EASE }}
        >
          The rebuild is already funded: transportation, airport expansion, resiliency, electrification, and public works across New Jersey and the New York metro region. Those projects need more than engineers and tradespeople. They need <strong className="font-semibold text-wine">construction managers</strong>: the coordinators, estimators, schedulers, document-control professionals, safety leaders, and field supervisors who turn funding into finished work.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 lg:mt-1"
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.45, delay: 0.34, ease: EASE }}
        >
          <Link href="/partner"
            className="inline-flex items-center bg-anthracite text-white text-[13.5px] font-medium px-6 py-3.5 tracking-[-0.01em] hover:bg-anthracite/85 transition-colors duration-150 active:scale-[0.98] whitespace-nowrap"
          >
            Partner with Aedifica
          </Link>
          <Link href="/programs#compare"
            className="inline-flex items-center border border-anthracite text-anthracite text-[13.5px] font-medium px-6 py-3.5 tracking-[-0.01em] hover:bg-anthracite/6 transition-colors duration-150 active:scale-[0.98] whitespace-nowrap"
          >
            Compare the Programs
          </Link>
        </motion.div>

        </div>

        <HeroPathway />

        </div>

      </div>
    </section>
  )
}
