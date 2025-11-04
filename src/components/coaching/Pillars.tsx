// src/components/coaching/Pillars.tsx
'use client';

import Image from 'next/image';
import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Lead from '@/components/ui/Lead';
import FeatureCard from '@/components/data-display/FeatureCard';
import { pillars } from '@/data/pillars';

export default function Pillars() {
  return (
    <Section className="relative overflow-hidden">
      {/* Fond image floutée couvrant la section */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/coaching/ocean-soft-blur.png"
          alt=""
          fill
          priority
          className="object-cover w-full h-full opacity-60"
        />
      </div>

      <SectionWrapper>
        <HeaderBlock eyebrow="MÉTHODE" title="Les 4 piliers de ma méthode" align="center" />

        <div className="max-w-4xl mx-auto">
          <Lead className="text-center mb-12">
            Ces piliers guident chaque étape de votre accompagnement : comprendre, planifier,
            progresser et ancrer des habitudes qui tiennent dans la vraie vie.
          </Lead>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map(({ icon, title, description }) => (
            <FeatureCard
              key={title}
              icon={icon}
              title={title}
              description={description}
              tone="ice"
              variant="default"
              align="center"
              styleVars={{
                '--card-radius': '1rem', // ~ rounded-2xl
                '--card-icon-size': '1.75rem', // ~ w-7 h-7
              }}
            />
          ))}
        </div>
      </SectionWrapper>
    </Section>
  );
}
