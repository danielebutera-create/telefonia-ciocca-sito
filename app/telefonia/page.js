import Link from "next/link";
import { Smartphone, Wifi, RefreshCw, Wrench, ArrowRight, Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Telefonia e Smartphone a Capena e Passo Corese | Telefonia Ciocca",
  description: "Assistenza smartphone, fibra ottica, SIM e smartphone ricondizionati a Capena e Passo Corese. Consulenza gratuita, nessun call center.",
};

const WA = "https://wa.me/39069073674?text=Ciao%20Telefonia%20Ciocca%2C%20ho%20bisogno%20di%20informazioni%20sui%20servizi%20telefonia.";

const services = [
  {
    icon: <Wifi size={32} />,
    title: "Fibra Ottica",
    desc: "Verifichiamo la copertura reale al tuo indirizzo e attiviamo la migliore tariffa tra Fastweb, Vodafone, Iliad, WindTre e Sky Wifi. Casa o business.",
    links: [
      { label: "Fibra a Capena", href: "/fibra-capena" },
      { label: "Fibra a Passo Corese", href: "/fibra-passo-corese" },
    ],
    color: "#1a6fb5",
    bg: "#eff6ff",
  },
  {
    icon: <Smartphone size={32} />,
    title: "Assistenza Smartphone",
    desc: "Configurazioni, riparazioni e consulenza per smartphone, tablet e PC. Valutiamo il tuo usato e ti proponiamo l'aggiornamento giusto senza pressioni.",
    links: [
      { label: "Assistenza a Capena", href: "/assistenza-smartphone-capena" },
      { label: "Assistenza a Passo Corese", href: "/assistenza-smartphone-passo-corese" },
    ],
    color: "#6d28d9",
    bg: "#f5f3ff",
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Smartphone Ricondizionati",
    desc: "Una selezione di smartphone rigenerati, verificati e garantiti. Qualità iPhone e Android a prezzi accessibili. Valutazione del tuo usato gratuita.",
    links: [
      { label: "Vedi i rigenerati disponibili", href: "https://wa.me/39069073674?text=Vorrei%20vedere%20gli%20smartphone%20ricondizionati%20disponibili." },
    ],
    color: "#047857",
    bg: "#ecfdf5",
  },
  {
    icon: <Wrench size={32} />,
    title: "SIM e Tariffe Mobile",
    desc: "Ti aiutiamo a scegliere l'operatore e il piano mobile più adatto al tuo utilizzo reale. Confronto imparziale tra tutti i principali operatori.",
    links: [
      { label: "Confronta tariffe", href: "https://wa.me/39069073674?text=Vorrei%20un%20confronto%20sulle%20tariffe%20mobile." },
    ],
    color: "#b45309",
    bg: "#fffbeb",
  },
];

const perche = [
  "Consulenza gratuita e senza impegno",
  "Nessun call center: parli sempre con i nostri esperti",
  "Confronto imparziale tra tutti gli operatori",
  "Presente da oltre 10 anni sul territorio",
  "Due sedi: Capena e Passo Corese",
  "Supporto anche dopo l'attivazione",
];

export default function Telefonia() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "#f8fafc", padding: "8rem 0 5rem", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ maxWidth: "44rem" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "#eff6ff", border: "1px solid #bfdbfe",
              borderRadius: "9999px", padding: "0.375rem 1rem", marginBottom: "1.5rem",
            }}>
              <Smartphone size={14} style={{ color: "#1a6fb5" }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#1a6fb5", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Servizi Telefonia
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", lineHeight: 1.15 }}>
              Telefonia e Connettività<br />
              <span style={{ color: "#1a6fb5" }}>a Capena e Passo Corese</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#475569", lineHeight: 1.7, marginBottom: "2rem" }}>
              Dalla fibra ottica agli smartphone ricondizionati, dall'assistenza tecnica alla scelta della SIM giusta: trovi tutto in negozio, con la consulenza di chi conosce davvero i prodotti.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.875rem 1.5rem", borderRadius: "0.75rem",
                background: "#25d366", color: "white",
                fontWeight: 700, fontSize: "1rem", textDecoration: "none",
              }}>
                <MessageCircle size={18} />
                Chiedi informazioni
              </a>
              <a href="tel:069073674" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.875rem 1.5rem", borderRadius: "0.75rem",
                background: "white", color: "#0f172a",
                border: "2px solid #e2e8f0",
                fontWeight: 700, fontSize: "1rem", textDecoration: "none",
              }}>
                <Phone size={18} />
                06 9073 674
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section style={{ padding: "5rem 0", background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a" }}>
              Tutti i servizi di telefonia
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {services.map((s, i) => (
              <div key={i} style={{
                background: "#f8fafc", borderRadius: "1.5rem",
                border: "1px solid #e2e8f0", padding: "2rem",
                display: "flex", gap: "1.75rem", alignItems: "flex-start",
                flexWrap: "wrap",
              }}>
                <div style={{
                  width: "4rem", height: "4rem", background: s.bg, borderRadius: "1rem",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: s.color, flexShrink: 0,
                }}>
                  {s.icon}
                </div>
                <div style={{ flex: 1, minWidth: "240px" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.625rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.9375rem", color: "#475569", lineHeight: 1.7, marginBottom: "1.25rem" }}>{s.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
                    {s.links.map((l, j) => (
                      <Link key={j} href={l.href} style={{
                        display: "inline-flex", alignItems: "center", gap: "0.375rem",
                        padding: "0.5rem 1rem", borderRadius: "0.625rem",
                        background: "white", border: `1px solid ${s.color}33`,
                        color: s.color, fontWeight: 700, fontSize: "0.875rem", textDecoration: "none",
                      }}>
                        {l.label} <ArrowRight size={13} />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perché noi */}
      <section style={{ padding: "5rem 0", background: "#f8fafc" }}>
        <div className="container">
          <div className="grid md:grid-cols-2" style={{ gap: "4rem", alignItems: "center" }}>
            <div>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1.5rem" }}>
                Perché scegliere Telefonia Ciocca?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {perche.map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                    <CheckCircle2 size={20} style={{ color: "#1a6fb5", flexShrink: 0, marginTop: "1px" }} />
                    <span style={{ fontSize: "1rem", color: "#374151", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "white", borderRadius: "1.5rem", padding: "2rem", border: "1px solid #e2e8f0", boxShadow: "0 8px 30px -8px rgba(0,0,0,0.08)" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0f172a", marginBottom: "0.5rem" }}>Prenota una consulenza gratuita</h3>
              <p style={{ fontSize: "0.9375rem", color: "#475569", marginBottom: "1.5rem", lineHeight: 1.65 }}>
                Portaci le tue ultime bollette o i tuoi contratti. Analizziamo tutto gratuitamente e ti diciamo se puoi risparmiare — senza impegno.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  padding: "0.875rem 1.5rem", borderRadius: "0.75rem",
                  background: "#25d366", color: "white",
                  fontWeight: 700, fontSize: "1rem", textDecoration: "none",
                }}>
                  <MessageCircle size={18} />
                  Scrivici su WhatsApp
                </a>
                <a href="tel:069073674" style={{
                  display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                  padding: "0.875rem 1.5rem", borderRadius: "0.75rem",
                  background: "white", color: "#0f172a", border: "2px solid #e2e8f0",
                  fontWeight: 700, fontSize: "1rem", textDecoration: "none",
                }}>
                  <Phone size={18} />
                  Chiama: 06 9073 674
                </a>
              </div>
              <p style={{ fontSize: "0.75rem", color: "#94a3b8", textAlign: "center", marginTop: "1rem" }}>
                Due sedi: Capena (Via Tiberina 28C) e Passo Corese (Via Garibaldi 72)
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
