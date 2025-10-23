// src/components/pages/Testimonials.tsx

import { MessageCircle } from 'lucide-react';
import HeroIntro from '../section/HeroIntro';
import TestimonialsSectionServer from '../section/TestimonialsSectionServer';
import Cta from '../ui/Cta';

export const runtime = 'nodejs'; // si tu utilises tes constantes: export { runtime, dynamic, revalidate } from ...

export default function TestimonialsPageView() {
  return (
    <div>
      <HeroIntro
        icon={<MessageCircle size={40} />}
        title="Des parcours inspirants"
        subtitle="Découvrez les expériences et réussites de celles et ceux que j’ai accompagnés."
        align="center"
      />
      <TestimonialsSectionServer />
      <Cta
        title="Des parcours réels, des progrès durables"
        description="Découvrez comment chacun a avancé à son rythme — sans pression, avec plaisir."
        align="left"
        primaryLabel="Lire mes conseils"
        primaryHref="/blog"
      />
    </div>
  );
}
