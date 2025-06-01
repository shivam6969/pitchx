import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PitchX',
  description: 'Created with Next.js',
  generator: 'v0.dev',
  verification: {
    google: '8Z9pHMUh0aZ14azZmPQCy8uq4thSdrAXUeAPmb1evr0',
  },
  icons: {
    icon: '/your-logo.png',
    shortcut: '/your-logo.png',
    apple: '/your-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
