export const metadata = {
  title: "Cookie Policy | Telefonia Ciocca",
  description: "Informativa sull'utilizzo dei cookie sul sito di Telefonia Ciocca.",
};

export default function Cookies() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <section className="container" style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '2rem' }}>
          <span className="gradient-text">Cookie Policy</span>
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Cosa sono i Cookie</h2>
            <p>I cookie sono piccoli file di testo che i siti web visitati inviano al browser dell&apos;utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Sono utilizzati per diverse finalità, hanno caratteristiche diverse, e possono essere utilizzati sia dal titolare del sito che da terze parti.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Tipologie di Cookie Utilizzati</h2>
            
            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>Cookie Tecnici (necessari)</h3>
            <p>Questi cookie sono essenziali per il corretto funzionamento del sito e non possono essere disabilitati. Non memorizzano alcuna informazione personale identificabile.</p>

            <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: 'var(--text-primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>Cookie Analitici</h3>
            <p>Utilizziamo eventuali cookie analitici per comprendere come i visitatori interagiscono con il sito web, aiutandoci a migliorare la navigazione e i contenuti offerti. Questi dati sono raccolti in forma aggregata ed anonima.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Gestione dei Cookie</h2>
            <p>È possibile gestire le preferenze relative ai cookie direttamente dal proprio browser. Di seguito i link alle istruzioni dei principali browser:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Contatti</h2>
            <p>Per qualsiasi domanda relativa alla presente Cookie Policy, è possibile contattarci all&apos;indirizzo <a href="mailto:info@telefoniaciocca.it" style={{ color: 'var(--primary)', fontWeight: 600 }}>info@telefoniaciocca.it</a>.</p>
          </section>

          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '2rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
            Ultimo aggiornamento: Aprile 2026
          </p>
        </div>
      </section>
    </div>
  );
}
