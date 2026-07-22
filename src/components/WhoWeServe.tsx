'use client'
import { motion, useReducedMotion } from 'motion/react'
import { Buildings, Users } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const PARTNERS = [
  'School districts & high schools',
  'Middle schools & community organizations',
  'County colleges',
  'Workforce development boards',
  'State agencies & funders',
  'Municipalities & youth or summer programs',
  'General contractors & owners',
  'Apprenticeship sponsors & union locals',
  'Philanthropy & mission-aligned capital',
] as const

const LEARNERS = [
  'Middle-school students discovering the built world',
  'High-school students seeking a real track',
  'Adults returning to the workforce',
  'Career changers entering construction',
  'Veterans transitioning from service',
  'Justice-impacted talent rebuilding',
  'Caregivers re-entering employment',
  'First-generation students and families',
  'Parents and families exploring options for their child',
] as const

function AudienceGroup({
  Icon,
  color,
  tag,
  title,
  items,
  delay,
}: {
  Icon: typeof Buildings
  color: string
  tag: string
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
      <p
        className={`text-[10.5px] uppercase tracking-[0.16em] mb-3 ${color}`}
        style={{ fontFamily: 'var(--font-body)' }}>
        {tag}
      </p>
      <div className="flex items-start gap-3.5 mb-8">
        <Icon size={30} weight="regular" className={`${color} mt-1`} aria-hidden={true} />
        <h3
          className={`text-[1.625rem] lg:text-[1.875rem] leading-[1.12] italic ${color} [text-wrap:balance]`}
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
    <section id="serve-h2" className="bg-bone py-12 lg:py-18 scroll-mt-24" aria-labelledby="serve-heading">
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
            Two sides of one gap, served as first-class audiences.
          </motion.h2>
        </div>

        {/* Partners left, learners right — a drawn truss spans the gap between them
            instead of a plain rule, the two sides meeting at a keystone diamond. */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-0">
          <div className="lg:pr-14 xl:pr-16">
            <AudienceGroup Icon={Buildings} color="text-datum" tag="Institutions & employers" title="The people building the pathway" items={PARTNERS} delay={0} />
          </div>
          <div className="lg:pl-14 xl:pl-16">
            <AudienceGroup Icon={Users} color="text-patina" tag="Learners" title="The people walking the pathway" items={LEARNERS} delay={0.08} />
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 left-1/2 w-6 -translate-x-1/2 hidden lg:block"
            aria-hidden="true"
          >
            <svg
              className="h-full w-full"
              viewBox="0 0 24 400"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="4" y1="0" x2="4" y2="400"
                stroke="var(--color-anthracite)" strokeOpacity="0.16" strokeWidth="1"
                initial={reduce ? undefined : { pathLength: 0 }}
                whileInView={reduce ? undefined : { pathLength: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.9, ease: EASE, delay: 0.1 }}
              />
              <motion.line
                x1="20" y1="0" x2="20" y2="400"
                stroke="var(--color-anthracite)" strokeOpacity="0.16" strokeWidth="1"
                initial={reduce ? undefined : { pathLength: 0 }}
                whileInView={reduce ? undefined : { pathLength: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.9, ease: EASE, delay: 0.1 }}
              />
              <motion.polyline
                points="4,0 20,50 4,100 20,150 4,200 20,250 4,300 20,350 4,400"
                fill="none"
                stroke="var(--color-anthracite)" strokeOpacity="0.16" strokeWidth="1"
                initial={reduce ? undefined : { pathLength: 0 }}
                whileInView={reduce ? undefined : { pathLength: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 1.1, ease: EASE, delay: 0.3 }}
              />
            </svg>

            {/* Keystone — the two sides meeting at the truss's center joint */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              initial={reduce ? undefined : { scale: 0, opacity: 0 }}
              whileInView={reduce ? undefined : { scale: 1, opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE, delay: 0.85 }}
            >
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-8 h-8 rotate-45 bg-bone" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 block w-4 h-4 rotate-45 bg-anthracite" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
