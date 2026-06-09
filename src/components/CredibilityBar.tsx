import { Buildings, ArrowCircleUp, Eye, MapPin, type Icon } from '@phosphor-icons/react'

type Pillar = {
  Icon: Icon
  label: string
  subtext: string
}

const PILLARS: Pillar[] = [
  {
    Icon: Buildings,
    label: 'Employer-informed design',
    subtext: 'Role relevance and interview commitments before cohort launch.',
  },
  {
    Icon: ArrowCircleUp,
    label: 'Advancement-focused preparation',
    subtext: 'Realistic entry roles with documented progression routes.',
  },
  {
    Icon: Eye,
    label: 'Outcome transparency',
    subtext: 'Completion, credential, interview, placement, and retention results reported distinctly.',
  },
  {
    Icon: MapPin,
    label: 'New Jersey focus',
    subtext: 'Designed for the institutions, communities, and employers of the NJ / NY metropolitan construction market.',
  },
]

function PillarItem({ Icon: IconComp, label, subtext }: Pillar) {
  return (
    <div>
      <IconComp
        size={20}
        weight="regular"
        className="text-datum mb-3"
        aria-hidden={true}
      />
      <p
        className="text-[14px] text-datum font-medium mb-2 leading-snug tracking-[-0.01em]"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {label}
      </p>
      <p
        className="text-[13px] text-anthracite/70 leading-[1.65]"
        style={{ fontFamily: 'var(--font-body)' }}
      >
        {subtext}
      </p>
    </div>
  )
}

export function CredibilityBar() {
  return (
    <section className="bg-bone py-14 relative z-10 -mt-10 lg:-mt-14 border-t border-datum/20" aria-label="Program commitments">
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Eyebrow */}
        <p
          className="text-center text-[11.5px] uppercase tracking-[0.18em] text-anthracite/55 mb-10 leading-none"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          A Pathway Built Around Accountability
        </p>

        {/* Desktop: single row, dividers via divide-x */}
        <div className="hidden lg:flex items-start divide-x divide-sediment/30">
          {PILLARS.map((pillar, i) => (
            <div key={i} className="flex-1 px-8 first:pl-0 last:pr-0">
              <PillarItem {...pillar} />
            </div>
          ))}
        </div>

        {/* Mobile: 2×2 grid */}
        <div className="grid grid-cols-2 lg:hidden">
          {PILLARS.map((pillar, i) => (
            <div
              key={i}
              className={[
                i % 2 === 0 ? 'pr-5 border-r border-sediment/25' : 'pl-5',
                i < 2       ? 'pb-8 border-b border-sediment/25' : 'pt-8',
              ].join(' ')}
            >
              <PillarItem {...pillar} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
