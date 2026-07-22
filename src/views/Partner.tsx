'use client'
import { useState } from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'motion/react'
import { EnvelopeSimple, Phone, MapPin, UsersThree, ChatCircleText, CaretDown, type Icon } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const CONTACT_FACTS: { Icon: Icon; label: string; value: string; pending?: boolean }[] = [
  { Icon: EnvelopeSimple, label: 'Email', value: 'info@edfca.com' },
  { Icon: Phone, label: 'Phone', value: 'Line coming soon, reach us by email for now', pending: true },
  { Icon: MapPin, label: 'Service area', value: 'New Jersey / New York metro region' },
  { Icon: UsersThree, label: 'Best for', value: 'Districts, workforce boards, county colleges, employers, agencies, and funders, and the families and learners they serve' },
  { Icon: ChatCircleText, label: 'Response', value: 'Partnership inquiries receive a scoped reply, not a brochure' },
]

const INTEREST_OPTIONS = [
  { value: '', label: "Select what you're interested in" },
  { value: 'explore', label: 'Explore: middle school' },
  { value: 'pathway', label: 'Pathway: high schools & districts' },
  { value: 'launch', label: 'Launch: institutional pathway design' },
  { value: 'rebuild', label: 'Rebuild: adult bridge cohorts' },
  { value: 'talent-pipeline', label: 'Talent Pipeline: hiring & articulation' },
  { value: 'research', label: 'Research: briefings & reports' },
  { value: 'family', label: 'Parent or family: a program for my child' },
  { value: 'adult-learner', label: 'Adult learner: Rebuild cohort' },
  { value: 'other', label: 'Something else' },
]

type FormState = {
  name: string
  email: string
  org: string
  interest: string
  message: string
  consent: boolean
}

const EMPTY_FORM: FormState = { name: '', email: '', org: '', interest: '', message: '', consent: false }

const inputCls =
  'w-full px-4 py-3 bg-transparent border border-anthracite/22 text-anthracite text-[14px] placeholder:text-anthracite/50 focus:border-datum focus:outline-none transition-colors duration-150'

const selectCls =
  'w-full pl-4 pr-10 py-3 bg-bone border border-anthracite/22 text-anthracite text-[14px] focus:border-datum focus:outline-none transition-colors duration-150 appearance-none cursor-pointer'

const labelCls =
  'block text-[11px] text-anthracite/70 uppercase tracking-[0.15em] mb-1.5 select-none'

export function Partner() {
  const reduce = useReducedMotion()
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState(false)

  function set(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(prev => ({ ...prev, [field]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    if (!form.name || !emailOk || !form.message || !form.consent) {
      setFormError(true)
      return
    }
    if ((e.currentTarget as HTMLFormElement).querySelector<HTMLInputElement>('[name="website"]')?.value) return
    setFormError(false)
    setSubmitting(true)
    const body = new URLSearchParams(
      Object.fromEntries(
        Object.entries(form).filter(([, v]) => typeof v === 'string') as [string, string][]
      )
    )
    try {
      await fetch('https://usebasin.com/f/5f39f537ee84', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body })
    } finally {
      setSubmitting(false)
      setSubmitted(true)
    }
  }

  return (
    <main>

      {/* ── Hero: §17 Partner CTA ── */}
      <section
        className="bg-anthracite min-h-[48vh] flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-20 relative overflow-hidden"
        aria-labelledby="partner-h1">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-6 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            From foundations to futures
          </motion.span>

          <motion.h1
            id="partner-h1"
            className="text-[2.5rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[1.02] tracking-[-0.032em] text-white italic mb-8 max-w-[20ch] [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Built on a commitment to deliver, report, and be accountable.
          </motion.h1>

          <motion.p
            className="text-[14.5px] text-white/65 leading-[1.65] max-w-[58ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
            Speak with Aedifica about what a founding partnership, employer engagement, or
            institutional briefing looks like in practice, for your district, your board, your
            agency, or your firm.
          </motion.p>

        </div>
      </section>

      {/* ── §18 Contact ── */}
      <section className="bg-bone py-14 lg:py-20" aria-labelledby="contact-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.35fr] lg:gap-16 xl:gap-20 lg:items-start">

            <div>
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
                <span className="w-7 h-[2px] bg-datum flex-shrink-0" aria-hidden="true" />
                <p className="text-[13.5px] uppercase tracking-[0.14em] text-datum font-medium" style={{ fontFamily: 'var(--font-body)' }}>Contact</p>
              </motion.div>
              <motion.h2
                id="contact-h2"
                className="text-[2rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-10 max-w-[16ch] [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
                Tell us which door is yours. We&rsquo;ll map the pathway.
              </motion.h2>

              <div className="border-t border-sediment/25">
                {CONTACT_FACTS.map(({ Icon: IconComp, label, value, pending }, i) => (
                  <motion.div
                    key={label}
                    className="flex items-start gap-4 py-5 border-b border-sediment/25"
                    initial={reduce ? undefined : { opacity: 0, y: 12 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.4, delay: i * 0.06, ease: EASE }}>
                    <IconComp size={18} weight="regular" className="text-datum flex-shrink-0 mt-0.5" aria-hidden={true} />
                    <div>
                      <p className="text-[10.5px] uppercase tracking-[0.14em] text-datum mb-1" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
                      {label === 'Email'
                        ? <a href={`mailto:${value}`} className="text-[14px] text-anthracite hover:text-datum transition-colors duration-150" style={{ fontFamily: 'var(--font-body)' }}>{value}</a>
                        : <p className={`text-[13.5px] leading-[1.55] max-w-[46ch] ${pending ? 'text-anthracite/55 italic' : 'text-anthracite/80'}`} style={{ fontFamily: 'var(--font-body)' }}>{value}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    className="bg-snow border border-sediment/25 px-8 py-12 lg:px-10 lg:py-14"
                    initial={reduce ? undefined : { opacity: 0, y: 16 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
                    <span
                      className="inline-block text-[11px] uppercase tracking-[0.18em] bg-datum/10 text-datum px-3 py-1 mb-6 select-none"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      Received
                    </span>
                    <p
                      className="text-[1.625rem] lg:text-[2rem] italic text-anthracite leading-[1.2] tracking-[-0.02em] mb-4 max-w-[30ch]"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                      Your inquiry has been received.
                    </p>
                    <p
                      className="text-[13.5px] text-anthracite/75 leading-[1.65]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      Partnership inquiries receive a scoped reply, not a brochure.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    id="contact-form"
                    onSubmit={handleSubmit}
                    className="scroll-mt-24"
                    aria-label="Contact Aedifica"
                    initial={reduce ? undefined : { opacity: 0 }}
                    animate={reduce ? undefined : { opacity: 1 }}
                    transition={reduce ? undefined : { duration: 0.4, ease: EASE }}
                    noValidate>

                    {/* Honeypot */}
                    <input name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
                      className="absolute opacity-0 pointer-events-none w-0 h-0 overflow-hidden" />

                    <div className="space-y-5">
                      <div>
                        <label htmlFor="cf-name" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                          Your name <span className="text-datum" aria-hidden="true">*</span>
                        </label>
                        <input id="cf-name" type="text" required autoComplete="name"
                          value={form.name} onChange={set('name')}
                          className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                      </div>

                      <div>
                        <label htmlFor="cf-email" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                          Email <span className="text-datum" aria-hidden="true">*</span>
                        </label>
                        <input id="cf-email" type="email" required autoComplete="email"
                          value={form.email} onChange={set('email')}
                          className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                      </div>

                      <div>
                        <label htmlFor="cf-org" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                          Organization & role
                        </label>
                        <input id="cf-org" type="text" autoComplete="organization"
                          value={form.org} onChange={set('org')}
                          className={inputCls} style={{ fontFamily: 'var(--font-body)' }} />
                      </div>

                      <div>
                        <label htmlFor="cf-interest" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                          I&rsquo;m interested in
                        </label>
                        <div className="relative">
                          <select id="cf-interest" value={form.interest} onChange={set('interest')}
                            className={selectCls} style={{ fontFamily: 'var(--font-body)' }}>
                            {INTEREST_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                          </select>
                          <CaretDown size={13} weight="bold" aria-hidden={true}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-anthracite/40 pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="cf-message" className={labelCls} style={{ fontFamily: 'var(--font-body)' }}>
                          What are you trying to build? <span className="text-datum" aria-hidden="true">*</span>
                        </label>
                        <textarea id="cf-message" required rows={4}
                          value={form.message} onChange={set('message')}
                          className={`${inputCls} resize-y`}
                          style={{ fontFamily: 'var(--font-body)' }} />
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-sediment/20">
                      {formError && (
                        <p
                          role="alert"
                          className="text-[12.5px] text-datum leading-[1.5] mb-4"
                          style={{ fontFamily: 'var(--font-body)' }}>
                          Please fill in your name, a valid email, a message, and accept the consent statement.
                        </p>
                      )}
                      <label className="flex items-start gap-3 cursor-pointer mb-6">
                        <input
                          type="checkbox"
                          required
                          checked={form.consent}
                          onChange={e => setForm(prev => ({ ...prev, consent: e.target.checked }))}
                          className="mt-[3px] flex-shrink-0 w-4 h-4 border border-sediment/40 accent-datum cursor-pointer"
                        />
                        <span
                          className="text-[12.5px] text-anthracite/75 leading-[1.58]"
                          style={{ fontFamily: 'var(--font-body)' }}>
                          You may contact me about this inquiry.
                        </span>
                      </label>
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:w-auto inline-flex items-center justify-center bg-datum text-white text-[13.5px] tracking-[-0.01em] px-8 py-3.5 hover:bg-datum/88 active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {submitting ? 'Sending…' : 'Send the inquiry'}
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}
