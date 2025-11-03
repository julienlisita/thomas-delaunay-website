// src/components/home/Journey.tsx

'use client';

import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import Split from '@/components/patterns/Split';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Lead from '@/components/ui/Lead';
import ActionsStack from '@/components/patterns/ActionsStack';
import Media from '@/components/ui/Media';

export default function Journey() {
  return (
    <Section>
      <SectionWrapper className="max-w-6xl mx-auto">
        <HeaderBlock eyebrow="PARCOURS" title="Un parcours guidé par le mouvement" />

        <Split className="mt-4">
          {/* Colonne texte (à droite sur desktop) */}
          <div>
            <Lead className="mb-4">
              Ancien nageur et passionné de surf, j’ai toujours trouvé dans le mouvement une forme
              d’équilibre. Après plusieurs années passées à explorer différentes pratiques
              physiques, j’ai choisi de mettre mon expérience au service des autres.
            </Lead>

            <Lead className="mb-6">
              Aujourd’hui, j’accompagne chacun à retrouver énergie, confiance et bien-être, à
              travers une approche douce, structurée et durable.
            </Lead>

            <ActionsStack
              align="left"
              items={[{ label: 'Découvrir mon approche', href: '/coaching', variant: 'primary' }]}
            />
          </div>
          {/* Colonne visuel (à gauche sur desktop) */}
          <div>
            <Media
              src="/images/about/journey.png"
              alt="Thomas Delaunay — séance de coaching en extérieur"
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              radius="xl"
              className="max-w-xl mx-auto"
            />
          </div>
        </Split>
      </SectionWrapper>
    </Section>
  );
}
