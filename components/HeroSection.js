"use client";

import { CheckCircle2, Smartphone, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";

const WA_GENERICO = "https://wa.me/39069073674?text=Ciao%20Telefonia%20Ciocca%2C%20vorrei%20qualche%20informazione.";

const HeroSection = () => {
  return (
    <section
      style={{
        position: "relative",
        marginTop: "70px",
        paddingTop: "4rem",
        paddingBottom: "5rem",
        overflow: "hidden",
        background: "var(--hero-bg)",
      }}
    >
      {/* Background decorations */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "600px", height: "600px", borderRadius: "50%", background: "radial-gradient(circle, rgba(26, 111, 181, 0.06) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(92, 176, 48, 0.05) 0%, transparent 70%)", zIndex: 0, pointerEvents: "none" }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid md:grid-cols-2" style={{ alignItems: "center", gap: "3rem" }}>

          {/* Left — Copy */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

            {/* Badge doppia area */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.375rem 1rem", background: "rgba(26, 111, 181, 0.1)",
                borderRadius: "9999px", fontSize: "0.8125rem", fontWeight: 600, color: "#1a6fb5",
              }}>
                <Smartphone size={13} />
                Telefonia
              </div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                padding: "0.375rem 1rem", background: "rgba(92, 176, 48, 0.1)",
                borderRadius: "9999px", fontSize: "0.8125rem", fontWeight: 600, color: "#3d8b1a",
              }}>
                <Zap size={13} />
                Energia
              </div>
            </div>

            {/* H1 */}
            <h1 style={{
              fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
              margin: 0,
            }}>
              Telefonia ed Energia a{" "}
              <span style={{
                background: "linear-gradient(135deg, #1a6fb5 0%, #4aa3df 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Capena e Passo Corese
              </span>{" "}
              — Risparmia su bollette, fibra e servizi
            </h1>

            {/* Sottotitolo */}
            <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: "32rem", lineHeight: 1.7, margin: 0 }}>
              Offerte telefonia, consulenza energia e soluzioni per casa e azienda. Un solo punto di riferimento, due sedi vicine a te.
            </p>

            {/* CTA primaria WhatsApp */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.875rem", marginTop: "0.25rem" }}>
              <a
                href={WA_GENERICO}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.625rem",
                  padding: "1rem 2rem",
                  borderRadius: "var(--radius)",
                  background: "#25d366",
                  color: "white",
                  fontWeight: 700, fontSize: "1rem",
                  boxShadow: "0 4px 14px -3px rgba(37, 211, 102, 0.45)",
                  transition: "all 0.25s ease",
                  textDecoration: "none",
                }}
              >
                {/* WhatsApp icon inline SVG */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Scrivici su WhatsApp
              </a>

              {/* CTA secondarie */}
              <div style={{ display: "flex", gap: "0.625rem", flexWrap: "wrap" }}>
                <a
                  href="#telefonia"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.375rem",
                    padding: "1rem 1.5rem",
                    borderRadius: "var(--radius)",
                    border: "2px solid #1a6fb5",
                    color: "#1a6fb5",
                    background: "transparent",
                    fontWeight: 700, fontSize: "0.9375rem",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                >
                  <Smartphone size={15} />
                  Scopri Telefonia
                </a>
                <a
                  href="#energia"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "0.375rem",
                    padding: "1rem 1.5rem",
                    borderRadius: "var(--radius)",
                    border: "2px solid #3d8b1a",
                    color: "#3d8b1a",
                    background: "transparent",
                    fontWeight: 700, fontSize: "0.9375rem",
                    transition: "all 0.2s ease",
                    textDecoration: "none",
                  }}
                >
                  <Zap size={15} />
                  Scopri Energia
                </a>
              </div>
            </div>

            {/* Trust signals — 3 bullet */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem", marginTop: "1rem" }}>
              {[
                "Consulenza gratuita in negozio o via WhatsApp",
                "Due sedi: Capena e Passo Corese",
                "Oltre 10 anni di esperienza nel territorio",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.9375rem", fontWeight: 500, color: "var(--text-secondary)" }}>
                  <CheckCircle2 size={17} style={{ color: "#5cb030", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Foto negozio */}
          <div style={{ position: "relative" }}>
            <div style={{
              aspectRatio: "3/4",
              borderRadius: "1.5rem",
              overflow: "hidden",
              position: "relative",
              zIndex: 10,
              boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.15)",
              border: "4px solid white",
            }}>
              <Image
                src="/images/esterno-negozio.jpeg"
                alt="Negozio Telefonia Ciocca a Capena — Telefonia ed Energia"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Floating card — doppia area */}
            <div style={{
              position: "absolute",
              bottom: "-1.25rem",
              left: "-1.25rem",
              background: "var(--card)",
              padding: "1rem 1.25rem",
              borderRadius: "1rem",
              boxShadow: "0 20px 40px -8px rgba(0, 0, 0, 0.12)",
              zIndex: 20,
              display: "flex",
              alignItems: "center",
              gap: "0.875rem",
              border: "1px solid rgba(0, 0, 0, 0.04)",
              animation: "bounce-subtle 3s ease-in-out infinite",
            }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "28px", height: "28px", background: "rgba(26,111,181,0.12)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Smartphone size={14} style={{ color: "#1a6fb5" }} />
                  </div>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--text-primary)" }}>Telefonia</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: "28px", height: "28px", background: "rgba(92,176,48,0.12)", borderRadius: "6px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Zap size={14} style={{ color: "#3d8b1a" }} />
                  </div>
                  <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--text-primary)" }}>Energia</span>
                </div>
              </div>
              <div style={{ width: "1px", height: "36px", background: "var(--border)" }} />
              <div>
                <div style={{ fontSize: "0.6875rem", color: "var(--text-muted)", fontWeight: 600 }}>2 Sedi</div>
                <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--text-primary)" }}>Capena · P. Corese</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
