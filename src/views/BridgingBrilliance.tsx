'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import {
  CaretDown,
  CheckCircle,
  GraduationCap,
  Calendar,
  Clock,
  SquaresFour,
  Users,
  Trophy,
  Scales,
  Microphone,
  Compass,
} from '@phosphor-icons/react'

const CHIP_COLORS = {
  ngss:   { bg: '#16243F', label: 'NGSS' },
  math:   { bg: '#9C5500', label: 'Math' },
  ela:    { bg: '#1E7A72', label: 'ELA' },
  design: { bg: '#3E5C8A', label: 'Design & Tech' },
  career: { bg: '#7A4E63', label: 'Career' },
} as const
type ChipKey = keyof typeof CHIP_COLORS

function Chip({ type }: { type: ChipKey }) {
  const c = CHIP_COLORS[type]
  return (
    <span
      className="inline-block text-[10px] font-medium tracking-[0.04em] px-1.5 py-0.5 text-white leading-none"
      style={{ backgroundColor: c.bg, fontFamily: 'var(--font-body)' }}>
      {c.label}
    </span>
  )
}

type Week = {
  num: number
  question: string
  body: string
  activities: string
  product: string
  chips: ChipKey[]
}

type Unit = {
  id: string
  label: string
  weeks: string
  title: string
  summary: string
  callout: string
  weekList: Week[]
}

const UNITS: Unit[] = [
  {
    id: 'unit1',
    label: 'Unit 1',
    weeks: 'Weeks 1–3',
    title: 'Engineering and Sustainability Foundations',
    summary: 'Students learn how engineers think, why sustainable infrastructure matters, and what makes the Hudson crossing a problem worth solving. They build the vocabulary, the design mindset, and the project framing they will carry through the remaining nine weeks. The unit closes with a formal, team-authored problem statement that defines the scope of the design challenge.',
    callout: 'An engineering notebook in active use, a team-authored problem statement, and a documented list of design criteria and constraints reviewed by their instructor.',
    weekList: [
      {
        num: 1,
        question: 'What is STEM and how do engineers think?',
        body: 'Students are introduced to the engineering design process, establish program norms, and meet the final challenge: design a sustainable bridge across the Hudson River. They complete a quick low-stakes design challenge to surface their starting intuitions. Engineering notebooks are launched, and students begin a running vocabulary list of engineering and built-environment terms.',
        activities: 'Engineering design process overview · Program norms and team formation · Quick design challenge · Engineering notebook launch',
        product: 'Engineering notebook with first entries · Vocabulary list · Written reflection on the design challenge',
        chips: ['ngss', 'career'],
      },
      {
        num: 2,
        question: 'Why do we need sustainable infrastructure?',
        body: 'Students examine global infrastructure challenges through the lens of the UN Sustainable Development Goals, with focus on infrastructure (SDG 9), climate (SDG 13), and equity (SDG 10–11). They study real cases of aging or failed bridges and the community consequences, connecting the Hudson crossing to the SDGs and to the lived experience of people who depend on river crossings every day.',
        activities: 'SDG framework introduction · Case studies of aging infrastructure · Community-impact discussion · Connection mapping',
        product: 'Quick-write on community need · SDG connection map',
        chips: ['ela', 'career'],
      },
      {
        num: 3,
        question: 'What exactly is the Hudson bridge problem?',
        body: 'Students investigate the geographic, demographic, and social setting of the Hudson crossing using maps, Google Earth, photographs, and demographic data. They identify stakeholders, environmental considerations, and infrastructure constraints. Teams draft their first formal engineering problem statement and a structured list of criteria and constraints, which becomes the controlling document for the rest of the program.',
        activities: 'Geographic and demographic investigation · Stakeholder mapping · Criteria and constraints workshop · Problem statement drafting and peer review',
        product: 'Team-authored problem statement · Criteria and constraints document',
        chips: ['math', 'ela'],
      },
    ],
  },
  {
    id: 'unit2',
    label: 'Unit 2',
    weeks: 'Weeks 4–7',
    title: 'Bridge Types, Geometry, and Digital Modeling',
    summary: 'Students investigate the major bridge typologies (beam, arch, truss, suspension, cable-stayed) and connect structural form to function. They produce scaled drawings, develop digital models, calculate costs, and weigh sustainability and community trade-offs. By the end of Unit 2, every team has converged on a design direction supported by mathematical analysis, cost estimation, and social-and-environmental impact reasoning.',
    callout: 'Two concept sketches per team, one scaled digital model, a cost estimate with efficiency metrics, and a social and environmental impact matrix.',
    weekList: [
      {
        num: 4,
        question: 'How do structure and geometry keep bridges standing?',
        body: 'Students study the five major bridge typologies and connect each form to the forces it handles. A short mini-lab investigates forces in trusses and supports using simple physical models. Students sketch two early concept designs and annotate them with load paths, key dimensions, and the typology they represent.',
        activities: 'Bridge typology study · Forces and load-path mini-lab · Concept sketching · Annotated geometry exercise',
        product: 'Two concept sketches per team with labeled bridge typology, geometry, and load paths',
        chips: ['ngss', 'math'],
      },
      {
        num: 5,
        question: 'How can we design and model our bridges digitally?',
        body: 'Each team selects a concept to develop. Students produce a scaled drawing on graph paper, then build a digital model in Tinkercad, SketchUp, or Minecraft Education Edition. They calculate span, tower height, deck width, deck area, or cable length using proportional reasoning, and document those calculations as part of the design package.',
        activities: 'Concept selection · Scaled drawing · Digital modeling · Dimensional calculations',
        product: 'Scaled drawing · Digital model · Design calculation page',
        chips: ['math', 'design'],
      },
      {
        num: 6,
        question: 'Is our bridge financially sustainable?',
        body: 'Students estimate the cost of their design using a materials cost sheet with unit costs that approximate real construction economics. They are introduced to simple payback thinking and life-cycle cost concepts. They calculate cost per unit of load capacity as an efficiency metric, and begin to understand why two structurally sound bridges can have very different economic profiles.',
        activities: 'Materials cost estimation · Unit-cost workshop · Life-cycle thinking introduction · Cost-efficiency calculation',
        product: 'Cost estimate · Efficiency calculation · Financial section of the design report',
        chips: ['math', 'career'],
      },
      {
        num: 7,
        question: 'How do social and environmental factors shape best designs?',
        body: 'Students analyze the social and environmental dimensions of their design: environmental-justice considerations, habitat impacts, emissions, noise, views, and access. They complete an impact matrix that weighs these factors against cost and structural performance. Teams debate in a structured format whether the lowest-cost design is always the best design, and they write an argumentative paragraph defending their position with evidence.',
        activities: 'Social and environmental impact analysis · Impact matrix construction · Structured debate on trade-offs · Argumentative writing',
        product: 'Impact matrix · Argumentative paragraph on cost-vs-impact trade-offs',
        chips: ['ela', 'career'],
      },
    ],
  },
  {
    id: 'unit3',
    label: 'Unit 3',
    weeks: 'Weeks 8–12',
    title: 'Risk, Prototyping, Testing, and Communication',
    summary: 'Students learn to manage engineering risk, build physical prototypes, test them under increasing load, analyze failure modes, and present their work professionally. The unit closes with the Final Bridge Showcase and Testing Competition, a public-facing capstone event that brings families, educators, and STEM professionals into the classroom as audience and judges.',
    callout: 'A tested prototype, a complete data analysis with graphs and failure-mode analysis, a written design report, a polished public presentation, and an individual written reflection on their growth as STEM learners.',
    weekList: [
      {
        num: 8,
        question: 'What risks matter in engineering, and how do we choose among options?',
        body: 'Students are introduced to engineering risk, probability, and risk management using age-appropriate examples. They identify the specific risks in their own design and propose mitigations. They then build a weighted decision matrix that compares small variants of their design to choose which version to prototype first.',
        activities: 'Risk and probability mini-lesson · Risk identification and mitigation · Weighted decision matrix construction',
        product: 'Risk list · Mitigation plan · Weighted decision matrix selecting prototype variant',
        chips: ['math'],
      },
      {
        num: 9,
        question: 'How can we turn our design into a physical prototype?',
        body: "Teams build their first physical prototype to scale, using K'Nex or a comparable construction system. They work under named constraints: limited materials, maximum length, minimum deck width. They document construction issues, identify weak points, and complete at least one redesign before moving to testing.",
        activities: 'Prototype construction · Issue documentation · Redesign cycle',
        product: 'Prototype version 1 · Redesign documentation · Prototype version 2',
        chips: ['ngss', 'design'],
      },
      {
        num: 10,
        question: 'How do we test, measure, and improve our bridges?',
        body: "Bridge testing day. Each prototype is loaded under controlled, progressively increasing force until failure. Students record maximum load, deflection, cost, efficiency (load capacity per dollar), and failure mode. They graph their team's data alongside other teams' data and identify the structural characteristics that produced the strongest performance.",
        activities: 'Load testing · Data collection and recording · Graphing · Failure-mode analysis · Cross-team comparison',
        product: 'Testing data table · Performance graph · Failure-mode analysis',
        chips: ['math', 'ngss'],
      },
      {
        num: 11,
        question: 'How do engineers communicate their designs and justify decisions?',
        body: 'Students develop the deliverables for the final showcase. Each team creates a presentation deck and a written design report that includes problem context, design description, calculations, test data, evaluation, trade-offs, and a defended final claim. Mini-lessons in argument writing and visual design support the work. Students rehearse and receive structured peer feedback before the public event.',
        activities: 'Presentation development · Written report drafting · Visual data display design · Rehearsal and peer feedback',
        product: 'Draft slide deck · Written report draft · Visual data displays',
        chips: ['ela', 'design'],
      },
      {
        num: 12,
        question: 'Which bridge best meets the needs of our community? What did we learn as engineers?',
        body: 'The Final Bridge Showcase and Testing Competition. Teams present their designs to a public audience including families, educators, and invited STEM professionals. They demonstrate or summarize their physical testing results, defend their decisions, and answer audience questions. Every student writes an individual reflection on growth in engineering thinking, collaboration, and STEM identity.',
        activities: 'Final team presentations · Prototype demonstration or data review · Public audience scoring · Individual written reflection',
        product: 'Final presentation · Prototype demonstration · Individual reflection on STEM growth and pathway',
        chips: ['career', 'ela'],
      },
    ],
  },
]

const SNAPSHOT = [
  { icon: GraduationCap, label: 'Grade Band',  value: 'Middle school, Grades 6–8 (optimized for Grade 7)' },
  { icon: Calendar,      label: 'Duration',    value: '12 weeks' },
  { icon: Clock,         label: 'Weekly Time', value: '4–6 instructional hours per week' },
  { icon: SquaresFour,   label: 'Structure',   value: 'Three units, twelve weekly modules, one capstone' },
  { icon: Users,         label: 'Cohort Size', value: '20–28 students per cohort, recommended' },
  { icon: Trophy,        label: 'Deliverables',value: 'Engineering portfolio · Tested prototype · Team presentation · Individual reflection' },
  { icon: Scales,        label: 'Standards',   value: 'NGSS · Common Core Math & ELA · NJ 21st Century Life & Careers' },
  { icon: Microphone,    label: 'Capstone',    value: 'Final Bridge Showcase and Testing Competition with public audience' },
]

const EXPERIENCE = [
  {
    title: 'Authentic engineering practice',
    body: 'Students work through a complete engineering design cycle: define, model, build, test, refine, present. The cycle is not simulated; it is the same logic professional engineering teams use to deliver real infrastructure projects. Every decision is documented in an engineering notebook maintained from Week 1 through Week 12.',
  },
  {
    title: 'Hands-on prototyping',
    body: "Students build physical bridge prototypes from K'Nex, balsa, or comparable construction systems. Each prototype is constructed under named constraints and then load-tested to failure on a calibrated rig. Students document failure modes, complete at least one redesign, and re-test.",
  },
  {
    title: 'Digital modeling and visualization',
    body: 'Students develop scaled digital models using Tinkercad, SketchUp, or Minecraft Education Edition. They produce scaled drawings on graph paper before building digitally, and calculate span, deck area, tower height, and cable length using proportional reasoning.',
  },
  {
    title: 'Real-world community context',
    body: 'The Hudson River setting is not decorative. Students investigate the geographic, demographic, and environmental conditions of the actual crossing they are designing. They map stakeholders, analyze emissions and habitat impacts, and write a problem statement that names whose lives their bridge will affect and how.',
  },
  {
    title: 'Structured engineering teams',
    body: 'Students operate in defined engineering roles (project manager, structural designer, data analyst, communications lead) that rotate across units so every student practices every function. Teams hold weekly stand-ups, conduct internal design critiques, and meet documented role accountabilities.',
  },
  {
    title: 'Studio-style lessons',
    body: 'The program runs as a studio: short science, math, and ELA mini-lessons followed by extended time to design, build, test, and revise. Direct instruction exists to serve the build, not the other way around, so every concept lands inside work students already own.',
  },
  {
    title: 'Universal Design for Learning',
    body: 'Graphic organizers, sentence frames, multilingual supports, vocabulary banks, and varied product options keep every middle-school learner engaged and supported. Students show what they know through drawings, models, data, and writing, not through a single assessment format.',
  },
  {
    title: 'Public showcase and defense',
    body: 'The program closes with a Final Bridge Showcase and Testing Competition. Teams present to a public audience of peers, families, educators, and STEM professionals. They defend their decisions with data, justify their trade-offs, and respond to audience questions.',
  },
]

const OUTCOMES = [
  { strong: 'Define an engineering problem.',            rest: 'Students identify criteria, constraints, stakeholders, environmental considerations, and community needs for a real infrastructure scenario, and articulate them in a written problem statement.' },
  { strong: 'Compare engineering solutions.',            rest: 'Students explain how beam, arch, truss, suspension, and cable-stayed bridges differ in structure, geometry, force distribution, and material requirements, and justify which typology fits their site.' },
  { strong: 'Apply quantitative reasoning.',             rest: 'Students use ratios, scaled drawings, proportional reasoning, geometry, and unit-cost calculations to support every major design decision.' },
  { strong: 'Develop digital and physical models.',      rest: 'Students produce scaled sketches, build digital models in a CAD-class tool, and construct physical prototypes that meet defined performance criteria.' },
  { strong: 'Conduct fair tests and analyze data.',      rest: 'Students design and run load tests, collect performance data, document failure modes, graph results, and use evidence to drive design improvements.' },
  { strong: 'Evaluate trade-offs systematically.',       rest: 'Students compare design options using decision matrices that weigh cost, strength, sustainability, social impact, and risk, and defend their final choice with documented reasoning.' },
  { strong: 'Write technical arguments.',                rest: 'Students write engineering memos, design rationales, and a final design report that defend a claim with evidence drawn from research, calculations, and testing.' },
  { strong: 'Collaborate in structured roles.',          rest: 'Students practice professional team behavior including leadership, time management, peer feedback, role accountability, and structured critique, and reflect on their growth as collaborators.' },
  { strong: 'Present and defend their work publicly.',   rest: 'Students deliver a team presentation with slides, visuals, data displays, and clear oral communication to a non-classroom audience.' },
  { strong: 'Connect engineering to identity and future.', rest: 'Students reflect on their growth as STEM learners and articulate how their work connects to high school STEM pathways, college options, and career possibilities in engineering, construction management, and the built environment.' },
]

const STANDARDS = [
  {
    title: 'NGSS / NJSLS-Science: Engineering design',
    body: 'The program is built on the middle school engineering design strand (MS-ETS1-1 through MS-ETS1-4): define criteria and constraints of a design problem, evaluate competing design solutions systematically, analyze test data to identify the best characteristics, and develop a model for iterative testing and modification. Earth science extensions (MS-ESS3-3/5) appear in the sustainability content; physical science extensions (MS-PS2) appear in the forces and load-path work in Unit 2.',
    footer: 'Full NGSS / NJSLS-Science crosswalk available on request.',
  },
  {
    title: 'NJSLS-Mathematics (Grades 7–8)',
    body: 'Scale drawings, unit rates, and efficiency metrics (7.RP.A.1–3); multi-step calculations in cost and constraints (7.EE.3–4); geometry of trusses, scale, and similarity (7.G and 8.G); probability, risk, and comparing test data (7.SP); with the Standards for Mathematical Practice (MP1–MP6) applied throughout.',
    footer: 'Full NJSLS-Mathematics crosswalk available on request.',
  },
  {
    title: 'NJSLS-English Language Arts (Grades 7–8)',
    body: 'Argument writing to defend the best design (W.AW.7.1); informative and explanatory technical writing (W.IW.7.2); short research with gathered and cited evidence (W.RW.7.7, W.SE.7.6); evaluating arguments on infrastructure and justice (RI.AA, RI.CT); collaborative discussion and data interpretation (SL.PE.7.1, SL.II.7.2); and presenting findings with multimedia (SL.PI.7.4, SL.UM.7.5).',
    footer: 'Full NJSLS-ELA crosswalk available on request.',
  },
  {
    title: 'Design, Technology & CS (NJSLS 8.1 / 8.2)',
    body: "Applying the engineering design process (8.2.8.ED.1–7); technology's effect on people and the environment (8.2.8.ITH, NT); ethics, environment, and effects of technology (8.2.8.ETW); and data and analysis with computational tools (8.1.8.DA).",
    footer: 'Full Design, Technology & CS crosswalk available on request.',
  },
  {
    title: 'Career Readiness (NJSLS 9.2 / 9.4)',
    body: 'Career awareness, exploration, and planning (9.2.8.CAP); creativity and innovation (9.4.8.CI); critical thinking and problem solving (9.4.8.CT); information and media literacy (9.4.8.IML); and technology literacy (9.4.8.TL), embedded throughout the twelve weeks.',
    footer: 'Full Career Readiness crosswalk available on request.',
  },
]

const ASSESSMENT_ITEMS = [
  {
    title: 'Engineering Portfolio',
    body: 'Every student maintains an engineering portfolio from Week 1 to Week 12. The portfolio includes their problem statement, criteria and constraints, sketches, scaled drawings, digital model output, cost calculations, impact analyses, risk matrix, testing data, and design reflections. The portfolio is the primary artifact for assessment.',
  },
  {
    title: 'Prototype and Testing Performance',
    body: "Each team's physical bridge prototype is load-tested under controlled, repeatable conditions. Performance is documented with maximum load, deflection, cost-efficiency, and failure-mode analysis. Documented evidence of redesign and iteration is required; a prototype that performs well without showing iteration receives a lower score than one that demonstrates engineering improvement.",
  },
  {
    title: 'Presentation and Written Argument',
    body: 'Each team delivers a public presentation and submits a written design report. Both are assessed against a published rubric covering technical accuracy, evidence quality, sustainability reasoning, visual communication, oral communication, and response to audience questions.',
  },
  {
    title: 'Individual Reflection',
    body: "Every student writes an individual reflection at the close of the program covering their growth in engineering thinking, mathematical modeling, collaboration, communication, and STEM identity. The reflection captures what each student now believes they are capable of, and what they want to do next.",
  },
]

const PROGRAM_MEASURES = [
  { label: 'Rubric scores.',                    text: 'Engineering Design and Prototype rubric, Math and Quantitative Analysis rubric, Communication rubric, each scored across the design cycle and at the final showcase.' },
  { label: 'Pre- and post-content assessments.', text: 'Short content assessments aligned with MS-ETS1 and targeted math standards administered in Week 1 and Week 12 to measure growth.' },
  { label: 'Participation and engagement.',      text: 'Attendance records, milestone-completion records, collaboration observation notes, and classroom participation logs.' },
  { label: 'Student surveys and reflections.',   text: 'STEM interest, confidence, and identity surveys administered pre- and post-program, plus written reflections from every student.' },
  { label: 'Artifacts and observations.',        text: 'Engineering notebooks, prototypes, presentation recordings, and structured classroom observation notes documenting implementation quality.' },
]

// ── Instructor reflection ────────────────────────────────────

const LESSON_INTRO = [
  "When we launched this year's HIA Bridging Brilliance program, we knew we were designing more than a STEM enrichment experience. We were building a bridge between middle school and high school, between curiosity and confidence, between Hillside and Hoboken, and between students' current sense of what is possible and the much wider horizon that engineering can offer.",
  "At its best, STEM education is not simply about introducing students to technical vocabulary, design tools, or formulas. It is about helping young people see themselves as problem-solvers: giving them the confidence to ask better questions, the resilience to test and revise an idea, and the language to explain their thinking to others. Over the course of the program, I saw students move from uncertainty to ownership, from passive participation to active leadership, and from seeing engineering as something distant to seeing it as something they could do, shape, and belong to.",
]

const LESSONS: { title: string; body: string[] }[] = [
  {
    title: 'Build genuine relationships to foster empathy and trust',
    body: [
      "Rapport is not a soft add-on to program design; it is part of the learning architecture. Students engage differently when they feel known, respected, and safe enough to take intellectual risks.",
      "There is a meaningful difference between assuming we understand a student's background and actually listening to their experiences. This year, giving students space to speak freely helped us understand not only how they learn, but what motivates them, what makes them hesitant, and what helps them feel confident. That human connection changed the tone of the program.",
      "The presence of returning scholars also made a visible difference. Because they already knew us, they entered the program with greater comfort and trust. That trust spread across the cohort. The classroom became more relaxed, more collaborative, and more open to challenge. For leaders designing youth STEM programs, the implication is clear: relationships should be built early, intentionally, and consistently. Trust accelerates learning.",
    ],
  },
  {
    title: 'Learning by doing is more powerful than learning by watching',
    body: [
      "The strongest learning moments did not come when students were watching us explain engineering concepts. They came when students were building, testing, debating, revising, and presenting their own work.",
      "Hands-on learning turned abstract ideas into lived experiences. Concepts such as tension, compression, buckling, material selection, cost, and structural performance became understandable because students encountered them through their own prototypes. They were not simply told that engineering is iterative; they experienced iteration. They learned that a failed test is not the end of the process. It is data. It is feedback. It is the beginning of a better design.",
      "This is especially important for middle school learners. At this age, students benefit from seeing that complex problems can be broken into manageable decisions. When they are allowed to touch the materials, test their assumptions, and defend their reasoning, they begin to internalize the habits of engineers: observe carefully, measure what matters, work with constraints, and improve through evidence.",
    ],
  },
  {
    title: 'Students thrive when given real responsibility',
    body: [
      "Middle school students are often underestimated. Yet when they were assigned clear roles within their teams, they demonstrated maturity, accountability, and pride.",
      "Responsibility changed their posture. Students began to see themselves not just as participants, but as contributors. They had jobs to do. Their teammates depended on them. Their design decisions mattered. Their presentations would be heard by peers, instructors, judges, and families.",
      "This sense of ownership helped build confidence and strengthened collaboration. Students learned that leadership is not always about being the loudest voice in the room. Sometimes it is about listening carefully, helping a teammate, organizing materials, or making sure the group stays focused. Those are the kinds of leadership behaviors that strong programs should intentionally cultivate.",
    ],
  },
  {
    title: 'Relatability matters: meet students where they are',
    body: [
      "To reach students, we had to be willing to meet them where they were. That meant making the learning environment academically serious without making it emotionally distant.",
      "Music, games, humor, pop culture references, and informal conversations helped create a setting where students felt comfortable engaging. These moments did not distract from learning. They made learning more accessible. They signaled that students did not need to leave their personalities at the door in order to participate in STEM.",
      "Relatability is not about lowering expectations. It is about opening the door wider. When students recognize that instructors understand something about their world, they are more willing to enter ours. That exchange creates the conditions for deeper learning.",
    ],
  },
  {
    title: 'Healthy competition can unlock motivation',
    body: [
      "The final presentation and bridge competition brought a special energy to the program. Students knew their work would be evaluated, and that knowledge pushed them to refine their designs, strengthen their explanations, and collaborate more effectively.",
      "Competition, when framed well, becomes a tool for growth rather than pressure. In this case, it gave students a reason to go the extra mile. They wanted their bridge to perform well. They wanted their team to be proud. They wanted to answer the judges' questions with confidence.",
      "The key was to make the competition celebratory and developmental. The goal was not simply to name a winner. It was to create a public moment where students could demonstrate what they had learned and see themselves as capable STEM communicators. That kind of experience can stay with a young person long after the prototype is taken apart.",
    ],
  },
  {
    title: 'A clear vision for success matters',
    body: [
      "Programs like Bridging Brilliance require many moving parts: school leadership, university partners, instructors, families, transportation, materials, schedules, and student expectations. Without a clear vision, activity can easily be mistaken for impact.",
      "A shared definition of success helped us stay focused. We were not only trying to complete projects. We were trying to expand students' view of engineering, demystify pathways into STEM careers, and increase their confidence to pursue advanced opportunities. That clarity shaped the curriculum, the tone of instruction, the final showcase, and the way we evaluated progress.",
      "For program leaders, the lesson is to define success early and return to it often. A clear vision gives teams a common language, helps partners understand their role, and ensures that the student experience remains at the center.",
    ],
  },
  {
    title: 'Balanced teams make strong programs possible',
    body: [
      "No successful program is delivered by one person alone. This year reinforced the importance of building a team with complementary strengths. Strong instruction, operational coordination, school-based support, university engagement, family communication, and student mentorship all had to work together.",
      "A balanced team does more than divide tasks. It improves judgment. Different team members see different things. Some understand student dynamics more clearly. Others anticipate logistical risks. Others bring technical expertise, institutional knowledge, or experience managing youth programs. When those perspectives are aligned, the program becomes more adaptive and resilient.",
      "The best teams are not identical. They balance one another. They share commitment, but they bring different strengths to the table.",
    ],
  },
  {
    title: 'A can-do mentality creates institutional buy-in',
    body: [
      "Institutional buy-in is not created by vision statements alone. It is built through reliability, responsiveness, and a can-do mentality.",
      "Programs that cross institutional boundaries inevitably encounter friction: scheduling constraints, transportation needs, budget questions, communication gaps, and competing priorities. A solutions-oriented culture matters. When partners see that a team is prepared, flexible, and committed to making things work, confidence grows.",
      "That confidence becomes a form of capital. It helps schools, universities, funders, and families believe that the program is worth investing in, not only financially, but with time, trust, and attention.",
    ],
  },
  {
    title: 'Students engage more deeply when they feel respected and seen',
    body: [
      "Perhaps the most human lesson is also the most important: students learn more deeply when they feel respected and seen.",
      "Our scholars were talented, curious, funny, ambitious, and sometimes unsure of themselves. They did not need us to simplify the work. They needed us to believe they could do it, and then support them as they proved it to themselves.",
      "Respect showed up in small ways: listening to their ideas, taking their questions seriously, giving them real responsibilities, expecting them to present with clarity, and encouraging them when their first design did not work. Over time, those gestures became part of the program culture. Students began to speak with more confidence, use more precise academic language, and take greater pride in their work.",
    ],
  },
  {
    title: 'Cross-institutional partnerships are essential to building a diverse STEM talent pipeline',
    body: [
      "No single institution can build a diverse STEM talent pipeline alone. Schools bring deep knowledge of students, families, and community context. Universities bring exposure, technical expertise, role models, facilities, and pathways into future study. Funders and community partners help make the work sustainable.",
      "When these pieces come together, students gain more than a program. They gain a network of possibility. They see a college campus. They meet people studying and practicing engineering. They present in professional settings. They begin to imagine themselves in spaces that may have once felt unfamiliar.",
      "That exposure matters. It can turn aspiration into a plan.",
    ],
  },
]

const LESSON_CLOSING = [
  "The lessons from HIA Bridging Brilliance are both practical and hopeful. Build trust early. Let students do real work. Give them responsibility. Make learning relatable. Use competition as celebration. Define success clearly. Build balanced teams. Cultivate institutional buy-in. Respect students deeply. Partner across boundaries.",
  "These are not complicated ideas, but they require discipline and care. They require adults to design programs that are rigorous and humane, structured and flexible, ambitious and joyful.",
  "Programs like Bridging Brilliance can help reshape how young people experience STEM, not as a distant field reserved for a few, but as a living, creative, collaborative discipline that welcomes their ideas and rewards their persistence. The bridge we built this year was not only made of prototypes, presentations, and engineering concepts. It was built from trust, confidence, ownership, and opportunity. And for many students, that bridge may be the first step toward a much larger journey.",
]


const EASE  = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const
const VIEWPORT = { once: true, margin: '100px 0px' } as const

// In-page wayfinding for the sticky section bar
const SECTION_LINKS = [
  { id: 'bb-overview',   label: 'Overview' },
  { id: 'bb-approach',   label: 'How it’s taught' },
  { id: 'bb-curriculum', label: 'The 12 weeks' },
  { id: 'bb-standards',  label: 'Standards' },
  { id: 'bb-assessment', label: 'Assessment' },
  { id: 'bb-instructor', label: 'Instructor' },
] as const

export function BridgingBrilliance() {
  const [openUnit, setOpenUnit]   = useState<string | null>('unit1')
  const [openWeeks, setOpenWeeks] = useState<Record<string, boolean>>({})
  const reduce = useReducedMotion()

  const toggleUnit = (id: string) => {
    setOpenUnit(prev => prev === id ? null : id)
    setOpenWeeks({})
  }

  const toggleWeek = (key: string) => {
    setOpenWeeks(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const [openLessons, setOpenLessons] = useState<Record<number, boolean>>({})
  const toggleLesson = (i: number) =>
    setOpenLessons(prev => ({ ...prev, [i]: !prev[i] }))

  const [lessonModalOpen, setLessonModalOpen] = useState(false)
  const modalTriggerRef = useRef<HTMLButtonElement | null>(null)
  const closeButtonRef  = useRef<HTMLButtonElement | null>(null)

  // Sticky section bar: light scroll-spy over the page's landmark sections
  const [activeSection, setActiveSection] = useState('')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: '-25% 0px -65% 0px' },
    )
    SECTION_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!lessonModalOpen) {
      modalTriggerRef.current?.focus()
      return
    }
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLessonModalOpen(false) }
    document.addEventListener('keydown', onKey)
    requestAnimationFrame(() => closeButtonRef.current?.focus())
    return () => {
      document.body.style.overflow = prev
      document.removeEventListener('keydown', onKey)
    }
  }, [lessonModalOpen])

  return (
    <>

      {/* ── HERO ── */}
      <section
        className="bg-anthracite min-h-[65vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="bb-h1">

        {/* Full-bleed right-half photo — desktop only */}
        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-[40%]"
          style={{ willChange: 'opacity' }}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.25, ease: EASE }}
          aria-hidden="true">
          <img
            src="/images/bb-hero.png"
            alt="Students building bridge prototypes at the Bridging Brilliance 2025 showcase"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(25%) contrast(1.08)' }}
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
              Sample Curriculum · Middle School
            </motion.span>

            <motion.h1
              id="bb-h1"
              className="text-[2.25rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[1.0] tracking-[-0.035em] text-white italic mb-8"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: EASE }}>
              Bridging Brilliance:<br />Engineering the Hudson
            </motion.h1>

            <motion.p
              className="text-[15px] text-white/65 leading-[1.7] max-w-[52ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
              A twelve-week middle school engineering program where students design, model, build, test, and present a sustainable bridge across the Hudson River. Standards-aligned, industry-grounded, built for the inflection point where STEM identity is made.
            </motion.p>

          </div>
        </div>
      </section>

      {/* ── Sticky section bar ── sits under the fixed navbar (h-16 + 6px spec strip) */}
      <nav
        className="sticky top-[70px] z-40 bg-snow border-b border-sediment/25"
        aria-label="On this page">
        <div className="max-w-7xl mx-auto px-6 flex items-center lg:justify-center gap-6 lg:gap-8 overflow-x-auto whitespace-nowrap py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {SECTION_LINKS.map(({ id, label }) => {
            const isActive = activeSection === id
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? 'true' : undefined}
                className={[
                  'flex items-center gap-2 py-3 -my-3 text-[11.5px] uppercase tracking-[0.12em] leading-none transition-colors duration-150',
                  isActive ? 'text-datum' : 'text-anthracite/70 hover:text-anthracite',
                ].join(' ')}
                style={{ fontFamily: 'var(--font-body)' }}>
                <span
                  className={`w-[6px] h-[6px] rotate-45 flex-shrink-0 bg-datum transition-opacity duration-150 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                  aria-hidden="true"
                />
                {label}
              </a>
            )
          })}
        </div>
      </nav>

      {/* ── OVERVIEW ── */}
      <section id="bb-overview" className="scroll-mt-28 bg-bone py-14 lg:py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-[1.25fr_1fr] lg:gap-16 xl:gap-24 lg:items-start">

            {/* Left: display heading + prose */}
            <div>
              <motion.h2
                className="text-[2rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-[1.05] tracking-[-0.035em] text-anthracite italic mb-8"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 32 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.7, ease: SPRING }}>
                A program designed like real engineering work.
              </motion.h2>

              <motion.div
                className="space-y-5 text-[15px] leading-[1.8] text-anthracite/80"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, delay: 0.1, ease: EASE }}>
                <p>Aedifica designs rigorous, project-based STEM programs that prepare middle and high school students for the real work of engineering, infrastructure, and the built environment. <em>Bridging Brilliance: Engineering the Hudson</em> is one example of how we do it.</p>
                <p>In this twelve-week program, students step into the role of junior engineers tasked with designing a sustainable bridge across the Hudson River. They define the problem, study the typologies, model their solution digitally, build a physical prototype, test it under load, analyze their data, and present their final design to a public audience. By Week 12, every student has produced an engineering portfolio, contributed to a tested prototype, and delivered a public-facing presentation defended with evidence.</p>
                <p>This page is a complete sample curriculum, shared as evidence of how Aedifica builds programs across grade bands. Schools and districts use this page to evaluate whether the program meets their academic standards, fits their schedule, and serves their students.</p>
              </motion.div>
            </div>

            {/* Right: stat block with icons */}
            <motion.aside
              className="mt-12 lg:mt-0 pt-10 border-t border-sediment/20 lg:border-t-0 lg:pt-0"
              initial={reduce ? undefined : { opacity: 0, x: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, delay: 0.2, ease: EASE }}>
              <img
                src="/images/bb-logo.png"
                alt="Bridging Brilliance program — Stevens Institute of Technology and Hillside Innovation Academy"
                className="w-32 h-32 object-contain mb-8"
                style={{ mixBlendMode: 'multiply' }}
                loading="lazy"
              />
              <p
                className="text-[11px] uppercase tracking-[0.14em] text-anthracite/80 mb-6"
                style={{ fontFamily: 'var(--font-body)' }}>
                By the numbers
              </p>
              {[
                { Icon: Calendar,    num: '12',    unit: 'weeks',    desc: 'structured modules across three units' },
                { Icon: Users,       num: '20–28', unit: 'students', desc: 'per cohort, mixed grades 6–8' },
                { Icon: SquaresFour, num: '3',     unit: 'units',    desc: 'foundations · design · prototype' },
                { Icon: Trophy,      num: '1',     unit: 'capstone', desc: 'public showcase and testing competition' },
              ].map(({ Icon, num, unit, desc }, i) => (
                <motion.div
                  key={unit}
                  className="flex gap-4 items-start py-5 border-b border-sediment/15 last:border-b-0"
                  initial={reduce ? undefined : { opacity: 0, y: 10 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.35, delay: i * 0.07, ease: EASE }}>
                  <Icon size={17} weight="regular" className="text-datum mt-1.5 flex-shrink-0" aria-hidden="true" />
                  <div>
                    <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                      <span className="text-[2rem] tracking-[-0.04em] leading-[1] text-anthracite italic">{num}</span>
                      <span className="text-[0.875rem] text-anthracite/80 ml-1.5">{unit}</span>
                    </p>
                    <p className="text-[11.5px] text-anthracite/80 mt-1 leading-[1.4]" style={{ fontFamily: 'var(--font-body)' }}>{desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.aside>

          </div>
        </div>
      </section>

      {/* ── SNAPSHOT ── */}
      <section className="bg-snow py-14 lg:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-[1.5rem] lg:text-[2rem] leading-[1.15] tracking-[-0.028em] mb-10"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
            Full program spec.
          </motion.h2>
          <div className="divide-y divide-sediment/15">
            {SNAPSHOT.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                className="grid grid-cols-[48px_160px_1fr] sm:grid-cols-[48px_200px_1fr] py-4 gap-4 items-baseline"
                initial={reduce ? undefined : { opacity: 0, y: 8 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.3, delay: i * 0.04, ease: EASE }}>
                <Icon size={18} weight="regular" className="text-datum mt-0.5" aria-hidden="true" />
                <span
                  className="text-[11px] uppercase tracking-[0.1em] text-anthracite/75 pt-0.5"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {label}
                </span>
                <span
                  className="text-[1rem] text-anthracite leading-[1.6]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="bb-approach" className="scroll-mt-28 bg-bone py-14 lg:py-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">

          <motion.h2
            className="text-[1.75rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] tracking-[-0.03em] text-anthracite italic mb-5"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            Eight ways students learn like engineers.
          </motion.h2>
          <motion.p
            className="text-anthracite/80 text-[15px] leading-[1.72] max-w-[60ch] mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
            Every week, students work the way professional engineering teams work: through structured collaboration, evidence-based decisions, and iterative design.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {EXPERIENCE.map(({ title, body }, i) => (
              <motion.div
                key={title}
                className="flex gap-5"
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, delay: (i % 2) * 0.06, ease: EASE }}>
                <span
                  className="flex-shrink-0 w-8 h-8 bg-datum/10 text-datum flex items-center justify-center text-[13px] font-semibold mt-0.5"
                  style={{ fontFamily: 'var(--font-body)' }}
                  aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3
                    className="text-[1.0625rem] font-semibold text-anthracite mb-2 leading-[1.3]"
                    style={{ fontFamily: 'var(--font-heading)' }}>
                    {title}
                  </h3>
                  <p
                    className="text-[0.9375rem] text-anthracite/80 leading-[1.75]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUTCOMES ── */}
      <section className="bg-snow py-14 lg:py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-[1.75rem] lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em] text-anthracite italic mb-3"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
            What students can do by Week 12.
          </motion.h2>
          <motion.p
            className="text-anthracite/75 text-[15px] mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.07, ease: EASE }}>
            Aedifica defines outcomes in terms of what students can demonstrate, not what was covered. Each outcome maps to a specific assessment artifact.
          </motion.p>
          <ul className="divide-y divide-sediment/15">
            {OUTCOMES.map(({ strong, rest }, i) => (
              <motion.li
                key={strong}
                className="flex gap-4 py-4 items-start"
                initial={reduce ? undefined : { opacity: 0, y: 8 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.3, delay: i * 0.04, ease: EASE }}>
                <CheckCircle size={18} weight="fill" className="flex-shrink-0 text-datum mt-0.5" aria-hidden="true" />
                <p
                  className="text-[0.9375rem] leading-[1.75] text-anthracite/80"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  <strong className="text-anthracite font-semibold">{strong}</strong>{' '}{rest}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CURRICULUM ACCORDION ── */}
      <section id="bb-curriculum" className="scroll-mt-28 bg-bone py-14 lg:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-[clamp(1.5rem,3.5vw,2.25rem)] leading-[1.15] tracking-[-0.025em] mb-3"
            style={{ fontFamily: 'var(--font-heading)' }}>
            Twelve weeks, three units, one capstone.
          </h2>
          <p
            className="text-anthracite/80 text-[0.9375rem] mb-10 max-w-xl"
            style={{ fontFamily: 'var(--font-body)' }}>
            Each unit builds on the last. Click into any unit to see the week-by-week design, guiding questions, and student products.
          </p>

          <div className="space-y-2">
            {UNITS.map((unit) => {
              const isOpen = openUnit === unit.id
              return (
                <div key={unit.id} className="border border-sediment/20 bg-snow overflow-hidden">

                  {/* Unit header */}
                  <button
                    className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left hover:bg-bone/60 transition-colors duration-150 cursor-pointer"
                    onClick={() => toggleUnit(unit.id)}
                    aria-expanded={isOpen}>
                    <div>
                      <p
                        className="text-[11px] uppercase tracking-[0.12em] text-datum mb-1"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {unit.label} · {unit.weeks}
                      </p>
                      <p
                        className="text-[1.125rem] font-medium text-anthracite leading-[1.3]"
                        style={{ fontFamily: 'var(--font-heading)' }}>
                        {unit.title}
                      </p>
                    </div>
                    <CaretDown
                      size={18}
                      weight="bold"
                      className={`flex-shrink-0 text-anthracite/40 mt-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Unit body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={reduce ? undefined : { height: 0, opacity: 0 }}
                        animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={reduce ? undefined : { duration: 0.28, ease: EASE }}
                        style={{ overflow: 'hidden' }}>
                        <div className="px-6 pb-6 border-t border-sediment/15">
                          <p
                            className="text-[0.9375rem] text-anthracite/75 leading-[1.8] mt-5 mb-5"
                            style={{ fontFamily: 'var(--font-body)' }}>
                            {unit.summary}
                          </p>

                          {/* Callout — full bg tint, no stripe */}
                          <div className="bg-datum/[0.07] px-5 py-4 mb-6">
                            <p
                              className="text-[0.875rem] text-anthracite/90 leading-[1.7]"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              <strong className="text-anthracite">Students leave this unit with:</strong>{' '}{unit.callout}
                            </p>
                          </div>

                          <div className="h-px bg-sediment/15 mb-3" />

                          <div className="divide-y divide-sediment/10">
                            {unit.weekList.map((week) => {
                              const weekKey = `${unit.id}-w${week.num}`
                              const weekOpen = !!openWeeks[weekKey]
                              return (
                                <div key={weekKey}>
                                  <button
                                    className="w-full flex items-start gap-4 py-3.5 text-left cursor-pointer group"
                                    onClick={() => toggleWeek(weekKey)}
                                    aria-expanded={weekOpen}>
                                    <span
                                      className="flex-shrink-0 w-12 text-[0.8125rem] font-semibold text-datum pt-0.5"
                                      style={{ fontFamily: 'var(--font-heading)' }}>
                                      Wk {week.num}
                                    </span>
                                    <span
                                      className="flex-1 text-[0.9375rem] text-anthracite/80 leading-[1.5] group-hover:text-anthracite transition-colors"
                                      style={{ fontFamily: 'var(--font-body)' }}>
                                      {week.question}
                                    </span>
                                    <div className="flex items-center gap-1.5 flex-shrink-0 pt-0.5 flex-wrap justify-end">
                                      {week.chips.map(c => <Chip key={c} type={c} />)}
                                      <CaretDown
                                        size={14}
                                        weight="bold"
                                        className={`text-anthracite/30 transition-transform duration-150 ml-1 ${weekOpen ? 'rotate-180' : ''}`}
                                      />
                                    </div>
                                  </button>

                                  <AnimatePresence initial={false}>
                                    {weekOpen && (
                                      <motion.div
                                        initial={reduce ? undefined : { height: 0, opacity: 0 }}
                                        animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                                        transition={reduce ? undefined : { duration: 0.2, ease: EASE }}
                                        style={{ overflow: 'hidden' }}>
                                        <div className="pl-16 pb-4 pr-2">
                                          <p
                                            className="text-[0.875rem] text-anthracite/75 leading-[1.75] mb-3"
                                            style={{ fontFamily: 'var(--font-body)' }}>
                                            {week.body}
                                          </p>
                                          <div className="space-y-2">
                                            <div className="flex gap-3 text-[0.8125rem]" style={{ fontFamily: 'var(--font-body)' }}>
                                              <span className="flex-shrink-0 w-28 font-semibold text-anthracite">Key activities</span>
                                              <span className="text-anthracite/75">{week.activities}</span>
                                            </div>
                                            <div className="flex gap-3 text-[0.8125rem]" style={{ fontFamily: 'var(--font-body)' }}>
                                              <span className="flex-shrink-0 w-28 font-semibold text-anthracite">Student product</span>
                                              <span className="text-anthracite/75">{week.product}</span>
                                            </div>
                                          </div>
                                        </div>
                                      </motion.div>
                                    )}
                                  </AnimatePresence>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── VIDEO ── */}
      <section className="bg-anthracite py-16 lg:py-20 px-6" aria-label="Program showcase video">
        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-[11px] uppercase tracking-[0.16em] text-white/50 mb-4"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 8 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            Bridging Brilliance 2025
          </motion.p>
          <motion.div
            className="relative w-full overflow-hidden"
            style={{ paddingBottom: '56.25%' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            <iframe
              src="https://player.vimeo.com/video/1204846790?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              title="Bridging Brilliance 2025 program showcase"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── STANDARDS ── */}
      <section id="bb-standards" className="scroll-mt-28 bg-snow py-16 lg:py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <div className="lg:grid lg:grid-cols-[1fr_1.7fr] lg:gap-16 lg:items-end mb-12 lg:mb-16">
            <motion.h2
              className="text-[1.75rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.03em] text-anthracite italic"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
              Rigorous alignment, plainly explained.
            </motion.h2>
            <motion.p
              className="text-anthracite/75 text-[15px] leading-[1.72] mt-4 lg:mt-0"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
              <em>Bridging Brilliance</em> is aligned with five standards frameworks, with more than forty aligned standards across the twelve weeks. Codes follow the NJSLS 2023 revisions for grades 7–8 and the Next Generation Science Standards engineering-design expectations. The full crosswalk with specific standard codes is available on request for curriculum coordinators and grant writers.
            </motion.p>
          </div>

          {/* Vertical divided list — no card boxes */}
          <div className="divide-y divide-sediment/15 mb-12">
            {STANDARDS.map(({ title, body, footer }, i) => (
              <motion.div
                key={title}
                className="py-7 lg:py-8 lg:grid lg:grid-cols-[140px_1fr] lg:gap-10 lg:items-start"
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, delay: i * 0.07, ease: EASE }}>
                <div className="mb-3 lg:mb-0 lg:pt-0.5">
                  <span
                    className="inline-block text-[10px] font-semibold tracking-[0.08em] px-2.5 py-1.5 text-white"
                    style={{
                      backgroundColor: [CHIP_COLORS.ngss.bg, CHIP_COLORS.math.bg, CHIP_COLORS.career.bg][i],
                      fontFamily: 'var(--font-body)',
                    }}>
                    {['NGSS', 'Common Core', 'NJ Careers'][i]}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-[1.0625rem] font-semibold text-anthracite mb-2 leading-[1.3]"
                    style={{ fontFamily: 'var(--font-heading)' }}>
                    {title}
                  </h3>
                  <p
                    className="text-[14px] text-anthracite/75 leading-[1.75] mb-3"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {body}
                  </p>
                  <p
                    className="text-[12px] italic text-datum"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {footer}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Request documentation */}
          <div className="bg-bone p-6 border-t border-sediment/20">
            <p
              className="text-[0.9375rem] text-anthracite/80 leading-[1.7] max-w-2xl"
              style={{ fontFamily: 'var(--font-body)' }}>
              The full standards crosswalk, assessment rubrics, and instructor guide are available on request. Contact Aedifica to receive any document directly.
            </p>
            <Link href="/partner"
              className="inline-flex items-center gap-2 mt-4 text-[13.5px] text-datum tracking-[-0.01em] group"
              style={{ fontFamily: 'var(--font-body)' }}>
              Contact us for documentation
              <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── ASSESSMENT ── */}
      <section id="bb-assessment" className="scroll-mt-28 bg-bone py-16 lg:py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-[1.75rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.03em] text-anthracite italic mb-3"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
            Evidence schools and funders can show.
          </motion.h2>
          <motion.p
            className="text-anthracite/80 text-[15px] mb-12 max-w-2xl"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.07, ease: EASE }}>
            Assessment is built in from Week 1, not added in Week 12. Aedifica programs produce visible, structured evidence of student growth usable in parent communications, board reports, accreditation reviews, and grant applications.
          </motion.p>

          <h3
            className="text-[1rem] font-semibold text-anthracite mb-5"
            style={{ fontFamily: 'var(--font-heading)' }}>
            What students produce
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-8 mb-14">
            {ASSESSMENT_ITEMS.map(({ title, body }, i) => (
              <div key={title} className="flex gap-4">
                <span
                  className="flex-shrink-0 w-7 h-7 border border-datum/30 text-datum flex items-center justify-center text-[12px] font-semibold mt-0.5"
                  style={{ fontFamily: 'var(--font-body)' }}
                  aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3
                    className="text-[1rem] font-semibold text-anthracite mb-2 leading-[1.3]"
                    style={{ fontFamily: 'var(--font-heading)' }}>
                    {title}
                  </h3>
                  <p
                    className="text-[0.875rem] text-anthracite/80 leading-[1.75]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <h3
            className="text-[1rem] font-semibold text-anthracite mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}>
            What programs produce
          </h3>
          <p
            className="text-[0.9375rem] text-anthracite/80 leading-[1.8] mb-5 max-w-2xl"
            style={{ fontFamily: 'var(--font-body)' }}>
            Aedifica also collects program-level evaluation data that schools and districts can use in board reports, accreditation submissions, and grant applications. The data is reported back in a structured end-of-program report.
          </p>
          <ul className="divide-y divide-sediment/15 mb-6">
            {PROGRAM_MEASURES.map(({ label, text }) => (
              <li key={label} className="py-3.5 text-[0.9rem]" style={{ fontFamily: 'var(--font-body)' }}>
                <strong className="text-anthracite">{label}</strong>{' '}
                <span className="text-anthracite/80">{text}</span>
              </li>
            ))}
          </ul>
          <p
            className="text-[0.875rem] text-anthracite/80 leading-[1.7] italic"
            style={{ fontFamily: 'var(--font-body)' }}>
            The end-of-program report is delivered to the school within 30 days of program close, in a format suitable for direct inclusion in board materials, district reports, or funder communications.
          </p>
        </div>
      </section>

      {/* ── WHY THIS MATTERS ── */}
      <section className="bg-anthracite py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-[1fr_420px] lg:gap-16 xl:gap-24 lg:items-stretch">

            {/* Left: content */}
            <div className="flex flex-col justify-center">

              <motion.div
                className="mb-8"
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
                <Compass size={32} weight="thin" className="text-datum/70" aria-hidden="true" />
              </motion.div>

              <motion.h2
                className="text-[2.25rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-[1.02] tracking-[-0.04em] text-snow italic mb-10"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 32 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.75, ease: SPRING }}>
                Middle school is where STEM identity is made.
              </motion.h2>

              <motion.div
                className="space-y-5 text-[15px] leading-[1.85] text-snow/65"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, delay: 0.12, ease: EASE }}>
                <p>Middle school is where students decide whether STEM is for them. By Grade 8, the students who will enter high school engineering, computer science, and applied science pathways have largely self-selected. Students who have not yet seen themselves as engineers, scientists, or technologists by that point face an increasingly narrow path to those identities later.</p>
                <p><em>Bridging Brilliance</em> is designed for that inflection point. It gives students three months of substantive engineering work: real problems, real prototypes, real data, real audiences, at exactly the moment they are forming their long-term sense of what they can become.</p>
                <p>The program is also a model. It demonstrates how Aedifica designs STEM programs across grade bands and subject areas: rigorous, project-based, standards-aligned, hands-on, and built around real-world challenges that matter to the communities students live in.</p>
              </motion.div>

            </div>

            {/* Right: photo — desktop only */}
            <motion.div
              className="hidden lg:block overflow-hidden min-h-[400px]"
              initial={reduce ? undefined : { opacity: 0, x: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, delay: 0.2, ease: EASE }}
              aria-hidden="true">
              <img
                src="/images/bb-why.png"
                  loading="lazy"
                alt="Bridging Brilliance 2025 program photo"
                className="w-full h-full object-cover"
                style={{ filter: 'grayscale(20%) contrast(1.08)' }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── INSTRUCTOR REFLECTION ── */}
      <section id="bb-instructor" className="scroll-mt-28 bg-bone py-16 lg:py-20 px-6" aria-labelledby="instructor-h2">
        <div className="max-w-5xl mx-auto">
          <div className="lg:grid lg:grid-cols-[1fr_300px] lg:gap-16 xl:gap-20 lg:items-center">

            {/* Left */}
            <div>
              <motion.p
                className="text-[11px] uppercase tracking-[0.14em] text-datum mb-4"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 8 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
                From the instructor
              </motion.p>

              <motion.h2
                id="instructor-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.07] tracking-[-0.035em] text-anthracite italic mb-5"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 28 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                Lessons from HIA Bridging Brilliance.
              </motion.h2>

              <motion.p
                className="text-[12.5px] text-anthracite/80 mb-7 leading-[1.6]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
                Dr. Karim Karam · Teaching Associate Professor, Civil, Environmental, and Ocean Engineering · Stevens Institute of Technology
              </motion.p>

              <motion.p
                className="text-[15px] leading-[1.82] text-anthracite/80 mb-9 max-w-[60ch]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.15, ease: EASE }}>
                {LESSON_INTRO[0]}
              </motion.p>

              <motion.button
                onClick={(e) => { modalTriggerRef.current = e.currentTarget as HTMLButtonElement; setLessonModalOpen(true) }}
                className="inline-flex items-center gap-2.5 text-[13.5px] text-datum tracking-[-0.01em] group cursor-pointer"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: 0.2, ease: EASE }}>
                Read the full reflection: 10 lessons
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </motion.button>
            </div>

            {/* Right: pullquote — desktop only */}
            <motion.div
              className="hidden lg:flex flex-col justify-center"
              initial={reduce ? undefined : { opacity: 0, x: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: 0.2, ease: EASE }}>
              <div className="bg-datum/[0.08] p-8 xl:p-10">
                <p
                  className="text-[1.15rem] xl:text-[1.25rem] leading-[1.5] tracking-[-0.02em] text-anthracite italic mb-5"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  "Strong programs are built on more than content. They depend on relationships, trust, institutional commitment, team chemistry, and a shared belief that middle school students are capable of far more than they are often asked to demonstrate."
                </p>
                <p
                  className="text-[12px] text-anthracite/80 leading-[1.5]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Dr. Karim Karam<br />
                  <span className="text-anthracite/78">Bridging Brilliance 2025</span>
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── CTA ── bg-snow pb-0, contained datum block */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-label="Partner with Aedifica">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-datum px-10 pt-16 pb-12 lg:px-16 lg:pt-20 lg:pb-14 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '80px 0px' }}
            transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-white italic mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Bring Aedifica programs to your students.
            </h2>

            <p
              className="text-[15px] text-white/90 leading-[1.7] max-w-[52ch] mx-auto mb-3"
              style={{ fontFamily: 'var(--font-body)' }}>
              Aedifica designs STEM programs in partnership with schools, districts, enrichment providers, and community partners. <em>Bridging Brilliance</em> is one example of what we can build for your students.
            </p>

            <p
              className="text-[13px] text-white/90 italic mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Developed and delivered in partnership with the Hillside Innovation Academy.
            </p>

            <Link href="/partner"
              className="inline-flex items-center justify-center bg-white text-datum text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-white/92"
              style={{ fontFamily: 'var(--font-body)' }}>
              Start a conversation
            </Link>

          </motion.div>
        </div>
      </section>

      {/* ── INSTRUCTOR MODAL ── */}
      <AnimatePresence>
        {lessonModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-anthracite/60 z-[100] backdrop-blur-[2px]"
              initial={reduce ? undefined : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={reduce ? undefined : { duration: 0.2, ease: EASE }}
              onClick={() => setLessonModalOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-instructor-h"
              className="fixed top-[5vh] left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[680px] max-h-[90vh] bg-bone z-[101] flex flex-col overflow-hidden"
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: 12 }}
              transition={reduce ? undefined : { duration: 0.28, ease: SPRING }}
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

              {/* Sticky header */}
              <div className="flex-shrink-0 flex items-start justify-between gap-4 px-7 py-5 border-b border-sediment/15">
                <div>
                  <p
                    className="text-[10px] uppercase tracking-[0.14em] text-datum mb-1"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    From the instructor
                  </p>
                  <h2
                    id="modal-instructor-h"
                    className="text-[1.25rem] lg:text-[1.5rem] leading-[1.12] tracking-[-0.025em] text-anthracite italic"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    Lessons from HIA Bridging Brilliance.
                  </h2>
                </div>
                <button
                  ref={closeButtonRef}
                  onClick={() => setLessonModalOpen(false)}
                  className="flex-shrink-0 w-11 h-11 flex items-center justify-center text-anthracite/70 hover:text-anthracite transition-colors duration-150 cursor-pointer -mt-1 -mr-1"
                  aria-label="Close reflection">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M1.5 1.5L14.5 14.5M14.5 1.5L1.5 14.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Scrollable body */}
              <div className="flex-1 overflow-y-auto px-7 pt-7 pb-10">

                <p
                  className="text-[12px] text-anthracite/70 mb-6 leading-[1.5]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Dr. Karim Karam · Teaching Associate Professor, Civil, Environmental, and Ocean Engineering · Stevens Institute of Technology
                </p>

                <div
                  className="space-y-5 text-[14.5px] leading-[1.82] text-anthracite/80 mb-8"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {LESSON_INTRO.map((p, i) => <p key={i}>{p}</p>)}
                </div>

                <div className="bg-datum/[0.08] p-6 mb-10">
                  <p
                    className="text-[1.05rem] leading-[1.5] tracking-[-0.02em] text-anthracite italic"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    "Strong programs are built on more than content. They depend on relationships, trust, institutional commitment, team chemistry, and a shared belief that middle school students are capable of far more than they are often asked to demonstrate."
                  </p>
                </div>

                <div className="divide-y divide-sediment/15 mb-10">
                  {LESSONS.map((lesson, i) => {
                    const isOpen = !!openLessons[i]
                    return (
                      <div key={i}>
                        <button
                          className="w-full flex items-start gap-4 py-4 text-left cursor-pointer group"
                          onClick={() => toggleLesson(i)}
                          aria-expanded={isOpen}>
                          <span
                            className="flex-shrink-0 text-[0.8125rem] font-medium text-datum/60 pt-[3px] w-7 tabular-nums select-none"
                            style={{ fontFamily: 'var(--font-body)' }}
                            aria-hidden="true">
                            {String(i + 1).padStart(2, '0')}.
                          </span>
                          <span
                            className="flex-1 text-[0.9375rem] text-anthracite leading-[1.45] [text-wrap:pretty] group-hover:text-datum transition-colors duration-150"
                            style={{ fontFamily: 'var(--font-heading)' }}>
                            {lesson.title}
                          </span>
                          <CaretDown
                            size={14}
                            weight="bold"
                            className={`flex-shrink-0 text-anthracite/30 mt-1.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                          />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={reduce ? undefined : { height: 0, opacity: 0 }}
                              animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                              exit={reduce ? undefined : { height: 0, opacity: 0 }}
                              transition={reduce ? undefined : { duration: 0.22, ease: EASE }}
                              style={{ overflow: 'hidden' }}>
                              <div className="pl-[44px] pb-5 space-y-3.5">
                                {lesson.body.map((p, pi) => (
                                  <p
                                    key={pi}
                                    className="text-[13.5px] text-anthracite/80 leading-[1.8]"
                                    style={{ fontFamily: 'var(--font-body)' }}>
                                    {p}
                                  </p>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  })}
                </div>

                <div className="pt-7 border-t border-sediment/15">
                  <h3
                    className="text-[1.25rem] leading-[1.12] tracking-[-0.025em] text-anthracite italic mb-5"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    Looking ahead.
                  </h3>
                  <div
                    className="space-y-4 text-[14.5px] leading-[1.82] text-anthracite/80"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {LESSON_CLOSING.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
