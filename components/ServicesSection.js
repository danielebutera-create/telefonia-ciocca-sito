"use client";

import { ShieldCheck, Wifi, Sun, RefreshCw, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Fotovoltaico",
    desc: "Impianti con accumulo, preventivi gratuiti. Ti seguiamo dall'analisi all'installazione chiavi in mano.",
    icon: <Sun size={40} />,
    iconColor: "var(--gold)",
    iconBg: "rgba(249, 168, 37, 0.08)",
    borderHover: "var(--gold)",
    cta: "Vedi soluzioni",
    href: "/fotovoltaico-capena",
  },
  {
    title: "Fibra Ottica",
    desc: "Ultra-veloce con verifica copertura immediata. Scegliamo insieme l'offerta giusta per casa o azienda.",
    icon: <Wifi size={40} />,
    iconColor: "var(--color-fiber)",
    iconBg: "rgba(14, 165, 233, 0.08)",
    borderHover: "var(--color-fiber)",
    cta: "Verifica copertura",
    href: "/fibra-capena",
  },
  {
    title: "Sicurezza",
    desc: "Allarmi Verisure, l'impianto numero uno al mondo. Sopralluogo gratuito per casa e negozio.",
    icon: <ShieldCheck size={40} />,
    iconColor: "var(--color-repairs)",
    iconBg: "rgba(220, 38, 38, 0.08)",
    borderHover: "var(--color-repairs)",
    cta: "Richiedi preventivo",
    href: "/sicurezza-capena",
  },
  {
    title: "Rigenerati",
    desc: "Smartphone ricondizionati con garanzia del negozio. Batteria testata, display garantito, paghi meno di un nuovo.",
    icon: <RefreshCw size={40} />,
    iconColor: "#1a6fb5",
    iconBg: "rgba(26, 111, 181, 0.08)",
    borderHover: "#1a6fb5",
    cta: "Scopri i modelli",
    href: "/assistenza-smartphone-capena",
  },
];

function ServiceCard({ svc }) {
  return (
    <div
      style={{
        background: "var(--card)",
        padding: "2rem",
        borderRadius: "1.25rem",
        border: "2px solid var(--border)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex",
        flexDirection: "column",
        cursor: "default",
      }}
      className="shadow-hover"
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = svc.borderHover; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; }}
    >
      <div style={{
        width: "4rem", height: "4rem",
        borderRadius: "1rem",
        background: svc.iconBg,
        color: svc.iconColor,
        display: "flex", alignItems: "center", justifyContent: "center",
        marginBottom: "1.25rem",
      }}>
        {svc.icon}
      </div>
      <h3 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text-primary)" }}>
        {svc.title}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.5rem", lineHeight: 1.65, flex: 1 }}>
        {svc.desc}
      </p>
      <Link href={svc.href} style={{
        fontSize: "0.875rem", fontWeight: 700, color: "var(--primary)",
        display: "flex", alignItems: "center", gap: "0.375rem",
        transition: "gap 0.2s ease",
      }}>
        {svc.cta}
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}

const ServicesSection = () => {
  return (
    <section id="servizi" style={{ padding: "6rem 0", background: "var(--secondary)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: "48rem", marginBottom: "3.5rem" }}>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text-primary)" }}>
            I nostri <span style={{ color: "var(--primary)" }}>servizi</span>
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.7 }}>
            Cosa facciamo ogni giorno per i nostri clienti a Capena, Passo Corese e dintorni.
          </p>
        </div>

        {/* 4 cards — 2x2 su tablet, 4 colonne su desktop */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: "1.5rem" }}>
          {services.map((svc) => (
            <ServiceCard key={svc.title} svc={svc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
