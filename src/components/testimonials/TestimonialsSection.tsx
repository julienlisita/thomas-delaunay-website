// src/components/testimonials/TestimonialsSection.tsx

'use client';

import type { Testimonial } from '@/types/testimonial';
import { TestimonialCard } from '@/components/data-display/TestimonialCard';
import FeaturesGrid from './../patterns/FeaturesGrid';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';
import Lead from '../ui/Lead';

export default function TestimonialsSection({ items }: { items: ReadonlyArray<Testimonial> }) {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Packs & accompagnements"
          title="Choisissez le rythme qui vous convient"
          subtitle="Des formules simples, transparentes, et évolutives selon vos objectifs"
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          <Lead className="text-center mb-8">
            Que vous commenciez tout juste ou que vous visiez une performance précise, je vous
            propose trois niveaux d’accompagnement pour progresser sans vous perdre dans la
            complexité.
          </Lead>
        </div>

        <FeaturesGrid
          items={items}
          pageSize={8}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
          renderItem={(t) => <TestimonialCard {...t} />}
        />
      </SectionWrapper>
    </Section>
  );
}
