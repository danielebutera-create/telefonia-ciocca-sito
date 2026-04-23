export const metadata = {
  title: "Contattaci o vieni a trovarci a Capena | Telefonia Ciocca",
  description: "Hai bisogno di assistenza o vuoi richiedere un preventivo gratuito per fibra, fotovoltaico o riparazioni? Contattaci subito.",
  alternates: { canonical: "https://telefoniaciocca.it/contatti" },
};

const MAPS_NAV = "https://maps.google.com/?q=Telefonia+Ciocca,+Via+Tiberina+28C,+00060+Capena+RM&dirflg=d";

export default function Contatti() {
  const info = [
    { title: 'Telefono Capena', value: '06 9073674', detail: 'Disponibile anche su WhatsApp', icon: '📞', action: 'tel:069073674' },
    { title: 'Telefono Passo Corese', value: '0765 213394', detail: 'Sede di Via Garibaldi, 72', icon: '📞', action: 'tel:+390765213394' },
    { title: 'Email', value: 'info@telefoniaciocca.it', detail: 'Rispondiamo entro 24 ore', icon: '✉️', action: 'mailto:info@telefoniaciocca.it' },
    { title: 'Indirizzo', value: 'Via Tiberina, 28C — Capena (RM)', detail: 'Clicca per le indicazioni', icon: '📍', action: MAPS_NAV },
  ];

  const orari = [
    { giorni: 'Lunedì - Venerdì', mattina: '09:00 - 13:00', pomeriggio: '15:30 - 19:30' },
    { giorni: 'Sabato', mattina: '09:00 - 13:00', pomeriggio: 'CHIUSO' },
    { giorni: 'Domenica', mattina: 'CHIUSO', pomeriggio: 'CHIUSO' },
  ];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <section className="container" style={{ marginBottom: '3.5rem' }}>
        <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)', fontWeight: 800, marginBottom: '1rem' }}>
          <span className="gradient-text">Contatti</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '42rem', lineHeight: 1.7 }}>
          Siamo a tua completa disposizione. Vieni a trovarci in negozio o contattaci per qualsiasi informazione su offerte e assistenza.
        </p>
      </section>

      <section className="container grid lg:grid-cols-3" style={{ gap: '1.5rem', marginBottom: '3.5rem' }}>
        <div style={{ gridColumn: 'span 1' }} className="lg:col-span-2">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Contact cards — layout orizzontale per gestire testi lunghi */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {info.map((item) => (
                <a key={item.title} href={item.action}
                  target={item.action.startsWith('tel:') || item.action.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noreferrer"
                  style={{
                    background: 'var(--card)',
                    padding: '1.25rem 1.5rem',
                    borderRadius: '1rem',
                    border: '1px solid var(--border)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    textDecoration: 'none',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div style={{ fontSize: '1.75rem', flexShrink: 0, lineHeight: 1 }}>{item.icon}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>{item.title}</div>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.value}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.125rem' }}>{item.detail}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Card indirizzo + pulsante navigatore (no iframe, sito cookie-free) */}
            <div style={{
              borderRadius: '1.25rem',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              boxShadow: 'var(--shadow)',
              background: 'var(--card)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{
                  width: '3rem', height: '3rem',
                  borderRadius: '0.75rem',
                  background: 'rgba(217, 119, 6, 0.1)',
                  color: 'var(--gold)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem',
                  flexShrink: 0,
                }}>📍</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.25rem' }}>Sede Principale</div>
                  <div style={{ fontWeight: 800, fontSize: '1.125rem', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>Via Tiberina, 28C — Capena (RM)</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>CAP 00060 · Facilmente raggiungibile in auto</div>
                </div>
              </div>
              <a href={MAPS_NAV} target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  padding: '0.875rem 1.25rem', borderRadius: '0.75rem',
                  background: 'var(--primary)', color: 'white',
                  fontWeight: 700, fontSize: '0.9375rem', textDecoration: 'none',
                }}>
                📍 Apri in Google Maps
              </a>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                Cliccando sul pulsante verrai reindirizzato a Google Maps. Il caricamento della mappa avviene solo dopo il tuo click esplicito.
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Hours */}
          <div style={{
            background: 'var(--card)',
            padding: '2rem',
            borderRadius: '1.25rem',
            border: '1px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <h3 style={{ fontSize: '1.375rem', fontWeight: 800, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>Orari di Apertura</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {orari.map((item) => (
                <div key={item.giorni} style={{ paddingBottom: '0.875rem', borderBottom: '1px solid var(--border-light)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--gold)', marginBottom: '0.375rem', fontSize: '0.9375rem' }}>{item.giorni}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                    <span>Mattina:</span>
                    <span style={{ fontWeight: 600 }}>{item.mattina}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                    <span>Pomeriggio:</span>
                    <span style={{ fontWeight: 600 }}>{item.pomeriggio}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(217, 119, 6, 0.06) 0%, transparent 100%)',
            padding: '2rem',
            borderRadius: '1.25rem',
            border: '1px solid rgba(217, 119, 6, 0.15)',
          }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: 800, marginBottom: '0.625rem', color: 'var(--text-primary)' }}>Richiedi Assistenza</h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.6 }}>Inviaci una foto della tua bolletta su WhatsApp per un&apos;analisi immediata.</p>
            <a href="https://wa.me/39069073674" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', fontSize: '0.9375rem' }}>
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Legal */}
      <section className="container">
        <div style={{
          textAlign: 'center',
          padding: '1.5rem',
          borderTop: '1px solid var(--border)',
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
        }}>
          Sede Legale: Quisqui srl - Via Mozart, 7 - 00060 Castelnuovo di Porto (RM)
        </div>
      </section>
    </div>
  );
}
