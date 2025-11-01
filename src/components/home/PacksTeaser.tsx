// src/components/home/PacksTeaser.tsx

'use client';

import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Lead from '@/components/ui/Lead';
import ActionsStack from '@/components/patterns/ActionsStack';
import FeatureCard from '../data-display/FeatureCard';
import FeaturesGrid from '../patterns/FeaturesGrid';
import { packs } from '@/data/packs';

export default function PacksTeaser() {
  return (
    <Section bgColor="sand">
      <SectionWrapper>
        <HeaderBlock
          eyebrow="OFFRES"
          title="Choisissez le rythme qui vous convient"
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
          items={packs}
          renderItem={(item) => (
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              variant="default"
              tone="neutral"
              align="center"
            />
          )}
        />
        <ActionsStack
          align="center"
          className="mt-8"
          items={[
            { label: 'Découvrir les formules détaillées', href: '/coaching', variant: 'primary' },
          ]}
        />
      </SectionWrapper>
    </Section>
  );
}
