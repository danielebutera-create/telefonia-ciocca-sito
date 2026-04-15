import Link from "next/link";
import { MapPin, Phone, ArrowRight, Wifi, Sun, Shield, Smartphone, Zap, MessageCircle, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Telefonia Ciocca Passo Corese — Fibra, Energia, Fotovoltaico a Fara in Sabina",
  description: "Nuova sede Telefonia Ciocca a Passo Corese (Fara in Sabina). Fibra ottica, risparmio bollette, fotovoltaico, sicurezza e assistenza smartphone. Via Garibaldi 72.",
};

const WA = "https://wa.me/39069073674?text=Ciao%20Telefonia%20Ciocca%2C%20vorrei%20informazioni%20sulla%20sede%20di%20Passo%20Corese.";

const services = [
  {
    icon: <Wifi size={28} />,
    title: "Fibra Ottica",
    desc: "Verifica copertura e attivazione fibra casa o business a Passo Corese, Fara in Sabina e dintorni.",
    href: "/fibra-passo-corese",
  },
  {
    icon: <Zap size={28} />,
    title: "Risparmio Bollette",
    desc: "Analisi gratuita delle bollette luce e gas. Ti troviamo la tariffa più conveniente sul mercato libero.",
    href: "/risparmio-bolletta-passo-corese",
  },
  {
    icon: <Sun size={28} />,
    title: "Fotovoltaico",
    desc: "Preventivi gratuiti per impianti solari a Fara in Sabina, Passo Corese e tutta la provincia di Rieti.",
    href: "/fotovoltaico-passo-corese",
  },
  {
    icon: <Shield size={28} />,
    title: "Sicurezza",
    desc: "Sistemi di allarme, videosorveglianza e controllo accessi per abitazioni e aziende.",
    href: "/sicurezza-passo-corese",
  },
  {
    icon: <Smartphone size={28} />,
    title: "Assistenza Smartphone",
    desc: "Riparazioni, configurazioni e valutazione usato. Stesso team esperto anche a Passo Corese.",
    href: "/assistenza-smartphone-passo-corese",
  },
];

export default function PassoCorese() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)", color: "white", padding: "8rem 0 5rem" }}>
        <div className="container">
          <div style={{ maxWidth: "48rem" }}>
            {/* Badge nuova apertura */}
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(232,119,34,0.2)",
              border: "1px solid rgba(232,119,34,0.5)",
              borderRadius: "9999px",
              padding: "0.375rem 1rem",
              marginBottom: "1.5rem",
            }}>
              <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#e87722", display: "inline-block", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "#e87722", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Nuova Apertura
              </span>
            </div>

            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 800, marginBottom: "1.25rem", lineHeight: 1.15, color: "white" }}>
              Telefonia Ciocca<br />
              <span style={{ color: "#4aa3df" }}>Passo Corese</span>
            </h1>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.75)", marginBottom: "2rem", lineHeight: 1.7 }}>
              Tutti i servizi di energia, telefonia e tecnologia che conosci da Capena, ora anche a Passo Corese (Fara in Sabina). Lo stesso team, la stessa consulenza imparziale.
            </p>

            {/* Indirizzo */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "0.625rem", marginBottom: "2rem", background: "rgba(255,255,255,0.07)", padding: "1rem 1.25rem", borderRadius: "0.875rem", border: "1px solid rgba(255,255,255,0.12)", maxWidth: "28rem" }}>
              <MapPin size={18} style={{ color: "#4aa3df", flexShrink: 0, marginTop: "2px" }} />
              <div>
                <div style={{ fontWeight: 700, color: "white", marginBottom: "0.125rem" }}>Via Garibaldi, 72</div>
                <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)" }}>02032 Fara in Sabina (RI) — Passo Corese</div>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem" }}>
              <a href={WA} target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.875rem 1.5rem", borderRadius: "0.75rem",
                background: "#25d366", color: "white",
                fontWeight: 700, fontSize: "1rem", textDecoration: "none",
              }}>
                <MessageCircle size={18} />
                Scrivici su WhatsApp
              </a>
              <a href="tel:069073674" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.875rem 1.5rem", borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.1)", color: "white",
                border: "1px solid rgba(255,255,255,0.25)",
                fontWeight: 700, fontSize: "1rem", textDecoration: "none",
              }}>
                <Phone size={18} />
                06 9073 674
              </a>
              <a href="https://maps.google.com/?q=Via+Garibaldi+72+Fara+in+Sabina" target="_blank" rel="noopener noreferrer" style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.875rem 1.5rem", borderRadius: "0.75rem",
                background: "rgba(255,255,255,0.1)", color: "white",
                border: "1px solid rgba(255,255,255,0.25)",
                fontWeight: 700, fontSize: "1rem", textDecoration: "none",
              }}>
                <MapPin size={18} />
                Come arrivare
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section style={{ padding: "5rem 0", background: "#f8fafc" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a", marginBottom: "0.75rem" }}>
              Cosa trovi a Passo Corese
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "#475569", maxWidth: "36rem", margin: "0 auto" }}>
              Stessi servizi della sede di Capena, stesso numero di telefono, stesso team.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: "1.5rem", maxWidth: "960px", margin: "0 auto" }}>
            {services.map((s, i) => (
              <Link key={i} href={s.href} style={{ textDecoration: "none" }}>
                <div style={{
                  background: "white", padding: "1.75rem", borderRadius: "1.25rem",
                  border: "1px solid #e2e8f0", boxShadow: "0 2px 12px -2px rgba(0,0,0,0.06)",
                  display: "flex", flexDirection: "column", height: "100%",
                  transition: "border-color 0.2s",
                }}>
                  <div style={{
                    width: "3.25rem", height: "3.25rem",
                    background: "#eff6ff", borderRadius: "0.75rem",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#1a6fb5", marginBottom: "1.125rem", flexShrink: 0,
                  }}>
                    {s.icon}
                  </div>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, color: "#0f172a", marginBottom: "0.5rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#475569", lineHeight: 1.65, flex: 1, marginBottom: "1.25rem" }}>{s.desc}</p>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", fontSize: "0.875rem", fontWeight: 700, color: "#1a6fb5" }}>
                    Scopri <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Orari */}
      <section style={{ padding: "4rem 0", background: "white", borderTop: "1px solid #e2e8f0", borderBottom: "1px solid #e2e8f0" }}>
        <div className="container" style={{ maxWidth: "640px" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a" }}>Orari di apertura</h2>
          </div>
          <div style={{ background: "#f8fafc", borderRadius: "1.25rem", border: "1px solid #e2e8f0", overflow: "hidden" }}>
            {[
              { label: "Lunedì – Venerdì", value: "09:00 – 13:00  /  15:30 – 19:30" },
              { label: "Sabato", value: "09:00 – 13:00" },
              { label: "Domenica", value: "Chiuso" },
            ].map(({ label, value }, i) => (
              <div key={i} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "1rem 1.5rem",
                borderBottom: i < 2 ? "1px solid #e2e8f0" : "none",
                background: i % 2 === 0 ? "white" : "#f8fafc",
              }}>
                <span style={{ fontWeight: 600, color: "#374151", fontSize: "0.9375rem" }}>{label}</span>
                <span style={{ color: value === "Chiuso" ? "#94a3b8" : "#0f172a", fontWeight: value === "Chiuso" ? 400 : 600, fontSize: "0.9375rem" }}>{value}</span>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: "1.25rem", fontSize: "0.875rem", color: "#64748b" }}>
            Stesso numero per entrambe le sedi: <a href="tel:069073674" style={{ color: "#1a6fb5", fontWeight: 600 }}>06 9073 674</a>
          </p>
        </div>
      </section>

      {/* Zona servita */}
      <section style={{ padding: "4rem 0", background: "#0f172a", color: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem", color: "white" }}>
              Serviamo l&apos;area di
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
              {["Passo Corese", "Fara in Sabina", "Poggio Mirteto", "Montopoli di Sabina", "Cantalupo in Sabina", "Torri in Sabina"].map(area => (
                <div key={area} style={{
                  display: "flex", alignItems: "center", gap: "0.5rem",
                  background: "rgba(255,255,255,0.1)", padding: "0.625rem 1.25rem",
                  borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600,
                  color: "white", border: "1px solid rgba(255,255,255,0.15)",
                }}>
                  <MapPin size={14} style={{ color: "#4aa3df" }} />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section style={{ padding: "5rem 0", background: "#f8fafc" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a", marginBottom: "1rem" }}>
            Hai domande sulla nuova sede?
          </h2>
          <p style={{ fontSize: "1.0625rem", color: "#475569", marginBottom: "2rem", maxWidth: "36rem", margin: "0 auto 2rem" }}>
            Scrivici su WhatsApp o chiamaci. Il team di Telefonia Ciocca ti risponde direttamente, senza call center.
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
              background: "white", color: "#0f172a",
              border: "2px solid #e2e8f0",
              fontWeight: 700, fontSize: "1.0625rem", textDecoration: "none",
            }}>
              <Phone size={20} />
              Chiama: 06 9073 674
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
