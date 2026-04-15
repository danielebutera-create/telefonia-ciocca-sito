"use client";

import { FileUp, ShieldCheck, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function CaricaBolletta() {
  const steps = [
    {
      title: "Prepara la bolletta",
      desc: "Prendi l'ultima bolletta di Luce o Gas (in PDF o foto leggibile).",
      icon: <FileUp size={24} />,
    },
    {
      title: "Caricamento sicuro",
      desc: "I tuoi dati sono protetti e trattati secondo le normative GDPR.",
      icon: <ShieldCheck size={24} />,
    },
    {
      title: "Analisi di Ispettore Bill",
      desc: "Entro 24 ore riceverai un'analisi dettagliata del risparmio possibile.",
      icon: <Zap size={24} />,
    },
  ];

  return (
    <div className="pt-32 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Analisi Gratuita con <span className="gradient-text">Ispettore Bill</span>
            </h1>
            <p className="text-xl opacity-70 leading-relaxed max-w-2xl mx-auto">
              Smetti di pagare canoni obsoleti. Carica la tua bolletta ora e scopri quanto puoi risparmiare con le tariffe più vantaggiose del mercato.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left: Info & Confidence */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl border border-border">
                <h2 className="text-2xl font-bold mb-6">Perché analizzare la tua bolletta?</h2>
                <ul className="space-y-4">
                  {[
                    "Confronto con 15+ fornitori partner (Edison, Acea, ecc.)",
                    "Analisi dei costi fissi e degli oneri di sistema",
                    "Nessun costo di attivazione o vincolo",
                    "Consulenza diretta con il team di Telefonia Ciocca",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                      <span className="font-medium opacity-80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-4 text-sm">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      {step.icon}
                    </div>
                    <div>
                      <div className="font-bold">{step.title}</div>
                      <div className="opacity-60">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: CTA Box */}
            <div className="bg-slate-900 text-white p-10 rounded-3xl shadow-2xl relative overflow-hidden border border-white/10 group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl -mr-16 -mt-16" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                  <FileUp size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Pronto a risparmiare?</h3>
                <p className="opacity-70 mb-8 leading-relaxed">
                  Sarai reindirizzato al nostro portale dedicato su <span className="font-bold text-white">Telefoni.it</span> per completare il caricamento in totale sicurezza.
                </p>
                
                <a 
                  href="https://telefoni.it/caricalabolletta" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-lg py-5 group-hover:gap-6"
                >
                  Vai al Caricamento
                  <ArrowRight size={20} />
                </a>

                <p className="text-center text-xs opacity-50 mt-6">
                  Caricamento gestito dai sistemi sicuri di Telefoni.it
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
