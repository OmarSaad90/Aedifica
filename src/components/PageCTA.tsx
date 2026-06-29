'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE   = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1]   as const

type CTAButton = { label: string; to: string }

type PageCTAProps = {
  id: string
  heading: string
  body: string
  primary: CTAButton
  secondary?: CTAButton
  color?: 'datum' | 'patina'
}

const STYLES = {
  datum:  { bg: 'bg-datum',  btn: 'bg-white text-datum hover:bg-white/92',  ghost: 'border border-white/30 text-white hover:bg-white/10' },
  patina: { bg: 'bg-patina', btn: 'bg-white text-patina hover:bg-white/92', ghost: 'border border-white/30 text-white hover:bg-white/10' },
}

export function PageCTA({ id, heading, body, primary, secondary, color = 'datum' }: PageCTAProps) {
  const reduce = useReducedMotion()
  const s = STYLES[color]

  return (
    <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-labelledby={id}>
      <div className="max-w-[1100px] mx-auto px-6">
        <div className={`${s.bg} px-10 pt-10 pb-10 lg:px-16 lg:pt-14 lg:pb-12 text-center rounded-t-[2rem]`}>

          <motion.h2
            id={id}
            className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.07] tracking-[-0.03em] text-white italic mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.7, ease: SPRING }}>
            {heading}
          </motion.h2>

          <motion.p
            className="text-[14px] text-white/90 leading-[1.68] mb-8 max-w-[52ch] mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.12, ease: EASE }}>
            {body}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.22, ease: EASE }}>
            <Link href={primary.to}
              className={`inline-flex items-center justify-center ${s.btn} text-[14px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-colors duration-100`}
              style={{ fontFamily: 'var(--font-body)' }}>
              {primary.label}
            </Link>
            {secondary && (
              <Link href={secondary.to}
                className={`inline-flex items-center justify-center ${s.ghost} text-[14px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-colors duration-100`}
                style={{ fontFamily: 'var(--font-body)' }}>
                {secondary.label}
              </Link>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
