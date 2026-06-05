import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { List, X, CaretDown } from '@phosphor-icons/react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

const SERVICES_Y1 = [
  { label: 'Rebuild',  to: '/services/rebuild', dot: 'bg-datum'  },
  { label: 'Launch',   to: '/services/launch',  dot: 'bg-patina' },
] as const

const SERVICES_Y2 = [
  { label: 'Pathway',         to: '/services/pathway'         },
  { label: 'Talent Pipeline', to: '/services/talent-pipeline' },
  { label: 'Explore',         to: '/services/explore'         },
] as const

const otherLinks = [
  { label: 'Impact',          to: '/impact'   },
  { label: 'Insights',        to: '/insights' },
  { label: 'About',           to: '/about'    },
  { label: 'Partner With Us', to: '/partner'  },
]

const EASE = [0.25, 0.1, 0.25, 1] as const

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const reduce = useReducedMotion()

  const openServices = () => {
    clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 120)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-snow border-b border-sediment/20">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between gap-6">

        {/* Logo + wordmark */}
        <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
          <LogoMark />
          <div className="flex items-baseline gap-1.5">
            <span
              className="text-[14.5px] font-medium tracking-[0.07em] text-anthracite"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 500 }}>
              AEDIFICA
            </span>
            <span className="hidden xl:contents">
              <span className="text-sediment text-[11px] select-none">·</span>
              <span
                className="text-sediment text-[11px] italic"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                We build the builders.
              </span>
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6" aria-label="Primary">

          {/* Services — hover flyout */}
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={scheduleClose}>
            <Link
              to="/services"
              className="flex items-center gap-1 text-[13px] text-anthracite/55 hover:text-anthracite transition-colors duration-150 tracking-[-0.01em] whitespace-nowrap"
              aria-expanded={servicesOpen}
              aria-haspopup="true">
              Services
              <CaretDown
                size={11}
                weight="bold"
                className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[220px] bg-snow border border-sediment/25 shadow-sm py-2"
                  initial={reduce ? undefined : { opacity: 0, y: -6 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -6 }}
                  transition={reduce ? undefined : { duration: 0.16, ease: EASE }}
                  onMouseEnter={openServices}
                  onMouseLeave={scheduleClose}
                  role="menu">

                  {/* Year 1 */}
                  <p
                    className="px-4 pt-1.5 pb-1 text-[9.5px] text-anthracite/35 uppercase tracking-[0.16em] select-none"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    Year 1
                  </p>
                  {SERVICES_Y1.map(({ label, to, dot }) => (
                    <Link
                      key={to}
                      to={to}
                      role="menuitem"
                      className="flex items-center gap-2.5 px-4 py-1.5 text-[13px] text-anthracite/65 hover:text-anthracite hover:bg-bone transition-colors duration-100"
                      style={{ fontFamily: 'var(--font-body)' }}
                      onClick={() => setServicesOpen(false)}>
                      <span className={`flex-shrink-0 w-[5px] h-[5px] ${dot}`} aria-hidden="true" />
                      {label}
                    </Link>
                  ))}

                  <div className="my-1.5 border-t border-sediment/15" />

                  {/* Year 2+ */}
                  <p
                    className="px-4 pb-1 text-[9.5px] text-anthracite/35 uppercase tracking-[0.16em] select-none"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    Expansion · Year 2+
                  </p>
                  {SERVICES_Y2.map(({ label, to }) => (
                    <Link
                      key={to}
                      to={to}
                      role="menuitem"
                      className="flex items-center gap-2.5 px-4 py-1.5 text-[13px] text-anthracite/45 hover:text-anthracite/70 hover:bg-bone transition-colors duration-100"
                      style={{ fontFamily: 'var(--font-body)' }}
                      onClick={() => setServicesOpen(false)}>
                      <span className="flex-shrink-0 w-[5px] h-[5px] bg-sediment/60" aria-hidden="true" />
                      {label}
                    </Link>
                  ))}

                  <div className="my-1.5 border-t border-sediment/15" />
                  <Link
                    to="/services"
                    role="menuitem"
                    className="flex items-center px-4 py-1.5 text-[11.5px] text-datum hover:text-datum/75 transition-colors duration-100 tracking-[-0.005em]"
                    style={{ fontFamily: 'var(--font-body)' }}
                    onClick={() => setServicesOpen(false)}>
                    View all services →
                  </Link>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {otherLinks.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-[13px] text-anthracite/55 hover:text-anthracite hover:underline hover:underline-offset-4 hover:decoration-anthracite/25 transition-colors duration-150 tracking-[-0.01em] whitespace-nowrap">
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          to="/partner"
          className="hidden lg:inline-flex items-center flex-shrink-0 bg-patina text-white text-[12.5px] font-medium px-4 py-2 tracking-[-0.005em] hover:bg-patina/85 transition-colors duration-150 whitespace-nowrap">
          Start a Partnership Conversation
        </Link>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-anthracite ml-auto cursor-pointer"
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

            {/* Services expandable */}
            <button
              className="flex items-center justify-between text-[14px] text-anthracite/70 py-3 border-b border-sediment/10 cursor-pointer"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              aria-expanded={mobileServicesOpen}>
              <span style={{ fontFamily: 'var(--font-body)' }}>Services</span>
              <CaretDown
                size={12}
                weight="bold"
                className={`text-anthracite/40 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {mobileServicesOpen && (
                <motion.div
                  className="flex flex-col bg-bone -mx-6 px-8 py-2 border-b border-sediment/10"
                  initial={reduce ? undefined : { opacity: 0, height: 0 }}
                  animate={reduce ? undefined : { opacity: 1, height: 'auto' }}
                  exit={reduce ? undefined : { opacity: 0, height: 0 }}
                  transition={reduce ? undefined : { duration: 0.2, ease: EASE }}>
                  <p
                    className="text-[10px] text-anthracite/35 uppercase tracking-[0.16em] pt-3 pb-1 select-none"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    Year 1
                  </p>
                  {SERVICES_Y1.map(({ label, to, dot }) => (
                    <Link
                      key={to}
                      to={to}
                      className="flex items-center gap-2.5 py-2.5 text-[13.5px] text-anthracite/70"
                      style={{ fontFamily: 'var(--font-body)' }}
                      onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}>
                      <span className={`flex-shrink-0 w-[5px] h-[5px] ${dot}`} aria-hidden="true" />
                      {label}
                    </Link>
                  ))}
                  <p
                    className="text-[10px] text-anthracite/35 uppercase tracking-[0.16em] pt-3 pb-1 select-none"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    Expansion · Year 2+
                  </p>
                  {SERVICES_Y2.map(({ label, to }) => (
                    <Link
                      key={to}
                      to={to}
                      className="flex items-center gap-2.5 py-2.5 text-[13.5px] text-anthracite/45"
                      style={{ fontFamily: 'var(--font-body)' }}
                      onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}>
                      <span className="flex-shrink-0 w-[5px] h-[5px] bg-sediment/60" aria-hidden="true" />
                      {label}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="py-2.5 pb-3 text-[12px] text-datum"
                    style={{ fontFamily: 'var(--font-body)' }}
                    onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}>
                    View all services →
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>

            {otherLinks.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="text-[14px] text-anthracite/70 py-3 border-b border-sediment/10 last:border-0"
                style={{ fontFamily: 'var(--font-body)' }}
                onClick={() => setMobileOpen(false)}>
                {label}
              </Link>
            ))}

            <Link
              to="/partner"
              className="mt-4 bg-patina text-white text-[13.5px] font-medium px-4 py-3 text-center hover:bg-patina/85 transition-colors duration-150"
              onClick={() => setMobileOpen(false)}>
              Start a Partnership Conversation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

function LogoMark() {
  return (
    <svg
      width="22"
      height="26"
      viewBox="0 0 110 130"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      <path d="M 15 120 L 15 65 Q 15 12, 55 12 Q 95 12, 95 65 L 95 120 L 78 120 L 78 65 Q 78 28, 55 28 Q 32 28, 32 65 L 32 120 Z" fill="#2D2D31"/>
      <path d="M 44 28 L 66 28 L 72 52 L 38 52 Z" fill="#6667AB"/>
      <rect x="32" y="78" width="46" height="7" fill="#2D2D31"/>
    </svg>
  )
}
