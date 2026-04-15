"use client";

import { Phone, ArrowRight } from "lucide-react";

const WA_BOLLETTA = "https://wa.me/39069073674?text=Ciao%20Telefonia%20Ciocca%2C%20vorrei%20un%27analisi%20gratuita%20della%20mia%20bolletta.%20Vi%20allego%20la%20foto.";

const ProblemSection = () => {
  return (
    <section style={{ padding: "6rem 0", background: "var(--secondary)" }}>
      <div className="container">
        <div style={{ maxWidth: "42rem", margin: "0 auto", textAlign: "center" }}>

          {/* Eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            background: "rgba(220, 38, 38, 0.08)",
            padding: "0.375rem 1rem",
            borderRadius: "9999px",
            marginBottom: "1.25rem",
          }}>
            <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#dc2626" }}>
              Ti riconosci?
            </span>
          </div>

          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1.25rem" }}>
            Stai pagando troppo per i tuoi servizi?
          </h2>

          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2.25rem" }}>
            Bollette che salgono, offerte mobile confuse, fibra lenta. Capita a tutti, ma non devi per forza subirle. Mandaci la foto della tua bolletta su WhatsApp: in 24 ore ti diciamo quanto puoi risparmiare, senza impegno.
          </p>

          {/* CTA buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>

            {/* Primaria — WhatsApp verde */}
            <a
              href={WA_BOLLETTA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.625rem",
                padding: "1.125rem 2.25rem",
                borderRadius: "var(--radius)",
                background: "#25d366",
                color: "white",
                fontWeight: 700, fontSize: "1.0625rem",
                boxShadow: "0 4px 18px -4px rgba(37, 211, 102, 0.5)",
                textDecoration: "none",
                transition: "all 0.25s ease",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Invia la tua bolletta su WhatsApp
              <ArrowRight size={18} />
            </a>

            {/* Secondaria — Chiamaci */}
            <a
              href="tel:069073674"
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.625rem",
                padding: "1.125rem 2rem",
                borderRadius: "var(--radius)",
                border: "2px solid var(--border)",
                color: "var(--text-primary)",
                background: "transparent",
                fontWeight: 700, fontSize: "1.0625rem",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <Phone size={18} />
              Chiamaci: 06 9073 674
            </a>
          </div>

          {/* Nota piccola */}
          <p style={{ marginTop: "1.5rem", fontSize: "0.8125rem", color: "var(--text-muted)", fontStyle: "italic" }}>
            Analisi gratuita, senza impegno. Nessun call center — parli direttamente con noi.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
