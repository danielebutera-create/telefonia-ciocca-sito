"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle2, MessageCircle } from "lucide-react";
import Head from "next/head";

export default function LocalLandingPage({
  h1,
  intro,
  heroImage,
  photoCredit,
  problemBlock,
  valueProps,
  pricingNote,
  operatorsText,
  serviceArea = ["Capena", "Fiano Romano", "Castelnuovo di Porto", "Riano", "Passo Corese"],
  ctaPrimary,
  ctaSecondary = { label: "Scrivici su WhatsApp", href: "https://wa.me/39069073674" },
  relatedLandings = [],
  faq = [],
}) {
  return (
    <>
      {faq.length > 0 && (
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faq.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.answer,
                  },
                })),
              }),
            }}
          />
        </Head>
      )}

      {/* 1. Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "#f8fafc" }}>
        <div className="absolute top-0 inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at bottom right, var(--primary) 0%, transparent 45%)' }} />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 800, marginBottom: "1.5rem", color: "#0f172a", lineHeight: 1.15, letterSpacing: "-0.015em" }}>
                {h1}
              </h1>
              <p style={{ fontSize: "1.125rem", color: "#475569", marginBottom: "2rem", lineHeight: 1.7 }}>
                {intro}
              </p>

              {pricingNote && (
                <div style={{ display: "inline-block", padding: "0.5rem 1rem", borderRadius: "0.5rem", background: "#dcfce7", color: "#166534", fontWeight: 700, marginBottom: "2rem" }}>
                  {pricingNote}
                </div>
              )}

              <div className="flex flex-wrap gap-4">
                {ctaPrimary && (
                  <Link href={ctaPrimary.href} className="btn-primary" style={{ minWidth: "200px", justifyContent: "center", fontSize: "1.125rem", padding: "1rem 1.5rem" }}>
                    {ctaPrimary.label}
                    <ArrowRight size={20} style={{ marginLeft: "0.5rem" }} />
                  </Link>
                )}
                <a href={ctaSecondary.href} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", minWidth: "200px", justifyContent: "center", fontSize: "1.125rem", padding: "1rem 1.5rem", border: "2px solid var(--border)", borderRadius: "var(--radius)", background: "white", color: "var(--text-primary)", fontWeight: 700, textDecoration: "none" }}>
                  <MessageCircle size={20} style={{ color: "#25d366" }} />
                  {ctaSecondary.label}
                </a>
              </div>
            </div>

            <div className="relative">
              <div style={{ aspectRatio: "4/3", borderRadius: "1.5rem", overflow: "hidden", boxShadow: "0 25px 60px -12px rgba(0,0,0,0.15)", position: "relative", border: "4px solid white" }}>
                <Image src={heroImage || "/images/hero.png"} alt={h1} fill style={{ objectFit: "cover" }} priority />
              </div>
              {photoCredit && (
                <p style={{ fontSize: "0.6875rem", color: "#94a3b8", marginTop: "0.5rem", textAlign: "right", lineHeight: 1.4 }}>
                  Foto di {photoCredit.name} —{" "}
                  <a href={photoCredit.url} target="_blank" rel="noopener noreferrer" style={{ color: "#94a3b8", textDecoration: "underline", textUnderlineOffset: "2px" }}>
                    {photoCredit.url.replace("https://", "")}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem Statement */}
      {problemBlock && (
        <section style={{ padding: "4rem 0", background: "white", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center", border: "1px solid #fecaca", padding: "2rem", borderRadius: "1.5rem", background: "#fff5f5" }}>
              <h2 style={{ fontSize: "1.875rem", fontWeight: 800, marginBottom: "1rem", color: "#0f172a" }}>
                {problemBlock.title}
              </h2>
              <p style={{ fontSize: "1.125rem", color: "#374151", lineHeight: 1.7 }}>
                {problemBlock.body}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 3. Value Props (4 Cards) */}
      <section style={{ padding: "5rem 0", background: "#f8fafc" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a" }}>Perché sceglierci a {serviceArea[0]}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps?.map((prop, idx) => (
              <div key={idx} style={{ background: "white", padding: "2rem", borderRadius: "1.5rem", boxShadow: "0 4px 20px -4px rgba(0,0,0,0.08)", border: "1px solid var(--border)", display: "flex", flexDirection: "column" }}>
                <div style={{ width: "3.5rem", height: "3.5rem", background: "var(--primary-bg)", borderRadius: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--primary)", marginBottom: "1.25rem" }}>
                  {prop.icon || <CheckCircle2 size={28} />}
                </div>
                <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem", color: "#0f172a" }}>{prop.title}</h3>
                <p style={{ fontSize: "0.9375rem", color: "#475569", lineHeight: 1.65 }}>{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Brand / Narrative */}
      {operatorsText && (
        <section style={{ padding: "4rem 0", background: "white" }}>
          <div className="container">
            <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem", color: "#0f172a" }}>Con le migliori realtà sul mercato</h2>
              <p style={{ fontSize: "1.0625rem", color: "#475569", background: "#f8fafc", padding: "1.5rem", borderRadius: "1rem", border: "1px solid var(--border)", lineHeight: 1.7 }}>
                {operatorsText}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 5. Zona Operativa */}
      <section style={{ padding: "4rem 0", background: "#0f172a", color: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "2rem", color: "white" }}>Operiamo direttamente a</h2>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem" }}>
              {serviceArea.map(area => (
                <div key={area} style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(255,255,255,0.1)", padding: "0.625rem 1.25rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600, color: "white", border: "1px solid rgba(255,255,255,0.15)" }}>
                  <MapPin size={14} style={{ color: "#4aa3df" }} />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      {faq?.length > 0 && (
        <section style={{ padding: "5rem 0", background: "white" }}>
          <div className="container" style={{ maxWidth: "48rem" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <h2 style={{ fontSize: "1.875rem", fontWeight: 800, color: "#0f172a" }}>Domande Frequenti</h2>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {faq.map((item, idx) => (
                <div key={idx} style={{ padding: "1.5rem", borderRadius: "1rem", border: "1px solid var(--border)", background: "#f8fafc" }}>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.75rem", color: "#0f172a" }}>{item.question}</h3>
                  <p style={{ fontSize: "0.9375rem", color: "#475569", lineHeight: 1.65 }}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Related Landings */}
      {relatedLandings?.length > 0 && (
        <section style={{ padding: "5rem 0", background: "#f8fafc" }}>
          <div className="container">
            <div style={{ marginBottom: "2rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0f172a" }}>Scopri gli altri servizi</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedLandings.map((link, idx) => (
                <Link key={idx} href={link.href} style={{ display: "block", background: "white", padding: "1.5rem", borderRadius: "1rem", border: "1px solid var(--border)", boxShadow: "0 2px 8px -2px rgba(0,0,0,0.06)", textDecoration: "none", transition: "border-color 0.2s" }}>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, marginBottom: "0.5rem", color: "#0f172a" }}>{link.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "#475569", marginBottom: "1rem", lineHeight: 1.55 }}>{link.desc}</p>
                  <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--primary)", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                    Visualizza <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] mix-blend-overlay"></div>
        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Non aspettare, contattaci oggi.</h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
            Siamo a tua disposizione per trovare la soluzione migliore. Nessun call center, parlerai direttamente con i nostri esperti in negozio.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:069073674" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "1rem 2rem", borderRadius: "var(--radius)",
              background: "white", color: "var(--primary)",
              fontWeight: 700, fontSize: "1.125rem", textDecoration: "none",
            }}>
              Chiama Subito: 06 9073 674
            </a>
            <a href="https://wa.me/39069073674" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "1rem 2rem", borderRadius: "var(--radius)",
              background: "transparent", color: "white",
              border: "2px solid rgba(255,255,255,0.4)",
              fontWeight: 700, fontSize: "1.125rem", textDecoration: "none",
            }}>
              Scrivici su WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
