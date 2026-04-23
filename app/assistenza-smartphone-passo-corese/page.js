import LocalLandingPage from "@/components/LocalLandingPage";
import { Wrench, MailSearch, SmartphoneNfc, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Assistenza Smartphone a Passo Corese e Fara in Sabina | Telefonia Ciocca",
  description: "Assistenza tecnica smartphone, tablet e PC a Passo Corese (Fara in Sabina). Configurazioni, recupero dati, SPID e burocrazia digitale. Sede in Via Garibaldi 72.",
  alternates: { canonical: "https://www.telefoniaciocca.it/assistenza-smartphone-passo-corese" },
};

export default function AssistenzaPassoCorese() {
  const valueProps = [
    { title: "Gestione App e Dati", desc: "Trasferimento completo dei dati sul nuovo dispositivo, installazione app e configurazione account in totale sicurezza.", icon: <SmartphoneNfc size={28} /> },
    { title: "Burocrazia Digitale", desc: "SPID, PEC, disdette, firma digitale: ti accompagniamo nel labirinto burocratico senza stress.", icon: <MailSearch size={28} /> },
    { title: "Recupero Accessi", desc: "Reset di password bloccate Apple ID, account Google e altri accessi personali. Nessun dato perso.", icon: <Wrench size={28} /> },
    { title: "Pulizia Virus e Malware", desc: "Eliminazione definitiva di virus, app sospette e rallentamenti per proteggere foto, contatti e documenti.", icon: <ShieldCheck size={28} /> },
  ];

  const relatedLandings = [
    { title: "Fibra a Passo Corese", href: "/fibra-passo-corese", desc: "La connessione giusta per far girare al meglio tutte le tue app." },
    { title: "Risparmio Bollette", href: "/risparmio-bolletta-passo-corese", desc: "Porta in negozio anche la bolletta: la analizziamo gratis." },
    { title: "Assistenza a Capena", href: "/assistenza-smartphone-capena", desc: "Scopri il servizio anche nella sede storica di Capena." },
  ];

  const problemBlock = {
    title: "Smartphone bloccato o digitale caotico?",
    body: "SPID da attivare, cellulare da configurare, password dimenticata — problemi quotidiani che diventano enormi senza il supporto giusto. I nostri tecnici a Passo Corese risolvono tutto in tempi rapidi, senza listini nascosti e senza call center."
  };

  return (
    <LocalLandingPage
      h1="Assistenza Smartphone a Passo Corese e Fara in Sabina"
      intro="Il tuo punto di riferimento tecnologico a Passo Corese. Risolviamo configurazioni, recupero dati, SPID e qualsiasi problema digitale — con persone reali, in negozio."
      problemBlock={problemBlock}
      valueProps={valueProps}
      serviceArea={["Passo Corese", "Fara in Sabina", "Poggio Mirteto", "Montopoli di Sabina", "Cantalupo in Sabina", "Torri in Sabina"]}
      ctaPrimary={{ label: "Chiama prima di passare", href: "tel:+390765213394" }}
      ctaSecondary={{ label: "Scrivici su WhatsApp", href: "https://wa.me/390765213394" }}
      phoneDisplay="0765 213394"
      phoneHref="tel:+390765213394"
      relatedLandings={relatedLandings}
      faq={[
        { question: "Quanto costano le riparazioni?", answer: "Non applichiamo listini precompilati. Per interventi veloci i costi sono minimi; per operazioni più complesse facciamo sempre un preventivo chiaro prima di procedere." },
        { question: "Potete aiutarmi con lo SPID?", answer: "Sì, ti seguiamo passo passo nell'attivazione SPID, CIE, firma digitale e PEC — servizi sempre più indispensabili per la burocrazia italiana." },
        { question: "Dove si trova la sede di Passo Corese?", answer: "Via Garibaldi 72, 02032 Fara in Sabina (RI). Tel: 0765 213394. Orari: Lun-Ven 9:00-13:00 / 15:30-19:30, Sabato 9:00-13:00." }
      ]}
    />
  );
}
