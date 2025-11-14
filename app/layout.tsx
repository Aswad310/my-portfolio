import type { Metadata } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';
import './globals.css'
import { ThemeToggle } from '@/components/ThemeToggle'

export const metadata: Metadata = {
  title: 'Aswad Ali - Software Engineer',
  description: 'Experienced JavaScript Developer | 4+ Years Building Scalable Solutions',
  keywords: 'Software Engineer, JavaScript Developer, Full Stack Developer, React, Node.js, Web Development, TypeScript, Next.js, Frontend, Backend, Web Design, Portfolio, Freelance, Healthcare, Real Estate, E-commerce, Scalable Solutions, RESTful APIs, Database Design, Performance Optimization, Responsive Design, CSS, HTML5, Git, Agile',
  authors: [{ name: 'Aswad Ali', url: 'https://aswadali.vercel.app' }],
  creator: 'Aswad Ali',
  publisher: 'Aswad Ali',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      { rel: 'manifest', url: '/site.webmanifest' },
    ],
  },
  openGraph: {
    title: 'Aswad Ali - Software Engineer',
    description: 'Experienced JavaScript Developer | 4+ Years Building Scalable Solutions',
    url: 'https://aswadali.vercel.app',
    siteName: 'Aswad Ali Portfolio',
    images: [
      {
        url: '/apple-touch-icon.png',
        width: 180,
        height: 180,
        alt: 'Aswad Ali Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aswad Ali - Software Engineer',
    description: 'Experienced JavaScript Developer | 4+ Years Building Scalable Solutions',
    images: ['/apple-touch-icon.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeToggle />
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}