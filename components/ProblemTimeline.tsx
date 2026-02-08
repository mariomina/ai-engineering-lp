
import React from 'react';

const ProblemTimeline: React.FC = () => {
  const steps = [
    {
      week: "Semana 1-4",
      title: "❌ Fase de análisis",
      icon: "hourglass_top",
      desc: "\"Estamos en fase de análisis y diseño\". Reuniones eternas y parálisis por análisis."
    },
    {
      week: "Semana 5-8",
      title: "❌ Inicio lento",
      icon: "progress_activity",
      iconAnim: "animate-[spin_3s_linear_infinite]",
      desc: "\"Ya empezamos el desarrollo, va bien\". Escribiendo boilerplate manualmente línea por línea."
    },
    {
      week: "Semana 9-12",
      title: "❌ Issues técnicos",
      icon: "warning",
      highlight: true,
      desc: "\"Surgieron algunos issues técnicos\". Bugs inesperados y falta de documentación."
    },
    {
      week: "Semana 13+",
      title: "❌ Casi terminamos...",
      icon: "skull",
      desc: "\"Solo faltan ajustes\". El tiempo de mercado que tenías se evapora por completo."
    }
  ];

  return (
    <div className="py-20 px-6 relative flex flex-col items-center">
      <div className="max-w-[800px] w-full text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-semibold tracking-wider uppercase">
          02. El Problema
        </div>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">¿Te suena familiar?</h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Sabes exactamente lo que pasa cuando contratas desarrollo tradicional:
        </p>
      </div>

      <div className="max-w-[640px] w-full relative mb-20">
        <div className="absolute left-[27px] top-4 bottom-12 w-[2px] bg-gradient-to-b from-slate-700 via-slate-600 to-red-500/80 z-0"></div>
        
        {steps.map((step, idx) => (
          <div key={idx} className="relative grid grid-cols-[56px_1fr] gap-6 group mb-12 last:mb-0">
            <div className="flex flex-col items-center z-10">
              <div className={`w-14 h-14 rounded-full bg-surface border ${idx === 3 || step.highlight ? 'border-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]' : 'border-slate-700'} flex items-center justify-center transition-colors shadow-lg`}>
                <span className={`material-symbols-outlined text-[28px] ${idx === 3 || step.highlight ? 'text-red-500' : 'text-slate-300'} ${step.iconAnim || ''}`}>
                  {step.icon}
                </span>
              </div>
            </div>
            <div className="flex flex-col pt-1">
              <span className={`text-sm font-semibold uppercase tracking-wide mb-1 ${idx === 3 || step.highlight ? 'text-red-500' : 'text-slate-500'}`}>
                {step.week}
              </span>
              <h3 className={`text-xl font-bold mb-2 ${idx === 3 || step.highlight ? 'text-red-500' : 'text-white'}`}>
                {step.title}
              </h3>
              <div className={step.highlight ? 'p-4 rounded-xl bg-red-500/5 border border-red-500/10' : ''}>
                <p className={`text-slate-400 leading-relaxed`}>
                  {step.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Los devs tradicionales trabajan duro. <br className="hidden md:block"/>
            <span className="text-red-500 underline decoration-2 underline-offset-8">Pero trabajan LENTO.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="glass-card rounded-2xl p-8 border-l-4 border-l-red-500/50 bg-red-500/[0.02]">
            <h4 className="text-sm font-bold text-red-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-base">link_off</span>
              Porque están atrapados en:
            </h4>
            <ul className="space-y-4">
              {[
                "Escribir código línea por línea manualmente.",
                "Documentar todo después de codear (si es que lo hacen).",
                "Testing manual repetitivo que ignora casos de borde.",
                "Meetings interminables de \"sincronización\" sin avances."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <span className="text-red-500 font-bold mt-[-2px]">•</span>
                  <span className="text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-2xl p-8 border-l-4 border-l-slate-700 bg-white/[0.01]">
            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-base">error_outline</span>
              ¿El resultado?
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-slate-500 mt-1">trending_down</span>
                <p className="text-slate-400 text-base">
                  Proyectos que debían tomar 1 mes se extienden a <strong className="text-white">3 meses</strong>.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-slate-500 mt-1">priority_high</span>
                <p className="text-slate-400 text-base">
                  Features "simples" que consumen <strong className="text-white">semanas enteras</strong>.
                </p>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-slate-500 mt-1">payments</span>
                <p className="text-slate-400 text-base">
                  Presupuestos que se <strong className="text-white">duplican o triplican</strong> sin previo aviso.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
           <p className="text-2xl md:text-4xl font-black tracking-tighter text-white">
            No tiene que ser así.
           </p>
           <div className="mt-4 flex justify-center">
             <span className="material-symbols-outlined text-primary text-4xl animate-bounce">keyboard_double_arrow_down</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemTimeline;
