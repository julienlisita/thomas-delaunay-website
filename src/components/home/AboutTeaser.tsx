// src/components/home/AboutTeaser.tsx

'use client';

import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Split from '@/components/patterns/Split';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Lead from '@/components/ui/Lead';
import ActionsStack from '@/components/patterns/ActionsStack';
import Prose from '../ui/Prose';
import Media from '../ui/Media';

export default function AboutTeaser() {
  return (
    <Section>
      <SectionWrapper className="max-w-6xl mx-auto">
        <HeaderBlock eyebrow="RENCONTRE" title="À propos de Thomas" />

        <Split className="mt-4">
          {/* Colonne texte */}
          <div>
            <Lead className="mb-4">
              Ancien nageur et passionné de surf, j’ai toujours vu le mouvement comme une source
              d’équilibre. Aujourd’hui, j’accompagne chacun à retrouver cette harmonie à travers une
              approche douce, réaliste et personnalisée.
            </Lead>

            <ActionsStack
              align="left"
              items={[{ label: 'Découvrir mon parcours', href: '/about', variant: 'primary' }]}
            />
          </div>

          {/* Colonne visuel */}
          <div>
            <Media
              src="/images/home/portrait.png" // remplace par ton image
              alt="Séance de coaching personnalisée en extérieur"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              radius="2xl"
              shadow
              className="max-w-xl mx-auto"
            />
          </div>
        </Split>
      </SectionWrapper>
    </Section>
  );
}
