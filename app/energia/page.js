import Link from "next/link";
import { Zap, Sun, Shield, TrendingDown, ArrowRight, Phone, MessageCircle, CheckCircle2, Leaf } from "lucide-react";

export const metadata = {
  title: "Risparmio Energia a Capena e Passo Corese | Telefonia Ciocca",
  description: "Risparmia su luce, gas e bollette energetiche con la consulenza gratuita di Telefonia Ciocca. Fotovoltaico, mercato libero e sicurezza a Capena e Passo Corese.",
};

const WA = "https://wa.me/39069073674?text=Ciao%20Telefonia%20Ciocca%2C%20vorrei%20una%20consulenza%20gratuita%20sulle%20bollette%20energia.";

const services = [
  {
    icon: <TrendingDown size={32} />,
    title: "Risparmio Bollette Luce e Gas",
    desc: "Analizziamo le tue bollette gratuitamente e ti proponiamo la tariffa più vantaggiosa sul mercato libero. Nessun costo di consulenza, solo risparmio reale.",
    links: [
      { label: "Risparmia a Capena", href: "/risparmio-bolletta" },
      { label: "Risparmia a Passo Corese", href: "/risparmio-bolletta-passo-corese" },
    ],
    color: "#1a6fb5",
    bg: "#eff6ff",
  },
  {
    icon: <Sun size={32} />,
    title: "Fotovoltaico",
    desc: "Preventivi gratuiti per impianti solari residenziali e aziendali. Ti seguiamo dall'analisi della copertura all'installazione, con i migliori installatori locali.",
    links: [
      { label: "Fotovoltaico a Capena", href: "/fotovoltaico-capena" },
      { label: "Fotovoltaico a Passo Corese", href: "/fotovoltaico-passo-corese" },
    ],
    color: "#d97706",
    bg: "#fffbeb",
  },
  {
    icon: <Shield size={32} />,
    title: "Sicurezza e Domotica",
    desc: "Sistemi di allarme, videosorveglianza e controllo accessi. Proteggi casa o azienda con soluzioni moderne e monitorate h24.",
    links: [
      { label: "Sicurezza a Capena", href: "/sicurezza-capena" },
      { label: "Sicurezza a Passo Corese", href: "/sicurezza-passo-corese" },
    ],
    color: "#047857",
    bg: "#ecfdf5",
  },
  {
    icon: <Leaf size={32} />,
    title: "Comunità Energetiche (CER)",
    desc: "Scopri se puoi aderire a una Comunità Energetica Rinnovabile nel tuo comune. Autoproduzione collettiva, incentivi statali e risparmio condiviso.",
    links: [
      { label: "Chiedi informazioni", href: WA },
    ],
    color: "#0e9f6e",
    bg: "#ecfdf5",
  },
];

const numeri = [
  { valore: "€200+", label: "risparmio medio annuo bollette" },
  { valore: "50%", label: "riduzione spesa energetica con fotovoltaico" },
  { valore: "0€", label: "costo consulenza bollette" },
  { valore: "10+", label: "anni di esperienza sul territorio" },
];

export default function Energia() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #ecfdf5 50%, #f8fafc 100%)", padding: "8rem 0 5rem", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div style={{ maxWidth: "44rem" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "#dcfce7", border: "1px solid #86efac",
              borderRadius: "9999px", padding: "0.375rem 1rem", marginBottom: "1.5rem",
            }}>
              <Zap size={14} style={{ color: "#047857" }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#047857", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Servizi Energia
              </span>
            </div>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1.25rem", lineHeight: 1.15 }}>
              Risparmia sull&apos;Energia<br />
              <span style={{ color: "#047857" }}>a Capena e Passo Corese</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "#475569", lineHeight: 1.7, marginBottom: "2rem" }}>
              Bollette, fotovoltaico, sicurezza e comunità energetiche: ti aiutiamo a ridurre i costi e consumare meglio, con una consulenza gratuita e senza impegno.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.875rem 1.5rem", borderRadius: "0.75rem",
                background: "#25d366", color: "white",
                fontWeight: 700, fontSize: "1rem", textDecoration: "none",
              }}>
                <MessageCircle size={18} />
                Consulenza gratuita
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

      {/* Numeri */}
      <section style={{ padding: "4rem 0", background: "white", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "2rem" }}>
            {numeri.map((n, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#047857", marginBottom: "0.375rem" }}>{n.valore}</div>
                <div style={{ fontSize: "0.875rem", color: "#475569", fontWeight: 500 }}>{n.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section style={{ padding: "5rem 0", background: "#f8fafc" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a" }}>
              Tutti i servizi energia
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {services.map((s, i) => (
              <div key={i} style={{
                background: "white", borderRadius: "1.5rem",
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
                        background: "#f8fafc", border: `1px solid ${s.color}33`,
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

      {/* Come funziona */}
      <section style={{ padding: "5rem 0", background: "white" }}>
        <div className="container" style={{ maxWidth: "48rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a" }}>
              Come funziona la consulenza gratuita
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { n: "1", title: "Portaci la bolletta", desc: "Porta in negozio (o fotografaci) la tua ultima bolletta luce o gas. Bastano 5 minuti." },
              { n: "2", title: "Analizziamo insieme", desc: "I nostri consulenti confrontano la tua tariffa attuale con le migliori offerte sul mercato libero." },
              { n: "3", title: "Ti diciamo quanto risparmi", desc: "Ti mostriamo i numeri chiari: quanto spendi oggi e quanto potresti risparmiare. Senza pressioni." },
              { n: "4", title: "Attiviamo solo se sei d'accordo", desc: "Se vuoi procedere, gestiamo noi tutta la burocrazia. Altrimenti, nessun problema — la consulenza è sempre gratuita." },
            ].map((step, i) => (
              <div key={i} style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{
                  width: "2.5rem", height: "2.5rem", background: "#f0fdf4", border: "2px solid #86efac",
                  borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 800, color: "#047857", fontSize: "1rem", flexShrink: 0,
                }}>
                  {step.n}
                </div>
                <div style={{ paddingTop: "0.25rem" }}>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.25rem" }}>{step.title}</h3>
                  <p style={{ fontSize: "0.9375rem", color: "#475569", lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "5rem 0", background: "linear-gradient(135deg, #064e3b 0%, #065f46 100%)", color: "white" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, marginBottom: "1rem", color: "white" }}>
            Vuoi sapere quanto potresti risparmiare?
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "rgba(255,255,255,0.75)", marginBottom: "2rem", maxWidth: "36rem", margin: "0 auto 2rem" }}>
            Portaci le tue bollette. La consulenza è gratuita e senza impegno.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "1rem 2rem", borderRadius: "0.75rem",
              background: "#25d366", color: "white",
              fontWeight: 700, fontSize: "1.0625rem", textDecoration: "none",
            }}>
              <MessageCircle size={20} />
              Scrivici su WhatsApp
            </a>
            <a href="tel:069073674" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "1rem 2rem", borderRadius: "0.75rem",
              background: "rgba(255,255,255,0.12)", color: "white",
              border: "2px solid rgba(255,255,255,0.3)",
              fontWeight: 700, fontSize: "1.0625rem", textDecoration: "none",
            }}>
              <Phone size={20} />
              06 9073 674
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
