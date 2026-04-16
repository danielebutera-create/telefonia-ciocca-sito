"use client";

import { MapPin, Phone, Clock, ExternalLink, Star } from "lucide-react";

const ORARI = [
  { label: "Lun – Ven", value: "09:00 – 13:00  /  15:30 – 19:30" },
  { label: "Sabato", value: "09:00 – 13:00" },
  { label: "Domenica", value: "Chiuso" },
];

const sedi = [
  {
    id: "capena",
    badge: null,
    title: "Capena",
    subtitle: "Sede principale",
    address: "Via Tiberina, 28C",
    city: "00060 Capena (RM)",
    phone: "06 9073674",
    phoneHref: "tel:069073674",
    mapsUrl: "https://maps.app.goo.gl/nWgvETEtz7yseqqE9",
    mapsLabel: "Ottieni indicazioni",
    rating: "4,3",
    ratingCount: "92 recensioni",
    // foto reale negozio: aggiungere quando disponibile
    img: null,
    active: true,
  },
  {
    id: "passocorese",
    badge: "Nuova Apertura",
    title: "Passo Corese",
    subtitle: "Fara in Sabina (RI)",
    address: "Via Garibaldi, 72",
    city: "02032 Fara in Sabina (RI)",
    phone: "0765 213394",
    phoneHref: "tel:+390765213394",
    mapsUrl: "https://maps.google.com/?q=Via+Garibaldi+72+Fara+in+Sabina",
    mapsLabel: "Vieni a trovarci",
    rating: null,
    ratingCount: null,
    img: null, // foto non ancora disponibile
    active: false,
  },
];

const LocationCard = ({ sede }) => {
  const cardBase = {
    background: "var(--card)",
    borderRadius: "1.5rem",
    border: `1px solid ${sede.active ? "var(--primary)" : "var(--border)"}`,
    boxShadow: sede.active ? "0 0 0 1px var(--primary), var(--shadow-lg)" : "var(--shadow)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    transition: "all 0.3s ease",
  };

  return (
    <div style={cardBase} className="shadow-hover">
      {/* Badge apertura */}
      {sede.badge && (
        <div style={{
          position: "absolute",
          top: "1.25rem",
          right: "1.25rem",
          zIndex: 2,
          background: "rgba(232,119,34,0.12)",
          color: "var(--orange)",
          border: "1px solid rgba(232,119,34,0.35)",
          borderRadius: "9999px",
          fontSize: "0.6875rem",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          padding: "0.25rem 0.75rem",
        }}>
          {sede.badge}
        </div>
      )}

      {/* Immagine negozio / placeholder */}
      <div style={{
        height: "10rem",
        background: sede.active
          ? "linear-gradient(135deg, var(--primary) 0%, #0c5a8a 100%)"
          : "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexShrink: 0,
      }}>
        {sede.img ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={sede.img}
            alt={`Telefonia Ciocca — ${sede.title}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.6)" }}>
            <MapPin size={36} strokeWidth={1.5} style={{ marginBottom: "0.375rem", opacity: 0.7 }} />
            <div style={{ fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em" }}>
              {sede.active ? "Sede Capena" : "Passo Corese"}
            </div>
          </div>
        )}

        {/* Rating overlay — solo sede attiva */}
        {sede.rating && (
          <div style={{
            position: "absolute",
            bottom: "0.75rem",
            left: "0.75rem",
            background: "rgba(0,0,0,0.65)",
            backdropFilter: "blur(4px)",
            borderRadius: "9999px",
            padding: "0.25rem 0.75rem",
            display: "flex",
            alignItems: "center",
            gap: "0.375rem",
          }}>
            <Star size={12} fill="#f9a825" color="#f9a825" />
            <span style={{ fontSize: "0.8125rem", fontWeight: 700, color: "white" }}>{sede.rating}</span>
            <span style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.65)" }}>({sede.ratingCount})</span>
          </div>
        )}
      </div>

      {/* Contenuto card */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <div style={{ marginBottom: "1.25rem" }}>
          <div style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--primary)", marginBottom: "0.25rem" }}>
            {sede.subtitle}
          </div>
          <h3 style={{ fontSize: "1.375rem", fontWeight: 800, color: "var(--text-primary)", margin: 0 }}>
            Telefonia Ciocca<br />
            <span style={{ color: "var(--primary)" }}>{sede.title}</span>
          </h3>
        </div>

        {/* Indirizzo */}
        <div style={{ display: "flex", gap: "0.625rem", marginBottom: "0.875rem", alignItems: "flex-start" }}>
          <MapPin size={15} style={{ color: "var(--primary)", flexShrink: 0, marginTop: "0.125rem" }} />
          <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
            {sede.address}<br />{sede.city}
          </div>
        </div>

        {/* Telefono */}
        <div style={{ display: "flex", gap: "0.625rem", marginBottom: "1.25rem", alignItems: "center" }}>
          <Phone size={15} style={{ color: "var(--primary)", flexShrink: 0 }} />
          <a href={sede.phoneHref} style={{ fontSize: "0.875rem", color: "var(--text-secondary)", transition: "color 0.2s" }}
            onMouseEnter={(e) => e.target.style.color = "var(--primary)"}
            onMouseLeave={(e) => e.target.style.color = "var(--text-secondary)"}
          >{sede.phone}</a>
        </div>

        {/* Orari */}
        <div style={{ marginBottom: "1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.375rem", marginBottom: "0.625rem" }}>
            <Clock size={13} style={{ color: "var(--primary)" }} />
            <span style={{ fontSize: "0.6875rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-secondary)" }}>
              Orari
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
            {ORARI.map(({ label, value }) => (
              <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8125rem" }}>
                <span style={{ color: "var(--text-secondary)", fontWeight: 600 }}>{label}</span>
                <span style={{ color: value === "Chiuso" ? "var(--text-muted)" : "var(--text-primary)" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: "auto" }}>
          <a
            href={sede.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={sede.active ? "btn-primary" : "btn-outline"}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              borderRadius: "9999px",
              width: "100%",
              padding: "0.75rem 1.5rem",
              fontSize: "0.9375rem",
              opacity: 1,
            }}
          >
            <MapPin size={16} />
            {sede.mapsLabel}
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </div>
  );
};

const LocationSection = () => {
  return (
    <section id="sedi" style={{ padding: "6rem 0", background: "var(--bg-section)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: "var(--primary-bg)",
            padding: "0.375rem 1rem",
            borderRadius: "9999px",
            marginBottom: "1rem",
          }}>
            <MapPin size={14} style={{ color: "var(--primary)" }} />
            <span style={{ fontSize: "0.8125rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--primary)" }}>
              Le nostre sedi
            </span>
          </div>
          <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 800, marginBottom: "0.75rem", color: "var(--text-primary)" }}>
            Siamo <span style={{ color: "var(--primary)" }}>Vicini a Te</span>
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: "36rem" }}>
            Due punti vendita tra Roma Nord e Fara in Sabina, con gli stessi orari e lo stesso team professionale.
          </p>
        </div>

        {/* Cards — 2 colonne su md+ */}
        <div
          className="grid md:grid-cols-2"
          style={{ gap: "2rem", maxWidth: "56rem", margin: "0 auto" }}
        >
          {sedi.map((sede) => (
            <LocationCard key={sede.id} sede={sede} />
          ))}
        </div>

        {/* Nota numero condiviso */}
        <p style={{
          textAlign: "center",
          marginTop: "2rem",
          fontSize: "0.8125rem",
          color: "var(--text-muted)",
          fontStyle: "italic",
        }}>
          Capena: <a href="tel:069073674" style={{ color: "var(--text-secondary)" }}>06 9073674</a> · Passo Corese: <a href="tel:+390765213394" style={{ color: "var(--text-secondary)" }}>0765 213394</a>
        </p>
      </div>
    </section>
  );
};

export default LocationSection;
