// src/app/blog/page.tsx

import Blog from '@/components/pages/Blog';

export const metadata = {
  title: 'À propos – Votre Nom',
  description:
    'En savoir plus sur notre entreprise, nos valeurs, et notre engagement envers nos clients.',
  alternates: {
    canonical: 'https://www.exemple.com/about',
  },
};

export default function BlogPage() {
  return <Blog />;
}
