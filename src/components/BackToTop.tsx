'use client'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ArrowUp } from '@phosphor-icons/react'
import { useLenis } from 'lenis/react'

const THRESHOLD = 560
const EASE = [0.25, 0.1, 0.25, 1] as const

export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const reduce = useReducedMotion()
  const lenis = useLenis()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > THRESHOLD)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleClick() {
    if (lenis) {
      lenis.scrollTo(0, { immediate: !!reduce, duration: reduce ? 0 : 1.1 })
    } else {
      window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={handleClick}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-[60] w-11 h-11 flex items-center justify-center bg-clay hover:bg-clay/85 transition-colors duration-150"
          initial={reduce ? undefined : { opacity: 0, y: 12 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          whileTap={reduce ? undefined : { scale: 0.94 }}
          transition={{ duration: reduce ? 0.15 : 0.3, ease: EASE }}>
          <ArrowUp weight="bold" size={18} className="text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
