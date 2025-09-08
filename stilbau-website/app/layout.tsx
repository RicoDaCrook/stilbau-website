// DIES IST DIE DATEI: app/layout.tsx
// KOPIERE DIESEN KOMPLETTEN CODE IN app/layout.tsx

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'STILBAU - Premium Fenster, Türen & Rollläden | Drutex Partner Göppingen',
  description: 'Konfigurieren Sie Ihre Traumfenster in 3D mit Live-Preisen. Offizieller Drutex Partner in Göppingen. ✓ 10 Jahre Garantie ✓ 3-4 Wochen Lieferzeit ✓ Premium Qualität',
  keywords: 'Fenster, Türen, Rollläden, Drutex, Göppingen, 3D Konfigurator, Fensterbau, Haustüren, Insektenschutz, STILBAU, Baden-Württemberg',
  authors: [{ name: 'STILBAU GmbH' }],
  creator: 'STILBAU GmbH',
  publisher: 'STILBAU GmbH',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'STILBAU - Premium Fenster nach Maß | Göppingen',
    description: 'Ihr Fensterbau-Experte in Göppingen. 3D-Konfigurator mit Live-Preisen. Offizieller Drutex Partner.',
    url: 'https://stilbau.de',
    siteName: 'STILBAU',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'STILBAU - Premium Fenster nach Maß',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STILBAU - Premium Fenster nach Maß',
    description: 'Konfigurieren Sie Ihre Traumfenster in 3D mit Live-Preisen.',
    images: ['/og-image.jpg'],
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://stilbau.de',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2c4059" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}