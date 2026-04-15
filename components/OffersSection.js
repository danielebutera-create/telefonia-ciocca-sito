"use client";

import { Smartphone, Wifi, Zap, ArrowRight } from "lucide-react";

const OffersSection = () => {
  const categories = [
    {
      title: "Smartphones",
      icon: <Smartphone size={40} />,
      items: [
        { name: "Offerte iPhone", price: "Passa in sede", tag: "Nuovo" },
        { name: "Gamma Samsung", price: "Contanti o Rate", tag: "Promo" },
        { name: "Smartphone Usati", price: "Garantiti 12 Mesi", tag: "Value" }
      ],
      gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
      lightBg: "#eff6ff",
      accent: "#3b82f6",
    },
    {
      title: "Piani Mobile",
      icon: <Wifi size={40} />,
      items: [
        { name: "Iliad e Fastweb", price: "Piani Alto Giga", tag: "5G" },
        { name: "TIM e Vodafone", price: "Miglior Copertura", tag: "Premium" },
        { name: "Assistenza SIM", price: "Subentro Rapido", tag: "Express" }
      ],
      gradient: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
      lightBg: "#f5f3ff",
      accent: "#8b5cf6",
    },
    {
      title: "Fibra Ottica",
      icon: <Zap size={40} />,
      items: [
        { name: "Internet Casa", price: "Velocità Massima", tag: "Naviga" },
        { name: "Aziende e PIVA", price: "Verifica Copertura", tag: "Speed" },
        { name: "Aree Non Coperte", price: "Soluzioni FWA/5G", tag: "Senza Fili" }
      ],
      gradient: "linear-gradient(135deg, #f97316, #ea580c)",
      lightBg: "#fff7ed",
      accent: "#f97316",
    }
  ];

  return (
    <section id="offerte" style={{ padding: '6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3.5rem' }} className="md:flex-row" >
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
              Le Migliori <span style={{ color: 'var(--primary)' }}>Offerte</span> del Mese
            </h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', maxWidth: '36rem', lineHeight: 1.7 }}>
              Siamo partner ufficiali dei principali operatori. Vieni in negozio a scoprire la soluzione su misura per te.
            </p>
          </div>
          <div style={{ alignSelf: 'flex-end' }}>
            <a href="/offerte" className="btn-outline" style={{ padding: '0.625rem 1.5rem', fontSize: '0.875rem' }}>
              Vedi Tutto
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3" style={{ gap: '1.5rem' }}>
          {categories.map((cat, i) => (
            <div key={i} className="shadow-hover" style={{
              background: 'var(--card)',
              borderRadius: '1.25rem',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.35s ease',
            }}>
              {/* Colored top bar */}
              <div style={{ height: '4px', background: cat.gradient }} />

              <div style={{ padding: '2rem 2rem 1rem' }}>
                {/* Icon */}
                <div style={{
                  width: '4.5rem',
                  height: '4.5rem',
                  borderRadius: '1.25rem',
                  background: cat.gradient,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                  boxShadow: `0 4px 12px -2px ${cat.accent}40`,
                }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: '1.375rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{cat.title}</h3>

                {/* Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {cat.items.map((item, j) => (
                    <div key={j} style={{
                      paddingBottom: '1rem',
                      borderBottom: j < cat.items.length - 1 ? '1px solid var(--border-light)' : 'none',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                        <span style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--text-primary)' }}>{item.name}</span>
                        <span style={{
                          fontSize: '0.6875rem',
                          padding: '0.125rem 0.5rem',
                          background: cat.lightBg,
                          color: cat.accent,
                          borderRadius: '9999px',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                        }}>{item.tag}</span>
                      </div>
                      <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9375rem' }}>{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div style={{ padding: '1rem 2rem 2rem', marginTop: 'auto' }}>
                <button style={{
                  width: '100%',
                  padding: '0.875rem',
                  borderRadius: '0.75rem',
                  background: 'var(--secondary)',
                  color: 'var(--text-primary)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
                onMouseEnter={(e) => { e.target.style.background = cat.gradient; e.target.style.color = 'white'; }}
                onMouseLeave={(e) => { e.target.style.background = 'var(--secondary)'; e.target.style.color = 'var(--text-primary)'; }}
                >
                  Chiedi Informazioni
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Used phones banner */}
        <div style={{
          marginTop: '3rem',
          padding: '2.75rem 3rem',
          borderRadius: '1.25rem',
          background: '#0f172a',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="md:flex-row"
        >
          <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem', color: '#ffffff' }}>Cerchi uno smartphone usato?</h3>
            <p style={{ color: '#cbd5e1', lineHeight: 1.6, fontSize: '1.0625rem' }}>Abbiamo una vasta scelta di telefoni rigenerati o usati garantiti in negozio.</p>
          </div>
          <a href="/offerte" style={{
            position: 'relative',
            zIndex: 1,
            padding: '0.875rem 2rem',
            background: '#ffffff',
            color: '#0f172a',
            borderRadius: '0.75rem',
            fontWeight: 700,
            fontSize: '0.9375rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            transition: 'all 0.25s ease',
            flexShrink: 0,
          }}>
            Vieni a vedere l&#39;usato
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OffersSection;
