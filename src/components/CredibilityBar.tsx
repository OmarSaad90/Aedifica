const PILLARS = [
  {
    label: 'Employer-informed design',
    subtext: 'Role relevance and interview commitments before cohort launch.',
  },
  {
    label: 'Advancement-focused preparation',
    subtext: 'Realistic entry roles with documented progression routes.',
  },
  {
    label: 'Outcome transparency',
    subtext:
      'Completion, credential, interview, placement, and retention results reported distinctly.',
  },
  {
    label: 'New Jersey focus',
    subtext:
      'Designed for the institutions, communities, and employers of the NJ / NY metropolitan construction market.',
  },
] as const

function PillarItem({ label, subtext }: { label: string; subtext: string }) {
  return (
    <div>
      <p
        className="text-[10.5px] uppercase tracking-[0.18em] text-datum font-medium mb-2.5 leading-none"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {label}
      </p>
      <p
        className="text-[13px] text-anthracite/60 leading-[1.65]"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {subtext}
      </p>
    </div>
  )
}

export function CredibilityBar() {
  return (
    <section className="bg-bone py-14" aria-label="Program commitments">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Eyebrow */}
        <p
          className="text-center text-[10px] uppercase tracking-[0.22em] text-quarry mb-10 leading-none"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          A Pathway Built Around Accountability
        </p>

        {/* Desktop: single row, dividers via divide-x */}
        <div className="hidden lg:flex items-start divide-x divide-sediment/30">
          {PILLARS.map(({ label, subtext }, i) => (
            <div key={i} className="flex-1 px-8 first:pl-0 last:pr-0">
              <PillarItem label={label} subtext={subtext} />
            </div>
          ))}
        </div>

        {/* Mobile: 2×2 grid */}
        <div className="grid grid-cols-2 lg:hidden">
          {PILLARS.map(({ label, subtext }, i) => (
            <div
              key={i}
              className={[
                i % 2 === 0 ? 'pr-5 border-r border-sediment/25' : 'pl-5',
                i < 2       ? 'pb-8 border-b border-sediment/25' : 'pt-8',
              ].join(' ')}
            >
              <PillarItem label={label} subtext={subtext} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
