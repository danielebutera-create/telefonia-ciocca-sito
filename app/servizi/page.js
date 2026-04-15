import Link from 'next/link';
import { ShieldCheck, Wrench, Zap, Wifi, Sun, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Servizi: Assistenza, Energia, Fibra, Fotovoltaico | Telefonia Ciocca",
  description: "Esplora i nostri servizi: dall'analisi delle bollette alle attivazioni fibra, dagli impianti d'allarme fino all'assistenza smartphone. Tutto in un unico hub.",
  openGraph: {
    title: "Tutti i Servizi | Telefonia Ciocca",
    description: "Esplora i nostri servizi: dall'analisi delle bollette alle attivazioni fibra, dagli impianti d'allarme fino all'assistenza smartphone.",
    type: "website",
    locale: "it_IT",
  },
};

export default function Servizi() {
  const hubServices = [
    {
      title: "Risparmio Luce & Gas",
      desc: "Analisi della bolletta e consulenza gratuita. Troviamo la tariffa perfetta per la tua casa o azienda tra le migliori del mercato.",
      icon: <Zap size={36} />,
      color: "var(--color-energy)",
      href: "/risparmio-bolletta"
    },
    {
      title: "Fibra Ottica e Rete",
      desc: "Verifica della copertura reale e attivazioni FTTH e FWA. Linee stabili ed ultraveloci per ogni esigenza e streaming in 4k.",
      icon: <Wifi size={36} />,
      color: "var(--color-fiber)",
      href: "/fibra-capena"
    },
    {
      title: "Consulenza Fotovoltaico",
      desc: "Passa all'energia pulita. Valutiamo la fattibilità del tuo impianto con accumulo e ti guidiamo nella scelta del contratto giusto, massimizzando agevolazioni e incentivi.",
      icon: <Sun size={36} />,
      color: "var(--gold)",
      href: "/fotovoltaico-capena"
    },
    {
      title: "Sicurezza Verisure",
      desc: "Il marchio numero uno di allarmi e blindatura casa. Richiedi in agenzia un piano protettivo per limitare intromissioni ostili.",
      icon: <ShieldCheck size={36} />,
      color: "var(--color-security)",
      href: "/sicurezza-capena"
    },
    {
      title: "Assistenza Esperta",
      desc: "Telefoni rotti? PC lenti? Recupero SPID bloccati? Interventi in prima linea sui tuoi strumenti in modo veloce.",
      icon: <Wrench size={36} />,
      color: "var(--color-repairs)",
      href: "/assistenza-smartphone-capena"
    }
  ];

  return (
    <div style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <section className="container" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)', fontWeight: 800, marginBottom: '1rem' }}>
          I nostri <span className="gradient-text">Servizi Core</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '42rem', lineHeight: 1.7, margin: '0 auto' }}>
          Ti seguiamo ad ogni passo tecnologico: dal telefono in tasca ai pannelli fotovoltaici sul tetto.
        </p>
      </section>

      <section className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '2rem' }}>
          {hubServices.map((svc, i) => (
            <Link key={i} href={svc.href} style={{
              background: 'var(--card)',
              padding: '2.5rem',
              borderRadius: '1.5rem',
              border: '2px solid var(--border)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'all 0.3s ease',
              boxShadow: 'var(--shadow-sm)'
            }}
            className="hover:border-primary group shadow-hover"
            >
              <div style={{
                width: '4.5rem',
                height: '4.5rem',
                borderRadius: '1rem',
                background: `color-mix(in srgb, ${svc.color} 10%, transparent)`,
                color: svc.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.5rem',
                transition: 'transform 0.3s ease'
              }} className="group-hover:scale-110">
                {svc.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>{svc.title}</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6, flex: 1 }}>
                {svc.desc}
              </p>
              <div style={{
                fontSize: '0.9375rem',
                fontWeight: 700,
                color: svc.color,
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: 'auto'
              }}>
                Scopri di più
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}

          {/* Contact Box card */}
          <div style={{
            background: 'linear-gradient(135deg, #1a6fb5 0%, #145a94 100%)',
            padding: '2.5rem',
            borderRadius: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            color: 'white',
            boxShadow: '0 10px 25px -5px rgba(26, 111, 181, 0.4)'
          }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>Sempre a disposizione</h3>
            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', lineHeight: 1.6 }}>
              Per altre informazioni generiche i nostri sportelli a Capena sono pronti all'ascolto di ogni esigenza informatica e casalinga.
            </p>
            <a href="tel:069073674" className="btn-primary" style={{ background: 'white', color: '#1a6fb5', fontSize: '1rem', padding: '1rem 2rem' }}>
              Chiamaci Ora
            </a>
          </div>

        </div>
      </section>
    </div>
  );
}
