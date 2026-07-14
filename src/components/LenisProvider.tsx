'use client'
import { useSyncExternalStore } from 'react'
import { ReactLenis } from 'lenis/react'
import { ScrollToTop } from './ScrollToTop'

// Respect prefers-reduced-motion: Lenis smoothing is skipped entirely for
// users who ask for reduced motion (native scrolling instead).
const QUERY = '(prefers-reduced-motion: reduce)'

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY)
  mql.addEventListener('change', callback)
  return () => mql.removeEventListener('change', callback)
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches
}

// Server snapshot: assume no preference; corrected on hydration.
function getServerSnapshot() {
  return false
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const reduceMotion = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)

  if (reduceMotion) {
    return (
      <>
        <ScrollToTop />
        {children}
      </>
    )
  }

  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <ScrollToTop />
      {children}
    </ReactLenis>
  )
}
