// src/data/testimonials.ts

import type { Testimonial } from '@/types/testimonial';

export const testimonials: ReadonlyArray<Testimonial> = [
  {
    id: 1,
    name: 'Claire M.',
    age: 42,
    quote:
      'Grâce à Thomas, j’ai retrouvé confiance et motivation sans jamais me sentir jugée. Les séances sont douces, progressives et adaptées à mon rythme.',
    city: 'Bordeaux',
    goal: 'Reprise en douceur',
  },
  {
    id: 2,
    name: 'Marc D.',
    age: 36,
    quote:
      'Une approche bienveillante, structurée et très pro. J’ai réussi à retrouver de l’énergie et une meilleure posture sans douleur ni pression.',
    city: 'Mérignac',
    goal: 'Renforcement postural',
  },
  {
    id: 3,
    name: 'Sophie L.',
    age: 52,
    quote:
      'Après plusieurs tentatives infructueuses pour reprendre le sport, j’ai enfin trouvé un accompagnement réaliste et motivant. Thomas est à l’écoute et sait s’adapter.',
    city: 'Pessac',
    goal: 'Reprise après blessure',
  },
  {
    id: 4,
    name: 'Julien T.',
    age: 29,
    quote:
      'Les séances en plein air sont devenues un vrai plaisir. L’approche de Thomas allie technique, bienveillance et une vraie énergie positive.',
    city: 'Lacanau',
    goal: 'Remise en forme générale',
  },
  {
    id: 5,
    name: 'Isabelle F.',
    age: 47,
    quote:
      'Je n’aimais pas le sport à la base, mais avec Thomas j’ai appris à bouger autrement. Résultats visibles, mais surtout un vrai mieux-être au quotidien.',
    city: 'Bordeaux Caudéran',
    goal: 'Bien-être et mobilité',
  },
  {
    id: 6,
    name: 'Patrick V.',
    age: 55,
    quote:
      'Thomas a su me redonner goût à l’activité physique après une période de fatigue et de stress. Les exercices sont simples mais très efficaces.',
    city: 'Le Bouscat',
    goal: 'Reprise d’énergie',
  },
  {
    id: 7,
    name: 'Nathalie R.',
    age: 33,
    quote:
      'Un coach qui sait allier écoute, technique et pédagogie. J’ai progressé sans jamais me sentir dépassée. Les séances à distance fonctionnent très bien aussi.',
    city: 'Talence',
    goal: 'Suivi en ligne',
  },
  {
    id: 8,
    name: 'Lucas P.',
    age: 26,
    quote:
      'Super accompagnement pour reprendre la musculation en douceur. Les conseils de Thomas sur la récupération et la nutrition m’ont vraiment aidé.',
    city: 'Bordeaux Chartrons',
    goal: 'Renforcement musculaire',
  },
  {
    id: 9,
    name: 'Hélène C.',
    age: 38,
    quote:
      'Des séances variées, toujours dans la bonne humeur. Je sens une vraie progression et une amélioration de ma posture au quotidien.',
    city: 'Eysines',
    goal: 'Tonus et équilibre',
  },
  {
    id: 10,
    name: 'François L.',
    age: 48,
    quote:
      'Thomas m’a accompagné dans une remise en forme complète. Sa méthode m’a aidé à retrouver un rythme stable et une vraie sérénité.',
    city: 'Le Haillan',
    goal: 'Remise en forme globale',
  },
] as const;
