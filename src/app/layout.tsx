import type { Metadata, Viewport } from 'next'
import { SITE_URL } from '@/src/lib/config'
import { LenisProvider } from '@/src/components/LenisProvider'
import { Navbar } from '@/src/components/Navbar'
import { Footer } from '@/src/components/Footer'
import './globals.css'

export const viewport: Viewport = {
  themeColor: '#2D2D31',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Aedifica | Construction-Management Workforce Pathways for New Jersey',
    template: '%s | Aedifica',
  },
  description:
    'Aedifica builds disciplined, employer-informed construction-management workforce pathways for overlooked learners, institutions, and employers in New Jersey.',
  robots: { index: true, follow: true },
  openGraph: {
    siteName: 'Aedifica',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 839, height: 436, alt: 'Aedifica' }],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          <Navbar />
          <div className="pt-[70px]">
            {children}
          </div>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  )
}
