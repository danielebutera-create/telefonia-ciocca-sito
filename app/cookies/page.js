export const metadata = {
  title: "Cookie Policy | Telefonia Ciocca",
  description: "Informativa sull'utilizzo dei cookie sul sito telefoniaciocca.it. Il sito utilizza esclusivamente cookie tecnici necessari e non richiede consenso.",
  alternates: { canonical: "https://telefoniaciocca.it/cookies" },
};

const sectionTitle = {
  fontSize: '1.25rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
  marginBottom: '0.75rem',
};

const subTitle = {
  fontSize: '1.0625rem',
  fontWeight: 700,
  color: 'var(--text-primary)',
  marginTop: '1.25rem',
  marginBottom: '0.5rem',
};

export default function Cookies() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <section className="container" style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '0.5rem' }}>
          <span className="gradient-text">Cookie Policy</span>
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Ai sensi dell&apos;art. 122 del D.Lgs. 196/2003 (Codice Privacy) e del Provvedimento del Garante per la Protezione dei Dati Personali del 10 giugno 2021 (&quot;Linee guida cookie e altri strumenti di tracciamento&quot;).
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>

          <section>
            <h2 style={sectionTitle}>1. Titolare del trattamento</h2>
            <p>
              Il Titolare del trattamento è <strong>Quisqui S.r.l.</strong>, con sede legale in Via Mozart 7, 00060 Castelnuovo di Porto (RM),
              C.F./P.IVA 15157791003, PEC <a href="mailto:quisquisrl@pec.it" style={{ color: 'var(--primary)', fontWeight: 600 }}>quisquisrl@pec.it</a>,
              e-mail <a href="mailto:info@telefoniaciocca.it" style={{ color: 'var(--primary)', fontWeight: 600 }}>info@telefoniaciocca.it</a>,
              operante anche con l&apos;insegna &quot;Telefonia Ciocca&quot; (di seguito, il &quot;Titolare&quot;).
            </p>
          </section>

          <section>
            <h2 style={sectionTitle}>2. Cosa sono i cookie</h2>
            <p>
              I cookie sono piccole stringhe di testo che i siti web visitati inviano al terminale dell&apos;utente, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti nella visita successiva. Gli strumenti di tracciamento analoghi (come gli identificatori memorizzati in localStorage o tramite tecnologie di fingerprinting) sono equiparati ai cookie dal Provvedimento del Garante del 10 giugno 2021.
            </p>
          </section>

          <section>
            <h2 style={sectionTitle}>3. Cookie utilizzati dal presente sito</h2>
            <p>
              Il sito <strong>telefoniaciocca.it</strong> è stato progettato per <strong>rispettare la privacy degli utenti</strong>: non utilizza cookie di profilazione, cookie analitici di terze parti, pixel di tracciamento pubblicitari, né strumenti analoghi che richiedano il preventivo consenso informato dell&apos;interessato.
            </p>

            <h3 style={subTitle}>3.1 Cookie tecnici strettamente necessari</h3>
            <p>
              Il sito utilizza esclusivamente cookie tecnici di sessione, che non richiedono il consenso dell&apos;utente in base all&apos;art. 122, comma 1, del D.Lgs. 196/2003. Tali cookie sono necessari per il corretto funzionamento tecnico del sito (ad esempio per bilanciamento del carico, sicurezza e consegna dei contenuti tramite la piattaforma di hosting) e non vengono utilizzati per finalità ulteriori rispetto a quelle strettamente necessarie.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              In particolare, la piattaforma di hosting (Vercel Inc., USA) può utilizzare cookie tecnici minimi ai fini di sicurezza e bilanciamento del traffico. Tali cookie non profilano l&apos;utente e non vengono usati per finalità analitiche o pubblicitarie.
            </p>

            <h3 style={subTitle}>3.2 Nessun cookie di profilazione o analitico di terze parti</h3>
            <p>
              Il sito <strong>non installa</strong> cookie di profilazione, non integra strumenti di web analytics (es. Google Analytics), non contiene pixel di tracciamento (es. Meta Pixel) e non include mappe interattive di terze parti incorporate direttamente nelle pagine. Le informazioni sulla sede sono mostrate tramite un semplice link a Google Maps, che viene aperto solo su click esplicito dell&apos;utente.
            </p>

            <h3 style={subTitle}>3.3 Widget di contatto e link esterni</h3>
            <p>
              Il sito contiene link che, se cliccati, avviano il client WhatsApp o la composizione telefonica. Il contenuto collegato (come WhatsApp, Google Maps, i social network) è gestito dai rispettivi fornitori, che applicano proprie policy sui cookie indipendenti dal presente sito.
            </p>
          </section>

          <section>
            <h2 style={sectionTitle}>4. Durata dei cookie</h2>
            <p>
              I cookie tecnici di sessione hanno una durata limitata alla singola sessione di navigazione e vengono eliminati automaticamente alla chiusura del browser.
            </p>
          </section>

          <section>
            <h2 style={sectionTitle}>5. Gestione dei cookie dal browser</h2>
            <p>
              Sebbene il sito non utilizzi cookie soggetti a consenso, l&apos;utente può comunque gestire tutte le preferenze relative ai cookie direttamente dal proprio browser, impostandolo per bloccarli o per ricevere un avviso prima della loro installazione. Di seguito i link alle istruzioni dei principali browser:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.75rem', display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/it/kb/protezione-antitracciamento-avanzata-firefox-desktop" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Apple Safari</a></li>
              <li><a href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Microsoft Edge</a></li>
            </ul>
          </section>

          <section>
            <h2 style={sectionTitle}>6. Diritti dell&apos;interessato</h2>
            <p>
              Ai sensi degli artt. 15-22 del Regolamento (UE) 2016/679 (GDPR), l&apos;utente ha diritto di accedere ai propri dati, di richiederne la rettifica, la cancellazione, la limitazione del trattamento, di opporsi al trattamento e di ricevere i dati in formato strutturato (portabilità). L&apos;utente può inoltre proporre reclamo all&apos;<a href="https://www.garanteprivacy.it/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Autorità Garante per la Protezione dei Dati Personali</a>.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              Per esercitare i diritti sopra indicati, l&apos;interessato può scrivere a <a href="mailto:info@telefoniaciocca.it" style={{ color: 'var(--primary)', fontWeight: 600 }}>info@telefoniaciocca.it</a> o via PEC a <a href="mailto:quisquisrl@pec.it" style={{ color: 'var(--primary)', fontWeight: 600 }}>quisquisrl@pec.it</a>.
            </p>
          </section>

          <section>
            <h2 style={sectionTitle}>7. Modifiche alla presente Cookie Policy</h2>
            <p>
              Il Titolare si riserva la facoltà di modificare in qualsiasi momento la presente Cookie Policy per adeguarla a sopravvenute esigenze normative e operative. Si invita pertanto l&apos;utente a consultare periodicamente la presente pagina.
            </p>
          </section>

          <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '1rem', borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
            Ultimo aggiornamento: Aprile 2026
          </p>
        </div>
      </section>
    </div>
  );
}
