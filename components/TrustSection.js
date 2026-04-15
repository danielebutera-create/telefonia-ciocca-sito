"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const bullets = [
  {
    title: "Oltre 10 anni sul territorio",
    desc: "Conosciamo le esigenze di chi vive a Capena e Passo Corese. Non siamo un call center.",
  },
  {
    title: "Consulenza imparziale",
    desc: "Ti proponiamo l'offerta giusta per te, non quella con la provvigione più alta.",
  },
  {
    title: "Tutto sotto lo stesso tetto",
    desc: "Telefonia, energia, fotovoltaico, sicurezza: un solo interlocutore, zero rimbalzi tra uffici.",
  },
  {
    title: "Supporto dopo la firma",
    desc: "Problemi col telefono? Bolletta strana? Siamo qui, basta una chiamata.",
  },
];

const TrustSection = () => {
  return (
    <section style={{ padding: "6rem 0", background: "var(--bg-section)" }}>
      <div className="container">
        <div className="grid md:grid-cols-2" style={{ gap: "4rem", alignItems: "center" }}>

          {/* Left — copy */}
          <div>
            {/* Eyebrow */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              background: "var(--primary-bg)", padding: "0.375rem 1rem",
              borderRadius: "9999px", marginBottom: "1.25rem",
            }}>
              <CheckCircle2 size={14} style={{ color: "var(--primary)" }} />
              <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--primary)" }}>
                Perché sceglierci
              </span>
            </div>

            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "2rem" }}>
              Perché scegliere{" "}
              <span style={{ color: "var(--primary)" }}>Telefonia Ciocca</span>
            </h2>

            {/* 4 bullet */}
            <ul style={{ display: "flex", flexDirection: "column", gap: "1.5rem", margin: 0, padding: 0, listStyle: "none" }}>
              {bullets.map((b) => (
                <li key={b.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{
                    width: "36px", height: "36px", flexShrink: 0,
                    borderRadius: "9999px",
                    background: "var(--primary-bg)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <CheckCircle2 size={18} style={{ color: "var(--primary)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.25rem" }}>
                      {b.title}
                    </div>
                    <div style={{ fontSize: "0.9375rem", color: "var(--text-secondary)", lineHeight: 1.6 }}>
                      {b.desc}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — foto team */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: "1.5rem",
              overflow: "hidden",
              aspectRatio: "4/3",
              position: "relative",
              boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.12)",
              border: "4px solid white",
            }}>
              <Image
                src="/images/bill-orazio.jpg"
                alt="Orazio e Bill — il team di Telefonia Ciocca"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

            {/* Caption overlay */}
            <div style={{
              position: "absolute",
              bottom: "1.25rem",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(0,0,0,0.65)",
              backdropFilter: "blur(6px)",
              borderRadius: "9999px",
              padding: "0.5rem 1.25rem",
              whiteSpace: "nowrap",
            }}>
              <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "white" }}>
                Il nostro team
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustSection;
