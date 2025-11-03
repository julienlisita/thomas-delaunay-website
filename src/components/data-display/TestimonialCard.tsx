// src/components/data-display/TestimonialCard.tsx

'use client';

import Image from 'next/image';
import './TestimonialCard.css';

export type TestimonialCardProps = {
  name: string;
  age?: number;
  city?: string;
  goal?: string;
  quote: string;
  avatarUrl?: string;
  displayDate?: string;
  highlight?: boolean;
  variant?: 'default' | 'compact' | 'horizontal';
  className?: string;
};

export function TestimonialCard({
  name,
  age,
  city,
  goal,
  quote,
  avatarUrl,
  displayDate,
  highlight = false,
  variant = 'default',
  className = '',
}: TestimonialCardProps) {
  return (
    <figure
      className={[
        't-card',
        highlight ? 't-card--highlight' : '',
        variant === 'compact' ? 't-card--compact' : '',
        variant === 'horizontal' ? 't-card--horizontal' : '',
        className,
      ].join(' ')}
    >
      {/* quote */}
      <blockquote className="t-quote">
        <span aria-hidden="true" className="t-quote-mark">
          “
        </span>
        <p>{quote}</p>
      </blockquote>

      {/* header: avatar + identité */}
      <div className="t-card-head">
        {avatarUrl ? (
          <span className="t-avatar">
            <Image
              src={avatarUrl}
              alt={`Photo de ${name}`}
              fill
              sizes="48px"
              style={{ objectFit: 'cover' }}
            />
          </span>
        ) : (
          <span aria-hidden="true" className="t-avatar t-avatar--placeholder" />
        )}

        <figcaption className="t-id">
          <span className="t-name">{name}</span>

          {/* Âge + ville */}
          {(age || city) && (
            <span className="t-meta">
              {[age && `${age} ans`, city].filter(Boolean).join(' · ')}
            </span>
          )}

          {/* Objectif ou date */}
          {(goal || displayDate) && (
            <span className="t-date">
              {[goal && `Objectif : ${goal}`, displayDate].filter(Boolean).join(' · ')}
            </span>
          )}
        </figcaption>
      </div>
    </figure>
  );
}
