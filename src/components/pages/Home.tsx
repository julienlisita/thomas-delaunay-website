// src/components/pages/Home.tsx

import Cta from '../ui/Cta';
import Hero from '../section/Hero';
import ServicesFeaturesIntro from '../section/ServicesFeaturesIntro';
import TestimonialsSectionHomeServer from '../section/TestimonialsSectionHomeServer';
import AboutSectionHome from '../section/AboutSectionHome';

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
