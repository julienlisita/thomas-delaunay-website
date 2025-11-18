// src/components/pages/legal/Imprint.tsx

import Section from '@/components/layout/Section';
import SectionWrapper from '@/components/layout/SectionWrapper';
import PageHero from '@/components/patterns/PageHero';
import { Scale } from 'lucide-react';

const SITE_NAME = 'Thomas Delaunay Coaching';
const COMPANY_NAME = 'Thomas Delaunay Coaching';
const COMPANY_ACTIVITY = 'Coaching sportif personnalisé et accompagnement nutritionnel';
const COMPANY_ADDRESS = '12 Rue des Acacias, 33600 Pessac';
const COMPANY_PHONE = '06 52 48 93 17';
const COMPANY_EMAIL = 'contact@thomasdelaunay-coaching.fr';
const LEGAL_REPRESENTATIVE = 'Thomas Delaunay';
const COMPANY_LEGAL_FORM = 'Entreprise individuelle / Micro-entreprise';
const COMPANY_SIRET = '902 458 713 00027';
const SITE_DOMAIN = 'www.thomasdelaunay-coaching.fr';

export default function Imprint() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <PageHero
        icon={<Scale size={40} />}
        title="Mentions légales"
        subtitle={`Informations légales concernant l’édition et l’hébergement du site ${SITE_NAME}.`}
        align="center"
      />

      <Section>
        <SectionWrapper className="text-text space-y-10 sm:space-y-12">
          {/* Éditeur */}
          <section aria-labelledby="imprint-editor">
            <h2 id="imprint-editor" className="text-xl font-semibold">
              Éditeur du site
            </h2>
            <p>
              <strong>{COMPANY_NAME}</strong>
              <br />
              {COMPANY_ACTIVITY}
              <br />
              Siège social : <span className="opacity-80">{COMPANY_ADDRESS}</span>
              <br />
              Téléphone : <span className="opacity-80">{COMPANY_PHONE}</span>
              <br />
              Email : <span className="opacity-80">{COMPANY_EMAIL}</span>
              <br />
              Représentant légal : <span className="opacity-80">{LEGAL_REPRESENTATIVE}</span>
              <br />
              Forme juridique : <span className="opacity-80">{COMPANY_LEGAL_FORM}</span>
              <br />
              SIRET : <span className="opacity-80">{COMPANY_SIRET}</span>
            </p>
          </section>

          {/* Hébergement */}
          <section aria-labelledby="imprint-hosting">
            <h2 id="imprint-hosting" className="text-xl font-semibold">
              Hébergement
            </h2>
            <p>
              Le site <strong>{SITE_DOMAIN}</strong> est hébergé par :
              <br />
              <strong>Vercel Inc.</strong>
              <br />
              440 N Barranca Avenue, Suite 4133
              <br />
              Covina, CA 91723, États-Unis
              <br />
              Site web :{' '}
              <a
                href="https://vercel.com"
                className="text-link hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://vercel.com
              </a>
            </p>
          </section>

          {/* Propriété intellectuelle */}
          <section aria-labelledby="imprint-ip">
            <h2 id="imprint-ip" className="text-xl font-semibold">
              Propriété intellectuelle
            </h2>
            <p>
              L’ensemble des éléments du site <strong>{SITE_NAME}</strong> (textes, images,
              graphismes, logo, structure, etc.) est la propriété exclusive de{' '}
              <strong>{COMPANY_NAME}</strong>, sauf mention contraire. Toute reproduction,
              représentation, distribution ou adaptation, totale ou partielle, est interdite sans
              l’accord écrit préalable de <strong>{COMPANY_NAME}</strong>.
            </p>
          </section>

          {/* Responsabilité */}
          <section aria-labelledby="imprint-liability">
            <h2 id="imprint-liability" className="text-xl font-semibold">
              Responsabilité
            </h2>
            <p>
              <strong>{COMPANY_NAME}</strong> s’efforce de fournir des informations exactes et à
              jour sur le site. Toutefois, aucune garantie n’est apportée quant à l’exactitude, la
              complétude ou l’actualité des contenus. En conséquence, l’éditeur ne saurait être tenu
              responsable des erreurs ou omissions, ni des éventuels dommages, directs ou indirects,
              résultant de l’utilisation du site.
            </p>
          </section>

          {/* Données personnelles */}
          <section aria-labelledby="imprint-data">
            <h2 id="imprint-data" className="text-xl font-semibold">
              Données personnelles
            </h2>
            <p>
              Les informations collectées via les formulaires du site (contact, demande
              d’information, éventuelle prise de rendez-vous, etc.) sont utilisées uniquement pour
              répondre à vos demandes ou organiser votre accompagnement. Elles ne sont ni vendues,
              ni cédées à des tiers à des fins commerciales.
            </p>
            <p>
              Pour plus de détails sur la gestion de vos données et vos droits (accès,
              rectification, suppression, etc.), vous pouvez consulter notre{' '}
              <a href="/legal/privacy" className="text-link hover:underline">
                Politique de confidentialité
              </a>
              .
            </p>
          </section>

          {/* Crédits */}
          <section aria-labelledby="imprint-credits">
            <h2 id="imprint-credits" className="text-xl font-semibold">
              Crédits
            </h2>
            <p>
              Design & développement : <strong>Julien Lisita</strong>
              <br />
              Iconographie : Lucide, banques d’images libres de droits (ex : Unsplash, Pexels…) le
              cas échéant.
              <br />
              Dernière mise à jour : {currentYear}
            </p>
          </section>
        </SectionWrapper>
      </Section>
    </div>
  );
}
