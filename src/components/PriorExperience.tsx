'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { HardHat, Handshake, MapPin, type Icon } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const

const TRACK_RECORD: { Icon: Icon; label: string; body: string }[] = [
  {
    Icon: HardHat,
    label: 'Practitioner-led',
    body: 'Led by construction-management practitioners with $1B+ of delivered infrastructure behind them and a teaching home at Stevens Institute of Technology.',
  },
  {
    Icon: Handshake,
    label: 'Employer-connected',
    body: "Every credential is backed by an employer-validated capstone. Aedifica doesn't start a cohort until an employer has committed to interview its completers.",
  },
  {
    Icon: MapPin,
    label: 'Funded demand',
    body: "Built around New Jersey's green building, apprenticeship, and digital-construction investments, anchored in real, funded demand, not hypotheticals.",
  },
]

export function PriorExperience() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone py-12 lg:py-18" aria-labelledby="prior-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 xl:gap-20 lg:items-start">

          {/* Left: image */}
          <motion.div
            className="mb-10 lg:mb-0 overflow-hidden"
            initial={reduce ? undefined : { opacity: 0, x: -20 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
            <img
              src="/images/stem-workshop.jpg"
              alt="Students in structured STEM and construction workshop, New Jersey"
              width={2048}
              height={1536}
              className="w-full h-auto object-cover"
              style={{ filter: 'grayscale(20%) contrast(1.05)' }}
              loading="lazy"
            />
          </motion.div>

          {/* Right: text (preserves right-side alignment) */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              <span className="w-7 h-[2px] bg-datum flex-shrink-0" aria-hidden="true" />
              <p
                className="text-[13.5px] uppercase tracking-[0.14em] text-datum font-medium leading-none"
                style={{ fontFamily: 'var(--font-body)' }}>
                Track record
              </p>
            </motion.div>

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
              They are not presented as Aedifica workforce placement outcomes.
            </motion.p>

            <motion.div
              className="mt-10"
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.24, ease: EASE }}>
              <Link href="/impact"
                className="inline-flex items-center justify-center bg-patina text-white text-[14px] tracking-[-0.01em] px-6 py-3 active:scale-[0.98] transition-transform duration-100 hover:bg-patina/85"
                style={{ fontFamily: 'var(--font-body)' }}>
                Review Projects &amp; Impact
              </Link>
            </motion.div>
          </div>

        </div>

        {/* Track-record trio */}
        <div className="mt-14 lg:mt-16 pt-10 lg:pt-12 border-t border-sediment/25">
          <div className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x divide-sediment/25 gap-8 sm:gap-0">
            {TRACK_RECORD.map(({ Icon: IconComp, label, body }, i) => (
              <motion.div
                key={label}
                className="sm:px-8 first:sm:pl-0 last:sm:pr-0"
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: i * 0.08, ease: EASE }}>
                <IconComp size={22} weight="regular" className="text-datum mb-4" aria-hidden={true} />
                <h3
                  className="text-[1rem] text-anthracite font-medium tracking-[-0.01em] mb-2.5"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {label}
                </h3>
                <p
                  className="text-[13.5px] text-anthracite/70 leading-[1.65]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
