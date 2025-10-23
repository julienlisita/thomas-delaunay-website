// src/app/coaching/page.tsx

import Coaching from '@/components/pages/Coaching';

export const metadata = {
  title: 'À propos – Votre Nom',
  description:
    'En savoir plus sur notre entreprise, nos valeurs, et notre engagement envers nos clients.',
  alternates: {
    canonical: 'https://www.exemple.com/about',
  },
};

export default function CoachingPage() {
  return <Coaching />;
}
