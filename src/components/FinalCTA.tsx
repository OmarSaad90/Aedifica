import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

export function FinalCTA() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-datum py-24 lg:py-32" aria-labelledby="final-cta-heading">
      <div className="max-w-[900px] mx-auto px-6 text-center">

        <motion.h2
          id="final-cta-heading"
          className="text-[2.5rem] lg:text-[3.75rem] xl:text-[4.75rem] leading-[1.06] tracking-[-0.03em] text-white italic mb-8 lg:mb-10"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 28 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.7, ease: SPRING }}>
          New Jersey can build the next generation of construction leadership from talent
          already here.
        </motion.h2>

        <motion.p
          className="text-[15.5px] text-white/70 leading-[1.72] mb-10 max-w-[52ch] mx-auto"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.55, delay: 0.12, ease: EASE }}>
          The pathway requires committed partners. Speak with Aedifica about recruitment,
          funding, employer participation, educational pathways, or future outcome reporting.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.5, delay: 0.22, ease: EASE }}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white text-datum text-[14px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-white/92"
            style={{ fontFamily: 'var(--font-body)' }}>
            Start a Partnership Conversation
          </a>
          <a
            href="#briefing"
            className="inline-flex items-center justify-center border border-white/35 text-white text-[14px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-white/10"
            style={{ fontFamily: 'var(--font-body)' }}>
            Request an Institutional Briefing
          </a>
        </motion.div>

      </div>
    </section>
  )
}
