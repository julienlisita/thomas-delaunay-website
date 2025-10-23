// src/components/pages/About.tsx

import Cta from '../ui/Cta';
import HeroIntro from '../section/HeroIntro';
import { Users } from 'lucide-react';
import ValuesSection from '../section/ValueSection';

export default function About() {
  return (
    <div>
      <HeroIntro
        icon={<Users size={40} />}
        title="Qui sommes-nous ?"
        subtitle="Découvrez notre équipe, nos valeurs et notre vision."
        align="center"
      />
      <ValuesSection />
      <Cta
        title="Envie d’un accompagnement à votre rythme ?"
        description="Une méthode douce et progressive, à domicile, en extérieur ou à distance."
        align="left"
        primaryLabel="Découvrir le coaching"
        primaryHref="/coaching"
        secondaryLabel="Me contacter"
        secondaryHref="/contact"
      />
    </div>
  );
}
