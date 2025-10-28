// src/components/contact/ContactInfoSection.tsx

'use client';

import FeatureCard from '../data-display/FeatureCard';
import FeaturesGrid from './../patterns/FeaturesGrid';
import { contactInfos } from '@/data/contact';

type Props = {
  className?: string;
};

export default function ContactInfoSection({ className }: Props) {
  return (
    <FeaturesGrid
      eyebrow="Contact"
      title="Nos coordonnées"
      subtitle="Joignez-nous par téléphone, email, ou venez nous voir."
      items={contactInfos}
      align="left"
      gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
      className={className}
      renderItem={(item) => (
        <FeatureCard
          icon={item.icon}
          title={item.title}
          description={item.description}
          variant="default"
          tone="warning"
          align="center"
        />
      )}
    />
  );
}
