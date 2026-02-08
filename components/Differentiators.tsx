
import React from 'react';

const Differentiators: React.FC = () => {
  return (
    <div className="py-20 px-6 relative overflow-hidden bg-surface/30">
      {/* Máscara de degradado superior para fundir con la sección negra anterior */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
      
      {/* Fondo Decorativo */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full animate-float"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 text-center items-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold uppercase tracking-widest">
            05. Mi Diferencia
          </div>
          <h2 className="text-4xl md:text-7xl font-black leading-[1.05] tracking-tighter max-w-4xl">
            ¿Por qué soy <span className="text-primary neon-text-glow">diferente</span> a otros desarrolladores?
          </h2>
          <div className="space-y-4">
            <p className="text-gray-400 text-xl md:text-3xl max-w-3xl leading-relaxed font-medium mx-auto">
              No soy el típico desarrollador que solo sabe "picar código".
            </p>
            <p className="text-white text-xl md:text-3xl max-w-3xl leading-relaxed font-black mx-auto">
              Tengo una combinación única que ningún otro dev en Ecuador tiene: estrategia de negocio + velocidad exponencial.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
          <div className="glass-card rounded-[48px] p-10 md:p-12 border-white/5 flex flex-col gap-10 group hover:border-primary/20 transition-all duration-500 relative overflow-hidden">
            <div className="size-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/10">
              <span className="material-symbols-outlined text-5xl">filter_alt</span>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-white leading-tight">1. Background en Marketing de Respuesta Directa</h3>
              <div className="space-y-6 text-slate-400 leading-relaxed text-base">
                <p className="text-lg">Pasé años entendiendo:</p>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="text-primary font-black">→</span>
                    <span className="text-slate-300">Qué hace que un usuario convierta vs. abandone</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-black">→</span>
                    <span className="text-slate-300">Cómo estructurar flujos que maximizan resultados</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-black">→</span>
                    <span className="text-slate-300">Cómo medir ROI de cada feature</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-3xl bg-primary/5 border border-primary/10 space-y-4">
                <p className="text-primary font-black text-xs uppercase tracking-widest">¿Por qué importa?</p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Cuando diseño tu onboarding, no solo pienso en "funciona técnicamente". Pienso en conversión, fricción y métricas de crecimiento real.
                </p>
              </div>

              <p className="text-slate-200 font-bold text-xl leading-snug">
                Obtienes estrategia de negocio traducida a software.
              </p>
              <p className="text-slate-500 text-sm italic">
                Cuestiono si lo que pides es lo que realmente necesitas.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-[48px] p-10 md:p-12 border-white/5 flex flex-col gap-10 group hover:border-emerald-500/20 transition-all duration-500">
            <div className="size-20 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
              <span className="material-symbols-outlined text-5xl">dns</span>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-white leading-tight">2. Experiencia Senior en Fullstack</h3>
              <p className="text-slate-400 leading-relaxed text-lg">
                No soy un junior ni un mid-level. Soy un senior que ya resolvió los problemas que tú estás a punto de enfrentar.
              </p>

              <div className="grid grid-cols-2 gap-4">
                 {[
                   { t: "Frontend", v: "Next.js, TS" },
                   { t: "Backend", v: "Node, Python" },
                   { t: "Databases", v: "PG, Redis" },
                   { t: "Infra", v: "AWS, CI/CD" }
                 ].map((s, i) => (
                   <div key={i} className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                      <p className="text-[10px] font-black text-slate-500 uppercase mb-1">{s.t}</p>
                      <p className="text-sm font-bold text-slate-200">{s.v}</p>
                   </div>
                 ))}
              </div>

              <div className="space-y-4 pt-2">
                 {[
                   "Arquitectura a escala (100k+ usuarios)",
                   "Compliance y documentación legal",
                   "Comunicación de alto nivel"
                 ].map((item, i) => (
                   <div key={i} className="flex items-center gap-4">
                     <span className="material-symbols-outlined text-emerald-500 text-xl">check_circle</span>
                     <span className="text-slate-300 font-bold text-base">{item}</span>
                   </div>
                 ))}
              </div>
            </div>
          </div>

          <div className="glass-card rounded-[48px] p-10 md:p-12 border-primary/30 bg-primary/[0.02] flex flex-col gap-10 group transition-all duration-500 relative overflow-hidden">
            <div className="size-20 rounded-2xl bg-primary text-white flex items-center justify-center shadow-2xl shadow-primary/40">
              <span className="material-symbols-outlined text-5xl">bolt</span>
            </div>
            
            <div className="space-y-8">
              <h3 className="text-3xl font-black text-white leading-tight">3. Metodología AIOS <br/> (Mi Arma Secreta)</h3>
              
              <p className="text-slate-400 text-lg leading-relaxed">
                Mientras otros se atrasan y entregan código sin documentación, yo entrego sistemas documentados y mantenibles en <span className="text-primary font-bold">1/3 del tiempo.</span>
              </p>

              <div className="space-y-6 bg-black/40 p-8 rounded-3xl border border-white/5">
                 <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Entregables AIOS:</p>
                 <ul className="space-y-4">
                    {[
                      "Onboarding rápido de equipo",
                      "Código mantenible por seniors",
                      "Arquitectura escalable nativa",
                      "Trazabilidad de decisiones"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-base text-slate-200 font-medium">
                        <span className="size-2 rounded-full bg-primary shadow-[0_0_10px_rgba(13,127,242,0.8)]"></span>
                        {item}
                      </li>
                    ))}
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Differentiators;
