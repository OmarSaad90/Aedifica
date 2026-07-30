'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { List, X, CaretDown } from '@phosphor-icons/react'
import { motion, AnimatePresence, useReducedMotion, useScroll, useMotionValueEvent } from 'motion/react'

type NavChild = { label: string; to: string; dot?: string }
type NavGroup = {
  type: 'group'
  id: string
  label: string
  to?: string
  children: NavChild[]
}
type NavLink = { type: 'link'; label: string; to: string }
type NavItem = NavGroup | NavLink

// Single ordered sequence, after Home — matches his nav order exactly:
// Programs ▾, Scholar Experience, Who it's for ▾, Impact, Research, About, Contact.
const NAV_ITEMS: NavItem[] = [
  {
    type: 'group',
    id: 'programs',
    label: 'Programs',
    children: [
      { label: 'Explore',         to: '/programs/explore',         dot: 'bg-datum'         },
      { label: 'Pathway',         to: '/programs/pathway',         dot: 'bg-quarry'        },
      { label: 'Launch',          to: '/programs/launch',          dot: 'bg-sediment'      },
      { label: 'Rebuild',         to: '/programs/rebuild',         dot: 'bg-rebuild'       },
      { label: 'Talent Pipeline', to: '/programs/talent-pipeline', dot: 'bg-pipeline'       },
    ],
    to: '/programs',
  },
  { type: 'link', label: 'Scholar Experience', to: '/experience' },
  {
    type: 'group',
    id: 'who-its-for',
    label: "Who it's for",
    children: [
      { label: 'For Families',                    to: '/families'      },
      { label: 'For Vocational & Trade Schools',   to: '/trade-schools' },
    ],
  },
  { type: 'link', label: 'Impact',   to: '/impact'  },
  { type: 'link', label: 'Research', to: '/research' },
  { type: 'link', label: 'About',    to: '/about'    },
  { type: 'link', label: 'Contact',  to: '/partner'  },
]

const EASE = [0.25, 0.1, 0.25, 1] as const

const WORDMARK_LOGO = '/images/logo-wordmark.png'

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

// TEST: animated logo videos. Drop files into public/videos/logos/ using these
// exact names to try them; anything missing silently falls back to the static
// PNG above, so partial drops are safe. See public/videos/logos/README.txt.
const SERVICE_LOGO_VIDEOS: Record<string, string> = {
  '/':                         '/videos/logos/logo-general.mp4',
  '/programs/rebuild':         '/videos/logos/logo-rebuild-raw.webm', // TEST: client's raw export, unprocessed
  '/programs/launch':          '/videos/logos/logo-launch-raw.webm',  // TEST: client's raw export, unprocessed
  '/programs/pathway':         '/videos/logos/logo-pathway-raw.webm', // TEST: client's raw export, unprocessed
  '/programs/talent-pipeline': '/videos/logos/logo-general.mp4',
  '/programs/explore':         '/videos/logos/logo-explore-raw.webm', // TEST: client's raw export, unprocessed
}
const DEFAULT_LOGO_VIDEO = '/videos/logos/logo-general.mp4'

// TEST: tries the looping video logo first; if the file is missing (404) or
// fails to load, falls back to the static PNG with no visible flash.
function NavLogo({ videoSrc, imgSrc, scale }: { videoSrc: string; imgSrc: string; scale: number }) {
  const [videoFailed, setVideoFailed] = useState(false)

  if (videoFailed) {
    return (
      <img
        src={imgSrc}
        alt="Aedifica"
        className="h-full w-auto"
        style={{ mixBlendMode: 'multiply', transform: `scale(${scale})`, transformOrigin: 'center' }}
      />
    )
  }

  return (
    <video
      key={videoSrc}
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-auto"
      style={{ mixBlendMode: 'multiply', transform: `scale(${scale})`, transformOrigin: 'center' }}
      onError={() => setVideoFailed(true)}
      aria-label="Aedifica">
      <source src={videoSrc} type={videoSrc.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
    </video>
  )
}

export function Navbar() {
  const [mobileOpen, setMobileOpen]             = useState(false)
  const [openGroup, setOpenGroup]               = useState<string | null>(null)
  const [mobileOpenGroup, setMobileOpenGroup]   = useState<string | null>(null)
  const closeTimer  = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const triggerRefs = useRef<Record<string, HTMLButtonElement | HTMLAnchorElement | null>>({})
  const reduce      = useReducedMotion()
  const pathname = usePathname()
  const logoSrc = SERVICE_LOGOS[pathname] ?? DEFAULT_LOGO
  const logoVideoSrc = SERVICE_LOGO_VIDEOS[pathname] ?? DEFAULT_LOGO_VIDEO
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
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6 py-3">

        {/* Logo + wordmark + tagline, stacked two rows so nav links can center against the whole block */}
        <div className="flex flex-col gap-1 flex-shrink-0">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-11 w-[33px] flex-shrink-0 overflow-hidden flex items-center justify-center">
                <NavLogo videoSrc={logoVideoSrc} imgSrc={logoSrc} scale={LOGO_SCALE[logoSrc] ?? 1} />
              </div>
              <img
                src={WORDMARK_LOGO}
                alt="Aedifica"
                className="h-6 w-auto flex-shrink-0"
                style={{ mixBlendMode: 'multiply' }} />
            </Link>
            <span className="hidden xl:block w-px h-5 bg-anthracite/15 flex-shrink-0" aria-hidden="true" />
            <span
              className="hidden xl:block text-[13px] italic text-anthracite/70 whitespace-nowrap tracking-[-0.01em]"
              style={{ fontFamily: 'var(--font-heading)' }}>
              We build the builders.
            </span>
          </div>
          <span
            className="text-[10px] uppercase tracking-[0.14em] text-anthracite/60 font-semibold whitespace-nowrap"
            style={{ fontFamily: 'var(--font-body)' }}>
            Earth. Engineers. Education.
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Primary">

          <Link href="/"
            className="text-[13px] text-anthracite/70 hover:text-anthracite hover:underline hover:underline-offset-4 hover:decoration-anthracite/25 transition-colors duration-150 tracking-[-0.01em] whitespace-nowrap">
            Home
          </Link>

          {NAV_ITEMS.map((item) => {
            if (item.type === 'link') {
              return (
                <Link key={item.to} href={item.to}
                  className="text-[13px] text-anthracite/70 hover:text-anthracite hover:underline hover:underline-offset-4 hover:decoration-anthracite/25 transition-colors duration-150 tracking-[-0.01em] whitespace-nowrap">
                  {item.label}
                </Link>
              )
            }
            const group = item
            return (
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

                {group.to ? (
                  // Groups with a landing page: the label itself navigates there
                  // (hover already opens the flyout for browsing, this is for clicking through).
                  <Link
                    ref={(el) => { triggerRefs.current[group.id] = el }}
                    href={group.to}
                    className="flex items-center gap-1 text-[13px] text-anthracite/70 hover:text-anthracite transition-colors duration-150 tracking-[-0.01em] whitespace-nowrap cursor-pointer"
                    aria-expanded={openGroup === group.id}
                    aria-haspopup="true"
                    style={{ fontFamily: 'var(--font-body)' }}
                    onFocus={() => openDesktop(group.id)}
                    onClick={() => setOpenGroup(null)}>
                    {group.label}
                    <CaretDown
                      size={11}
                      weight="bold"
                      className={`transition-transform duration-200 ${openGroup === group.id ? 'rotate-180' : ''}`} />
                  </Link>
                ) : (
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
                )}

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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden -mr-3 p-3 text-anthracite cursor-pointer"
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

            {NAV_ITEMS.map((item) => {
              if (item.type === 'link') {
                return (
                  <Link key={item.to} href={item.to}
                    className="text-[14px] text-anthracite/70 py-3 border-b border-sediment/10"
                    style={{ fontFamily: 'var(--font-body)' }}
                    onClick={closeMobile}>
                    {item.label}
                  </Link>
                )
              }
              const group = item
              return (
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
