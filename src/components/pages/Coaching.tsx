// src/components/pages/Coaching.tsx

import HeroIntro from '../section/HeroIntro';
import Cta from '../ui/Cta';

export default function Coaching() {
  return (
    <div>
      <HeroIntro
        title="Coaching"
        subtitle="Découvrez ma méthode et moyen mis en place"
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
