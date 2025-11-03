// src/components/about/ValuesSection.tsx

'use client';

import FeaturesGrid from '../patterns/FeaturesGrid';
import FeatureCard from '@/components/data-display/FeatureCard';
import { values } from '@/data/values';
import Section from '../layout/Section';
import SectionWrapper from '../layout/SectionWrapper';
import HeaderBlock from '../patterns/HeaderBlock';
import Lead from '../ui/Lead';

type Props = {
  className?: string;
};

export default function ValuesSection({ className }: Props) {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="VALEURS"
          title="Les valeurs qui guident mon accompagnement"
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
          items={values}
          renderItem={(item) => (
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              variant="outlined"
              tone="neutral"
              align="center"
            />
          )}
        />
      </SectionWrapper>
    </Section>
  );
}
