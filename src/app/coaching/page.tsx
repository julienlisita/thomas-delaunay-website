// src/app/coaching/page.tsx

import Coaching from '@/components/pages/Coaching';

export const metadata = {
  title: 'Coaching — Approche & programmes',
  description:
    'Force douce, cardio bienveillant, nutrition simple, mobilité & prévention : une méthode complète et personnalisée pour progresser durablement.',
  alternates: {
    canonical: 'https://www.thomasdelaunay.fr/about',
  },
};

export default function CoachingPage() {
  return <Coaching />;
}
