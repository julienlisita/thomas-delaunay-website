// src/app/testimonials/page.tsx

import Testimonials from '@/components/pages/Testimonials';

export const metadata = {
  title: 'Témoignages — Parcours et résultats',
  description:
    'Des retours d’expérience concrets : comment mes clients ont retrouvé confiance, énergie et régularité, à leur rythme.',
  alternates: {
    canonical: 'https://www.thomasdelaunay.fr/testimonials',
  },
};

export default function TestimonialsPage() {
  return <Testimonials />;
}
