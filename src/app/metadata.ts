// src/app/metadata.ts

export const metadata = {
  title: 'Thomas Delaunay Coaching – Bien-être, sport et nutrition à Bordeaux',
  description:
    'Coaching sportif personnalisé à Bordeaux et en ligne. Thomas Delaunay vous accompagne pour retrouver forme, équilibre et bien-être grâce à une approche douce et durable, alliant sport et nutrition.',
  metadataBase: new URL('https://thomas-delaunay-coaching.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Thomas Delaunay Coaching – Bien-être, sport et nutrition à Bordeaux',
    description:
      'Coaching sportif sur mesure : accompagnement bien-être, remise en forme, nutrition et équilibre du corps et de l’esprit, à Bordeaux ou à distance.',
    url: 'https://thomas-delaunay-coaching.vercel.app',
    siteName: 'Thomas Delaunay Coaching',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://thomas-delaunay-coaching.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Thomas Delaunay Coaching – sport, nutrition et bien-être à Bordeaux',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Delaunay Coaching',
    description:
      'Coach sportif et bien-être à Bordeaux. Programmes personnalisés de remise en forme, nutrition et équilibre du corps et du mental.',
    images: ['https://thomas-delaunay-coaching.vercel.app/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Thomas Delaunay Coaching',
  },
};
