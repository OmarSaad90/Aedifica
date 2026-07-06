'use client'
import { motion, useReducedMotion } from 'motion/react'
import { Buildings, Users } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const PARTNERS = [
  'School districts',
  'Workforce boards',
  'Community organizations',
  'County colleges',
  'Employers and general contractors',
  'Public and philanthropic funders',
] as const

const LEARNERS = [
  'Middle and high school students',
  'Parents',
  'Adult learners',
  'Veterans',
  'Returning adults and mothers',
  'Justice-impacted individuals',
] as const

function AudienceGroup({
  Icon,
  color,
  title,
  items,
  delay,
}: {
  Icon: typeof Buildings
  color: string
  title: string
  items: readonly string[]
  delay: number
}) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={reduce ? undefined : VIEWPORT}
      transition={reduce ? undefined : { duration: 0.5, delay, ease: EASE }}>
      <div className="flex items-center gap-3.5 mb-8">
        <Icon size={32} weight="regular" className={color} aria-hidden={true} />
        <h3
          className={`text-[2rem] lg:text-[2.25rem] leading-none italic ${color}`}
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
          {title}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 border-t border-sediment/30">
        {items.map((item, i) => (
          <div
            key={item}
            className={`flex items-start gap-2.5 py-4 ${i < items.length - 1 ? 'border-b border-sediment/30' : ''} ${i >= items.length - 2 ? 'sm:border-b-0' : ''}`}>
            <span className={`flex-shrink-0 w-[7px] h-[7px] rotate-45 mt-[6px] ${color === 'text-datum' ? 'bg-datum' : 'bg-patina'}`} aria-hidden="true" />
            <p
              className="text-[14.5px] text-anthracite/85 leading-[1.45]"
              style={{ fontFamily: 'var(--font-body)' }}>
              {item}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export function WhoWeServe() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-snow py-12 lg:py-18" aria-labelledby="serve-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Centered intro */}
        <div className="max-w-[44rem] mx-auto text-center mb-14 lg:mb-16">
          <motion.div
            className="flex items-center justify-center gap-3 mb-5"
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            <span className="w-7 h-[2px] bg-datum flex-shrink-0" aria-hidden="true" />
            <p
              className="text-[13.5px] uppercase tracking-[0.14em] text-datum font-medium leading-none"
              style={{ fontFamily: 'var(--font-body)' }}>
              Who we serve
            </p>
          </motion.div>

          <motion.h2
            id="serve-heading"
            className="text-[1.875rem] lg:text-[2.5rem] leading-[1.15] tracking-[-0.025em] text-anthracite italic mb-5 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 22 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
            Built for two audiences.
          </motion.h2>
          <motion.p
            className="text-[15px] text-anthracite/70 leading-[1.65] max-w-[44ch] mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.09, ease: EASE }}>
            The institutions that fund the pathway, and the people who walk it.
          </motion.p>
        </div>

        {/* Partners left, learners right — divided so the two territories don't blur together */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0 lg:divide-x lg:divide-sediment/30">
          <div className="lg:pr-14 xl:pr-16">
            <AudienceGroup Icon={Buildings} color="text-datum" title="For partners" items={PARTNERS} delay={0} />
          </div>
          <div className="lg:pl-14 xl:pl-16">
            <AudienceGroup Icon={Users} color="text-patina" title="For learners" items={LEARNERS} delay={0.08} />
          </div>
        </div>

      </div>
    </section>
  )
}
