// src/data/values.ts

import type { FeatureItem } from '@/components/patterns/FeaturesGrid';
import { Ear, HeartHandshake, TrendingUp } from 'lucide-react';

export const values: ReadonlyArray<FeatureItem> = [
  {
    icon: Ear,
    title: 'Écoute',
    description:
      'Comprendre votre histoire, vos besoins et vos limites avant de construire chaque séance.',
  },
  {
    icon: HeartHandshake,
    title: 'Bienveillance',
    description:
      'Encourager sans jugement, valoriser chaque progrès et rendre le sport accessible à tous.',
  },
  {
    icon: TrendingUp,
    title: 'Progression',
    description:
      'Avancer étape par étape pour construire une transformation durable, sans précipitation.',
  },
] as const;
