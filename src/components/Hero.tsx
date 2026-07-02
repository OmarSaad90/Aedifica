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
      className="relative min-h-[90vh] bg-snow flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full py-16">
        <div className="lg:flex lg:items-start lg:justify-between lg:gap-16 xl:gap-24">
        <div className="max-w-[640px]">

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

        <motion.div
          className="flex flex-wrap gap-3"
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={reduce ? undefined : { duration: 0.45, delay: 0.44, ease: EASE }}
        >
          <Link href="/partner"
            className="inline-flex items-center bg-patina text-white text-[13px] font-medium px-6 py-3 tracking-[-0.01em] hover:bg-patina/85 transition-colors duration-150 active:scale-[0.98] whitespace-nowrap"
          >
            Partner with Aedifica
          </Link>
          <Link href="/services"
            className="inline-flex items-center border border-datum text-datum text-[13px] font-medium px-6 py-3 tracking-[-0.01em] hover:bg-datum/6 transition-colors duration-150 active:scale-[0.98] whitespace-nowrap"
          >
            See the programs
          </Link>
        </motion.div>

        </div>

        <HeroPathway />

        </div>
      </div>
    </section>
  )
}
