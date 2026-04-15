"use client";

import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  // Recensioni reali dal profilo Google Business di Telefonia Ciocca (Capena)
  // Estratte manualmente il 2026-04-15 — valutazione media 4,3 / 5 su 92 recensioni
  // Selezionate per coprire i temi disponibili: qualità servizio, fibra/telefonia, smartphone, cliente storico
  const reviews = [
    {
      name: "Maria Serena Amendola",
      role: "Qualità del Servizio",
      text: "Personale competente, gentile e paziente, anche per una boomer come me! Hanno avuto la capacità di risolvere una problematica tecnica inerente al mio caso, cosa non da poco poiché denota abilità nell'ascoltare le esigenze del cliente. Un 5 stelle meritatissimo!",
      stars: 5,
    },
    {
      name: "Dino Moriconi",
      role: "Fibra & Telefonia",
      text: "Il servizio è stato eccellente, mi hanno consigliato bene per Fastweb con cui mi trovo benissimo.",
      stars: 5,
    },
    {
      name: "Elio Morosi",
      role: "Smartphone & Assistenza",
      text: "Veloci e professionali, ho comprato un nuovo cellulare, mi hanno passato i dati del telefono dal vecchio al nuovo.",
      stars: 5,
    },
    {
      name: "Fiorangelo Servi",
      role: "Cliente Storico",
      text: "Mi servo da loro da anni e sono sempre professionali e gentilissimi. Prezzi smartphone bassi e ampia gamma di servizi.",
      stars: 5,
    },
  ];

  return (
    <section id="recensioni" style={{ padding: '6rem 0', position: 'relative', overflow: 'hidden' }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(3, 105, 161, 0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        zIndex: 0,
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ display: 'flex', gap: '0.125rem', marginBottom: '1rem' }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={22} fill="#f9a825" color="#f9a825" />)}
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            La Parola ai nostri <span style={{ color: 'var(--primary)' }}>Clienti</span>
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '32rem' }}>
            La nostra migliore pubblicità sono le persone che si affidano a noi ogni giorno.
          </p>
        </div>

        {/* Review cards — 2x2 su desktop, stack su mobile */}
        <div className="grid md:grid-cols-2" style={{ gap: '1.5rem' }}>
          {reviews.map((rev, i) => (
            <div key={i} style={{
              background: 'var(--card)',
              padding: '2.25rem',
              borderRadius: '1.25rem',
              boxShadow: 'var(--shadow)',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
            className="shadow-hover"
            >
              <Quote size={48} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: 'var(--primary)', opacity: 0.06 }} />

              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.125rem', marginBottom: '1.25rem' }}>
                {[...Array(rev.stars)].map((_, j) => <Star key={j} size={14} fill="#f9a825" color="#f9a825" />)}
              </div>

              {/* Quote */}
              <p style={{ fontSize: '1.0625rem', fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7, flex: 1, position: 'relative', zIndex: 1 }}>
                "{rev.text}"
              </p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: 'auto' }}>
                <div style={{
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: '9999px',
                  background: 'var(--primary-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  color: 'var(--primary)',
                  fontSize: '0.9375rem',
                }}>
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--text-primary)' }}>{rev.name}</div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{rev.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <a
            href="https://maps.google.com/?q=Telefonia+Ciocca+Capena"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ borderRadius: '9999px', padding: '0.75rem 2rem' }}
          >
            Leggi altre recensioni su Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
