// src/components/pages/Home.tsx

import Cta from '../patterns/Cta';
import Hero from '../home/Hero';
import ServicesFeaturesIntro from '../home/ServicesFeaturesIntro';
import TestimonialsSectionHomeServer from '../home/TestimonialsSectionHomeServer';
import AboutSectionHome from '../home/AboutSectionHome';

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSectionHome />
      <ServicesFeaturesIntro />
      <TestimonialsSectionHomeServer />
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
