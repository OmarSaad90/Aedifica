'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE     = [0.25, 0.1, 0.25, 1] as const
const SPRING   = [0.32, 0.72, 0, 1] as const

const DOORS = [
  {
    label: 'School district',
    title: 'Districts & high schools',
    body: 'Construction-management pathways, co-authored with your teachers.',
    cta: 'Explore Pathway',
    to: '/programs/pathway',
    border: 'border-wine',
    text: 'text-wine',
    dot: 'bg-wine',
    tint: 'hover:bg-wine/[0.05]',
  },
  {
    label: 'Vocational / trade school',
    title: 'Trade & vo-tech schools',
    body: 'A construction-management layer on the program you already run.',
    cta: 'See the overlay',
    to: '/trade-schools',
    border: 'border-clay',
    text: 'text-clay',
    dot: 'bg-clay',
    tint: 'hover:bg-clay/[0.05]',
  },
  {
    label: 'Employer / contractor',
    title: 'Employers & contractors',
    body: 'Capstone-vetted candidates and a defined interview commitment.',
    cta: 'See the Pipeline',
    to: '/programs/talent-pipeline',
    border: 'border-ink-soft',
    text: 'text-ink-soft',
    dot: 'bg-ink-soft',
    tint: 'hover:bg-ink-soft/[0.05]',
  },
  {
    label: 'Workforce board / agency',
    title: 'Boards & agencies',
    body: 'Institutional pathway design and funded adult cohorts.',
    cta: 'Explore Launch',
    to: '/programs/launch',
    border: 'border-terracotta',
    text: 'text-terracotta-deep',
    dot: 'bg-terracotta',
    tint: 'hover:bg-terracotta/[0.06]',
  },
  {
    label: 'Parent / family',
    title: 'Families',
    body: 'A real path into these careers for your child, at no cost.',
    cta: 'For Families',
    to: '/families',
    border: 'border-blush',
    text: 'text-terracotta-deep',
    dot: 'bg-blush',
    tint: 'hover:bg-blush/[0.08]',
  },
] as const

export function FindYourDoor() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone border-t border-sediment/20 py-14 lg:py-20" aria-labelledby="doors-heading">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="flex items-center gap-3 mb-5"
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.4, ease: EASE }}
        >
          <p
            className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium leading-none"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Start where you are
          </p>
        </motion.div>

        <motion.h2
          id="doors-heading"
          className="text-[1.875rem] lg:text-[2.5rem] leading-[1.15] tracking-[-0.025em] text-anthracite italic mb-12 lg:mb-14 max-w-[22ch] [text-wrap:balance]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 22 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}
        >
          Tell us who you are. We&rsquo;ll point you to the right door.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {DOORS.map(({ label, title, body, cta, to, border, text, dot, tint }, i) => (
            <motion.div
              key={label}
              className={i === DOORS.length - 1 ? 'sm:col-span-2 lg:col-span-1' : undefined}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: i * 0.07, ease: SPRING }}
            >
              <Link
                href={to}
                className={`group flex h-full flex-col justify-between border-2 ${border} ${tint} px-6 py-7 transition-colors duration-150`}
              >
                <div>
                  <span className="flex items-center gap-2 mb-4">
                    <span className={`w-[7px] h-[7px] rotate-45 flex-shrink-0 ${dot}`} aria-hidden="true" />
                    <span
                      className={`text-[10px] uppercase tracking-[0.13em] font-medium ${text}`}
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {label}
                    </span>
                  </span>
                  <h3
                    className="text-[1.1875rem] leading-[1.2] tracking-[-0.015em] text-anthracite italic mb-3"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[13px] text-anthracite/75 leading-[1.55] mb-7"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {body}
                  </p>
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.09em] font-medium ${text}`}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {cta}
                  <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
