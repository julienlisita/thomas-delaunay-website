'use client';

import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Lead from '@/components/ui/Lead';

export default function Philosophy() {
  return (
    <Section bgColor="light">
      <SectionWrapper className="max-w-4xl mx-auto text-center">
        <HeaderBlock eyebrow="PHILOSOPHIE" title="Ma philosophie du coaching" />

        <Lead className="mt-6 mb-6">
          Je crois en une discipline douce et durable, où le plaisir du mouvement remplace la
          contrainte. Le coaching n’est pas une performance, mais une rencontre entre votre corps,
          votre mental et vos habitudes de vie.
        </Lead>

        <Lead className="mb-10">
          Mon objectif est de vous aider à construire une relation plus apaisée avec votre corps, à
          travers des programmes simples, adaptés et motivants.
        </Lead>

        {/* Citation décorative */}
        <blockquote className="font-serif italic text-xl text-ocean-dark mt-8 border-l-4 border-coral pl-6 inline-block">
          “Bouger mieux, c’est déjà aller mieux.”
        </blockquote>
      </SectionWrapper>
    </Section>
  );
}
