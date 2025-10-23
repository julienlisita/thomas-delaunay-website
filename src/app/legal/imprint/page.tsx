// src/app/legal/imprint/page.tsx

import Imprint from '@/components/pages/legal/Imprint';

export const metadata = {
  title: 'Mentions légales — Thomas Delaunay Coaching',
  description:
    'Toutes les informations légales du site Thomas Delaunay Coaching : éditeur, hébergeur, propriété intellectuelle et conditions d’utilisation.',
  alternates: {
    canonical: 'https://www.thomasdelaunay.fr/legal/imprint',
  },
};

export default function ImprintPage() {
  return <Imprint />;
}
