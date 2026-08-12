import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Space_Grotesk, Instrument_Sans, Space_Mono } from 'next/font/google'
import { SITE_URL } from '@/lib/site'
import './globals.css'

/* AQ Studios type system:
   Display — Space Grotesk · Body — Instrument Sans · Mono — Space Mono */

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-instrument-sans',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Ahmed Qadri — Developer',
  description: 'Full-stack developer building scalable, user-focused applications.',
  openGraph: {
    title: 'Ahmed Qadri — Developer',
    description: 'Full-stack developer building scalable, user-focused applications.',
    type: 'website',
    siteName: 'Ahmed Qadri',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Qadri — Developer',
    description: 'Full-stack developer building scalable, user-focused applications.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${instrumentSans.variable} ${spaceMono.variable}`}
    >
      <body className="font-sans antialiased">
        {/* Reveal-on-scroll starts at opacity 0; without JS it never fires. */}
        <noscript>
          <style>{`.aq-reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
