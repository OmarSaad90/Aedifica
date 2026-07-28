'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { AccessFunding } from '../components/AccessFunding'
import { AboutFAQ } from '../components/AboutFAQ'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

type Value = {
  name: string
  shortForm: string
  description: string
  bg: string
  textMain: string
  textSub: string
  border: string
}

const VALUES: Value[] = [
  {
    name: 'Built, not borrowed.',
    shortForm: 'From the jobsite backward, not the textbook forward.',
    description:
      'We design programs from the jobsite backward, not from the textbook forward. Every Aedifica curriculum carries named employer validators who confirm that what we teach matches the work mid-market New Jersey general contractors are doing today, not the work the industry was doing five years ago. Curriculum that cannot survive a project executive\'s review does not enter a cohort.',
    bg: 'bg-datum',
    textMain: 'text-white',
    textSub: 'text-white/90',
    border: 'border-white/20',
  },
  {
    name: 'Technology-fluent by default.',
    shortForm: 'The tools of the work, taught in the tools of the work.',
    description:
      'Modern construction-management work makes use of technology, software, Procore, BIM viewers, drone-captured site documentation, and AI-assisted scheduling and project-controls platforms. Aedifica curriculum is built in those tools at every level because that is the actual present of the work. Graduates leave fluent in the platforms employers already use, alongside the green-building, energy-efficiency, and resilience standards that have become baseline expectations of modern construction management.',
    bg: 'bg-sediment',
    textMain: 'text-anthracite',
    textSub: 'text-anthracite/85',
    border: 'border-anthracite/15',
  },
  {
    name: 'Equity is the strategy.',
    shortForm: 'The talent pipeline, not the side door.',
    description:
      'Overlooked adults, justice-impacted, returning to work after caregiving, transitioning from military service, are not a beneficiary group. They are the talent pipeline. We design wraparound supports, regulatory pathways, and credential articulation specifically for the population we currently serve, and we serve one population excellently before adding the next. The durable construction workforce New Jersey needs will not be built from the people the system already served well.',
    bg: 'bg-quarry',
    textMain: 'text-anthracite',
    textSub: 'text-anthracite',
    border: 'border-anthracite/15',
  },
  {
    name: 'Outcomes over activity, honestly reported.',
    shortForm: 'The metric is the moat.',
    description:
      'We measure ourselves by placement rate, credential attainment, wage at placement, and apprenticeship articulation: not by hours delivered or seats filled. Every Aedifica program publishes outcome data using the same definitions every cohort. Cohort 1\'s metric is also Cohort 8\'s metric. We do not redefine "placement" to inflate headlines.',
    bg: 'bg-patina',
    textMain: 'text-white',
    textSub: 'text-white/92',
    border: 'border-white/20',
  },
  {
    name: 'Partner architecture over founder architecture.',
    shortForm: 'The strength of the network is the strength of the program.',
    description:
      'We do not duplicate infrastructure our partners already provide. Community-based organizations own recruitment and case management. County colleges and workforce boards own fiscal capacity and reporting. Employers own role definitions and interview commitments. Aedifica owns curriculum, instruction, capstone design, and outcome measurement. The discipline of staying inside our lane is what lets the program scale beyond a single founder.',
    bg: 'bg-anthracite',
    textMain: 'text-white',
    textSub: 'text-white/75',
    border: 'border-white/15',
  },
  {
    name: 'Radical legibility.',
    shortForm: 'If it needs us in the room, it isn’t finished.',
    description:
      'What we design must be implementable by the people who inherit it, not only by the consultants who wrote it. Curriculum that requires its authors in the room is a dependency, not a pathway. Every Aedifica program is delivered with the instructor materials, documentation, and measurement definitions a partner needs to run it without us, because a program that collapses when we leave was never a pathway in the first place.',
    bg: 'bg-rebuild-deep',
    textMain: 'text-white',
    textSub: 'text-white/85',
    border: 'border-white/20',
  },
]

function ValueTile({ value, index, reduce, anchor }: {
  value: Value
  index: number
  reduce: boolean | null
  anchor?: boolean
}) {
  return (
    <motion.div
      className={`${value.bg} px-7 py-8 lg:px-9 lg:py-9 flex flex-col ${
        anchor ? 'lg:flex-row lg:items-center lg:gap-14 xl:gap-20 lg:px-12 lg:py-11' : 'justify-between h-full'
      }`}
      initial={reduce ? undefined : { opacity: 0, y: 22 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={reduce ? undefined : VIEWPORT}
      transition={reduce ? undefined : { duration: 0.5, delay: Math.min(index * 0.08, 0.32), ease: EASE }}>

      <div className={anchor ? 'lg:flex-1' : ''}>
        <h3
          className={`italic ${value.textMain} leading-[1.14] tracking-[-0.022em] mb-3 [text-wrap:balance] ${
            anchor
              ? 'text-[1.75rem] lg:text-[2.25rem] xl:text-[2.625rem]'
              : 'text-[1.375rem] lg:text-[1.625rem] xl:text-[1.875rem]'
          }`}
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
          {value.name}
        </h3>
        <p
          className={`${value.textMain} leading-[1.6] ${anchor ? 'text-[14px] max-w-[62ch]' : 'text-[13px] max-w-[38ch]'}`}
          style={{ fontFamily: 'var(--font-body)' }}>
          {value.description}
        </p>
      </div>

      <div className={anchor ? `mt-7 lg:mt-0 lg:flex-1 lg:pl-14 xl:pl-20 lg:border-l ${value.border}` : `mt-6 pt-5 border-t ${value.border}`}>
        <p
          className={`italic ${value.textSub} leading-[1.4] tracking-[-0.012em] ${anchor ? 'text-[1.125rem] lg:text-[1.3125rem] max-w-[34ch]' : 'text-[1rem]'}`}
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
          {value.shortForm}
        </p>
      </div>

    </motion.div>
  )
}

// Dr. Karam's founder letter — teaser shows the first entries inline;
// the full letter opens in a modal. `pull: true` renders as a serif pull-line.
const FOUNDER_LETTER: { text: string; pull?: boolean }[] = [
  { text: 'Ever since I can remember, I have believed that education can change the direction of a life.', pull: true },
  { text: 'That belief began at home. My father was the first in his family to receive a university education, studying at Saint Joseph University in Lebanon and later at the École Nationale des Ponts et Chaussées in France. He came from a small village, Ehden, and from a family where opportunity was not guaranteed. His own father could not read or write, but my grandmother understood that education could open a door that poverty and instability tried to keep closed.' },
  { text: 'My father carried that lesson with him everywhere. He gave my siblings and me the best education he could, even when it required sacrifice. When I left for London to study civil engineering, he told me something I have never forgotten: "Your education is one of the few things that no one can ever take away from you." Years later, when I was accepted to MIT for graduate study, he was overjoyed, and he once again made sacrifices so I could continue learning.' },
  { text: 'That gift shaped my life. It also shaped my responsibility.' },
  { text: 'At MIT, I had the privilege of serving as a teaching assistant for graduate and undergraduate probability and statistics courses, where I received the first Best Teaching Assistant award ever given for that class. I was also part of the early MIT OpenCourseWare effort, whose mission was to make high-quality education freely available to people around the world. Those experiences confirmed something I had always felt: knowledge should not belong only to those who already have access. It should be transferred, shared, and used to create opportunity.' },
  { text: 'My career has always lived at the intersection of earth, engineers, and education.', pull: true },
  { text: 'The earth is the foundation: the communities we live in, the infrastructure we depend on, and the environment we have a responsibility to protect and improve. Engineers are the builders of possibility: the people who turn ideas into roads, bridges, schools, hospitals, resilient coastlines, transit systems, and the physical systems that allow society to function. Education is the bridge: the force that allows people to enter that world, understand it, shape it, and build a better future for themselves and others.' },
  { text: 'That belief has guided me through academia, construction, entrepreneurship, and workforce development. I helped build and lead the workforce at Sarooj Construction Company, contributing to more than 200 infrastructure projects with over $1 billion in value. In that environment, I saw what happens when people are given the right skills, expectations, confidence, and support. A few practical capabilities can change how someone sees themselves. They can open the door to better work, greater dignity, and a more financially secure future.' },
  { text: 'Today, I serve as a Teaching Associate Professor at Stevens Institute of Technology in the Department of Civil, Environmental, and Ocean Engineering, where I lead the graduate Construction Management program. I have also delivered pre-college engineering programs for high-school students through Stevens and helped bring STEM learning to middle-school students through the Hillside Innovation Academy / Bridging Brilliance program. That work has been among the most rewarding of my life. I watched students begin to speak the language of engineering, understand how infrastructure shapes their communities, and imagine futures that felt respected, bright, and achievable.' },
  { text: 'Aedifica was born from that same belief.' },
  { text: 'The United States is entering a generational period of infrastructure investment. In New Jersey and the New York metropolitan region, major programs, from transportation and airport expansion to resiliency and public infrastructure, will require not only engineers and tradespeople, but also the next generation of construction managers, coordinators, estimators, schedulers, document-control professionals, safety leaders, and field supervisors.' },
  { text: 'At the same time, too many capable people remain outside the traditional pathways into these careers. Some never had access to the right school, network, credential, mentor, or first opportunity. Traditional universities do many things well, but they have not built enough bridges for the people who are ready to contribute, grow, and lead.' },
  { text: 'That is why we founded Aedifica.' },
  { text: 'Aedifica is built on three words: we build the builders.', pull: true },
  { text: 'We teach people to understand the built environment, prepare them to participate in it, and connect them to pathways where their talent can grow into respected, honorable, and financially rewarding careers. We work with education institutions, workforce partners, community organizations, employers, and funding partners to create construction-management pathways that are practical, measurable, and connected to real advancement.' },
  { text: 'For me, this work is personal. I know what education did for my family. I know what it did for me. And I know that talent is everywhere, even when opportunity is not.' },
  { text: 'Through Aedifica, my goal is simple: to help build the builders, to prepare people for honorable, respected, financially rewarding careers, and to help our communities develop the human talent needed to build their future and the future of our great country.' },
]

type TeamMember = {
  name: string
  role: string
  roleColor: string
  credentials: string
  bio: string
  fullBio?: string[]
  image: string
}

const TEAM: TeamMember[] = [
  {
    name: 'Dr. Karim Karam',
    role: 'Co-Founder & CEO',
    roleColor: 'text-wine',
    credentials: 'Stevens Institute of Technology · MIT · Construction Management',
    bio: 'Dr. Karim Karam is Co-Founder & CEO of Aedifica and a Teaching Associate Professor at Stevens Institute of Technology, where he leads the graduate Construction Management program. His work sits at the intersection of engineering, education, construction, and workforce mobility.',
    fullBio: [
      "The son of a Lebanese engineer who was the first in his family to attend university, Karim grew up with the belief that education is one of the few things no one can take away. At MIT he taught probability and statistics and was involved in OpenCourseWare's mission to expand access to knowledge. In industry, he helped build and train construction teams across major infrastructure work.",
      'Dr. Karim Karam co-founded Aedifica because he understands education as both a personal inheritance and a public responsibility.',
      "His belief in the power of learning began at home. Karim's father, born into a family from Ehden, Lebanon, became the first in his family to receive a university education, studying at Université Saint-Joseph in Lebanon and later at École Nationale des Ponts et Chaussées in France. His own father was illiterate, but his mother believed deeply enough in education to send him to boarding school from a small village. That conviction shaped the next generation. Karim's father did everything he could to give his children access to education, including selling personal assets when necessary. When Karim left for London to study civil engineering, his father told him that education is one of the few things no one can take away.",
      'That lesson stayed with him.',
      'Karim went on to pursue graduate study at MIT, where he served as a teaching assistant for probability and statistics at both the undergraduate and graduate levels and received the Best TA award for the course. He was also involved in MIT OpenCourseWare, an initiative built around the idea that high-quality knowledge should be accessible to those who seek it.',
      'His career has continued to connect education, engineering, and opportunity. As a co-founder of Sarooj Construction Company, Karim helped build and lead a construction workforce across major infrastructure work, while seeing firsthand how focused training and upskilling can change confidence, performance, self-esteem, and financial mobility. Today, he is a Teaching Associate Professor at Stevens Institute of Technology, where he leads the graduate Construction Management program and prepares students for careers across the New York and New Jersey construction market.',
      "Karim's commitment to earlier pathways is equally central to Aedifica. Through Stevens, he has delivered pre-college engineering workshops for high-school students, and he volunteered to help develop and deliver a STEM program at Hillside Innovation Academy. That experience became one of the most rewarding of his career: students began to speak the language of engineering, see themselves as problem-solvers, and imagine a future that could be respected, creative, and financially rewarding.",
      "Aedifica is the institutional expression of that life's work. It is built on a simple conviction: talent is not missing. The pathway is. Aedifica exists to build disciplined, employer-informed construction-management pathways for overlooked learners, education institutions, workforce partners, and employers, so preparation can lead somewhere measurable, dignified, and real.",
    ],
    image: '/images/founder-karim.jpg',
  },
  {
    name: 'Evelyne Karam',
    role: 'Co-Founder & Chief Education Strategy Officer',
    roleColor: 'text-terracotta-deep',
    credentials: 'Education policy · Curriculum design · Evaluation',
    bio: 'Evelyne Karam is Co-Founder & Chief Education Strategy Officer of Aedifica. She brings expertise in education policy, curriculum design, evaluation, capacity building, and cross-sector reform, including USAID-, UNICEF-, and ministry-linked education initiatives.',
    fullBio: [
      "Aedifica's moat is not generic curriculum but published placement, retention, wage progression, employer-signed pathways, articulation agreements, and disciplined outcomes reporting. That is precisely where her education-strategy and evaluation background strengthens the founding team.",
      "Evelyne Karam is Co-Founder & Chief Education Strategy Officer of Aedifica, where she leads the education, curriculum, evaluation, and public-sector strategy behind Aedifica's construction-management pathways. Her work strengthens Aedifica's ability to translate employer demand into rigorous learning experiences for overlooked learners, from school-based career exposure to adult bridge cohorts and credentialed workforce pipelines.",
      'Evelyne brings deep experience in education policy, national strategy development, curriculum design, capacity building, and program evaluation. She holds a Master of Education in International Education Policy from Harvard University and a Master of Education in International Educational Development from Boston University.',
      'Her consulting and program leadership work has supported USAID-funded education initiatives, UNICEF-linked youth programming, national career education and guidance strategy, non-formal education evaluation, teacher capacity building, and school-development reform. She has designed learning frameworks, evaluation tools, curriculum components, teacher workshops, and strategy processes across public-sector, nonprofit, and cross-sector education systems.',
      'At Aedifica, Evelyne ensures that every credential is not just taught, but designed, assessed, validated, and connected to real learner advancement.',
    ],
    image: '/images/founder-evelyne.png',
  },
  {
    name: 'Dr. Nicole Gilmore-Silva',
    role: 'Co-Founder & Chief Education and Industry Partnerships Officer',
    roleColor: 'text-clay',
    credentials: 'Ed.D. · Teach For America · Founding middle-school principal',
    bio: 'Dr. Nicole Gilmore-Silva is Co-Founder & Chief Education and Industry Partnerships Officer of Aedifica. A former principal and district leader with more than two decades in public education, she builds the school, university, employer, and community partnerships that connect learners to the industries shaping the future.',
    fullBio: [
      'Her cross-sector workforce development and partnership experience spans Union and Essex counties, New Jersey. She cultivated the partnership between Stevens Institute of Technology and Hillside Innovation Academy that became a foundation for Aedifica\'s community delivery model, and leads the organization\'s community-organization and workforce-agency relationships.',
      'Where others see barriers to opportunity, Dr. Gilmore-Silva builds pathways that prepare learners for the future.',
      'Aedifica is built on the belief that opportunity should never be determined by circumstance. As Co-Founder and Chief Education and Industry Partnerships Officer, Dr. Nicole Gilmore-Silva advances that mission by creating authentic partnerships, learning experiences, and workforce pathways that prepare students, educators, and communities for the industries shaping the future.',
      'For more than two decades, Dr. Gilmore-Silva has dedicated her career to expanding opportunity through education. She began her career as a Teach For America corps member in the District of Columbia Public Schools before continuing her work in Newark Public Schools. Recognized for her instructional excellence, innovative pedagogy, and commitment to student achievement, she served as a teacher, instructional coach, and mentor before advancing to District Supervisor of Special Education, principal of a PreK-5 school, and ultimately founding principal of an innovation-focused middle school serving students in Grades 7 and 8.',
      "It was through these experiences that Dr. Gilmore-Silva recognized a disconnect between classroom learning and the rapidly changing workforce. Rather than accepting that divide, she cultivated partnerships among schools, universities, industry, and community organizations to create authentic learning experiences that expanded students' understanding of what was possible.",
      "Dr. Gilmore-Silva believes the future of education is not defined by a single discipline or career pathway. It is defined by a learner's ability to adapt, solve problems, and contribute in an ever-changing world. Engineering, artificial intelligence, aviation, construction management, health sciences, and emerging technologies are not the destination; they are the vehicles through which learners gain exposure, build confidence, and discover pathways to opportunity. She believes students cannot pursue careers they have never experienced, and that meaningful exposure is the foundation upon which preparation, aspiration, and economic mobility are built.",
      "Under her leadership, students outperformed the State of New Jersey in science, exceeded 90% proficiency in English Language Arts, and achieved 100% proficiency among enrolled Grade 8 Algebra students after implementation of advanced mathematics pathways leading to Geometry before high school. Students have gone on to attend some of New Jersey's and the nation's most competitive secondary schools.",
      'Recognizing that exposure shapes aspirations, Dr. Gilmore-Silva intentionally cultivated a cross-sector network of universities, industry leaders, nonprofit organizations, and community partners. Through partnerships with Stevens Institute of Technology, NJIT, Kean University, Drew University, the Organization of Black Aerospace Professionals (OBAP), Urban Aviation Group (UAG), and Ascent to Equality (ACE), students engaged in authentic experiences spanning engineering, aviation, coding, artificial intelligence, architecture, construction management, forensic science, genetics, biomedical sciences, and healthcare. Every partnership was intentionally cultivated around one purpose: exposing students to possibilities before asking them to choose a path.',
      'At Aedifica, Dr. Gilmore-Silva continues that work by helping school districts, universities, employers, and community organizations rethink how opportunity is created. Her work extends beyond connecting education and industry; it is about building a movement that reimagines how students discover careers, how educators prepare learners, and how communities cultivate the workforce of tomorrow.',
      "Grounded in a lifelong commitment to service, Dr. Gilmore-Silva's leadership reflects the values of Delta Sigma Theta Sorority, Incorporated. Her contributions have been recognized by the NAACP, former Congressman Donald M. Payne Jr., Tom Giblin, Essex County, the City of Newark, Irvington Township, the New Jersey PTA, and numerous civic and educational organizations.",
      "Today, Dr. Gilmore-Silva's work extends beyond the K-12 landscape to include those already in the workforce, where she continues to build bridges between education, industry, and opportunity, preparing individuals, educators, and organizations for long-term economic success.",
      'While her work continues to evolve, her purpose remains constant: Education is the vehicle. Exposure is the catalyst. Preparation is the journey. Opportunity is the destination.',
    ],
    image: '/images/founder-nicole.jpg',
  },
  {
    name: 'Kimi Stephenson',
    role: 'Co-Founder & Community Program Lead',
    roleColor: 'text-ink-soft',
    credentials: 'M.S. Construction Engineering & Mgmt., Stevens · B.A. Criminal Justice, Rutgers · OSHA-10 · BPI',
    bio: 'Kimi Stephenson is Co-Founder & Community Program Lead of Aedifica, with over fifteen years at the intersection of construction, property, and education. She holds an M.S. in Construction Engineering and Management from Stevens Institute of Technology and co-designed the Bridging Brilliance STEM program at Hillside Innovation Academy.',
    fullBio: [
      'She carries the program-delivery side of the model: what it actually takes to run a cohort inside a school week, with real students, real materials, and a real showcase at the end.',
      "Kimi Stephenson has spent over fifteen years at the intersection of construction, property, and education: first coordinating affordable housing and mixed-use developments, then bringing hands-on engineering into the classroom. She holds a Master's in Construction Engineering and Management from Stevens Institute of Technology and a B.A. in Criminal Justice from Rutgers University.",
      "As Co-Founder & Community Program Lead of Aedifica, she co-designed and co-delivered the Bridging Brilliance STEM program at Hillside Innovation Academy, a 10-week intensive now documented as one of Aedifica's founding delivery models. She partners with the Urban League of Union County to extend construction-management workforce pathways to justice-impacted adults, veterans, returning caregivers, and career changers across New Jersey.",
      'Alongside Aedifica, Kimi is a Project Manager at Terry Developments LLC. She is OSHA-10 and BPI certified and holds an FAA Part 107 remote pilot license.',
    ],
    image: '/images/founder-kimi.jpg',
  },
]

function TeamMemberCard({ member, index, reduce, onExpandBio, bioExpanded }: {
  member: TeamMember
  index: number
  reduce: boolean | null
  onExpandBio: (el: HTMLButtonElement) => void
  bioExpanded: boolean
}) {
  return (
    <motion.div
      className="flex flex-col max-w-[260px] mx-auto w-full"
      initial={reduce ? undefined : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={reduce ? undefined : VIEWPORT}
      transition={reduce ? undefined : { duration: 0.55, delay: 0.08 * index, ease: EASE }}>

      <div className="aspect-[3/4] overflow-hidden mb-5">
        <img
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          className="w-full h-full object-cover object-top"
          style={{ filter: 'grayscale(18%) contrast(1.05)' }}
          loading="lazy"
        />
      </div>

      <p
        className={`text-[10.5px] ${member.roleColor} uppercase tracking-[0.18em] leading-[1.55] mb-2.5 select-none min-h-[3.1rem]`}
        style={{ fontFamily: 'var(--font-body)' }}>
        {member.role}
      </p>
      <h3
        className="text-[1.5rem] lg:text-[1.75rem] italic text-anthracite leading-[1.08] tracking-[-0.022em] mb-2"
        style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
        {member.name}
      </h3>
      <p
        className="text-[10.5px] text-anthracite/55 uppercase tracking-[0.08em] leading-[1.5] mb-4"
        style={{ fontFamily: 'var(--font-body)' }}>
        {member.credentials}
      </p>
      <p
        className="text-[13px] text-anthracite/78 leading-[1.65] flex-1"
        style={{ fontFamily: 'var(--font-body)' }}>
        {member.bio}
      </p>

      {member.fullBio && (
        <button
          onClick={(e) => onExpandBio(e.currentTarget as HTMLButtonElement)}
          aria-expanded={bioExpanded}
          className="mt-4 self-start text-[13px] text-wine underline underline-offset-2 decoration-wine/40 hover:decoration-wine transition-colors duration-150 cursor-pointer bg-transparent border-none p-0"
          style={{ fontFamily: 'var(--font-body)' }}>
          Read full biography
        </button>
      )}
    </motion.div>
  )
}

// Small hand-drawn line marks for the Earth / Engineers / Education signature.
// Deliberately not the sitewide Phosphor icon set — same drawn-line language as
// TheGap's skyline and WhoWeServe's truss, scaled down to a quiet, minimal glyph.
type EEEVariant = 'earth' | 'engineers' | 'education'

function EEEMark({ variant, colorClass, reduce }: { variant: EEEVariant; colorClass: string; reduce: boolean | null }) {
  const stroke = { fill: 'none' as const, stroke: 'currentColor', strokeWidth: 1.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const draw = (delay: number) => ({
    initial: reduce ? undefined : { pathLength: 0 },
    whileInView: reduce ? undefined : { pathLength: 1 },
    viewport: reduce ? undefined : VIEWPORT,
    transition: reduce ? undefined : { duration: 0.65, ease: EASE, delay },
  })

  if (variant === 'earth') {
    return (
      <svg width="52" height="30" viewBox="0 0 56 32" aria-hidden="true" className={`mb-4 opacity-80 ${colorClass}`}>
        <motion.path d="M2,11 C12,5 20,15 30,8 C38,3 48,10 54,6" {...stroke} {...draw(0)} />
        <motion.path d="M2,19 C12,13 20,23 30,16 C38,11 48,18 54,14" {...stroke} {...draw(0.12)} />
        <motion.path d="M2,27 C12,21 20,30 30,24 C38,19 48,26 54,22" {...stroke} {...draw(0.24)} />
        <motion.rect
          x="27.5" y="13.5" width="5" height="5" fill="currentColor" stroke="none"
          style={{ transformOrigin: '30px 16px', rotate: 45 }}
          initial={reduce ? undefined : { opacity: 0, scale: 0 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.3, ease: EASE, delay: 0.45 }}
        />
      </svg>
    )
  }

  if (variant === 'engineers') {
    return (
      <svg width="52" height="30" viewBox="0 0 56 32" aria-hidden="true" className={`mb-4 opacity-80 ${colorClass}`}>
        <motion.path d="M4,28 L4,10 L52,10 L52,28 Z" {...stroke} {...draw(0)} />
        <motion.path d="M4,28 L52,10" {...stroke} {...draw(0.32)} />
      </svg>
    )
  }

  return (
    <svg width="52" height="30" viewBox="0 0 56 32" aria-hidden="true" className={`mb-4 opacity-80 ${colorClass}`}>
      <motion.path d="M4,28 C4,8 52,8 52,28" {...stroke} {...draw(0)} />
      <motion.line x1="4" y1="28" x2="4" y2="31" {...stroke} {...draw(0.4)} />
      <motion.line x1="52" y1="28" x2="52" y2="31" {...stroke} {...draw(0.44)} />
    </svg>
  )
}

export function About() {
  const reduce = useReducedMotion()
  const [expandedMember, setExpandedMember] = useState<TeamMember | null>(null)
  const [letterOpen, setLetterOpen] = useState(false)
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!expandedMember && !letterOpen) {
      lastTriggerRef.current?.focus()
      return
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setExpandedMember(null)
        setLetterOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    requestAnimationFrame(() => closeButtonRef.current?.focus())
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [expandedMember, letterOpen])

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[56vh] flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24 relative overflow-hidden"
        aria-labelledby="about-h1">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-6 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            § 13 — About Aedifica
          </motion.span>

          <motion.h1
            id="about-h1"
            className="text-[3.5rem] lg:text-[5.5rem] xl:text-[6rem] leading-[0.93] tracking-[-0.04em] text-white italic mb-10"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
About Aedifica
          </motion.h1>

          <motion.p
            className="text-[14.5px] text-white/60 leading-[1.65] max-w-[85ch] mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
            Aedifica LLC is a New Jersey-based workforce architecture company building
            construction-management pathways for the scholars, schools, and employers shaping the built
            environment and our future.
          </motion.p>

          <motion.p
            className="text-[13px] text-white/50 leading-[1.65] max-w-[85ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.44, ease: EASE }}>
            Our team brings both sides of the gap together: a Stevens Institute of Technology professor
            who leads a graduate Construction Management program; a public-school principal and district
            leader with more than two decades of experience; an international education-strategy and
            evaluation specialist; and a construction-and-education practitioner with over fifteen years
            delivering programs inside real school weeks.
          </motion.p>

        </div>
      </section>

      {/* ── Mission & Vision ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="about-vision-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_0.6fr] lg:gap-16 xl:gap-24 lg:items-center">

            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 32 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.75, ease: SPRING }}>
              <div className="flex items-center gap-3 mb-8">
                <span className="w-[10px] h-[10px] rotate-45 bg-wine flex-shrink-0" aria-hidden="true" />
                <h3
                  className="text-[1.375rem] lg:text-[1.625rem] leading-[1.1] tracking-[-0.015em] text-anthracite italic"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
                  Mission &amp; Vision
                </h3>
              </div>
              <p
                className="text-[13px] text-anthracite/80 uppercase tracking-[0.2em] mb-5 select-none"
                style={{ fontFamily: 'var(--font-body)' }}>
                Mission
              </p>
              <div className="w-10 border-t-2 border-wine mb-8" aria-hidden="true" />
              <p
                className="text-[1.5rem] lg:text-[2rem] leading-[1.2] tracking-[-0.025em] text-anthracite italic mb-14"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                Aedifica designs and delivers construction-management career pathways for schools, workforce partners, and employers, with a focus on scholars who have talent but lack a clear route into the built environment.
              </p>
              <p
                className="text-[13px] text-anthracite/80 uppercase tracking-[0.2em] mb-5 select-none"
                style={{ fontFamily: 'var(--font-body)' }}>
                Vision
              </p>
              <div className="w-10 border-t-2 border-wine mb-8" aria-hidden="true" />
              <h2
                id="about-vision-h2"
                className="text-[1.5rem] lg:text-[2rem] leading-[1.2] tracking-[-0.025em] text-anthracite italic mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                We envision a New Jersey where every scholar, at every age, from every background, can see, walk, and own a clear path into the careers that build the state.
              </h2>
              
              <p
                className="text-[13px] text-anthracite/65 leading-[1.6] italic"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Signature: <span className="text-wine not-italic">From foundations to futures.</span> &middot; Earth. Engineers. Education.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 lg:mt-0"
              initial={reduce ? undefined : { opacity: 0, x: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
                aria-label="Aedifica brand identity">
                <source src="/videos/aedifica-brand.mp4" type="video/mp4" />
              </video>
            </motion.div>

          </div>

        </div>
      </section>

      {/* ── Values ── bg-bone */}
      <section id="values" className="bg-bone pt-14 lg:pt-20 pb-10 lg:pb-14 scroll-mt-24" aria-label="Values">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            className="mb-10 lg:mb-14"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            <p
              className="text-[12.5px] text-anthracite/75 uppercase tracking-[0.2em] mb-5 select-none font-medium text-center"
              style={{ fontFamily: 'var(--font-body)' }}>
              § 14 — Values
            </p>
            <h2
              id="about-values-h2"
              className="text-[1.75rem] lg:text-[2.375rem] leading-[1.15] tracking-[-0.025em] text-anthracite italic mb-12 lg:mb-14 mx-auto max-w-[26ch] text-center [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Earth. Engineers. Education, and the two values that hold them together.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-12 xl:gap-x-16">
              {([
                {
                  word: 'Earth.',
                  color: 'text-wine',
                  rule: 'border-wine',
                  mark: 'earth' as const,
                  def: 'The foundation: the communities we live in, the infrastructure we depend on, and the environment we have a responsibility to protect and improve. Connect infrastructure, sustainability, and place.',
                },
                {
                  word: 'Engineers.',
                  color: 'text-wine',
                  rule: 'border-wine',
                  mark: 'engineers' as const,
                  def: 'The builders of possibility: the people who turn ideas into roads, bridges, schools, hospitals, resilient coastlines, and transit systems. Teach disciplined problem-solving and project-management thinking.',
                },
                {
                  word: 'Education.',
                  color: 'text-wine',
                  rule: 'border-wine',
                  mark: 'education' as const,
                  def: 'The bridge: the force that allows people to enter that world, understand it, shape it, and build a better future. Create clear pathways, not isolated workshops.',
                },
              ] as const).map(({ word, color, rule, mark, def }, i) => (
                <motion.div
                  key={word}
                  className={`border-t-2 ${rule} pt-6`}
                  initial={reduce ? undefined : { opacity: 0, y: 18 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.55, delay: i * 0.09, ease: EASE }}>
                  <EEEMark variant={mark} colorClass={color} reduce={reduce} />
                  <p
                    className={`text-[2.25rem] lg:text-[2.75rem] italic leading-none mb-4 ${color}`}
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    {word}
                  </p>
                  <p
                    className="text-[13.5px] text-anthracite/78 leading-[1.7]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {def}
                  </p>
                </motion.div>
              ))}
            </div>
            <motion.p
              className="text-[13px] text-anthracite/72 leading-[1.7] mt-10 max-w-[62ch] mx-auto text-center"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.25, ease: EASE }}>
              Two further values complete the set: <strong className="text-anthracite font-medium">Access</strong>, design
              for people traditional systems often overlook, and <strong className="text-anthracite font-medium">Evidence</strong>, track
              outcomes and improve the model over time.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* ── Origin / Brand Story ── bg-snow */}
      <section id="history" className="bg-snow py-14 lg:py-20 scroll-mt-24" aria-labelledby="about-origin-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_0.72fr] lg:gap-16 xl:gap-24 lg:items-start">

            <div>
              <motion.p
                className="text-[10.5px] text-anthracite/75 uppercase tracking-[0.18em] mb-5 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
                § 15 — Origin &amp; history
              </motion.p>

              <motion.h2
                id="about-origin-h2"
                className="text-[2.25rem] lg:text-[3rem] xl:text-[4rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic mb-8"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 28 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.7, delay: 0.06, ease: SPRING }}>
                How Aedifica came to exist.
              </motion.h2>

              <motion.div
                className="space-y-4"
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.12, ease: EASE }}>
                <p
                  className="text-[12px] text-anthracite/75 uppercase tracking-[0.18em] mb-3 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Origin
                </p>
                <p
                  className="text-[1.625rem] lg:text-[1.875rem] text-anthracite italic leading-[1.15] tracking-[-0.02em] mb-4"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  Founded inside the problem, not above it.
                </p>
                <p className="text-[15px] text-anthracite/75 leading-[1.72] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                  Aedifica was conceived at the intersection of three stubborn realities: a construction workforce aging out faster than it is being replaced; a curriculum pipeline that too often treats industry as an afterthought; and a growing population of non-traditional scholars who possess enormous capacity but are poorly served by institutional pathways designed for eighteen-year-olds.
                </p>
                <p className="text-[15px] text-anthracite/75 leading-[1.72] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                  Its founders came from both sides of that divide, licensed engineers and site experience on one hand, curriculum designers and educator-practitioners on the other. Aedifica exists because they refused to accept the polite fiction that these are separate problems for separate professions.
                </p>
                <p className="text-[15px] text-anthracite/75 leading-[1.72]" style={{ fontFamily: 'var(--font-body)' }}>
                  Between educator and employer, Aedifica does not referee. We translate, and when translation is insufficient, we rebuild the terms of the conversation itself.
                </p>

                <div className="pt-4 border-t border-sediment/20">
                  <p
                    className="text-[12px] text-anthracite/75 uppercase tracking-[0.18em] mb-3 select-none"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    Organizational history
                  </p>
                  <p className="text-[13.5px] text-anthracite/72 leading-[1.72]" style={{ fontFamily: 'var(--font-body)' }}>
                    Aedifica grew from years of construction-management practice in the field, teaching,
                    pre-college engineering programming, STEM outreach, and workforce-pathway design. The
                    model brings together classroom rigor, hands-on construction thinking, employer
                    relevance, and measurable scholar outcomes: a foundation in construction-management
                    education; prior delivery through middle school (Hillside and community-based
                    programming), high school (pre-college), and practical training and upskilling in
                    industry; expansion into New Jersey-focused workforce pathway architecture; and the
                    five programs, Explore, Pathway, Launch, Rebuild, and the Talent Pipeline, designed
                    as a single scalable pathway. Delivery status for each is published in{' '}
                    <Link href="/impact" className="text-anthracite underline underline-offset-2 decoration-anthracite/30 hover:decoration-anthracite transition-colors duration-150">
                      Impact &amp; accountability
                    </Link>.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="mt-10 lg:mt-0 lg:pt-2 lg:sticky lg:top-28">
              <motion.div
                className="bg-sediment/10 px-7 py-8"
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
            </div>

          </div>
        </div>
      </section>

      {/* ── Team ── bg-bone */}
      <section id="founders" className="bg-bone pt-14 lg:pt-20 pb-10 lg:pb-14 scroll-mt-24" aria-labelledby="about-team-h2">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-10 lg:mb-14">
            <motion.p
              className="text-[12.5px] text-anthracite/80 uppercase tracking-[0.18em] mb-4 select-none font-medium"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              § 16 — The founders
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

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 mb-14 lg:mb-16">
            {TEAM.map((member, i) => (
              <TeamMemberCard
                key={member.name}
                member={member}
                index={i}
                reduce={reduce}
                onExpandBio={(el) => { lastTriggerRef.current = el; setExpandedMember(expandedMember?.name === member.name ? null : member) }}
                bioExpanded={expandedMember?.name === member.name}
              />
            ))}
          </div>

          {/* Founders group photo */}
          <motion.figure
            className="overflow-hidden"
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
            <img
              src="/images/profs.JPG"
              alt="Dr. Karim Karam, Evelyne Karam, Dr. Nicole Gilmore-Silva, and Kimi Stephenson, the founders of Aedifica"
              className="w-full h-[340px] lg:h-[480px] object-cover object-top"
              style={{ filter: 'grayscale(20%) contrast(1.05)' }}
              loading="lazy"
            />
            <figcaption className="mt-4 text-[13px] text-anthracite/78 leading-[1.6] max-w-[60ch]" style={{ fontFamily: 'var(--font-body)' }}>
              <strong className="text-anthracite font-medium">Built with partners, not around them.</strong> Recruitment,
              fiscal capacity, and role definition belong to the partners who already do them well.
            </figcaption>
          </motion.figure>

        </div>
      </section>

      {/* ── The Founder Letter ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20 mt-8 lg:mt-10" aria-labelledby="founder-letter-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.6fr] lg:gap-16 xl:gap-24 lg:items-start">

            {/* Left: sticky intro */}
            <div className="mb-10 lg:mb-0 lg:sticky lg:top-28">
              <motion.p
                className="text-[10.5px] text-anthracite/75 uppercase tracking-[0.2em] mb-5 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
                The founder story
              </motion.p>
              <motion.h2
                id="founder-letter-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.028em] text-anthracite italic mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
                in Dr. Karam's own words
              </motion.h2>
            </div>

            {/* Right: the letter, opening visible, remainder behind a disclosure */}
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: 0.1, ease: EASE }}>

              <p
                className="text-[1.5rem] lg:text-[1.875rem] italic text-anthracite leading-[1.35] tracking-[-0.02em] mb-7"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                {FOUNDER_LETTER[0].text}
              </p>

              <div className="space-y-5 text-[14.5px] text-anthracite/80 leading-[1.75] max-w-[68ch]" style={{ fontFamily: 'var(--font-body)' }}>
                <p>{FOUNDER_LETTER[1].text}</p>
                <p>{FOUNDER_LETTER[2].text}</p>
                <p>{FOUNDER_LETTER[3].text}</p>
              </div>

              <button
                onClick={(e) => { lastTriggerRef.current = e.currentTarget; setLetterOpen(true) }}
                aria-haspopup="dialog"
                className="mt-7 text-[13.5px] text-wine underline underline-offset-4 decoration-wine/40 hover:decoration-wine transition-colors duration-150 cursor-pointer bg-transparent border-none p-0"
                style={{ fontFamily: 'var(--font-body)' }}>
                Read the full letter
              </button>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Value Mosaic — five principles as a color-block system, not a scroll of stripes ── */}
      <section id="principles" className="bg-bone pt-14 lg:pt-20 pb-14 lg:pb-20 scroll-mt-24" aria-labelledby="about-principles-h2">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12 lg:mb-14">
            <motion.p
              className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium mb-5"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              § 17 — Operating principles
            </motion.p>
            <motion.h2
              id="about-principles-h2"
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.5rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic scroll-mt-24 max-w-[16ch]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
              Six operating principles, and what each one costs us.
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-[3px]">
            <div className="lg:col-span-3"><ValueTile value={VALUES[0]} index={0} reduce={reduce} /></div>
            <div className="lg:col-span-2"><ValueTile value={VALUES[1]} index={1} reduce={reduce} /></div>
            <div className="lg:col-span-2"><ValueTile value={VALUES[2]} index={2} reduce={reduce} /></div>
            <div className="lg:col-span-3"><ValueTile value={VALUES[3]} index={3} reduce={reduce} /></div>
            <div className="lg:col-span-3"><ValueTile value={VALUES[4]} index={4} reduce={reduce} /></div>
            <div className="lg:col-span-2"><ValueTile value={VALUES[5]} index={5} reduce={reduce} /></div>
          </div>
        </div>
      </section>

      <AccessFunding />
      <AboutFAQ />

      {/* ── Biography Modal ── */}
      <AnimatePresence>
        {expandedMember?.fullBio && (
          <>
            <motion.div
              key="bio-backdrop"
              className="fixed inset-0 bg-anthracite/55 z-[100] backdrop-blur-[2px]"
              initial={reduce ? undefined : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={reduce ? undefined : { duration: 0.22 }}
              onClick={() => setExpandedMember(null)}
              aria-hidden="true"
            />
            <motion.div
              key="bio-modal"
              className="fixed inset-0 z-[101] flex items-center justify-center p-5 sm:p-10 pointer-events-none"
              initial={reduce ? undefined : { opacity: 0, y: 14, scale: 0.98 }}
              animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
              transition={reduce ? undefined : { duration: 0.28, ease: EASE }}>
              <div
                role="dialog"
                aria-modal="true"
                aria-label={`${expandedMember.name} — Full Biography`}
                className="bg-snow max-w-[580px] w-full max-h-[78vh] overflow-y-auto pointer-events-auto relative"
                onKeyDown={(e) => {
                  if (e.key !== 'Tab') return
                  const focusable = e.currentTarget.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                  )
                  if (!focusable.length) return
                  const first = focusable[0]
                  const last = focusable[focusable.length - 1]
                  if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
                    e.preventDefault()
                    ;(e.shiftKey ? last : first).focus()
                  }
                }}>
                <button
                  ref={closeButtonRef}
                  onClick={() => setExpandedMember(null)}
                  className="absolute top-2 right-2 w-11 h-11 flex items-center justify-center text-anthracite/70 hover:text-anthracite transition-colors duration-150 cursor-pointer bg-transparent border-none text-[20px] leading-none"
                  aria-label="Close biography">
                  ×
                </button>
                <div className="px-8 pt-10 pb-10 sm:px-10">
                  <p
                    className="text-[10px] text-anthracite/75 uppercase tracking-[0.22em] mb-2 select-none"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    Full Biography
                  </p>
                  <h3
                    className="text-[1.75rem] italic text-anthracite leading-[1.08] tracking-[-0.022em] mb-7"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    {expandedMember.name}
                  </h3>
                  <div className="space-y-5">
                    {expandedMember.fullBio.map((para, pi, fullBio) => {
                      const isClosingQuote = expandedMember.name === 'Dr. Nicole Gilmore-Silva' && pi === fullBio.length - 1
                      return (
                        <p
                          key={pi}
                          className={isClosingQuote ? 'text-[14px] text-wine leading-[1.72]' : 'text-[14px] text-anthracite/75 leading-[1.72]'}
                          style={{ fontFamily: 'var(--font-body)' }}>
                          {para}
                        </p>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Founder Letter Modal ── */}
      <AnimatePresence>
        {letterOpen && (
          <>
            <motion.div
              key="letter-backdrop"
              className="fixed inset-0 bg-anthracite/55 z-[100] backdrop-blur-[2px]"
              initial={reduce ? undefined : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={reduce ? undefined : { duration: 0.22 }}
              onClick={() => setLetterOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              key="letter-modal"
              className="fixed inset-0 z-[101] flex items-center justify-center p-5 sm:p-10 pointer-events-none"
              initial={reduce ? undefined : { opacity: 0, y: 14, scale: 0.98 }}
              animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0, y: 10, scale: 0.98 }}
              transition={reduce ? undefined : { duration: 0.28, ease: EASE }}>
              <div
                role="dialog"
                aria-modal="true"
                aria-label="The founder story, in Dr. Karam's own words"
                className="bg-snow max-w-[640px] w-full max-h-[82vh] overflow-y-auto pointer-events-auto relative"
                onKeyDown={(e) => {
                  if (e.key !== 'Tab') return
                  const focusable = e.currentTarget.querySelectorAll<HTMLElement>(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                  )
                  if (!focusable.length) return
                  const first = focusable[0]
                  const last = focusable[focusable.length - 1]
                  if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
                    e.preventDefault()
                    ;(e.shiftKey ? last : first).focus()
                  }
                }}>
                <button
                  ref={closeButtonRef}
                  onClick={() => setLetterOpen(false)}
                  className="absolute top-2 right-2 w-11 h-11 flex items-center justify-center text-anthracite/70 hover:text-anthracite transition-colors duration-150 cursor-pointer bg-transparent border-none text-[20px] leading-none"
                  aria-label="Close the founder letter">
                  ×
                </button>
                <div className="px-8 pt-10 pb-10 sm:px-10">
                  <p
                    className="text-[10px] text-anthracite/75 uppercase tracking-[0.22em] mb-2 select-none"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    The founder story
                  </p>
                  <h3
                    className="text-[1.75rem] italic text-anthracite leading-[1.08] tracking-[-0.022em] mb-7"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    in Dr. Karam's own words
                  </h3>
                  <div className="space-y-5">
                    {FOUNDER_LETTER.map((para, pi) =>
                      para.pull ? (
                        <p
                          key={pi}
                          className="text-[1.125rem] lg:text-[1.25rem] italic text-anthracite leading-[1.5]"
                          style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                          {para.text}
                        </p>
                      ) : (
                        <p
                          key={pi}
                          className="text-[14px] text-anthracite/75 leading-[1.72]"
                          style={{ fontFamily: 'var(--font-body)' }}>
                          {para.text}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </main>
  )
}
