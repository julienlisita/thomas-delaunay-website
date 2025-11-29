// src/app/(site)/about/page.tsx

import About from '@/components/pages/About';

export const metadata = {
  title: 'À propos — Thomas Delaunay',
  description:
    'Ancien nageur, passionné de surf, j’accompagne chacun à retrouver confiance, énergie et équilibre par une discipline douce et personnalisée.',
  alternates: {
    canonical: 'https://www.thomasdelaunay.fr/about',
  },
};

export default function AboutPage() {
  return <About />;
}
