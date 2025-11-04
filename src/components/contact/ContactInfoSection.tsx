// src/components/contact/ContactInfoSection.tsx

'use client';

import FeatureCard from '../data-display/FeatureCard';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';
import FeaturesGrid from './../patterns/FeaturesGrid';
import { contactInfos } from '@/data/contact';

type Props = {
  className?: string;
};

export default function ContactInfoSection({ className }: Props) {
  return (
    <Section bgColor="sand-light">
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Packs & accompagnements"
          title="Choisissez le rythme qui vous convient"
          subtitle="Des formules simples, transparentes, et évolutives selon vos objectifs"
          align="center"
        />
        <FeaturesGrid
          items={contactInfos}
          renderItem={(item) => (
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              tone="trust"
              align="center"
            />
          )}
        />
      </SectionWrapper>
    </Section>
  );
}
