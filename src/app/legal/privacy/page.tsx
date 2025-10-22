// src/app/legal/privacy/page.tsx

import Privacy from '@/components/pages/legal/Policy';

export const metadata = {
  title: 'Politique de confidentialité – Nom entreprise',
  description:
    'Découvrez comment nous collectons, utilisons et protégeons vos données personnelles.',
  alternates: {
    canonical: 'https://www.exemple.com/legal/privacy',
  },
};

export default function PrivacyPage() {
  return <Privacy />;
}
