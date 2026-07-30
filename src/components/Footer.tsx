import Link from 'next/link'

const COLUMNS = [
  {
    heading: 'Programs',
    links: [
      { label: 'Aedifica Explore', href: '/programs/explore' },
      { label: 'Aedifica Pathway', href: '/programs/pathway' },
      { label: 'Aedifica Launch', href: '/programs/launch' },
      { label: 'Aedifica Rebuild', href: '/programs/rebuild' },
      { label: 'Talent Pipeline', href: '/programs/talent-pipeline' },
      { label: 'Compare programs', href: '/programs#compare' },
    ],
  },
  {
    heading: 'Evidence',
    links: [
      { label: 'Impact framework', href: '/impact' },
      { label: 'Aedifica Research', href: '/research' },
      { label: 'Bridging Brilliance', href: '/partner' },
      { label: 'Resilient Futures', href: '/programs/pathway#resilient' },
      { label: 'BUILD NJ GREEN', href: '/programs/launch#buildnjgreen' },
      { label: 'Scholar experience', href: '/experience' },
    ],
  },
  {
    heading: 'Aedifica',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Values', href: '/about#values' },
      { label: 'Origin & history', href: '/about#history' },
      { label: 'The founders', href: '/about#founders' },
      { label: 'Principles', href: '/about#principles' },
      { label: 'Access & funding', href: '/about#access' },
      { label: 'FAQ', href: '/about#faq' },
    ],
  },
  {
    heading: 'Get involved',
    links: [
      { label: 'Who we work with', href: '/partner#serve-h2' },
      { label: 'For Families', href: '/families' },
      { label: 'For Vocational & Trade Schools', href: '/trade-schools' },
      { label: 'Partner', href: '/partner' },
      { label: 'Contact', href: '/partner#contact-form' },
      { label: 'Accessibility: skip to content', href: '#main' },
    ],
  },
] as const

export function Footer() {
  return (
    <footer className="bg-anthracite">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-4 lg:pt-11 lg:pb-5">

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_3.1fr] gap-10 lg:gap-16 mb-5 lg:mb-6">

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
              className="text-[1.5rem] text-wine-light not-italic leading-[1.2] max-w-[16ch] mt-3"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
              From foundations to futures.
            </p>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
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
            &copy; {new Date().getFullYear()} Aedifica, New Jersey / New York metro service area
          </p>
          <p
            className="text-[12px] text-white/50"
            style={{ fontFamily: 'var(--font-body)' }}>
            Construction-management workforce, built from overlooked talent.
          </p>
          <p
            className="text-[12px] text-white/50"
            style={{ fontFamily: 'var(--font-body)' }}>
            <Link href="/" className="hover:text-white/80 transition-colors duration-150">Privacy Policy</Link>
            {' · '}
            <Link href="/" className="hover:text-white/80 transition-colors duration-150">Terms of Use</Link>
            {' · '}
            <Link href="#main" className="hover:text-white/80 transition-colors duration-150">Accessibility Statement</Link>
          </p>
        </div>

      </div>
    </footer>
  )
}
