'use client'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE     = [0.25, 0.1, 0.25, 1] as const
const SPRING   = [0.32, 0.72, 0, 1] as const

export function WhatWeDo() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-snow py-12 lg:py-16" aria-labelledby="whatwedo-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Intro: full width, so these two paragraphs get the whole container
            instead of wrapping tightly inside a narrow sidebar column. */}
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
            § 02 — What we do
          </p>
        </motion.div>

        <motion.h2
          id="whatwedo-heading"
          className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.12] tracking-[-0.025em] text-anthracite italic mb-8 max-w-[26ch] [text-wrap:balance]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 22 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}
        >
          Aedifica builds construction-management pathways, and{' '}
          <span className="text-wine">the people who walk them.</span>
        </motion.h2>

        <motion.p
          className="text-[15.5px] text-anthracite/75 leading-[1.7] max-w-[75ch] mb-5"
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
          className="text-[15.5px] text-anthracite/75 leading-[1.7] max-w-[75ch] mb-5"
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

        {/* What scholars leave with — flows directly under the intro as part of the same text. */}
        <motion.div
          className="max-w-[75ch]"
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}
        >
          <p
            className="text-[14.5px] text-anthracite/85 leading-[1.65] mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Scholars leave with the vocabulary of{' '}
            <strong className="text-anthracite font-medium">scope, schedule, cost, safety, and quality</strong>;
            a credential that articulates; and a capstone validated by people who run real projects.
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
    </section>
  )
}
