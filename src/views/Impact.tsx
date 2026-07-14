'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import {
  Gear, Microphone, ArrowsClockwise, UsersThree, Compass,
  CheckCircle,
} from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '80px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const PILL_DOTS: Record<string, string> = {
  'Explore': 'bg-datum',
  'Pathway': 'bg-quarry',
  'Partner Stories': 'bg-patina',
}

type StoryProgram = 'all' | 'explore' | 'pathway' | 'partner'

type Story = {
  id: string
  program: 'explore' | 'pathway' | 'partner'
  type: string
  title: string
  quote?: string
  body: string
  pill: string
}

const FILTERS: { key: StoryProgram; label: string; activeCls: string }[] = [
  { key: 'all',     label: 'All',            activeCls: 'bg-anthracite border-anthracite text-white' },
  { key: 'explore', label: 'Explore',        activeCls: 'bg-datum border-datum text-white'           },
  { key: 'pathway', label: 'Pathway',        activeCls: 'bg-quarry border-quarry text-white'         },
  { key: 'partner', label: 'Partner Stories',activeCls: 'bg-patina border-patina text-white'         },
]

const STORIES: Story[] = [
  {
    id: 's1',
    program: 'explore',
    type: 'Learner Story · Curiosity to confidence',
    title: 'Learning to value the process, not just the win',
    quote: 'It is as important to learn as to succeed.',
    body: "A learner who started seeing engineering in broad strokes finished able to explain the design process, the mechanics of a bridge, and the value of a failed test. Confidence grew most in the moment they had to defend their team's choices to real engineers.",
    pill: 'Explore',
  },
  {
    id: 's2',
    program: 'explore',
    type: 'School Story · District implementation',
    title: 'A 10-week elective inside the school day',
    body: "Building Bridges runs as a 10-week NGSS-aligned science elective inside the school day. Hillside Innovation Academy, a STEM-focused magnet middle school, embedded the program for grades 7-8, reaching about 22% of its enrollment in 2025. HIA's own STEM instructors carried the learning through the week between sessions.",
    pill: 'Explore',
  },
  {
    id: 's3',
    program: 'explore',
    type: 'Instructor Story · Curriculum in action',
    title: 'Built, tested, revised: not just watched',
    body: "Students understood tension, compression, and cost most deeply when they built, tested, and revised, not when they watched. Led by a Stevens assistant professor of civil engineering with a construction-engineering co-instructor, the curriculum traded lectures for two real design challenges: a sticker-design pitch and the Hudson River bridge competition. Mixed-grade teams and clear roles turned a rigorous course into a community.",
    pill: 'Explore',
  },
  {
    id: 's4',
    program: 'partner',
    type: 'Partner Story · Hillside × Stevens',
    title: 'Two institutions, one support system',
    body: "Building Bridges is a Hillside Innovation Academy × Stevens Institute of Technology collaboration, funded by the Engineering Information Foundation, now in its second program year. The 2025 program's full investment ($10,340.29) was independently reviewed and certified through Stevens' Office of Sponsored Accounting and Cost Analysis.",
    pill: 'Partner Stories',
  },
  {
    id: 's5',
    program: 'explore',
    type: 'Community Story · Showcase and pride',
    title: 'Families filled the room at Stevens',
    body: "The program closed with a showcase where students presented their prototypes to peers, faculty, judges, and families. That family presence connected student achievement to home and community support, a thread the program team named as central to its success.",
    pill: 'Explore',
  },
  {
    id: 's6',
    program: 'pathway',
    type: 'Pathway Story · Toward advanced STEM',
    title: 'On the on-ramp to selective STEM high schools',
    body: 'For eighth graders at a high-school decision point, Building Bridges sits right on the on-ramp to selective STEM high schools. 6 of 11 eighth-grade participants (55%) were accepted into Union County Vocational-Technical Schools for 2025-26, among the most competitive public high schools in the state.',
    pill: 'Pathway',
  },
  {
    id: 's7',
    program: 'pathway',
    type: 'Learner Story · Apprehension to belonging',
    title: '"The best class I\'ve taken"',
    quote: 'The class started off very slow but once it picked up, it became the most enjoyable class I\'ve ever attended.',
    body: "A student arrived expecting to be out of their depth. Instead of pulling back, they stayed with it, through daily build challenges, a team research project, and a final presentation, and left with stronger engineering knowledge and a clearer sense of college readiness.",
    pill: 'Pathway',
  },
  {
    id: 's8',
    program: 'pathway',
    type: 'Learner Story · Curiosity to confidence',
    title: 'From zero experience to accomplished',
    quote: 'I had absolutely zero experience prior to it, but now I feel much more accomplished and learned in the subject.',
    body: "A learner with no prior exposure finished the program feeling capable in a field they'd never touched, the kind of shift that reaches students who assume engineering isn't for them.",
    pill: 'Pathway',
  },
  {
    id: 's9',
    program: 'pathway',
    type: 'Instructor Story · Curriculum in action',
    title: 'Taught by a practicing civil engineer',
    quote: 'He made us all think on our feet and think outside the box while considering the needs and happiness of the client.',
    body: "The Pathway runs on a practicing civil engineer who teaches through real projects and first-hand industry stories, consistently the program's most-praised element, rated \"Excellent\" by 88-96% of students each summer.",
    pill: 'Pathway',
  },
  {
    id: 's10',
    program: 'pathway',
    type: 'Instructor Story · Teaching in action',
    title: 'A teacher who opened the field',
    quote: 'He was able to give us a real world view about the structures and buildings all over the world, even showing his own personal experiences along the civil engineering industry. The teacher was one of the best teachers that I ever had; I wish to see him again in the future.',
    body: 'Others echoed it across cohorts: "Professor Karam taught through his personal experiences and had created hands-on experiences where we had creative freedom but also maintained the ideas and concepts of civil engineering." (A 2025 Pathway student.) Quotes are reproduced from survey responses and lightly edited only for readability.',
    pill: 'Pathway',
  },
]

const STATS = [
  { num: '21',    label: 'Learners served',           meaning: 'Seventh and eighth graders completed the 10-week Building Bridges program in Spring 2025.',       accent: 'text-datum'  },
  { num: '4',     label: 'Capstone projects',          meaning: 'Four team bridge prototypes built and defended before a panel of professional civil engineering judges.', accent: 'text-quarry' },
  { num: '55%',   label: 'Advanced STEM placements',   meaning: '6 of 11 eighth-grade participants accepted into selective Union County Vocational-Technical Schools for 2025-26.', accent: 'text-datum'  },
  { num: '≈93',    label: 'Final-grade average',        meaning: 'Building Bridges participants\' average final grade across the 10-week program.',                accent: 'text-quarry' },
  { num: '2 + 1', label: 'Partners and funder',        meaning: 'Hillside Innovation Academy and Stevens Institute of Technology, funded by the Engineering Information Foundation.', accent: 'text-datum'  },
  { num: '100%',  label: 'Students presenting',        meaning: 'Every participant, across 4 teams, presented to judges, peers, faculty, and families at the closing showcase.', accent: 'text-quarry' },
] as const

const SHIFTS = [
  {
    Icon: Gear,
    heading: 'Engineering became real',
    body: "Students moved from defining engineering as 'fixing things' to 'designing, creating, testing, and improving solutions.' A visit to Stevens' Innovation Expo showed them the range and genuine rewards of the work.",
    quote: "Engineering is 'building a prototype' and 'using serious critical thinking skills.' Student reflection",
  },
  {
    Icon: Microphone,
    heading: 'Confidence grew through presentation',
    body: "Preparing for the competition and answering judges' questions built real public-speaking and technical-communication skill. Instructors described it as an unexpected, standout development of the program.",
    quote: 'Students "both reported and demonstrated increased confidence in public speaking." EIF report',
  },
  {
    Icon: ArrowsClockwise,
    heading: 'Failure became part of the design process',
    body: 'Testing prototypes taught students that a failed test is data, not defeat. They came to embrace the messy, iterative nature of real engineering.',
    quote: '"When we mess up, this only sets you up for a new door to open." Student reflection',
  },
  {
    Icon: UsersThree,
    heading: 'Teamwork and leadership were practiced',
    body: 'Mixed-grade teams with assigned roles let students discover that leadership can mean listening, helping a teammate, organizing the work, or explaining an idea clearly.',
    quote: 'Teamwork, time management, and leadership were "frequently cited" outcomes. EIF report',
  },
  {
    Icon: Compass,
    heading: 'Pathways became visible',
    body: 'By working alongside undergraduates, graduate researchers, and faculty, students saw engineering as a reachable career with many roles. For the eighth-grade cohort, the next step became concrete: 55% were accepted into selective STEM high schools.',
    quote: '"It is as important to learn as to succeed." Student reflection',
  },
] as const

const PATHWAY_CHIPS = [
  'Advanced high school STEM courses',
  'CTE pathways',
  'Project Lead The Way',
  'Selective STEM high schools (UCVTS)',
  'Summer engineering experiences',
  'Early college and campus exposure',
  'Future Aedifica Pathway programs',
  'Long-term workforce-connected learning',
] as const

function StoryCard({ story, index, reduce, featured = false }: { story: Story; index: number; reduce: boolean | null; featured?: boolean }) {
  return (
    <motion.article
      className={`flex flex-col border border-sediment/20 bg-snow ${featured ? 'sm:col-span-2 lg:col-span-2' : ''}`}
      initial={reduce ? undefined : { opacity: 0, y: 16 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={reduce ? undefined : VIEWPORT}
      transition={reduce ? undefined : { duration: 0.4, delay: (index % 3) * 0.06, ease: EASE }}>

      <div className={`px-6 pt-6 pb-4 flex-1 flex flex-col ${featured ? 'lg:flex-row lg:gap-12 lg:items-start' : ''}`}>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <p
            className="text-[10px] text-datum uppercase tracking-[0.12em] mb-3 font-medium"
            style={{ fontFamily: 'var(--font-body)' }}>
            {story.type}
          </p>
          <h3
            className={`italic text-anthracite leading-[1.2] tracking-[-0.018em] mb-4 ${featured ? 'text-[1.375rem] lg:text-[1.625rem]' : 'text-[1.125rem]'}`}
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            {story.title}
          </h3>
          {!featured && story.quote && (
            <div className="relative mb-4 pl-5">
              <span
                className="text-[2.75rem] text-datum/20 leading-none absolute left-0 -top-1 select-none"
                aria-hidden="true"
                style={{ fontFamily: 'var(--font-heading)' }}>
                &ldquo;
              </span>
              <p
                className="text-[1.0625rem] italic text-anthracite/85 leading-[1.45] tracking-[-0.014em]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                {story.quote}
              </p>
            </div>
          )}
          <p
            className={`leading-[1.65] flex-1 ${featured ? 'text-[14px] text-anthracite/75' : story.quote ? 'text-[13px] text-anthracite/75' : 'text-[13.5px] text-anthracite/75'}`}
            style={{ fontFamily: 'var(--font-body)' }}>
            {story.body}
          </p>
        </div>

        {/* Featured: pull-quote panel at right */}
        {featured && story.quote && (
          <div className="mt-5 pt-5 border-t border-sediment/15 lg:mt-0 lg:pt-0 lg:border-t-0 lg:border-l lg:border-sediment/15 lg:pl-12 lg:w-[240px] lg:flex-shrink-0 flex items-center">
            <p
              className="text-[1.125rem] italic text-anthracite leading-[1.45] tracking-[-0.015em]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
              "{story.quote}"
            </p>
          </div>
        )}

      </div>

      <div className="px-6 py-3 border-t border-sediment/15 flex items-center gap-2">
        <span
          className={`w-[5px] h-[5px] flex-shrink-0 ${PILL_DOTS[story.pill] ?? 'bg-datum'}`}
          aria-hidden="true" />
        <span
          className="text-[11px] text-anthracite/75 uppercase tracking-[0.1em]"
          style={{ fontFamily: 'var(--font-body)' }}>
          {story.pill}
        </span>
      </div>
    </motion.article>
  )
}

export function Impact() {
  const reduce = useReducedMotion()
  const [activeFilter, setActiveFilter] = useState<StoryProgram>('all')

  const filtered = activeFilter === 'all'
    ? STORIES
    : STORIES.filter(s => s.program === activeFilter)

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[65vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="impact-h1">

        {/* Full-bleed right-half photo — desktop only */}
        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-[40%]"
          style={{ willChange: 'opacity' }}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.25, ease: EASE }}
          aria-hidden="true">
          <img
            src="/images/impact-hero.png"
            alt="Hillside middle school students holding bridge prototypes and poster boards"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(20%) contrast(1.08)' }}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="lg:max-w-[58%] lg:pr-8 xl:pr-12">

            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-8 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
              Student Stories &amp; Impact
            </motion.span>

            <motion.h1
              id="impact-h1"
              className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.93] tracking-[-0.04em] text-white italic mb-8"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              Pathways in motion.
            </motion.h1>

            <motion.p
              className="text-[15px] text-white/65 leading-[1.7] max-w-[52ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
              In the spring of 2025, twenty-one Hillside middle schoolers spent ten weeks as engineers, designing, building, testing, and defending a bridge across the Hudson River. They moved from seeing engineering as something distant to seeing it as something they could do, shape, and belong to. And across three summers, students in the Civil Engineering &amp; Design Pathway moved from curiosity to design thinking, from quiet rooms to defended presentations, and from "I have zero experience" to "I want to do this." This page makes those outcomes visible: the human ones and the measurable ones, together, in students' own words.
            </motion.p>

          </div>
        </div>
      </section>

      {/* ── Featured Story ── bg-snow */}
      <section id="featured" className="bg-snow py-14 lg:py-20" aria-labelledby="featured-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_460px] lg:gap-16 xl:gap-20 lg:items-stretch">

            {/* ── Story body ── */}
            <motion.div
              className="flex flex-col"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

              <span
                className="inline-block text-[10.5px] uppercase tracking-[0.14em] text-datum mb-5 font-medium"
                style={{ fontFamily: 'var(--font-body)' }}>
                Aedifica Explore · Hillside Innovation Academy · Building Bridges
              </span>

              <h2
                id="featured-h2"
                className="text-[1.875rem] lg:text-[2.5rem] italic text-anthracite leading-[1.08] tracking-[-0.028em] mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                From "fixing things" to defending a design.
              </h2>

              <p
                className="text-[14.5px] text-anthracite/75 leading-[1.72] mb-4"
                style={{ fontFamily: 'var(--font-body)' }}>
                A Hillside learner began the program describing engineering the way most middle schoolers do, as "fixing things." Over ten weeks, that picture sharpened. Working on one of four teams, each member with an assigned leadership role, they took on a Hudson River bridge challenge: design a prototype, build it, and make the case for why it was the strongest, to a panel of professional civil engineering judges.
              </p>
              <p
                className="text-[14.5px] text-anthracite/75 leading-[1.72] mb-6"
                style={{ fontFamily: 'var(--font-body)' }}>
                Along the way they learned the real vocabulary of structures: tension, compression, buckling, the strongest shapes. They learned that a prototype that fails a test isn't a failure, it's information. And they learned to stand up, explain a decision, and answer a hard question from an engineer who builds things for a living.
              </p>

              <blockquote
                className="text-[1.25rem] italic text-anthracite leading-[1.45] tracking-[-0.015em] bg-bone px-5 py-4 mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                "When we mess up, this only sets you up for a new door to open."
                <cite className="block text-[12px] not-italic text-anthracite/75 mt-2 tracking-normal" style={{ fontFamily: 'var(--font-body)' }}>
                  A Hillside learner, post-program reflection
                </cite>
              </blockquote>

              <div className="bg-bone px-6 py-5 mt-auto">
                <p
                  className="text-[10px] uppercase tracking-[0.16em] text-anthracite/78 mb-3 font-medium"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Three observable outcomes
                </p>
                <ol className="space-y-3">
                  {[
                    'Completed and defended a team bridge prototype before a panel of professional civil engineering judges.',
                    'Articulated a deeper view of engineering: pre/post surveys show the cohort moving from "designing a structure" to "designing, creating, testing, and improving solutions."',
                    'Advanced STEM trajectory: 6 of the 11 eighth-grade participants (55%) earned acceptance into the selective Union County Vocational-Technical Schools for 2025-26.',
                  ].map((outcome, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle size={17} weight="fill" className="text-datum flex-shrink-0 mt-[2px]" />
                      <p
                        className="text-[13px] text-anthracite/75 leading-[1.55]"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {outcome}
                      </p>
                    </li>
                  ))}
                </ol>
                <p
                  className="text-[11px] text-anthracite/70 italic mt-3 leading-[1.55]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Outcome 3 is a cohort-level result, not attributed to a single learner.
                </p>
              </div>

            </motion.div>

            {/* Image — desktop only */}
            <motion.div
              className="hidden lg:block overflow-hidden"
              initial={reduce ? undefined : { opacity: 0, x: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.7, delay: 0.15, ease: EASE }}>
              <img
                src="/images/impact-story.png"
                  loading="lazy"
                alt="Stevens Institute students with Bridging Brilliance team at program showcase"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(15%) contrast(1.05)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Story Grid ── bg-bone */}
      <section id="stories" className="bg-bone py-14 lg:py-20" aria-labelledby="stories-h2">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-10 lg:mb-14">
            <motion.h2
              id="stories-h2"
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
              Learners, schools, and partners.
            </motion.h2>
            <motion.p
              className="text-[14px] text-anthracite/75 leading-[1.7] max-w-[56ch] mx-auto"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
              Every card is drawn from the program's own record: students' words, the school's implementation, the partnership's structure. Filter by program to explore.
            </motion.p>
          </div>

          {/* Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            role="group"
            aria-label="Filter stories by program"
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            {FILTERS.map(({ key, label, activeCls }) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                aria-pressed={activeFilter === key}
                className={`text-[13px] px-4 py-2 border transition-colors duration-150 cursor-pointer ${
                  activeFilter === key
                    ? activeCls
                    : 'bg-transparent border-sediment/35 text-anthracite/75 hover:border-anthracite/40 hover:text-anthracite'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}>
                {label}
              </button>
            ))}
          </motion.div>

          {/* Grid — first card spans 2 cols as featured */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((story, i) => (
              <StoryCard key={story.id} story={story} index={i} reduce={reduce} featured={i === 0} />
            ))}
          </div>
          {filtered.length === 0 && (
            <p
              className="text-[14px] text-anthracite/75 leading-[1.7] border border-sediment/25 px-7 py-8 max-w-[62ch]"
              style={{ fontFamily: 'var(--font-body)' }}>
              No published stories for this program yet. Aedifica publishes only genuine,
              permission-cleared learner stories; future cohorts will add theirs here, on the record.
            </p>
          )}

        </div>
      </section>

      {/* ── Impact Statistics ── bg-snow */}
      <section id="impact" className="bg-snow py-14 lg:py-20" aria-labelledby="stats-h2">
        <div className="max-w-7xl mx-auto px-6">

          <div className="lg:grid lg:grid-cols-[1fr_0.55fr] lg:gap-16 lg:items-end mb-8 lg:mb-10">
            <motion.h2
              id="stats-h2"
              className="text-[2rem] lg:text-[3rem] xl:text-[4.5rem] leading-[1.04] tracking-[-0.04em] text-anthracite italic"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
              What the 2025 cohort shows.
            </motion.h2>
            <motion.p
              className="text-[13.5px] text-anthracite/75 leading-[1.7] mt-4 lg:mt-0"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
              Documented results from the Spring 2025 Building Bridges cohort (Program Year 2). Every figure is stated directly in the attached program report.
            </motion.p>
          </div>

          {/* Stats — 3-col horizontal on lg: num | label | meaning */}
          <div className="border-t border-sediment/20">
            {STATS.map(({ num, label, meaning, accent }, i) => (
              <motion.div
                key={label}
                className="grid grid-cols-[4.5rem_1fr] lg:grid-cols-[6.5rem_13rem_1fr] gap-x-6 lg:gap-x-10 border-b border-sediment/15 py-3.5 lg:items-center"
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.35, delay: i * 0.04, ease: EASE }}>
                <p
                  className={`text-[1.75rem] lg:text-[2rem] italic leading-[1] tracking-[-0.04em] ${accent} select-none`}
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                  aria-hidden="true">
                  {num}
                </p>
                {/* On mobile: label + meaning stack in one cell. On lg: each becomes its own column via lg:contents */}
                <div className="lg:contents">
                  <p
                    className="text-[14px] text-anthracite italic leading-[1.3] tracking-[-0.012em] mb-0.5 lg:mb-0 lg:self-center"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {label}
                  </p>
                  <p
                    className="text-[12.5px] text-anthracite/75 leading-[1.55] lg:self-center"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {meaning}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-[11.5px] italic text-anthracite/70 leading-[1.65] max-w-[72ch] mt-6"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            Supporting measures: 22% of HIA enrollment reached. Pre-survey response 100%, post-survey 85%. This is a middle-school STEM enrichment program, not a credentialing program. Employer touchpoints reflect career exposure, not workforce placement. School-wide proficiency results exist but are not measured on these 21 participants and are not claimed as program outcomes.
          </motion.p>

        </div>
      </section>

      {/* ── What Changed for Students ── bg-anthracite */}
      <section id="changed" className="bg-anthracite py-14 lg:py-20" aria-labelledby="changed-h2">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-8 lg:mb-10">
            <motion.h2
              id="changed-h2"
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.75rem] leading-[1.04] tracking-[-0.035em] text-white italic mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
              Five shifts, in students' own words.
            </motion.h2>
            <motion.p
              className="text-[14px] text-white/55 leading-[1.7] max-w-[56ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
              Drawn from student reflections and the Engineering Information Foundation report, the changes the program team and the data both named.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-px bg-white/10">
            {SHIFTS.map(({ Icon, heading, body, quote }, i) => (
              <motion.div
                key={heading}
                className={`bg-anthracite px-6 py-6 lg:py-7 flex flex-col gap-3 ${i === 4 ? 'lg:col-span-2 xl:col-span-1' : ''}`}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: (i % 2) * 0.07, ease: EASE }}>
                <Icon size={32} className="text-datum" weight="regular" />
                <h3
                  className="text-[1.125rem] italic text-white leading-[1.2] tracking-[-0.018em]"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {heading}
                </h3>
                <p
                  className="text-[13px] text-white/60 leading-[1.65]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {body}
                </p>
                <p
                  className="text-[12px] italic text-white/65 leading-[1.6]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {quote}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Alumni Pathways ── bg-snow */}
      <section id="pathways" className="bg-snow py-14 lg:py-20" aria-labelledby="pathways-h2">
        <div className="max-w-4xl mx-auto px-6">

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            <h2
              id="pathways-h2"
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              An early experience, not an endpoint.
            </h2>
            <p
              className="text-[15px] text-anthracite/75 leading-[1.72] mb-3"
              style={{ fontFamily: 'var(--font-body)' }}>
              Building Bridges helps a middle schooler see engineering as reachable, and gives them a first taste of a college campus, a real design challenge, and an engineer's questions. For the 2025 eighth-grade cohort, the next step is already visible: more than half earned acceptance into selective STEM high schools.
            </p>
            <p
              className="text-[14px] text-anthracite/75 mb-8"
              style={{ fontFamily: 'var(--font-body)' }}>
              After an early Aedifica experience, next steps may include:
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-2.5"
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}>
            {PATHWAY_CHIPS.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 text-[13px] text-anthracite/75 border border-sediment/30 px-4 py-2"
                style={{ fontFamily: 'var(--font-body)' }}>
                <span className="w-[5px] h-[5px] bg-datum flex-shrink-0" aria-hidden="true" />
                {chip}
              </span>
            ))}
          </motion.div>

          <motion.p
            className="text-[12px] italic text-anthracite/75 mt-8 leading-[1.6]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            No outcomes are guaranteed; the work is in keeping the door open.
          </motion.p>

        </div>
      </section>

      {/* ── CTA ── bg-snow pb-0 */}
      <section className="bg-snow pt-6 lg:pt-10 pb-0" aria-label="Get involved with Aedifica">
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
              Help the next learner find the pathway.
            </h2>

            <p
              className="text-[15px] text-white/90 leading-[1.7] max-w-[52ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Every cohort starts with a school, a partner, or a funder willing to open a door. If you want to bring an Aedifica program to your students or support the next cohort, we'd welcome the conversation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/partner"
                className="inline-flex items-center justify-center bg-white text-datum text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-white/92"
                style={{ fontFamily: 'var(--font-body)' }}>
                Start a Partnership Conversation
              </Link>
              <Link href="/curriculum/bridging-brilliance"
                className="inline-flex items-center justify-center border border-white/30 text-white text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-white/8"
                style={{ fontFamily: 'var(--font-body)' }}>
                Explore the Bridging Brilliance curriculum
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
