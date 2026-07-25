import Link from 'next/link'

const COLUMNS = [
  {
    heading: 'Programs',
    links: [
      { label: 'Explore', href: '/programs/explore' },
      { label: 'Pathway', href: '/programs/pathway' },
      { label: 'Launch', href: '/programs/launch' },
      { label: 'Rebuild', href: '/programs/rebuild' },
      { label: 'Talent Pipeline', href: '/programs/talent-pipeline' },
      { label: 'View all programs', href: '/programs' },
    ],
  },
  {
    heading: 'Evidence',
    links: [
      { label: 'Impact Framework', href: '/impact' },
      { label: 'Aedifica Research', href: '/research' },
      { label: 'Scholar Experience', href: '/experience' },
      { label: 'Bridging Brilliance', href: '/curriculum/bridging-brilliance' },
    ],
  },
  {
    heading: 'Aedifica',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Our Values', href: '/about#about-values-h2' },
      { label: 'Who We Serve', href: '/partner#serve-h2' },
      { label: 'Access & Funding', href: '/about#access-h2' },
      { label: 'FAQ', href: '/about#faq-h2' },
    ],
  },
  {
    heading: 'Get Involved',
    links: [
      { label: 'For Families', href: '/families' },
      { label: 'For Vocational & Trade Schools', href: '/trade-schools' },
      { label: 'Partner With Us', href: '/partner' },
      { label: 'Contact', href: '/partner' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-anthracite">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4 lg:pt-11 lg:pb-5">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.6fr] gap-10 lg:gap-20 mb-5 lg:mb-6">

          {/* Brand */}
          <div>
            <Link href="/"
              className="inline-block mb-4"
              aria-label="Aedifica home">
              <span
                className="text-[14px] tracking-[0.06em] text-white uppercase"
                style={{ fontFamily: 'var(--font-wordmark)', fontWeight: 400 }}>
                Aedifica
              </span>
            </Link>
            <p
              className="text-[13px] text-white/60 leading-[1.65] max-w-[28ch]"
              style={{ fontFamily: 'var(--font-body)' }}>
              Earth. Engineers. Education.
            </p>
            <p
              className="text-[13px] text-white/75 italic leading-[1.6] max-w-[28ch] mt-2"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
              From foundations to futures.
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {COLUMNS.map(({ heading, links }) => (
              <div key={heading}>
                <p
                  className="text-[10px] text-white/55 uppercase tracking-[0.18em] mb-3 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {heading}
                </p>
                <ul className="space-y-2.5 list-none">
                  {links.map(({ label, href }) => (
                    <li key={label}>
                      <Link href={href}
                        className="text-[13px] text-white/55 hover:text-white/90 transition-colors duration-150 leading-none"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p
            className="text-[12px] text-white/50"
            style={{ fontFamily: 'var(--font-body)' }}>
            &copy; {new Date().getFullYear()} Aedifica &middot; New Jersey / New York metro service area
          </p>
          <p
            className="text-[12px] text-white/50"
            style={{ fontFamily: 'var(--font-body)' }}>
            Construction-management workforce, built from overlooked talent.
          </p>
        </div>

      </div>
    </footer>
  )
}
