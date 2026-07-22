'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { List, X, CaretDown } from '@phosphor-icons/react'
import { motion, AnimatePresence, useReducedMotion, useScroll, useMotionValueEvent } from 'motion/react'

type NavChild = { label: string; to: string; dot?: string }
type NavGroup = {
  id: string
  label: string
  children: NavChild[]
  footer?: { label: string; to: string }
}

const NAV_GROUPS: NavGroup[] = [
  {
    id: 'programs',
    label: 'Programs',
    children: [
      { label: 'Explore',         to: '/programs/explore',         dot: 'bg-datum'         },
      { label: 'Pathway',         to: '/programs/pathway',         dot: 'bg-quarry'        },
      { label: 'Launch',          to: '/programs/launch',          dot: 'bg-sediment'      },
      { label: 'Rebuild',         to: '/programs/rebuild',         dot: 'bg-rebuild'       },
      { label: 'Talent Pipeline', to: '/programs/talent-pipeline', dot: 'bg-anthracite/30' },
    ],
    footer: { label: 'View all programs', to: '/programs' },
  },
]

// Flat, single-level links after Home + the Programs dropdown — matches his nav order
const FLAT_LINKS: { label: string; to: string }[] = [
  { label: 'Learner Experience', to: '/experience' },
  { label: 'For Families',       to: '/families'   },
  { label: 'Impact',             to: '/impact'     },
  { label: 'Research',           to: '/research'   },
  { label: 'About Us',           to: '/about'      },
  { label: 'Contact',            to: '/partner'    },
]

const EASE = [0.25, 0.1, 0.25, 1] as const

const SERVICE_LOGOS: Record<string, string> = {
  '/programs/rebuild':         '/images/logo-rebuild.png',
  '/programs/launch':          '/images/logo-talent.png',
  '/programs/pathway':         '/images/logo-pathway.png',
  '/programs/talent-pipeline': '/images/logo-talent.png',
  '/programs/explore':         '/images/logo-explore.png',
}
const DEFAULT_LOGO = '/images/logo-rebuild.png'

// Each PNG has different whitespace padding around the frame — scale compensates
const LOGO_SCALE: Record<string, number> = {
  '/images/logo-rebuild.png':  1.0,
  '/images/logo-launch.png':   1.15,
  '/images/logo-pathway.png':  1.11,
  '/images/logo-talent.png':   1.0,
  '/images/logo-explore.png':  1.0,
}

export function Navbar() {
  const [mobileOpen, setMobileOpen]             = useState(false)
  const [openGroup, setOpenGroup]               = useState<string | null>(null)
  const [mobileOpenGroup, setMobileOpenGroup]   = useState<string | null>(null)
  const closeTimer  = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const reduce      = useReducedMotion()
  const pathname = usePathname()
  const logoSrc = SERVICE_LOGOS[pathname] ?? DEFAULT_LOGO
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  useMotionValueEvent(scrollY, 'change', (y) => setScrolled(y > 8))

  const openDesktop = (id: string) => {
    clearTimeout(closeTimer.current)
    setOpenGroup(id)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenGroup(null), 120)
  }
  const closeMobile = () => {
    setMobileOpen(false)
    setMobileOpenGroup(null)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-snow border-b border-sediment/20 transition-shadow duration-200 ${scrolled ? 'shadow-[0_2px_12px_rgba(45,45,49,0.07)]' : ''}`}>
      {/* Program spec strip — five channels, Explore→Pathway→Launch→Rebuild→Pipeline, house signature */}
      <div className="flex h-1.5 w-full" aria-hidden="true">
        <span className="flex-1 bg-datum" />
        <span className="flex-1 bg-quarry" />
        <span className="flex-1 bg-sediment" />
        <span className="flex-1 bg-rebuild" />
        <span className="flex-1 bg-pipeline" />
      </div>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo + wordmark + tagline */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-9 w-[27px] flex-shrink-0 overflow-hidden flex items-center justify-center">
              <img
                src={logoSrc}
                alt="Aedifica"
                className="h-full w-auto"
                style={{
                  mixBlendMode: 'multiply',
                  transform: `scale(${LOGO_SCALE[logoSrc] ?? 1})`,
                  transformOrigin: 'center',
                }}
              />
            </div>
            <span
              className="text-[14px] tracking-[0.06em] text-anthracite uppercase"
              style={{ fontFamily: 'var(--font-wordmark)', fontWeight: 400 }}>
              Aedifica
            </span>
          </Link>
          <span className="hidden lg:block w-px h-3.5 bg-anthracite/20 flex-shrink-0" aria-hidden="true" />
          <span
            className="hidden lg:block text-[12px] text-anthracite/85 italic leading-none"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
            We build the builders
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Primary">

          <Link href="/"
            className="text-[13px] text-anthracite/70 hover:text-anthracite hover:underline hover:underline-offset-4 hover:decoration-anthracite/25 transition-colors duration-150 tracking-[-0.01em] whitespace-nowrap">
            Home
          </Link>

          {NAV_GROUPS.map((group) => (
            <div
              key={group.id}
              className="relative"
              onMouseEnter={() => openDesktop(group.id)}
              onMouseLeave={scheduleClose}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setOpenGroup(null)
                  triggerRefs.current[group.id]?.focus()
                }
              }}>

              <button
                ref={(el) => { triggerRefs.current[group.id] = el }}
                className="flex items-center gap-1 text-[13px] text-anthracite/70 hover:text-anthracite transition-colors duration-150 tracking-[-0.01em] whitespace-nowrap cursor-pointer"
                aria-expanded={openGroup === group.id}
                aria-haspopup="true"
                style={{ fontFamily: 'var(--font-body)' }}
                onClick={() => setOpenGroup(openGroup === group.id ? null : group.id)}>
                {group.label}
                <CaretDown
                  size={11}
                  weight="bold"
                  className={`transition-transform duration-200 ${openGroup === group.id ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {openGroup === group.id && (
                  <motion.div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[220px] bg-snow border border-sediment/25 shadow-sm py-2"
                    initial={reduce ? undefined : { opacity: 0, y: -6 }}
                    animate={reduce ? undefined : { opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -6 }}
                    transition={reduce ? undefined : { duration: 0.16, ease: EASE }}
                    onMouseEnter={() => openDesktop(group.id)}
                    onMouseLeave={scheduleClose}
                    role="menu">

                    {group.children.map(({ label, to, dot }) => (
                      <Link
                        key={to}
                        href={to}
                        role="menuitem"
                        className="flex items-center gap-2.5 px-4 py-1.5 text-[13px] text-anthracite/70 hover:text-anthracite hover:bg-bone transition-colors duration-100"
                        style={{ fontFamily: 'var(--font-body)' }}
                        onClick={() => setOpenGroup(null)}>
                        {dot && (
                          <span className={`flex-shrink-0 w-[5px] h-[5px] ${dot}`} aria-hidden="true" />
                        )}
                        {label}
                      </Link>
                    ))}

                    {group.footer && (
                      <>
                        <div className="my-1.5 border-t border-sediment/15" />
                        <Link href={group.footer.to}
                          role="menuitem"
                          className="flex items-center px-4 py-1.5 text-[11.5px] text-datum hover:text-datum/75 transition-colors duration-100 tracking-[-0.005em]"
                          style={{ fontFamily: 'var(--font-body)' }}
                          onClick={() => setOpenGroup(null)}>
                          {group.footer.label} →
                        </Link>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {/* Flat links — no dropdown */}
          {FLAT_LINKS.map(({ label, to }) => (
            <Link key={to} href={to}
              className="text-[13px] text-anthracite/70 hover:text-anthracite hover:underline hover:underline-offset-4 hover:decoration-anthracite/25 transition-colors duration-150 tracking-[-0.01em] whitespace-nowrap">
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden -mr-3 p-3 text-anthracite ml-auto cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}>
          {mobileOpen
            ? <X size={20} weight="regular" />
            : <List size={20} weight="regular" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden bg-snow border-t border-sediment/15 px-6 py-5 flex flex-col"
            initial={reduce ? undefined : { opacity: 0, y: -6 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -6 }}
            transition={reduce ? undefined : { duration: 0.18, ease: EASE }}>

            <Link href="/"
              className="text-[14px] text-anthracite/70 py-3 border-b border-sediment/10"
              style={{ fontFamily: 'var(--font-body)' }}
              onClick={closeMobile}>
              Home
            </Link>

            {NAV_GROUPS.map((group) => (
              <div key={group.id}>
                <button
                  className="w-full flex items-center justify-between text-[14px] text-anthracite/70 py-3 border-b border-sediment/10 cursor-pointer"
                  onClick={() => setMobileOpenGroup(mobileOpenGroup === group.id ? null : group.id)}
                  aria-expanded={mobileOpenGroup === group.id}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {group.label}
                  <CaretDown
                    size={12}
                    weight="bold"
                    className={`text-anthracite/40 transition-transform duration-200 ${mobileOpenGroup === group.id ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {mobileOpenGroup === group.id && (
                    <motion.div
                      className="flex flex-col bg-bone -mx-6 px-8 py-2 border-b border-sediment/10"
                      initial={reduce ? undefined : { opacity: 0, height: 0 }}
                      animate={reduce ? undefined : { opacity: 1, height: 'auto' }}
                      exit={reduce ? undefined : { opacity: 0, height: 0 }}
                      transition={reduce ? undefined : { duration: 0.2, ease: EASE }}>
                      {group.children.map(({ label, to, dot }) => (
                        <Link
                          key={to}
                          href={to}
                          className="flex items-center gap-2.5 py-2.5 text-[13.5px] text-anthracite/70"
                          style={{ fontFamily: 'var(--font-body)' }}
                          onClick={closeMobile}>
                          {dot && (
                            <span className={`flex-shrink-0 w-[5px] h-[5px] ${dot}`} aria-hidden="true" />
                          )}
                          {label}
                        </Link>
                      ))}
                      {group.footer && (
                        <Link href={group.footer.to}
                          className="py-2.5 pb-3 text-[12px] text-datum"
                          style={{ fontFamily: 'var(--font-body)' }}
                          onClick={closeMobile}>
                          {group.footer.label} →
                        </Link>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Flat mobile links */}
            {FLAT_LINKS.map(({ label, to }) => (
              <Link key={to} href={to}
                className="text-[14px] text-anthracite/70 py-3 border-b border-sediment/10"
                style={{ fontFamily: 'var(--font-body)' }}
                onClick={closeMobile}>
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
