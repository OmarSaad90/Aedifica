import { motion, useReducedMotion } from 'motion/react'

const N = 45

function generatePaths(): string[] {
  return Array.from({ length: N }, (_, i) => {
    const t = i / (N - 1)
    const startX = 696
    const startY = Math.round(i * 1.5)
    const endX = Math.round(696 - t * 480)
    const endY = 316
    const cp1x = Math.round(696 - t * 130)
    const cp1y = Math.round(startY + 35 + t * 55)
    const jitter = ((i % 5) - 2) * 7
    const cp2x = Math.round(endX + 25 + (1 - t) * 55 + jitter)
    const cp2y = Math.round(250 + t * 22 + jitter * 0.3)
    return `M ${startX} ${startY} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${endX} ${endY}`
  })
}

const PATHS = generatePaths()

export function BackgroundPaths() {
  const reduce = useReducedMotion()

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <svg
        style={{ width: '100%', height: '100%' }}
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMaxYMid slice"
        aria-hidden="true"
      >
        {PATHS.map((d, i) => {
          const targetOpacity = 0.18 + (i % 3) * 0.02
          // Base sits at ~40% of target — always visible, prevents empty corner
          const baseOpacity   = targetOpacity * 0.42
          const strokeWidth   = 0.5 + (i % 3) * 0.15
          const cycleDuration = 5 + (i % 3) // 5 / 6 / 7 s

          return (
            <g key={i}>
              {/* ── Base layer ─────────────────────────────────────────────
                  Full-length path, always present.
                  This ensures the top-right corner is never empty regardless
                  of where the traveling segment is in its loop.             */}
              <motion.path
                d={d}
                stroke="#6667AB"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: baseOpacity }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              />

              {/* ── Traveling segment ──────────────────────────────────────
                  45% of path length, loops back and forth continuously.
                  Brighter than the base, provides the moving highlight.     */}
              <motion.path
                d={d}
                stroke="#6667AB"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                initial={{ pathLength: 0.45, pathOffset: 0, opacity: 0 }}
                animate={
                  reduce
                    ? { pathLength: 0.45, pathOffset: 0, opacity: targetOpacity }
                    : { pathLength: 0.45, pathOffset: [0, 1, 0], opacity: targetOpacity }
                }
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        opacity: {
                          duration: 0.5,
                          delay:    i * 0.03,
                          ease:     'easeOut',
                        },
                        pathOffset: {
                          duration: cycleDuration,
                          delay:    i * 0.05,
                          repeat:   Infinity,
                          ease:     'linear',
                        },
                        pathLength: { duration: 0 },
                      }
                }
              />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
