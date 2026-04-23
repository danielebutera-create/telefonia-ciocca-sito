import LocalLandingPage from "@/components/LocalLandingPage";
import { Battery, PiggyBank, PenTool, Sun } from "lucide-react";

export const metadata = {
  title: "Fotovoltaico a Capena e Passo Corese | Telefonia Ciocca",
  description: "Consulenza per impianti fotovoltaici a Capena, Passo Corese e dintorni: valutiamo la fattibilità e ti affianchiamo nella scelta del contratto, con rate da ~80€/mese e incentivi fino al 50%.",
  openGraph: {
    title: "Fotovoltaico a Capena e Passo Corese",
    description: "Consulenza per impianti fotovoltaici a Capena, Passo Corese e dintorni: valutiamo la fattibilità e ti affianchiamo nella scelta del contratto, con rate da ~80€/mese e incentivi fino al 50%.",
    type: "website",
    locale: "it_IT",
  },
  alternates: { canonical: "https://telefoniaciocca.it/fotovoltaico-capena" },
};

export default function Fotovoltaico() {
  const valueProps = [
    { title: "Risparmio Reale", desc: "Abbatte i costi in bolletta fin dal primo giorno, ripagandosi da solo.", icon: <PiggyBank size={28} /> },
    { title: "Batterie d'Accumulo", desc: "Accumula durante il giorno e usa l'energia solare di notte.", icon: <Battery size={28} /> },
    { title: "Incentivi Fiscali", desc: "Sfrutta al massimo e subito l'agevolazione statale e le detrazioni.", icon: <Sun size={28} /> },
    { title: "Ti accompagniamo passo passo", desc: "Dalla valutazione di fattibilità alla scelta del gestore, fino alla firma del contratto giusto per te.", icon: <PenTool size={28} /> },
  ];

  const relatedLandings = [
    { title: "Risparmio Bolletta", href: "/risparmio-bolletta", desc: "Trova la tariffa luce ideale per il tuo nuovo impianto." },
    { title: "Fibra Ottica", href: "/fibra-capena", desc: "Naviga veloce e controlla il tuo inverter tramite app mobile." },
    { title: "Sicurezza Verisure", href: "/sicurezza-capena", desc: "Proteggi il tuo impianto e l'energia della tua casa." },
  ];

  const problemBlock = {
    title: "Stai pagando troppo per l'energia elettrica?",
    body: "Un impianto fotovoltaico con batteria d'accumulo, offerto con l'affidabilità di Telefonia Ciocca, ti svincola dai repentini rincari."
  };

  return (
    <LocalLandingPage
      slug="fotovoltaico-capena"
      h1="Fotovoltaico a Capena e Passo Corese"
      intro="Passa all'energia pulita. Valutiamo insieme la fattibilità del tuo impianto con batteria d'accumulo e ti affianchiamo nella scelta del contratto con i gestori certificati della tua zona."
      problemBlock={problemBlock}
      valueProps={valueProps}
      pricingNote="Impianti a partire da ~80€/mese con finanziamento e incentivi fiscali fino al 50%"
      operatorsText="Lavoriamo in partnership strutturata con Edison Energia ed altre eccellenze che si occupano dell'installazione: noi valutiamo l'opportunità, selezioniamo il contratto migliore e tuteliamo il tuo interesse fino alla firma."
      heroImage="/images/fotovoltaico-hero.jpeg"
      photoCredit={{ name: "Daniele Butera", url: "https://www.danielebutera.com" }}
      ctaPrimary={{ label: "Richiedi preventivo gratuito", href: "https://wa.me/39069073674" }}
      relatedLandings={relatedLandings}
      faq={[
        { question: "Telefonia Ciocca installa l'impianto?", answer: "No: noi valutiamo l'opportunità dell'installazione, ti affianchiamo nella scelta del contratto più adatto e curiamo la consulenza fino alla firma. L'installazione vera e propria viene eseguita dai gestori certificati nostri partner (es. Edison Energia)." },
        { question: "È incluso il disbrigo pratiche GSE o comunali?", answer: "Sì. I partner installatori si occupano dell'iter autorizzativo burocratico e delle detrazioni; noi ti teniamo aggiornato e verifichiamo che il contratto rispetti quanto pattuito." },
        { question: "Quanto tempo passa dal sopralluogo all'attivazione?", answer: "Dipende dalle autorizzazioni e dalla disponibilità dei materiali del partner installatore: mediamente, dal sopralluogo all'accensione dell'impianto, passano poche settimane." }
      ]}
    />
  );
}
