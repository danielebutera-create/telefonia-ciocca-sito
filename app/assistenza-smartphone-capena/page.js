import LocalLandingPage from "@/components/LocalLandingPage";
import { Wrench, MailSearch, SmartphoneNfc, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Assistenza Smartphone a Capena e Passo Corese | Telefonia Ciocca",
  description: "Servizi smartphone e assistenza tecnica a Capena. Configurazione espresse, recupero dati e supporto digitale.",
  alternates: { canonical: "https://telefoniaciocca.it/assistenza-smartphone-capena" },
};

export default function AssistenzaSmartphone() {
  const valueProps = [
    { title: "Gestione App e Dati", desc: "Installazione applicazioni predefinite e trasferimento totale della memoria sul nuovo dispositivo in sicurezza.", icon: <SmartphoneNfc size={28} /> },
    { title: "Burocrazia Digitale", desc: "Vuoi inviare una disdetta o farti una PEC? Il team ti seguirà senza costringerti al caos burocratico.", icon: <MailSearch size={28} /> },
    { title: "Recupero Accessi", desc: "Reset di password bloccate Apple iCloud, account Google ed altri log-in personali sensibili.", icon: <Wrench size={28} /> },
    { title: "Pulizia Virus", desc: "Eliminazione definitiva di malware o applicazioni sospette per preservare foto e rubriche personali.", icon: <ShieldCheck size={28} /> },
  ];

  const relatedLandings = [
    { title: "Risparmio Bolletta", href: "/risparmio-bolletta", desc: "Evita gli sprechi di risorse esaminando anche le tue bollette." },
    { title: "Fibra Ottica", href: "/fibra-capena", desc: "Il collante tecnico perfetto per accompagnare le tue app con velocità stabile." },
  ];

  const problemBlock = {
    title: "Ansia da digitale e telefono ostico?",
    body: "Troppo spesso SPID, reset account o semplicemente il trasferimento verso un nuovo cellulare generano forti frustrazioni. I nostri tecnici sono l'ancora di soccorso al banco, per ripristinare o accompagnare le tue necessità quotidiane senza attese al call center e senza listini nascosti."
  };

  return (
    <LocalLandingPage
      slug="assistenza-smartphone-capena"
      h1="Servizi smartphone e assistenza a Capena e Passo Corese"
      intro="Il tuo salvagente tecnologico di fiducia. Risolviamo tutti gli imprevisti portando il digitale alla tua reale portata di mano."
      problemBlock={problemBlock}
      valueProps={valueProps}
      ctaPrimary={{ label: "Chiama prima di passare", href: "tel:069073674" }}
      relatedLandings={relatedLandings}
      faq={[
        { question: "Dove trovo la lista prezzi dettagliata?", answer: "Non applichiamo listini per pre-giudizio: passa a trovarci e per i piccoli interventi risolviamo la questione in pochi istanti con minimi rimborsi spesa, per riparazioni complesse o trasferimento blocchi di dati preventiviamo prima l'azione sul banco." },
        { question: "Siete anche a Passo Corese?", answer: "La nostra agenzia capostipite è fissa a Capena, ma la futura apertura di Passo Corese vi affiancherà con un approccio analogo nei medesimi servizi informatici." }
      ]}
    />
  );
}
