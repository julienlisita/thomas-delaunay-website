// src/components/pages/About.tsx

import Cta from '../patterns/Cta';
import HeroIntro from './../patterns/HeroIntro';
import { UserRound } from 'lucide-react';
import ValuesSection from '../about/ValueSection';

export default function About() {
  return (
    <div>
      <HeroIntro
        icon={<UserRound size={40} />}
        title="Thomas Delaunay — Coach sportif et bien-être"
        subtitle="Ancien nageur et passionné de surf, j’accompagne chacun à retrouver confiance, équilibre et énergie."
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
