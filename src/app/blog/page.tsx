// src/app/blog/page.tsx

import Blog from '@/components/pages/Blog';

export const metadata = {
  title: 'Blog — Conseils & inspiration',
  description:
    'Nutrition simple, mouvement, récupération, motivation : des articles pour prolonger votre progression au quotidien.',
  alternates: {
    canonical: 'https://www.thomasdelaunay.fr/blog',
  },
};

export default function BlogPage() {
  return <Blog />;
}
