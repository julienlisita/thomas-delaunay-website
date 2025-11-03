// src/components/testimonials/TestimonialsSection.tsx

'use client';

import type { Testimonial } from '@/types/testimonial';
import { TestimonialCard } from '@/components/data-display/TestimonialCard';
import FeaturesGrid from './../patterns/FeaturesGrid';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';

export default function TestimonialsSection({ items }: { items: ReadonlyArray<Testimonial> }) {
  return (
    <Section bgColor="light">
      <SectionWrapper>
        <HeaderBlock
          eyebrow="TÉMOIGNAGES"
          title="Ils ont retrouvé équilibre, énergie et confiance"
          subtitle="Chaque parcours est unique, mais tous partagent la même envie : se sentir mieux, jour après jour.
Découvrez leurs histoires."
          align="center"
        />

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
