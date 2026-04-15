export const metadata = {
  title: "Privacy Policy | Telefonia Ciocca",
  description: "Informativa sulla privacy di Telefonia Ciocca ai sensi del GDPR e del D.Lgs. 196/2003.",
};

export default function Privacy() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <section className="container" style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '2rem' }}>
          <span className="gradient-text">Privacy Policy</span>
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Titolare del Trattamento</h2>
            <p>Il titolare del trattamento dei dati è <strong>Quisqui srl</strong>, con sede legale in Via Mozart, 7 — 00060 Castelnuovo di Porto (RM), P.IVA 15157791003, operante con il marchio commerciale <strong>Telefonia Ciocca</strong>.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Dati Raccolti</h2>
            <p>Attraverso il sito web possiamo raccogliere le seguenti categorie di dati personali:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Dati identificativi (nome, cognome, email) forniti volontariamente tramite il form di contatto</li>
              <li>Dati di navigazione (indirizzo IP, browser, pagine visitate) raccolti automaticamente dai sistemi informatici</li>
              <li>Dati relativi alle bollette energetiche, esclusivamente quando caricati dall&apos;utente tramite il portale Telefoni.it</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Finalità del Trattamento</h2>
            <p>I dati personali sono trattati per le seguenti finalità:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Rispondere alle richieste di contatto e fornire consulenza</li>
              <li>Analisi delle bollette energetiche ai fini della consulenza sul risparmio</li>
              <li>Adempimenti di legge e obblighi contrattuali</li>
              <li>Miglioramento del servizio e analisi statistiche aggregate</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Base Giuridica</h2>
            <p>Il trattamento è fondato sul consenso dell&apos;interessato (art. 6, par. 1, lett. a del GDPR), sull&apos;esecuzione di misure precontrattuali (art. 6, par. 1, lett. b) e sul legittimo interesse del titolare (art. 6, par. 1, lett. f).</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Diritti dell&apos;Interessato</h2>
            <p>In qualsiasi momento è possibile esercitare i diritti previsti dagli artt. 15–22 del GDPR (accesso, rettifica, cancellazione, limitazione, portabilità, opposizione) scrivendo a <a href="mailto:info@telefoniaciocca.it" style={{ color: 'var(--primary)', fontWeight: 600 }}>info@telefoniaciocca.it</a>.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Conservazione dei Dati</h2>
            <p>I dati personali saranno conservati per il tempo strettamente necessario alle finalità per cui sono stati raccolti e comunque non oltre i termini previsti dalla normativa vigente.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Contatti</h2>
            <p>Per qualsiasi richiesta relativa alla privacy, è possibile contattare il titolare all&apos;indirizzo email <a href="mailto:info@telefoniaciocca.it" style={{ color: 'var(--primary)', fontWeight: 600 }}>info@telefoniaciocca.it</a> oppure telefonicamente al numero <a href="tel:069073674" style={{ color: 'var(--primary)', fontWeight: 600 }}>06 9073674</a>.</p>
          </section>

          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
            Ultimo aggiornamento: Aprile 2026
          </p>
        </div>
      </section>
    </div>
  );
}
