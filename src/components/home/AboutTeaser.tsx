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
        <HeaderBlock
          eyebrow="À propos"
          title="Un coaching humain et pragmatique"
          subtitle="Méthode claire, objectifs réalistes, résultats mesurables"
          align="center"
        />

        <Split className="mt-4">
          {/* Colonne texte */}
          <div>
            <Lead className="mb-4">
              Je vous accompagne avec une approche simple : comprendre vos besoins, construire un
              plan actionnable, suivre vos progrès et ajuster au bon rythme.
            </Lead>

            <Prose className="mb-6">
              <h3>Ce qui me guide</h3>
              <ul>
                <li>Écoute active et pédagogie — on part de votre réalité.</li>
                <li>Progression durable — petites victoires, grands effets.</li>
                <li>Méthode mesurable — suivi, feedback et ajustements.</li>
              </ul>

              <h3>Pour qui ?</h3>
              <ul>
                <li>Reprise en douceur après une pause ou une blessure.</li>
                <li>Objectif forme et énergie au quotidien.</li>
                <li>Préparation d’un défi perso (5K, rando, sport co, etc.).</li>
              </ul>
            </Prose>

            <ActionsStack
              align="left"
              items={[
                { label: 'Découvrir mon parcours', href: '/about', variant: 'primary' },
                { label: 'Prendre contact', href: '/contact', variant: 'secondary' },
              ]}
            />
          </div>

          {/* Colonne visuel */}
          <div>
            <Media
              src="/images/home/portrait.jpg" // remplace par ton image
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
