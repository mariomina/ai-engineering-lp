
import React from 'react';

const Pricing: React.FC = () => {
  const comparisonData = [
    { label: "Equipo in-house (3 devs)", cost: "$18k-25k", time: "3-4 meses", color: "text-slate-500" },
    { label: "Agencia local desarrollo", cost: "$12k-20k", time: "2-3 meses", color: "text-slate-500" },
    { label: "Freelancer tradicional", cost: "$8k-12k", time: "2-3 meses", color: "text-slate-500" },
    { label: "YO (Metodología AIOS)", cost: "$6,000*", time: "2-3 semanas", color: "text-primary font-black neon-text-glow", highlight: true },
  ];

  return (
    <div className="py-20 px-6 relative flex flex-col items-center bg-background overflow-hidden">
      {/* Máscara de degradado superior para suavizar transición desde bg-surface/30 */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-surface/30 to-transparent pointer-events-none"></div>
      
      {/* Fondo Decorativo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none z-0"></div>
      
      <div className="relative z-10 w-full max-w-7xl">
        <div className="flex flex-col items-center text-center space-y-6 mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">08. Inversión</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-none">
            Hablemos claro de <span className="text-primary neon-text-glow italic">números.</span>
          </h2>
          <p className="text-slate-400 text-xl md:text-2xl font-medium max-w-2xl mx-auto">
            Transparencia total. Sin costos ocultos. Enfocado en resultados, no en horas facturables.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-12">
            <div className="glass-card rounded-[40px] p-8 md:p-12 border-white/5">
              <h3 className="text-2xl font-black text-white mb-10 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">analytics</span>
                Comparativa Honesta
              </h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="pb-6 text-xs font-black text-slate-500 uppercase tracking-widest">Opción</th>
                      <th className="pb-6 text-xs font-black text-slate-500 uppercase tracking-widest text-right">Costo Est.</th>
                      <th className="pb-6 text-xs font-black text-slate-500 uppercase tracking-widest text-right">Tiempo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {comparisonData.map((row, i) => (
                      <tr key={i} className={`group ${row.highlight ? 'bg-primary/5' : ''}`}>
                        <td className={`py-6 text-lg font-bold ${row.color}`}>{row.label}</td>
                        <td className={`py-6 text-lg text-right font-bold ${row.color}`}>{row.cost}</td>
                        <td className={`py-6 text-lg text-right font-bold ${row.color}`}>{row.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="relative rounded-[48px] bg-surface border border-primary/30 p-2 shadow-2xl shadow-primary/10">
              <div className="rounded-[40px] bg-[#0c1219] p-10 md:p-14 flex flex-col gap-10">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Solo 2 slots disponibles
                  </div>
                  <h3 className="text-3xl font-black text-white">Sprint de Prueba</h3>
                </div>

                <div className="flex items-baseline gap-2 border-b border-slate-800 pb-10">
                  <span className="text-6xl md:text-8xl font-black tracking-tighter text-white">$6,000</span>
                  <span className="text-2xl text-slate-500 font-bold uppercase">USD</span>
                </div>

                <div className="pt-6">
                  <a href="https://wa.link/4dfafr" target="_blank" rel="noopener noreferrer" className="group w-full bg-primary text-white font-black py-6 rounded-3xl text-xl shadow-2xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 uppercase tracking-widest">
                    AGENDAR ENTREVISTA
                    <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
