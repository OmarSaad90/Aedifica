import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'motion/react'

const VIEWPORT    = { once: true, margin: '-70px 0px' } as const
const EASE        = [0.25, 0.1, 0.25, 1] as const
const SPRING_EASE = [0.32, 0.72, 0, 1] as const

const ITEMS = [
  {
    num:   '01',
    title: 'Prepare learners for relevant work',
    body:  'Practical construction-management literacy: documentation, digital tools, estimating foundations, supervisory communication, capstone experience, and interview readiness.',
  },
  {
    num:   '02',
    title: 'Align institutions around delivery',
    body:  'Launch helps organizations pursue workforce and apprenticeship-related funding with a credible program strategy and measurable outcomes framework.',
  },
  {
    num:   '03',
    title: 'Publish what happens next',
    body:  'Future cohort outcomes published clearly: credentials achieved, who interviewed, employment categories, retention, and apprenticeship progression.',
  },
] as const

export function AedificaModel() {
  const reduce     = useReducedMotion()
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 85%', 'end 65%'],
  })
  const springY     = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 })
  const spineScaleY = useTransform(springY, [0, 1], [0, 1])

  return (
    <section ref={sectionRef} className="bg-bone py-16 lg:py-24" aria-labelledby="model-heading">
      <div className="max-w-7xl mx-auto px-6">

        <div className="lg:grid lg:grid-cols-[5fr_7fr] lg:gap-16 xl:gap-20 lg:items-start">

          {/* Left: sticky image — desktop only */}
          <motion.div
            className="hidden lg:block lg:sticky lg:top-24 overflow-hidden"
            initial={reduce ? undefined : { opacity: 0, x: -20 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
            <img
              src="/images/site-tour.jpg"
              alt="Construction site tour, New Jersey"
              className="w-full h-auto object-cover"
              style={{ filter: 'grayscale(15%) contrast(1.08)' }}
              loading="lazy"
            />
          </motion.div>

          {/* Right: intro + spine + items */}
          <div>

            {/* Section intro */}
            <div className="max-w-[44rem] mx-auto text-center lg:text-left lg:max-w-none lg:mx-0 mb-14 lg:mb-12">
              <h2
                id="model-heading"
                className="text-[1.875rem] lg:text-[2.625rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              >
                Workforce architecture, not isolated training.
              </h2>
              <p
                className="text-[15.5px] text-anthracite/70 leading-[1.65]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Aedifica designs the connections a pathway requires.
                Training matters. What surrounds training determines whether it leads somewhere.
              </p>
            </div>

            {/* Spine + item rows */}
            <div className="max-w-[52rem] mx-auto lg:max-w-none lg:mx-0">
              <div className="relative">

                {/* Scroll-driven vertical spine — desktop only */}
                <div
                  className="hidden lg:block absolute left-0 top-0 bottom-0 w-px overflow-hidden"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-sediment/20" />
                  <motion.div
                    className="absolute inset-0 bg-datum origin-top"
                    style={{ scaleY: reduce ? 1 : spineScaleY }}
                  />
                </div>

                {/* Items */}
                <div className="lg:pl-12">
                  {ITEMS.map(({ num, title, body }, i) => (
                    <motion.div
                      key={num}
                      className="relative flex items-start gap-6 lg:gap-10 py-6 lg:py-8 border-t border-sediment/25"
                      initial={reduce ? undefined : { opacity: 0, x: -16 }}
                      whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                      viewport={reduce ? undefined : VIEWPORT}
                      transition={reduce ? undefined : { duration: 0.6, delay: i * 0.1, ease: SPRING_EASE }}
                    >
                      {/* Spine dot — activates as item enters viewport */}
                      <motion.div
                        className="hidden lg:block absolute w-2 h-2 bg-bone border border-sediment/40"
                        style={{ left: 'calc(-3rem - 4px)', top: '50%', transform: 'translateY(-50%)' }}
                        initial={reduce ? undefined : { borderColor: 'rgb(199 179 119 / 0.3)' }}
                        whileInView={reduce ? undefined : {
                          borderColor: 'var(--color-datum)',
                          backgroundColor: 'rgb(102 103 171 / 0.15)',
                        }}
                        viewport={{ once: true, margin: '-40px 0px' }}
                        transition={reduce ? undefined : { duration: 0.3, delay: 0.15 + i * 0.05, ease: EASE }}
                        aria-hidden="true"
                      />

                      {/* Display number — watermark, not scaffold */}
                      <span
                        className="flex-shrink-0 select-none"
                        style={{
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 300,
                          fontSize: 'clamp(3.5rem, 7vw, 6rem)',
                          color: 'rgb(102 103 171 / 0.32)',
                          lineHeight: '0.85',
                          marginTop: '2px',
                        }}
                        aria-hidden="true"
                      >
                        {num}
                      </span>

                      <div className="pt-1.5 min-w-0">
                        <h3
                          className="text-[1.0625rem] lg:text-[1.1875rem] font-semibold text-anthracite tracking-[-0.015em] mb-3 leading-snug"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {title}
                        </h3>
                        <p
                          className="text-[13.5px] text-anthracite/70 leading-[1.68] max-w-[55ch]"
                          style={{ fontFamily: 'var(--font-body)' }}
                        >
                          {body}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  <div className="border-t border-sediment/25" aria-hidden="true" />
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
