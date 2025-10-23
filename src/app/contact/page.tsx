// src/app/contact/page.tsx

import Contact from '@/components/pages/Contact';

export const metadata = {
  title: 'Contact — Réserver une séance découverte',
  description:
    'Expliquez vos objectifs : je vous réponds rapidement pour définir la meilleure façon d’avancer ensemble.',
  alternates: {
    canonical: 'https://www.thomasdelaunay.fr/contact',
  },
};

export default function ContactPage() {
  return <Contact />;
}
