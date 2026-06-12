import { SEO, SITE_URL } from '../components/SEO'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const INSIGHTS_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      url: `${SITE_URL}/insights`,
      name: 'Insights & Research | Aedifica Workforce Pathway Strategy',
      description:
        'Research and perspectives on New Jersey construction-management workforce pathways, employer validation, accountability frameworks, and talent advancement.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
      specialty: 'Construction-management workforce development research and strategy in New Jersey',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Insights & Research',
          item: `${SITE_URL}/insights`,
        },
      ],
    },
  ],
} as Record<string, unknown>

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const ARTICLES = [
  {
    number: '01',
    featured: true,
    category: 'WORKFORCE GAP',
    title: 'The Missing Construction-Management Workforce Channel in New Jersey',
    excerpt: 'New Jersey has strong CTE programs and four-year construction-management education. What it lacks is the practical, employer-validated bridge for capable adults seeking construction-management-track opportunity.',
    image: '/images/site-tour.jpg',
  },
  {
    number: '02',
    featured: false,
    category: 'STUDENT PATHWAYS',
    title: 'From CTE to Construction Leadership: Building Measurable Student Pathways',
    excerpt: 'Career-technical education delivers real preparation. Measurable outcomes require clear articulation routes, employer engagement, and honest reporting.',
    image: '/images/bb-students.jpg',
  },
  {
    number: '03',
    featured: false,
    category: 'EMPLOYER ALIGNMENT',
    title: 'Why Employer-Validated Capstones Matter',
    excerpt: 'Capstones with real employer participation shift preparation from theory to demonstrated relevance.',
    image: '/images/partnership-event.jpg',
  },
  {
    number: '04',
    featured: false,
    category: 'APPRENTICESHIP',
    title: 'Apprenticeship Alignment as Workforce Strategy, not Marketing Language',
    excerpt: 'Credible alignment requires a signed pathway before instruction begins, not a reference included after the fact.',
    image: '/images/planning-session.jpg',
  },
  {
    number: '05',
    featured: false,
    category: 'ACCOUNTABILITY',
    title: 'Publishing Outcomes: The Accountability Standard Workforce Programs Need',
    excerpt: 'Enrollment numbers are not outcomes. Credible programs distinguish completion, credential attainment, placement, and retention.',
    image: '/images/stem-workshop.jpg',
  },
  {
    number: '06',
    featured: false,
    category: 'WORKFORCE GAP',
    title: 'The Hidden Supervisory Talent Gap in Infrastructure Delivery',
    excerpt: 'Project administration, scheduling coordination, and field leadership roles go unfilled not because talent is absent, but because accessible pathways have not been built.',
    image: '/images/campus-group.jpg',
  },
  {
    number: '07',
    featured: false,
    category: 'AEDIFICA METHOD',
    title: 'Four Launch Gates for an Accountable Adult Bridge Cohort',
    excerpt: 'A credible adult bridge cohort requires committed partners in four categories: community support, funding alignment, employer participation, and articulation.',
    image: '/images/stevens-program.jpg',
  },
  {
    number: '08',
    featured: false,
    category: 'AEDIFICA METHOD',
    title: 'The Role Ladder: Making Advancement Visible Without Overpromising It',
    excerpt: 'Workforce programs owe participants an honest map of initial roles, realistic progression timelines, and the conditions for advancement.',
    image: '/images/bridge-test.jpg',
  },
] as const

export function Insights() {
  const reduce = useReducedMotion()

  return (
    <main>
      <SEO
        title="Insights & Research | Aedifica Workforce Pathway Strategy"
        description="Research and perspectives on New Jersey construction-management workforce pathways, employer validation, accountability frameworks, and talent advancement."
        path="/insights"
        schema={INSIGHTS_SCHEMA}
      />

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[65vh] flex flex-col justify-end pb-16 lg:pb-24 relative overflow-hidden"
        aria-labelledby="insights-h1">

        <motion.div
          className="absolute top-8 right-6 lg:right-10 select-none pointer-events-none"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.8, delay: 1.0, ease: EASE }}>
          <p
            className="text-[10px] text-white/18 uppercase tracking-[0.26em] text-right"
            style={{ fontFamily: 'var(--font-body)' }}>
            8&nbsp;Perspectives
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-6 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            Insights &amp; Research
          </motion.span>

          <motion.h1
            id="insights-h1"
            className="text-[2.75rem] lg:text-[4.5rem] xl:text-[6rem] leading-[0.96] tracking-[-0.035em] text-white italic mb-10"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Workforce Pathway<br className="hidden lg:block" /> Perspectives
          </motion.h1>

          <motion.p
            className="text-[14.5px] text-white/60 leading-[1.65] max-w-[58ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
            Research and perspectives on New Jersey construction-management workforce pathways, employer validation, accountability, and talent advancement.
          </motion.p>

        </div>
      </section>

      {/* ── Article Grid ── bg-bone */}
      {/*
        Bento layout (lg:grid-cols-3):
          Row 1: 01 [span-2] · 02 [span-1]
          Row 2: 03 [span-1] · 04 [span-1] · 05 [span-1]
          Row 3: 06 [span-1] · 07 [span-2]
          Row 4: 08 [span-1] · 09 [span-1] · 10 [span-1]
      */}
      <section className="bg-bone py-14 lg:py-20" aria-label="All perspectives">
        <div className="max-w-[1400px] mx-auto px-6">

          <div className="flex items-baseline justify-between mb-8 lg:mb-10">
            <span
              className="text-[10.5px] text-anthracite/70 uppercase tracking-[0.2em] select-none"
              style={{ fontFamily: 'var(--font-body)' }}>
              All Perspectives
            </span>
            <span
              className="text-[2.25rem] text-anthracite/10 italic leading-none select-none"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              8
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">

            {ARTICLES.map((article, i) => (
              <motion.article
                key={article.number}
                className={article.featured ? 'lg:col-span-2 bg-snow' : 'lg:col-span-1 bg-snow'}
                initial={reduce ? undefined : { opacity: 0, y: 28 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: (i % 3) * 0.08, ease: EASE }}>

                {/* Photo zone */}
                <div
                  className={`relative w-full overflow-hidden ${article.featured ? 'h-[240px] lg:h-[300px]' : 'h-[195px] lg:h-[220px]'}`}>

                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ filter: 'grayscale(18%) contrast(1.06)' }}
                    loading="lazy"
                  />

                  {/* Ghost article number — overlaid on image */}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-3 right-4 italic text-white/15 leading-none select-none pointer-events-none relative z-10 ${article.featured ? 'text-[7rem] lg:text-[9rem]' : 'text-[4.5rem] lg:text-[6rem]'}`}
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    {article.number}
                  </span>

                </div>

                {/* Content */}
                <div className="px-5 pt-5 pb-7">

                  <p
                    className="text-[9.5px] text-anthracite/70 uppercase tracking-[0.15em] mb-3 select-none"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {article.category}
                  </p>

                  <h2
                    className={`italic text-anthracite leading-[1.12] tracking-[-0.022em] mb-4 ${article.featured ? 'text-[1.625rem] lg:text-[2rem] xl:text-[2.25rem]' : 'text-[1.2rem] lg:text-[1.35rem] xl:text-[1.5rem]'}`}
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    {article.title}
                  </h2>

                  <p
                    className="text-[13.5px] text-anthracite/65 leading-[1.68]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {article.excerpt}
                  </p>

                </div>

              </motion.article>
            ))}

          </div>
        </div>
      </section>

      {/* ── CTA Block ── bg-snow pb-0, contained datum block */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-label="Partner with Aedifica">
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
              Research informs the pathway. Partnership builds it.
            </h2>

            <p
              className="text-[15px] text-white/75 leading-[1.7] max-w-[52ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              More perspectives are in development as Aedifica programs launch. Speak with Aedifica about employer validation, accountability frameworks, or institutional partnerships.
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
