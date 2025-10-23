// src/app/page.tsx

import Home from '@/components/pages/Home';

export const metadata = {
  title: 'Le sport à votre rythme',
  description:
    'Coach sportif & bien-être à Bordeaux. Un accompagnement humain et progressif pour retrouver forme, énergie et équilibre — sans pression, à votre rythme.',
  alternates: {
    canonical: 'https://www.thomasdelaunay.fr/',
  },
};

export default function HomePage() {
  return <Home />;
}
