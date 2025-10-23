// src/components/pages/Coaching.tsx

import { Dumbbell } from 'lucide-react';
import HeroIntro from '../section/HeroIntro';
import Cta from '../ui/Cta';

export default function Coaching() {
  return (
    <div>
      <HeroIntro
        icon={<Dumbbell size={40} />}
        title="Le coaching à votre rythme"
        subtitle="Force, cardio, nutrition, bien-être — une approche complète et personnalisée pour progresser durablement."
        align="center"
      />
      <Cta
        title="Des progrès concrets, à votre rythme"
        description="Chaque personne avance différemment — découvrez comment mes clients ont retrouvé confiance et énergie durablement."
        align="left"
        primaryLabel="Lire les témoignages"
        primaryHref="/testimonials"
      />
    </div>
  );
}
