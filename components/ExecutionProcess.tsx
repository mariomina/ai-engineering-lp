
import React from 'react';

const ExecutionProcess: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-surface/30 relative overflow-hidden">
      {/* Máscara de degradado superior para suavizar transición desde fondo negro */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
      
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em]">07. El Proceso</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.95]">
            ¿Cómo trabajamos <span className="text-primary neon-text-glow italic">juntos?</span>
          </h2>
          <div className="max-w-2xl space-y-4">
            <p className="text-slate-300 text-xl md:text-2xl font-medium leading-relaxed">
              Transparencia total. Cero sorpresas.
            </p>
            <p className="text-white/60 text-lg md:text-xl font-medium">
              Así es exactamente el proceso cuando trabajamos juntos:
            </p>
          </div>
        </div>

        <div className="space-y-16 relative">
          <div className="absolute left-[40px] top-10 bottom-10 w-px bg-gradient-to-b from-primary via-slate-800 to-transparent hidden md:block"></div>

          <div className="relative md:pl-24">
            <div className="absolute left-0 top-0 hidden md:flex size-20 rounded-2xl bg-surface border border-primary/30 items-center justify-center shadow-xl shadow-primary/10 z-10">
              <span className="material-symbols-outlined text-primary text-4xl">calendar_month</span>
            </div>
            
            <div className="glass-card rounded-[40px] p-8 md:p-12 border-white/5 group hover:border-primary/20 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <div className="inline-block px-4 py-2 rounded-lg bg-primary text-white text-[11px] font-black uppercase tracking-widest mb-2">Paso 1: 15 Minutos</div>
                  <h3 className="text-3xl md:text-5xl font-black text-white leading-tight">Entrevista de Validación</h3>
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
                    El objetivo es simple: <strong>Validación mutua</strong>. Ni un minuto más, ni uno menos.
                  </p>
                  
                  <div className="space-y-4 pt-4">
                    <p className="text-emerald-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">check_circle</span> ¿Qué pasa aquí?
                    </p>
                    <ul className="space-y-4 text-slate-300 text-lg">
                      <li className="flex gap-3"><span className="text-primary">→</span> <span>Me cuentas tu proyecto y prioridades.</span></li>
                      <li className="flex gap-3"><span className="text-primary">→</span> <span>Valido si es fit para mi metodología.</span></li>
                      <li className="flex gap-3"><span className="text-primary">→</span> <span>Tú validas si mi approach tiene sentido para ti.</span></li>
                      <li className="flex gap-3"><span className="text-primary">→</span> <span>Si hay match, pasamos a Paso 2.</span></li>
                    </ul>
                  </div>
                </div>

                <div className="bg-black/30 rounded-3xl p-8 md:p-10 border border-white/5 flex flex-col justify-between">
                  <div className="space-y-8">
                    <p className="text-red-500 font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">cancel</span> ¿Qué NO pasa aquí?
                    </p>
                    <ul className="space-y-5">
                      {["No te vendo nada.", "No te pido compromiso.", "No te cobro por la entrevista."].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-slate-400 text-lg font-medium italic">
                          <span className="material-symbols-outlined text-xl">close</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a href="https://wa.link/4dfafr" target="_blank" rel="noopener noreferrer" className="mt-12 w-full py-6 bg-primary text-white font-black rounded-2xl text-center shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all uppercase tracking-[0.2em] text-sm">
                    AGENDAR ENTREVISTA →
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

export default ExecutionProcess;
