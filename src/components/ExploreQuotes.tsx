'use client'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const QUOTES = [
  'When we mess up, this only sets you up for a new door to open.',
  'It is as important to learn as to succeed.',
  'Engineering is designing, creating, testing, and improving solutions.',
  'Engineering means designing for sustainability and using serious critical thinking skills.',
] as const

const QUOTE_SIZE = 'text-[1.625rem] lg:text-[1.875rem] leading-[1.25]'

export function ExploreQuotes() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone py-14 lg:py-20" aria-labelledby="quotes-h2">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12 lg:mb-16">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            <p className="text-[12px] uppercase tracking-[0.14em] text-ink-soft font-medium" style={{ fontFamily: 'var(--font-body)' }}>Middle school</p>
          </motion.div>
          <motion.h2
            id="quotes-h2"
            className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.07] tracking-[-0.03em] text-anthracite italic [text-wrap:balance] scroll-mt-24 mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            Explore
          </motion.h2>
        </div>

        {/* CSS columns let the quotes flow and interlock by height instead of lining up in rows. */}
        <div className="columns-1 lg:columns-2 lg:gap-x-14 xl:gap-x-20">
          {QUOTES.map((text, i) => (
            <motion.div
              key={text}
              className="break-inside-avoid border-t border-sediment/25 pt-6 pb-10 lg:pb-12"
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.45, delay: Math.min(i * 0.06, 0.3), ease: EASE }}>
              <p
                className={`text-anthracite italic tracking-[-0.02em] mb-4 [text-wrap:balance] ${QUOTE_SIZE}`}
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                "{text}"
              </p>
              <p
                className="text-[11.5px] text-anthracite/60 uppercase tracking-[0.1em]"
                style={{ fontFamily: 'var(--font-body)' }}>
                A 2025 Building Bridges student · Explore
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
