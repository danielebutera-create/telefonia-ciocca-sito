import HeroSection from "@/components/HeroSection";
import DualColumnSection from "@/components/DualColumnSection";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import ReviewsSection from "@/components/ReviewsSection";
import LocationSection from "@/components/LocationSection";
import CTAFinaleSection from "@/components/CTAFinaleSection";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Telefonia Ciocca — Energia, Fotovoltaico e Fibra a Capena e Passo Corese",
  description:
    "Il tuo punto di riferimento per telefonia, energia e fotovoltaico. Due sedi: Capena e Passo Corese. Analisi bolletta gratuita, consulenza imparziale.",
  openGraph: {
    title: "Telefonia Ciocca — Energia, Fotovoltaico e Fibra a Capena e Passo Corese",
    description:
      "Il tuo punto di riferimento per telefonia, energia e fotovoltaico. Due sedi: Capena e Passo Corese. Analisi bolletta gratuita, consulenza imparziale.",
    type: "website",
    locale: "it_IT",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Sezione 1 — Hero */}
      <HeroSection />

      {/* Sezione 2 — Doppia colonna Telefonia / Energia */}
      <DualColumnSection />

      {/* Sezione 3 — Problema / bolletta */}
      <ProblemSection />

      {/* Sezione 4 — Grid 4 servizi */}
      <ServicesSection />

      {/* Sezione 5 — Trust / Perché sceglierci */}
      <TrustSection />

      {/* Sezione 6 — Recensioni */}
      <ReviewsSection />

      {/* Sezione 7 — Due sedi */}
      <LocationSection />

      {/* Sezione 8 — CTA finale */}
      <CTAFinaleSection />

      {/* Form contatto (bonus — dopo il fold) */}
      <ContactSection />
    </div>
  );
}
