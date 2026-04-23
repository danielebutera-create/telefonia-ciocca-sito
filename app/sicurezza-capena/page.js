import LocalLandingPage from "@/components/LocalLandingPage";
import { ShieldAlert, Video, KeyRound, BellRing } from "lucide-react";

export const metadata = {
  title: "Allarmi e sicurezza a Capena — Partner Verisure | Telefonia Ciocca",
  description: "Sistemi di allarme e videosorveglianza con partnership ufficiali Verisure. Soluzioni personalizzate ed attive 24/7. Consulenza gratuita a Capena.",
  alternates: { canonical: "https://telefoniaciocca.it/sicurezza-capena" },
};

export default function SicurezzaCapena() {
  const valueProps = [
    { title: "Sistemi Verisure", desc: "La migliore tecnologia smart sul campo con i prodotti di vertice Verisure, il numero uno al mondo nella sicurezza.", icon: <ShieldAlert size={28} /> },
    { title: "Monitoraggio 24/7", desc: "Centrale verificatrice attiva giorno e notte: un occhio vigile e risposta istantanea in caso di intrusione.", icon: <Video size={28} /> },
    { title: "Protezione Completa", desc: "Difesa di attività commerciali ed abitazioni isolate ad un costo contenuto, con contratti sia privati che business.", icon: <KeyRound size={28} /> },
    { title: "Preventivi Rapidi", desc: "Sopralluogo e preventivo gratuiti, senza impegno: installazione wireless, nessuna opera muraria necessaria.", icon: <BellRing size={28} /> },
  ];

  const relatedLandings = [
    { title: "Fibra Ottica", href: "/fibra-capena", desc: "Una linea stabile è essenziale per la videosorveglianza da remoto." },
    { title: "Fotovoltaico", href: "/fotovoltaico-capena", desc: "Alimenta il tuo impianto di sicurezza con energia tua, sempre." },
  ];

  const problemBlock = {
    title: "Ti preoccupa la sicurezza di casa o azienda?",
    body: "Trovare un fornitore affidabile per un antifurto non è banale, e i kit fai-da-te raramente funzionano davvero. Con Telefonia Ciocca, partner ufficiali Verisure, hai la garanzia del leader mondiale."
  };

  return (
    <LocalLandingPage
      slug="sicurezza-capena"
      h1="Allarmi e sicurezza a Capena — Partner Verisure"
      intro="L'incolumità è preziosa. Richiedi la valutazione per i sistemi Verisure numero uno al mondo tramite la nostra consulenza diretta a Capena."
      problemBlock={problemBlock}
      valueProps={valueProps}
      heroImage="/images/sicurezza-hero.png"
      operatorsText="In qualità di partner ufficiali Verisure offriamo l'esperienza di progettazione anti-intrusione assieme alla più avanzata logistica di guardia privata e manutenzione a vita del dispositivo."
      ctaPrimary={{ label: "Consulenza Gratuita", href: "https://wa.me/39069073674" }}
      relatedLandings={relatedLandings}
      faq={[
        { question: "La casa andrà bucherellata per i fili?", answer: "No: la grande maggioranza dei componenti Verisure è wireless e anti-jamming, senza passacavi né ristrutturazioni." },
        { question: "Se mi scatta per errore chi mi multa?", answer: "La centrale verificatrice Verisure annullerà eventuali falsi allarmi prima di qualunque intervento, evitando chiamate a vuoto e sanzioni." },
        { question: "Offrite contratti anche per le aziende?", answer: "Sì, offriamo soluzioni Verisure sia per privati che per attività commerciali, con piani su misura per ogni esigenza." }
      ]}
    />
  );
}
