import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.telefoniaciocca.it"),
  title: {
    default: "Telefonia Ciocca | Energia, Fibra e Assistenza a Capena",
    template: "%s | Telefonia Ciocca",
  },
  description: "Da oltre 25 anni il tuo punto di riferimento a Capena per telefonia, energia, fibra ottica e assistenza tecnica professionale.",
  keywords: ["telefonia capena", "assistenza cellulari capena", "luce e gas capena", "fibra ottica capena", "telefonia ciocca"],
  alternates: {
    canonical: "https://www.telefoniaciocca.it",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }) {
  // Orari identici per entrambe le sedi
  const openingHours = [
    "Mo-Fr 09:00-13:00",
    "Mo-Fr 15:30-19:30",
    "Sa 09:00-13:00"
  ];

  const areaServed = [
    "Capena", "Fiano Romano", "Castelnuovo di Porto", "Riano",
    "Passo Corese", "Fara in Sabina", "Nerola", "Montorio Romano",
    "Montelibretti", "Morlupo"
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://www.telefoniaciocca.it/#capena",
        "name": "Telefonia Ciocca",
        "description": "Telefonia, energia, fotovoltaico, fibra ottica e assistenza smartphone a Capena (RM). Oltre 25 anni di esperienza.",
        "telephone": "+39069073674",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via Tiberina, 28C",
          "addressLocality": "Capena",
          "postalCode": "00060",
          "addressRegion": "RM",
          "addressCountry": "IT"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 42.1194787,
          "longitude": 12.5895979
        },
        "url": "https://www.telefoniaciocca.it",
        "openingHours": openingHours,
        "areaServed": areaServed,
        "sameAs": [
          "https://www.facebook.com/telefoniacioccacapena",
          "https://www.instagram.com/telefoniacioccacapena/"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.telefoniaciocca.it/#passocorese",
        "name": "Telefonia Ciocca — Passo Corese",
        "description": "Punto vendita di Telefonia Ciocca a Passo Corese, Fara in Sabina. Telefonia, energia, fotovoltaico e fibra ottica.",
        "telephone": "+390765213394",
        "branchOf": { "@id": "https://www.telefoniaciocca.it/#capena" },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Via Garibaldi, 72",
          "addressLocality": "Fara in Sabina",
          "postalCode": "02032",
          "addressRegion": "RI",
          "addressCountry": "IT"
        },
        "url": "https://www.telefoniaciocca.it/passo-corese",
        "openingHours": openingHours,
        "areaServed": areaServed
      }
    ]
  };

  return (
    <html lang="it" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B4ED011RDR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B4ED011RDR');
          `}
        </Script>
      </body>
    </html>
  );
}
