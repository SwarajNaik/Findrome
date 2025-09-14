import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Swaraj Naik - Portfolio',
  description: 'Portfolio of Swaraj Naik - Tech Enthusiast, Data Scientist & Full Stack Developer',
  keywords: 'Swaraj Naik, Portfolio, Data Science, Web Development, Python, TypeScript, Next.js',
  authors: [{ name: 'Swaraj Naik' }],
  creator: 'Swaraj Naik',
  openGraph: {
    title: 'Swaraj Naik - Portfolio',
    description: 'Portfolio of Swaraj Naik - Tech Enthusiast, Data Scientist & Full Stack Developer',
    url: 'https://swarajnaik.dev',
    siteName: 'Swaraj Naik Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Swaraj Naik Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swaraj Naik - Portfolio',
    description: 'Portfolio of Swaraj Naik - Tech Enthusiast, Data Scientist & Full Stack Developer',
    images: ['/og-image.jpg'],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900`}>
        {children}
      </body>
    </html>
  )
}
