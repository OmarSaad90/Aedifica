'use client'
import { useRef, type ReactNode } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

// The client's own exact palette from runthebuild.html's :root block — used verbatim
// (not our site's brand tokens, which share the same names but different hex values).
const H = {
  ink:        '#262320',
  inkSoft:    '#524B41',
  muted:      '#8C8375',
  paper:      '#FAF6EE',
  panel:      '#FFFDF8',
  rule:       '#E7E0D2',
  ruleStrong: '#D4CBB8',
  accent:     '#7E3F4F',
  accent2:    '#564A86',
  datum20: '#DCD6E6', datum40: '#B7ADD0', datum60: '#9184B5', datum80: '#6E5F9C', datum100: '#564A86',
  quarry20: '#D6DBD3', quarry40: '#AEB9AC', quarry60: '#8A9A89', quarry80: '#6E8074', quarry100: '#5B7064',
  sediment20: '#EBE3CC', sediment40: '#DBCDA0', sediment60: '#CBB877', sediment80: '#C0A857', sediment100: '#AF9540',
  patina20: '#DAC9D1', patina40: '#C0A5B2', patina60: '#A4889A', patina80: '#8C6C80', patina100: '#7B5870',
  clay:     '#C18C7C',
  hawthorn: '#7E3F4F',
  anthracite: '#2D2D31', // our body-text black; visually indistinguishable from the client's --ink
} as const

// ── Reading column + body paragraph helpers (matching ResearchSupervisorGapFull conventions) ──
function ReadCol({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`max-w-[68ch] mx-auto px-5 lg:px-0 ${className}`}>{children}</div>
}

function Para({ children, delay = 0, large = false }: { children: ReactNode; delay?: number; large?: boolean }) {
  const reduce = useReducedMotion()
  return (
    <motion.p
      className={
        large
          ? 'text-[1.175rem] lg:text-[1.3rem] italic text-anthracite leading-[1.58] mb-6 [text-wrap:pretty]'
          : 'text-[15px] text-anthracite/85 leading-[1.8] mb-5 last:mb-0 [text-wrap:pretty]'
      }
      style={{ fontFamily: large ? 'var(--font-heading)' : 'var(--font-body)', fontWeight: large ? 300 : undefined }}
      initial={reduce ? undefined : { opacity: 0.001, y: 10 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={reduce ? undefined : { duration: 0.5, delay, ease: EASE }}>
      {children}
    </motion.p>
  )
}

function Kicker({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion()
  return (
    <motion.p
      className="text-[11.5px] uppercase tracking-[0.2em] font-semibold mb-3 [text-wrap:balance]"
      style={{ fontFamily: 'var(--font-body)', color: H.accent }}
      initial={reduce ? undefined : { opacity: 0, y: 10 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
      {children}
    </motion.p>
  )
}

function SecHead({ num, text }: { num: string; text: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.h2
      className="text-[1.65rem] lg:text-[2rem] xl:text-[2.4rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic mb-6 mt-2 [text-wrap:balance]"
      style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
      initial={reduce ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
      <span className="not-italic text-ink-soft mr-3 text-[15px] align-middle" style={{ fontFamily: 'var(--font-body)', fontWeight: 400, letterSpacing: '-0.01em' }}>
        {num}
      </span>
      {text}
    </motion.h2>
  )
}

// ── Divider band — numbered section marker, matching the source's colored dividers ──
function Divider({ num, eyebrow, text, tint, numColor }: { num: string; eyebrow: string; text: string; tint: string; numColor: string }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className="py-10 lg:py-14 border-y"
      style={{ background: tint, borderColor: H.rule }}
      initial={reduce ? undefined : { opacity: 0 }}
      whileInView={reduce ? undefined : { opacity: 1 }}
      viewport={VIEWPORT}
      transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 flex gap-5 lg:gap-8 items-start">
        <div
          className="text-[3.25rem] lg:text-[5rem] xl:text-[5.75rem] leading-[0.8] flex-shrink-0"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: numColor }}>
          {num}
        </div>
        <div className="pt-1 lg:pt-2">
          <p className="text-[11.5px] uppercase tracking-[0.2em] font-semibold mb-2" style={{ fontFamily: 'var(--font-body)', color: H.accent }}>
            {eyebrow}
          </p>
          <h2 className="text-[1.65rem] lg:text-[2.2rem] xl:text-[2.5rem] leading-[1.1] tracking-[-0.015em] max-w-[22ch] [text-wrap:balance]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, color: H.ink }}>
            {text}
          </h2>
        </div>
      </div>
    </motion.div>
  )
}

// ── Exhibit chrome (shared wrapper) ────────────────────────────────────────
function ExhibitWrap({ tag, title, subtitle, source, legend, children }: {
  tag: string
  title: string
  subtitle?: string
  source: string
  legend?: { color: string; label: string }[]
  children: ReactNode
}) {
  const reduce = useReducedMotion()
  return (
    <motion.figure
      className="my-14 lg:my-20 max-w-5xl mx-auto px-4 lg:px-6"
      initial={reduce ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={reduce ? undefined : { duration: 0.55, ease: EASE }}>
      <p className="text-[11px] uppercase tracking-[0.15em] mb-3 font-semibold" style={{ fontFamily: 'var(--font-body)', color: H.accent }}>
        {tag}
      </p>
      <p className="text-[1.1rem] lg:text-[1.3rem] italic leading-[1.22] tracking-[-0.02em] max-w-[60ch] mb-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, color: H.ink }}>
        {title}
      </p>
      {subtitle && (
        <p className="text-[12.5px] mt-1 mb-4" style={{ fontFamily: 'var(--font-body)', color: H.muted }}>
          {subtitle}
        </p>
      )}
      {legend && (
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-4">
          {legend.map(({ color, label }) => (
            <span key={label} className="flex items-center gap-2 text-[12px]" style={{ fontFamily: 'var(--font-body)', color: H.inkSoft }}>
              <span className="w-3 h-3 rounded-[2px] flex-shrink-0" style={{ background: color }} aria-hidden />
              {label}
            </span>
          ))}
        </div>
      )}
      {children}
      <figcaption className="mt-4 pt-3 border-t text-[11px] leading-[1.65]" style={{ fontFamily: 'var(--font-body)', borderColor: H.rule, color: H.muted }}>
        {source}
      </figcaption>
    </motion.figure>
  )
}

function SoWhat({ children }: { children: ReactNode }) {
  return (
    <p className="italic text-[15px] lg:text-[16px] leading-[1.5] mb-4 [text-wrap:pretty]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: H.ink }}>
      {children}
    </p>
  )
}

// ── Exhibit 1: The supervisory squeeze (2×2 forces + center bottleneck) ────
function FrameworkExhibit() {
  const Force = ({ h, t, d, tone }: { h: string; t: string; d: string; tone: 'demand' | 'supply' }) => (
    <div className="p-4 lg:p-5 rounded-[2px] border" style={{ borderColor: H.rule, background: `linear-gradient(180deg, #fff, ${tone === 'demand' ? H.patina20 : H.quarry20})` }}>
      <div className="text-[10.5px] uppercase tracking-[0.1em] font-semibold mb-1.5" style={{ fontFamily: 'var(--font-body)', color: tone === 'demand' ? H.patina100 : H.quarry100 }}>
        {h}
      </div>
      <div className="text-[15px] font-semibold mb-1" style={{ fontFamily: 'var(--font-body)', color: H.ink }}>{t}</div>
      <div className="text-[13.5px] leading-[1.4]" style={{ fontFamily: 'var(--font-body)', color: H.inkSoft }}>{d}</div>
    </div>
  )
  return (
    <div className="grid gap-3.5">
      <div className="grid sm:grid-cols-2 gap-3.5">
        <Force tone="demand" h="Demand ↑ pushing down" t="Funded build-out" d="IIJA, IRA, state clean-energy mandates, retrofits, and data centers commit multiyear capital." />
        <Force tone="demand" h="Demand ↑ pushing down" t="Complexity premium" d="Green code, commissioning, and electrification raise the supervisory skill bar per project." />
      </div>
      <div className="p-4 lg:p-5 rounded-[2px] text-white flex flex-col sm:flex-row gap-3 sm:gap-5 sm:items-center" style={{ background: H.ink }}>
        <span className="font-semibold text-[20px] leading-none flex-shrink-0" style={{ color: H.sediment60 }} aria-hidden>▼</span>
        <p className="text-[14.5px] lg:text-[15px] leading-[1.4] flex-1" style={{ fontFamily: 'var(--font-body)', color: '#D9D3C6' }}>
          <strong className="text-white font-semibold">The credentialed green construction manager</strong>, the role that gates every project and takes years to train.
        </p>
        <span className="text-[10.5px] uppercase tracking-[0.08em] font-semibold text-white px-3 py-1.5 rounded-[2px] flex-shrink-0 self-start sm:self-center" style={{ fontFamily: 'var(--font-body)', background: H.accent }}>
          The bottleneck
        </span>
      </div>
      <div className="grid sm:grid-cols-2 gap-3.5">
        <Force tone="supply" h="Supply ↓ pushing up" t="Experienced cohort retiring" d="Boomer supervisors and engineers exit faster than mid-career talent can replace them." />
        <Force tone="supply" h="Supply ↓ pushing up" t="Narrowing entry pipeline" d="Declining STEM performance, fewer engineering entrants, and a shrinking international stream." />
      </div>
    </div>
  )
}

// ── Exhibit 2: Stacked-area demand wave, 2025–2034 ─────────────────────────
function DemandWaveChart({ reduce }: { reduce: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const inView = useInView(svgRef, { once: true, margin: '0px 0px -60px 0px' })
  const go = inView

  const years = [2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034]
  const series = [
    { name: 'Infrastructure (IIJA)',          color: H.datum80,    data: [18, 22, 26, 28, 27, 24, 20, 16, 13, 11] },
    { name: 'Clean energy & retrofits',       color: H.quarry80,   data: [8, 11, 14, 17, 20, 22, 21, 20, 19, 18] },
    { name: 'Data centers & adv. mfg.',       color: H.sediment80, data: [6, 9, 13, 17, 20, 21, 21, 20, 19, 18] },
    { name: 'Replacement (retirements)',      color: H.patina80,   data: [10, 11, 12, 13, 14, 15, 16, 16, 17, 17] },
  ]

  const W = 880, H_ = 400, m = { t: 20, r: 190, b: 40, l: 44 }
  const iw = W - m.l - m.r, ih = H_ - m.t - m.b
  const n = years.length
  const totals = years.map((_, i) => series.reduce((s, ss) => s + ss.data[i], 0))
  const ymax = Math.max(...totals) * 1.06
  const x = (i: number) => m.l + (iw * i) / (n - 1)
  const y = (v: number) => m.t + ih * (1 - v / ymax)
  const peak = totals.indexOf(Math.max(...totals))

  let base = years.map(() => 0)
  const areas = series.map(s => {
    const top = base.map((b, i) => b + s.data[i])
    let d = `M${x(0)},${y(base[0])}`
    for (let i = 0; i < n; i++) d += ` L${x(i)},${y(top[i])}`
    for (let j = n - 1; j >= 0; j--) d += ` L${x(j)},${y(base[j])}`
    d += ' Z'
    base = top
    return { d, color: s.color }
  })
  const totalPath = `M${x(0)},${y(totals[0])}` + years.slice(1).map((_, i) => ` L${x(i + 1)},${y(totals[i + 1])}`).join('')

  return (
    <div className="overflow-x-auto -mx-4 lg:mx-0 px-4 lg:px-0">
      <div className="min-w-[560px]">
        <svg ref={svgRef} viewBox={`0 0 ${W} ${H_}`} role="img"
          aria-label="Stacked area chart of indexed construction-labor demand by driver, 2025 to 2034"
          className="w-full h-auto block">
          {[0, 20, 40, 60, 80].map(g => (
            <g key={g}>
              <line x1={m.l} y1={y(g)} x2={m.l + iw} y2={y(g)} stroke={H.rule} strokeWidth={1} />
              <text x={m.l - 8} y={y(g) + 4} textAnchor="end" fontSize={10} fill={H.muted} fontFamily="var(--font-body)">{g}</text>
            </g>
          ))}
          <motion.g
            initial={{ clipPath: 'inset(0 100% 0 0)' }}
            animate={go ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
            transition={{ duration: reduce ? 0 : 1.1, ease: EASE }}>
            {areas.map((a, i) => (
              <path key={i} d={a.d} fill={a.color} fillOpacity={0.9} stroke="#fff" strokeWidth={0.6} />
            ))}
          </motion.g>
          <path d={totalPath} fill="none" stroke={H.ink} strokeWidth={1.4} strokeOpacity={0.55} />
          {years.map((yr, i) => (
            <text key={yr} x={x(i)} y={H_ - 14} textAnchor="middle" fontSize={10} fill={H.muted} fontFamily="var(--font-body)">{yr}</text>
          ))}
          <circle cx={x(peak)} cy={y(totals[peak])} r={3.5} fill={H.hawthorn} />
          <text x={x(peak)} y={y(totals[peak]) - 10} textAnchor="middle" fontSize={10} fontWeight={600} fill={H.hawthorn} fontFamily="var(--font-body)">plateau ~2029–30</text>
          {series.slice().reverse().map((s, k) => (
            <g key={s.name}>
              <rect x={m.l + iw + 20} y={m.t + 8 + k * 26} width={12} height={12} rx={2} fill={s.color} />
              <text x={m.l + iw + 38} y={m.t + 8 + k * 26 + 10} fontSize={10.5} fill={H.inkSoft} fontFamily="var(--font-body)">{s.name}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

// ── Exhibit 3: Supply pressure — two ladders (aging out / narrowing entry) ──
function Bar({ big, small, pct, track, fill }: { big: string; small: string; pct: number; track: string; fill: string }) {
  const reduce = useReducedMotion()
  return (
    <div>
      <div className="text-[13.5px] leading-[1.4] mb-1.5" style={{ fontFamily: 'var(--font-body)', color: H.inkSoft }}>
        <strong className="font-semibold" style={{ color: H.ink }}>{big}</strong> {small}
      </div>
      <div className="h-[9px] rounded-[2px] overflow-hidden" style={{ background: track }}>
        <motion.div
          className="h-full rounded-[2px]"
          style={{ background: fill }}
          initial={reduce ? undefined : { width: 0 }}
          whileInView={reduce ? undefined : { width: `${pct}%` }}
          viewport={VIEWPORT}
          transition={reduce ? undefined : { duration: 0.7, ease: EASE }}
        />
      </div>
    </div>
  )
}

function SupplyPressureExhibit() {
  return (
    <div className="grid sm:grid-cols-2 gap-8">
      <div>
        <div className="text-[12px] uppercase tracking-[0.1em] font-semibold mb-3.5" style={{ fontFamily: 'var(--font-body)', color: H.quarry100 }}>
          Aging out, the top of the pipeline
        </div>
        <div className="grid gap-4">
          <Bar big="~30%" small="of construction workers are 55 or older" pct={30} track={H.quarry20} fill={H.quarry80} />
          <Bar big="2.4 : 1" small="energy workers near retirement vs. new entrants under 25 (advanced economies)" pct={71} track={H.quarry20} fill={H.quarry80} />
          <Bar big="<12%" small="of active NJ construction managers hold any green credential" pct={12} track={H.quarry20} fill={H.accent} />
        </div>
      </div>
      <div>
        <div className="text-[12px] uppercase tracking-[0.1em] font-semibold mb-3.5" style={{ fontFamily: 'var(--font-body)', color: H.patina100 }}>
          Narrowing entry, the bottom of the pipeline
        </div>
        <div className="grid gap-4">
          <Bar big="−27 pts" small="US 8th-grade math score, 2019→2023 (TIMSS)" pct={54} track={H.patina20} fill={H.patina80} />
          <Bar big="−17%" small="new international student enrollment into fall 2025" pct={40} track={H.patina20} fill={H.patina80} />
          <Bar big="~74%" small="of US electrical-engineering graduates are international students" pct={74} track={H.patina20} fill={H.patina80} />
        </div>
      </div>
    </div>
  )
}

// ── Exhibit 4: Timeline — demand above the line, supply response below ────
function TimelineExhibit() {
  const start = 2025, end = 2034, span = end - start
  const pct = (yr: number) => ((yr - start) / span) * 100

  const demand = [
    { yr: 2026, t: 'Demand ramps', d: 'clean-energy + data-center starts' },
    { yr: 2028, t: 'Infrastructure peak', d: 'IIJA workforce demand peaks' },
    { yr: 2030, t: 'Mandate milestones', d: 'state clean-energy targets bite' },
  ]
  const supply = [
    { yr: 2025, t: 'Act now', d: 'stand up green-CM pathways', hot: true },
    { yr: 2027, t: 'First cohorts', d: 'reskilled supervisors enter', hot: false },
    { yr: 2032, t: 'Pipeline matures', d: 'credentialed CMs at scale', hot: false },
  ]
  const marks = [2025, 2028, 2030]

  return (
    <div className="overflow-x-auto -mx-4 lg:mx-0 px-4 lg:px-0">
      <div className="min-w-[640px] relative" style={{ height: 300 }}>
        <div className="absolute" style={{ left: '8%', right: '8%', top: 0, bottom: 0 }}>
          <div className="absolute left-0 right-0" style={{ top: 150, height: 2, background: H.ruleStrong }} />
          <div
            className="absolute rounded-[2px] border-l border-r border-dashed"
            style={{ top: 122, height: 56, left: `${pct(2025)}%`, width: `${pct(2028) - pct(2025)}%`, background: 'rgba(126,63,79,0.06)', borderColor: H.accent }}
          />
          <div className="absolute text-[10px] uppercase tracking-[0.06em] font-semibold whitespace-nowrap" style={{ top: 100, left: `${pct(2025)}%`, color: H.accent }}>
            ◀ 36-month window to build supply
          </div>
          {Array.from({ length: end - start + 1 }, (_, i) => start + i).map(yr => (
            <span
              key={yr}
              className="absolute text-[10.5px] -translate-x-1/2"
              style={{ top: 268, left: `${pct(yr)}%`, fontFamily: 'var(--font-body)', color: marks.includes(yr) ? H.inkSoft : H.muted, fontWeight: marks.includes(yr) ? 600 : 400 }}>
              {yr}
            </span>
          ))}
          {demand.map(e => (
            <div key={e.t} className="absolute flex flex-col justify-end items-center text-center -translate-x-1/2" style={{ top: 40, height: 88, width: '17%', maxWidth: 150, left: `${pct(e.yr)}%` }}>
              <div className="text-[11px] leading-[1.28]" style={{ fontFamily: 'var(--font-body)', color: H.inkSoft }}>
                <b className="block text-[11.5px] leading-[1.14] mb-0.5" style={{ color: H.ink }}>{e.t}</b>{e.d}
              </div>
              <div className="w-px mt-1 mb-1 mx-auto" style={{ height: 18, background: H.ruleStrong }} />
              <div className="w-[11px] h-[11px] rounded-full mx-auto" style={{ background: H.clay, border: `2px solid ${H.panel}`, boxShadow: `0 0 0 1px ${H.ruleStrong}` }} />
            </div>
          ))}
          {supply.map(e => (
            <div key={e.t} className="absolute text-center -translate-x-1/2" style={{ top: 149, width: '17%', maxWidth: 150, left: `${pct(e.yr)}%` }}>
              <div className="w-[11px] h-[11px] rounded-full mx-auto" style={{ background: e.hot ? H.hawthorn : H.datum80, border: `2px solid ${H.panel}`, boxShadow: `0 0 0 1px ${H.ruleStrong}` }} />
              <div className="w-px mt-1 mb-1 mx-auto" style={{ height: 18, background: H.ruleStrong }} />
              <div className="text-[11px] leading-[1.28]" style={{ fontFamily: 'var(--font-body)', color: H.inkSoft }}>
                <b className="block text-[11.5px] leading-[1.14] mb-0.5" style={{ color: e.hot ? H.hawthorn : H.ink }}>{e.t}</b>{e.d}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Exhibit 5: Value-chain ladder — bottleneck migrating up the value chain ──
function ValueChainExhibit() {
  const rows = [
    { role: 'Laborer',             pct: 42, color: H.quarry60,  meta: 'weeks to train',            hot: false },
    { role: 'Skilled trade',       pct: 58, color: H.quarry80,  meta: '1–4 yrs (apprenticeship)',   hot: false },
    { role: 'Site supervisor',     pct: 82, color: H.clay,      meta: '5–8 yrs experience',         hot: true },
    { role: 'Construction manager',pct: 94, color: H.accent,    meta: 'degree + 5–10 yrs',          hot: true },
    { role: 'Civil engineer',      pct: 88, color: H.datum80,   meta: 'degree + licensure',         hot: false },
  ]
  const reduce = useReducedMotion()
  return (
    <div className="grid gap-2.5">
      {rows.map((r, i) => (
        <div key={r.role} className="grid grid-cols-[110px_1fr_130px] sm:grid-cols-[148px_1fr_150px] gap-3 sm:gap-4 items-center">
          <div className="text-[11px] sm:text-[11.5px] uppercase tracking-[0.05em] text-right" style={{ fontFamily: 'var(--font-body)', color: r.hot ? H.accent : H.inkSoft, fontWeight: r.hot ? 700 : 500 }}>
            {r.role}
          </div>
          <div className={`h-[26px] sm:h-[30px] rounded-[2px] relative overflow-hidden ${r.hot ? 'outline outline-2 outline-offset-1' : ''}`} style={{ background: H.quarry20, outlineColor: r.hot ? H.accent : undefined }}>
            <motion.div
              className="absolute inset-y-0 left-0 rounded-[2px]"
              style={{ background: r.color }}
              initial={reduce ? undefined : { width: 0 }}
              whileInView={reduce ? undefined : { width: `${r.pct}%` }}
              viewport={VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: i * 0.05, ease: EASE }}
            />
          </div>
          <div className="text-[11px] hidden sm:block" style={{ fontFamily: 'var(--font-body)', color: r.hot ? H.accent : H.muted, fontWeight: r.hot ? 600 : 400 }}>
            {r.meta}
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Exhibit 6: AI durability — augmented, not automated ────────────────────
function AIDurabilityExhibit() {
  const reduce = useReducedMotion()
  return (
    <div>
      <div className="flex h-[62px] rounded-[2px] overflow-hidden border" style={{ borderColor: H.rule }}>
        <motion.div
          className="flex flex-col justify-center px-3.5 text-white min-w-0"
          style={{ background: H.quarry80 }}
          initial={reduce ? undefined : { flexBasis: 0 }}
          whileInView={reduce ? undefined : { flexBasis: '83.6%' }}
          viewport={VIEWPORT}
          transition={reduce ? undefined : { duration: 0.7, ease: EASE }}>
          <b className="text-[21px] leading-none" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>83.6%</b>
          <small className="text-[9.5px] opacity-95 mt-0.5 leading-[1.2] whitespace-nowrap overflow-hidden text-ellipsis" style={{ fontFamily: 'var(--font-body)' }}>Below-average AI exposure · physical &amp; craft roles</small>
        </motion.div>
        <div className="flex flex-col justify-center px-2.5 text-white flex-1" style={{ background: H.datum80 }}>
          <b className="text-[21px] leading-none" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>16.4%</b>
          <small className="text-[9.5px] opacity-95 mt-0.5 leading-[1.2]" style={{ fontFamily: 'var(--font-body)' }}>Higher exposure</small>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-3.5 mt-4">
        <p className="text-[13.5px] leading-[1.45] pl-3.5 border-l-2" style={{ borderColor: H.quarry80, color: H.inkSoft, fontFamily: 'var(--font-body)' }}>
          <b style={{ color: H.ink }}>The trades are insulated.</b> Physical, on-site, dexterity-driven work sits at the low end of automation risk and benefits from complementary tools.
        </p>
        <p className="text-[13.5px] leading-[1.45] pl-3.5 border-l-2" style={{ borderColor: H.datum80, color: H.inkSoft, fontFamily: 'var(--font-body)' }}>
          <b style={{ color: H.ink }}>The supervisor is augmented.</b> Managers and engineers are AI-exposed, but as leverage. The human who wields the tooling delivers more, raising the role&rsquo;s value.
        </p>
      </div>
    </div>
  )
}

// ── Exhibit 7: Stakeholder impact map ──────────────────────────────────────
function Chip({ label, tone }: { label: string; tone: 'hi' | 'mh' | 'op' }) {
  const bg = tone === 'hi' ? H.accent : tone === 'mh' ? H.clay : H.quarry80
  return (
    <span className="inline-block text-[10px] uppercase tracking-[0.04em] font-semibold px-2 py-1 rounded-[2px] text-white" style={{ fontFamily: 'var(--font-body)', background: bg }}>
      {label}
    </span>
  )
}

function StakeholderTable() {
  const rows: { who: string; chip: { label: string; tone: 'hi' | 'mh' | 'op' }; changes: string; act: string }[] = [
    { who: 'Owners & contractors', chip: { label: 'High', tone: 'hi' }, changes: 'Supervisory scarcity, not crew size, gates delivery; schedules bend to manager availability.', act: "Build grow-your-own CM pipelines; retain experienced supervisors; deploy AI planning tools to extend each manager's reach." },
    { who: 'States & policymakers', chip: { label: 'High', tone: 'hi' }, changes: 'Decarbonization and infrastructure mandates risk slipping for lack of qualified supervisors.', act: 'Fund and approve green-CM credential pathways; tie program funding to workforce-capacity milestones; coordinate and sequence spend.' },
    { who: 'Investors & developers', chip: { label: 'Med–High', tone: 'mh' }, changes: 'Labor-supervisory risk becomes a real driver of cost and schedule variance across markets.', act: 'Price supervisory depth into market selection; treat workforce pipelines as enabling infrastructure worth backing.' },
    { who: 'Educators & training providers', chip: { label: 'Opportunity', tone: 'op' }, changes: 'A near-empty registry for green-CM training in many states; first movers define the category.', act: 'Launch employer-aligned green-CM credentials; get approved on state eligible-training registries; pair early exposure with adult reskilling.' },
    { who: 'Workers & students', chip: { label: 'Opportunity', tone: 'op' }, changes: 'The supervisory track offers the highest mobility and strongest AI durability in the sector.', act: 'Enter the credentialed, green-specialized management path; stack trade experience into supervisory credentials.' },
  ]
  return (
    <div className="overflow-x-auto -mx-4 lg:mx-0 px-4 lg:px-0">
      <table className="w-full border-collapse text-[13.5px] min-w-[640px]" style={{ fontFamily: 'var(--font-body)' }}>
        <thead>
          <tr>
            {['Stakeholder', 'Exposure', 'What changes', 'What to do now'].map(h => (
              <th key={h} className="text-[10px] uppercase tracking-[0.1em] text-left py-2.5 px-3.5 font-semibold align-bottom" style={{ color: H.muted, borderBottom: `2px solid ${H.ink}` }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(r => (
            <tr key={r.who}>
              <td className="py-3.5 px-3.5 align-top font-semibold w-[18%]" style={{ color: H.ink, borderBottom: `1px solid ${H.rule}` }}>{r.who}</td>
              <td className="py-3.5 px-3.5 align-top" style={{ borderBottom: `1px solid ${H.rule}` }}><Chip label={r.chip.label} tone={r.chip.tone} /></td>
              <td className="py-3.5 px-3.5 align-top leading-[1.42]" style={{ color: H.inkSoft, borderBottom: `1px solid ${H.rule}` }}>{r.changes}</td>
              <td className="py-3.5 px-3.5 align-top leading-[1.42]" style={{ color: H.ink, borderBottom: `1px solid ${H.rule}` }}>{r.act}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Exhibit 8: Scenario matrix + cards ──────────────────────────────────────
function ScenarioMatrixExhibit() {
  const scenarios = [
    { name: 'Upside', pb: '~25%', left: 74, top: 24, color: H.quarry80, nameColor: H.quarry100 },
    { name: 'Base case', pb: '~55%', left: 40, top: 38, color: H.accent2, nameColor: H.accent2 },
    { name: 'Downside', pb: '~20%', left: 24, top: 74, color: H.accent, nameColor: H.accent },
  ]
  return (
    <div>
      <div className="relative rounded-[2px] border" style={{ aspectRatio: '1.5 / 1', borderColor: H.ruleStrong }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(0deg,transparent 49.6%,${H.rule} 49.6%,${H.rule} 50.4%,transparent 50.4%), linear-gradient(90deg,transparent 49.6%,${H.rule} 49.6%,${H.rule} 50.4%,transparent 50.4%)`,
        }} />
        <span className="absolute text-[10.5px] uppercase tracking-[0.08em]" style={{ top: 6, left: 8, fontFamily: 'var(--font-body)', color: H.muted }}>High demand</span>
        <span className="absolute text-[10.5px] uppercase tracking-[0.08em]" style={{ bottom: 24, left: 8, fontFamily: 'var(--font-body)', color: H.muted }}>Moderate demand</span>
        <span className="absolute text-[10.5px] uppercase tracking-[0.08em]" style={{ top: 6, right: 8, fontFamily: 'var(--font-body)', color: H.muted }}>Strong response</span>
        <span className="absolute text-[10.5px] uppercase tracking-[0.08em]" style={{ bottom: 24, right: 8, fontFamily: 'var(--font-body)', color: H.muted }}>Weak response</span>
        <span className="absolute text-[10.5px] uppercase tracking-[0.08em] left-1/2 -translate-x-1/2" style={{ bottom: 8, fontFamily: 'var(--font-body)', color: H.muted }}>Pipeline response →</span>
        {scenarios.map(s => (
          <div key={s.name} className="absolute -translate-x-1/2 -translate-y-1/2 text-center w-[27%]" style={{ left: `${s.left}%`, top: `${s.top}%` }}>
            <div className="w-[13px] h-[13px] rounded-full mx-auto mb-1.5" style={{ background: s.color }} />
            <div className="text-[11px] font-semibold uppercase tracking-[0.06em]" style={{ color: s.nameColor, fontFamily: 'var(--font-body)' }}>{s.name}</div>
            <div className="text-[10px]" style={{ fontFamily: 'var(--font-body)', color: H.muted }}>{s.pb}</div>
          </div>
        ))}
      </div>
      <p className="text-[10.5px] mt-2.5" style={{ fontFamily: 'var(--font-body)', color: H.muted }}>
        Source: Aedifica scenario model. Probabilities are judgmental estimates, not statistical forecasts.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mt-8">
        {[
          {
            name: 'Base case', pb: '~55%', pl: 'Most likely', color: H.accent2,
            body: 'Demand stays high; spending growth moderates. The trades refill slowly, but the supervisory shortfall persists and concentrates in green-credentialed CM and civil-engineering roles. Wage premiums for credentialed supervisors widen; mandate-heavy states see schedule slippage, not collapse.',
            assumptions: 'Partial, uneven pipeline response; durable demand; AI adoption gradual.',
            signals: 'Widening CM wage premium; lengthening time-to-fill for credentialed roles; thin training registries.',
            response: 'Move first on the supervisory pipeline; lock employer demand to de-risk training.',
          },
          {
            name: 'Upside', pb: '~25%', pl: 'Coordinated response', color: H.quarry80,
            body: 'Early STEM exposure scales, adult reskilling and apprenticeship-to-management ladders mature, and AI tooling lifts supervisor productivity. The supervisory layer is rebuilt; mandate states deliver closer to schedule, and the green-credential premium becomes a talent magnet rather than a bottleneck.',
            assumptions: 'Public-private pipelines fund and scale; credentials gain portability.',
            signals: 'Surge in green-CM completions; employer-sponsored training up; registry approvals; clear trade-to-management ladders.',
            response: 'Scale what works; institutionalize regional academies and credential standards.',
          },
          {
            name: 'Downside', pb: '~20%', pl: 'Bottleneck binds', color: H.accent,
            body: 'Demand spikes (data-center and clean-energy acceleration) while the pipeline is neglected; an immigration squeeze thins the trades and the international stream guts engineering inflow. The supervisory bottleneck binds: cancellations rise, costs inflate, and decarbonization timelines slip materially.',
            assumptions: 'Pipeline underfunded; labor-supply shocks compound; demand over-runs.',
            signals: 'Rising project cancellations; multi-month CM vacancies; falling EE/CE enrollment; deeper visa declines.',
            response: 'Emergency reskilling; risk-sharing contracts; ruthless project sequencing.',
          },
        ].map(s => (
          <div key={s.name} className="rounded-[2px] overflow-hidden border" style={{ borderColor: H.rule, background: H.panel }}>
            <div className="p-3.5" style={{ background: s.color, color: '#fff' }}>
              <div className="text-[11px] uppercase tracking-[0.1em] font-semibold opacity-90" style={{ fontFamily: 'var(--font-body)' }}>{s.name}</div>
              <div className="text-[30px] leading-none mt-1" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>{s.pb}</div>
              <div className="text-[10px] uppercase tracking-[0.06em] opacity-85 mt-0.5" style={{ fontFamily: 'var(--font-body)' }}>{s.pl}</div>
            </div>
            <div className="p-3.5">
              <p className="text-[13.5px] leading-[1.5] mb-2.5" style={{ fontFamily: 'var(--font-body)', color: H.inkSoft }}>{s.body}</p>
              <p className="text-[13px] leading-[1.5] mb-1.5"><span className="block text-[9.5px] uppercase tracking-[0.1em] font-semibold mb-0.5" style={{ fontFamily: 'var(--font-body)', color: H.muted }}>Key assumptions</span><b className="font-semibold" style={{ fontFamily: 'var(--font-body)', color: H.ink }}>{s.assumptions}</b></p>
              <p className="text-[13px] leading-[1.5] mb-1.5" style={{ fontFamily: 'var(--font-body)', color: H.inkSoft }}><span className="block text-[9.5px] uppercase tracking-[0.1em] font-semibold mb-0.5" style={{ color: H.muted }}>Early signals</span>{s.signals}</p>
              <p className="text-[13px] leading-[1.5]" style={{ fontFamily: 'var(--font-body)', color: H.inkSoft }}><span className="block text-[9.5px] uppercase tracking-[0.1em] font-semibold mb-0.5" style={{ color: H.muted }}>Strategic response</span>{s.response}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── Exhibit 9: Roadmap — three horizons ────────────────────────────────────
function RoadmapExhibit() {
  const lanes = [
    {
      ph: 'Horizon 1 · 0–6 months', nm: 'Establish', tint: H.patina20,
      items: [
        { t: 'Map the local supervisory gap', d: 'which credentialed roles, which projects are gated.', tag: 'Owners · States' },
        { t: 'Stand up green-CM credential pathways', d: 'and pursue approval on the state eligible-training registry.', tag: 'Providers · Aedifica Pathway & Rebuild' },
        { t: 'Lock employer commitments', d: 'hiring guarantees that de-risk trainee investment.', tag: 'Owners · Providers' },
        { t: 'Launch early-exposure pilots', d: 'in middle and high schools to widen the entry funnel.', tag: 'Educators · Aedifica Explore & Launch' },
      ],
    },
    {
      ph: 'Horizon 2 · 6–24 months', nm: 'Scale', tint: H.sediment20,
      items: [
        { t: 'Build apprenticeship-to-management ladders', d: 'trade → supervisor → CM.', tag: 'Providers · Owners' },
        { t: 'Scale adult reskilling', d: 'into CM with a green specialization for returning workers.', tag: 'Aedifica Pathway & Rebuild' },
        { t: 'Embed AI and digital-twin tooling', d: 'into supervisor training as augmentation.', tag: 'Owners · Providers' },
        { t: 'Shift procurement', d: 'toward risk-sharing and collaborative contracting.', tag: 'Owners · States' },
      ],
    },
    {
      ph: 'Horizon 3 · 2+ years', nm: 'Institutionalize', tint: H.quarry20,
      items: [
        { t: 'Stand up regional academies', d: 'with sustained public-private funding.', tag: 'States · Providers' },
        { t: 'Make credentials portable', d: 'and move toward skills-based hiring across states.', tag: 'States · Owners' },
        { t: "Track the multiplier", d: "each green CM's influence on workers' practices.", tag: 'Providers' },
        { t: 'Tie mandate funding to capacity', d: 'and coordinate "dig once" across programs.', tag: 'States' },
      ],
    },
  ]
  return (
    <div className="grid lg:grid-cols-3 gap-4">
      {lanes.map(lane => (
        <div key={lane.nm} className="rounded-[2px] overflow-hidden border" style={{ borderColor: H.rule }}>
          <div className="p-3.5 border-b" style={{ background: lane.tint, borderColor: H.rule }}>
            <div className="text-[10px] uppercase tracking-[0.1em] font-semibold" style={{ fontFamily: 'var(--font-body)', color: H.muted }}>{lane.ph}</div>
            <div className="text-[18px] italic mt-0.5 leading-[1.1]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, color: H.ink }}>{lane.nm}</div>
          </div>
          <ul className="p-3.5 m-0 list-none">
            {lane.items.map((it, i) => (
              <li key={it.t} className="text-[13.5px] leading-[1.42] py-2" style={{ fontFamily: 'var(--font-body)', color: H.inkSoft, borderBottom: i < lane.items.length - 1 ? `1px dashed ${H.rule}` : undefined }}>
                <b className="font-semibold" style={{ color: H.ink }}>{it.t}</b> {it.d}
                <span className="block text-[9px] uppercase tracking-[0.08em] font-semibold mt-1" style={{ color: H.accent2 }}>{it.tag}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

// ── Exhibit 10: Watchlist dashboard ─────────────────────────────────────────
function Gauge({ pct, color }: { pct: number; color: string }) {
  return (
    <span className="inline-block w-16 h-[7px] rounded-full relative align-middle mr-2" style={{ background: H.rule }}>
      <span className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${pct}%`, background: color }} />
    </span>
  )
}

function WatchlistTable() {
  const rows = [
    { ind: 'CM wage premium vs. trades median', small: 'BLS OEWS', pct: 78, color: H.accent, read: 'Wide & widening', sig: 'confirm', ar: '▲', txt: 'Widens → confirms' },
    { ind: 'Time-to-fill, green-credentialed CM roles', small: 'Employer / registry data', pct: 72, color: H.accent, read: 'Long', sig: 'confirm', ar: '▲', txt: 'Lengthens → confirms' },
    { ind: 'Green-CM credential completions', small: 'LEED AP, state credentials', pct: 22, color: H.quarry80, read: 'Low base', sig: 'relieve', ar: '▲', txt: 'Rises → relieves' },
    { ind: 'Approved green-CM training programs', small: 'State eligible-training registry', pct: 10, color: H.quarry80, read: 'Near-empty (NJ)', sig: 'relieve', ar: '▲', txt: 'Grows → relieves' },
    { ind: 'IIJA / clean-energy obligation pace + data-center starts', small: 'Federal & state outlays', pct: 80, color: H.clay, read: 'Elevated', sig: 'accel', ar: '▲', txt: 'Up → accelerates demand' },
    { ind: 'Construction 55+ share / retirement rate', small: 'BLS CPS', pct: 64, color: H.clay, read: 'High', sig: 'accel', ar: '▲', txt: 'Up → accelerates gap' },
    { ind: 'EE / CE enrollment + student-visa issuance', small: 'IIE, NCES, State Dept.', pct: 38, color: H.clay, read: 'Declining', sig: 'accel', ar: '▼', txt: 'Down → accelerates gap' },
    { ind: 'AI adoption in preconstruction / PM', small: 'AGC/Sage outlook', pct: 61, color: H.quarry80, read: 'Rising (61% of firms)', sig: 'relieve', ar: '▲', txt: 'Up → augments supervisors' },
    { ind: 'Immigration-enforcement impact on trades', small: 'AGC survey', pct: 33, color: H.clay, read: '~1 in 3 firms affected', sig: 'accel', ar: '▲', txt: 'Up → tightens trades' },
    { ind: 'US 8th-grade math trajectory', small: 'TIMSS / NAEP', pct: 46, color: H.clay, read: 'Below pre-pandemic', sig: 'accel', ar: '▼', txt: 'Down → long-run gap' },
  ] as const
  const sigColor = (s: string) => s === 'confirm' ? H.accent : s === 'accel' ? H.clay : H.quarry100

  return (
    <div>
      <div className="overflow-x-auto -mx-4 lg:mx-0 px-4 lg:px-0">
        <table className="w-full border-collapse text-[13.5px] min-w-[640px]" style={{ fontFamily: 'var(--font-body)' }}>
          <thead>
            <tr>
              {['Indicator', 'Current read', 'If it moves…'].map(h => (
                <th key={h} className="text-[10px] uppercase tracking-[0.09em] text-left py-2.5 px-3 font-semibold" style={{ color: H.muted, borderBottom: `2px solid ${H.ink}` }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.ind}>
                <td className="py-3 px-3 align-middle font-semibold w-[32%]" style={{ color: H.ink, borderBottom: `1px solid ${H.rule}` }}>
                  {r.ind}
                  <small className="block font-normal text-[10px] mt-0.5" style={{ fontFamily: 'var(--font-body)', color: H.muted }}>{r.small}</small>
                </td>
                <td className="py-3 px-3 align-middle whitespace-nowrap" style={{ borderBottom: `1px solid ${H.rule}` }}><Gauge pct={r.pct} color={r.color} />{r.read}</td>
                <td className="py-3 px-3 align-middle whitespace-nowrap text-[10.5px] font-semibold" style={{ color: sigColor(r.sig), borderBottom: `1px solid ${H.rule}` }}>
                  <span className="inline-block w-3.5" aria-hidden>{r.ar}</span>{r.txt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex gap-5 flex-wrap mt-3.5 text-[12px]" style={{ fontFamily: 'var(--font-body)' }}>
        <span><span style={{ color: H.accent }}>▲ confirm</span> · the thesis is playing out</span>
        <span><span style={{ color: H.clay }}>▲ accelerate</span> · the gap widens faster</span>
        <span><span style={{ color: H.quarry100 }}>▲ relieve</span> · pressure eases</span>
      </div>
    </div>
  )
}

// ── Main view ───────────────────────────────────────────────────────────────
export function WhoWillRunTheBuildReport() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero ── */}
      <section className="bg-anthracite min-h-[56vh] flex flex-col justify-end pb-14 lg:pb-20 relative overflow-hidden" aria-labelledby="wwrb-h1">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-6 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            Strategy Insights · Workforce &amp; the Built Environment
          </motion.span>

          <motion.h1
            id="wwrb-h1"
            className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.97] tracking-[-0.035em] text-white italic mb-6 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Who will run the <span className="text-wine-light">build?</span>
          </motion.h1>

          <motion.p
            className="text-[14.5px] text-white/65 leading-[1.68] max-w-[54ch] mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.32, ease: EASE }}>
            The next decade of US infrastructure and clean-energy spending is funded. The labor that delivers it is not. Over the next five years, the binding constraint will move up the value chain, from the jobsite to the trailer, and the scarce, decisive, AI-durable role becomes the credentialed green construction manager. New Jersey is the test case.
          </motion.p>

          <motion.p
            className="text-[12px] text-white/50 uppercase tracking-[0.1em]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={reduce ? undefined : { duration: 0.4, delay: 0.52, ease: EASE }}>
            Aedifica · Strategy Insights · A five-year point of view · 2026–2031 · June 2026
          </motion.p>
        </div>
      </section>

      {/* ── Executive summary ── */}
      <section className="bg-bone pt-16 lg:pt-24 pb-16 lg:pb-20" aria-label="Executive summary">
        <ReadCol>
          <Kicker>Executive Summary</Kicker>
          <SecHead num="" text="The shortage is real, structural, and moving upmarket." />
          <Para large>
            The familiar story, &ldquo;not enough hands on tools,&rdquo; is becoming the wrong story. The hands are slowly arriving. What the United States has not built is the supervisory and engineering layer that turns funded projects into finished ones.
          </Para>
        </ReadCol>
        <ReadCol className="mt-8">
          <div className="border-t border-sediment/25">
            {[
              { b: 'Demand is locked in, not cyclical.', t: 'Infrastructure, clean-energy mandates, building retrofits, and the data-center build-out commit multiyear capital that is far less sensitive to interest rates than housing or commercial real estate. Construction occupations make up nearly half of all new energy-related jobs on a net-zero path to 2030.' },
              { b: 'Supply is contracting at both ends of the pipeline.', t: 'The experienced supervisory cohort is retiring while the entry pipeline narrows: US 8th-grade math scores fell 27 points from 2019 to 2023, and new international student enrollment dropped 17% into fall 2025, removing a stream that supplies roughly three-quarters of US electrical-engineering graduates.' },
              { b: 'The bottleneck is migrating up the value chain.', t: 'Gen Z entry and wage signals are slowly refilling the trades, but the gating roles, construction managers and civil engineers, take years to train. They become the constraint precisely when demand peaks.' },
              { b: 'The decisive role is AI-durable in the most valuable way.', t: 'About 84% of built-environment workers sit in occupations with below-average AI exposure. The supervisory layer is the exception, but it is augmented, not automated. The manager who can wield AI tooling gets more valuable, not less.' },
              { b: 'The green credential is the multiplier.', t: 'One trained green construction manager shapes the sustainable practices of dozens of workers on every project for a career. In New Jersey, fewer than 12% of active construction managers hold any green credential, against binding 2050 decarbonization mandates.' },
              { b: 'The prediction:', t: 'By 2030, credentialed, sustainability-fluent construction managers and the engineers who gate projects will be the single most contested, least substitutable, and highest-leverage roles in the built environment, and the states, firms, and training providers that rebuild this layer first will capture a durable advantage. The window to act is the next 36 months.' },
            ].map((item, i) => (
              <motion.div
                key={item.b}
                className="grid grid-cols-[auto_1fr] gap-4 lg:gap-5 py-4 lg:py-5 items-start"
                style={{ borderBottom: `1px solid ${H.rule}` }}
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, delay: Math.min(i * 0.04, 0.2), ease: EASE }}>
                <span className="text-[12px] font-semibold pt-0.5" style={{ fontFamily: 'var(--font-body)', color: H.accent }}>{String(i + 1).padStart(2, '0')}</span>
                <p className="text-[15px] lg:text-[15.5px] leading-[1.55]" style={{ fontFamily: 'var(--font-body)', color: H.inkSoft }}>
                  <b className="font-semibold" style={{ color: H.ink }}>{item.b}</b> {item.t}
                </p>
              </motion.div>
            ))}
          </div>
        </ReadCol>
      </section>

      {/* ── 01 · Why this matters now ── */}
      <Divider num="01" eyebrow="Why this matters now" text="Two forces are converging on the same narrow role at the same moment." tint={H.patina20} numColor={H.patina60} />
      <section className="bg-bone py-14 lg:py-20">
        <ReadCol>
          <Para large>
            For a decade the construction-labor conversation has been a volume problem: how many bodies, how fast. That framing is now obscuring the more important shift. The aggregate trades gap is easing: Associated Builders and Contractors trimmed its annual new-worker estimate from over half a million in 2023–24 to roughly 350,000 for 2026, while the <strong className="font-semibold text-anthracite">composition</strong> of the gap hardens around the roles that are slowest to replace.
          </Para>
          <Para delay={0.07}>
            Three things make this moment different from previous cycles. The demand is policy-committed and multi-source, so it will not soften with a downturn. The supply constraint is demographic and educational, so it cannot be solved by a quarter of strong hiring. And the scarce role sits at the supervisory layer, where lead times to competence are measured in years, not weeks.
          </Para>
        </ReadCol>
        <ExhibitWrap
          tag="Exhibit 1 / Executive framework"
          title="The supervisory squeeze"
          subtitle="Demand-side and supply-side forces converging on one gating role"
          source="Source: Aedifica analysis synthesizing US Bureau of Labor Statistics Occupational Outlook (2024–34); Associated Builders & Contractors workforce model (2025–26); IEA World Energy Employment (2023); NSF NCSES (2026).">
          <FrameworkExhibit />
          <SoWhat>The shortage is not a volume problem to be out-hired in a good quarter; it is a structural vise tightening on the one role that is hardest and slowest to replace.</SoWhat>
        </ExhibitWrap>
      </section>

      {/* ── 02 · Market & context ── */}
      <Divider num="02" eyebrow="Market & context" text="A funded wave of demand meets a workforce drawing down from both ends." tint={H.quarry20} numColor={H.quarry60} />
      <section className="bg-bone py-14 lg:py-20">
        <ReadCol>
          <Para large>
            The United States has committed an extraordinary, multi-decade pipeline of construction-intensive investment. What separates it from prior booms is durability: these outlays are statutory, mandate-driven, or strategically essential, and therefore largely indifferent to the business cycle.
          </Para>
        </ReadCol>

        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 mt-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-b" style={{ borderColor: H.rule }}>
            {[
              { n: '$106,980', l: 'Median annual wage, US construction managers, May 2024', src: 'BLS OOH, 2024' },
              { n: '+9%', l: 'Projected CM employment growth, 2024–34 (much faster than average)', src: 'BLS, 2024–34' },
              { n: '~46,800', l: 'Construction-manager openings projected per year, this decade', src: 'BLS, 2024–34' },
              { n: '92%', l: 'Of construction firms report difficulty filling open positions', src: 'AGC / NCCER, 2025' },
            ].map((s, i) => (
              <motion.div key={s.n}
                className="px-4 lg:px-5 py-5 lg:py-6"
                style={{
                  borderRight: (i % 2 === 0 || i < 3) ? `1px solid ${H.rule}` : undefined,
                  borderTop: i >= 2 ? `1px solid ${H.rule}` : undefined,
                }}
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: i * 0.06, ease: EASE }}>
                <div className="text-[1.9rem] lg:text-[2.25rem] italic leading-none mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, color: H.accent2 }}>{s.n}</div>
                <p className="text-[12px] leading-[1.4]" style={{ fontFamily: 'var(--font-body)', color: H.inkSoft }}>{s.l}</p>
                <p className="text-[9.5px] uppercase tracking-[0.05em] mt-1.5" style={{ fontFamily: 'var(--font-body)', color: H.muted }}>{s.src}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <ReadCol className="mt-10">
          <Para>
            Roughly <strong className="font-semibold text-anthracite">32 million</strong> energy-and-infrastructure hires are projected across 2025–2035—about 17 million new roles and 15 million replacements. On a net-zero path, the IEA finds construction occupations account for nearly half of all new energy-related jobs to 2030, with installation and management roles flagged as the hardest to hire. The wave is not one program; it is the overlay of several, which is exactly why it resists the cycle.
          </Para>
        </ReadCol>

        <ExhibitWrap
          tag="Exhibit 2 / Trend chart"
          title="The demand wave is structural, not cyclical"
          subtitle="Illustrative index of net-new + replacement demand for construction labor, by driver · 2025 = 42 (indexed)"
          source="Source: Aedifica indexed model. Inputs and shape derived from BLS employment projections (2024–34); ABC new-worker estimates (2023–26); IEA World Energy Employment (2023); Brookings energy-workforce hiring outlook (2024); McKinsey, Will a labor crunch derail plans to upgrade US infrastructure? (2022). Index is illustrative: relative shape, not absolute headcount.">
          <DemandWaveChart reduce={reduce ?? false} />
          <SoWhat>Four independent engines stack into a plateau that holds through 2030, so demand will not slacken with interest rates, and the gap will not &ldquo;wait out&rdquo; a slowdown.</SoWhat>
        </ExhibitWrap>

        <ReadCol className="mt-10">
          <h3 className="text-[1.3rem] italic text-anthracite mb-3 mt-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>Supply is drawing down from both ends</h3>
          <Para>
            The workforce is thinning at the top as it slowly thickens at the bottom. Workers aged 55+ make up close to a third of the construction workforce, concentrating retirements in the experienced supervisory and engineering ranks. Meanwhile the entry pipeline that feeds the credentialed layer is under strain: US 8th-grade math achievement fell sharply post-pandemic, and the international student stream, long a load-bearing source of US engineering talent, has begun to contract.
          </Para>
        </ReadCol>

        <ExhibitWrap
          tag="Exhibit 3 / Supply pressure"
          title="Contracting at both ends of the pipeline"
          subtitle="Selected indicators of supervisory-supply erosion"
          source="Source: BLS & industry surveys on workforce age (2024–25); IEA (2025); NSF NCSES / TIMSS (2026); IIE Fall 2025 Snapshot; Atlantic Council (2025). NJ green-credential share per New Jersey Office of Climate Action & the Green Economy, Growing Green Jobs Report (Sept 2025), as cited in Aedifica program research.">
          <SupplyPressureExhibit />
          <SoWhat>Retirements drain the experienced layer faster than the entry pipeline can refill it, and the inflow that most directly feeds engineering and management is the part now contracting.</SoWhat>
        </ExhibitWrap>
      </section>

      {/* ── 03 · Core prediction ── */}
      <Divider num="03" eyebrow="Core prediction" text="By 2030, the binding constraint is the supervisor, not the laborer." tint={H.datum20} numColor={H.datum60} />
      <section className="bg-bone py-14 lg:py-20">
        <ReadCol>
          <Para large>
            Our central prediction is specific: within five years, the credentialed, sustainability-fluent construction manager, and the civil engineer who gates the project, becomes the most contested and least substitutable role in the built environment. Wage premiums for these roles widen faster than for the trades; time-to-fill lengthens; and in mandate-heavy states, project schedules begin to bend around the availability of qualified supervisors rather than crews.
          </Para>
        </ReadCol>

        <ReadCol className="py-2 my-4">
          <p className="text-[1.4rem] lg:text-[1.7rem] leading-[1.2] tracking-[-0.01em] max-w-[24ch] [text-wrap:balance]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500, color: H.accent }}>
            Funding builds the project. People finish it. The decade&rsquo;s scarce resource is the person who runs the job.
          </p>
        </ReadCol>

        <ReadCol>
          <h3 className="text-[1.3rem] italic text-anthracite mb-3 mt-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>The logic, in four moves</h3>
          <Para><strong className="font-semibold text-anthracite">1 · The demand is committed and stacked.</strong> Infrastructure law, clean-energy mandates, retrofit programs, and data-center capital do not move together with the cycle. Even as headline spending growth moderates, the floor under construction demand is structurally higher and lasts longer than in any prior boom.</Para>
          <Para><strong className="font-semibold text-anthracite">2 · The supervisory layer is the slow variable.</strong> A laborer can be productive in weeks; a competent construction manager or licensed engineer takes years and real project exposure. When demand peaks, the trades can flex; the management and engineering layer cannot. That asymmetry is what turns a volume problem into a bottleneck.</Para>
          <Para><strong className="font-semibold text-anthracite">3 · Complexity raises the bar exactly where supply is thin.</strong> Green building, electrification, energy-code compliance, and commissioning all load onto the supervisor. The job is not just harder to fill; the bar for filling it is rising at the same time.</Para>
          <Para><strong className="font-semibold text-anthracite">4 · The role is AI-durable in the valuable direction.</strong> Physical trades are insulated from automation; the supervisory layer is the part AI touches, but as a force multiplier, not a replacement. The manager who orchestrates planning, scheduling, and risk with AI tooling delivers more, raising the value of the human in the chair.</Para>
        </ReadCol>

        <ExhibitWrap
          tag="Exhibit 4 / Timeline"
          title="The window to rebuild the pipeline, 2025–2034"
          subtitle="Demand milestones (above the line) vs. the supervisory-supply response (below the line)"
          source="Source: Aedifica synthesis of IIJA obligation schedules; state clean-energy mandate timelines; BLS retirement and projection data (2024–34); McKinsey (2022). Dates approximate.">
          <TimelineExhibit />
          <SoWhat>Because supervisors take years to train, the response must begin now to land before the demand plateau: roughly a 36-month window to act.</SoWhat>
        </ExhibitWrap>

        <ExhibitWrap
          tag="Exhibit 5 / Value-chain view"
          title="The bottleneck is migrating up the value chain"
          subtitle="Relative tightening of the gap and lead-time to competence, by role"
          source="Source: Aedifica analysis; lead-time bands from BLS occupational entry requirements; tightening estimated from BLS openings-vs-supply and McKinsey value-chain framing (2022).">
          <ValueChainExhibit />
          <SoWhat>The roles with the longest lead times sit exactly where the gap is tightening fastest, so the part of the workforce you cannot improvise is the part now in shortest supply.</SoWhat>
        </ExhibitWrap>
      </section>

      {/* ── 04 · Evidence base ── */}
      <Divider num="04" eyebrow="Evidence base" text="The role is the rare combination of scarce, high-value, and AI-resilient." tint={H.sediment20} numColor={H.sediment80} />
      <section className="bg-bone py-14 lg:py-20">
        <ReadCol>
          <Para large>
            If the supervisory layer were merely scarce, wages would clear it over time. What makes this prediction sturdy is that the same role is simultaneously high-mobility, high-multiplier, and durable against the decade&rsquo;s biggest labor-market disruptor.
          </Para>
          <Para delay={0.07}>
            Independent analyses converge on the durability point. Brookings finds that about 84% of the 17.3 million built-environment workers occupy roles with below-average AI exposure; sector-level indices place construction among the categories with effectively zero high-exposure occupations. The exception is the management and engineering layer, but the same studies note these roles are <strong className="font-semibold text-anthracite">complemented</strong> by AI rather than displaced. The implication is counterintuitive and important: AI makes the scarce supervisor more productive and therefore more valuable, deepening rather than relieving the premium on the role.
          </Para>
        </ReadCol>

        <ExhibitWrap
          tag="Exhibit 6 / AI durability"
          title="Augmented, not automated"
          subtitle="Share of built-environment workers by AI exposure (n ≈ 17.3M)"
          source="Source: Brookings, The AI durability of built-environment careers (2026); AI exposure indices (Felten–Raj–Seamans; Microsoft Research, 2025); Eloundou et al. (2024).">
          <AIDurabilityExhibit />
          <SoWhat>AI does not relieve the supervisory shortage; by raising what one good manager can deliver, it makes the scarce role even more worth competing for.</SoWhat>
        </ExhibitWrap>

        <ReadCol>
          <h3 className="text-[1.3rem] italic text-anthracite mb-3 mt-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>Why the green credential is the lever, not a label</h3>
          <Para>
            The mobility case is concrete. The construction-manager role carries a median wage near $107,000, more than double the all-occupation median, and the BLS projects roughly 46,800 openings a year through 2034. Layer on a green credential and the role becomes both scarcer and more strategic: in New Jersey, fewer than one in eight active construction managers holds any green credential, even as the state&rsquo;s Energy Master Plan commits to an 80% emissions cut by 2050 and programs such as EmPower NJ drive a wave of retrofit work that specifically requires envelope, energy-code, and commissioning fluency.
          </Para>
          <Para delay={0.07}>
            The multiplier is the defining argument. A single credentialed green construction manager does not just fill one seat; they shape the sustainable practices of dozens of workers on every project they run, for the length of a career. That is why the supervisory layer, not the laborer headcount, is the highest-leverage place to invest a scarce training dollar.
          </Para>
        </ReadCol>
      </section>

      {/* ── 05 · Strategic implications ── */}
      <Divider num="05" eyebrow="Strategic implications" text="The same shift threatens some stakeholders and opens a lane for others." tint={H.patina20} numColor={H.patina60} />
      <section className="bg-bone py-14 lg:py-20">
        <ReadCol>
          <Para large>
            A constraint that moves up the value chain redistributes risk and opportunity. For asset owners and contractors it is an execution threat; for states it is a mandate-delivery risk; for educators and training providers, and the workers who choose this track, it is the clearest opening in the labor market.
          </Para>
        </ReadCol>
        <ExhibitWrap
          tag="Exhibit 7 / Stakeholder impact map"
          title="Who is exposed, what changes, and what to do"
          subtitle="By stakeholder group"
          source="Source: Aedifica analysis. Exposure ratings qualitative, based on stakeholder reliance on supervisory-layer availability.">
          <StakeholderTable />
          <SoWhat>The risk for owners and states is the mirror image of the opening for educators and workers, and the organizations that build the pipeline capture both the demand and the goodwill.</SoWhat>
        </ExhibitWrap>
      </section>

      {/* ── 06 · Scenario outlook ── */}
      <Divider num="06" eyebrow="Scenario outlook" text="Three paths, separated by one decision: whether we rebuild the pipeline." tint={H.quarry20} numColor={H.quarry60} />
      <section className="bg-bone py-14 lg:py-20">
        <ReadCol>
          <Para large>
            The outcome turns on two variables: how intensely demand lands, and how strongly the supervisory pipeline responds. The base case assumes a partial, uneven response to a high, durable demand wave.
          </Para>
        </ReadCol>
        <ExhibitWrap
          tag="Exhibit 8 / Scenario matrix"
          title="Demand intensity × pipeline response"
          subtitle="Probability-weighted, five-year horizon"
          source="">
          <ScenarioMatrixExhibit />
        </ExhibitWrap>
      </section>

      {/* ── 07 · Recommended actions ── */}
      <Divider num="07" eyebrow="Recommended actions" text="A 36-month agenda to rebuild the supervisory layer." tint={H.datum20} numColor={H.datum60} />
      <section className="bg-bone py-14 lg:py-20">
        <ReadCol>
          <Para large>
            The actions that matter most are the ones that compress the supervisory lead time: building the pipeline at both ends (early exposure and adult reskilling) while de-risking the path with employer demand. Sequence matters more than scale.
          </Para>
        </ReadCol>
        <ExhibitWrap
          tag="Exhibit 9 / Strategic action roadmap"
          title="From signal to scale, in three horizons"
          subtitle="Prioritized agenda for training providers, owners, and states"
          source="Source: Aedifica analysis; action patterns adapted from McKinsey (2022) and IEA/CSIS workforce recommendations (2023–25).">
          <RoadmapExhibit />
          <SoWhat>Because the supervisory lead time is the binding variable, the highest-return move is the one that starts the longest clock first: build the pipeline now, de-risked by committed demand.</SoWhat>
        </ExhibitWrap>
      </section>

      {/* ── 08 · Watchlist ── */}
      <Divider num="08" eyebrow="Watchlist" text="The dashboard that will confirm, accelerate, or reverse this call." tint={H.sediment20} numColor={H.sediment80} />
      <section className="bg-bone py-14 lg:py-20">
        <ReadCol>
          <Para large>
            A point of view is only as good as the signals that would change it. These are the leading indicators to monitor, and the direction each one points.
          </Para>
        </ReadCol>
        <ExhibitWrap
          tag="Exhibit 10 / Watchlist dashboard"
          title="Leading indicators for the supervisory-shortage thesis"
          subtitle="What to watch · current read · what the move would mean"
          source="Source: Aedifica dashboard, compiling BLS OEWS & CPS; AGC/Sage 2026 Outlook; IIE/NCES; state eligible-training registries. Gauge positions indicative.">
          <WatchlistTable />
          <SoWhat>Watch the wage premium and time-to-fill to confirm the call; watch credential completions and registry approvals to know whether the response is finally arriving.</SoWhat>
        </ExhibitWrap>
      </section>

      {/* ── Conclusion ── */}
      <section className="bg-anthracite py-16 lg:py-24" aria-label="Conclusion">
        <ReadCol>
          <p className="text-[11px] uppercase tracking-[0.15em] text-sediment font-semibold mb-4" style={{ fontFamily: 'var(--font-body)' }}>Conclusion</p>
          <h2 className="text-[2rem] lg:text-[2.75rem] leading-[1.12] tracking-[-0.02em] text-white italic max-w-[30ch] mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
            The money is committed.<br className="hidden sm:block" /> The question is who runs the job.
          </h2>
          <p className="text-[17px] lg:text-[19px] leading-[1.5] text-white/80 mb-5" style={{ fontFamily: 'var(--font-body)' }}>
            For a generation, the built environment treated workforce as a volume problem: count the bodies, raise the wage, wait for the cycle. The next five years will reward a different instinct. Steel and capital are not the scarce inputs. Judgment is. The credentialed, sustainability-fluent person who can run a complex job, and now wield AI to run it better, is the resource the decade is short of.
          </p>
          <p className="text-[17px] lg:text-[19px] leading-[1.5] text-white/80" style={{ fontFamily: 'var(--font-body)' }}>
            Whoever builds that person, earliest, at both ends of the pipeline, de-risked by real employer demand, will not just fill a gap. They will own the supply of the one role everyone else is about to be bidding for. <strong className="text-white font-semibold">In a decade defined by what we build, the advantage goes to whoever trains the people who run the build.</strong>
          </p>
        </ReadCol>
      </section>

      {/* ── Sources & methodology ── */}
      <section className="bg-bone py-14 lg:py-20" aria-label="Sources and methodology">
        <ReadCol>
          <Kicker>Sources &amp; methodology</Kicker>
          <SecHead num="" text="How this view was built." />
          <Para>
            This is a synthesis, not a primary forecast. We triangulated three bodies of evidence: (1) US labor-market data on construction and the construction-manager occupation; (2) demand projections from infrastructure, clean-energy, and built-environment workforce research; and (3) education-pipeline and AI-exposure studies that bound the supply side. Where a figure is an Aedifica construction (the demand index in Exhibit 2, the lead-time bands in Exhibit 5, the gauge positions in Exhibit 10) it is labeled illustrative or indicative, and the underlying inputs are named. Probabilities in the scenario section are judgmental.
          </Para>

          <div className="rounded-[2px] p-5 my-6 border" style={{ background: H.sediment20, borderColor: H.rule }}>
            <div className="text-[11px] uppercase tracking-[0.12em] font-semibold mb-2" style={{ fontFamily: 'var(--font-body)', color: H.sediment100 }}>Key assumptions &amp; caveats</div>
            <ul className="text-[13.5px] leading-[1.5] pl-4.5 m-0 space-y-1.5 list-disc" style={{ color: H.inkSoft }}>
              <li>The Exhibit 2 demand index conveys <b>relative shape and durability</b>, not absolute headcount; it is derived from, not equal to, the cited series.</li>
              <li>New Jersey green-credential and registry figures are drawn from <b>Aedifica program research</b> citing the NJ Office of Climate Action &amp; the Green Economy Growing Green Jobs Report (Sept 2025); these should be confirmed against the primary document with page references before external publication.</li>
              <li>Demand and supply both carry policy risk: immigration enforcement, interest-rate moves, and federal-program pace can shift the trajectory in either direction.</li>
              <li>&ldquo;Construction manager&rdquo; refers to SOC 11-9021; figures may differ from narrower job-title definitions.</li>
            </ul>
          </div>

          <div className="border-t border-sediment/25 pt-6 mt-8">
            <details className="group" style={{ fontFamily: 'var(--font-body)' }}>
              <summary className="cursor-pointer list-none flex items-center gap-2 text-[11.5px] text-anthracite/80 uppercase tracking-[0.1em] hover:text-anthracite transition-colors duration-150 select-none [&::-webkit-details-marker]:hidden">
                Selected sources
                <svg className="w-[10px] h-[10px] opacity-50 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <div className="mt-4">
                <ul className="text-[11.5px] text-anthracite/80 leading-[1.72] space-y-2 list-none" style={{ fontFamily: 'var(--font-body)' }}>
                  <li>US Bureau of Labor Statistics — <b>Occupational Outlook Handbook: Construction Managers</b> (median wage $106,980, May 2024; +9% projected 2024–34; ~46,800 annual openings) &amp; Occupational Employment and Wage Statistics.</li>
                  <li>Associated Builders and Contractors — annual construction <b>new-worker estimates</b> (2023–2026) via Construction Dive.</li>
                  <li>Associated General Contractors of America / NCCER — <b>2025 Workforce Survey</b> (92% of firms struggle to hire; 45% report labor-driven delays; ~1 in 3 affected by immigration enforcement).</li>
                  <li>International Energy Agency — <b>World Energy Employment</b> (2023) and 2025 skills update (construction ≈ half of new energy jobs to 2030; 2.4:1 retirement ratio; retrofits ≈ 1.3M jobs by 2030).</li>
                  <li>Brookings Institution — <b>The AI durability of built-environment careers</b> (2026): 83.6% of 17.3M built-environment workers in below-average AI-exposure roles; energy + infrastructure ≈ 32M hires 2025–35.</li>
                  <li>NSF National Center for Science and Engineering Statistics / TIMSS — <b>US 8th-grade math −27 points, 2019–2023</b>; US below OECD math average; international STEM-graduate comparisons.</li>
                  <li>Institute of International Education / NAFSA — <b>Fall 2025 enrollment snapshot</b> (new international enrollment −17%); PIIE, Class Dismissed (2026) on STEM-workforce and GDP effects.</li>
                  <li>Atlantic Council (2025) — clean-energy workforce deficits; <b>~74% of US electrical-engineering graduates are international students.</b></li>
                  <li>McKinsey &amp; Company — <b>Will a labor crunch derail plans to upgrade US infrastructure?</b> (Oct 2022): BIL job creation peaking 2027–28; value-chain shortfall framing. <i>Used as the structural and stylistic reference; this document is independent and not affiliated with McKinsey.</i></li>
                  <li>New Jersey Office of Climate Action &amp; the Green Economy — <b>Growing Green Jobs Report</b> (Sept 2025); NJ Energy Master Plan; NJBPU EmPower NJ — via Aedifica program research.</li>
                </ul>
                <p className="mt-4 text-[11px] text-anthracite/80 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
                  <strong className="text-anthracite">About this document.</strong> Independent analysis. Not affiliated with or endorsed by McKinsey &amp; Company. Figures labeled illustrative or indicative are Aedifica constructions; confirm primary sources before republication.
                </p>
              </div>
            </details>
          </div>
        </ReadCol>
      </section>

    </main>
  )
}
