import Section from '@/components/layout/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import CTAButton from '@/components/ui/Button';

type CaseHighlightProps = {
  title: string;
  name: string;
  age: number;
  goal: string;
  duration: string;
  format: string;
  quote: string;
  context: string;
  results: string[];
};

export default function CaseHighlight({
  title,
  name,
  age,
  goal,
  duration,
  format,
  quote,
  context,
  results,
}: CaseHighlightProps) {
  return (
    <Section bgColor="#A8D5BA15">
      <div className="max-w-5xl mx-auto px-6 py-16 text-ocean-dark">
        <SectionTitle>{title}</SectionTitle>

        {/* Bloc principal */}
        <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
          {/* Texte principal */}
          <div>
            <h3 className="text-2xl font-heading text-ocean-night mb-3">
              {name}, {age} ans
            </h3>

            <ul className="text-sm text-ocean-night/70 mb-6">
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

            <p className="text-ocean-night/80 leading-relaxed mb-6">{context}</p>

            <div className="bg-white/80 rounded-2xl shadow-md p-6 border border-mint/40">
              <blockquote className="italic text-lg text-ocean-night/90 font-serif">
                “{quote}”
              </blockquote>
            </div>

            <div className="mt-6">
              <h4 className="font-heading text-lg text-ocean-night mb-2">Résultats clés :</h4>
              <ul className="list-disc list-inside text-ocean-night/80 space-y-1">
                {results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image illustrative */}
          <div className="hidden md:block">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/images/testimonials/success-sophie.png"
                alt={`Photo illustrative du parcours de ${name}`}
                className="object-cover w-full h-[420px]"
              />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
