"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Telefonia', href: '/telefonia' },
  { name: 'Energia', href: '/energia' },
  { name: 'Fotovoltaico', href: '/fotovoltaico-capena' },
  { name: 'Fibra', href: '/fibra-capena' },
  { name: 'Sicurezza', href: '/sicurezza-capena' },
  { name: 'Passo Corese', href: '/passo-corese' },
  { name: 'Contatti', href: '/contatti' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <style>{`
        /* ── checkbox nascosta ma funzionante ── */
        #nav-chk {
          position: absolute;
          left: -9999px;
          width: 1px; height: 1px;
          opacity: 0;
        }

        /* ── hamburger label ── */
        .nav-ham {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px; height: 48px;
          cursor: pointer;
          border-radius: 8px;
          color: #0f172a;
          flex-shrink: 0;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }

        /* icone: apri/chiudi */
        .ham-open  { display: block; }
        .ham-close { display: none;  }
        #nav-chk:checked ~ nav .ham-open  { display: none;  }
        #nav-chk:checked ~ nav .ham-close { display: block; }

        /* ── menu mobile ── */
        .nav-mobile {
          display: none;
          position: fixed;
          top: 70px; left: 0; right: 0; bottom: 0;
          background: #fff;
          z-index: 998;
          overflow-y: auto;
          padding: 1rem 1.5rem 3rem;
          border-top: 2px solid #e2e8f0;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }
        #nav-chk:checked ~ .nav-mobile {
          display: block;
        }

        /* ── desktop: nascondi ham, mostra links ── */
        .nav-desktop { display: none; }
        @media (min-width: 768px) {
          .nav-ham     { display: none !important; }
          .nav-desktop { display: flex; align-items: center; gap: 1.25rem; }
          .nav-mobile  { display: none !important; }
        }
      `}</style>

      {/* Checkbox — DEVE venire prima di <nav> per il selettore ~ */}
      <input type="checkbox" id="nav-chk" />

      {/* NAVBAR */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: 70, zIndex: 1000,
        background: 'white',
        borderBottom: '1px solid #e2e8f0',
        boxShadow: '0 1px 4px rgba(0,0,0,0.07)',
        display: 'flex', alignItems: 'center',
      }}>
        <div style={{
          width: '100%', maxWidth: '1280px', margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/images/logo-telefonia-ciocca.jpeg"
              alt="Telefonia Ciocca"
              width={180} height={50}
              style={{ height: '54px', width: 'auto' }}
              priority
            />
          </Link>

          {/* Link desktop */}
          <div className="nav-desktop">
            {navLinks.map(l => (
              <Link key={l.name} href={l.href} style={{
                fontSize: '0.8125rem', fontWeight: 600, textDecoration: 'none',
                color: pathname === l.href ? '#1a6fb5' : '#475569',
                borderBottom: pathname === l.href ? '2px solid #1a6fb5' : '2px solid transparent',
                paddingBottom: '2px', whiteSpace: 'nowrap',
              }}>{l.name}</Link>
            ))}
            <a href="tel:069073674" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
              padding: '0.5rem 1rem', borderRadius: '0.625rem',
              background: '#e87722', color: 'white',
              fontWeight: 700, fontSize: '0.8125rem', textDecoration: 'none',
            }}><Phone size={14} />Chiamaci</a>
          </div>

          {/* Hamburger label — LABEL, non button */}
          <label htmlFor="nav-chk" className="nav-ham" aria-label="Menu">
            <span className="ham-open">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="3" y1="6"  x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </svg>
            </span>
            <span className="ham-close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="4" y1="4" x2="20" y2="20"/>
                <line x1="20" y1="4" x2="4"  y2="20"/>
              </svg>
            </span>
          </label>
        </div>
      </nav>

      {/* MENU MOBILE */}
      <div className="nav-mobile">
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {navLinks.map(l => (
            <li key={l.name}>
              <Link href={l.href} style={{
                display: 'block', padding: '0.875rem 1rem',
                fontSize: '1.125rem', fontWeight: 600,
                borderRadius: '0.75rem', textDecoration: 'none',
                color: pathname === l.href ? '#1a6fb5' : '#0f172a',
                background: pathname === l.href ? '#eff6ff' : 'transparent',
              }}>{l.name}</Link>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <a href="tel:069073674" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            padding: '1rem', borderRadius: '0.75rem',
            background: '#e87722', color: 'white',
            fontWeight: 700, fontSize: '1.0625rem', textDecoration: 'none',
          }}>
            <Phone size={18} />
            Chiamaci: 06 9073 674
          </a>

          <a href="https://wa.me/39069073674" target="_blank" rel="noopener noreferrer" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
            padding: '1rem', borderRadius: '0.75rem',
            background: '#25d366', color: 'white',
            fontWeight: 700, fontSize: '1.0625rem', textDecoration: 'none',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
