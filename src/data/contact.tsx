// src/data/contact.tsx

import type { FeatureItem } from '@/components/patterns/FeaturesGrid';
import { Phone, Mail, MapPin } from 'lucide-react';

export const contactInfos: ReadonlyArray<FeatureItem> = [
  {
    icon: Phone,
    title: 'Téléphone',
    description: (
      <a href="tel:+33652489317" className="underline hover:no-underline">
        06 52 48 93 17
      </a>
    ),
  },
  {
    icon: Mail,
    title: 'Email',
    description: (
      <a href="mailto:contact@thomasdelaunay-coaching.fr " className="underline hover:no-underline">
        contact@thomasdelaunay-coaching.fr
      </a>
    ),
  },
  {
    icon: MapPin,
    title: 'Adresse',
    description: (
      <a
        href="https://maps.app.goo.gl/BCJxcrFgxRRiQH2F8"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:no-underline"
      >
        12 Rue des Acacias, <br />
        33600 Pessac - France
      </a>
    ),
  },
] as const;
