
import React from 'react';

const FitSection: React.FC = () => {
  return (
    <div className="py-20 px-6 relative overflow-hidden bg-background">
      {/* Máscara de degradado superior para suavizar transición desde bg-surface/30 */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-surface/30 to-transparent pointer-events-none"></div>
      
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">06. El Filtro</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">
            ¿Es esto para <span className="text-primary neon-text-glow italic">ti?</span>
          </h2>
          <div className="max-w-3xl space-y-4">
            <p className="text-slate-400 text-xl md:text-2xl font-medium leading-relaxed">
              Seamos honestos desde el inicio. No trabajo con cualquiera.
            </p>
            <p className="text-white text-xl md:text-2xl font-black leading-relaxed">
              Y no cualquier proyecto es fit para mi metodología.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          <div className="glass-card rounded-[48px] border-emerald-500/20 bg-emerald-500/[0.02] flex flex-col overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:border-emerald-500/40">
            <div className="h-2 w-full bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.4)]"></div>
            <div className="p-10 md:p-14 space-y-12">
              <div className="flex items-center gap-6">
                <div className="size-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/20 shadow-lg">
                  <span className="material-symbols-outlined text-4xl font-black">check_circle</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-none">
                  Perfect Fit <br/>
                  <span className="text-emerald-500 text-lg uppercase tracking-widest font-bold">Este servicio es para ti si:</span>
                </h3>
              </div>

              <div className="space-y-10">
                {[
                  {
                    t: "Necesitas velocidad ejecutiva",
                    d: "Tu competencia se mueve rápido. No puedes esperar 6 meses para lanzar. Time-to-market es crítico para tu negocio."
                  },
                  {
                    t: "No quieres sacrificar calidad por velocidad",
                    d: "Has visto 'código rápido y sucio' explotar. Necesitas algo que funcione HOY y escale MAÑANA. Valoras documentación y mantenibilidad."
                  },
                  {
                    t: "Buscas alguien que entienda tu negocio",
                    d: "Cansado de devs que solo ejecutan. Quieres alguien que pense en UX, conversión y métricas. Traduces visión a arquitectura técnica."
                  },
                  {
                    t: "Prefieres colaboración de alto nivel",
                    d: "No quieres outsourcing genérico. Valoras la cercanía, el contexto local y alguien que se integre a tu cultura empresarial."
                  },
                  {
                    t: "Tienes un proyecto claro para empezar",
                    d: "Sabes qué necesitas (aunque no sepas el cómo). Tienes prioridades definidas y estás listo para arrancar ya."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group/item">
                    <span className="material-symbols-outlined text-emerald-500 text-3xl shrink-0 mt-1">task_alt</span>
                    <div className="space-y-2">
                      <h4 className="text-xl font-black text-slate-100 leading-tight group-hover/item:text-emerald-400 transition-colors">{item.t}</h4>
                      <p className="text-slate-400 text-lg leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[48px] border-white/5 bg-white/[0.01] flex flex-col overflow-hidden opacity-60 hover:opacity-100 transition-all duration-500">
            <div className="h-2 w-full bg-slate-800"></div>
            <div className="p-10 md:p-14 space-y-12 grayscale-[0.5] hover:grayscale-0 transition-all">
              <div className="flex items-center gap-6">
                <div className="size-16 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center border border-red-500/20 shadow-lg">
                  <span className="material-symbols-outlined text-4xl font-black">block</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-slate-300 leading-none">
                  Not a Fit <br/>
                  <span className="text-red-500 text-lg uppercase tracking-widest font-bold">No es para ti si:</span>
                </h3>
              </div>

              <div className="space-y-10">
                {[
                  {
                    t: "Buscas el desarrollador más barato",
                    d: "Calidad y velocidad tienen precio. Si tu único criterio es 'el más económico', obtendrás resultados de ese mismo nivel."
                  },
                  {
                    t: "Quieres alguien que 'obedezca sin cuestionar'",
                    d: "Si algo va a explotar, te lo voy a decir. No soy un 'yes-man'; soy un partner estratégico que cuida tu inversión."
                  },
                  {
                    t: "Prefieres el proceso tradicional lento",
                    d: "'Siempre lo hemos hecho así' no es argumento válido aquí. Si valoras el proceso burocrático sobre los resultados, no funcionará."
                  },
                  {
                    t: "No tienes claridad en lo que necesitas",
                    d: "Necesitas una visión base. Puedo refinar ideas, pero no soy consultor de modelo de negocio inicial. Define primero tu 'qué'."
                  },
                  {
                    t: "Buscas un junior a bajo costo",
                    d: "Soy senior y cobro como tal. Si buscas a alguien para que 'aprenda mientras trabaja' en tu MVP, no soy la opción correcta."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 opacity-80 hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-red-500/50 text-3xl shrink-0 mt-1">cancel</span>
                    <div className="space-y-2">
                      <h4 className="text-xl font-black text-slate-400 leading-tight">{item.t}</h4>
                      <p className="text-slate-500 text-lg leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitSection;
