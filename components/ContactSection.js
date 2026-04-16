"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { MapPin, Phone, Clock, Send, Loader2 } from "lucide-react";

const ContactSection = () => {
  // "idle" | "loading" | "success" | "error"
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!privacyChecked) {
      setErrorMsg("Per inviare il messaggio devi confermare di aver letto l'informativa privacy.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");

    const nome     = document.getElementById("contact-name").value.trim();
    const email    = document.getElementById("contact-email").value.trim();
    const servizio = document.getElementById("contact-service").value;
    const messaggio = document.getElementById("contact-message").value.trim();

    // --- 1. Apri WhatsApp subito (non aspettare la mail) ---
    const waText = encodeURIComponent(
      `Ciao, vi contatto dal sito!\n\n` +
      `👤 Nome: ${nome}\n` +
      `📧 Email: ${email}\n` +
      `📋 Richiesta: ${servizio}\n` +
      `💬 Messaggio: ${messaggio || "(nessun messaggio aggiuntivo)"}`
    );
    window.open(`https://wa.me/39069073674?text=${waText}`, "_blank");

    // --- 2. Invia email via API Resend (in background) ---
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, servizio, messaggio }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Email fallita — WhatsApp è già aperto, avvisiamo senza bloccare
        setErrorMsg(data.error || "Email non inviata, ma il messaggio WhatsApp è stato aperto.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      // Errore di rete — WhatsApp è già aperto, non blocchiamo l'utente
      setErrorMsg("Connessione non disponibile: l'email non è stata inviata, ma il messaggio WhatsApp è stato aperto.");
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMsg("");
    formRef.current?.reset();
  };

  return (
    <section id="contatti" style={{
      padding: "6rem 0",
      background: "linear-gradient(180deg, #0f172a 0%, #020617 100%)",
      color: "white",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background decorations */}
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0.08, pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: "-5%", right: "-5%", width: "400px", height: "400px", background: "radial-gradient(circle, #4aa3df 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "-10%", left: "-5%", width: "300px", height: "300px", background: "radial-gradient(circle, #d97706 0%, transparent 70%)", borderRadius: "50%" }} />
      </div>

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div className="grid lg:grid-cols-2" style={{ gap: "4rem" }}>

          {/* Left — Info */}
          <div>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 800, marginBottom: "1.5rem", lineHeight: 1.1, letterSpacing: "-0.03em" }}>
              Vieni a <span style={{ color: "var(--primary-light)", fontStyle: "italic" }}>Trovarci</span>
            </h2>
            <p style={{ fontSize: "1.125rem", opacity: 0.65, marginBottom: "2.5rem", lineHeight: 1.7, maxWidth: "28rem" }}>
              Due sedi a Capena e Passo Corese, pronte ad accoglierti per una consulenza gratuita o per riparare il tuo dispositivo.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              <ContactRow
                icon={<MapPin size={24} />}
                iconBg="rgba(14, 165, 233, 0.15)"
                iconColor="#4aa3df"
                label="Indirizzo"
                main="Via Tiberina, 28c, 00060 Capena RM"
              />
              <ContactRow
                icon={<Phone size={24} />}
                iconBg="rgba(22, 163, 74, 0.15)"
                iconColor="#7cc94f"
                label="Telefono"
                main={<a href="tel:+39069073674" style={{ color: "white", fontWeight: 700, fontSize: "1.25rem", transition: "color 0.2s" }}>+39 06 907 3674</a>}
              />
              <ContactRow
                icon={<Clock size={24} />}
                iconBg="rgba(217, 119, 6, 0.15)"
                iconColor="#f9a825"
                label="Orari"
                main="Lun - Ven: 9:00 - 13:00 / 15:30 - 19:30 · Sab: 9:00 - 13:00"
                sub="Domenica: Chiuso"
              />
            </div>
          </div>

          {/* Right — Form */}
          <div style={{
            background: "rgba(255, 255, 255, 0.04)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            padding: "2.5rem",
            borderRadius: "1.5rem",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.3)",
          }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.75rem" }}>
              Scrivici un messaggio
            </h3>

            {/* ── STATO SUCCESSO ── */}
            {status === "success" && (
              <div style={{
                display: "flex", flexDirection: "column", gap: "1rem",
                background: "rgba(37, 211, 102, 0.1)",
                border: "1px solid rgba(37, 211, 102, 0.25)",
                borderRadius: "1rem", padding: "1.75rem",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{
                    width: "2.5rem", height: "2.5rem", borderRadius: "9999px",
                    background: "rgba(37,211,102,0.15)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.25rem", flexShrink: 0,
                  }}>✓</div>
                  <div style={{ fontWeight: 700, fontSize: "1.0625rem", color: "#25D366" }}>
                    Messaggio inviato!
                  </div>
                </div>
                <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
                  La chat WhatsApp è aperta con il tuo messaggio pre-compilato: premi{" "}
                  <strong style={{ color: "white" }}>Invia</strong> per spedirlo a Ciocca.
                  Abbiamo anche inviato una copia via email — risponderemo su entrambi i canali.
                </p>
                <button
                  type="button"
                  onClick={resetForm}
                  style={{
                    alignSelf: "flex-start", background: "none", border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.5)", fontSize: "0.8125rem", cursor: "pointer",
                    padding: "0.5rem 1rem", borderRadius: "0.5rem", transition: "all 0.2s",
                  }}
                >
                  Invia un altro messaggio
                </button>
              </div>
            )}

            {/* ── STATO ERRORE ── */}
            {status === "error" && (
              <div style={{
                display: "flex", flexDirection: "column", gap: "1rem",
                background: "rgba(251, 191, 36, 0.08)",
                border: "1px solid rgba(251, 191, 36, 0.2)",
                borderRadius: "1rem", padding: "1.5rem",
                marginBottom: "1.25rem",
              }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>⚠️</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.9375rem", color: "#fbbf24", marginBottom: "0.375rem" }}>
                      WhatsApp aperto, email non inviata
                    </div>
                    <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.55 }}>
                      {errorMsg || "Il messaggio WhatsApp è pronto: invialo dalla chat. In alternativa chiamaci al"}{" "}
                      <a href="tel:069073674" style={{ color: "#4aa3df", fontWeight: 700 }}>06 9073674</a>.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={resetForm}
                  style={{
                    alignSelf: "flex-start", background: "none", border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.5)", fontSize: "0.8125rem", cursor: "pointer",
                    padding: "0.5rem 1rem", borderRadius: "0.5rem",
                  }}
                >
                  Riprova
                </button>
              </div>
            )}

            {/* ── FORM (nascosto in success) ── */}
            {status !== "success" && (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                <FormField label="Nome Completo" type="text" placeholder="Mario Rossi"
                  id="contact-name" required disabled={status === "loading"} />
                <FormField label="Email" type="email" placeholder="mario@email.it"
                  id="contact-email" required disabled={status === "loading"} />

                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  <label htmlFor="contact-service" style={labelStyle}>Cosa ti serve?</label>
                  <select
                    id="contact-service"
                    disabled={status === "loading"}
                    style={inputStyle}
                  >
                    <option style={{ background: "#0f172a" }}>Analisi Bolletta Luce/Gas</option>
                    <option style={{ background: "#0f172a" }}>Preventivo Riparazione</option>
                    <option style={{ background: "#0f172a" }}>Nuovo Contratto Fibra/Mobile</option>
                    <option style={{ background: "#0f172a" }}>Fotovoltaico</option>
                    <option style={{ background: "#0f172a" }}>Sicurezza / Allarme</option>
                    <option style={{ background: "#0f172a" }}>Altro</option>
                  </select>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
                  <label htmlFor="contact-message" style={labelStyle}>Messaggio</label>
                  <textarea
                    id="contact-message"
                    rows="3"
                    placeholder="Come possiamo aiutarti?"
                    disabled={status === "loading"}
                    style={{ ...inputStyle, resize: "none", fontFamily: "inherit" }}
                  />
                </div>

                {/* ── Dual-channel notice ── */}
                <div style={{
                  display: "flex", alignItems: "flex-start", gap: "0.625rem",
                  padding: "0.875rem 1rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "0.75rem",
                }}>
                  <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "1px" }}>📲</span>
                  <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.55, margin: 0 }}>
                    Il messaggio viene inviato via <strong style={{ color: "rgba(255,255,255,0.65)" }}>WhatsApp</strong> (Meta Platforms Ireland Ltd.) per una risposta immediata
                    e via <strong style={{ color: "rgba(255,255,255,0.65)" }}>email</strong> come conferma.
                  </p>
                </div>

                {/* ── Privacy consent (GDPR art. 13) ── */}
                <label style={{
                  display: "flex", alignItems: "flex-start", gap: "0.625rem",
                  padding: "0.875rem 1rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "0.75rem",
                  cursor: "pointer",
                }}>
                  <input
                    type="checkbox"
                    checked={privacyChecked}
                    onChange={(e) => setPrivacyChecked(e.target.checked)}
                    disabled={status === "loading"}
                    required
                    style={{ marginTop: "0.2rem", flexShrink: 0, accentColor: "#25D366", cursor: "pointer" }}
                  />
                  <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.55 }}>
                    Ho letto l&apos;{" "}
                    <Link href="/privacy" target="_blank" style={{ color: "#4aa3df", textDecoration: "underline", fontWeight: 600 }}>
                      informativa privacy
                    </Link>{" "}
                    e acconsento al trattamento dei miei dati (nome, email, messaggio) da parte di{" "}
                    <strong style={{ color: "rgba(255,255,255,0.85)" }}>Quisqui S.r.l.</strong> per rispondere alla mia richiesta tramite email e WhatsApp.
                    I dati non saranno comunicati a terzi per finalità di marketing.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  style={{
                    width: "100%", padding: "1rem",
                    background: status === "loading"
                      ? "rgba(37,211,102,0.5)"
                      : "#25D366",
                    borderRadius: "0.75rem", fontWeight: 700, fontSize: "1rem",
                    color: "white", border: "none", cursor: status === "loading" ? "not-allowed" : "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.625rem",
                    transition: "all 0.25s ease",
                    boxShadow: status === "loading" ? "none" : "0 8px 20px -4px rgba(37,211,102,0.35)",
                    marginTop: "0.25rem",
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={20} style={{ animation: "spin 1s linear infinite" }} />
                      Apertura WhatsApp...
                    </>
                  ) : (
                    <>
                      <WhatsAppIcon />
                      Invia su WhatsApp
                    </>
                  )}
                </button>
              </form>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

/* ─── Stili condivisi ─── */
const labelStyle = {
  fontSize: "0.6875rem", fontWeight: 700,
  textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.5,
};

const inputStyle = {
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "0.75rem",
  padding: "0.875rem 1rem",
  color: "white", fontSize: "0.9375rem",
  outline: "none", transition: "border-color 0.2s",
  appearance: "none",
};

/* ─── Sub-componenti ─── */
function FormField({ label, type, placeholder, id, required, disabled }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.375rem" }}>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      <input
        id={id} type={type} placeholder={placeholder}
        required={required} disabled={disabled}
        style={inputStyle}
      />
    </div>
  );
}

function ContactRow({ icon, iconBg, iconColor, label, main, sub }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "1.125rem" }}>
      <div style={{
        width: "3.25rem", height: "3.25rem", background: iconBg,
        borderRadius: "0.875rem", display: "flex", alignItems: "center",
        justifyContent: "center", color: iconColor, flexShrink: 0,
      }}>
        {icon}
      </div>
      <div>
        <div style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.4, marginBottom: "0.25rem", fontWeight: 600 }}>{label}</div>
        <div style={{ fontWeight: 700, fontSize: "1.125rem", lineHeight: 1.4 }}>{main}</div>
        {sub && <div style={{ fontSize: "0.8125rem", opacity: 0.45, marginTop: "0.25rem" }}>{sub}</div>}
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default ContactSection;
