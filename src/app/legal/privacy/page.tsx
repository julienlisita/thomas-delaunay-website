// src/app/legal/privacy/page.tsx

import Privacy from '@/components/pages/legal/Policy';

export const metadata = {
  title: 'Politique de confidentialité — Thomas Delaunay Coaching',
  description:
    'Découvrez comment Thomas Delaunay Coaching collecte, utilise et protège vos données personnelles conformément au RGPD.',
  alternates: {
    canonical: 'https://www.thomasdelaunay.fr/legal/privacy',
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
