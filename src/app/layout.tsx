import type { Metadata, Viewport } from 'next'
import { SITE_URL } from '@/src/lib/config'
import { LenisProvider } from '@/src/components/LenisProvider'
import { Navbar } from '@/src/components/Navbar'
import { Footer } from '@/src/components/Footer'
import { BackToTop } from '@/src/components/BackToTop'
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
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    siteName: 'Aedifica',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Aedifica: Construction-Management Workforce Pathways for New Jersey' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aedifica | Construction-Management Workforce Pathways for New Jersey',
    description:
      'Aedifica builds disciplined, employer-informed construction-management workforce pathways for overlooked learners, institutions, and employers in New Jersey.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-anthracite focus:text-white focus:text-[13px] focus:px-4 focus:py-2.5"
        >
          Skip to main content
        </a>
        <LenisProvider>
          <Navbar />
          <div id="main" className="pt-[130px]">
            {children}
          </div>
          <Footer />
          <BackToTop />
        </LenisProvider>
      </body>
    </html>
  )
}
