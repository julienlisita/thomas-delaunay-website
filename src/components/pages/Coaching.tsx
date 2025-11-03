// src/components/pages/Coaching.tsx

import { Dumbbell } from 'lucide-react';
import PageHero from '@/components/patterns/PageHero';
import Cta from '../patterns/Cta';
import CoachingPacksSection from '../coaching/CoachingPacksSection';
import Approach from '../coaching/Approach';
import Pillars from '../coaching/Pillars';
import Formats from '../coaching/Formats';
import FollowUp from '../coaching/FollowUp';

export default function Coaching() {
  return (
    <div>
      <PageHero
        icon={<Dumbbell size={40} />}
        title="Le coaching à votre rythme"
        subtitle="Force, cardio, nutrition, bien-être — une approche complète et personnalisée pour progresser durablement."
        align="center"
      />
      <Approach />
      <Pillars />
      <CoachingPacksSection />
      <Formats />
      <FollowUp />
      <Cta
        title="Des progrès concrets, à votre rythme"
        description="Chaque personne avance différemment — découvrez comment mes clients ont retrouvé confiance et énergie durablement."
        align="left"
        primaryLabel="Lire les témoignages"
        primaryHref="/testimonials"
      />
    </div>
  );
}
