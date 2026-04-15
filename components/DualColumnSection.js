"use client";

import { Smartphone, Zap, Wrench, RefreshCw, Settings, Sun, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

const WA_USATO = "https://wa.me/39069073674?text=Ciao%20Telefonia%20Ciocca%2C%20vorrei%20una%20valutazione%20del%20mio%20usato.%20Vi%20allego%20una%20foto%20del%20telefono%20(modello%2C%20condizioni%2C%20accessori).";
const WA_BOLLETTA = "https://wa.me/39069073674?text=Ciao%20Telefonia%20Ciocca%2C%20vorrei%20un%27analisi%20gratuita%20della%20mia%20bolletta.%20Vi%20allego%20la%20foto.";

const telefoniaServizi = [
  { icon: <Smartphone size={18} />, label: "Smartphone e accessori", desc: "I modelli che ti servono, con prova in negozio" },
  { icon: <CheckCircle2 size={18} />, label: "Offerte mobile e fibra", desc: "Ti aiutiamo a scegliere senza sorprese in bolletta" },
  { icon: <Wrench size={18} />, label: "Riparazioni", desc: "Display, batterie, interventi rapidi" },
  { icon: <RefreshCw size={18} />, label: "Rigenerati", desc: "Smartphone ricondizionati con garanzia del negozio" },
  { icon: <ArrowRight size={18} />, label: "Valutiamo il tuo usato — anche senza acquisto", desc: "Porta il tuo vecchio telefono, ti diciamo subito quanto vale" },
  { icon: <Settings size={18} />, label: "Configurazione", desc: "Ti diamo il telefono pronto all'uso, senza stress" },
];

const energiaServizi = [
  { icon: <Zap size={18} />, label: "Analisi gratuita della tua bolletta", desc: "Scopri quanto puoi risparmiare davvero" },
  { icon: <CheckCircle2 size={18} />, label: "Luce e gas", desc: "Cambio fornitore gestito da noi, tu firmi e basta" },
  { icon: <Sun size={18} />, label: "Fotovoltaico con accumulo", desc: "Preventivi gratuiti, installazione chiavi in mano" },
  { icon: <ShieldCheck size={18} />, label: "Sicurezza casa", desc: "Partner Verisure, sopralluogo gratuito" },
];

const ColumnTelefonia = () => (
  <div
    id="telefonia"
    style={{
      background: "var(--card)",
      borderRadius: "1.5rem",
      border: "2px solid rgba(26, 111, 181, 0.25)",
      padding: "2.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.75rem",
      height: "100%",
    }}
  >
    {/* Header */}
    <div>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "0.5rem",
        background: "rgba(26, 111, 181, 0.1)", padding: "0.375rem 1rem",
        borderRadius: "9999px", marginBottom: "0.875rem",
      }}>
        <Smartphone size={14} style={{ color: "#1a6fb5" }} />
        <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#1a6fb5" }}>
          Telefonia
        </span>
      </div>
      <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", margin: "0 0 0.5rem 0" }}>
        Il tuo negozio di fiducia
      </h3>
      <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
        Per smartphone, offerte mobile e fibra casa.
      </p>
    </div>

    {/* Servizi */}
    <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem", margin: 0, padding: 0, listStyle: "none" }}>
      {telefoniaServizi.map((s) => (
        <li key={s.label} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
          <div style={{
            width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px",
            background: "rgba(26, 111, 181, 0.1)", color: "#1a6fb5",
            display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0.0625rem",
          }}>
            {s.icon}
          </div>
          <div>
            <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3 }}>{s.label}</div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5, marginTop: "0.125rem" }}>{s.desc}</div>
          </div>
        </li>
      ))}
    </ul>

    {/* CTA inline dopo lista */}
    <a href="/telefonia" style={{
      display: "inline-flex", alignItems: "center", gap: "0.375rem",
      fontSize: "0.875rem", fontWeight: 700, color: "#1a6fb5", textDecoration: "none",
      borderBottom: "2px solid rgba(26,111,181,0.25)", paddingBottom: "0.125rem",
      width: "fit-content",
    }}>
      Tutti i servizi di telefonia <ArrowRight size={14} />
    </a>

    {/* Box arancio — valutazione usato */}
    <div style={{
      background: "rgba(232, 119, 34, 0.07)",
      border: "1px solid rgba(232, 119, 34, 0.3)",
      borderRadius: "1rem",
      padding: "1.25rem",
    }}>
      <p style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", margin: "0 0 0.375rem 0" }}>
        💡 Il tuo vecchio smartphone vale più di quanto pensi.
      </p>
      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", margin: "0 0 1rem 0", lineHeight: 1.6 }}>
        Portacelo in negozio o mandaci una foto su WhatsApp: ti diciamo subito quanto ti diamo in permuta —{" "}
        <strong>anche se non compri niente</strong>.
      </p>
      <a
        href={WA_USATO}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          padding: "0.625rem 1.25rem",
          borderRadius: "9999px",
          background: "#e87722",
          color: "white",
          fontWeight: 700, fontSize: "0.875rem",
          textDecoration: "none",
          transition: "opacity 0.2s",
        }}
      >
        📱 Quanto vale il mio usato?
        <ArrowRight size={14} />
      </a>
    </div>

    {/* CTA colonna */}
    <a
      href="/telefonia"
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
        padding: "0.875rem 1.5rem",
        borderRadius: "9999px",
        border: "2px solid #1a6fb5",
        color: "#1a6fb5",
        background: "transparent",
        fontWeight: 700, fontSize: "0.9375rem",
        textDecoration: "none",
        transition: "all 0.2s ease",
        marginTop: "auto",
      }}
    >
      Scopri Telefonia
      <ArrowRight size={16} />
    </a>
  </div>
);

const ColumnEnergia = () => (
  <div
    id="energia"
    style={{
      background: "var(--card)",
      borderRadius: "1.5rem",
      border: "2px solid rgba(92, 176, 48, 0.25)",
      padding: "2.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "1.75rem",
      height: "100%",
    }}
  >
    {/* Header */}
    <div>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "0.5rem",
        background: "rgba(92, 176, 48, 0.1)", padding: "0.375rem 1rem",
        borderRadius: "9999px", marginBottom: "0.875rem",
      }}>
        <Zap size={14} style={{ color: "#3d8b1a" }} />
        <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#3d8b1a" }}>
          Energia
        </span>
      </div>
      <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--text-primary)", margin: "0 0 0.5rem 0" }}>
        Consulenza imparziale
      </h3>
      <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", margin: 0, lineHeight: 1.6 }}>
        Su luce, gas e fotovoltaico. Meno spesa, più chiarezza.
      </p>
    </div>

    {/* Servizi */}
    <ul style={{ display: "flex", flexDirection: "column", gap: "0.875rem", margin: 0, padding: 0, listStyle: "none" }}>
      {energiaServizi.map((s) => (
        <li key={s.label} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
          <div style={{
            width: "32px", height: "32px", flexShrink: 0, borderRadius: "8px",
            background: "rgba(92, 176, 48, 0.1)", color: "#3d8b1a",
            display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0.0625rem",
          }}>
            {s.icon}
          </div>
          <div>
            <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.3 }}>{s.label}</div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", lineHeight: 1.5, marginTop: "0.125rem" }}>{s.desc}</div>
          </div>
        </li>
      ))}
    </ul>

    {/* CTA inline dopo lista */}
    <a href="/energia" style={{
      display: "inline-flex", alignItems: "center", gap: "0.375rem",
      fontSize: "0.875rem", fontWeight: 700, color: "#3d8b1a", textDecoration: "none",
      borderBottom: "2px solid rgba(61,139,26,0.25)", paddingBottom: "0.125rem",
      width: "fit-content",
    }}>
      Tutti i servizi energia <ArrowRight size={14} />
    </a>

    {/* Spacer to push CTA down like telefonia column */}
    <div style={{ flex: 1 }} />

    {/* CTA bolletta WhatsApp */}
    <a
      href={WA_BOLLETTA}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
        padding: "0.875rem 1.5rem",
        borderRadius: "9999px",
        background: "#3d8b1a",
        color: "white",
        fontWeight: 700, fontSize: "0.9375rem",
        textDecoration: "none",
        transition: "opacity 0.2s",
      }}
    >
      📱 Invia la tua bolletta
      <ArrowRight size={16} />
    </a>

    <a
      href="/energia"
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
        padding: "0.875rem 1.5rem",
        borderRadius: "9999px",
        border: "2px solid #3d8b1a",
        color: "#3d8b1a",
        background: "transparent",
        fontWeight: 700, fontSize: "0.9375rem",
        textDecoration: "none",
        transition: "all 0.2s ease",
      }}
    >
      Scopri Energia
      <ArrowRight size={16} />
    </a>
  </div>
);

const DualColumnSection = () => {
  return (
    <section style={{ padding: "6rem 0", background: "var(--bg-section)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
            Due soluzioni,{" "}
            <span style={{ color: "var(--primary)" }}>un unico punto di riferimento</span>
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: "38rem", margin: "0 auto", lineHeight: 1.7 }}>
            Siamo nati come negozio di telefonia e siamo diventati il punto di riferimento per la tua energia. Scegli da dove vuoi cominciare.
          </p>
        </div>

        {/* Doppia colonna */}
        <div className="grid md:grid-cols-2" style={{ gap: "2rem", alignItems: "stretch" }}>
          <ColumnTelefonia />
          <ColumnEnergia />
        </div>
      </div>
    </section>
  );
};

export default DualColumnSection;
