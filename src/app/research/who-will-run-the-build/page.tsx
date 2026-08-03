import type { Metadata } from 'next'
import { WhoWillRunTheBuildReport } from '@/src/views/WhoWillRunTheBuild'
import { WHO_WILL_RUN_THE_BUILD_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Who Will Run the Build?',
  description:
    'Over the next five years, the binding constraint in US construction moves up the value chain, from the jobsite to the trailer, and the scarce, AI-durable role becomes the credentialed green construction manager. New Jersey is the test case.',
  alternates: { canonical: `${SITE_URL}/research/who-will-run-the-build` },
  openGraph: {
    title: 'Who Will Run the Build? | Aedifica Strategy Insights',
    description:
      'Over the next five years, the binding constraint in US construction moves up the value chain, from the jobsite to the trailer, and the scarce, AI-durable role becomes the credentialed green construction manager. New Jersey is the test case.',
    url: `${SITE_URL}/research/who-will-run-the-build`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WHO_WILL_RUN_THE_BUILD_SCHEMA) }}
      />
      <WhoWillRunTheBuildReport />
    </>
  )
}
