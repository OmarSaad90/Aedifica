'use client'
import { motion, useReducedMotion } from 'motion/react'
import { ExploreQuotes } from '../components/ExploreQuotes'
import { PathwayQuotes } from '../components/PathwayQuotes'

const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

export function Experience() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[42vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-20"
        aria-labelledby="experience-h1">

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="lg:max-w-[62ch]">

            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-8 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
              Scholar Experience
            </motion.span>

            <motion.h1
              id="experience-h1"
              className="text-[2.25rem] lg:text-[3.5rem] xl:text-[4.25rem] leading-[1.03] tracking-[-0.032em] text-white italic mb-8 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              In their own words: what the pathway feels like from inside.
            </motion.h1>

          </div>
        </div>
      </section>

      <ExploreQuotes />
      <PathwayQuotes />

      {/* ── Closing note ── bg-snow. PathwayQuotes ends dark and the footer is dark
          too, so this also does the job of a light buffer between them. */}
      <section className="bg-snow py-12 lg:py-16" aria-label="Source note">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="max-w-[46rem] mx-auto text-center border-t border-sediment/25 pt-8"
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={{ once: true, margin: '-60px 0px' }}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            <p
              className="text-[12.5px] italic text-anthracite/72 leading-[1.65]"
              style={{ fontFamily: 'var(--font-body)' }}>
              Only genuine, permission-cleared reflections are published here. Voices are drawn from
              post-program surveys of Aedifica pre-college and community deliveries.
            </p>
          </motion.div>
        </div>
      </section>

    </main>
  )
}
