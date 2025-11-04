// src/components/coaching/CoachingPacksSection.tsx

'use client';

import FeatureCard from '../data-display/FeatureCard';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';
import Lead from '../ui/Lead';
import FeaturesGrid from './../patterns/FeaturesGrid';
import { packs } from '@/data/packs';

type Props = {
  className?: string;
};

export default function CoachingPacksSection({ className }: Props) {
  return (
    <Section bgColor="sand">
      <SectionWrapper>
        <HeaderBlock
          eyebrow="FORMULES"
          title="Choisissez le rythme qui vous convient"
          subtitle="Des formules simples, transparentes, et évolutives selon vos objectifs"
          align="center"
        />

        <div className="max-w-4xl mx-auto">
          <Lead className="text-center mb-8">
            Que vous commenciez tout juste ou que vous visiez une performance précise, je vous
            propose trois niveaux d’accompagnement pour progresser sans vous perdre dans la
            complexité.
          </Lead>
        </div>

        <FeaturesGrid
          items={packs}
          renderItem={(item) => (
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              tone="brand"
              align="center"
            />
          )}
        />
      </SectionWrapper>
    </Section>
  );
}
