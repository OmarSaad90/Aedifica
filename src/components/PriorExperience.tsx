import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const

export function PriorExperience() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone py-12 lg:py-18" aria-labelledby="prior-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-start">

          {/* Left: placeholder image — replace with Stevens Institute / Bridging Brilliance photo */}
          <motion.div
            className="hidden lg:block overflow-hidden"
            initial={reduce ? undefined : { opacity: 0, x: -20 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
            <img
              src="/images/stem-workshop.jpg"
              alt=""
              className="w-full h-auto object-cover"
              style={{ filter: 'grayscale(20%) contrast(1.05)' }}
              loading="lazy"
            />
          </motion.div>

          {/* Right: text (preserves right-side alignment) */}
          <div>
            <motion.h2
              id="prior-heading"
              className="text-[1.875rem] lg:text-[2.5rem] xl:text-[2.875rem] leading-[1.15] tracking-[-0.025em] text-anthracite italic mb-8 lg:mb-10"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
              Built on relevant educational delivery experience. Designed to prove future workforce
              outcomes.
            </motion.h2>

            <motion.p
              className="text-[15px] text-anthracite/75 leading-[1.72]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: 0.1, ease: EASE }}>
              Aedifica's expansion pathway design is informed by prior educational delivery
              experience: pre-college engineering workshops for high-school students delivered
              through Stevens Institute of Technology and the Hillside Innovation Academy /
              Bridging Brilliance STEM implementation. These experiences inform instructional
              design, student engagement, and community partnership readiness.
            </motion.p>

            <motion.p
              className="text-[13.5px] text-anthracite/60 leading-[1.7] mt-6"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.18, ease: EASE }}>
              They are not presented as Aedifica workforce placement outcomes. Those results will
              be measured and reported only after Aedifica programming is delivered.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.24, ease: EASE }}>
              <Link
                to="/impact"
                className="inline-flex items-center justify-center bg-patina text-white text-[14px] tracking-[-0.01em] px-6 py-3 active:scale-[0.98] transition-transform duration-100 hover:bg-patina/85"
                style={{ fontFamily: 'var(--font-body)' }}>
                Review Projects &amp; Impact
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
