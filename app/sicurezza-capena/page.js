import LocalLandingPage from "@/components/LocalLandingPage";
import { ShieldAlert, Video, KeyRound, BellRing } from "lucide-react";

export const metadata = {
  title: "Allarmi e sicurezza a Capena — Partner Verisure | Telefonia Ciocca",
  description: "Sistemi di allarme e videosorveglianza con partnership ufficiali Verisure. Soluzioni personalizzate ed attive 24/7.",
};

export default function SicurezzaCapena() {
  const valueProps = [
    { title: "Sistemi Verisure", desc: "La migliore tecnologia smart sul campo con i prodotti di vertice Verisure.", icon: <ShieldAlert size={28} /> },
    { title: "Monitoraggio 24/7", desc: "La garanzia intrinseca di un occhio vigile ed una risposta istantanea dalle forze dell'ordine.", icon: <Video size={28} /> },
    { title: "Protezione Completa", desc: "Difesa di attività commerciali ed abitazioni isolate ad un costo contenuto.", icon: <KeyRound size={28} /> },
    { title: "Preventivi Rapidi", desc: "Renditi subito conto della semplicità e dei costi bassi di attivazione, senza alcun impegno.", icon: <BellRing size={28} /> },
  ];

  const relatedLandings = [
    { title: "Fibra Ottica", href: "/fibra-capena", desc: "Una linea stabile essenziale per i tuoi tele-collegamenti di sorveglianza." },
    { title: "Fotovoltaico", href: "/fotovoltaico-capena", desc: "Per avere la continua energia verde senza compromessi di potenza." },
  ];

  const problemBlock = {
    title: "Ti preoccupa la vulnerabilità della tua azienda o abitazione?",
    body: "Trovare un fornitore sicuro per delegare un progetto antifurto non è banale ed i kit fa-da-te online non sono efficaci. Telefonia Ciocca garantisce affidabilità con il leader globale."
  };

  return (
    <LocalLandingPage
      slug="sicurezza-capena"
      h1="Allarmi e sicurezza a Capena — Partner Verisure"
      intro="L'incolumità è preziosa. Richiedi la valutazione per i sistemi numero uno sul mercato tramite la nostra consulenza diretta a Capena."
      problemBlock={problemBlock}
      valueProps={valueProps}
      heroImage="/images/sicurezza-hero.png"
      operatorsText="In qualità di partner ufficiali Verisure offriamo l'esperienza di progettazione anti-intrusione assieme alla più avanzata logistica di guardia privata e manutenzione a vita del dispositivo."
      ctaPrimary={{ label: "Consulenza Gratuita", href: "https://wa.me/39069073674" }}
      relatedLandings={relatedLandings}
      faq={[
        { question: "La casa andrà bucherellata per i fili?", answer: "Generalmente l'assoluta maggioranza del network opera su canali wireless anti-jamming che non richiedono ristrutturazioni o passacavi importanti." },
        { question: "Se mi scatta per errore chi mi multa?", answer: "La centrale verificatrice Verisure annullerà eventuali falsi allarmi prevenendo chiamate a vuoto e sanzioni per mobilitazione polizia ingiustificata." }
      ]}
    />
  );
}
