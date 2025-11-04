// src/components/coaching/Approach.tsx

'use client';

import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Lead from '@/components/ui/Lead';
import Media from '../ui/Media';

export default function Approach() {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock eyebrow="PHILOSOPHIE" title="Mon approche du coaching" />

        <div className="max-w-4xl mx-auto text-center">
          <Lead className="text-center mb-6">
            Chaque personne est différente, et chaque corps a son propre rythme. Mon rôle est de
            vous aider à retrouver équilibre, énergie et confiance, grâce à un accompagnement sur
            mesure fondé sur l’écoute, la progression et le plaisir du mouvement.
            <br />
            <br />
            Je crois en une discipline douce : pas de pression, pas de performance imposée —
            seulement une démarche réaliste, adaptée, et tournée vers votre bien-être global.
          </Lead>
        </div>

        {/* Image d’ambiance */}
        <Media
          src="/images/coaching/approach.png"
          alt="Thomas Delaunay"
          width={1200}
          height={900}
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
          radius="xl"
          className="max-w-xl mx-auto"
        />
      </SectionWrapper>
    </Section>
  );
}
