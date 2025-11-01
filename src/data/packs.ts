// src/data/packs.ts

import type { FeatureItem } from '@/components/patterns/FeaturesGrid';
import { Dumbbell, Target, Sparkles } from 'lucide-react';

export const packs: ReadonlyArray<FeatureItem> = [
  {
    icon: Dumbbell,
    title: 'Pack Essentiel',
    description:
      '1 séance par semaine – Un accompagnement simple et progressif pour retrouver énergie et motivation. Idéal pour se (re)mettre en mouvement en douceur.',
  },
  {
    icon: Target,
    title: 'Pack Performance',
    description:
      '2 séances par semaine – Un suivi personnalisé orienté résultats. Travail technique, renforcement ciblé et bilans réguliers pour progresser efficacement.',
  },
  {
    icon: Sparkles,
    title: 'Pack Premium',
    description:
      '3 séances par semaine – Un accompagnement complet : entraînement, nutrition, suivi illimité et ajustements continus. Pensé pour des transformations durables.',
  },
] as const;
