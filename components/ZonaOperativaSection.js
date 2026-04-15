import { MapPin } from "lucide-react";
import Link from "next/link";

export default function ZonaOperativaSection() {
  const areas = [
    { name: "Capena", desc: "Sede principale e hub di tutti i nostri servizi.", href: "/risparmio-bolletta" },
    { name: "Fiano Romano", desc: "Copertura prioritaria fibra e fotovoltaico.", href: "/fotovoltaico-capena" },
    { name: "Castelnuovo di Porto", desc: "Consulenza vis-a-vis per energia.", href: "/risparmio-bolletta" },
    { name: "Riano", desc: "Servizi di connessione ultra veloce per la casa.", href: "/fibra-capena" },
    { name: "Passo Corese", desc: "Nuovo riferimento territoriale in Sabina.", href: "/assistenza-smartphone-capena", badge: "Prossima Apertura" },
  ];

  return (
    <section className="py-20 relative bg-slate-50 dark:bg-slate-950/50 rounded-3xl mx-4 mb-20 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="container relative z-10 px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">La nostra <span className="gradient-text">zona operativa</span></h2>
          <p className="text-lg opacity-70 leading-relaxed">
            Siamo presenti sul territorio per offrirti un servizio di prossimità reale. Due sedi fisiche e copertura dedicata per tutta l'area a nord di Roma.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {areas.map((area, i) => (
            <Link key={i} href={area.href} className="bg-white dark:bg-slate-900/80 p-6 rounded-3xl shadow-xl border border-border hover:border-primary/50 transition-all hover:shadow-2xl group flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-inner">
                <MapPin size={28} />
              </div>
              <h3 className="font-bold text-xl mb-3">{area.name}</h3>
              {area.badge && (
                <span className="text-[10px] uppercase tracking-wider font-bold bg-primary text-white px-3 py-1 rounded-full mb-3 shadow-md">
                  {area.badge}
                </span>
              )}
              <p className="text-sm opacity-70 mt-auto leading-relaxed">{area.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
