// src/components/pages/Contact.tsx

import HeroIntro from '../section/HeroIntro';
import { Mail } from 'lucide-react';
import ContactFormSection from '../section/ContactFormSection';
import ContactInfoSection from '../section/ContactInfoSection';
import Cta from '../ui/Cta';
import LocationSection from '../section/LocationSection';

export default function Contact() {
  return (
    <div>
      <HeroIntro
        icon={<Mail size={40} />}
        title="Contactez-moi"
        subtitle="Expliquez-moi vos besoins ou vos objectifs — je vous réponds rapidement pour définir votre accompagnement."
        align="center"
      />
      <ContactFormSection
        eyebrow="Contact"
        title="Parlez-nous de votre besoin"
        subtitle="Remplissez le formulaire, nous revenons vers vous rapidement."
        align="left"
        aside={
          <div>
            <h3>Informations</h3>
            <p>
              Nous traitons vos données conformément à notre politique de confidentialité. Vous
              pouvez aussi nous contacter au <strong>+33 6 12 34 56 78</strong>.
            </p>
          </div>
        }
        asidePosition="right"
      />
      <ContactInfoSection />
      <LocationSection align="left" />
      <Cta
        title="Envie d’en savoir plus avant de commencer ?"
        description="Découvrez comment se déroulent les séances et les différents formats de coaching."
        align="left"
        primaryLabel="Découvrir le coaching"
        primaryHref="/coaching"
      />
    </div>
  );
}
