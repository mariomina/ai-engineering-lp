
import React from 'react';

const RiskReversal: React.FC = () => {
  return (
    <div className="py-20 px-6 relative bg-surface/30 overflow-hidden">
      {/* Máscara de degradado superior para suavizar transición desde fondo negro */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
      
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] h-[600px] bg-amber-500/5 blur-[160px] rounded-full pointer-events-none opacity-50"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-[10px] font-black uppercase tracking-widest">
            <span className="material-symbols-outlined text-sm">verified_user</span>
            09. Seguridad Total
          </div>
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-white">
            Garantía <br className="md:hidden" />
            <span className="text-amber-500 italic">Anti-Riesgo.</span>
          </h2>
        </div>

        <div className="glass-card rounded-[40px] p-8 md:p-16 border-amber-500/10 bg-amber-500/[0.02] mb-12 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-10 opacity-5 pointer-events-none">
              <span className="material-symbols-outlined text-[160px] text-amber-500">handshake</span>
           </div>
           
           <div className="max-w-3xl relative z-10">
              <h3 className="text-2xl md:text-4xl font-black text-white mb-8 leading-tight">
                Entiendo el escepticismo.
              </h3>
              <div className="space-y-6 text-slate-400 text-lg md:text-xl font-medium leading-relaxed">
                <p>Has visto promesas de <span className="text-white font-bold">"desarrollo rápido"</span> que terminan siendo desastre.</p>
                <p>Has contratado devs que <span className="text-white font-bold">"sabían todo"</span> y entregaron código inmantenible.</p>
                <p>Has invertido en proyectos que se atrasaron <span className="text-amber-500 font-bold underline decoration-amber-500/30 underline-offset-8">3x del tiempo estimado</span>.</p>
                <div className="pt-4">
                  <p className="text-white font-black text-2xl uppercase tracking-tighter">Por eso ofrezco esto:</p>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default RiskReversal;
