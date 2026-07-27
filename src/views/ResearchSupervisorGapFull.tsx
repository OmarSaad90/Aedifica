'use client'
import { useRef, type ReactNode } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import Link from 'next/link'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

// Resolved hex values for SVG attributes — CSS variables don't propagate into SVG attribute context cross-browser
const H = {
  datum:      '#6667AB',
  quarry:     '#8A9A93',
  patina:     '#836479',
  sediment:   '#C7B377',
  anthracite: '#2D2D31',
  bone:       '#F4EEE4',
  grid:       '#D9D0C2',
} as const

// ── Exhibit chrome (shared wrapper) ────────────────────────────────────────
function ExhibitWrap({ tag, title, subtitle, source, legend, children, compact = false }: {
  tag: string
  title: string
  subtitle?: string
  source: string
  legend?: { color: string; label: string }[]
  children: ReactNode
  compact?: boolean
}) {
  const reduce = useReducedMotion()
  return (
    <motion.figure
      className={compact ? 'w-full' : 'my-14 lg:my-20 max-w-5xl mx-auto px-4 lg:px-6'}
      initial={reduce ? undefined : { opacity: 0, y: 18 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={reduce ? undefined : { duration: 0.55, ease: EASE }}>
      <p
        className="text-[11px] text-anthracite/80 uppercase tracking-[0.15em] mb-3"
        style={{ fontFamily: 'var(--font-body)' }}>
        {tag}
      </p>
      <p
        className="text-[1.1rem] lg:text-[1.3rem] italic text-anthracite leading-[1.22] tracking-[-0.02em] max-w-[60ch] mb-1"
        style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
        {title}
      </p>
      {subtitle && (
        <p className="text-[12.5px] text-anthracite/80 mt-1 mb-4" style={{ fontFamily: 'var(--font-body)' }}>
          {subtitle}
        </p>
      )}
      {legend && (
        <div className="flex flex-wrap gap-x-5 gap-y-1.5 mb-4">
          {legend.map(({ color, label }) => (
            <span key={label} className="flex items-center gap-2 text-[12px] text-anthracite/80" style={{ fontFamily: 'var(--font-body)' }}>
              <span className="w-3 h-3 rounded-[2px] flex-shrink-0" style={{ background: color }} aria-hidden />
              {label}
            </span>
          ))}
        </div>
      )}
      {children}
      <figcaption className="mt-4 pt-3 border-t border-sediment/15 text-[11px] text-anthracite/80 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
        {source}
      </figcaption>
    </motion.figure>
  )
}

// ── Section + Exhibit two-column pair ──────────────────────────────────────
function SectionPair({ text, exhibit, flip = false }: { text: ReactNode; exhibit: ReactNode; flip?: boolean }) {
  return (
    <div className="max-w-[1200px] mx-auto px-5 lg:px-8 mt-12 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-x-16 lg:items-start">
      <div className={flip ? 'lg:order-2' : ''}>{text}</div>
      <div className={`mt-10 lg:mt-0 ${flip ? 'lg:order-1' : ''}`}>{exhibit}</div>
    </div>
  )
}

// ── Exhibit 1: Stacked column chart — worker gap 2025–2027 ─────────────────
function Exhibit1({ reduce }: { reduce: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const inView = useInView(svgRef, { once: true, margin: '0px 0px -60px 0px' })
  const go = inView

  // Scale: value * 0.52 = px height; baseline y = 300
  const groups = [
    { yr: '2025', x: 150, total: 439, replace: { y: 174.16, h: 125.84 }, newD: { y: 71.72, h: 102.44 }, labelY: 60 },
    { yr: '2026', x: 320, total: 349, replace: { y: 181.96, h: 118.04 }, newD: { y: 118.52, h:  63.44 }, labelY: 107 },
    { yr: '2027', x: 490, total: 456, replace: { y: 181.44, h: 118.56 }, newD: { y:  62.88, h: 118.56 }, labelY: 52 },
  ]

  return (
    <div className="overflow-x-auto -mx-4 lg:mx-0 px-4 lg:px-0">
      <div className="min-w-[520px]">
        <svg ref={svgRef} viewBox="0 0 760 380" role="img"
          aria-label="Stacked column chart: net new U.S. construction workers needed 2025–2027, thousands"
          className="w-full h-auto block">
          <line x1="70" y1="40" x2="70" y2="300" stroke={H.grid} strokeWidth="1"/>
          <line x1="70" y1="300" x2="720" y2="300" stroke={H.grid} strokeWidth="1.4"/>
          {[0, 100, 200, 300, 400, 500].map(v => {
            const y = 300 - v * 0.52
            return (
              <g key={v}>
                {v > 0 && <line x1="70" y1={y} x2="720" y2={y} stroke={H.grid} strokeWidth="0.6"/>}
                <text x="58" y={y + 4} textAnchor="end" fontSize="11" fill={H.anthracite} fillOpacity="0.78" fontFamily="'Space Grotesk Variable',sans-serif">
                  {v || ''}
                </text>
              </g>
            )
          })}
          {groups.map((g, i) => (
            <g key={g.yr}>
              {/* Replacement/retirement bar */}
              <motion.rect x={g.x} width={120}
                initial={{ height: 0, y: 300 }}
                animate={go ? { height: g.replace.h, y: g.replace.y } : { height: 0, y: 300 }}
                transition={{ duration: reduce ? 0 : 0.65, delay: i * 0.14, ease: EASE }}
                fill={H.datum}/>
              {/* New-demand bar */}
              <motion.rect x={g.x} width={120}
                initial={{ height: 0, y: g.replace.y }}
                animate={go ? { height: g.newD.h, y: g.newD.y } : { height: 0, y: g.replace.y }}
                transition={{ duration: reduce ? 0 : 0.55, delay: i * 0.14 + 0.22, ease: EASE }}
                fill={H.quarry} fillOpacity="0.7"/>
              {/* Total label */}
              <motion.text x={g.x + 60} y={g.labelY} textAnchor="middle"
                fontSize="15" fontWeight="700" fill={H.datum}
                fontFamily="'Cormorant Garamond',Georgia,serif"
                initial={{ opacity: 0 }} animate={go ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.3, delay: i * 0.14 + 0.55 }}>
                {g.total}
              </motion.text>
              {/* Year label */}
              <text x={g.x + 60} y="320" textAnchor="middle" fontSize="13" fontWeight="600"
                fill={H.anthracite} fontFamily="'Space Grotesk Variable',sans-serif">
                {g.yr}
              </text>
            </g>
          ))}
          {/* 2026 retirement-dominance annotation */}
          <motion.g initial={{ opacity: 0 }} animate={go ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.4, delay: 0.85 }}>
            <line x1="380" y1="152" x2="380" y2="121" stroke={H.sediment} strokeWidth="1.2"/>
            <circle cx="380" cy="121" r="3" fill={H.sediment}/>
            <text x="370" y="148" textAnchor="end" fontSize="11" fill={H.anthracite}
              fontFamily="'Space Grotesk Variable',sans-serif" fontWeight="600">
              In 2026, the majority of
            </text>
            <text x="370" y="161" textAnchor="end" fontSize="11" fill={H.anthracite}
              fontFamily="'Space Grotesk Variable',sans-serif" fontWeight="600">
              demand is retirement-driven
            </text>
          </motion.g>
        </svg>
      </div>
    </div>
  )
}

// ── Exhibit 2: Horizontal bar chart — wage comparison ──────────────────────
function Exhibit2({ reduce }: { reduce: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const inView = useInView(svgRef, { once: true, margin: '0px 0px -60px 0px' })
  const go = inView

  // Scale: 0–120000 over x 250–720 (width 470px)
  const bars = [
    { label: 'All occupations',          y: 172, w: 194, color: H.quarry,   op: 0.75, val: '$49,500',  tColor: H.anthracite, delay: 0    },
    { label: 'Construction & extraction', y: 104, w: 229, color: H.datum,    op: 0.8,  val: '$58,360',  tColor: H.anthracite, delay: 0.14 },
    { label: 'Construction manager',      y:  36, w: 419, color: H.sediment, op: 1.0,  val: '$106,980', tColor: H.anthracite, delay: 0.3  },
  ]

  return (
    <div className="overflow-x-auto -mx-4 lg:mx-0 px-4 lg:px-0">
      <div className="min-w-[520px]">
        <svg ref={svgRef} viewBox="0 0 760 250" role="img"
          aria-label="Horizontal bar chart: median annual wages for construction roles, May 2024"
          className="w-full h-auto block">
          {bars.map(b => (
            <g key={b.label}>
              <motion.rect x={250} y={b.y} height={34}
                fill={b.color} fillOpacity={b.op}
                initial={{ width: 0 }} animate={go ? { width: b.w } : { width: 0 }}
                transition={{ duration: reduce ? 0 : 0.7, delay: b.delay, ease: EASE }}/>
              <motion.text x={250 + b.w + 8} y={b.y + 23}
                fontSize={b.label === 'Construction manager' ? 15 : 13}
                fontWeight="700" fill={b.tColor} fontFamily="'Cormorant Garamond',Georgia,serif"
                initial={{ opacity: 0 }} animate={go ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.3, delay: b.delay + 0.42 }}>
                {b.val}
              </motion.text>
            </g>
          ))}
          {/* Row labels */}
          <text x="240" y="58" textAnchor="end" fontSize="13" fontWeight="600"
            fill={H.anthracite} fontFamily="'Space Grotesk Variable',sans-serif">Construction manager</text>
          <text x="240" y="123" textAnchor="end" fontSize="12" fontWeight="600"
            fill={H.anthracite} fontFamily="'Space Grotesk Variable',sans-serif">Construction &amp; extraction</text>
          <text x="240" y="136" textAnchor="end" fontSize="10.5" fill={H.anthracite} fillOpacity="0.78"
            fontFamily="'Space Grotesk Variable',sans-serif">(occupation group)</text>
          <text x="240" y="193" textAnchor="end" fontSize="13" fontWeight="600"
            fill={H.anthracite} fontFamily="'Space Grotesk Variable',sans-serif">All occupations</text>
          <line x1="250" y1="222" x2="720" y2="222" stroke={H.grid} strokeWidth="1"/>
        </svg>
      </div>
    </div>
  )
}

// ── Exhibit 3: Bubble chart — demand momentum vs. credential scarcity ───────
function Exhibit3({ reduce }: { reduce: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const inView = useInView(svgRef, { once: true, margin: '0px 0px -60px 0px' })
  const go = inView

  const bubbles = [
    { cx: 470, cy: 320, r: 30, color: H.quarry, op: 0.85, label: 'Laborers',        dotX: 500, dotY: 320, lx: 506, ly: 324, anchor: 'start'  as const, delay: 0    },
    { cx: 300, cy: 250, r: 20, color: H.patina, op: 0.85, label: 'Solar install.',  dotX: 280, dotY: 250, lx: 274, ly: 254, anchor: 'end'    as const, delay: 0.08 },
    { cx: 360, cy: 200, r: 26, color: H.datum,  op: 0.9,  label: 'Electricians',    dotX: 360, dotY: 226, lx: 360, ly: 240, anchor: 'middle' as const, delay: 0.16 },
    { cx: 430, cy: 165, r: 22, color: H.datum,  op: 1.0,  label: 'Heat-pump techs', dotX: 452, dotY: 165, lx: 458, ly: 169, anchor: 'start'  as const, delay: 0.24 },
    { cx: 250, cy: 140, r: 16, color: H.quarry, op: 0.6,  label: 'Energy auditors', dotX: 234, dotY: 140, lx: 228, ly: 144, anchor: 'end'    as const, delay: 0.32 },
  ]

  return (
    <div className="overflow-x-auto -mx-4 lg:mx-0 px-4 lg:px-0">
      <div className="min-w-[520px]">
        <svg ref={svgRef} viewBox="0 0 760 440" role="img"
          aria-label="Bubble chart positioning green occupations by demand momentum and credential scarcity; construction manager sits alone in the top-right crucible quadrant"
          className="w-full h-auto block">
          <line x1="90" y1="40" x2="90" y2="370" stroke={H.grid} strokeWidth="1.2"/>
          <line x1="90" y1="370" x2="710" y2="370" stroke={H.grid} strokeWidth="1.2"/>
          {/* Crucible quadrant */}
          <rect x="400" y="40" width="310" height="165" fill={H.datum} fillOpacity="0.04"/>
          <text x="700" y="58" textAnchor="end" fontSize="11" letterSpacing=".12em"
            fill={H.anthracite} fillOpacity="0.78" fontFamily="'Space Grotesk Variable',sans-serif">CRUCIBLE</text>
          {/* Axis labels */}
          <text x="400" y="408" textAnchor="middle" fontSize="13" fontWeight="600"
            fill={H.anthracite} fontFamily="'Space Grotesk Variable',sans-serif">Demand momentum →</text>
          <text x="400" y="424" textAnchor="middle" fontSize="11"
            fill={H.anthracite} fillOpacity="0.78" fontFamily="'Space Grotesk Variable',sans-serif">
            how fast the role is growing in N.J.
          </text>
          <g transform="rotate(-90 32 205)">
            <text x="32" y="205" textAnchor="middle" fontSize="13" fontWeight="600"
              fill={H.anthracite} fontFamily="'Space Grotesk Variable',sans-serif">Green-credential scarcity →</text>
          </g>
          {/* Secondary bubbles — labels sit outside each circle */}
          {bubbles.map(b => (
            <g key={b.label}>
              <motion.circle cx={b.cx} cy={b.cy} r={b.r}
                fill={b.color} fillOpacity={b.op}
                initial={{ scale: 0 }}
                animate={go ? { scale: 1 } : { scale: 0 }}
                style={{ originX: `${b.cx}px`, originY: `${b.cy}px` }}
                transition={{ duration: reduce ? 0 : 0.5, delay: b.delay, ease: SPRING }}/>
              <motion.g
                initial={{ opacity: 0 }} animate={go ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.25, delay: b.delay + 0.32 }}>
                <circle cx={b.dotX} cy={b.dotY} r={2} fill={H.anthracite} fillOpacity="0.4"/>
                <text x={b.lx} y={b.ly} textAnchor={b.anchor}
                  fontSize="10.5" fill={H.anthracite}
                  fontFamily="'Space Grotesk Variable',sans-serif">
                  {b.label}
                </text>
              </motion.g>
            </g>
          ))}
          {/* Construction Manager — sediment, large, last */}
          <motion.circle cx={588} cy={108} r={42}
            fill={H.sediment}
            initial={{ scale: 0 }}
            animate={go ? { scale: 1 } : { scale: 0 }}
            style={{ originX: '588px', originY: '108px' }}
            transition={{ duration: reduce ? 0 : 0.65, delay: 0.68, ease: SPRING }}/>
          {/* Pulse ring */}
          <motion.circle cx={588} cy={108} r={42}
            fill="none" stroke={H.sediment} strokeWidth="1.5"
            initial={{ scale: 1, opacity: 0 }}
            animate={go ? { scale: [1, 1.45], opacity: [0, 0.5, 0] } : {}}
            style={{ originX: '588px', originY: '108px' }}
            transition={{ duration: reduce ? 0 : 1.1, delay: 1.42, ease: 'easeOut' }}/>
          <motion.g
            initial={{ opacity: 0 }} animate={go ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, delay: 1.0 }}>
            <text x="588" y="100" textAnchor="middle" fontSize="12" fontWeight="700"
              fill={H.anthracite} fontFamily="'Space Grotesk Variable',sans-serif">Green</text>
            <text x="588" y="114" textAnchor="middle" fontSize="12" fontWeight="700"
              fill={H.anthracite} fontFamily="'Space Grotesk Variable',sans-serif">construction</text>
            <text x="588" y="128" textAnchor="middle" fontSize="12" fontWeight="700"
              fill={H.anthracite} fontFamily="'Space Grotesk Variable',sans-serif">manager</text>
          </motion.g>
        </svg>
      </div>
    </div>
  )
}

// ── Exhibit 4: Line chart + gap fill — supervisor gap forecast 2026–2030 ────
function Exhibit4({ reduce }: { reduce: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const inView = useInView(svgRef, { once: true, margin: '0px 0px -60px 0px' })
  const go = inView

  // Y scale: y = 320 - (value/100) * 290; chart area y=30..320 (height 290)
  // Demand pts (indexed): 2026=14, 2027=34, 2028=57, 2029=80, 2030=100
  // Supply pts:           2026= 6, 2027=12, 2028=19, 2029=27, 2030= 36
  const demandD = 'M80,279.4 L237,221.4 L395,154.7 L552,88 L710,30'
  const supplyD = 'M80,302.6 L237,285.2 L395,264.9 L552,241.7 L710,215.6'
  const gapD    = `${demandD} L710,215.6 L552,241.7 L395,264.9 L237,285.2 L80,302.6 Z`

  return (
    <div className="overflow-x-auto -mx-4 lg:mx-0 px-4 lg:px-0">
      <div className="min-w-[520px]">
        <svg ref={svgRef} viewBox="0 0 760 400" role="img"
          aria-label="Forecast line chart: New Jersey demand for green-fluent construction managers outpaces credentialed supply in every year to 2030"
          className="w-full h-auto block">
          <defs>
            <clipPath id="ex4-gap-clip">
              <motion.rect x={80} y={0} height={400}
                initial={{ width: 0 }}
                animate={go ? { width: 630 } : { width: 0 }}
                transition={{ duration: reduce ? 0 : 1.2, ease: EASE }}/>
            </clipPath>
          </defs>
          {/* Axes */}
          <line x1="80" y1="30" x2="80" y2="320" stroke={H.grid} strokeWidth="1.2"/>
          <line x1="80" y1="320" x2="710" y2="320" stroke={H.grid} strokeWidth="1.2"/>
          {/* Y gridlines */}
          {[0, 25, 50, 75, 100].map(v => {
            const y = 320 - (v / 100) * 290
            return (
              <g key={v}>
                <line x1="80" y1={y} x2="710" y2={y} stroke={H.grid} strokeWidth="0.7"/>
                <text x="70" y={y + 4} textAnchor="end" fontSize="10.5"
                  fill={H.anthracite} fillOpacity="0.78"
                  fontFamily="'Space Grotesk Variable',sans-serif">{v}</text>
              </g>
            )
          })}
          {/* X labels */}
          {['2026','2027','2028','2029','2030'].map((yr, i) => (
            <text key={yr} x={80 + i * 157.5} y="344" textAnchor="middle"
              fontSize="12" fontWeight="600" fill={H.anthracite}
              fontFamily="'Space Grotesk Variable',sans-serif">{yr}</text>
          ))}
          <text x="395" y="370" textAnchor="middle" fontSize="11"
            fill={H.anthracite} fillOpacity="0.78" fontFamily="'Space Grotesk Variable',sans-serif">
            Y-axis: cumulative green-fluent CM placements (indexed; 2030 demand = 100)
          </text>
          {/* Gap fill — reveals left to right */}
          <path d={gapD} fill={H.datum} fillOpacity="0.13" clipPath="url(#ex4-gap-clip)"/>
          {/* Supply line — draws after gap fill */}
          <motion.path d={supplyD} fill="none" stroke={H.datum} strokeWidth="2.6"
            strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={go ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: reduce ? 0 : 0.9, delay: 0.9, ease: EASE }}/>
          {/* Demand line — draws last */}
          <motion.path d={demandD} fill="none" stroke={H.sediment} strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }} animate={go ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: reduce ? 0 : 1.1, delay: 1.3, ease: EASE }}/>
          {/* End dots */}
          <motion.circle cx={710} cy={30} r={4.5} fill={H.sediment}
            initial={{ scale: 0 }} animate={go ? { scale: 1 } : { scale: 0 }}
            style={{ originX: '710px', originY: '30px' }}
            transition={{ duration: reduce ? 0 : 0.28, delay: 2.1 }}/>
          <motion.circle cx={710} cy={215.6} r={4.5} fill={H.datum}
            initial={{ scale: 0 }} animate={go ? { scale: 1 } : { scale: 0 }}
            style={{ originX: '710px', originY: '215.6px' }}
            transition={{ duration: reduce ? 0 : 0.28, delay: 2.1 }}/>
          {/* 2030 gap bracket */}
          <motion.line x1="730" y1="30" x2="730" y2="215.6"
            stroke={H.quarry} strokeWidth="1.2"
            initial={{ opacity: 0 }} animate={go ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3, delay: 2.2 }}/>
          {/* Callout box */}
          <motion.g
            initial={{ opacity: 0 }} animate={go ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.45, delay: 2.3 }}>
            <rect x="442" y="140" width="185" height="66" rx="3"
              fill={H.bone} stroke={H.datum} strokeOpacity="0.28" strokeWidth="1"/>
            <text x="452" y="161" fontSize="12" fontWeight="700" fill={H.anthracite}
              fontFamily="'Cormorant Garamond',Georgia,serif">The 2030 gap:</text>
            <text x="452" y="178" fontSize="11" fill={H.anthracite} fillOpacity="0.75"
              fontFamily="'Space Grotesk Variable',sans-serif">~2,000–3,000 unfilled</text>
            <text x="452" y="194" fontSize="11" fill={H.anthracite} fillOpacity="0.75"
              fontFamily="'Space Grotesk Variable',sans-serif">green CM roles</text>
          </motion.g>
        </svg>
      </div>
    </div>
  )
}

// ── Reading column + body paragraph helpers ─────────────────────────────────
function ReadCol({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`max-w-[68ch] mx-auto px-5 lg:px-0 ${className}`}>
      {children}
    </div>
  )
}

function Para({ children, delay = 0, large = false }: { children: ReactNode; delay?: number; large?: boolean }) {
  const reduce = useReducedMotion()
  return (
    <motion.p
      className={[
        large
          ? 'text-[1.175rem] lg:text-[1.3rem] italic text-anthracite leading-[1.58] mb-6 [text-wrap:pretty]'
          : 'text-[15px] text-anthracite/85 leading-[1.8] mb-5 last:mb-0 [text-wrap:pretty]',
      ].join(' ')}
      style={{ fontFamily: large ? 'var(--font-heading)' : 'var(--font-body)', fontWeight: large ? 300 : undefined }}
      initial={reduce ? undefined : { opacity: 0.001, y: 10 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={reduce ? undefined : { duration: 0.5, delay, ease: EASE }}>
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
      <span
        className="not-italic text-ink-soft mr-3 text-[15px] align-middle"
        style={{ fontFamily: 'var(--font-body)', fontWeight: 400, letterSpacing: '-0.01em' }}>
        {num}
      </span>
      {text}
    </motion.h2>
  )
}

// ── Main view ───────────────────────────────────────────────────────────────
export function SupervisorGapFullReport() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[56vh] flex flex-col justify-end pb-14 lg:pb-20 relative overflow-hidden"
        aria-labelledby="insights-h1">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-6 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            Insights · Workforce Prediction
          </motion.span>

          <motion.h1
            id="insights-h1"
            className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.97] tracking-[-0.035em] text-white italic mb-6 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            The supervisor gap.
          </motion.h1>

          <motion.p
            className="text-[14.5px] text-white/65 leading-[1.68] max-w-[54ch] mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.32, ease: EASE }}>
            America's construction labor shortage has quietly changed shape: from a shortage of hands to a shortage of experience. In New Jersey's green economy, that bottleneck now has a name and a code: Construction Manager, SOC 11-9021.
          </motion.p>

          <motion.p
            className="text-[12px] text-white/50 uppercase tracking-[0.1em]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={reduce ? undefined : { duration: 0.4, delay: 0.52, ease: EASE }}>
            Aedifica Research · June 2026 · Version 1.0 · Catalogued as R-01
          </motion.p>

        </div>
      </section>

      {/* ── Article Part 1 — Lede through Section 02 ── */}
      <section className="bg-bone pt-16 lg:pt-24 pb-0" aria-label="The supervisor gap, article">

        {/* Lede */}
        <ReadCol>
          <Para large>
            The headlines say the worst is over. ABC estimates the U.S. construction industry must attract about{' '}
            <strong className="font-semibold not-italic" style={{ color: H.anthracite }}>349,000</strong> net new workers in 2026, down from 439,000 the year before. Read quickly, that looks like relief. Read carefully, it is a warning.
          </Para>
          <Para delay={0.08}>
            The number is falling because construction spending growth has cooled, not because the workforce has healed. Strip out the cyclical softness and a structural fact remains: a majority of 2026's new-worker demand is now driven by <strong className="font-semibold text-anthracite">retirement</strong> rather than expansion. The industry is not simply short of labor. It is short of the people who organize labor: the supervisors, schedulers, and managers who decide whether a project lands on time, on budget, and to code.
          </Para>
          <Para delay={0.14}>
            This piece makes a specific prediction about where that experience gap will bite first and hardest: the <strong className="font-semibold text-anthracite">green construction manager</strong> in New Jersey. The state has converted its climate ambitions from aspiration into statute, and the obligations now on the books will require supervisory talent that, on current trajectory, the state will not have produced.
          </Para>
        </ReadCol>

        {/* Stats strip */}
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 mt-14 lg:mt-18">
          <div className="grid grid-cols-2 sm:grid-cols-3 border-t border-b border-sediment/22">
            {([
              { num: '~349k', label: 'Net new U.S. construction workers needed in 2026, rising to ~456k in 2027 (ABC)' },
              { num: '$107k', label: 'Median annual wage for construction managers, May 2024, more than double the all-occupation median (BLS)' },
              { num: '400k',  label: 'N.J. homes, plus 20,000 commercial buildings, to be electrification-ready by 2030 under Executive Order 316' },
            ] as const).map(({ num, label }, i) => (
              <motion.div key={num}
                className={[
                  'px-4 sm:px-6 lg:px-8 py-5 sm:py-7 lg:py-10',
                  i === 0 ? 'border-r border-sediment/20' : '',
                  i === 1 ? 'sm:border-r border-sediment/20' : '',
                  i === 2 ? 'col-span-2 sm:col-span-1 border-t sm:border-t-0 border-sediment/20' : '',
                ].filter(Boolean).join(' ')}
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: i * 0.1, ease: EASE }}>
                <div
                  className="text-[2.1rem] sm:text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] leading-none italic mb-3"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300, color: [H.datum, H.quarry, H.patina][i] }}>
                  {num}
                </div>
                <p className="text-[11px] sm:text-[12px] lg:text-[12.5px] text-anthracite/80 leading-[1.55]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 01 + Exhibit 1 */}
        <SectionPair
          text={<>
            <SecHead num="01" text="The bottleneck moved up the org chart." />
            <Para>
              For a decade the construction labor story was about craft trades: not enough electricians, welders, equipment operators. That story is still true, but it is no longer the whole picture. The 2026 outlook from the Associated General Contractors and Sage found that economic slowdown has overtaken labor as contractors' single biggest worry; yet the next four concerns in the ranking are all about people and cost: too few workers, rising labor costs, worker quality, and materials prices. More than four in five firms that plan to hire say qualified candidates are hard to find.
            </Para>
            <Para delay={0.07}>
              What has changed is <em>which</em> people are scarce. ABC's chief economist attributes the bulk of 2026's hiring need to an aging workforce exiting the trades, compounded by a sharp 2025 fall in the inflow of undocumented labor and accelerating voluntary departures. When a thirty-year journey-level supervisor retires, a first-year hire does not replace them one-for-one. The institutional knowledge (sequencing a job, catching a code problem before inspection, keeping a crew safe and productive) walks out the door with them. That is an <strong className="font-semibold text-anthracite">experience cliff</strong>, and supervisory roles sit right at its edge.
            </Para>
          </>}
          exhibit={
            <ExhibitWrap
              tag="Exhibit 1"
              title="The headline worker gap is narrowing, but it is increasingly a gap of experience, not hands."
              subtitle="Net new U.S. construction workers needed beyond normal hiring, by year, thousands"
              source="Source: Associated Builders and Contractors 2025 & 2026 workforce models (Jan. 2026); Associated General Contractors / Sage 2026 Construction Outlook. The replacement-vs.-demand split within each column is an Aedifica illustration of ABC's published commentary, not a reported breakdown."
              legend={[
                { color: H.datum,     label: 'Replace retirements & exits' },
                { color: '#8A9A93B3', label: 'Meet new construction demand' },
              ]}
              compact>
              <Exhibit1 reduce={reduce ?? false} />
            </ExhibitWrap>
          }
        />

        {/* Section 02 + Exhibit 2 */}
        <SectionPair
          flip
          text={<>
            <SecHead num="02" text="The demand is written into statute." />
            <Para>
              Most workforce forecasts rest on projections. New Jersey's rests on obligations. Executive Order 316 directs the state to make <strong className="font-semibold text-anthracite">400,000 homes and 20,000 commercial buildings</strong> electrification-ready by 2030. The state has pulled its 100%-clean-electricity target forward to 2035 and holds an 80% greenhouse-gas-reduction goal for 2050. In November 2025 it published a Strategic Roadmap for Building Decarbonization; in December, a Comprehensive Climate Action Plan. These are not press releases. They are scoped programs with deadlines, and every one of them is delivered by buildings that somebody has to manage into existence.
            </Para>
            <Para delay={0.07}>
              The state has also named the problem itself. The Governor's Office of Climate Action and the Green Economy released <em>Growing Green Jobs: The Opportunities for New Jersey's Workforce</em> in September 2025. It identifies twelve priority green occupations, all paying above the national average, and singles out expanding capacity in the construction trades as a core opportunity. New Jersey's green workforce has grown roughly 12% since 2021 and is expected to add more than 14,000 net jobs by 2035. The demand signal is unambiguous. The supply signal is the problem.
            </Para>
          </>}
          exhibit={
            <ExhibitWrap
              tag="Exhibit 2"
              title="The construction manager carries the largest mobility premium of any role on a green jobsite."
              subtitle="Median annual wage, May 2024, U.S. dollars"
              source="Source: U.S. Bureau of Labor Statistics, Occupational Employment & Wage Statistics and Occupational Outlook Handbook (May 2024). Construction managers (SOC 11-9021) held ~550,300 U.S. jobs in 2024, with employment projected to grow 9% through 2034, much faster than average, with ~46,800 annual openings."
              compact>
              <Exhibit2 reduce={reduce ?? false} />
            </ExhibitWrap>
          }
        />

        <div className="pb-16 lg:pb-20" />
      </section>

      {/* ── Pull Quote ── full-bleed anthracite band */}
      <section className="bg-anthracite py-16 lg:py-22" aria-label="Key finding">
        <div className="max-w-[52ch] mx-auto px-6 text-center">
          <motion.p
            className="text-[1.55rem] lg:text-[2rem] xl:text-[2.45rem] leading-[1.28] tracking-[-0.024em] text-white italic [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 22 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.75, ease: SPRING }}>
            One trained green construction manager shapes the practices of dozens of workers on every project they lead, for the length of a career. No other green occupation carries that multiplier.
          </motion.p>
        </div>
      </section>

      {/* ── Article Part 2 — Sections 03–06 ── */}
      <section className="bg-bone pt-16 lg:pt-24 pb-16 lg:pb-24" aria-label="The supervisor gap, continued">

        {/* Section 03 + Exhibit 3 */}
        <SectionPair
          text={<>
            <SecHead num="03" text="High wage, high leverage, near-zero green supply." />
            <Para>
              Borrowing a frame from McKinsey's infrastructure-labor work, the occupations that strain a market are the <em>crucible</em> roles: the ones where strong underlying demand collides with a thin pipeline. The green construction manager sits in that corner on every axis that matters. The wage premium is real and BLS-verified. The growth is structural: nationally, construction-manager employment is projected to expand 9% through 2034, and BLS explicitly attributes part of that growth to the retrofitting of buildings for energy efficiency, precisely New Jersey's mandate.
            </Para>
            <Para delay={0.07}>
              And the leverage is what makes the role decisive. A solar installer makes one roof greener. A construction manager fluent in building-envelope systems, energy-code compliance, and green commissioning sets the standard for every subcontractor and laborer on the job, multiplying good practice across the whole site, project after project. Yet this is the role for which a green-specific credential pipeline is effectively absent in the state. Demand is rising, leverage is highest, and credentialed supply is closest to zero. That is the textbook definition of a bottleneck.
            </Para>
          </>}
          exhibit={
            <ExhibitWrap
              tag="Exhibit 3"
              title="On the two axes that decide a bottleneck (demand momentum and credential scarcity), the green construction manager stands alone."
              subtitle="Strategic positioning of selected New Jersey green occupations; bubble size reflects workforce multiplier per role"
              source="Source: Aedifica analysis. Positions are an illustrative strategic assessment synthesizing BLS occupational growth (SOC 11-9021), the N.J. Growing Green Jobs report (Sept. 2025), and Aedifica's review of the N.J. Eligible Training Provider registry; they are not plotted from a single quantitative dataset."
              compact>
              <Exhibit3 reduce={reduce ?? false} />
            </ExhibitWrap>
          }
        />

        {/* Section 04 + Exhibit 4 (automation hedge folded in as third paragraph) */}
        <SectionPair
          flip
          text={<>
            <SecHead num="04" text="Our prediction: the gap widens every year through 2030." />
            <Para>
              Here is the forecast, stated plainly. New Jersey is home to an estimated <strong className="font-semibold text-anthracite">16,000–18,000</strong> construction managers today (an Aedifica estimate applying the state's share of national construction employment to the BLS national count). To deliver Executive Order 316's electrification mandate on schedule, while replacing a retirement wave that BLS data shows accelerating through the decade, we project the state will need to place on the order of <strong className="font-semibold text-anthracite">2,000 to 3,000 construction managers with genuine green-building fluency</strong> into active projects by 2030.
            </Para>
            <Para delay={0.07}>
              Against that demand, the credentialed supply today is close to zero. Aedifica's preliminary review of New Jersey's Eligible Training Provider registry did not surface a single approved program purpose-built for green construction management under the state's green-economy alignments. On its current trajectory, the credentialed pipeline closes only a fraction of the need. The result is the shaded wedge in Exhibit 4: a gap that does not close on its own, and that compounds. Every year the market underdelivers green-fluent supervisors, it adds backlog, lengthens project timelines, and prices a "green premium" into the very projects the state is funding to make energy cheaper.
            </Para>
            <Para delay={0.14}>
              One more reason this forecast is durable: the work resists automation. McKinsey's future-of-work modeling expects demand for physical and manual skills to hold roughly level through 2030 even as office and production roles are automated, with the build-out of low-emissions infrastructure a source of new demand rather than displacement. The current AI-infrastructure boom cuts the same way: data centers and power projects are themselves construction demand. The judgment, coordination, and on-site accountability of a construction manager are exactly the capabilities that software augments rather than eliminates.
            </Para>
          </>}
          exhibit={
            <ExhibitWrap
              tag="Exhibit 4 · The supervisor gap"
              title="Our projection: New Jersey's need for green-fluent construction managers outruns its credentialed supply in every year to 2030."
              subtitle="Cumulative green-fluent CM placements required vs. supply on current trajectory, New Jersey, indexed"
              source="Source: Aedifica projection. Built from BLS construction-manager employment and 9% (2024–34) growth, the state's share of national construction employment, N.J. Executive Order 316 building-electrification targets, and an accelerating retirement curve. Figures are an indexed scenario for illustration, not a precise count; demand is set to 100 in 2030. Sensitivity to spending and immigration assumptions is high."
              legend={[
                { color: H.sediment,  label: 'Cumulative demand (EO 316 + retirements)' },
                { color: H.datum,     label: 'Credentialed supply, current trajectory'   },
                { color: '#6667AB22', label: 'The supervisor gap'                        },
              ]}
              compact>
              <Exhibit4 reduce={reduce ?? false} />
            </ExhibitWrap>
          }
        />

        {/* Section divider */}
        <div className="flex justify-center gap-2.5 my-12 lg:my-16 max-w-[68ch] mx-auto px-5 lg:px-0">
          {[0, 1, 2].map(i => (
            <span key={i} className="w-[5px] h-[5px] rounded-full bg-sediment/40" aria-hidden />
          ))}
        </div>

        {/* Section 05 */}
        <ReadCol className="mt-10 lg:mt-14">
          <SecHead num="05" text="A pipeline, not a posting." />
          <Para>
            A gap this structural is not solved by job ads. It is solved by building supply: early, deliberately, and across the whole career arc. That is the work Aedifica was built to do, through three programs designed to feed a single pipeline:
          </Para>
        </ReadCol>

        {/* Programs — 3-col horizontal at md */}
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-sediment/22">
            {([
              {
                name: 'Aedifica Explore & Launch',
                audience: 'Middle & high school',
                description: 'Early, hands-on exposure to engineering and the built environment, so the next generation can see a green-building career before the door to the trades quietly closes.',
                keystone: false,
              },
              {
                name: 'Aedifica Pathway & Rebuild',
                audience: 'Returning & transitioning adults',
                description: 'Structured routes back into the workforce for adults seeking durable careers, including those re-entering after incarceration or career change, mapped to roles that demand is actively pulling for.',
                keystone: false,
              },
              {
                name: 'BUILD NJ GREEN',
                audience: 'Green construction management',
                description: "Credentialing for the crucible role itself: construction managers fluent in building-envelope systems, energy-code compliance, and green commissioning. A proposed program; the first of its kind in the state if approved.",
                keystone: true,
              },
            ] as const).map(({ name, audience, description, keystone }, i) => (
              <motion.div key={name}
                className={[
                  'py-6 md:py-8',
                  i === 0 ? 'md:pr-7 md:border-r border-sediment/20' : '',
                  i === 1 ? 'md:px-7 md:border-r border-sediment/20 border-t md:border-t-0 border-sediment/20' : '',
                  i === 2 ? 'md:pl-7 border-t md:border-t-0 border-sediment/20' : '',
                ].filter(Boolean).join(' ')}
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: i * 0.07, ease: EASE }}>
                <p
                  className={[
                    'text-[1.3rem] md:text-[1.45rem] italic leading-[1.1] tracking-[-0.02em] mb-2',
                    keystone ? 'text-datum' : 'text-anthracite',
                  ].join(' ')}
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  {name}
                </p>
                <p
                  className="text-[11px] text-anthracite/80 uppercase tracking-[0.1em] mb-3"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {audience}
                </p>
                <p
                  className="text-[13.5px] text-anthracite/78 leading-[1.65]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <ReadCol className="mt-8">
          <Para>
            If New Jersey's Eligible Training Provider registry still lists no purpose-built green construction-management program at the moment of approval, BUILD NJ GREEN would not be a late entrant into a crowded field. It would be a first mover into an empty one: the state's clearest answer to the supervisor gap.
          </Para>
        </ReadCol>

        {/* Source notes — collapsed by default */}
        <ReadCol className="mt-12">
          <div className="border-t border-sediment/20 pt-6">
            <details className="group" style={{ fontFamily: 'var(--font-body)' }}>
              <summary className="cursor-pointer list-none flex items-center gap-2 text-[11.5px] text-anthracite/80 uppercase tracking-[0.1em] hover:text-anthracite transition-colors duration-150 select-none [&::-webkit-details-marker]:hidden">
                Sources &amp; notes
                <svg className="w-[10px] h-[10px] opacity-50 transition-transform duration-200 group-open:rotate-180" viewBox="0 0 10 10" fill="none" aria-hidden>
                  <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </summary>
              <div className="mt-4">
                <ul className="text-[11.5px] text-anthracite/80 leading-[1.72] space-y-1.5 list-none" style={{ fontFamily: 'var(--font-body)' }}>
                  <li>Associated Builders and Contractors, 2025 &amp; 2026 construction workforce shortage models (Jan. 2026).</li>
                  <li>Associated General Contractors of America / Sage, <em>2026 Construction Hiring &amp; Business Outlook</em>.</li>
                  <li>U.S. Bureau of Labor Statistics: Occupational Outlook Handbook &amp; Occupational Employment and Wage Statistics, Construction Managers (SOC 11-9021), May 2024.</li>
                  <li>N.J. Governor's Office of Climate Action and the Green Economy, <em>Growing Green Jobs: The Opportunities for New Jersey's Workforce</em> (Sept. 2025); N.J. Executive Order 316; N.J. Strategic Roadmap for Building Decarbonization (Nov. 2025).</li>
                  <li>McKinsey &amp; Company: <em>Will a labor crunch derail plans to upgrade US infrastructure?</em> (Oct. 2022); <em>Tradespeople wanted</em> (2024); future-of-work and net-zero workforce research.</li>
                </ul>
                <p className="mt-4 text-[11px] text-anthracite/80 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
                  <strong className="text-anthracite">About this document.</strong> An original analysis prepared by and for Aedifica. Third-party organizations named above are cited as data sources only; this report is independent Aedifica thought leadership and is not produced by, affiliated with, or endorsed by any of them. Forward-looking figures are Aedifica estimates and scenarios, clearly labeled as such, and should not be read as guarantees.
                </p>
              </div>
            </details>
          </div>
        </ReadCol>

      </section>

      {/* ── Research & Publications Archive ── bg-anthracite */}
      <section className="bg-anthracite py-12 lg:py-16" aria-labelledby="archive-heading">
        <div className="max-w-7xl mx-auto px-6">

          <div className="lg:grid lg:grid-cols-[1fr_1.6fr] lg:gap-16 xl:gap-24 mb-9 lg:mb-11">
            <motion.h2
              id="archive-heading"
              className="text-[2rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.028em] text-white italic mb-6 lg:mb-0 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
              Everything Aedifica publishes, indexed, with its status stated.
            </motion.h2>
            <motion.p
              className="text-[14.5px] text-white/70 leading-[1.72] max-w-[62ch] lg:pt-3"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
              This is the complete archive of Aedifica research. Published work appears in full on this
              page. Work that is under review, in development, or planned appears here too, labeled as
              such, so that the shape of the evidence base is visible before it is finished. Nothing is
              listed as published until it is, and no entry is quietly removed: corrections are published,
              not edited away.
            </motion.p>
          </div>

          {/* Archive entries — 2×2 aligned pairs, R-05 centered below */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 xl:gap-x-20 gap-y-9 items-start">
            {([
              {
                id: 'R-01',
                status: 'Published',
                statusCls: 'bg-quarry text-anthracite',
                kind: 'Workforce prediction · Original analysis',
                title: 'The supervisor gap',
                body: 'Why America’s construction shortage has shifted from a shortage of hands to a shortage of experience, and why New Jersey’s building-electrification mandates will require an estimated 2,000–3,000 green-fluent construction managers by 2030 against a credentialed supply near zero. Four exhibits; two are labeled Aedifica estimates.',
                meta: 'Version 1.0 · Published June 2026',
                action: { label: 'Read in full ↑', href: '#insights-h1' },
              },
              {
                id: 'R-02',
                status: 'Published',
                statusCls: 'bg-quarry text-anthracite',
                kind: 'Field notes · Delivery year 2',
                title: 'Bridging Brilliance: lessons from the instructor',
                body: 'Ten lessons on what actually made the delivery work, in the instructor’s own words: building trust early, giving students real responsibility, and the institutional habits that turn a strong curriculum into a strong program. Companion piece to the quantitative program evaluation, which remains pending clearance from the school, university partner, and funder.',
                meta: 'Hillside Innovation Academy · Stevens Institute of Technology',
                action: null,
              },
              {
                id: 'R-03',
                status: 'In development',
                statusCls: 'border border-white/30 text-white/75',
                kind: 'Methodology note · Outcome reporting',
                title: 'Outcome reporting definitions',
                body: 'The definitions Aedifica commits to using in every cohort, unchanged: what counts as a placement, when completion is measured, how retention and wage at placement are recorded, and what an apprenticeship articulation must include to be reported as one. Published before the first workforce cohort reports, so the metric cannot be redefined after the result is known.',
                meta: 'Governs all Aedifica outcome claims · Anchored in Principle 04, outcomes over activity, honestly reported',
                action: null,
              },
              {
                id: 'R-04',
                status: 'In development',
                statusCls: 'border border-white/30 text-white/75',
                kind: 'Registry review · Supporting evidence',
                title: 'New Jersey Eligible Training Provider registry, green construction management scan',
                body: 'The underlying review cited in R-01: a search of the state’s approved training-provider registry for any program purpose-built for green construction management. The claim that none exists is the strongest and most perishable assertion in the supervisor gap, and it is dated for exactly that reason.',
                meta: 'Supports R-01 · Re-checked before every grant submission',
                action: { label: 'Available on request', href: '/partner' },
              },
              {
                id: 'R-05',
                status: 'Planned',
                statusCls: 'border border-white/30 text-white/75',
                kind: 'Employer study · Curriculum validation',
                title: 'Employer validation study',
                body: 'What mid-market New Jersey general contractors say the coordination and supervisory roles actually require, tested against what Aedifica teaches. Depends on the Talent Pipeline advisory group reaching a quorum of named validators; the study will not be published without them.',
                meta: 'Not yet started',
                action: null,
              },
            ] as const).map((entry, i) => (
              <motion.article
                key={entry.id}
                className={`border-t border-white/15 pt-6 ${i === 4 ? 'lg:col-span-2 lg:max-w-[620px] lg:w-full lg:mx-auto' : ''}`}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: Math.min(i * 0.05, 0.2), ease: EASE }}>
                <div className="flex items-center gap-4 mb-4">
                  <p
                    className="text-[1.5rem] italic leading-none"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, color: 'var(--color-datum-light)' }}>
                    {entry.id}
                  </p>
                  <span
                    className={`inline-block text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 leading-none select-none ${entry.statusCls}`}
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {entry.status}
                  </span>
                </div>
                <div>
                  <p
                    className="text-[10.5px] uppercase tracking-[0.16em] text-white/60 mb-2.5"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {entry.kind}
                  </p>
                  <h3
                    className="text-[1.5rem] lg:text-[1.75rem] italic text-white leading-[1.12] tracking-[-0.02em] mb-3 [text-wrap:balance]"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    {entry.title}
                  </h3>
                  <p
                    className="text-[13.5px] text-white/72 leading-[1.68] max-w-[72ch] mb-3"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {entry.body}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                    <p
                      className="text-[11.5px] text-white/55 leading-[1.6]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {entry.meta}
                    </p>
                    {entry.action && (
                      <a
                        href={entry.action.href}
                        className="text-[12.5px] underline underline-offset-4 transition-colors duration-150"
                        style={{ fontFamily: 'var(--font-body)', color: 'var(--color-datum-light)' }}>
                        {entry.action.label}
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.p
            className="text-[13.5px] text-white/65 leading-[1.7] max-w-[68ch] mt-6"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
            Read the status, not just the title. One entry is published. One is written but blocked on
            partner clearance. Two are in development. One has not started. An evidence base that only
            shows finished work is a marketing page, not an archive.
          </motion.p>

          {/* Citation + research standards */}
          <div className="mt-10 lg:mt-12 lg:grid lg:grid-cols-[1fr_1.6fr] lg:gap-16 xl:gap-24">
            <motion.div
              className="mb-10 lg:mb-0"
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
              <h3
                className="text-[1.25rem] lg:text-[1.375rem] italic text-white leading-[1.2] mb-5"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                How to cite R-01
              </h3>
              <p
                className="text-[13px] text-white/75 leading-[1.75] mb-5 border border-white/15 px-5 py-4"
                style={{ fontFamily: 'var(--font-body)' }}>
                Aedifica Research. (2026). <em>The supervisor gap: the shortage of green-fluent
                construction managers in New Jersey</em> (Version 1.0). Aedifica. edfca.com/research/supervisor-gap
              </p>
              <p
                className="text-[12px] text-white/55 leading-[1.7]"
                style={{ fontFamily: 'var(--font-body)' }}>
                Version history: 1.0, June 2026, first publication. Subsequent versions and any
                corrections will be listed here with their dates. Contact: info@edfca.com
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
              <h3
                className="text-[1.25rem] lg:text-[1.375rem] italic text-white leading-[1.2] mb-5"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Research standards
              </h3>
              <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3.5">
                {([
                  'Estimates are labeled where they appear. Forward-looking figures and illustrative positions carry an on-chart marker and a source note, not a footnote three screens away.',
                  'Third-party organizations are cited as data sources only. No named source is an author, affiliate, or endorser of Aedifica research.',
                  'Program data is reported at the cohort level. Student names are withheld, quotes are anonymized by cohort year, and photos or named students require written permission, with parent or guardian consent for minors.',
                  'Delivery experience is never presented as placement data. Prior teaching participation demonstrates capability; it does not demonstrate workforce outcomes.',
                  'Definitions do not move. Cohort 1’s metric is Cohort 8’s metric. R-03 fixes them in writing before the first cohort reports.',
                  'Corrections are published. When a number changes, the change and its reason are recorded, as with the learner count confirmed at 21 after an earlier draft table listed 20.',
                ] as const).map((std) => (
                  <li key={std.slice(0, 24)} className="flex gap-3 items-start">
                    <span
                      className="flex-shrink-0 w-[7px] h-[7px] rotate-45 mt-[7px]"
                      style={{ backgroundColor: 'var(--color-datum-light)' }}
                      aria-hidden="true"
                    />
                    <p
                      className="text-[12.5px] text-white/72 leading-[1.68]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {std}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── Resource Hub ── bg-snow */}
      <section className="bg-snow py-12 lg:py-18" aria-labelledby="resources-heading">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            id="resources-heading"
            className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.07] tracking-[-0.03em] text-anthracite italic mb-3 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            Resources by audience.
          </motion.h2>
          <motion.p
            className="text-[14px] text-anthracite/75 leading-[1.7] max-w-[60ch] mb-12 lg:mb-14"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
            Resources below are in development and available on request. Contact Aedifica to receive any item directly.
          </motion.p>

          {([
            {
              audience: 'Learners and students',
              items: [
                'What is construction management?',
                'Construction career map',
                'Basic construction vocabulary guide',
                'Project lifecycle overview',
                'Portfolio artifact examples',
                'Resume and interview preparation worksheet',
              ],
            },
            {
              audience: 'Families',
              items: [
                'Family guide to construction-management careers',
                'What students will learn in Aedifica programs',
                'How families can support attendance and completion',
                'Safety and participation expectations',
                'College, credential, and career pathway overview',
              ],
            },
            {
              audience: 'Educators and schools',
              items: [
                'Sample lesson overview',
                'Pathway implementation checklist',
                'Career speaker guide',
                'Capstone rubric',
                'Teacher professional development inquiry form',
              ],
            },
            {
              audience: 'Partners and applicants',
              items: [
                'Program comparison guide',
                'Application checklist',
                'Interest statement worksheet',
                'Interview preparation guide',
                'Rebuild cohort calendar (available when announced)',
              ],
            },
          ] as const).map(({ audience, items }, i) => (
            <motion.div
              key={audience}
              className="grid grid-cols-1 lg:grid-cols-[220px_1fr] border-t border-sediment/20 py-6 lg:py-7 gap-4 lg:gap-12"
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={reduce ? undefined : { duration: 0.42, delay: i * 0.05, ease: EASE }}>
              <p
                className="text-[13.5px] text-anthracite italic leading-none tracking-[-0.015em] pt-0.5"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                {audience}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2">
                {items.map(item => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <span className="w-[3px] h-[3px] bg-sediment/60 rounded-full flex-shrink-0 mt-[8px]" aria-hidden />
                    <span
                      className="text-[13px] text-anthracite/75 leading-[1.55]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <div className="border-t border-sediment/20 pt-7">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={VIEWPORT}
              transition={reduce ? undefined : { duration: 0.42, ease: EASE }}>
              <p
                className="text-[13px] text-anthracite/75 leading-[1.7] max-w-[70ch] mb-6"
                style={{ fontFamily: 'var(--font-body)' }}>
                <strong className="text-anthracite font-medium">Also on the record:</strong> the published
                research report, The supervisor gap, sits in the research archive above alongside the work
                still in review, and every curriculum is listed in the homepage curriculum index. The
                outcome reporting commitment explains the definitions Aedifica will use, cohort after
                cohort, whether or not the numbers flatter us.
              </p>
              <Link href="/partner"
                className="inline-flex items-center gap-2 text-[13.5px] text-anthracite tracking-[-0.01em] group py-2 -my-2"
                style={{ fontFamily: 'var(--font-body)' }}>
                Request a resource or ask about availability
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden>→</span>
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── CTA Block ── */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-label="Partner with Aedifica">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-bone px-10 pt-10 pb-10 lg:px-16 lg:pt-14 lg:pb-12 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              The resources you need are available on request.
            </h2>

            <p
              className="text-[15px] text-anthracite/80 leading-[1.7] max-w-[52ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Contact Aedifica to receive any resource directly, discuss employer validation, accountability frameworks, or institutional partnerships.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/partner"
                className="inline-flex items-center justify-center bg-anthracite text-white text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-anthracite/85"
                style={{ fontFamily: 'var(--font-body)' }}>
                Start a Partnership Conversation
              </Link>
              <Link href="/impact"
                className="inline-flex items-center justify-center border border-anthracite text-anthracite text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-anthracite/6"
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
