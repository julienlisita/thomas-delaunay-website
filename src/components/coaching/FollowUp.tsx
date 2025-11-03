// src/components/coaching/FollowUp.tsx

'use client';

import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Lead from '@/components/ui/Lead';

import { ClipboardList, TrendingUp, Salad, MessageCircleHeart } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Bilan initial complet',
    desc: 'Forme, objectifs, habitudes : on part de votre réalité pour définir un cap clair.',
  },
  {
    icon: TrendingUp,
    title: 'Ajustements progressifs',
    desc: 'On adapte le programme selon vos progrès et votre rythme de vie.',
  },
  {
    icon: Salad,
    title: 'Conseils nutrition & récupération',
    desc: 'Habitudes simples et durables pour mieux récupérer et rester énergique.',
  },
  {
    icon: MessageCircleHeart,
    title: 'Soutien & motivation',
    desc: 'Des échanges réguliers pour garder le cap et rester serein.',
  },
];

export default function FollowUp() {
  return (
    <Section bgColor="#A8D5BA15">
      <SectionWrapper>
        <HeaderBlock eyebrow="SUIVI" title="Un accompagnement sur la durée" />

        <Lead className="text-center mb-10">
          Le vrai changement se construit dans le temps. Chaque programme inclut un suivi progressif
          et des échanges réguliers :
        </Lead>

        {/* === Timeline === */}
        <div className="relative max-w-3xl mx-auto">
          {/* Ligne verticale */}
          <div
            className="
              absolute left-8 md:left-1/2 transform md:-translate-x-1/2
              w-[2px] h-full bg-ocean-azur/20
            "
            aria-hidden="true"
          ></div>

          <ul className="space-y-12">
            {steps.map(({ icon: Icon, title, desc }, index) => (
              <li
                key={title}
                className={`
                  relative flex items-start gap-6
                  ${index % 2 === 0 ? 'md:flex-row-reverse md:text-right' : 'md:flex-row'}
                `}
              >
                {/* Point + icône */}
                <div
                  className="
                    relative z-10 flex items-center justify-center
                    w-12 h-12 bg-white rounded-full shadow-md ring-4 ring-[#A8D5BA15]
                    border border-ocean-azur/30 mx-auto md:mx-0
                  "
                >
                  <Icon className="w-6 h-6 text-ocean-azur" />
                </div>

                {/* Contenu */}
                <div
                  className={`
                    w-full md:w-1/2
                    ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}
                  `}
                >
                  <h3 className="font-heading text-lg text-ocean-dark mb-2">{title}</h3>
                  <p className="text-ocean-night/80 leading-relaxed">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>
    </Section>
  );
}
