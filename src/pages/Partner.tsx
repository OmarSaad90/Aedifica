import { SEO, SITE_URL } from '../components/SEO'
import { useState, useRef } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'motion/react'

const PARTNER_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      url: `${SITE_URL}/partner`,
      name: "Partner With Aedifica | Build New Jersey's CM Workforce Pathway",
      description:
        'Partner with Aedifica as an education institution, workforce organization, employer, or funding partner to build accountable construction-management pathways in New Jersey.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Partner With Us', item: `${SITE_URL}/partner` },
      ],
    },
  ],
} as Record<string, unknown>

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

type AudienceId = 'education' | 'workforce' | 'employer' | 'funding'

const AUDIENCES: {
  id: AudienceId
  label: string
  bg: string
  textColor: string
  mutedText: string
  dimText: string
  borderFaint: string
  orgValue: string
  desc: string
  what: string[]
  cta: string
}[] = [
  {
    id: 'education',
    label: 'Education Institutions',
    bg: 'bg-datum',
    textColor: 'text-white',
    mutedText: 'text-white/82',
    dimText: 'text-white/82',
    borderFaint: 'border-white/20',
    orgValue: 'education',
    desc: 'Districts, charter networks, county colleges, and vocational institutions building student construction-management pathways.',
    what: [
      'Curriculum-aligned student pathways',
      'Grant strategy through Aedifica Launch',
      'Articulation and credential integration',
    ],
    cta: 'Discuss an education partnership',
  },
  {
    id: 'workforce',
    label: 'Workforce & Community',
    bg: 'bg-sediment',
    textColor: 'text-anthracite',
    mutedText: 'text-anthracite/78',
    dimText: 'text-anthracite/78',
    borderFaint: 'border-anthracite/20',
    orgValue: 'workforce',
    desc: 'CBOs, workforce boards, and reentry organizations connecting adults to a practical construction-management bridge cohort.',
    what: [
      'Rebuild adult bridge cohort delivery',
      'Participant recruitment coordination',
      'Outcome and reporting partnership',
    ],
    cta: 'Discuss a Rebuild cohort',
  },
  {
    id: 'employer',
    label: 'Employers',
    bg: 'bg-patina',
    textColor: 'text-white',
    mutedText: 'text-white/82',
    dimText: 'text-white/82',
    borderFaint: 'border-white/20',
    orgValue: 'employer',
    desc: 'General contractors, specialty contractors, and developers validating roles and meeting prepared emerging talent through an accountable interview model.',
    what: [
      'Role validation and capstone participation',
      'Interview access to qualified completers',
      'Workforce pipeline development',
    ],
    cta: 'Become an employer partner',
  },
  {
    id: 'funding',
    label: 'Funding & State Partners',
    bg: 'bg-quarry',
    textColor: 'text-anthracite',
    mutedText: 'text-anthracite/78',
    dimText: 'text-anthracite/78',
    borderFaint: 'border-anthracite/20',
    orgValue: 'funding',
    desc: 'State agencies, workforce boards, and foundations supporting accountable construction-management workforce infrastructure.',
    what: [
      'Measurable outcomes framework',
      'Employer-linked delivery model',
      'Responsible scale after credible evidence',
    ],
    cta: 'Request an institutional briefing',
  },
]

const ORG_OPTIONS = [
  { value: '', label: 'Select organization type' },
  { value: 'education', label: 'Education institution (district, college, school)' },
  { value: 'workforce', label: 'Workforce or community organization' },
  { value: 'employer', label: 'Employer (contractor, developer, GC)' },
  { value: 'funding', label: 'Funding or state partner' },
  { value: 'philanthropic', label: 'Philanthropic funder' },
  { value: 'other', label: 'Other' },
]

const INTEREST_OPTIONS = [
  { value: '', label: 'Select partnership interest' },
  { value: 'rebuild', label: 'Aedifica Rebuild (adult bridge cohort)' },
  { value: 'launch', label: 'Aedifica Launch (grant strategy)' },
  { value: 'pathway', label: 'Aedifica Pathway (school curriculum)' },
  { value: 'talent-pipeline', label: 'Talent Pipeline (employer pipeline)' },
  { value: 'explore', label: 'Explore (student exposure modules)' },
  { value: 'outcomes', label: 'Outcome reporting collaboration' },
  { value: 'briefing', label: 'Institutional briefing' },
  { value: 'other', label: 'Other / not sure yet' },
]

const TIMELINE_OPTIONS = [
  { value: '', label: 'Select timeline' },
  { value: 'exploring', label: 'Exploring, no immediate timeline' },
  { value: '3months', label: 'Within 3 months' },
  { value: '6months', label: 'Within 6 months' },
  { value: 'academic', label: 'Next academic year' },
  { value: 'deadline', label: 'Funding deadline driving timeline' },
  { value: 'other', label: 'Other' },
]

type FormState = {
  firstName: string
  lastName: string
  email: string
  organization: string
  title: string
  orgType: string
  interest: string
  geography: string
  timeline: string
  message: string
  consent: boolean
  gradePopulation: string
  employerRoles: string
  employerParticipation: string
  targetPopulation: string
  recruitmentCapacity: string
  fundingOpportunity: string
  fundingDueDate: string
}

const EMPTY_FORM: FormState = {
  firstName: '', lastName: '', email: '', organization: '', title: '',
  orgType: '', interest: '', geography: '', timeline: '', message: '',
  consent: false,
  gradePopulation: '', employerRoles: '', employerParticipation: '',
  targetPopulation: '', recruitmentCapacity: '',
  fundingOpportunity: '', fundingDueDate: '',
}

const inputCls =
  'w-full px-4 py-3 bg-transparent border border-sediment/35 text-anthracite text-[14px] placeholder:text-anthracite/30 focus:border-datum focus:outline-none transition-colors duration-150'

const selectCls =
  'w-full px-4 py-3 bg-snow border border-sediment/35 text-anthracite text-[14px] focus:border-datum focus:outline-none transition-colors duration-150 appearance-none cursor-pointer'

const labelCls =
  'block text-[10.5px] text-anthracite/70 uppercase tracking-[0.16em] mb-1.5 select-none'

export function Partner() {
  const reduce = useReducedMotion()
  const formRef = useRef<HTMLElement>(null)
  const [selected, setSelected] = useState<AudienceId | null>(null)
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function handleAudienceClick(id: AudienceId, orgValue: string) {
    setSelected(id)
    setForm(prev => ({ ...prev, orgType: orgValue }))
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
  }

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    if (!form.firstName || !form.lastName || !emailOk || !form.organization || !form.orgType || !form.message || !form.consent) return
    setSubmitting(true)
    const body = new URLSearchParams({
      'form-name': 'partner-inquiry',
      ...Object.fromEntries(
        Object.entries(form).filter(([, v]) => typeof v === 'string') as [string, string][]
      ),
    })
    try {
      await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
    } finally {
      setSubmitting(false)
      setSubmitted(true)
    }
  }

  const showEducation = form.orgType === 'education'
  const showWorkforce = form.orgType === 'workforce'
  const showEmployer = form.orgType === 'employer'
  const showFunding =
    form.orgType === 'funding' || form.orgType === 'philanthropic' || form.interest === 'launch'

  return (
    <main>
      <SEO
        title="Partner With Aedifica | Build New Jersey's CM Workforce Pathway"
        description="Partner with Aedifica as an education institution, workforce organization, employer, or funding partner to build accountable construction-management pathways in New Jersey."
        path="/partner"
        schema={PARTNER_SCHEMA}
      />

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[62vh] flex flex-col justify-end pb-16 lg:pb-22 relative overflow-hidden"
        aria-labelledby="partner-h1">

        <motion.div
          className="absolute top-8 right-6 lg:right-10 select-none pointer-events-none"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.8, delay: 1.0, ease: EASE }}>
          <p
            className="text-[10px] text-white/18 uppercase tracking-[0.26em] text-right"
            style={{ fontFamily: 'var(--font-body)' }}>
            Four routes
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-6 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            Partner With Aedifica
          </motion.span>

          <motion.h1
            id="partner-h1"
            className="text-[2.75rem] lg:text-[4.5rem] xl:text-[6rem] leading-[0.96] tracking-[-0.035em] text-white italic mb-8"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            The pathway starts<br className="hidden lg:block" /> with who you are.
          </motion.h1>

          <motion.p
            className="text-[14.5px] text-white/60 leading-[1.65] max-w-[58ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
            Aedifica partners with education institutions, community organizations, employers, and
            funding partners. Select the route that describes your organization to start a
            conversation.
          </motion.p>

        </div>
      </section>

      {/* ── Audience Strips ── */}
      <section aria-label="Partnership routes" className="grid grid-cols-1 lg:grid-cols-4">
        {AUDIENCES.map((audience, i) => {
          const isSelected = selected === audience.id
          return (
            <motion.button
              key={audience.id}
              onClick={() => handleAudienceClick(audience.id, audience.orgValue)}
              className={`${audience.bg} ${audience.textColor} relative group text-left flex flex-col justify-between
                px-8 py-10 lg:px-9 lg:py-12 min-h-[280px] lg:min-h-[400px] w-full
                transition-opacity duration-200 ${!isSelected && selected !== null ? 'lg:opacity-72' : ''}`}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              animate={reduce ? undefined : { opacity: !isSelected && selected !== null ? 0.72 : 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.05 * i, ease: EASE }}
              aria-pressed={isSelected}>

              {isSelected && (
                <span
                  className={`absolute top-4 right-4 w-2 h-2 ${audience.textColor === 'text-white' ? 'bg-white' : 'bg-anthracite'}`}
                  aria-hidden="true"
                />
              )}

              <div>
                <h2
                  className="text-[1.625rem] lg:text-[1.875rem] xl:text-[2.125rem] italic leading-[1.08] tracking-[-0.025em] mb-5"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  {audience.label}
                </h2>
                <p
                  className={`text-[13.5px] ${audience.mutedText} leading-[1.65] max-w-[28ch]`}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {audience.desc}
                </p>
              </div>

              <div className="mt-8">
                <ul
                  className={`border-t ${audience.borderFaint} pt-5 mb-6 space-y-2`}>
                  {audience.what.map(item => (
                    <li
                      key={item}
                      className={`flex gap-2.5 items-start text-[12.5px] ${audience.mutedText} leading-[1.55]`}
                      style={{ fontFamily: 'var(--font-body)' }}>
                      <span
                        className={`flex-shrink-0 mt-[5px] w-[3px] h-[3px] ${audience.textColor === 'text-white' ? 'bg-white/70' : 'bg-anthracite/60'}`}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <span
                  className={`inline-flex items-center gap-2.5 px-5 py-2.5 text-[11.5px] ${audience.textColor} border uppercase tracking-[0.1em] transition-all duration-200 group-hover:gap-3.5
                    ${audience.textColor === 'text-white'
                      ? 'border-white/38 hover:bg-white/14'
                      : 'border-anthracite/32 hover:bg-anthracite/8'}`}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {audience.cta}
                  <span aria-hidden="true">&#8594;</span>
                </span>
              </div>

            </motion.button>
          )
        })}
      </section>

      {/* ── Contact Form ── */}
      <section
        ref={formRef}
        className="bg-snow py-16 lg:py-24 scroll-mt-16"
        aria-labelledby="partner-form-h2">
        <div className="max-w-[1080px] mx-auto px-6">

          <motion.div
            className="mb-12 lg:mb-16"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
            <p
              className="text-[10.5px] text-quarry uppercase tracking-[0.18em] mb-4 select-none font-medium"
              style={{ fontFamily: 'var(--font-body)' }}>
              Start a conversation
            </p>
            <h2
              id="partner-form-h2"
              className="text-[2rem] lg:text-[3rem] xl:text-[3.75rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              {selected
                ? AUDIENCES.find(a => a.id === selected)?.cta
                    ? AUDIENCES.find(a => a.id === selected)!.cta.charAt(0).toUpperCase() +
                      AUDIENCES.find(a => a.id === selected)!.cta.slice(1) + '.'
                    : 'Tell us about your organization.'
                : 'Tell us about your organization.'}
            </h2>
            <p
              className="text-[14px] text-anthracite/65 leading-[1.7] max-w-[58ch]"
              style={{ fontFamily: 'var(--font-body)' }}>
              Aedifica reviews every inquiry. You will hear back within five business days.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="py-16 lg:py-20 border-t border-sediment/20"
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
                <span
                  className="inline-block text-[11px] uppercase tracking-[0.18em] bg-datum/10 text-datum px-3 py-1 mb-6 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Received
                </span>
                <p
                  className="text-[1.875rem] lg:text-[2.5rem] italic text-anthracite leading-[1.14] tracking-[-0.025em] mb-5 max-w-[34ch]"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  Your inquiry has been received. Aedifica will respond within five business days.
                </p>
                <p
                  className="text-[14px] text-anthracite/65 leading-[1.7]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  If your inquiry is time-sensitive due to a funding deadline, please note that in
                  your message.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="border-t border-sediment/20 pt-7"
                initial={reduce ? undefined : { opacity: 0 }}
                animate={reduce ? undefined : { opacity: 1 }}
                transition={reduce ? undefined : { duration: 0.4, ease: EASE }}
                noValidate>

                {/* Two-column layout: identity left, intent right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16">

                  {/* Left — who you are */}
                  <div className="flex flex-col justify-between gap-6">
                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="pf-first" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                          First name <span className="text-datum" aria-hidden="true">*</span>
                        </label>
                        <input id="pf-first" type="text" required autoComplete="given-name"
                          value={form.firstName} onChange={set('firstName')}
                          className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                      </div>
                      <div>
                        <label htmlFor="pf-last" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                          Last name <span className="text-datum" aria-hidden="true">*</span>
                        </label>
                        <input id="pf-last" type="text" required autoComplete="family-name"
                          value={form.lastName} onChange={set('lastName')}
                          className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="pf-email" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                        Work email <span className="text-datum" aria-hidden="true">*</span>
                      </label>
                      <input id="pf-email" type="email" required autoComplete="email"
                        value={form.email} onChange={set('email')}
                        className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                    </div>

                    <div>
                      <label htmlFor="pf-org" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                        Organization <span className="text-datum" aria-hidden="true">*</span>
                      </label>
                      <input id="pf-org" type="text" required autoComplete="organization"
                        value={form.organization} onChange={set('organization')}
                        className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="pf-title" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                          Title / role
                        </label>
                        <input id="pf-title" type="text" autoComplete="organization-title"
                          value={form.title} onChange={set('title')}
                          className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                      </div>
                      <div>
                        <label htmlFor="pf-geo" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                          County / region
                        </label>
                        <input id="pf-geo" type="text" placeholder="e.g. Union County, NJ"
                          value={form.geography} onChange={set('geography')}
                          className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                      </div>
                    </div>
                  </div>

                  {/* Right — what you want to discuss */}
                  <div className="flex flex-col justify-between gap-6 mt-5 lg:mt-0">
                    <div>
                      <label htmlFor="pf-orgtype" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                        Organization type <span className="text-datum" aria-hidden="true">*</span>
                      </label>
                      <select id="pf-orgtype" required value={form.orgType} onChange={set('orgType')}
                        className={selectCls} style={{ fontFamily: 'var(--font-body)' }}>
                        {ORG_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="pf-interest" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                          Partnership interest
                        </label>
                        <select id="pf-interest" value={form.interest} onChange={set('interest')}
                          className={selectCls} style={{ fontFamily: 'var(--font-body)' }}>
                          {INTEREST_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="pf-timeline" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                          Timeline
                        </label>
                        <select id="pf-timeline" value={form.timeline} onChange={set('timeline')}
                          className={selectCls} style={{ fontFamily: 'var(--font-body)' }}>
                          {TIMELINE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Conditional fields — appear in right column */}
                    {(showEducation || showWorkforce || showEmployer || showFunding) && (
                      <motion.div
                        className="space-y-5"
                        initial={reduce ? undefined : { opacity: 0, y: 8 }}
                        animate={reduce ? undefined : { opacity: 1, y: 0 }}
                        transition={reduce ? undefined : { duration: 0.3, ease: EASE }}>
                        {showEducation && (
                          <div>
                            <label htmlFor="pf-grade" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                              Grade bands / learner populations
                            </label>
                            <input id="pf-grade" type="text"
                              placeholder="e.g. High school, adult learners, CTE"
                              value={form.gradePopulation} onChange={set('gradePopulation')}
                              className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                          </div>
                        )}
                        {showWorkforce && (
                          <div className="grid grid-cols-2 gap-5">
                            <div>
                              <label htmlFor="pf-target" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                                Target population
                              </label>
                              <input id="pf-target" type="text"
                                placeholder="e.g. Justice-impacted adults"
                                value={form.targetPopulation} onChange={set('targetPopulation')}
                                className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                            </div>
                            <div>
                              <label htmlFor="pf-capacity" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                                Annual recruitment capacity
                              </label>
                              <input id="pf-capacity" type="text" placeholder="e.g. 20-40/year"
                                value={form.recruitmentCapacity} onChange={set('recruitmentCapacity')}
                                className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                            </div>
                          </div>
                        )}
                        {showEmployer && (
                          <div className="grid grid-cols-2 gap-5">
                            <div>
                              <label htmlFor="pf-roles" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                                Roles of interest
                              </label>
                              <input id="pf-roles" type="text"
                                placeholder="e.g. Project admin, estimating"
                                value={form.employerRoles} onChange={set('employerRoles')}
                                className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                            </div>
                            <div>
                              <label htmlFor="pf-participation" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                                Participation type
                              </label>
                              <select id="pf-participation" value={form.employerParticipation}
                                onChange={set('employerParticipation')}
                                className={selectCls} style={{ fontFamily: 'var(--font-body)' }}>
                                <option value="">Select type</option>
                                <option value="capstone">Capstone only</option>
                                <option value="interview">Interview access only</option>
                                <option value="capstone-interview">Capstone + interview</option>
                                <option value="pipeline">Pipeline development</option>
                                <option value="all">All of the above</option>
                              </select>
                            </div>
                          </div>
                        )}
                        {showFunding && (
                          <div className="grid grid-cols-2 gap-5">
                            <div>
                              <label htmlFor="pf-funder" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                                Funding opportunity / program
                              </label>
                              <input id="pf-funder" type="text" placeholder="e.g. PACE, GAINS"
                                value={form.fundingOpportunity} onChange={set('fundingOpportunity')}
                                className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                            </div>
                            <div>
                              <label htmlFor="pf-duedate" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                                Due date
                              </label>
                              <input id="pf-duedate" type="text" placeholder="e.g. Sept 30, 2026"
                                value={form.fundingDueDate} onChange={set('fundingDueDate')}
                                className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}

                  </div>

                </div>

                {/* Message — full width below both columns */}
                <div className="mt-8">
                  <label htmlFor="pf-message" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                    What would you like to discuss? <span className="text-datum" aria-hidden="true">*</span>
                  </label>
                  <textarea id="pf-message" required rows={4}
                    value={form.message} onChange={set('message')}
                    className={`${inputCls} resize-y`}
                    style={{ fontFamily: 'var(--font-body)' }} />
                </div>

                {/* Consent + submit — full width */}
                <div className="mt-10 pt-8 border-t border-sediment/15">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-5">
                    <label className="flex items-start gap-3 cursor-pointer max-w-[52ch]">
                      <input
                        type="checkbox"
                        required
                        checked={form.consent}
                        onChange={e => setForm(prev => ({ ...prev, consent: e.target.checked }))}
                        className="mt-[3px] flex-shrink-0 w-4 h-4 border border-sediment/40 accent-datum cursor-pointer"
                      />
                      <span
                        className="text-[12.5px] text-anthracite/65 leading-[1.58]"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        I understand this inquiry will be reviewed by Aedifica. No information will be shared with third parties.
                      </span>
                    </label>
                    <div className="flex items-center gap-5 flex-shrink-0">
                      <p
                        className="text-[11.5px] text-anthracite/35 leading-[1.5] text-right"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        Fields marked <span className="text-datum">*</span> required.<br />5-day response.
                      </p>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex items-center justify-center bg-datum text-white text-[13.5px] tracking-[-0.01em] px-8 py-3.5 hover:bg-datum/88 active:scale-[0.98] transition-all duration-150 flex-shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {submitting ? 'Sending…' : 'Submit'}
                      </button>
                    </div>
                  </div>
                </div>

              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </section>

    </main>
  )
}
