'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

// Heights on a sqrt scale (not linear) so the near-zero end stays visible instead of vanishing to 0px.
// Real values are always shown as text next to the bar; the shape is illustrative, never the only signal.
const SKYLINE = [
  { label: '2030 demand', value: '≈2,500', height: 132, fill: 'bg-wine' },
  { label: 'Annual pipeline', value: '≈120', height: 29, fill: 'bg-terracotta' },
  { label: 'Enrolled now', value: '≈60', height: 20, fill: 'bg-rule' },
  { label: 'Credentialed', value: '≈0', height: 5, fill: 'bg-blush' },
] as const

const PUBLICATIONS = [
  {
    id: 'R·01',
    title: 'The supervisor gap',
    body: 'The shortage of green-fluent construction managers in New Jersey: demand mapping, pipeline analysis, and pathway architecture. Aedifica Research, June 2026.',
    status: 'Published',
    statusCls: 'bg-white text-anthracite',
    dot: '●',
    dotCls: 'text-wine',
  },
  {
    id: 'R·02',
    title: 'Bridging Brilliance: a delivery case study',
    body: 'What a twelve-week, twenty-one-student community STEM intensive taught us about running cohorts inside a real school week: materials, staffing, showcase, and what we would change.',
    status: 'In progress',
    statusCls: 'bg-white/15 text-white',
    dot: '◐',
    dotCls: 'text-terracotta',
  },
  {
    id: 'R·03',
    title: 'Outcome definitions that survive an audit',
    body: 'A methods note: how Aedifica fixes placement, credential, wage, and articulation definitions before cohort one, and why same-definition reporting is the moat.',
    status: 'In progress',
    statusCls: 'bg-white/15 text-white',
    dot: '◐',
    dotCls: 'text-terracotta',
  },
  {
    id: 'R·04',
    title: 'The non-traditional advantage',
    body: 'Evidence review: why adults returning to work, veterans, and justice-impacted scholars out-persist traditional cohorts when wraparound design is done properly.',
    status: 'Planned',
    statusCls: 'border border-white/30 text-white/75',
    dot: '○',
    dotCls: 'text-white/45',
  },
  {
    id: 'R·05',
    title: 'Rebuild Cohort 1: outcomes report',
    body: 'The first same-definition outcomes publication: placement, credential attainment, wage at placement, and articulation for the inaugural Rebuild cohort.',
    status: 'Planned',
    statusCls: 'border border-white/30 text-white/75',
    dot: '○',
    dotCls: 'text-white/45',
  },
] as const

export function Research() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero ── */}
      <section className="bg-anthracite pt-24 lg:pt-28 pb-16 lg:pb-20" aria-labelledby="research-h1">
        <div className="max-w-7xl mx-auto px-6">
          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-8 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            § 12 — Aedifica Research
          </motion.span>

          <motion.h1
            id="research-h1"
            className="text-[2.25rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[1.02] tracking-[-0.032em] text-white italic mb-8 max-w-[18ch] [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Research that de-risks the decision.
          </motion.h1>

          <motion.p
            className="text-[15px] text-white/65 leading-[1.7] max-w-[62ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.32, ease: EASE }}>
            Institutions do not adopt pathways on enthusiasm. They adopt them on evidence. Aedifica
            Research publishes the analysis behind the model: the demand data, the supply gaps, and
            the design lessons from our own deliveries, so partners can defend the decision to their
            boards before they defend it to anyone else.
          </motion.p>
        </div>
      </section>

      {/* ── Two active investigations ── bg-snow ── */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="research-featured-h2">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            id="research-featured-h2"
            className="text-[1.5rem] lg:text-[1.875rem] leading-[1.2] tracking-[-0.02em] text-anthracite italic mb-10 lg:mb-12 max-w-[28ch]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
            Two investigations, in progress.
          </motion.h2>

          <div className="space-y-8 lg:space-y-10">

            {/* ── R·01 The supervisor gap ── */}
            <motion.article
              className="bg-bone px-7 py-9 lg:px-12 lg:py-12"
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>

              <div className="lg:grid lg:grid-cols-[0.95fr_1.15fr] lg:gap-16 xl:gap-20 lg:items-center">

                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-wine font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                      Featured report &middot; June 2026
                    </span>
                  </div>

                  <h3 className="text-[1.875rem] lg:text-[2.5rem] leading-[1.08] tracking-[-0.026em] text-anthracite italic mb-5 [text-wrap:balance]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    The supervisor gap
                  </h3>
                  <p className="text-[14.5px] text-anthracite/80 leading-[1.7] mb-8 max-w-[46ch]" style={{ fontFamily: 'var(--font-body)' }}>
                    New Jersey&rsquo;s building-electrification mandates and clean-infrastructure
                    funding will require an estimated 2,000 to 3,000 green-fluent construction
                    managers by 2030. The credentialed supply today is near zero. This report maps
                    the demand, the pipeline, and the pathway architecture required to close the
                    distance.
                  </p>

                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-8 text-[11px] uppercase tracking-[0.1em] text-anthracite/60" style={{ fontFamily: 'var(--font-body)' }}>
                    <span>Aedifica Research</span>
                    <span aria-hidden="true">·</span>
                    <span>Published · 2026-06</span>
                    <span aria-hidden="true">·</span>
                    <span>New Jersey / NY metro</span>
                  </div>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8 border-t border-l border-sediment/25">
                    {[
                      { n: '2,000–3,000', l: 'Green-fluent construction managers required by 2030 (est.)' },
                      { n: '≈ 0', l: 'Credentialed green-CM supply today' },
                      { n: '2030', l: 'Electrification-mandate horizon' },
                      { n: '$1B+', l: 'Delivered infrastructure behind the analysis team' },
                    ].map(({ n, l }) => (
                      <div key={l} className="border-r border-b border-sediment/25 px-4 py-3.5">
                        <p className="text-[1.75rem] lg:text-[2rem] text-wine italic leading-none tracking-[-0.02em] mb-1.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>{n}</p>
                        <p className="text-[11px] text-anthracite/70 leading-[1.4]" style={{ fontFamily: 'var(--font-body)' }}>{l}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/partner"
                      className="inline-flex items-center gap-2 bg-anthracite text-white text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-anthracite/85 group">
                      Request the full report
                      <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
                    </Link>
                    <Link href="/partner#contact-form"
                      className="inline-flex items-center gap-2 border border-anthracite text-anthracite text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-colors duration-150 hover:bg-anthracite/6">
                      Book a research briefing
                    </Link>
                  </div>
                </div>

                {/* Skyline exhibit: a receding silhouette, demand down to near-zero supply */}
                <div className="mt-12 lg:mt-0">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <p className="text-[12px] text-anthracite/75 leading-[1.4] max-w-[30ch]" style={{ fontFamily: 'var(--font-body)' }}>
                      Demand vs. pipeline: green-fluent construction managers, NJ, 2030 horizon
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.1em] text-anthracite/75 flex-shrink-0" style={{ fontFamily: 'var(--font-body)' }}>
                      Exhibit 01
                    </p>
                  </div>
                  <div className="flex items-end gap-6 lg:gap-8 h-[180px] mb-3" role="img" aria-label="Chart: projected 2030 demand about 2,500 green-fluent construction managers, against an annual pipeline of about 120, about 60 currently enrolled, and near zero credentialed today.">
                    {SKYLINE.map(({ label, value, height, fill }, i) => (
                      <motion.div
                        key={label}
                        className="flex flex-col items-center justify-end flex-1 h-full"
                        initial={reduce ? undefined : { opacity: 0 }}
                        whileInView={reduce ? undefined : { opacity: 1 }}
                        viewport={VIEWPORT}
                        transition={reduce ? undefined : { duration: 0.4, delay: i * 0.06, ease: EASE }}>
                        <span className="text-[12px] text-anthracite font-medium mb-2" style={{ fontFamily: 'var(--font-body)' }}>{value}</span>
                        <motion.div
                          className={`w-full ${fill}`}
                          initial={reduce ? undefined : { height: 0 }}
                          whileInView={reduce ? undefined : { height: Math.round(height * 1.3) }}
                          viewport={VIEWPORT}
                          transition={reduce ? undefined : { duration: 0.7, delay: 0.15 + i * 0.08, ease: EASE }}
                          style={reduce ? { height: Math.round(height * 1.3) } : undefined}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <div className="flex gap-6 lg:gap-8">
                    {SKYLINE.map(({ label }) => (
                      <span key={label} className="flex-1 text-[10.5px] text-anthracite/70 text-center leading-[1.3]" style={{ fontFamily: 'var(--font-body)' }}>
                        {label}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] text-anthracite/55 leading-[1.55] mt-5 pt-4 border-t border-sediment/20" style={{ fontFamily: 'var(--font-body)' }}>
                    Series colors carry the auxiliary accent layer; values are labeled, <strong className="text-anthracite/70 font-medium">color never carries meaning alone.</strong> Source:
                    Aedifica Research analysis of NJ electrification mandates and program-supply data. Forward-looking figures are Aedifica estimates.
                  </p>
                </div>

              </div>
            </motion.article>

            {/* ── R·02 Bridging Brilliance ── */}
            <motion.article
              className="bg-bone px-7 py-9 lg:px-12 lg:py-12"
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: 0.08, ease: SPRING }}>

              <div className="lg:grid lg:grid-cols-[1.15fr_0.95fr] lg:gap-16 xl:gap-20 lg:items-center">

                {/* Ten-lesson tally on the left this time, for rhythm against R·01 above */}
                <div className="lg:order-1">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <p className="text-[12px] text-anthracite/75 leading-[1.4] max-w-[26ch]" style={{ fontFamily: 'var(--font-body)' }}>
                      Field lessons documented, from building trust early to cross-institutional partnership
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.1em] text-anthracite/75 flex-shrink-0" style={{ fontFamily: 'var(--font-body)' }}>
                      Exhibit 02
                    </p>
                  </div>
                  <div className="flex items-end gap-6 lg:gap-8 h-[180px] mb-3">
                    <div className="flex-1 flex flex-col justify-end h-full">
                      <span className="text-[12px] text-anthracite font-medium mb-2" style={{ fontFamily: 'var(--font-body)' }}>10 of 10 lessons</span>
                      <div className="flex items-end gap-[5px] h-[100px]" role="img" aria-label="Ten field lessons documented, from building trust early to cross-institutional partnership.">
                        {Array.from({ length: 10 }).map((_, i) => (
                          <motion.span
                            key={i}
                            className="flex-1 bg-terracotta"
                            initial={reduce ? undefined : { height: 0 }}
                            whileInView={reduce ? undefined : { height: '100%' }}
                            viewport={VIEWPORT}
                            transition={reduce ? undefined : { duration: 0.35, delay: 0.15 + i * 0.04, ease: EASE }}
                            style={reduce ? { height: '100%' } : undefined}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-12 lg:mt-0 lg:order-2">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="inline-block text-[10px] uppercase tracking-[0.12em] bg-anthracite/10 text-anthracite px-2.5 py-1 leading-none select-none" style={{ fontFamily: 'var(--font-body)' }}>
                      In progress
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.1em] text-anthracite/75" style={{ fontFamily: 'var(--font-body)' }}>
                      R&middot;02 &middot; Delivery case study
                    </span>
                  </div>

                  <h3 className="text-[1.875rem] lg:text-[2.5rem] leading-[1.08] tracking-[-0.026em] text-anthracite italic mb-5 max-w-[16ch] [text-wrap:balance]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    Bridging Brilliance: a delivery case study
                  </h3>
                  <p className="text-[14.5px] text-anthracite/80 leading-[1.7] mb-8 max-w-[46ch]" style={{ fontFamily: 'var(--font-body)' }}>
                    What a twelve-week, twenty-one-student community STEM intensive taught us about
                    running cohorts inside a real school week: materials, staffing, showcase, and
                    what we would change.
                  </p>

                  <p className="text-[13.5px] text-anthracite/72 italic leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>
                    Full case study pending institutional clearance.{' '}
                    <Link href="/partner" className="not-italic font-medium text-anthracite underline underline-offset-4 decoration-anthracite/30 hover:decoration-anthracite transition-colors duration-150">
                      Ask for a preview
                    </Link>
                  </p>
                </div>

              </div>
            </motion.article>

          </div>
        </div>
      </section>

      {/* ── Coming next in the archive ── bg-anthracite */}
      <section className="bg-anthracite py-14 lg:py-20" aria-labelledby="research-archive-h2">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            id="research-archive-h2"
            className="text-[13.5px] uppercase tracking-[0.14em] text-white/70 font-medium mb-10 lg:mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            Publications archive, status is carried by label and glyph, never by color alone.
          </motion.p>

          <div className="border-t border-white/12">
            {PUBLICATIONS.map((pub, i) => (
              <motion.article
                key={pub.id}
                className="grid grid-cols-1 sm:grid-cols-[5rem_1fr_auto] gap-3 sm:gap-6 py-6 border-b border-white/12 sm:items-start"
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, delay: Math.min(i * 0.05, 0.2), ease: EASE }}>
                <p className="text-[1.125rem] italic leading-none pt-0.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--color-clay-light)' }}>
                  {pub.id}
                </p>
                <div>
                  <h3 className="text-[15px] text-white leading-[1.3] tracking-[-0.01em] mb-1.5" style={{ fontFamily: 'var(--font-body)', fontWeight: 500 }}>
                    {pub.title}
                  </h3>
                  <p className="text-[13px] text-white/65 leading-[1.6] max-w-[68ch]" style={{ fontFamily: 'var(--font-body)' }}>
                    {pub.body}
                  </p>
                </div>
                <span className={`inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.12em] px-2.5 py-1 leading-none select-none flex-shrink-0 justify-self-start sm:justify-self-end ${pub.statusCls}`} style={{ fontFamily: 'var(--font-body)' }}>
                  <span className={pub.dotCls} aria-hidden="true">{pub.dot}</span>
                  {pub.status}
                </span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Methodology note ── bg-snow. Kept as its own section (needed as the light
          buffer between the dark archive above and the dark footer below), but
          anchored with a hairline rule instead of floating unattached. */}
      <section className="bg-snow py-12 lg:py-16" aria-label="Methodology note">
        <div className="max-w-7xl mx-auto px-6">
          <motion.p
            className="max-w-[70ch] text-[12.5px] text-anthracite/70 leading-[1.7] border border-wine px-5 py-4"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            <strong className="text-anthracite font-medium">Methodology note.</strong> Aedifica
            Research distinguishes measured results from projections in every publication.
            Forward-looking figures, including the supervisor-gap estimates above, are Aedifica
            estimates, stated with their assumptions. Cohort outcomes are reported only after they
            occur, using definitions fixed before enrollment.
          </motion.p>
        </div>
      </section>

    </main>
  )
}
