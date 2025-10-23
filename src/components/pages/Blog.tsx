// src/components/pages/Blog.tsx

import HeroIntro from '../section/HeroIntro';
import Cta from '../ui/Cta';

export default function Blog() {
  return (
    <div>
      <HeroIntro
        title="Blog"
        subtitle="Découvrez mes articles sur le sport et la nutrition"
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
