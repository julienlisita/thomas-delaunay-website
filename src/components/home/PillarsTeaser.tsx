// src/components/home/PillarsTeaser.tsx

'use client';

import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Lead from '@/components/ui/Lead';
import ActionsStack from '@/components/patterns/ActionsStack';
import FeatureCard from '@/components/data-display/FeatureCard';
import FeaturesGrid from '@/components/patterns/FeaturesGrid';
import { pillars } from '@/data/pillars';

export default function PillarsTeaser() {
  return (
    <Section bgColor="light">
      <SectionWrapper>
        <HeaderBlock eyebrow="MÉTHODE" title="Les 4 piliers de ma méthode" align="center" />

        <div className="max-w-3xl mx-auto">
          <Lead className="text-center mb-8">
            Ces piliers guident chaque étape de votre accompagnement : comprendre, planifier,
            progresser et ancrer des habitudes qui tiennent dans la vraie vie.
          </Lead>
        </div>

        <FeaturesGrid
          items={pillars}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 sm:gap-6 lg:gap-8"
          renderItem={(item) => (
            <FeatureCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              variant="default"
              tone="calm-contrast"
              align="center"
            />
          )}
        />

        <ActionsStack
          align="center"
          className="mt-8"
          items={[{ label: 'Démarrer mon programme', href: '/contact', variant: 'primary' }]}
        />
      </SectionWrapper>
    </Section>
  );
}
