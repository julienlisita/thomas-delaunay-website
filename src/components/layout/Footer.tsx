// src/components/layout/Footer.tsx

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Bloc 1 : À propos */}
        <div className="footer-col footer-about">
          <h4 className="footer-title">À propos</h4>
          <div className="footer-logo">
            <Image
              src="/images/logo-white.png"
              alt="Logo Thomas Delaunay Coaching"
              fill
              style={{ objectFit: 'contain' }}
              sizes="(max-width: 768px) 120px, (max-width: 1024px) 140px, 160px"
              priority
            />
          </div>
          <p className="footer-slogan">Coaching sportif & bien-être</p>
          <p className="footer-description">
            Coaching à domicile, en extérieur et à distance — Bordeaux & Gironde.
          </p>
        </div>

        {/* Bloc 2 : Navigation */}
        <div className="footer-col footer-nav">
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li>
              <Link href="/">Accueil</Link>
            </li>
            <li>
              <Link href="/about">À propos</Link>
            </li>
            <li>
              <Link href="/coaching">Coaching</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Bloc 3 : Contact */}
        <div className="footer-col footer-contact">
          <h4 className="footer-title">Contact</h4>
          <p className="footer-contact-item">📍 Bordeaux & alentours</p>
          <p className="footer-contact-item">
            📧{' '}
            <a href="mailto:contact@thomasdelaunay-coaching.fr">
              contact@thomasdelaunay-coaching.fr
            </a>
          </p>
          <p className="footer-contact-item">📞 06 00 00 00 00</p>

          <div className="footer-socials">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FiFacebook className="footer-icon" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FiInstagram className="footer-icon" />
            </a>
          </div>
        </div>
      </div>

      {/* Ligne + Bas de page */}
      <div className="footer-bottom">
        <p className="footer-copy">
          © {new Date().getFullYear()} Thomas Delaunay Coaching — Tous droits réservés
        </p>
        <nav className="footer-legal">
          <Link href="/legal/imprint">Mentions légales</Link>
          <Link href="/legal/privacy">Politique de confidentialité</Link>
        </nav>
      </div>
    </footer>
  );
}
