import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

export function FinalCTA() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-labelledby="final-cta-heading">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="relative flex flex-col justify-between px-10 pt-14 pb-14 lg:px-16 lg:pt-16 lg:pb-16 text-center rounded-t-[2rem] overflow-hidden min-h-[480px] lg:min-h-[540px]">

          <img
            src="/images/site-tour.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: 'center 25%', filter: 'grayscale(15%) contrast(1.05) brightness(0.88)' }}
          />
          {/* Dark scrim top + bottom, transparent middle — faces show through */}
          <div className="absolute inset-0 bg-gradient-to-b from-anthracite/70 via-transparent to-anthracite/55" aria-hidden="true" />

          {/* Title — top */}
          <motion.h2
            id="final-cta-heading"
            className="relative z-10 text-[2.5rem] lg:text-[3.75rem] xl:text-[4.75rem] leading-[1.06] tracking-[-0.03em] text-white italic"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.7, ease: SPRING }}>
            New Jersey's next construction leaders are already here.
          </motion.h2>

          {/* Buttons — bottom */}
          <motion.div
            className="relative z-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.22, ease: EASE }}>
            <Link
              to="/partner"
              className="inline-flex items-center justify-center bg-white text-datum text-[14px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-white/92"
              style={{ fontFamily: 'var(--font-body)' }}>
              Start a Partnership Conversation
            </Link>
            <Link
              to="/partner"
              className="inline-flex items-center justify-center border border-white/65 text-white text-[14px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-white/10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Request an Institutional Briefing
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
