import Image from 'next/image';

export const metadata = {
  title: "Chi Siamo - Oltre 25 anni di eccellenza | Telefonia Ciocca",
  description: "Da oltre 25 anni, il tuo punto di riferimento a Capena per telecomunicazioni, energia e assistenza tecnica professionale.",
  alternates: { canonical: "https://www.telefoniaciocca.it/chi-siamo" },
};

export default function ChiSiamo() {
  const reviews = [
    { name: 'Roberto Bannoni', text: 'Personale cordiale con vasta gamma di servizi. Da anni mi servo da loro e mi sono trovato sempre bene.' },
    { name: 'Marina Marini Coen', text: 'Gentile..disponibile..e capace..mi è piaciuto perché non è come molti che si credono padreterni perché sanno usare un cellulare..lo consiglio' },
    { name: 'Claudia Balboni', text: 'Sempre preparati e gentili' },
    { name: 'Eddie De Angelis', text: 'Cortesi e disponibili.' },
  ];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      {/* Hero */}
      <section className="container" style={{ marginBottom: '5rem', textAlign: 'center' }}>
        <span style={{ color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.8125rem', marginBottom: '0.75rem', display: 'block' }}>Una storia di passione</span>
        <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 800, marginBottom: '1.25rem' }}>
          <span className="gradient-text">Oltre 25 Anni al Tuo Servizio</span>
        </h1>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', lineHeight: 1.7 }}>
            Telefonia Ciocca è molto più di un semplice negozio. Siamo un punto di riferimento a Capena per tutto ciò che riguarda la connettività, l&apos;energia e l&apos;assistenza tecnica professionale.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="container" style={{ marginBottom: '5rem' }}>
        <div className="grid md:grid-cols-2" style={{ gap: '3rem', alignItems: 'center' }}>
          <div style={{
            position: 'relative',
            height: '450px',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-xl)',
          }}>
            <Image
              src="/images/team-interno.jpg"
              alt="Orazio con l'Ispettore Bill nel negozio Telefonia Ciocca"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Telefonia Ciocca: Vendita di telefoni a Capena</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Siamo un negozio specializzato in telecomunicazioni, energia, assistenza tecnica, e vendita di smartphone, accessori e dispositivi per la casa connessa.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Da oltre 25 anni, aiutiamo i nostri clienti a risparmiare, scegliere l&apos;offerta migliore, cambiare operatore e risolvere ogni problema tecnico con professionalità, trasparenza e passione.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.0625rem', lineHeight: 1.7 }}>
                Collaboriamo con i principali gestori nazionali, proponendo soluzioni personalizzate per privati e aziende. Siamo a Capena, pronti a seguirti passo dopo passo con competenza, cortesia e attenzione alle tue esigenze.
              </p>
              <blockquote style={{
                borderLeft: '4px solid var(--gold)',
                paddingLeft: '1.5rem',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                fontSize: '1.125rem',
                fontWeight: 600,
                marginTop: '0.5rem',
              }}>
                &quot;Con Telefonia Ciocca ogni parola conta, ogni offerta vale, ogni cliente è importante. Scegli la qualità, scegli noi.&quot;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container" style={{ marginBottom: '5rem' }}>
        <div style={{
          background: 'var(--secondary)',
          padding: '3rem',
          borderRadius: '1.5rem',
          border: '1px solid var(--border)',
        }}>
          <div className="grid md:grid-cols-3" style={{ gap: '2.5rem', textAlign: 'center' }}>
            {[
              { icon: '🏆', title: 'Professionalità', desc: 'Competenza maturata in due decenni di attività nel settore.' },
              { icon: '🤝', title: 'Trasparenza', desc: 'Contratti chiari e consigli onesti per il tuo reale risparmio.' },
              { icon: '❤️', title: 'Passione', desc: 'Amiamo quello che facciamo e curiamo ogni dettaglio per te.' },
            ].map((v) => (
              <div key={v.title}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--gold)' }}>{v.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Chi ci ha scelto</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Ecco cosa dicono di noi i nostri clienti su Google.</p>
        </div>
        <div className="grid md:grid-cols-2" style={{ gap: '1.5rem' }}>
          {reviews.map((review) => (
            <div key={review.name} style={{
              background: 'var(--card)',
              padding: '2rem',
              borderRadius: '1.25rem',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
            }}>
              <div style={{ position: 'absolute', top: '1.25rem', right: '1.5rem', fontSize: '3rem', color: 'var(--gold)', opacity: 0.1, fontFamily: 'Georgia, serif', lineHeight: 1 }}>&quot;</div>
              <div style={{ display: 'flex', gap: '0.125rem', marginBottom: '1rem', color: 'var(--gold)' }}>
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p style={{ fontSize: '1.0625rem', fontStyle: 'italic', color: 'var(--text-primary)', marginBottom: '1.25rem', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>{review.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '2.75rem',
                  height: '2.75rem',
                  borderRadius: '9999px',
                  background: 'var(--primary-bg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontWeight: 700,
                  fontSize: '0.9375rem',
                }}>
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.9375rem' }}>{review.name}</div>
                  <div style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Cliente Verificato</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
