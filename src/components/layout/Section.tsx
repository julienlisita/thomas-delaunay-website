// src/components/layout/Section.tsx

import React from 'react';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
};

const resolveColor = (color: string): string => {
  if (color.startsWith('#') || color.startsWith('rgb') || color.startsWith('hsl')) {
    return color;
  }
  return `var(--color-${color})`;
};

export default function Section({ children, className = '', bgColor }: SectionProps) {
  const style = bgColor ? { backgroundColor: resolveColor(bgColor) } : undefined;
  return (
    <section className={`py-8 sm:py-10 md:py-12 lg:py-16 ${className}`} style={style}>
      {children}
    </section>
  );
}
