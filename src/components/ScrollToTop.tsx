'use client'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { useLenis } from 'lenis/react'

export function ScrollToTop() {
  const pathname = usePathname()
  const lenis = useLenis()

  useEffect(() => {
    const hash = window.location.hash

    const run = () => {
      const target = hash ? document.querySelector(hash) : null

      if (target) {
        if (lenis) {
          // The new route's content just mounted — Lenis' cached scroll
          // height is still the old page's until it re-measures, so a scroll
          // to a target past the old page's bottom gets silently clamped.
          lenis.resize()
          lenis.scrollTo(target as HTMLElement, { immediate: true, offset: -96 })
        } else {
          target.scrollIntoView()
        }
        return
      }

      if (lenis) {
        lenis.scrollTo(0, { immediate: true })
      } else {
        window.scrollTo(0, 0)
      }
    }

    // Defer a frame so the new page has fully laid out before we measure/scroll.
    const raf = requestAnimationFrame(run)
    return () => cancelAnimationFrame(raf)
  }, [pathname, lenis])

  return null
}
