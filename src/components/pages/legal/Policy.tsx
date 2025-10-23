// src/components/pages/legal/Policy.tsx

import HeroIntro from '@/components/section/HeroIntro';
import { Shield } from 'lucide-react';

export default function Privacy() {
  return (
      <div>
        <HeroIntro
        icon={<Shield size={40} />}
        title="Politique de confidentialité"
        subtitle="Découvrez comment nous collectons, utilisons et protégeons vos données personnelles conformément au RGPD."
        align="center"
      />
      <div className="container mx-auto px-4 py-10 space-y-4">
        <p className="text-gray-700">
          Nous respectons votre vie privée. Les données collectées via les formulaires sont utilisées
          uniquement pour répondre à vos demandes.
        </p>
        <p className="text-gray-700">
          Conformément à la loi, vous disposez d&apos;un droit d&apos;accès, de rectification et de
          suppression de vos données personnelles.
        </p>
        <p className="text-gray-700">
          Pour toute question relative à vos données, contactez-nous à [adresse e-mail].
        </p>
      </div>
      <div className="container mx-auto px-4 py-10 space-y-4">
      <p className="text-gray-700">
        Nous respectons votre vie privée. Les données collectées via les formulaires sont utilisées
        uniquement pour répondre à vos demandes.
      </p>
      <p className="text-gray-700">
        Conformément à la loi, vous disposez d&apos;un droit d&apos;accès, de rectification et de
        suppression de vos données personnelles.
      </p>
      <p className="text-gray-700">
        Pour toute question relative à vos données, contactez-nous à [adresse e-mail].
      </p>
    </div>
    </div>
  );
}
