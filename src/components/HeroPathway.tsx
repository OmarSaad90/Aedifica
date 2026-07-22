'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import type { CSSProperties } from 'react'

const EASE = [0.25, 0.1, 0.25, 1] as const

type Program = { name: string; audience: string; color: string; to: string }

const PROGRAMS: Program[] = [
  { name: 'Explore',        audience: 'Middle school', color: 'var(--color-datum)',    to: '/programs/explore' },
  { name: 'Pathway',        audience: 'High schools',  color: 'var(--color-quarry)',   to: '/programs/pathway' },
  { name: 'Launch',         audience: 'Institutions',  color: 'var(--color-sediment)', to: '/programs/launch'  },
  { name: 'Rebuild',        audience: 'Adults',        color: 'var(--color-rebuild)',  to: '/programs/rebuild' },
  { name: 'Talent Pipeline', audience: 'Employers',    color: 'var(--color-pipeline)', to: '/programs/talent-pipeline' },
]

const CURVE_W = 96
const CURVE_H = 520

// First/last markers sit level with their row's vertical center; the label
// column uses justify-between, which flushes row 1 to the top edge and the
// last row to the bottom edge (not quarter-centers) — this mirrors that.
const NODE_Y_PAD = 26
const NODES = PROGRAMS.map((_, i) => ({
  x: [24, 68, 26, 68, 24][i],
  y: NODE_Y_PAD + (i / (PROGRAMS.length - 1)) * (CURVE_H - NODE_Y_PAD * 2),
}))

// Catmull-Rom → cubic bezier: passes exactly through every node, clamped at the ends.
function smoothPath(pts: { x: number; y: number }[]): string {
  const at = (i: number) => pts[Math.max(0, Math.min(pts.length - 1, i))]
  let d = `M ${pts[0].x} ${pts[0].y}`
  for (let i = 0; i < pts.length - 1; i++) {
    const p0 = at(i - 1), p1 = at(i), p2 = at(i + 1), p3 = at(i + 2)
    const c1x = p1.x + (p2.x - p0.x) / 6
    const c1y = p1.y + (p2.y - p0.y) / 6
    const c2x = p2.x - (p3.x - p1.x) / 6
    const c2y = p2.y - (p3.y - p1.y) / 6
    d += ` C ${c1x.toFixed(2)} ${c1y.toFixed(2)} ${c2x.toFixed(2)} ${c2y.toFixed(2)} ${p2.x} ${p2.y}`
  }
  return d
}

const CURVE_D = smoothPath(NODES)

export function HeroPathway() {
  const reduce = useReducedMotion()

  return (
    <div className="w-full lg:w-[350px] xl:w-[390px] flex-shrink-0">
      <motion.p
        className="text-[10.5px] uppercase tracking-[0.22em] text-anthracite/75 mb-8 lg:mb-10"
        style={{ fontFamily: 'var(--font-body)' }}
        initial={reduce ? undefined : { opacity: 0 }}
        animate={reduce ? undefined : { opacity: 1 }}
        transition={reduce ? undefined : { duration: 0.5, delay: 0.5, ease: EASE }}
      >
        The pathway · Index 05
      </motion.p>

      {/* ── Desktop: drawn curve with waypoints ── */}
      <div className="relative hidden lg:block" style={{ height: CURVE_H }}>
        <svg
          className="absolute left-0 top-0"
          width={CURVE_W}
          height={CURVE_H}
          viewBox={`0 0 ${CURVE_W} ${CURVE_H}`}
          aria-hidden="true"
        >
          <motion.path
            d={CURVE_D}
            fill="none"
            stroke="var(--color-anthracite)"
            strokeOpacity={0.16}
            strokeWidth={1}
            initial={reduce ? undefined : { pathLength: 0 }}
            animate={reduce ? undefined : { pathLength: 1 }}
            transition={reduce ? undefined : { duration: 1.3, ease: EASE, delay: 0.55 }}
          />
          {NODES.map((p, i) => (
            <motion.g
              key={PROGRAMS[i].name}
              style={{ transformOrigin: `${p.x}px ${p.y}px` }}
              initial={reduce ? undefined : { scale: 0, opacity: 0 }}
              animate={reduce ? undefined : { scale: 1, opacity: 1 }}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE, delay: 0.85 + i * 0.15 }}
            >
              {/* halo — breaks the line cleanly behind the marker */}
              <rect
                x={p.x - 14}
                y={p.y - 14}
                width={28}
                height={28}
                fill="var(--color-snow)"
                transform={`rotate(45 ${p.x} ${p.y})`}
              />
              <rect
                x={p.x - 10}
                y={p.y - 10}
                width={20}
                height={20}
                fill={PROGRAMS[i].color}
                transform={`rotate(45 ${p.x} ${p.y})`}
              />
            </motion.g>
          ))}
        </svg>

        <div className="absolute inset-0 flex flex-col justify-between pl-[120px]">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={program.name}
              initial={reduce ? undefined : { opacity: 0, x: -10 }}
              animate={reduce ? undefined : { opacity: 1, x: 0 }}
              transition={reduce ? undefined : { duration: 0.5, ease: EASE, delay: 0.95 + i * 0.15 }}
            >
              <Link
                href={program.to}
                className="group block"
                style={{ '--pc': program.color } as CSSProperties}
              >
                <span
                  className="block text-[1.5rem] xl:text-[1.625rem] text-anthracite italic leading-none group-hover:text-[var(--pc)] transition-colors duration-150 [text-wrap:balance]"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                >
                  {program.name}
                </span>
                <span
                  className="block text-[9.5px] text-anthracite/78 uppercase tracking-[0.13em] mt-2 group-hover:text-anthracite transition-colors duration-150"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {program.audience}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Mobile / tablet: compact row, no curve ── */}
      <div className="flex flex-wrap gap-x-7 gap-y-4 lg:hidden">
        {PROGRAMS.map((program, i) => (
          <motion.div
            key={program.name}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, ease: EASE, delay: 0.55 + i * 0.08 }}
          >
            <Link href={program.to} className="flex items-center gap-3">
              <span
                className="flex-shrink-0 w-[13px] h-[13px] rotate-45 ring-4 ring-snow"
                style={{ backgroundColor: program.color }}
                aria-hidden="true"
              />
              <span
                className="text-[15px] text-anthracite italic"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
              >
                {program.name}
              </span>
              <span
                className="text-[9.5px] text-anthracite/78 uppercase tracking-[0.12em]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {program.audience}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
