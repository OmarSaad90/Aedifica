import { SEO, SITE_URL } from '../components/SEO'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const ABOUT_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      url: `${SITE_URL}/about`,
      name: 'About Aedifica | We Build the Builders',
      description:
        'Aedifica builds construction-management workforce pathways for overlooked talent in New Jersey through disciplined employer partnerships and measurable outcomes.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/about` },
      ],
    },
  ],
} as Record<string, unknown>

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const COMMITMENTS = [
  {
    label: 'Evidence over inertia.',
    desc: 'Every recommendation is defensible against data, outcomes, and industry standards, not against how it has always been done.',
  },
  {
    label: 'Co-authorship as default.',
    desc: 'Curriculum and programs are designed with educators and employers, never at them.',
  },
  {
    label: 'Radical legibility.',
    desc: 'What we design must be implementable by the people inheriting it, not only by the consultants who wrote it.',
  },
  {
    label: 'Widened doorways.',
    desc: 'Non-traditional learners are treated as first-class audiences, not accommodation cases.',
  },
] as const

const VALUES = [
  {
    number: '01',
    name: 'Rigor as Respect',
    numCls: 'text-datum/28',
    description:
      'We do not flatter learners, clients, or ourselves with soft standards. Holding people to real, specified quality is a form of respect: it says we believe they can meet it.',
    practice:
      'Every curriculum we author carries a public competency rubric. Every workshop ends with an honest assessment, not a certificate of attendance. Every proposal includes the conditions under which we will decline to proceed.',
  },
  {
    number: '02',
    name: 'Translation, Not Transmission',
    numCls: 'text-quarry/32',
    description:
      'Our job is not to move information from one desk to another. It is to translate industry practice into classroom-legible form, and classroom learning into site-ready competence. The verb is translate, with all the craft that implies.',
    practice:
      'No deliverable ships without being reviewed by both a practising engineer and a classroom educator. Discrepancies between them are the work, not an obstacle to it.',
  },
  {
    number: '03',
    name: 'Widened Doorways',
    numCls: 'text-sediment/40',
    description:
      'The engineering and construction workforce cannot meet its needs by continuing to recruit from the same narrow doorways. We design programs that are structurally legible to veterans, career-changers, returning adults, and first-generation students: not as a side-door, but as a front door of equal standing.',
    practice:
      'Every workforce program specifies its accessibility audit alongside its learning objectives. Scheduling, childcare assumptions, credit-for-prior-learning, language, and physical access are line items, not footnotes.',
  },
  {
    number: '04',
    name: 'Built to Be Handed Over',
    numCls: 'text-patina/32',
    description:
      'A consultancy that cannot exit gracefully has failed. Our work is structured from day one for the people who will inherit and run it after we are gone.',
    practice:
      'Every engagement includes a handover package: documentation, training, a named internal steward, and a 12-month post-engagement check-in built into the fee. We measure success by what still works 24 months after we leave.',
  },
] as const

const TEAM = [
  {
    name: 'Dr. Karim Karam',
    role: 'Co-Founder & CEO',
    bio: 'Leads construction-management education at Stevens Institute of Technology, where he has delivered pre-college engineering workshops for New Jersey high-school students for over five years. Prior infrastructure and workforce leadership at Sarooj Construction Company across major infrastructure projects. Leads Aedifica\'s program architecture and institutional partner relationships.',
    image: 'founder-karim',
  },
  {
    name: 'Dr. Nicole Silva',
    role: 'Co-Founder & Community Partnerships Lead',
    bio: 'Cross-sector workforce development and partnership experience across Union and Essex counties, New Jersey. Cultivated the partnership between Stevens Institute and Hillside Innovation Academy that became a foundation for Aedifica\'s community delivery model. Leads Aedifica\'s community organization and workforce agency relationships.',
    image: 'founder-nicole',
  },
  {
    name: 'Kimi Stephenson',
    role: 'Co-Founder & Community Program Lead',
    bio: 'MS in Construction Engineering and Management, Stevens Institute of Technology. BA, Rutgers University-New Brunswick. Co-designed and co-delivered the Bridging Brilliance STEM program at Hillside Innovation Academy: eight weeks, 21 students, documented as an Aedifica delivery foundation.',
    image: 'founder-kimi',
  },
] as const

export function About() {
  const reduce = useReducedMotion()

  return (
    <main>
      <SEO
        title="About Aedifica | We Build the Builders"
        description="Aedifica builds construction-management workforce pathways for overlooked talent in New Jersey through disciplined employer partnerships and measurable outcomes."
        path="/about"
        schema={ABOUT_SCHEMA}
      />

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[72vh] flex flex-col justify-end pb-16 lg:pb-24 relative overflow-hidden"
        aria-labelledby="about-h1">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-6 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            About Aedifica
          </motion.span>

          <motion.h1
            id="about-h1"
            className="text-[3.5rem] lg:text-[5.5rem] xl:text-[7.5rem] leading-[0.93] tracking-[-0.04em] text-white italic mb-10"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            We build<br className="hidden sm:block" /> the builders.
          </motion.h1>

          <motion.p
            className="text-[14.5px] text-white/60 leading-[1.65] max-w-[60ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
            Aedifica designs and delivers construction-management career pathways for overlooked talent in New Jersey, with employer validation built into the model and outcomes reported on the record.
          </motion.p>

        </div>
      </section>

      {/* ── Origin / Brand Story ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="about-origin-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_0.72fr] lg:gap-16 xl:gap-24 lg:items-start">

            {/* Left */}
            <div>
              <motion.p
                className="text-[10.5px] text-quarry uppercase tracking-[0.18em] mb-5 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
                Origin
              </motion.p>

              <motion.h2
                id="about-origin-h2"
                className="text-[2.25rem] lg:text-[3rem] xl:text-[4rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic mb-8"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 28 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.7, delay: 0.06, ease: SPRING }}>
                Founded inside the problem, not above it.
              </motion.h2>

              <motion.div
                className="space-y-4"
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.12, ease: EASE }}>
                <p
                  className="text-[15px] text-anthracite/75 leading-[1.72]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Aedifica was conceived at the intersection of three stubborn realities: a construction workforce ageing out faster than it is being replaced; a curriculum pipeline that too often treats industry as an afterthought; and a growing population of non-traditional learners who possess enormous capacity but are poorly served by institutional pathways designed for eighteen-year-olds.
                </p>
                <p
                  className="text-[15px] text-anthracite/75 leading-[1.72]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Our founders came from both sides of that divide: licensed engineers and site experience on one hand, curriculum designers and educator-practitioners on the other. Aedifica exists because they refused to accept the polite fiction that these are separate problems for separate professions.
                </p>
              </motion.div>
            </div>

            {/* Right */}
            <div className="mt-10 lg:mt-0 lg:pt-2">

              <motion.div
                className="bg-sediment/10 px-7 py-8 mb-8"
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, delay: 0.1, ease: EASE }}>
                <p
                  className="text-[1.375rem] lg:text-[1.625rem] xl:text-[1.875rem] italic text-anthracite leading-[1.3] tracking-[-0.018em]"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  Between educator and employer, Aedifica does not referee. We translate, and when translation is insufficient, we rebuild the terms of the conversation itself.
                </p>
              </motion.div>

              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.18, ease: EASE }}>
                <p
                  className="text-[10px] text-quarry uppercase tracking-[0.18em] mb-4 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Strategic Commitments
                </p>
                <ul className="list-none">
                  {COMMITMENTS.map((item, i) => (
                    <motion.li
                      key={item.label}
                      className="flex gap-3 border-b border-sediment/15 py-3.5"
                      initial={reduce ? undefined : { opacity: 0, x: -10 }}
                      whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                      viewport={reduce ? undefined : VIEWPORT}
                      transition={reduce ? undefined : { duration: 0.38, delay: 0.22 + i * 0.07, ease: EASE }}>
                      <span className="flex-shrink-0 w-[4px] h-[4px] bg-datum mt-[9px]" aria-hidden="true" />
                      <p
                        className="text-[13.5px] text-anthracite/75 leading-[1.55]"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        <strong>{item.label}</strong> {item.desc}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Mission + Values Intro ── bg-bone */}
      <section className="bg-bone pt-12 lg:pt-18 pb-8 lg:pb-12" aria-labelledby="about-values-h2">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            className="mb-14 lg:mb-20"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.7, ease: SPRING }}>
            <p
              className="text-[12.5px] text-anthracite/75 uppercase tracking-[0.2em] mb-6 select-none font-medium"
              style={{ fontFamily: 'var(--font-body)' }}>
              Mission
            </p>
            <p
              className="text-[2rem] lg:text-[3.25rem] xl:text-[4.25rem] leading-[1.1] tracking-[-0.03em] text-anthracite italic max-w-[26ch]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Design, deliver, and evaluate the programs that turn overlooked learners into the construction-management workforce New Jersey actually needs.
            </p>
          </motion.div>

          <div className="lg:grid lg:grid-cols-[1fr_0.55fr] lg:gap-16 lg:items-end">
            <motion.h2
              id="about-values-h2"
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.5rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
              Four values. No fifth.
            </motion.h2>
            <motion.p
              className="text-[14px] text-anthracite/70 leading-[1.7] mt-4 lg:mt-0"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
              Values are commitments that can be audited in a deliverable, a meeting, or an email. Each is paired with a specific, observable behavior.
            </motion.p>
          </div>

        </div>
      </section>

      {/* ── Value 01: Rigor as Respect ── bg-datum */}
      <section className="bg-datum py-14 lg:py-20" aria-label="Value 01">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="lg:grid lg:grid-cols-[1fr_0.44fr] lg:gap-16 xl:gap-24 lg:items-start"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            <div>
              <h3 className="text-[2rem] lg:text-[3rem] xl:text-[3.75rem] italic text-white leading-[1.06] tracking-[-0.03em] mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                {VALUES[0].name}
              </h3>
              <p className="text-[15px] text-white leading-[1.72] max-w-[56ch]" style={{ fontFamily: 'var(--font-body)' }}>
                {VALUES[0].description}
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:pt-1">
              <p className="text-[10px] text-white/85 uppercase tracking-[0.2em] mb-3 select-none" style={{ fontFamily: 'var(--font-body)' }}>In Practice</p>
              <p className="text-[14px] text-white leading-[1.68]" style={{ fontFamily: 'var(--font-body)' }}>
                {VALUES[0].practice}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Value 02: Translation, Not Transmission ── bg-sediment */}
      <section className="bg-sediment py-14 lg:py-20" aria-label="Value 02">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="lg:grid lg:grid-cols-[0.22fr_1fr_0.44fr] lg:gap-12 xl:gap-16 lg:items-start"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            <div className="hidden lg:block" aria-hidden="true" />
            <div>
              <h3 className="text-[2rem] lg:text-[3rem] xl:text-[3.75rem] italic text-anthracite leading-[1.06] tracking-[-0.03em] mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                {VALUES[1].name}
              </h3>
              <p className="text-[15px] text-anthracite leading-[1.72] max-w-[56ch]" style={{ fontFamily: 'var(--font-body)' }}>
                {VALUES[1].description}
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:pt-1">
              <p className="text-[10px] text-anthracite/80 uppercase tracking-[0.2em] mb-3 select-none" style={{ fontFamily: 'var(--font-body)' }}>In Practice</p>
              <p className="text-[14px] text-anthracite leading-[1.68]" style={{ fontFamily: 'var(--font-body)' }}>
                {VALUES[1].practice}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Value 03: Widened Doorways ── bg-patina */}
      <section className="bg-patina py-14 lg:py-20" aria-label="Value 03">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="lg:grid lg:grid-cols-[1fr_0.44fr] lg:gap-16 xl:gap-24 lg:items-start"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            <div>
              <h3 className="text-[2rem] lg:text-[3rem] xl:text-[3.75rem] italic text-white leading-[1.06] tracking-[-0.03em] mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                {VALUES[2].name}
              </h3>
              <p className="text-[15px] text-white leading-[1.72] max-w-[56ch]" style={{ fontFamily: 'var(--font-body)' }}>
                {VALUES[2].description}
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:pt-1">
              <p className="text-[10px] text-white/85 uppercase tracking-[0.2em] mb-3 select-none" style={{ fontFamily: 'var(--font-body)' }}>In Practice</p>
              <p className="text-[14px] text-white leading-[1.68]" style={{ fontFamily: 'var(--font-body)' }}>
                {VALUES[2].practice}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Value 04: Built to Be Handed Over ── bg-quarry */}
      <section className="bg-quarry py-14 lg:py-20" aria-label="Value 04">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="lg:grid lg:grid-cols-[0.22fr_1fr_0.44fr] lg:gap-12 xl:gap-16 lg:items-start"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            <div className="hidden lg:block" aria-hidden="true" />
            <div>
              <h3 className="text-[2rem] lg:text-[3rem] xl:text-[3.75rem] italic text-anthracite leading-[1.06] tracking-[-0.03em] mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                {VALUES[3].name}
              </h3>
              <p className="text-[15px] text-anthracite leading-[1.72] max-w-[56ch]" style={{ fontFamily: 'var(--font-body)' }}>
                {VALUES[3].description}
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:pt-1">
              <p className="text-[10px] text-anthracite/80 uppercase tracking-[0.2em] mb-3 select-none" style={{ fontFamily: 'var(--font-body)' }}>In Practice</p>
              <p className="text-[14px] text-anthracite leading-[1.68]" style={{ fontFamily: 'var(--font-body)' }}>
                {VALUES[3].practice}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Team ── bg-snow */}
      <section className="bg-snow pt-14 lg:pt-20 pb-8 lg:pb-10" aria-labelledby="about-team-h2">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-10 lg:mb-14">
            <motion.p
              className="text-[12.5px] text-quarry uppercase tracking-[0.18em] mb-4 select-none font-medium"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              The Founders
            </motion.p>
            <motion.h2
              id="about-team-h2"
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.5rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, delay: 0.06, ease: SPRING }}>
              Built by people on both sides of the gap.
            </motion.h2>
          </div>

          {TEAM.map((member, i) => (
            <motion.div
              key={member.name}
              className={`grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-8 lg:gap-12 ${i === 0 ? 'border-t border-sediment/15 ' : ''}border-b border-sediment/15 py-8 lg:py-10 items-start`}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.08 * i, ease: EASE }}>

              {/* Photo */}
              <div className="w-full h-[220px] lg:w-[220px] lg:h-[280px] flex-shrink-0 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${member.image}/440/560`}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(15%) contrast(1.05)' }}
                  loading="lazy"
                />
              </div>

              {/* Bio */}
              <div className="lg:pt-1">
                <p
                  className="text-[10.5px] text-quarry uppercase tracking-[0.18em] mb-3 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {member.role}
                </p>
                <h3
                  className="text-[1.75rem] lg:text-[2.25rem] xl:text-[2.75rem] italic text-anthracite leading-[1.08] tracking-[-0.025em] mb-5"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  {member.name}
                </h3>
                <p
                  className="text-[14.5px] text-anthracite/75 leading-[1.72] max-w-[56ch]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {member.bio}
                </p>
              </div>

            </motion.div>
          ))}


        </div>
      </section>

      {/* ── CTA Block ── */}
      <section className="bg-snow pt-4 lg:pt-6 pb-0" aria-label="Partner with Aedifica">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-datum px-10 pt-10 pb-10 lg:px-16 lg:pt-14 lg:pb-12 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-white italic mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Built on a commitment to deliver, report, and be accountable.
            </h2>

            <p
              className="text-[15px] text-white/75 leading-[1.7] max-w-[52ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Speak with Aedifica about what a founding partnership, employer engagement, or institutional briefing looks like in practice.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/partner"
                className="inline-flex items-center justify-center bg-white text-datum text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-white/92"
                style={{ fontFamily: 'var(--font-body)' }}>
                Start a Partnership Conversation
              </Link>
              <Link
                to="/impact"
                className="inline-flex items-center justify-center border border-white/30 text-white text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-white/8"
                style={{ fontFamily: 'var(--font-body)' }}>
                View the Impact Framework
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
