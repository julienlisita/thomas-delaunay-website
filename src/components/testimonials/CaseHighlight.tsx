// src/components/testimonials/CaseHighlight.tsx

import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';
import CTAButton from '@/components/ui/Button';
import Split from '@/components/patterns/Split';
import Media from '@/components/ui/Media';
import HeaderBlock from '../patterns/HeaderBlock';

type CaseHighlightProps = {
  title: string;
  eyebrow: string;
  name: string;
  age: number;
  goal: string;
  duration: string;
  format: string;
  quote: string;
  context: string;
  results: string[];
  imageSrc?: string;
  imageAlt?: string;
};

export default function CaseHighlight({
  eyebrow,
  title,
  name,
  age,
  goal,
  duration,
  format,
  quote,
  context,
  results,
  imageSrc = '/images/testimonials/success-sophie.png',
  imageAlt = 'Photo illustrative du parcours',
}: CaseHighlightProps) {
  return (
    <Section bgColor="#A8D5BA15">
      <SectionWrapper>
        <HeaderBlock eyebrow={eyebrow} title={title} align="center" />
        <div className="max-w-4xl mx-auto">
          {/*
              Split :
              - Sur mobile : 1 colonne → l’image est rendue en premier (au-dessus du texte)
              - Sur desktop : 2 colonnes → avec reverse, l’image passe à droite
            */}
          <Split reverse className="mt-8">
            {/* Bloc image (en premier pour l’ordre mobile) */}
            <div className="md:justify-self-end">
              <Media
                src={imageSrc}
                alt={`${imageAlt} de ${name}`}
                width={1200}
                height={900}
                radius="2xl"
                shadow
                imgClassName="object-cover w-full h-56 sm:h-72 md:h-[420px]"
              />
            </div>

            {/* Bloc texte */}
            <div className="space-y-6 text-ocean-dark">
              <div>
                <h3 className="text-2xl font-heading text-ocean-night mb-3">
                  {name}, {age} ans
                </h3>
                <ul className="text-sm text-ocean-night/70">
                  <li>
                    🎯 <strong>Objectif :</strong> {goal}
                  </li>
                  <li>
                    🕒 <strong>Durée :</strong> {duration}
                  </li>
                  <li>
                    📍 <strong>Format :</strong> {format}
                  </li>
                </ul>
              </div>

              <p className="text-ocean-night/80 leading-relaxed">{context}</p>

              <div
                className="bg-white/80 rounded-2xl shadow-md p-6 border"
                style={{ borderColor: 'var(--color-mint, #A8D5BA)' }}
              >
                <blockquote className="italic text-lg text-ocean-night/90 font-serif">
                  “{quote}”
                </blockquote>
              </div>

              <div>
                <h4 className="font-heading text-lg text-ocean-night mb-2">Résultats clés :</h4>
                <ul className="list-disc list-inside text-ocean-night/80 space-y-1">
                  {results.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Split>
        </div>
      </SectionWrapper>
    </Section>
  );
}
