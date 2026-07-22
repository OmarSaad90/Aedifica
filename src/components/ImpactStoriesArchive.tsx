'use client'
import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { CheckCircle } from '@phosphor-icons/react'

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

export function ImpactFeaturedStory() {
  const reduce = useReducedMotion()
  return (
    <section id="featured" className="bg-snow py-14 lg:py-20" aria-labelledby="featured-h2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_460px] lg:gap-16 xl:gap-20 lg:items-stretch">

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
  )
}

export function ImpactStoryGrid() {
  const reduce = useReducedMotion()
  const [activeFilter, setActiveFilter] = useState<StoryProgram>('all')

  const filtered = activeFilter === 'all'
    ? STORIES
    : STORIES.filter(s => s.program === activeFilter)

  return (
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
  )
}
