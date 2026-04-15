import LocalLandingPage from "@/components/LocalLandingPage";
import { Wifi, Router, Map, MonitorSmartphone } from "lucide-react";

export const metadata = {
  title: "Fibra ottica a Passo Corese e Fara in Sabina | Telefonia Ciocca",
  description: "Verifica copertura fibra ottica a Passo Corese, Fara in Sabina, Poggio Mirteto. Tariffe Fastweb, Vodafone, Iliad e soluzioni FWA. Consulenza gratuita in negozio.",
};

export default function FibraPassoCorese() {
  const valueProps = [
    { title: "Verifica Copertura", desc: "Testiamo l'infrastruttura reale al tuo indirizzo a Passo Corese e Fara in Sabina.", icon: <Map size={28} /> },
    { title: "Fibra Casa", desc: "Linee stabili per lo streaming, lo smart working e i dispositivi IoT domestici.", icon: <Router size={28} /> },
    { title: "Fibra Business", desc: "Banda minima garantita e assistenza dedicata per aziende nella zona di Fara in Sabina.", icon: <MonitorSmartphone size={28} /> },
    { title: "Soluzioni FWA & 5G", desc: "Dove non arriva la fibra pura, ti colleghiamo con potenti antenne FWA dedicate.", icon: <Wifi size={28} /> },
  ];

  const relatedLandings = [
    { title: "Risparmio Bollette", href: "/risparmio-bolletta-passo-corese", desc: "Ottimizza anche la spesa energetica con la nostra consulenza gratuita." },
    { title: "Assistenza Smartphone", href: "/assistenza-smartphone-passo-corese", desc: "Configuriamo correttamente PC e app sulla nuova rete." },
    { title: "Fibra a Capena", href: "/fibra-capena", desc: "Scopri il servizio anche nella nostra sede storica di Capena." },
  ];

  const problemBlock = {
    title: "Connessione lenta o instabile a Passo Corese?",
    body: "Molte zone di Fara in Sabina e Passo Corese hanno copertura migliore di quanto si pensi — ma bisogna verificare l'infrastruttura reale al proprio civico. I nostri tecnici lo fanno gratis, senza impegno."
  };

  return (
    <LocalLandingPage
      h1="Fibra ottica a Passo Corese e Fara in Sabina"
      intro="Il punto di riferimento per la connessione ultra-veloce nella zona di Fara in Sabina. Verifichiamo la copertura reale al tuo indirizzo e attiviamo la tariffa più conveniente."
      problemBlock={problemBlock}
      valueProps={valueProps}
      heroImage="/images/fibra-hero.png"
      operatorsText="Confrontiamo le tariffe di Fastweb, Vodafone, WindTre, Sky Wifi, Iliad ed Eolo per le zone con copertura difficile nella provincia di Rieti."
      serviceArea={["Passo Corese", "Fara in Sabina", "Poggio Mirteto", "Montopoli di Sabina", "Cantalupo in Sabina", "Torri in Sabina"]}
      ctaPrimary={{ label: "Verifica copertura ora", href: "https://wa.me/39069073674?text=Vorrei%20verificare%20la%20copertura%20fibra%20a%20Passo%20Corese." }}
      relatedLandings={relatedLandings}
      faq={[
        { question: "La verifica copertura è a pagamento?", answer: "No, verifichiamo gratuitamente le cabine locali al vostro indirizzo — in negozio o via messaggio, senza alcun costo." },
        { question: "Vi occupate della disdetta del vecchio operatore?", answer: "Sì, gestiamo noi la migrazione burocratica per evitare PEC e procedure complesse. Pensiamo a tutto noi." },
        { question: "Dove si trova la sede di Passo Corese?", answer: "Siamo in Via Garibaldi 72, 02032 Fara in Sabina (RI). Stesso numero delle due sedi: 06 9073 674." }
      ]}
    />
  );
}
