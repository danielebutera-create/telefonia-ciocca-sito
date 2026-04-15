import LocalLandingPage from "@/components/LocalLandingPage";
import { Battery, PiggyBank, PenTool, Sun } from "lucide-react";

export const metadata = {
  title: "Fotovoltaico a Passo Corese e Fara in Sabina | Telefonia Ciocca",
  description: "Preventivi gratuiti per impianti fotovoltaici a Passo Corese, Fara in Sabina e provincia di Rieti. Batterie d'accumulo, incentivi fiscali e consulenza imparziale. Sede in Via Garibaldi 72.",
};

export default function FotovoltaicoPassoCorese() {
  const valueProps = [
    { title: "Risparmio Reale", desc: "Abbatti i costi in bolletta fin dal primo giorno. L'impianto si ripaga da solo in pochi anni.", icon: <PiggyBank size={28} /> },
    { title: "Batterie d'Accumulo", desc: "Accumula l'energia solare durante il giorno e usala di notte, riducendo la dipendenza dalla rete.", icon: <Battery size={28} /> },
    { title: "Incentivi Fiscali", desc: "Sfrutta al massimo le detrazioni statali disponibili e gli incentivi specifici per la provincia di Rieti.", icon: <Sun size={28} /> },
    { title: "Ti seguiamo passo passo", desc: "Dalla valutazione di fattibilità alla firma del contratto. Nessuna sorpresa, tutto trasparente.", icon: <PenTool size={28} /> },
  ];

  const relatedLandings = [
    { title: "Risparmio Bollette", href: "/risparmio-bolletta-passo-corese", desc: "Trova la tariffa luce ideale da abbinare al tuo nuovo impianto." },
    { title: "Fibra a Passo Corese", href: "/fibra-passo-corese", desc: "Controlla il tuo inverter da remoto con una connessione stabile." },
    { title: "Fotovoltaico a Capena", href: "/fotovoltaico-capena", desc: "Scopri il servizio anche nella sede storica di Capena." },
  ];

  const problemBlock = {
    title: "Stai pagando troppo per l'energia elettrica?",
    body: "La zona di Fara in Sabina e Passo Corese gode di un'ottima esposizione solare — ideale per il fotovoltaico. Un impianto con batteria d'accumulo può ridurre la bolletta elettrica fino al 70%, anche in aree rurali e collinari."
  };

  return (
    <LocalLandingPage
      h1="Fotovoltaico a Passo Corese e Fara in Sabina"
      intro="Passa all'energia solare. Valutiamo la fattibilità del tuo impianto con batteria d'accumulo e ti seguiamo nella scelta del contratto con gli installatori certificati della zona."
      problemBlock={problemBlock}
      valueProps={valueProps}
      pricingNote="Impianti a partire da ~80€/mese con finanziamento e incentivi fiscali fino al 50%"
      operatorsText="Lavoriamo con Edison Energia e partner installatori certificati che operano nella provincia di Rieti. Valutiamo l'opportunità, selezioniamo il contratto migliore e tuteliamo il tuo interesse fino alla firma."
      serviceArea={["Passo Corese", "Fara in Sabina", "Poggio Mirteto", "Montopoli di Sabina", "Cantalupo in Sabina", "Rieti"]}
      ctaPrimary={{ label: "Preventivo gratuito", href: "https://wa.me/39069073674?text=Vorrei%20un%20preventivo%20fotovoltaico%20per%20Passo%20Corese." }}
      relatedLandings={relatedLandings}
      faq={[
        { question: "Telefonia Ciocca installa l'impianto?", answer: "No: noi valutiamo l'opportunità, ti affianchiamo nella scelta del contratto e curiamo la consulenza fino alla firma. L'installazione è eseguita dai partner certificati (es. Edison Energia) che operano anche nella provincia di Rieti." },
        { question: "Funziona bene anche in zone collinari come Fara in Sabina?", answer: "Sì, anzi — le zone collinari della Sabina hanno spesso un'esposizione solare eccellente. Il sopralluogo tecnico valuta esattamente inclinazione, ombreggiature e resa attesa." },
        { question: "Quanto tempo dalla consulenza all'installazione?", answer: "Dal sopralluogo all'accensione dell'impianto passano mediamente poche settimane, incluso l'iter autorizzativo." }
      ]}
    />
  );
}
