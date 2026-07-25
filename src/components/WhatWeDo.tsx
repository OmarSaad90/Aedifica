'use client'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE     = [0.25, 0.1, 0.25, 1] as const
const SPRING   = [0.32, 0.72, 0, 1] as const

const VOCABULARY = ['Scope', 'Schedule', 'Cost', 'Safety', 'Quality'] as const

export function WhatWeDo() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-snow py-14 lg:py-20" aria-labelledby="whatwedo-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1fr_1.35fr] lg:gap-16 xl:gap-20 lg:items-start">

          {/* Text column: heading + body. Sits first in the DOM (so mobile and
              screen readers meet it before the box), visually moved to the right
              on desktop via order, mirroring TheGap's text-left/box-right so the
              two stacked sections alternate instead of repeating the same shape. */}
          <div className="lg:order-2">
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}
            >
              <span className="w-7 h-[2px] bg-datum flex-shrink-0" aria-hidden="true" />
              <p
                className="text-[13.5px] uppercase tracking-[0.14em] text-datum font-medium leading-none"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                What we do
              </p>
            </motion.div>

            <motion.h2
              id="whatwedo-heading"
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.12] tracking-[-0.025em] text-anthracite italic mb-8 max-w-[20ch] [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}
            >
              Aedifica builds construction-management pathways, and{' '}
              <span className="text-datum">the people who walk them.</span>
            </motion.h2>

            <motion.p
              className="text-[15.5px] text-anthracite/75 leading-[1.7] max-w-[62ch] mb-5"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.06, ease: EASE }}
            >
              We serve two sides of one gap, and both are first-class audiences: the institutions
              building the pathway, and the scholars walking it. We start with middle-school students
              discovering how the built world works, and continue through high-school tracks,
              institutional pathway design, and adult bridge cohorts for people re-entering the
              workforce. We work through four channels: school districts, workforce boards and county
              colleges, employers, and vocational and trade schools, where we add a
              construction-management layer to programs they already run.
            </motion.p>

            <motion.p
              className="text-[15.5px] text-anthracite/75 leading-[1.7] max-w-[62ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}
            >
              We build it for people the traditional route never picked up: students from
              under-resourced schools, first-generation families, career changers, veterans, caregivers
              returning to work, and justice-impacted adults. Access is a design requirement here, not
              an outreach afterthought. Programs are free to scholars, funded through institutional
              partners, and taught by working professionals in construction management and engineering.
            </motion.p>
          </div>

          {/* Box column: what scholars leave with. Visually first on desktop
              (order-1, narrow track) so the section mirrors TheGap instead of
              repeating its text-left/box-right shape. */}
          <div className="mt-12 lg:mt-0 lg:order-1 lg:pt-[74px]">
            <motion.div
              className="border border-anthracite/12 px-7 py-8"
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}
            >
              <p
                className="text-[10.5px] uppercase tracking-[0.18em] text-datum mb-5 select-none leading-none"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                What scholars leave with
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {VOCABULARY.map((word) => (
                  <span
                    key={word}
                    className="text-[10.5px] uppercase tracking-[0.08em] px-2.5 py-1 border border-anthracite/20 text-anthracite/75"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {word}
                  </span>
                ))}
              </div>

              <p
                className="text-[14.5px] text-anthracite/85 leading-[1.6] pb-5 mb-5 border-b border-sediment/30"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                A credential that articulates, and a capstone validated by people who run real projects.
              </p>

              <p
                className="text-[1.0625rem] text-anthracite/80 italic leading-[1.45]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
              >
                They also leave with something harder to report and just as deliberate: the confidence
                to hold their own in a room full of professionals, and a foothold in a field that has
                rarely made room for them.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
