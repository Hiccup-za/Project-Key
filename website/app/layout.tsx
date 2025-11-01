import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Project Key - Universal Authentication Orchestrator',
  description: 'One login to test them all. Universal authentication orchestrator for automation frameworks.',
  keywords: [
    'authentication',
    'testing',
    'automation',
    'e2e',
    'end-to-end testing',
    'test automation',
    'playwright',
    'cypress',
    'puppeteer',
    'session management',
    'OAuth',
    'test frameworks',
    'CI/CD',
    'authentication orchestrator'
  ],
  authors: [{ name: 'Project Key' }],
  creator: 'Project Key',
  publisher: 'Project Key',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Project Key - Universal Authentication Orchestrator',
    description: 'One login to test them all. Universal authentication orchestrator for automation frameworks.',
    siteName: 'Project Key',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Project Key - Universal Authentication Orchestrator',
    description: 'One login to test them all. Universal authentication orchestrator for automation frameworks.',
    creator: '@ProjectKeyAuth',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
  other: {
    'theme-color': '#0a0a0a',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
