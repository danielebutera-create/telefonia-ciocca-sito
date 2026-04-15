import LocalLandingPage from "@/components/LocalLandingPage";
import { ShieldAlert, Video, KeyRound, BellRing } from "lucide-react";

export const metadata = {
  title: "Allarmi e sicurezza a Passo Corese — Partner Verisure | Telefonia Ciocca",
  description: "Sistemi di allarme e videosorveglianza a Passo Corese e Fara in Sabina. Partner ufficiali Verisure. Consulenza gratuita, monitoraggio 24/7. Sede in Via Garibaldi 72.",
};

export default function SicurezzaPassoCorese() {
  const valueProps = [
    { title: "Sistemi Verisure", desc: "La migliore tecnologia smart con i prodotti di vertice del leader mondiale in sistemi di sicurezza.", icon: <ShieldAlert size={28} /> },
    { title: "Monitoraggio 24/7", desc: "Un occhio vigile e risposta istantanea in caso di intrusione, anche nelle zone più isolate della Sabina.", icon: <Video size={28} /> },
    { title: "Protezione Completa", desc: "Soluzioni per abitazioni, aziende agricole e attività commerciali nella zona di Fara in Sabina.", icon: <KeyRound size={28} /> },
    { title: "Preventivi Rapidi", desc: "Scopri i costi reali senza impegno. Installazione wireless, nessuna ristrutturazione necessaria.", icon: <BellRing size={28} /> },
  ];

  const relatedLandings = [
    { title: "Fibra a Passo Corese", href: "/fibra-passo-corese", desc: "Una linea stabile è essenziale per i collegamenti di videosorveglianza da remoto." },
    { title: "Fotovoltaico a Passo Corese", href: "/fotovoltaico-passo-corese", desc: "Energia autonoma per l'impianto di sicurezza anche in caso di blackout." },
    { title: "Sicurezza a Capena", href: "/sicurezza-capena", desc: "Scopri il servizio anche nella sede storica di Capena." },
  ];

  const problemBlock = {
    title: "Preoccupato per la sicurezza di casa o azienda a Passo Corese?",
    body: "Le zone rurali e periferiche della Sabina sono spesso più vulnerabili. Un sistema professionale Verisure con monitoraggio attivo è la soluzione più affidabile — e meno costosa di quanto si pensi."
  };

  return (
    <LocalLandingPage
      h1="Allarmi e sicurezza a Passo Corese — Partner Verisure"
      intro="Proteggi casa o azienda con il sistema di allarme numero uno al mondo. Consulenza gratuita nella sede di Passo Corese, installazione wireless senza opere murarie."
      problemBlock={problemBlock}
      valueProps={valueProps}
      heroImage="/images/sicurezza-hero.png"
      operatorsText="In qualità di partner ufficiali Verisure offriamo progettazione anti-intrusione, guardia privata e manutenzione a vita del sistema. Operiamo su tutta la zona di Fara in Sabina e provincia di Rieti."
      serviceArea={["Passo Corese", "Fara in Sabina", "Poggio Mirteto", "Montopoli di Sabina", "Cantalupo in Sabina", "Torri in Sabina"]}
      ctaPrimary={{ label: "Consulenza Gratuita", href: "https://wa.me/39069073674?text=Vorrei%20un%20preventivo%20sicurezza%20Verisure%20a%20Passo%20Corese." }}
      relatedLandings={relatedLandings}
      faq={[
        { question: "Bisogna fare lavori per installare il sistema?", answer: "No. La grande maggioranza dei componenti Verisure è wireless e anti-jamming: nessun passacavi, nessuna ristrutturazione." },
        { question: "Funziona bene anche nelle zone isolate della Sabina?", answer: "Sì. Verisure ha copertura su tutta la provincia di Rieti e gestisce gli eventuali falsi allarmi attraverso la centrale verificatrice, evitando sanzioni." },
        { question: "Dove si trova la sede di Passo Corese?", answer: "Via Garibaldi 72, 02032 Fara in Sabina (RI). Telefono: 06 9073 674 — stesso numero della sede di Capena." }
      ]}
    />
  );
}
