import LocalLandingPage from "@/components/LocalLandingPage";
import { Wifi, Router, Map, MonitorSmartphone } from "lucide-react";

export const metadata = {
  title: "Fibra ottica a Capena e provincia | Telefonia Ciocca",
  description: "Verifica la copertura per la Fibra Ottica a Capena, Fiano Romano, Riano. Scopri le migliori tariffe Fastweb, Vodafone e 5G.",
};

export default function FibraCapena() {
  const valueProps = [
    { title: "Verifica Copertura", desc: "Testiamo l'infrastruttura reale al tuo indirizzo di casa o ufficio.", icon: <Map size={28} /> },
    { title: "Fibra Casa", desc: "Linee stabili per lo streaming in 4k e per i dispositivi IoT domestici.", icon: <Router size={28} /> },
    { title: "Fibra Business", desc: "Banda minima garantita ed assistenza dedicata rapida per aziende.", icon: <MonitorSmartphone size={28} /> },
    { title: "Soluzioni FWA & 5G", desc: "Non arriva la fibra pura? Ti porteremo online con potenti antenne dedicate.", icon: <Wifi size={28} /> },
  ];

  const relatedLandings = [
    { title: "Servizi Assistenza", href: "/assistenza-smartphone-capena", desc: "Configureremo correttamente PC ed applicazioni sulla nuova rete." },
    { title: "Energia", href: "/risparmio-bolletta", desc: "Ottimizza le risorse controllando anche i consumi energetici." },
  ];

  const problemBlock = {
    title: "Connessioni lente o instabili che ti stressano?",
    body: "Spesso si continua a pagare bollette alte per standard del passato. Lascia che i nostri tecnici analizzino l'effettiva copertura nella tua via per fare lo switch ad una linea nuova."
  };

  return (
    <LocalLandingPage
      slug="fibra-capena"
      h1="Fibra ottica a Capena e provincia"
      intro="Il centro consulenza per la connessione ultra-veloce a casa o per la tua azienda, vicino e super-trasparente sulla copertura."
      problemBlock={problemBlock}
      valueProps={valueProps}
      heroImage="/images/fibra-hero.png"
      operatorsText="Analizziamo le tariffe Fastweb, Vodafone, WindTre, Sky Wifi, Iliad, ma anche Eolo se la tua ubicazione è in zone più difficili."
      ctaPrimary={{ label: "Verifica copertura ora", href: "https://wa.me/39069073674" }}
      relatedLandings={relatedLandings}
      faq={[
        { question: "La verifica preventiva è a pagamento?", answer: "No, in negozio o tramite un rapido scambio messaggi verificheremo le cabine locali a costo zero." },
        { question: "Vi occupate voi dell'eventuale disdetta?", answer: "Si, faremo il possibile per procedere tramite migrazione burocratica evitando di doverti far mandare PEC fastidiose." }
      ]}
    />
  );
}
