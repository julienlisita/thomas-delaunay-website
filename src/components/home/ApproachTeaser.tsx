// src/components/home/ApproachTeaser.tsx

'use client';

import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Lead from '@/components/ui/Lead';
import ActionsStack from '@/components/patterns/ActionsStack';

export default function ApproachTeaser() {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="Mon approche"
          title="Écoute, progression, plaisir du mouvement"
          subtitle="Un accompagnement individualisé qui respecte votre rythme"
          align="center"
        />

        <Lead className="text-center mb-6">
          Chaque personne est différente, et chaque corps a son propre rythme. Mon rôle est de vous
          aider à retrouver équilibre, énergie et confiance, grâce à un accompagnement fondé sur
          l’écoute, la progression et le plaisir du mouvement.
        </Lead>

        <ActionsStack
          align="center"
          items={[{ label: 'Découvrir mes services', href: '/coaching', variant: 'primary' }]}
          className="mt-2"
        />
      </SectionWrapper>
    </Section>
  );
}
