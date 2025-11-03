// src/components/home/TestimonialsTeaser.tsx

'use client';

import type { Testimonial } from '@/types/testimonial';
import { TestimonialCard } from '@/components/data-display/TestimonialCard';
import FeaturesGrid from './../patterns/FeaturesGrid';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';
import Lead from '../ui/Lead';
import ActionsStack from '../patterns/ActionsStack';

type Props = {
  items: ReadonlyArray<Testimonial>;
};

export default function TestimonialsTeaser({ items }: Props) {
  return (
    <Section bgColor="#A8D5BA15">
      <SectionWrapper>
        <HeaderBlock eyebrow="AVIS CLIENTS" title="Ils m’ont fait confiance" align="center" />

        <div className="max-w-3xl mx-auto">
          <Lead className="text-center mb-8">
            Que vous commenciez tout juste ou que vous visiez une performance précise, je vous
            propose trois niveaux d’accompagnement pour progresser sans vous perdre dans la
            complexité.
          </Lead>
        </div>

        <FeaturesGrid
          items={items}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
          renderItem={(t) => <TestimonialCard {...t} />}
        />
        <ActionsStack
          align="center"
          className="mt-8"
          items={[{ label: 'Voir tout les témoignages', href: '/packs', variant: 'primary' }]}
        />
      </SectionWrapper>
    </Section>
  );
}
