"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      background: '#0f172a',
      color: 'white',
      paddingTop: '4rem',
      paddingBottom: '2rem',
    }}>
      <div className="container">
        <div className="grid md:grid-cols-4" style={{ gap: '2.5rem' }}>

          {/* Brand Column */}
          <div>
            <Link href="/" style={{ display: 'block', marginBottom: '1rem' }}>
              <Image
                src="/images/logo-telefonia-ciocca.jpeg"
                alt="Telefonia Ciocca"
                width={180}
                height={50}
                style={{ height: '44px', width: 'auto', filter: 'brightness(1.1)' }}
              />
            </Link>
            <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              La tua porta d&apos;accesso al mondo digitale a Capena e Passo Corese. Professionisti in telefonia, energia, fotovoltaico e fibra ottica da oltre 25 anni.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://www.facebook.com/telefoniacioccacapena" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.target.style.color = '#e87722'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >Facebook</a>
              <a href="https://www.instagram.com/telefoniacioccacapena/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.6875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => e.target.style.color = '#e87722'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}
              >Instagram</a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.25rem' }}>Navigazione</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { label: 'Fotovoltaico', href: '/fotovoltaico-capena' },
                { label: 'Energia', href: '/risparmio-bolletta' },
                { label: 'Fibra', href: '/fibra-capena' },
                { label: 'Sicurezza', href: '/sicurezza-capena' },
                { label: 'Assistenza', href: '/assistenza-smartphone-capena' },
                { label: 'Contatti', href: '/contatti' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = '#e87722'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.45)'}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sedi & Contatti */}
          <div>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '1.25rem' }}>Sedi & Contatti</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>

              {/* Sede Capena */}
              <li>
                <div style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#e87722', marginBottom: '0.25rem' }}>Capena (RM)</div>
                <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                  Via Tiberina, 28C — 00060 Capena<br />
                  <a href="tel:069073674" style={{ color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = '#e87722'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.55)'}
                  >06 9073674</a>
                </div>
              </li>

              {/* Sede Passo Corese */}
              <li>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                  <div style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#e87722' }}>Passo Corese (RI)</div>
                  <span style={{ fontSize: '0.5rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', background: 'rgba(232,119,34,0.15)', color: '#e87722', padding: '0.125rem 0.375rem', borderRadius: '9999px', border: '1px solid rgba(232,119,34,0.3)' }}>Nuova Apertura</span>
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                  Via Garibaldi, 72 — Fara in Sabina<br />
                  <a href="tel:069073674" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.target.style.color = '#e87722'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.35)'}
                  >06 9073674 (stesso numero)</a>
                </div>
              </li>

              {/* Orari */}
              <li>
                <div style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#e87722', marginBottom: '0.25rem' }}>Orari</div>
                <div style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                  Lun–Ven: 9:00–13:00 / 15:30–19:30<br />
                  Sabato: 9:00–13:00<br />
                  <span style={{ color: 'rgba(255,255,255,0.3)' }}>Domenica: chiuso</span>
                </div>
              </li>

              {/* Email */}
              <li>
                <div style={{ fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#e87722', marginBottom: '0.125rem' }}>Email</div>
                <a href="mailto:info@telefoniaciocca.it" style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.target.style.color = '#e87722'}
                  onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.55)'}
                >info@telefoniaciocca.it</a>
              </li>
            </ul>
          </div>

          {/* Partner */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.07)',
            padding: '1.5rem',
            borderRadius: '1rem',
            border: '1px solid rgba(232, 119, 34, 0.35)',
          }}>
            <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, marginBottom: '0.75rem', color: 'white' }}>Partner Project</h4>
            <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.75)', marginBottom: '1rem', lineHeight: 1.6 }}>
              Scopri il nostro portale di analisi bollette e consulenza indipendente:
            </p>
            <a href="https://telefoni.it" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              width: '100%',
              padding: '0.625rem',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '0.625rem',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: 'white',
              transition: 'all 0.2s ease',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#e87722'; e.currentTarget.style.color = '#e87722'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)'; e.currentTarget.style.color = 'white'; }}
            >
              Visita Telefoni.it
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: '3rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.75rem',
          color: 'rgba(255, 255, 255, 0.3)',
        }}>
          <p>© {currentYear} Telefonia Ciocca - Quisqui srl - P.IVA 15157791003</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <Link href="/privacy" style={{ color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = '#e87722'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.3)'}
            >Privacy Policy</Link>
            <Link href="/cookies" style={{ color: 'rgba(255,255,255,0.3)', transition: 'color 0.2s' }}
              onMouseEnter={(e) => e.target.style.color = '#e87722'}
              onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.3)'}
            >Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
