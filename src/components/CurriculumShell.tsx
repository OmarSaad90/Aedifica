'use client'
import { createContext, useContext, useState, type ReactNode } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { CaretDown } from '@phosphor-icons/react'

const EASE = [0.25, 0.1, 0.25, 1] as const
const VIEWPORT = { once: true, margin: '-40px 0px' } as const

// ── Shared standards-chip system (five frameworks, real codes, hover tooltips) ──
export type StdCat = 'sci' | 'math' | 'ela' | 'des' | 'car'

export const STD_COLORS: Record<StdCat, string> = {
  sci:  'var(--color-wine)',
  math: 'var(--color-terracotta)',
  ela:  'var(--color-clay)',
  des:  'var(--color-rule)',
  car:  'var(--color-blush)',
}

const StdFilterContext = createContext<StdCat | null>(null)

export function StdBadge({ cat, code, desc }: { cat: StdCat; code: string; desc: string }) {
  const active = useContext(StdFilterContext)
  const dimmed = active !== null && active !== cat
  return (
    <span
      title={desc}
      className="inline-block text-[9px] font-medium tracking-[0.03em] px-1.5 py-0.5 text-anthracite leading-none cursor-help whitespace-nowrap transition-opacity duration-150 border"
      style={{
        borderColor: STD_COLORS[cat],
        backgroundColor: `color-mix(in srgb, ${STD_COLORS[cat]} 14%, white)`,
        fontFamily: 'var(--font-body)',
        opacity: dimmed ? 0.28 : 1,
      }}>
      {code}
    </span>
  )
}

// ── Standards legend: tap a framework to dim every other chip in this shell ──
export type Framework = { cat: StdCat; name: string }

export function StandardsLegend({
  frameworks,
  active,
  onSelect,
  keyLabel = 'Standards key, tap to filter',
  groupAriaLabel = 'Standards key, filter the weeks by framework',
  allShownText = 'Showing all standards frameworks. Every week names the standards it teaches, color-coded and labeled by framework; hover any code for its full description.',
}: {
  frameworks: Framework[]
  active: StdCat | null
  onSelect: (cat: StdCat | null) => void
  keyLabel?: string
  groupAriaLabel?: string
  allShownText?: string
}) {
  const activeName = frameworks.find(f => f.cat === active)?.name

  return (
    <div className="bg-bone px-6 py-5 lg:px-7 mb-10 lg:mb-12">
      <p
        className="text-[10px] uppercase tracking-[0.14em] text-anthracite/60 mb-3.5"
        style={{ fontFamily: 'var(--font-body)' }}>
        {keyLabel}
      </p>
      <div className="flex flex-wrap gap-2 mb-3.5" role="group" aria-label={groupAriaLabel}>
        {frameworks.map(({ cat, name }) => {
          const isActive = active === cat
          return (
            <button
              key={cat}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelect(isActive ? null : cat)}
              className={`inline-flex items-center gap-2 text-[12px] px-3 py-1.5 border transition-colors duration-150 ${isActive ? 'border-anthracite bg-anthracite text-white' : 'border-anthracite/20 text-anthracite/78 hover:border-anthracite/45'}`}
              style={{ fontFamily: 'var(--font-body)' }}>
              <span className="w-[8px] h-[8px] rotate-45 flex-shrink-0" style={{ backgroundColor: STD_COLORS[cat] }} aria-hidden="true" />
              {name}
            </button>
          )
        })}
      </div>
      <p className="text-[12px] text-anthracite/65 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }} aria-live="polite">
        {active
          ? `Showing ${activeName}. Every other framework is dimmed; codes stay visible on hover.`
          : allShownText}
      </p>
    </div>
  )
}

// ── Week / day row + band ──
export type WeekRow = {
  num: number | string
  unit: 'Week' | 'Day' | 'Unit' | 'Phase' | 'Studio'
  question: string
  desc: ReactNode
  chips: { code: string; cat: StdCat; desc: string }[]
}

export function Band({
  numLabel,
  rangeLabel,
  title,
  desc,
  meta,
  weeks,
  id,
  color,
  dark,
}: {
  id: string
  numLabel: string
  rangeLabel: string
  title: string
  desc: string
  meta: { label: string; value: string }[]
  weeks: WeekRow[]
  color?: string
  dark?: boolean
}) {
  const reduce = useReducedMotion()
  return (
    <div id={id} className="pt-10 lg:pt-12 pb-2 border-t border-sediment/20 scroll-mt-24">
      <div className="lg:grid lg:grid-cols-[80px_1fr] lg:gap-8 mb-8 lg:mb-10">
        <div
          className="text-[2.5rem] lg:text-[3rem] italic text-anthracite/15 leading-none mb-3 lg:mb-0"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          aria-hidden="true">
          {numLabel}
        </div>
        <div>
          <span
            className="inline-block border-2 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-ink-soft font-semibold mb-2.5"
            style={{ fontFamily: 'var(--font-body)', borderColor: color }}>
            {rangeLabel}
          </span>
          <h4
            className="text-[1.5rem] lg:text-[1.75rem] text-anthracite italic leading-[1.15] tracking-[-0.02em] mb-3 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            {title}
          </h4>
          <p
            className="text-[13.5px] text-anthracite/75 leading-[1.65] max-w-[70ch] mb-6"
            style={{ fontFamily: 'var(--font-body)' }}>
            {desc}
          </p>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 ${meta.length >= 3 ? 'lg:grid-cols-3' : ''} ${meta.length >= 4 ? 'xl:grid-cols-4' : ''}`}>
            {meta.map(({ label, value }) => (
              <div key={label}>
                <p
                  className="text-[10.5px] uppercase tracking-[0.12em] text-anthracite font-semibold mb-1.5"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {label}
                </p>
                <p
                  className="text-[12.5px] text-anthracite/78 leading-[1.5]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3 lg:space-y-4">
        {weeks.map((w, i) => {
          const isStudio = w.unit === 'Studio'
          const fill = isStudio ? 'var(--color-blush)' : (color ?? 'var(--color-ink-soft)')
          const rowDark = isStudio ? true : dark
          return (
            <motion.div
              key={w.num}
              className="group border border-sediment/25 sm:grid sm:grid-cols-[84px_1fr]"
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, delay: Math.min(i * 0.04, 0.3), ease: EASE }}>
              <div
                className={`flex items-center gap-2 px-5 py-3 sm:flex-col sm:justify-center sm:gap-0.5 sm:px-2 sm:py-6 ${rowDark ? 'text-anthracite' : 'text-white'}`}
                style={{ backgroundColor: fill }}>
                <span
                  className="text-[1.625rem] leading-none italic"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {w.num}
                </span>
                <span
                  className="text-[9px] uppercase tracking-[0.14em] opacity-85"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {w.unit}
                </span>
              </div>
              <div className="px-5 py-5 lg:px-6 lg:py-6">
                <p
                  className="text-[1.0625rem] lg:text-[1.125rem] text-anthracite italic leading-[1.3] tracking-[-0.015em] mb-2"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {w.question}
                </p>
                <p
                  className="text-[13px] text-anthracite/72 leading-[1.62] mb-3 max-w-[68ch]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {w.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {w.chips.map(c => <StdBadge key={c.code} cat={c.cat} code={c.code} desc={c.desc} />)}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

// ── Camp/model card grid (used by the Summer Camps shell) ──
export type ModelCard = {
  cat: StdCat
  name: string
  sub: string
  rows: { label: string; value: string }[]
}

export function ModelCards({ id, eyebrow, title, desc, items }: { id: string; eyebrow: string; title: string; desc: string; items: ModelCard[] }) {
  return (
    <div id={id} className="pt-10 lg:pt-12 border-t border-sediment/20 scroll-mt-24">
      <div className="max-w-[62ch] mb-8 lg:mb-10">
        <p className="text-[10.5px] uppercase tracking-[0.16em] text-ink-soft font-semibold mb-3" style={{ fontFamily: 'var(--font-body)' }}>{eyebrow}</p>
        <h4 className="text-[1.5rem] lg:text-[1.75rem] text-anthracite italic leading-[1.15] tracking-[-0.02em] mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{title}</h4>
        <p className="text-[13.5px] text-anthracite/75 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>{desc}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {items.map(({ cat, name, sub, rows }) => (
          <div key={name} className="border border-sediment/20 px-6 py-7">
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-[9px] h-[9px] rotate-45 flex-shrink-0" style={{ backgroundColor: STD_COLORS[cat] }} aria-hidden="true" />
              <div>
                <p className="text-[1.0625rem] text-anthracite italic leading-none" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{name}</p>
                <p className="text-[10.5px] text-anthracite/60 uppercase tracking-[0.1em] mt-1.5" style={{ fontFamily: 'var(--font-body)' }}>{sub}</p>
              </div>
            </div>
            <dl className="space-y-3">
              {rows.map(({ label, value }) => (
                <div key={label} className="border-t border-sediment/15 pt-3">
                  <dt className="text-[9.5px] uppercase tracking-[0.1em] text-anthracite/55 mb-1" style={{ fontFamily: 'var(--font-body)' }}>{label}</dt>
                  <dd className="text-[12.5px] text-anthracite/78 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Two-column deliverables table (used by BUILD NJ GREEN's capstone) ──
export function DeliverablesTable({
  id,
  eyebrow,
  title,
  desc,
  captionLabel,
  columns,
  rows,
}: {
  id: string
  eyebrow: string
  title: string
  desc: string
  captionLabel: string
  columns: readonly [string, string]
  rows: readonly { name: string; desc: string }[]
}) {
  return (
    <div id={id} className="pt-10 lg:pt-12 border-t border-sediment/20 scroll-mt-24">
      <div className="max-w-[68ch] mb-8 lg:mb-10">
        <p className="text-[10.5px] uppercase tracking-[0.16em] text-ink-soft font-semibold mb-3" style={{ fontFamily: 'var(--font-body)' }}>{eyebrow}</p>
        <h4 className="text-[1.5rem] lg:text-[1.75rem] text-anthracite italic leading-[1.15] tracking-[-0.02em] mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{title}</h4>
        <p className="text-[13.5px] text-anthracite/75 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>{desc}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[560px]">
          <caption className="sr-only">{captionLabel}</caption>
          <thead>
            <tr className="border-b border-sediment/25">
              {columns.map((h, i) => (
                <th
                  key={h}
                  scope="col"
                  className={`text-left pb-3 text-[10.5px] uppercase tracking-[0.12em] text-anthracite/60 font-medium ${i === 0 ? 'pr-6 w-[38%]' : ''}`}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(({ name, desc }) => (
              <tr key={name} className="border-b border-sediment/15">
                <td className="py-3 pr-6 align-top text-[13px] text-anthracite italic" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{name}</td>
                <td className="py-3 align-top text-[12.5px] text-anthracite/72 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Standards alignment matrix ──
export type MatrixCard = { cat: StdCat; name: string; sub: string; items: { code: string; desc: string }[] }

export function StandardsMatrix({ id, eyebrow, title, desc, cards }: { id: string; eyebrow: string; title: string; desc: string; cards: MatrixCard[] }) {
  return (
    <div id={id} className="pt-10 lg:pt-12 border-t border-sediment/20 scroll-mt-24">
      <div className="max-w-[68ch] mb-8 lg:mb-10">
        <p className="text-[10.5px] uppercase tracking-[0.16em] text-ink-soft font-semibold mb-3" style={{ fontFamily: 'var(--font-body)' }}>{eyebrow}</p>
        <h4 className="text-[1.5rem] lg:text-[1.75rem] text-anthracite italic leading-[1.15] tracking-[-0.02em] mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{title}</h4>
        <p className="text-[13.5px] text-anthracite/75 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>{desc}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-8">
        {cards.map(({ cat, name, sub, items }) => (
          <div key={name}>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-[8px] h-[8px] rotate-45 flex-shrink-0" style={{ backgroundColor: STD_COLORS[cat] }} aria-hidden="true" />
              <p className="text-[13px] text-anthracite" style={{ fontFamily: 'var(--font-body)' }}>{name}</p>
            </div>
            <p className="text-[11px] text-anthracite/55 mb-3 pl-[14px]" style={{ fontFamily: 'var(--font-body)' }}>{sub}</p>
            <ul className="space-y-2 pl-[14px]">
              {items.map(({ code, desc }) => (
                <li key={code}>
                  <code className="text-[10.5px] text-anthracite/85" style={{ fontFamily: 'var(--font-body)' }}>{code}</code>
                  <span className="block text-[11.5px] text-anthracite/65 leading-[1.45] mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Instructional approach (Bridging Brilliance only) ──
export type ApproachCell = { tag: string; title: string; desc: string }

export function InstructionalApproach({ id, eyebrow, title, desc, cells }: { id: string; eyebrow: string; title: string; desc: string; cells: ApproachCell[] }) {
  return (
    <div id={id} className="pt-10 lg:pt-12 border-t border-sediment/20 scroll-mt-24">
      <div className="max-w-[62ch] mb-8 lg:mb-10">
        <p className="text-[10.5px] uppercase tracking-[0.16em] text-ink-soft font-semibold mb-3" style={{ fontFamily: 'var(--font-body)' }}>{eyebrow}</p>
        <h4 className="text-[1.5rem] lg:text-[1.75rem] text-anthracite italic leading-[1.15] tracking-[-0.02em] mb-3" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{title}</h4>
        <p className="text-[13.5px] text-anthracite/75 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>{desc}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-sediment/15">
        {cells.map(({ tag, title, desc }, i) => (
          <div key={tag} className="border-r border-b border-sediment/15 px-5 py-6">
            <p className="text-[10px] uppercase tracking-[0.12em] text-anthracite/50 mb-2.5" style={{ fontFamily: 'var(--font-body)' }}>{`Approach ${String(i + 1).padStart(2, '0')}`}</p>
            <p className="text-[13.5px] text-anthracite font-medium leading-[1.35] mb-2" style={{ fontFamily: 'var(--font-body)' }}>{title}</p>
            <p className="text-[12px] text-anthracite/68 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Footer: program summary, partners, frameworks, disclaimer ──
export function CurriculumFooter({
  programTitle,
  programDesc,
  partners,
  frameworks,
  disclaimer,
}: {
  programTitle: string
  programDesc: string
  partners: string[]
  frameworks: string[]
  disclaimer: string
}) {
  return (
    <div className="pt-10 lg:pt-12 mt-2 border-t border-sediment/20">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
        <div>
          <p className="text-[10.5px] uppercase tracking-[0.12em] text-anthracite/55 mb-2.5" style={{ fontFamily: 'var(--font-body)' }}>{programTitle}</p>
          <p className="text-[13px] text-anthracite/72 leading-[1.6]" style={{ fontFamily: 'var(--font-body)' }}>{programDesc}</p>
        </div>
        <div>
          <p className="text-[10.5px] uppercase tracking-[0.12em] text-anthracite/55 mb-2.5" style={{ fontFamily: 'var(--font-body)' }}>Program partners</p>
          <ul className="space-y-1">
            {partners.map(p => <li key={p} className="text-[13px] text-anthracite/72 leading-[1.6]" style={{ fontFamily: 'var(--font-body)' }}>{p}</li>)}
          </ul>
        </div>
        <div>
          <p className="text-[10.5px] uppercase tracking-[0.12em] text-anthracite/55 mb-2.5" style={{ fontFamily: 'var(--font-body)' }}>Standards frameworks</p>
          <ul className="space-y-1">
            {frameworks.map(f => <li key={f} className="text-[13px] text-anthracite/72 leading-[1.6]" style={{ fontFamily: 'var(--font-body)' }}>{f}</li>)}
          </ul>
        </div>
      </div>
      <p className="text-[11.5px] text-anthracite/55 italic leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{disclaimer}</p>
    </div>
  )
}

// ── The shell itself: collapsible container, hero, standards-filter provider ──
export function CurriculumShell({
  id,
  color,
  open,
  onToggle,
  meta,
  collapsedTitle,
  eyebrow,
  title,
  intro,
  facts,
  toc,
  frameworks,
  children,
  openLabel = 'Open curriculum',
  closeLabel = 'Close curriculum',
  legendKeyLabel,
  legendAriaLabel,
  legendAllShownText,
}: {
  id: string
  color: string
  open: boolean
  onToggle: () => void
  meta: string
  collapsedTitle: string
  eyebrow: string
  title: string
  intro: string
  facts: { value: string; label: string }[]
  toc?: { label: string; href: string }[]
  frameworks: Framework[]
  children: ReactNode
  openLabel?: string
  closeLabel?: string
  legendKeyLabel?: string
  legendAriaLabel?: string
  legendAllShownText?: string
}) {
  const reduce = useReducedMotion()
  const [activeCat, setActiveCat] = useActiveCat()

  return (
    <div className="border-2 print:border-0" style={{ borderColor: color }}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`${id}-body`}
        className="w-full text-left px-6 py-6 lg:px-9 lg:py-7 flex items-start justify-between gap-6 hover:bg-bone/60 transition-colors duration-150 print:hidden">
        <span>
          <span className="block text-[1.375rem] lg:text-[1.625rem] text-anthracite italic leading-[1.15] tracking-[-0.02em] mb-2 [text-wrap:balance]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            {collapsedTitle}
          </span>
          <span className="block text-[12.5px] text-anthracite/65" style={{ fontFamily: 'var(--font-body)' }}>{meta}</span>
        </span>
        <span className="flex-shrink-0 flex items-center gap-2.5 mt-1.5">
          <span className="text-[11.5px] uppercase tracking-[0.1em] hidden sm:inline" style={{ fontFamily: 'var(--font-body)', color }}>
            {open ? closeLabel : openLabel}
          </span>
          <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2, ease: EASE }} style={{ color }}>
            <CaretDown size={16} aria-hidden="true" />
          </motion.span>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`${id}-body`}
            initial={reduce ? undefined : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={reduce ? undefined : { duration: 0.28, ease: EASE }}
            style={{ overflow: 'hidden' }}>
            <div className="px-6 pb-10 lg:px-9 lg:pb-12 border-t border-sediment/20">

              <div className="pt-8 lg:pt-10 mb-8 lg:mb-10">
                <p className="text-[10.5px] uppercase tracking-[0.16em] mb-4" style={{ fontFamily: 'var(--font-body)', color }}>{eyebrow}</p>
                <h3 className="text-[2rem] lg:text-[2.5rem] text-anthracite italic leading-[1.08] tracking-[-0.028em] mb-5 [text-wrap:balance]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  {title}
                </h3>
                <p className="text-[14.5px] text-anthracite/75 leading-[1.7] max-w-[74ch] mb-8">
                  {intro}
                </p>
                {facts.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {facts.map(({ value, label }) => (
                      <div key={label} className="border-2 px-5 py-4" style={{ borderColor: color }}>
                        <p className="text-[1.5rem] italic leading-none tracking-[-0.02em] mb-1.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, color }}>{value}</p>
                        <p className="text-[11px] text-anthracite/68 leading-[1.4]" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
                      </div>
                    ))}
                  </div>
                )}
                {toc && toc.length > 0 && (
                  <nav aria-label={`${collapsedTitle} contents`} className="flex flex-wrap gap-x-6 gap-y-2 mt-6">
                    {toc.map(({ label, href }) => (
                      <a
                        key={href}
                        href={href}
                        className="text-[12.5px] text-anthracite underline underline-offset-4 decoration-anthracite/30 hover:decoration-anthracite transition-colors duration-150"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {label}
                      </a>
                    ))}
                  </nav>
                )}
              </div>

              {frameworks.length > 0 && (
                <StandardsLegend
                  frameworks={frameworks}
                  active={activeCat}
                  onSelect={setActiveCat}
                  keyLabel={legendKeyLabel}
                  groupAriaLabel={legendAriaLabel}
                  allShownText={legendAllShownText}
                />
              )}

              <StdFilterContext.Provider value={activeCat}>
                {children}
              </StdFilterContext.Provider>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Small local hook so each shell instance owns an independent filter state.
function useActiveCat() {
  return useState<StdCat | null>(null)
}
