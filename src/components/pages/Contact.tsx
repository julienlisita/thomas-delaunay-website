// src/components/pages/Contact.tsx

import PageHero from '@/components/patterns/PageHero';
import { Mail } from 'lucide-react';
import ContactFormSection from '../contact/ContactFormSection';
import ContactInfoSection from '../contact/ContactInfoSection';
import Cta from '../patterns/Cta';
import LocationSection from '../contact/LocationSection';

export default function Contact() {
  return (
    <div>
      <PageHero
        icon={<Mail size={40} />}
        title="Contactez-moi"
        subtitle="Expliquez-moi vos besoins ou vos objectifs — je vous réponds rapidement pour définir votre accompagnement."
        align="center"
      />
      <ContactFormSection
        eyebrow="Contact"
        title="Parlez-nous de votre besoin"
        subtitle="Remplissez le formulaire, nous revenons vers vous rapidement."
        align="center"
      />
      <ContactInfoSection />
      <LocationSection align="center" />
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
