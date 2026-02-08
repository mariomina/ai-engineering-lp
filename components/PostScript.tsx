
import React from 'react';

const PostScript: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Elementos Decorativos Sutiles */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-30"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 space-y-4">
          <div className="h-px w-16 bg-primary/30"></div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter italic opacity-80 leading-none">
            P.P.D. <span className="text-primary">—</span>
          </h2>
          <p className="text-xs font-black text-slate-500 uppercase tracking-[0.5em] mt-2">Una última cosa:</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-3xl font-black text-white leading-tight">
                No te voy a perseguir.
              </h3>
              <div className="space-y-6 text-slate-300 text-lg md:text-xl leading-relaxed font-medium">
                <p>No esperes emails de seguimiento cada 48 horas.</p>
                <p>No te voy a llamar 5 veces para "ver si lo pensaste".</p>
                <p>No te voy a agregar a un newsletter que nunca pediste.</p>
              </div>
            </div>

            <div className="p-8 md:p-10 rounded-[32px] bg-white/[0.02] border border-white/5 space-y-6">
              <p className="text-white font-bold text-xl leading-relaxed">
                "Si esto tiene sentido para ti, tú sabes dónde encontrarme."
              </p>
              <div className="h-px w-full bg-gradient-to-r from-slate-800 to-transparent"></div>
              <p className="text-slate-400 text-base italic leading-relaxed">
                Si no es tu momento, si el proyecto no es fit o si prefieres el camino tradicional... todo bien. Sin resentimientos.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-[40px] p-10 md:p-14 border-emerald-500/10 bg-emerald-500/[0.01] shadow-2xl">
            <h4 className="text-xs font-black text-emerald-500 uppercase tracking-[0.3em] mb-10">
              Pero si SÍ necesitas:
            </h4>
            
            <ul className="space-y-8">
              {[
                { t: "Velocidad ejecutiva", d: "Sin sacrificar ni un ápice de calidad técnica." },
                { t: "Criterio de Negocio", d: "Un dev que entiende de ROI y conversión." },
                { t: "Sprint Zero Riesgo", d: "Garantía total de prueba de 1 semana." },
                { t: "Talento Local", d: "Integración in-house estratégica en Ecuador." }
              ].map((item, i) => (
                <li key={i} className="flex gap-5 group">
                  <div className="size-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/40">
                    <span className="material-symbols-outlined text-emerald-500 text-base font-black">check</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-lg font-black text-white leading-none">{item.t}</p>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-10 border-t border-white/10">
              <p className="text-white font-black text-2xl uppercase tracking-tighter italic">Entonces sabes qué hacer.</p>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col items-center space-y-10">
          <div className="text-center">
            <p className="text-slate-400 text-xl md:text-2xl font-medium italic mb-4">"Nos vemos del otro lado."</p>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase leading-none">Mario Mina</span>
              <span className="text-[11px] font-black text-primary uppercase tracking-[0.5em] mt-3">AI-Assisted Engineer</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-slate-800">
             <span className="material-symbols-outlined text-5xl">terminal</span>
             <div className="h-px w-24 bg-slate-900"></div>
             <span className="material-symbols-outlined text-5xl">code</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostScript;
