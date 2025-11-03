// src/components/about/Mission.tsx

'use client';

import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Split from '@/components/patterns/Split';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Lead from '@/components/ui/Lead';
import ActionsStack from '@/components/patterns/ActionsStack';
import Media from '@/components/ui/Media';

export default function Mission() {
  return (
    <Section bgColor="sand">
      <SectionWrapper className="max-w-6xl mx-auto">
        <HeaderBlock eyebrow="MISSION" title="Ma mission" />

        <Split className="mt-4">
          {/* Colonne visuel (à gauche sur desktop) */}
          <div>
            <Media
              src="/images/about/mission.png"
              alt="Thomas Delaunay en séance de coaching individuel"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              radius="2xl"
              className="max-w-xl mx-auto"
            />
          </div>

          {/* Colonne texte (à droite sur desktop) */}
          <div>
            <Lead className="mb-4">
              Ce qui me passionne aujourd’hui, ce n’est plus la performance, mais le progrès humain.
              Voir quelqu’un retrouver confiance, se redresser, se sentir mieux dans son corps et
              dans sa tête — c’est ce qui me donne envie de transmettre. Chaque accompagnement est
              une rencontre, un échange, une aventure à taille humaine. Je crois profondément que le
              sport est un outil de transformation — pas pour devenir quelqu’un d’autre, mais pour
              se retrouver soi-même.
            </Lead>

            <ActionsStack
              align="left"
              items={[{ label: 'Découvrir mon coaching', href: '/coaching', variant: 'primary' }]}
            />
          </div>
        </Split>
      </SectionWrapper>
    </Section>
  );
}
