import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Ahmed Qadri — Developer',
  description: 'Full-stack developer building scalable, user-focused applications.',
  openGraph: {
    title: 'Ahmed Qadri — Developer',
    description: 'Full-stack developer building scalable, user-focused applications.',
    type: 'website',
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
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
