'use client'
import { ReactLenis } from 'lenis/react'
import { ScrollToTop } from './ScrollToTop'

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, smoothWheel: true }}>
      <ScrollToTop />
      {children}
    </ReactLenis>
  )
}
