import { Award, Users, Wrench, Check } from "lucide-react";
import Image from "next/image";

const AboutSection = () => {
  const stats = [
    { icon: <Award size={40} />, val: "25+", unit: "Anni", desc: "di competenza nel settore telecomunicazioni ed energia.", color: "var(--primary)" },
    { icon: <Users size={40} />, val: "5000+", unit: "Clienti", desc: "famiglie e aziende ci hanno scelto per le proprie utenze.", color: "var(--gold)" },
    { icon: <Wrench size={40} />, val: "24h", unit: "Riparazioni", desc: "interventi rapidi e garantiti su ogni tipo di dispositivo.", color: "var(--color-repairs)" },
  ];

  const reasons = [
    "Consulenza personalizzata e gratuita delle bollette.",
    "Partner ufficiali dei principali operatori nazionali.",
    "Niente attese telefoniche: parli direttamente con noi in negozio.",
    "Garanzia su ogni prodotto venduto e riparazione effettuata."
  ];

  return (
    <section id="chi-siamo" style={{ padding: '6rem 0', background: 'var(--secondary)' }}>
      <div className="container">
        {/* Section header */}
        <div style={{ maxWidth: '48rem', margin: '0 auto', textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
            La nostra Storia, la tua <span style={{ color: 'var(--primary)' }}>Sicurezza</span>
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            Fondata nel 1999, Telefonia Ciocca è cresciuta insieme alla tecnologia. Siamo il punto di riferimento a Capena per chi cerca trasparenza, risparmio e assistenza qualificata.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-3" style={{ gap: '1.5rem', marginBottom: '4rem' }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              background: 'var(--card)',
              padding: '2.25rem',
              borderRadius: '1.25rem',
              border: '1px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              boxShadow: 'var(--shadow-sm)',
            }}
            className="shadow-hover"
            >
              <div style={{ width: '4.5rem', height: '4.5rem', borderRadius: '1.25rem', background: `${stat.color}10`, color: stat.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                {stat.icon}
              </div>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: stat.color, lineHeight: 1, marginBottom: '0.25rem' }}>{stat.val}</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{stat.unit}</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{stat.desc}</p>
            </div>
          ))}
        </div>

        {/* Why us section — layout compatto */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0',
          background: 'var(--card)',
          borderRadius: '1.5rem',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
          overflow: 'hidden',
        }}
        className="md:flex-row"
        >
          {/* Immagine — fascia laterale compatta */}
          <style>{`
            .bill-orazio-wrap {
              position: relative;
              width: 100%;
              height: 220px;
              background: var(--card);
            }
            .bill-orazio-wrap img {
              object-fit: contain !important;
              object-position: center center !important;
            }
            @media (min-width: 768px) {
              .bill-orazio-wrap {
                width: auto;
                height: auto;
                flex: 0 0 440px;
                min-height: 340px;
                background: none;
              }
              .bill-orazio-wrap img {
                object-fit: cover !important;
                object-position: 48% center !important;
              }
            }
          `}</style>
          <div className="bill-orazio-wrap">
            <Image
              src="/images/bill-orazio.jpg"
              alt="Orazio Ciocca con l'Ispettore Bill - Telefonia Ciocca Capena"
              fill
              style={{ objectFit: 'contain', objectPosition: 'center center' }}
            />
          </div>
          {/* Testo */}
          <div style={{ flex: 1, padding: '2.5rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Perché scegliere noi?</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {reasons.map((text, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '1.0625rem', color: 'var(--text-primary)', lineHeight: 1.6 }}>
                  <Check size={26} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.1rem' }} />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
