'use client'

const FUNDING = [
  { name: 'Pre-Apprenticeship in Career Education (PACE)', note: 'NJ Department of Labor and Workforce Development' },
  { name: 'Growing Apprenticeships in New Sectors (GAINS)', note: 'NJ DOL, sector-specific workforce expansion' },
  { name: 'NJ Economic Development Authority workforce opportunities', note: 'NJEDA career pathway and workforce investment programs' },
  { name: 'Workforce Innovation and Opportunity Act Title I pathways', note: 'Federal WIOA: adult, dislocated worker, and youth services' },
  { name: 'Federal apprenticeship and workforce-related opportunities', note: 'DOL apprenticeship, infrastructure workforce, and related federal programs' },
] as const

export function LaunchFunding() {
  return (
    <section className="bg-bone py-12 lg:py-18" aria-labelledby="funding-h2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-16 xl:gap-24 lg:items-start">
          <div>
            <h2 id="funding-h2" className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              New Jersey is deploying significant workforce investment.
            </h2>
            <p className="text-[14.5px] text-anthracite/78 leading-[1.7]" style={{ fontFamily: 'var(--font-body)' }}>
              Institutions that access it with credible program design will define the next generation of pathways. Launch is relevant to organizations pursuing any of the funding vehicles on the right. An initial opportunity review determines fit, eligibility, and timeline before any engagement begins.
            </p>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="border-t border-sediment/25">
              {FUNDING.map(({ name, note }) => (
                <div key={name} className="border-b border-sediment/25 py-6 lg:py-7">
                  <p className="text-[1rem] lg:text-[1.125rem] text-anthracite italic leading-[1.3] tracking-[-0.015em] mb-1.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{name}</p>
                  <p className="text-[12.5px] text-anthracite/78 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
