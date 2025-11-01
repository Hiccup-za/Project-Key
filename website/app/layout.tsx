import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Project Key - Universal Authentication Orchestrator',
  description: 'One login to test them all. Universal authentication orchestrator for automation frameworks.',
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
