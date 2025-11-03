'use client';

import Image from 'next/image';
import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Lead from '@/components/ui/Lead';
import { Dumbbell, HeartPulse, Apple, StretchHorizontal } from 'lucide-react';

const pillars = [
  {
    icon: Dumbbell,
    title: 'Force & Tonus musculaire',
    text: 'Renforcer votre corps pour le rendre plus stable, plus fort et plus confiant.',
  },
  {
    icon: HeartPulse,
    title: 'Cardio & Endurance douce',
    text: 'Retrouver souffle et vitalité à travers des séances basées sur la respiration et la mobilité.',
  },
  {
    icon: Apple,
    title: 'Nutrition & Bien-être',
    text: 'Apprendre à nourrir son corps simplement, sans contrainte.',
  },
  {
    icon: StretchHorizontal,
    title: 'Mobilité & Prévention',
    text: 'Entretenir la souplesse, libérer les tensions, prévenir les douleurs.',
  },
];

export default function Pillars() {
  return (
    <Section className="relative overflow-hidden">
      {/* === Image de fond floutée couvrant toute la section === */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/coaching/ocean-soft-blur.png"
          alt=""
          fill
          priority
          className="object-cover w-full h-full opacity-60"
        />
      </div>

      {/* === Contenu === */}
      <SectionWrapper>
        <HeaderBlock eyebrow="MÉTHODE" title="Les 4 piliers de ma méthode" align="center" />

        <div className="max-w-3xl mx-auto">
          <Lead className="text-center mb-12">
            Ces piliers guident chaque étape de votre accompagnement : comprendre, planifier,
            progresser et ancrer des habitudes qui tiennent dans la vraie vie.
          </Lead>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="
                flex flex-col items-center text-center p-8 rounded-2xl
                bg-white/30 backdrop-blur-md border border-white/20 shadow-sm
                transition-transform hover:-translate-y-1 hover:shadow-lg
              "
            >
              <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-ocean-azur/10">
                <Icon className="w-7 h-7 text-ocean-azur" />
              </div>
              <h3 className="font-heading text-lg text-ocean-dark mb-2">{title}</h3>
              <p className="text-ocean-night/80 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </Section>
  );
}
