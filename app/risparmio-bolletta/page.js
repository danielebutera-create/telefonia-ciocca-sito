import LocalLandingPage from "@/components/LocalLandingPage";
import { Scale, HeartHandshake, EyeOff, Lightbulb } from "lucide-react";

export const metadata = {
  title: "Risparmia su bollette Luce e Gas a Capena | Telefonia Ciocca",
  description: "Analisi gratuita della bolletta luce e gas a Capena, Fiano Romano. Ti mostreremo le vere tariffe per il risparmio.",
  alternates: { canonical: "https://www.telefoniaciocca.it/risparmio-bolletta" },
};

export default function RisparmioBolletta() {
  const valueProps = [
    { title: "Analisi Gratuita", desc: "Il nostro Ispettore Bill non fa sconti all'analisi ma la regala.", icon: <Lightbulb size={28} /> },
    { title: "Senza Vincoli", desc: "Nessun cavillo nascosto e nessun vincolo strano di permanenza forzata.", icon: <EyeOff size={28} /> },
    { title: "Scelta Neutrale", desc: "Confrontiamo 15+ fornitori luce e gas per fornirti il miglior prezzo.", icon: <Scale size={28} /> },
    { title: "Consulenza Reale", desc: "Una stretta di mano che vale più delle promesse dai call center.", icon: <HeartHandshake size={28} /> },
  ];

  const relatedLandings = [
    { title: "Fotovoltaico", href: "/fotovoltaico-capena", desc: "Valutiamo fattibilità e contratto per azzerare la spesa con l'energia del sole." },
    { title: "Fibra Ottica", href: "/fibra-capena", desc: "Aggiungi la connettività ultra-veloce al pacchetto risparmio casa." },
  ];

  const problemBlock = {
    title: "Sei sicuro delle tariffe che hai ora?",
    body: "La maggior parte delle persone crede di avere ottime tariffe fino ad un'analisi dettagliata. Con telefonia Ciocca portaci una bolletta, e al resto ci penserà l'Ispettore Bill."
  };

  return (
    <LocalLandingPage
      slug="risparmio-bolletta"
      h1="Risparmia su bollette Luce e Gas a Capena"
      intro="Non lasciare ai call center anonimi la spesa di casa. Scopri la miglior tariffa con l'analisi imparziale di Telefonia Ciocca."
      problemBlock={problemBlock}
      valueProps={valueProps}
      operatorsText="Analizziamo le carte sul tavolo tra i migliori operatori del mercato: Edison, A2A, Fastweb Energia, WindTre Energia, Acea e Optima e molti altri."
      ctaPrimary={{ label: "Carica la tua bolletta", href: "https://telefoni.it/caricalabolletta" }}
      relatedLandings={relatedLandings}
      faq={[
        { question: "La consulenza costa qualcosa?", answer: "Nulla in assoluto." },
        { question: "E' obbligatorio cambiare operatore alle vostre condizioni?", answer: "L'analisi serve a renderti consapevole. Tu scegli in totale tranquillità se il risparmio vale per te il passaggio. Noi saremo qui." }
      ]}
    />
  );
}
