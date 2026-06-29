import Link from 'next/link'

const COLUMNS = [
  {
    heading: 'Build the Pathway',
    links: [
      { label: 'Rebuild', href: '/services/rebuild' },
      { label: 'Launch', href: '/services/launch' },
      { label: 'Pathway', href: '/services/pathway' },
      { label: 'Talent Pipeline', href: '/services/talent-pipeline' },
      { label: 'Explore', href: '/services/explore' },
    ],
  },
  {
    heading: 'Evidence & Accountability',
    links: [
      { label: 'Projects & Impact', href: '/impact' },
      { label: 'Bridging Brilliance', href: '/curriculum/bridging-brilliance' },
      { label: 'Insights & Research', href: '/insights' },
      { label: 'Outcome Reporting Commitment', href: '/impact' },
    ],
  },
  {
    heading: 'Partner',
    links: [
      { label: 'Education', href: '/partner' },
      { label: 'Workforce & Community', href: '/partner' },
      { label: 'Employers', href: '/partner' },
      { label: 'Funding & State', href: '/partner' },
    ],
  },
  {
    heading: 'Organization',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact', href: '/partner' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-anthracite">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-5 lg:pt-9 lg:pb-6">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.6fr] gap-8 lg:gap-20 mb-4 lg:mb-5">

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
              We build the builders.
            </p>
            <p
              className="text-[12.5px] text-white/50 leading-[1.7] max-w-[30ch] mt-3"
              style={{ fontFamily: 'var(--font-body)' }}>
              Construction-management workforce pathways for New Jersey.
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
                <ul className="space-y-2 list-none">
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
        <div className="border-t border-white/10 pt-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p
            className="text-[12px] text-white/50"
            style={{ fontFamily: 'var(--font-body)' }}>
            &copy; {new Date().getFullYear()} Aedifica. All rights reserved.
          </p>
          <p
            className="text-[12px] text-white/50"
            style={{ fontFamily: 'var(--font-body)' }}>
            New Jersey · Construction-Management Workforce Pathways
          </p>
        </div>

      </div>
    </footer>
  )
}
