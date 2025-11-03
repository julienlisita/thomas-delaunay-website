// src/components/coaching/Formats.tsx

'use client';

import Image from 'next/image';
import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import HeaderBlock from '@/components/patterns/HeaderBlock';
import Lead from '@/components/ui/Lead';
import { Home, Trees, Laptop, RefreshCw } from 'lucide-react';

const formats = [
  {
    icon: Home,
    title: 'Coaching individuel à domicile',
    text: 'Séances 100 % personnalisées selon votre niveau et votre matériel.',
    location: 'Chez vous',
    image: '/images/coaching/formats-home.png',
  },
  {
    icon: Trees,
    title: 'Coaching en extérieur',
    text: 'En bord de mer, dans un parc ou sur un spot nature.',
    location: 'Plein air',
    image: '/images/coaching/formats-outdoor.png',
  },
  {
    icon: Laptop,
    title: 'Programme à distance',
    text: 'Suivi en ligne avec bilans réguliers et conseils personnalisés.',
    location: 'À distance',
    image: '/images/coaching/formats-remote.png',
  },
  {
    icon: RefreshCw,
    title: 'Séance de reprise',
    text: 'Séance unique pour réapprendre à bouger et retrouver confiance.',
    location: 'Tous lieux',
    image: '/images/coaching/formats-restart.png',
  },
];

export default function Formats() {
  return (
    <Section>
      <SectionWrapper>
        <HeaderBlock
          eyebrow="MODALITÉS"
          title="Où et comment se déroulent les séances ?"
          align="center"
        />

        <div className="max-w-3xl mx-auto">
          <Lead className="text-center mb-10">
            Que vous commenciez tout juste ou que vous visiez une performance précise, les séances
            s’adaptent à votre contexte : chez vous, en plein air ou à distance.
          </Lead>
        </div>

        {/* Media list avec miniatures réelles à gauche */}
        <ul
          className="max-w-4xl mx-auto divide-y divide-ocean-light/50"
          aria-label="Modalités de déroulement des séances"
        >
          {formats.map(({ icon: Icon, title, text, location, image }) => (
            <li key={title} className="py-6">
              <div className="flex items-start gap-5">
                {/* Miniature */}
                <div className="relative w-36 h-24 shrink-0 rounded-2xl overflow-hidden shadow-sm ring-1 ring-ocean-light/50">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 144px, 192px"
                    className="object-cover"
                  />
                </div>

                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-heading text-ocean-dark text-lg flex items-center gap-2">
                      <Icon className="w-5 h-5 text-ocean-azur" aria-hidden="true" />
                      {title}
                    </h3>
                    {/* Badge lieu */}
                    <span className="inline-flex items-center rounded-full border border-ocean-azur/30 bg-ocean-azur/5 px-2.5 py-1 text-xs font-medium text-ocean-azur">
                      {location}
                    </span>
                  </div>
                  <p className="mt-2 text-ocean-night/80 leading-relaxed">{text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </SectionWrapper>
    </Section>
  );
}
