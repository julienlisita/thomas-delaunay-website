// src/app/layout.tsx

import ScrollToTopOnRouteChange from '@/components/layout/ScrollToTopOnRouteChange';
import './globals.css';
import { metadata } from './metadata';
export { metadata };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <ScrollToTopOnRouteChange />
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}
