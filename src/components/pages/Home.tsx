// src/components/pages/Home.tsx

import Cta from '../patterns/Cta';
import Hero from '../home/Hero';
import TestimonialsTeaserServer from '../home/TestimonialsTeaserServer';
import AboutTeaser from '../home/AboutTeaser';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutTeaser />
      <TestimonialsTeaserServer />
      <Cta
        title="Prêt à reprendre le mouvement ?"
        description="Je vous accompagne pas à pas, à votre rythme — pour retrouver énergie, équilibre et confiance."
        align="left"
        primaryLabel="Découvrir l’approche"
        primaryHref="/coaching"
        secondaryLabel="En savoir plus sur Thomas"
        secondaryHref="/about"
      />
    </div>
  );
}
