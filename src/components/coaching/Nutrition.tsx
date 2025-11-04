// src/components/coaching/Nutrition.tsx

import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Lead from '@/components/ui/Lead';
import Prose from '@/components/ui/Prose';
import Media from '@/components/ui/Media';
import Split from '@/components/patterns/Split';

export default function Nutrition() {
  return (
    <Section bgColor="#EAF5EF">
      <SectionWrapper>
        {/* Header de section */}
        <HeaderBlock
          eyebrow="Focus bien-être"
          title="Nutrition & rééquilibrage"
          subtitle="🍽️ Bien manger, c’est aussi bien bouger."
          align="center"
        />

        {/* Split : image d'abord (mobile), à droite dès md grâce à reverse */}
        <Split reverse className="mt-8">
          {/* Visuel */}
          <div>
            <Media
              src="/images/coaching/nutrition.png"
              alt="Assiette équilibrée et repas sain"
              width={1200}
              height={900}
              radius="2xl"
              shadow
              imgClassName="object-cover w-full h-56 sm:h-72 md:h-[420px]"
            />
          </div>

          {/* Texte principal */}
          <div className="space-y-6">
            <Lead>
              L’alimentation joue un rôle essentiel dans la progression et le bien-être. C’est
              pourquoi chaque accompagnement inclut une dimension nutritionnelle personnalisée,
              adaptée à votre mode de vie.
            </Lead>

            <Prose>
              <p>
                Il ne s’agit pas de suivre un régime strict, mais de retrouver une relation apaisée
                avec la nourriture, basée sur la compréhension et la cohérence.
              </p>
              <ul>
                <li>Identifier les bonnes habitudes à ancrer durablement</li>
                <li>
                  Équilibrer vos repas selon vos objectifs (énergie, perte de poids, récupération)
                </li>
                <li>Mieux gérer votre hydratation et vos rythmes alimentaires</li>
                <li>Redécouvrir le plaisir d’une alimentation simple, naturelle et consciente</li>
              </ul>
              <p className="italic text-coral">
                🍏 L’objectif : que votre alimentation devienne un levier de bien-être, pas une
                contrainte.
              </p>
            </Prose>
          </div>
        </Split>
      </SectionWrapper>
    </Section>
  );
}
