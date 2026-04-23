import Image from 'next/image';

export const metadata = {
  title: "Offerte Smartphone, Fibra e Mobile a Capena",
  description: "Scopri le migliori offerte su smartphone, attivazioni SIM, fibra ottica ed energia a Capena. Le migliori tariffe per il tuo risparmio.",
  alternates: { canonical: "https://www.telefoniaciocca.it/offerte" },
};

export default function Offerte() {
  const categories = [
    {
      title: 'Vendita Smartphone & Accessori',
      items: ['Samsung Galaxy Series', 'Apple iPhone', 'Oppo & Xiaomi', 'Smartwatch & Wearables', 'Accessori Originali'],
      desc: 'Ampia gamma di dispositivi pronti per la consegna o disponibili su ordinazione con consulenza esperta.'
    },
    {
      title: 'Attivazione SIM & Piani Mobile',
      items: ['Fastweb Mobile', 'Iliad', 'TIM', 'Wind Tre', 'Very Mobile', 'Vodafone', 'Kena Mobile'],
      desc: 'Confrontiamo le migliori tariffe per darti il massimo dei Giga al miglior prezzo possibile.'
    },
    {
      title: 'Ritiro e Valutazione Usato',
      items: ['Valutazione immediata', 'Partner Second Hand Mobile', 'Sconto sul nuovo', 'Cancellazione sicura dati'],
      desc: 'Portaci il tuo vecchio smartphone: lo valutiamo e ti aiutiamo a passare al nuovo modello in modo conveniente.'
    }
  ];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <section className="container" style={{ marginBottom: '3.5rem' }}>
        <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)', fontWeight: 800, marginBottom: '1rem' }}>
          <span className="gradient-text">Le Nostre Offerte</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '42rem', lineHeight: 1.7 }}>
          Selezioniamo le migliori proposte del mercato per garantirti tecnologia all&apos;avanguardia e risparmio concreto.
        </p>
      </section>

      <section className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {categories.map((cat, i) => (
          <div key={cat.title} style={{
            background: 'var(--card)',
            padding: '2.5rem',
            borderRadius: '1.5rem',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <div className="grid md:grid-cols-2" style={{ gap: '2.5rem', alignItems: 'center' }}>
              <div style={{ order: i % 2 !== 0 ? 2 : 0 }}>
                <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{cat.title}</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.0625rem', lineHeight: 1.7 }}>{cat.desc}</p>
                <ul className="grid sm:grid-cols-2" style={{ gap: '0.625rem' }}>
                  {cat.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                      <span style={{ color: 'var(--gold)', fontWeight: 700 }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ position: 'relative', height: '280px', borderRadius: '1rem', overflow: 'hidden', background: 'var(--secondary)', border: '1px solid var(--border-light)' }}>
                <Image
                  src="/images/hero.png"
                  alt={cat.title}
                  fill
                  className="object-cover"
                  style={{ opacity: 0.7, transition: 'all 0.5s ease' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(255,255,255,0.8) 0%, transparent 50%)' }} />
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="container" style={{ marginTop: '3.5rem' }}>
        <div style={{
          background: 'var(--card)',
          padding: '3rem',
          borderRadius: '1.5rem',
          textAlign: 'center',
          border: '1px solid var(--border)',
          boxShadow: 'var(--shadow)',
        }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.75rem', color: 'var(--text-primary)' }}>Non trovi quello che cerchi?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '36rem', margin: '0 auto 1.5rem', lineHeight: 1.7 }}>
            Le offerte cambiano ogni giorno. Passa in negozio in Via Tiberina 28C a Capena per scoprire le promozioni flash riservate ai nostri clienti.
          </p>
          <a href="tel:069073674" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            Richiedi Disponibilità
          </a>
        </div>
      </section>
    </div>
  );
}
