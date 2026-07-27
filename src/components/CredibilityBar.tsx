'use client'
import { motion, useReducedMotion } from 'motion/react'
import { Buildings, ArrowCircleUp, Eye, MapPin, type Icon } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '-40px 0px' } as const
const EASE     = [0.25, 0.1, 0.25, 1] as const
const SPRING   = [0.32, 0.72, 0, 1]   as const

type Pillar = {
  Icon: Icon
  label: string
  subtext: string
}

const PILLARS: Pillar[] = [
  {
    Icon: Buildings,
    label: 'Employer-informed design',
    subtext: 'Role relevance and interview commitments before cohort launch.',
  },
  {
    Icon: ArrowCircleUp,
    label: 'Advancement-focused preparation',
    subtext: 'Realistic entry roles with documented progression routes.',
  },
  {
    Icon: Eye,
    label: 'Outcome transparency',
    subtext: 'Completion, credential, interview, placement, and retention results reported distinctly.',
  },
  {
    Icon: MapPin,
    label: 'New Jersey focus',
    subtext: 'Designed for the institutions, communities, and employers of the NJ / NY metropolitan construction market.',
  },
]

function PillarItem({ Icon: IconComp, label, subtext }: Pillar) {
  return (
    <div>
      <IconComp
        size={20}
        weight="regular"
        className="text-ink-soft mb-3"
        aria-hidden={true}
      />
      <p
        className="text-[14px] text-anthracite font-medium mb-2 leading-snug tracking-[-0.01em]"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {label}
      </p>
      <p
        className="text-[13px] text-anthracite/70 leading-[1.65]"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {subtext}
      </p>
    </div>
  )
}

export function CredibilityBar() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone py-14 relative z-10 -mt-10 lg:-mt-14 border-t border-anthracite/15" aria-label="Program commitments">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Eyebrow */}
        <motion.p
          className="text-center text-[11.5px] uppercase tracking-[0.18em] text-anthracite/55 mb-10 leading-none"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={reduce ? undefined : { opacity: 0, y: 8 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.4, ease: EASE }}
        >
          A Pathway Built Around Accountability
        </motion.p>

        {/* Desktop: single row, dividers via divide-x */}
        <div className="hidden lg:flex items-start divide-x divide-sediment/30">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={i}
              className="flex-1 px-8 first:pl-0 last:pr-0"
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: i * 0.07, ease: SPRING }}
            >
              <PillarItem {...pillar} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: 2×2 grid */}
        <div className="grid grid-cols-2 lg:hidden">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={i}
              className={[
                i % 2 === 0 ? 'pr-5 border-r border-sediment/25' : 'pl-5',
                i < 2       ? 'pb-8 border-b border-sediment/25' : 'pt-8',
              ].join(' ')}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.45, delay: i * 0.06, ease: SPRING }}
            >
              <PillarItem {...pillar} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
