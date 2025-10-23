// src/components/pages/Testimonials.tsx

import { MessageSquare } from 'lucide-react';
import HeroIntro from '../section/HeroIntro';
import TestimonialsSectionServer from '../section/TestimonialsSectionServer';
import Cta from '../ui/Cta';

export const runtime = 'nodejs'; // si tu utilises tes constantes: export { runtime, dynamic, revalidate } from ...

export default function TestimonialsPageView() {
  return (
    <div>
      <HeroIntro
        icon={<MessageSquare size={40} />}
        title="Témoignages"
        subtitle="Ils partagent leur expérience et leur avis sur nos services."
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
