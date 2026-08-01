'use client'
import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const EMAIL = (
  <a href="mailto:info@edfca.com" className="underline decoration-anthracite/25 hover:decoration-anthracite/70 transition-colors duration-150">info@edfca.com</a>
)

type Section = { heading: string; body: ReactNode[] }

const SECTIONS: Section[] = [
  {
    heading: 'Children’s and student information comes first',
    body: [
      <>Most of the people in our programs are students, many under 18 and some under 13. This shapes everything below.</>,
      <>When Aedifica delivers a program inside a school, district, or partner institution, we generally act on that institution’s behalf as a service provider and, where applicable, a “school official” under the federal Family Educational Rights and Privacy Act (FERPA). In that role, the school, not Aedifica, is the primary steward of student records, and the school’s own privacy policies and consent processes govern. We use student information only to deliver, assess, and report on the program we were engaged to provide. <strong className="font-semibold text-anthracite">We do not sell student information, and we do not use it for advertising.</strong></>,
      <>For any program that enrolls a child directly rather than through a school, we obtain verifiable parental or guardian consent before collecting a child’s personal information, consistent with the federal Children’s Online Privacy Protection Act (COPPA) and applicable state law.</>,
    ],
  },
  {
    heading: 'New Jersey student-privacy law',
    body: [
      <>Because Aedifica delivers programs in New Jersey schools, we operate under New Jersey’s student-privacy laws in addition to FERPA. Two are especially relevant.</>,
      <><strong className="font-semibold text-anthracite">The Student Online Personal Protection Act (SOPPA-NJ)</strong> governs operators of online services used for K-12 school purposes. Where it applies to us, it prohibits selling student data, using it for targeted advertising, or building profiles of students for non-educational purposes, and it requires reasonable security measures and deletion of data on request or when a contract ends. Consistent with the law, we do not present students or parents with targeted advertising based on information obtained through a program, and we do not sell a student’s personally identifiable information or collect it for purposes unrelated to educational instruction.</>,
      <><strong className="font-semibold text-anthracite">The New Jersey Data Privacy Act (NJDPA)</strong>, in effect since January 15, 2025, adds broader obligations, including opt-in consent for sensitive data and data-protection assessments where the law’s thresholds apply, and gives individuals rights to access, correct, delete, and opt out of certain data uses. For minors it sets a higher bar: for children under 13, parental consent is required before data may be sold or used for targeted advertising; for those aged 13 to 16, their own consent is required. As stated above, we do not sell student data or use it for targeted advertising at all.</>,
      <><strong className="font-semibold text-anthracite">Breach notification.</strong> If a breach affecting personal information occurs, we will notify the affected school and affected individuals in accordance with New Jersey’s breach-notification requirements and our agreements with partner schools.</>,
      <><strong className="font-semibold text-anthracite">Written agreements with schools.</strong> Where Aedifica processes student data on a school’s behalf, we enter into a written data-protection agreement; that agreement, together with the school’s own policies, governs how student data is handled.</>,
    ],
  },
  {
    heading: 'What personal information we collect',
    body: [
      <>Depending on your relationship with us, we may collect: contact and biographic information (name, home or school address, email, phone, and for scholars, grade level and school); program information (enrollment, attendance, coursework, capstone materials, assessments, credentials earned, and outcome data such as completion and, for workforce programs, placement and articulation); demographic information where a partner, funder, or grant requires it, provided at your option where the law allows; image, likeness, and voice at in-person or virtual events, with notice at the event; and aggregated website and communication analytics such as page visits and email opens.</>,
      <><strong className="font-semibold text-anthracite">Sensitive information.</strong> We avoid collecting sensitive personal information. Where a program requires health, accommodation, or eligibility details, we collect only what is necessary and protect it accordingly.</>,
    ],
  },
  {
    heading: 'How we collect it',
    body: [
      <>Directly from you; from a parent, guardian, teacher, or partner school supporting a scholar’s participation; through enrollment processes; and through service providers that help us run and measure programs.</>,
    ],
  },
  {
    heading: 'How we use it',
    body: [
      <>To deliver and improve our programs; to communicate with scholars, families, and partners about enrollment and program updates; to assess and report outcomes to schools, employers, and funders; to process any payments or reimbursements; and to meet legal and grant-compliance obligations. We measure program impact using aggregated and, wherever possible, de-identified data. We will always honor a request to stop non-essential communications.</>,
    ],
  },
  {
    heading: 'When we share it',
    body: [
      <>We share personal information only as needed to run our programs, and with: partner schools, districts, and institutions through which a program is delivered; employers and workforce partners, for workforce-track programs, limited to what a scholar has agreed to share for interviews and placement; funders and grantors, ordinarily as aggregated or de-identified outcome data except where a grant requires more and you have been told; and service providers who host, support, or help us measure programs, under contracts that restrict their use of the data. <strong className="font-semibold text-anthracite">We do not sell personal information. We do not share student information for third-party advertising or marketing.</strong></>,
    ],
  },
  {
    heading: 'How we store and protect it',
    body: [
      <>We use administrative, technical, and physical safeguards appropriate to the sensitivity of the information, including access controls and encryption where appropriate.</>,
    ],
  },
  {
    heading: 'How long we keep it',
    body: [
      <>We keep personal information for as long as needed to deliver programs, meet legal and grant obligations, and maintain program records, after which we delete or de-identify it.</>,
    ],
  },
  {
    heading: 'Your choices and rights',
    body: [
      <>You may ask to access, correct, or delete your personal information, and to opt out of non-essential communications. For a scholar who is a minor, a parent or guardian may make these requests. Contact us at the address above; we may need to verify your identity first. Some information may be retained where the law or a grant requires.</>,
    ],
  },
  {
    heading: 'Changes to this statement',
    body: [
      <>We may update this statement from time to time. Significant changes will be posted here or communicated directly.</>,
    ],
  },
]

export function Privacy() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[36vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="privacy-h1">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-8 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            Legal
          </motion.span>

          <motion.h1
            id="privacy-h1"
            className="text-[2.75rem] lg:text-[clamp(2.5rem,5vw,4rem)] leading-[0.98] tracking-[-0.035em] text-white italic"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Privacy Statement
          </motion.h1>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-snow py-16 lg:py-24" aria-label="Privacy Statement">
        <div className="max-w-[720px] mx-auto px-6">

          <p className="text-[15px] text-anthracite/75 leading-[1.72] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
            Aedifica LLC (“Aedifica,” “we,” “us”) builds construction-management education-to-workforce pathways for
            scholars, schools, and partners. Many of our scholars are minors, and we treat their information with the
            heightened care that responsibility demands. This Privacy Statement explains what personal information we
            collect, how we use it, and the choices you have.
          </p>
          <p className="text-[15px] text-anthracite/75 leading-[1.72] mb-10" style={{ fontFamily: 'var(--font-body)' }}>
            Aedifica is a New Jersey limited liability company. If you have questions about this statement, contact us
            at {EMAIL}.
          </p>

          {SECTIONS.map((section) => (
            <div key={section.heading}>
              <h3
                className="text-[1.375rem] lg:text-[1.5rem] leading-[1.15] tracking-[-0.02em] text-anthracite italic mb-3 mt-10"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                {section.heading}
              </h3>
              {section.body.map((p, i) => (
                <p key={i} className="text-[15px] text-anthracite/75 leading-[1.72] mb-4 last:mb-0" style={{ fontFamily: 'var(--font-body)' }}>
                  {p}
                </p>
              ))}
            </div>
          ))}

          <p className="text-[12.5px] text-anthracite/50 mt-10 pt-4 border-t border-anthracite/12" style={{ fontFamily: 'var(--font-body)' }}>
            <strong className="font-semibold text-anthracite/60">Last updated:</strong> August 1, 2026
          </p>

        </div>
      </section>

    </main>
  )
}
