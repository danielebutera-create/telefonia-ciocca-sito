export const metadata = {
  title: "Privacy Policy | Telefonia Ciocca",
  description: "Informativa privacy ai sensi dell'art. 13 del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003.",
  alternates: { canonical: "https://www.telefoniaciocca.it/privacy" },
};

const h2Style = { fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.75rem' };

export default function Privacy() {
  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <section className="container" style={{ maxWidth: '48rem', margin: '0 auto' }}>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '0.5rem' }}>
          <span className="gradient-text">Privacy Policy</span>
        </h1>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          Informativa resa ai sensi dell&apos;art. 13 del Regolamento (UE) 2016/679 (&quot;GDPR&quot;) e del D.Lgs. 196/2003 (Codice Privacy).
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>

          <section>
            <h2 style={h2Style}>1. Titolare del trattamento</h2>
            <p>
              Il Titolare del trattamento è <strong>Quisqui S.r.l.</strong>, con sede legale in Via Mozart 7, 00060 Castelnuovo di Porto (RM),
              C.F./P.IVA 15157791003, iscritta al Registro delle Imprese di Roma con REA RM-1571645,
              PEC <a href="mailto:quisquisrl@pec.it" style={{ color: 'var(--primary)', fontWeight: 600 }}>quisquisrl@pec.it</a>,
              e-mail <a href="mailto:info@telefoniaciocca.it" style={{ color: 'var(--primary)', fontWeight: 600 }}>info@telefoniaciocca.it</a>,
              operante anche con l&apos;insegna commerciale &quot;Telefonia Ciocca&quot; presso i punti vendita di Capena (RM) e Passo Corese – Fara in Sabina (RI).
            </p>
          </section>

          <section>
            <h2 style={h2Style}>2. Tipologie di dati trattati</h2>
            <p>Nell&apos;ambito della navigazione e dell&apos;utilizzo del sito possono essere trattate le seguenti categorie di dati personali:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Dati forniti volontariamente dall&apos;utente</strong> tramite il form di contatto: nome, indirizzo e-mail, tipologia di richiesta e contenuto del messaggio;</li>
              <li><strong>Dati tecnici di navigazione</strong> raccolti automaticamente dai sistemi informatici preposti al funzionamento del sito (es. indirizzo IP, user agent), trattati al solo fine di garantire la sicurezza e il corretto funzionamento del servizio;</li>
              <li><strong>Dati eventualmente forniti in sede di consulenza</strong>, quando l&apos;utente decida di comunicarli volontariamente (es. dati presenti in una bolletta energetica allegata per la richiesta di analisi).</li>
            </ul>
          </section>

          <section>
            <h2 style={h2Style}>3. Finalità e base giuridica</h2>
            <p>I dati personali sono trattati per le seguenti finalità:</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Gestione delle richieste di contatto</strong> inoltrate tramite il form o tramite WhatsApp: base giuridica art. 6, par. 1, lett. b) GDPR (esecuzione di misure precontrattuali richieste dall&apos;interessato);</li>
              <li><strong>Consulenza commerciale gratuita</strong> e analisi delle bollette su richiesta espressa dell&apos;utente: base giuridica art. 6, par. 1, lett. b) GDPR;</li>
              <li><strong>Adempimento di obblighi di legge</strong> a cui è soggetto il Titolare: base giuridica art. 6, par. 1, lett. c) GDPR;</li>
              <li><strong>Sicurezza del sito e prevenzione di abusi</strong>: base giuridica art. 6, par. 1, lett. f) GDPR (legittimo interesse).</li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              Il sito <strong>non effettua</strong> trattamenti a fini di profilazione o marketing diretto, né decisioni automatizzate ai sensi dell&apos;art. 22 GDPR.
            </p>
          </section>

          <section>
            <h2 style={h2Style}>4. Natura del conferimento</h2>
            <p>
              Il conferimento dei dati tramite il form di contatto è facoltativo; tuttavia, il mancato conferimento dei dati contrassegnati come obbligatori (nome e indirizzo e-mail) rende impossibile dare seguito alla richiesta dell&apos;utente.
            </p>
          </section>

          <section>
            <h2 style={h2Style}>5. Destinatari e responsabili del trattamento</h2>
            <p>
              I dati personali potranno essere trattati da soggetti specificamente autorizzati dal Titolare (dipendenti e collaboratori) e, nei limiti strettamente necessari, da fornitori di servizi che agiscono in qualità di <strong>Responsabili del trattamento</strong> ai sensi dell&apos;art. 28 GDPR, tra cui:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Vercel Inc.</strong> (fornitore dell&apos;infrastruttura di hosting del sito);</li>
              <li><strong>Resend, Inc.</strong> (fornitore del servizio di invio e-mail transazionali dal form di contatto);</li>
              <li><strong>Meta Platforms Ireland Ltd.</strong> (gestore del servizio WhatsApp, utilizzato quando l&apos;utente sceglie di inviare una richiesta tramite il relativo canale di messaggistica).</li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              I dati non saranno in nessun caso diffusi, venduti o ceduti a terzi per finalità di marketing.
            </p>
          </section>

          <section>
            <h2 style={h2Style}>6. Trasferimento dei dati fuori dall&apos;Unione Europea</h2>
            <p>
              Alcuni dei fornitori sopra indicati hanno sede fuori dallo Spazio Economico Europeo (SEE). Eventuali trasferimenti avvengono esclusivamente verso Paesi che beneficiano di una decisione di adeguatezza della Commissione europea o, in assenza, sulla base delle <strong>Clausole Contrattuali Standard</strong> approvate dalla Commissione europea ai sensi dell&apos;art. 46, par. 2, lett. c) GDPR, unitamente a misure supplementari idonee a garantire un livello di protezione equivalente a quello garantito all&apos;interno dell&apos;UE.
            </p>
          </section>

          <section>
            <h2 style={h2Style}>7. Periodo di conservazione</h2>
            <p>
              I dati personali forniti tramite il form di contatto sono conservati per il tempo strettamente necessario a gestire la richiesta dell&apos;utente e, successivamente, per un periodo massimo di <strong>24 mesi</strong> dall&apos;ultimo contatto utile, al fine di consentire eventuali follow-up commerciali richiesti dall&apos;interessato stesso. Trascorso tale termine, i dati verranno cancellati o resi anonimi, salvo obblighi di conservazione previsti dalla legge (es. in ambito fiscale o contabile).
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              I dati di navigazione tecnici (es. log server) sono conservati per il tempo strettamente necessario a garantire la sicurezza del sito, e comunque per un periodo non superiore a 12 mesi.
            </p>
          </section>

          <section>
            <h2 style={h2Style}>8. Diritti dell&apos;interessato</h2>
            <p>
              In qualsiasi momento l&apos;interessato può esercitare i diritti previsti dagli artt. 15-22 del GDPR, tra cui:
            </p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>diritto di <strong>accesso</strong> ai propri dati (art. 15);</li>
              <li>diritto di <strong>rettifica</strong> (art. 16);</li>
              <li>diritto alla <strong>cancellazione</strong> (&quot;diritto all&apos;oblio&quot;, art. 17);</li>
              <li>diritto alla <strong>limitazione del trattamento</strong> (art. 18);</li>
              <li>diritto alla <strong>portabilità dei dati</strong> (art. 20);</li>
              <li>diritto di <strong>opposizione</strong> al trattamento (art. 21);</li>
              <li>diritto di <strong>revocare il consenso</strong> in qualsiasi momento, senza pregiudicare la liceità del trattamento basato sul consenso prestato prima della revoca.</li>
            </ul>
            <p style={{ marginTop: '0.75rem' }}>
              Le richieste possono essere indirizzate a <a href="mailto:info@telefoniaciocca.it" style={{ color: 'var(--primary)', fontWeight: 600 }}>info@telefoniaciocca.it</a> o via PEC a <a href="mailto:quisquisrl@pec.it" style={{ color: 'var(--primary)', fontWeight: 600 }}>quisquisrl@pec.it</a>.
            </p>
            <p style={{ marginTop: '0.75rem' }}>
              L&apos;interessato ha inoltre diritto di <strong>proporre reclamo</strong> all&apos;Autorità di controllo competente, ossia il <a href="https://www.garanteprivacy.it/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', fontWeight: 600 }}>Garante per la Protezione dei Dati Personali</a> (art. 77 GDPR), qualora ritenga che il trattamento dei dati che lo riguardano sia effettuato in violazione della normativa vigente.
            </p>
          </section>

          <section>
            <h2 style={h2Style}>9. Cookie</h2>
            <p>
              Per informazioni sull&apos;uso dei cookie sul sito si rimanda alla dedicata <a href="/cookies" style={{ color: 'var(--primary)', fontWeight: 600 }}>Cookie Policy</a>.
            </p>
          </section>

          <section>
            <h2 style={h2Style}>10. Modifiche alla presente informativa</h2>
            <p>
              Il Titolare si riserva la facoltà di aggiornare la presente informativa in qualsiasi momento, dandone comunicazione agli utenti tramite questa pagina. Si invita pertanto a consultarla periodicamente.
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
