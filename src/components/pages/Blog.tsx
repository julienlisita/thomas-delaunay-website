// src/components/pages/Blog.tsx

import { BookOpen } from 'lucide-react';
import HeroIntro from './../patterns/HeroIntro';
import Cta from '../patterns/Cta';

export default function Blog() {
  return (
    <div>
      <HeroIntro
        icon={<BookOpen size={40} />}
        title="Conseils et inspiration"
        subtitle="Articles sur la nutrition, l’équilibre et le bien-être — pour prolonger le coaching au quotidien."
        align="center"
      />
      <Cta
        title="Envie de passer à l’action ?"
        description="Transformons la lecture en progrès concret avec un accompagnement personnalisé."
        align="left"
        primaryLabel="Me contacter"
        primaryHref="/contact"
        secondaryLabel="Découvrir le coaching"
        secondaryHref="/coaching"
      />
    </div>
  );
}
