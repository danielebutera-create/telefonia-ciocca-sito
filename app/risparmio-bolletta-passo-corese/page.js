import LocalLandingPage from "@/components/LocalLandingPage";
import { Scale, HeartHandshake, EyeOff, Lightbulb } from "lucide-react";

export const metadata = {
  title: "Risparmia su bollette Luce e Gas a Passo Corese | Telefonia Ciocca",
  description: "Analisi gratuita bollette luce e gas a Passo Corese e Fara in Sabina. Confronto tra 15+ fornitori, nessun call center. Sede in Via Garibaldi 72.",
  alternates: { canonical: "https://telefoniaciocca.it/risparmio-bolletta-passo-corese" },
};

export default function RisparmioBollettaPassoCorese() {
  const valueProps = [
    { title: "Analisi Gratuita", desc: "Portiamo la bolletta al banco e la analizziamo insieme: scopri quanto stai spendendo davvero.", icon: <Lightbulb size={28} /> },
    { title: "Senza Vincoli", desc: "Nessun cavillo nascosto, nessun vincolo di permanenza. Scegli in totale libertà se cambiare.", icon: <EyeOff size={28} /> },
    { title: "Confronto Imparziale", desc: "Compariamo 15+ fornitori luce e gas per trovare la tariffa più conveniente per il tuo profilo.", icon: <Scale size={28} /> },
    { title: "Persone, Non Call Center", desc: "Parli sempre con il nostro team in negozio. Una stretta di mano vale più di qualsiasi contratto telefonico.", icon: <HeartHandshake size={28} /> },
  ];

  const relatedLandings = [
    { title: "Fotovoltaico a Passo Corese", href: "/fotovoltaico-passo-corese", desc: "Vai oltre il risparmio: produci la tua energia con un impianto solare." },
    { title: "Fibra a Passo Corese", href: "/fibra-passo-corese", desc: "Aggiungi la fibra ultra-veloce al pacchetto risparmio casa." },
    { title: "Risparmio Bollette a Capena", href: "/risparmio-bolletta", desc: "Stesso servizio anche nella sede storica di Capena." },
  ];

  const problemBlock = {
    title: "Sei sicuro di pagare il giusto per luce e gas?",
    body: "La maggior parte delle famiglie a Passo Corese e Fara in Sabina crede di avere già una buona tariffa — finché non la confrontiamo. Portaci una bolletta, e in 10 minuti ti diciamo quanto puoi risparmiare."
  };

  return (
    <LocalLandingPage
      h1="Risparmia su bollette Luce e Gas a Passo Corese"
      intro="Analisi gratuita delle bollette nella sede di Passo Corese. Confrontiamo 15+ fornitori e ti proponiamo la tariffa più conveniente — senza impegno e senza sorprese."
      problemBlock={problemBlock}
      valueProps={valueProps}
      operatorsText="Confrontiamo le offerte di Edison, A2A, Fastweb Energia, WindTre Energia, Acea, Optima ed altri ancora. Il nostro obiettivo è trovare la tariffa migliore per te, non per il fornitore."
      serviceArea={["Passo Corese", "Fara in Sabina", "Poggio Mirteto", "Montopoli di Sabina", "Cantalupo in Sabina", "Torri in Sabina"]}
      ctaPrimary={{ label: "Porta la tua bolletta", href: "https://wa.me/390765213394?text=Vorrei%20un%27analisi%20gratuita%20della%20mia%20bolletta%20a%20Passo%20Corese." }}
      ctaSecondary={{ label: "Scrivici su WhatsApp", href: "https://wa.me/390765213394" }}
      phoneDisplay="0765 213394"
      phoneHref="tel:+390765213394"
      relatedLandings={relatedLandings}
      faq={[
        { question: "La consulenza è davvero gratuita?", answer: "Sì, completamente gratuita e senza impegno. Puoi venire in negozio o fotografarci la bolletta via WhatsApp." },
        { question: "Devo necessariamente cambiare operatore?", answer: "Assolutamente no. Ti mostriamo i dati, tu decidi liberamente. Se la tua tariffa attuale è già ottima, te lo diciamo onestamente." },
        { question: "Gestite anche le pratiche di cambio fornitore?", answer: "Sì, ci occupiamo noi di tutta la burocrazia del cambio fornitore: disdette, migrazione e attivazione. Zero stress per te." }
      ]}
    />
  );
}
