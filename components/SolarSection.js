"use client";

import { Sun, Zap, PiggyBank, ShieldCheck, ArrowRight, Leaf, Home, Building2, FileText, Users } from "lucide-react";
import Link from "next/link";

const SolarSection = () => {
  const benefits = [
    {
      icon: <PiggyBank size={40} />,
      title: "Risparmio Reale",
      desc: "Ti aiutiamo a trovare il contratto fotovoltaico più conveniente, confrontando le offerte dei principali gestori energetici.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Consulenza Gratuita",
      desc: "Analizziamo la tua situazione energetica e ti orientiamo verso la soluzione giusta, senza costi di consulenza.",
    },
    {
      icon: <FileText size={40} />,
      title: "Contratti Chiari",
      desc: "Ti spieghiamo ogni dettaglio del contratto, condizioni, durata e incentivi fiscali, prima che tu firmi qualsiasi cosa.",
    },
    {
      icon: <Users size={40} />,
      title: "Gestori Certificati",
      desc: "Lavoriamo con operatori energetici selezionati — come Edison — che garantiscono installazione e assistenza nel tempo.",
    },
  ];

  const solutions = [
    { icon: <Home size={28} />, label: "Privati e Famiglie", desc: "Contratti su misura per abitazioni", soon: false },
    { icon: <Building2 size={28} />, label: "Aziende e Negozi", desc: "Soluzioni per attività commerciali", soon: true },
  ];

  return (
    <section id="fotovoltaico" style={{
      padding: '6rem 0',
      background: 'var(--solar-bg)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative sun glow */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-50px',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(249, 168, 37, 0.1) 0%, transparent 60%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            background: 'rgba(249, 168, 37, 0.12)',
            borderRadius: '9999px',
            fontSize: '0.8125rem',
            fontWeight: 600,
            color: '#b8860b',
            marginBottom: '1rem',
          }}>
            <Sun size={16} style={{ color: '#f9a825' }} />
            Nuovo Servizio
          </div>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            fontWeight: 800,
            marginBottom: '0.75rem',
            color: 'var(--text-primary)',
          }}>
            Fotovoltaico:{' '}
            <span style={{
              background: 'linear-gradient(135deg, #5cb030 0%, #f9a825 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>l'Energia del Sole a Casa Tua</span>
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '40rem', margin: '0 auto', lineHeight: 1.7 }}>
            Telefonia Ciocca ora è anche Energia & Fotovoltaico. Ti affianchiamo nella scelta del contratto giusto con i migliori gestori — l'installazione la fanno loro, il tuo interesse lo tuteliamo noi.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: '1.25rem', marginBottom: '3rem' }}>
          {benefits.map((b, i) => (
            <div key={i} style={{
              background: 'var(--card)',
              padding: '2rem',
              borderRadius: '1.25rem',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.3s ease',
              display: 'flex',
              flexDirection: 'column',
            }}
            className="shadow-hover"
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#5cb030'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}
            >
              <div style={{
                width: '4.5rem',
                height: '4.5rem',
                borderRadius: '1.25rem',
                background: 'rgba(92, 176, 48, 0.08)',
                color: '#5cb030',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                {b.icon}
              </div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{b.title}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Solutions + CTA row */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          background: 'var(--card)',
          padding: '2.5rem',
          borderRadius: '1.5rem',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
        }}
        className="md:flex-row"
        >
          {/* Left — solutions */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <h3 style={{ fontSize: '1.375rem', fontWeight: 800, color: 'var(--text-primary)' }}>Chi seguiamo</h3>
            {solutions.map((s, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.25rem',
                background: 'var(--green-bg)',
                borderRadius: '0.875rem',
                border: '1px solid rgba(92, 176, 48, 0.1)',
              }}>
                <div style={{
                  width: '3.5rem',
                  height: '3.5rem',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, #5cb030, #3d8b1a)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  {s.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>{s.label}</span>
                    {s.soon && (
                      <span style={{
                        fontSize: '0.625rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.07em',
                        background: '#ef4444',
                        color: 'white',
                        padding: '0.2rem 0.5rem',
                        borderRadius: '9999px',
                        lineHeight: 1,
                      }}>
                        In arrivo
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — CTA card */}
          <div style={{
            flex: 1,
            background: 'linear-gradient(135deg, #5cb030 0%, #3d8b1a 100%)',
            borderRadius: '1.25rem',
            padding: '2.5rem',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: '-30px', right: '-30px', opacity: 0.1 }}>
              <Sun size={160} />
            </div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>Vuoi sapere quanto puoi risparmiare?</h3>
              <p style={{ opacity: 0.85, marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Vieni in negozio o contattaci: analizziamo la tua bolletta e ti proponiamo il contratto più adatto, con i gestori che lavorano meglio nella tua zona.
              </p>
              <Link href="/contatti" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 2rem',
                background: 'white',
                color: '#3d8b1a',
                borderRadius: '0.75rem',
                fontWeight: 800,
                fontSize: '0.9375rem',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
              }}>
                Parla con un Consulente
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarSection;
