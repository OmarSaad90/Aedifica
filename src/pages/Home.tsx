import { SEO, SITE_URL } from '../components/SEO'
import { Hero } from '../components/Hero'

const HOME_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Aedifica',
      url: SITE_URL,
      description:
        'Employer-informed construction-management workforce pathways for overlooked learners, institutions, and employers in New Jersey.',
      areaServed: { '@type': 'State', name: 'New Jersey' },
      // Replace with the Google Business Profile URL once created:
      // sameAs: ['https://www.google.com/maps?cid=YOUR_GBP_ID'],
      knowsAbout: [
        'construction management',
        'workforce development',
        'workforce pathways',
        'adult bridge cohorts',
        'grant strategy',
        'career pathway programs',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Aedifica',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: 'Aedifica | Construction-Management Workforce Pathways for New Jersey',
      description:
        'Aedifica builds disciplined, employer-informed construction-management workforce pathways for overlooked learners, institutions, and employers in New Jersey.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
  ],
} as Record<string, unknown>
import { CredibilityBar } from '../components/CredibilityBar'
import { TheGap } from '../components/TheGap'
import { AedificaModel } from '../components/AedificaModel'
import { FourGates } from '../components/FourGates'
import { Services } from '../components/Services'
import { RoleLadder } from '../components/RoleLadder'
import { Outcomes } from '../components/Outcomes'
import { Partnership } from '../components/Partnership'
import { PriorExperience } from '../components/PriorExperience'
import { FinalCTA } from '../components/FinalCTA'

export function Home() {
  return (
    <main>
      <SEO
        title="Aedifica | Construction-Management Workforce Pathways for New Jersey"
        description="Aedifica builds disciplined, employer-informed construction-management workforce pathways for overlooked learners, institutions, and employers in New Jersey."
        path="/"
        schema={HOME_SCHEMA}
      />
      <Hero />
      <CredibilityBar />
      <TheGap />
      <AedificaModel />
      <FourGates />
      <Services />
      <RoleLadder />
      <Outcomes />
      <Partnership />
      <PriorExperience />
      <FinalCTA />
    </main>
  )
}
