// src/data/pillars.ts

import type { FeatureItem } from '@/components/patterns/FeaturesGrid';
import { HeartPulse, Target, Handshake, Sparkles } from 'lucide-react';

export const pillars: ReadonlyArray<FeatureItem> = [
  {
    icon: HeartPulse,
    title: 'Reconnexion au corps',
    description:
      'Retrouver des sensations justes, comprendre son corps et ses signaux. Le mouvement devient un outil d’équilibre, pas une contrainte.',
  },
  {
    icon: Target,
    title: 'Progression personnalisée',
    description:
      'Chaque parcours est unique. On avance à votre rythme, avec une programmation sur mesure qui respecte vos objectifs et votre quotidien.',
  },
  {
    icon: Handshake,
    title: 'Accompagnement humain',
    description:
      'Un suivi basé sur l’écoute, la pédagogie et la bienveillance. Vous n’êtes jamais seul·e dans le processus : on construit ensemble la réussite.',
  },
  {
    icon: Sparkles,
    title: 'Équilibre durable',
    description:
      'Bien plus qu’un programme : une approche globale pour installer des habitudes saines et stables, sans culpabilité ni excès.',
  },
] as const;
