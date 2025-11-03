// src/components/pages/About.tsx

import Cta from '../patterns/Cta';
import PageHero from './../patterns/PageHero';
import { UserRound } from 'lucide-react';
import ValuesSection from '../about/ValuesSection';
import Journey from '../about/Journey';
import Philosophy from '../about/Philosophy';
import Mission from '../about/Mission';

export default function About() {
  return (
    <div>
      <PageHero
        icon={<UserRound size={40} />}
        title="Thomas Delaunay — Coach sportif et bien-être"
        subtitle="Ancien nageur et passionné de surf, j’accompagne chacun à retrouver confiance, équilibre et énergie."
        align="center"
      />
      <Journey />
      <Philosophy />
      <ValuesSection />
      <Mission />
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
