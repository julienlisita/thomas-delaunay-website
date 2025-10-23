// src/components/sections/Hero.tsx

'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button';
import PageTitle from '@/components/ui/PageTitle';
// import './Hero.css';

export default function Hero() {
  return (
    <section
      className="hero w-full  flex flex-col justify-center  text-[#3B2F2F] px-4 text-center"
      style={{ minHeight: 'calc(100vh - var(--header-height))' }}
    >
      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/home/hero.avif') " }}
      />
      {/* Overlay noir avec opacité */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Logo */}
      <div className="max-w-4xl mx-auto space-y-6 z-10">
        <div className="flex justify-center">
          <Image
            src="/images/logo.png"
            alt="Company Care & Services logo"
            width={300}
            height={200}
          />
        </div>
        <PageTitle color="#FFFFFF"> Le sport à votre rythme</PageTitle>
        <p className="text-sm font-bold sm:text-lg text-white/80">
          Retrouvez énergie et confiance grâce à un accompagnement personnalisé, bienveillant et
          durable.
        </p>
        <div className="flex flex-col sm:flex-row justify-center  items-center gap-4">
          <Button href="/contact" variant="primary">
            Me contacter
          </Button>
          <Button href="/coaching" variant="secondary">
            Programmes
          </Button>
        </div>
      </div>
    </section>
  );
}
