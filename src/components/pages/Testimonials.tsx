// src/components/pages/Testimonials.tsx

import { MessageCircle } from 'lucide-react';
import PageHero from '@/components/patterns/PageHero';
import TestimonialsSectionServer from '../testimonials/TestimonialsSectionServer';
import Cta from '../patterns/Cta';
import CaseHighlight from '../testimonials/CaseHighlight';

export const runtime = 'nodejs'; // si tu utilises tes constantes: export { runtime, dynamic, revalidate } from ...

export default function TestimonialsPageView() {
  return (
    <div>
      <PageHero
        icon={<MessageCircle size={40} />}
        title="Des parcours inspirants"
        subtitle="Découvrez les expériences et réussites de celles et ceux que j’ai accompagnés."
        align="center"
      />
      <TestimonialsSectionServer />
      <CaseHighlight
        title="Reprendre confiance après 2 ans d’arrêt"
        name="Sophie"
        age={52}
        goal="Mobilité & bien-être"
        duration="4 mois"
        format="À distance"
        context="Sophie souffrait de douleurs lombaires chroniques et manquait de motivation pour reprendre une activité. Nous avons travaillé sur la mobilité, la respiration et la régularité, sans pression."
        quote="Je me sens à nouveau moi-même. Les douleurs ont presque disparu et je prends plaisir à bouger chaque jour."
        results={[
          'Douleurs réduites de 80%',
          'Retour à une marche quotidienne de 30 min',
          'Amélioration du sommeil et du tonus général',
        ]}
      />
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
