import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PitchX',
  description: 'Created with Next.js',
  generator: 'v0.dev',
  icons: {
    icon: '/your-logo1.png',
    shortcut: '/your-logo1.png',
    apple: '/your-logo1.png',
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
