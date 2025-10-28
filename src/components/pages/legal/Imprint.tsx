// src/components/pages/legal/Imprint.tsx

import PageHero from '@/components/patterns/PageHero';
import { Scale } from 'lucide-react';

export default function Imprint() {
  return (
    <div>
      <PageHero
        icon={<Scale size={40} />}
        title="Mentions légales"
        subtitle="Informations légales concernant l’édition et l’hébergement du site de Thomas Delaunay coaching."
        align="center"
      />
      <div className="container mx-auto px-4 py-10 space-y-4">
        <p className="text-gray-700">
          Ce site est édité par [Nom de l&apos;entreprise], situé à [Adresse complète].
        </p>
        <p className="text-gray-700">
          Directeur de la publication : [Nom complet] <br />
          Hébergeur : [Nom de l&apos;hébergeur, adresse]
        </p>
        <p className="text-gray-700">
          Pour toute question concernant ces mentions, vous pouvez nous contacter via le formulaire
          de contact.
        </p>
      </div>
    </div>
  );
}
