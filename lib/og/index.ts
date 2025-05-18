import type { Metadata } from 'next/types'

export const OpenGraph: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined,
  title: {
    default: 'HARSH RAJ KUMAR',
    template: '%s - HARSH RAJ KUMAR',
  },
  description: 'Sharing my interest in a little of everything that crosses my mind, but mostly in technology.',
  keywords: ['Design', 'Development', 'Engineering'],
  creator: 'HARSH RAJ KUMAR',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'HARSH RAJ KUMAR',
    description: 'Sharing my interest in a little of everything that crosses my mind, but mostly in technology.',
    images: [
      {
        type: 'image/png',
        width: 1200,
        height: 630,
        url: `/api/og?title=${encodeURIComponent('HARSH RAJ KUMAR')}&date=${encodeURIComponent('Sharing my interest in a little of everything that crosses my mind, but mostly in technology.')}`,
      },
    ],
    siteName: 'HARSH RAJ KUMAR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HARSH RAJ KUMAR',
    description: 'Sharing my interest in a little of everything that crosses my mind, but mostly in technology.',
    images: [
      {
        type: 'image/png',
        width: 1200,
        height: 630,
        url: `/api/og?title=${encodeURIComponent('HARSH RAJ KUMAR')}&date=${encodeURIComponent('Sharing my interest in a little of everything that crosses my mind, but mostly in technology.')}`,
      },
    ],
    site: 'hey_harsh',
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
}
