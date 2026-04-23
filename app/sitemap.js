export default function sitemap() {
  const baseUrl = 'https://www.telefoniaciocca.it';

  return [
    // Home
    { url: `${baseUrl}/`, lastModified: new Date() },

    // Category pages
    { url: `${baseUrl}/telefonia`, lastModified: new Date() },
    { url: `${baseUrl}/energia`, lastModified: new Date() },

    // Landing Capena
    { url: `${baseUrl}/fotovoltaico-capena`, lastModified: new Date() },
    { url: `${baseUrl}/risparmio-bolletta`, lastModified: new Date() },
    { url: `${baseUrl}/fibra-capena`, lastModified: new Date() },
    { url: `${baseUrl}/sicurezza-capena`, lastModified: new Date() },
    { url: `${baseUrl}/assistenza-smartphone-capena`, lastModified: new Date() },

    // Passo Corese hub + landing
    { url: `${baseUrl}/passo-corese`, lastModified: new Date() },
    { url: `${baseUrl}/fotovoltaico-passo-corese`, lastModified: new Date() },
    { url: `${baseUrl}/risparmio-bolletta-passo-corese`, lastModified: new Date() },
    { url: `${baseUrl}/fibra-passo-corese`, lastModified: new Date() },
    { url: `${baseUrl}/sicurezza-passo-corese`, lastModified: new Date() },
    { url: `${baseUrl}/assistenza-smartphone-passo-corese`, lastModified: new Date() },

    // Utility
    { url: `${baseUrl}/chi-siamo`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/contatti`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/carica-bolletta`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/offerte`, lastModified: new Date(), priority: 0.9 },
    { url: `${baseUrl}/servizi`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/cookies`, lastModified: new Date(), priority: 0.3 },
  ];
}
