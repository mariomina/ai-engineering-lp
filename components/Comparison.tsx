
import React from 'react';

const Comparison: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-surface/30 relative overflow-hidden">
      {/* Máscara de degradado superior para suavizar transición desde fondo negro */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
      
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-2">
            <span className="flex h-2 w-2 rounded-full bg-primary neon-box-glow"></span>
            <span className="text-xs font-medium text-slate-300 uppercase tracking-wider">03. La Solución</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">
            Existe una <span className="text-primary neon-text-glow">forma mejor.</span>
          </h2>

          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1] text-white/90">
              Yo no trabajo como <br/>
              <span className="text-slate-500">desarrollador tradicional.</span>
            </h3>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium">
              Uso <span className="text-primary font-bold neon-text-glow">AIOS (AI-Orquestador System)</span>: una metodología que combina inteligencia artificial + criterio senior para entregar proyectos enterprise en tiempo récord.
            </p>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block">
            <div className="w-12 h-12 rounded-full bg-background border border-white/10 flex items-center justify-center shadow-2xl">
              <span className="material-symbols-outlined text-primary">swap_horiz</span>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-10 border-white/5 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <h3 className="text-base font-bold text-slate-400 uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-base">group</span>
              Mientras un equipo tradicional:
            </h3>
            <ul className="space-y-6">
              {[
                { t: "Escribe código manualmente línea por línea.", i: "keyboard" },
                { t: "Documenta al final (si es que documenta).", i: "history" },
                { t: "Hace testing manual repetitivo.", i: "touch_app" },
                { t: "Se atora en decisiones de arquitectura.", i: "emergency_home" }
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-400">
                  <span className="material-symbols-outlined text-slate-600 text-xl">arrow_forward</span>
                  <span className="text-lg">{item.t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-3xl p-8 md:p-10 border-primary/30 bg-primary/[0.03] shadow-[0_0_50px_-12px_rgba(13,127,242,0.25)] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-7xl text-primary animate-pulse">bolt</span>
            </div>
            
            <h3 className="text-base font-bold text-primary uppercase tracking-widest mb-8 flex items-center gap-2">
              <span className="material-symbols-outlined text-base">person</span>
              Yo trabajo así:
            </h3>
            <ul className="space-y-6 relative z-10">
              {[
                { t: "Automatizo el 70% del código repetitivo.", d: "CRUD, validaciones, tests básicos, integraciones estándar.", i: "auto_mode" },
                { t: "Me enfoco en el 30% que requiere criterio senior.", d: "Arquitectura, seguridad, lógica compleja, performance.", i: "psychology" },
                { t: "Genero documentación en paralelo al desarrollo.", d: "Integrada al proceso, no como tarea final.", i: "article" },
                { t: "Testing automatizado desde día 1.", d: "Cada feature viene con sus tests nativamente.", i: "verified" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 group/item">
                  <div className="p-1.5 rounded-lg bg-primary/20 text-primary">
                    <span className="material-symbols-outlined text-xl">{item.i}</span>
                  </div>
                  <div>
                    <strong className="block text-white text-lg leading-tight mb-1">{item.t}</strong>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">El Resultado:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { t: "Velocidad de equipo de 5-6 personas", i: "groups" },
              { t: "Costo de 1 desarrollador senior", i: "person" },
              { t: "Calidad superior a desarrollo manual", i: "star" },
              { t: "Documentación completa incluida", i: "library_books" },
              { t: "Código mantenible por cualquier dev", i: "code" }
            ].map((res, i) => (
              <div key={i} className="bg-emerald-500/5 border border-emerald-500/10 p-6 rounded-2xl flex flex-col items-center text-center gap-3 hover:bg-emerald-500/10 transition-colors group">
                <span className="material-symbols-outlined text-emerald-500 text-3xl group-hover:scale-110 transition-transform">check_circle</span>
                <p className="text-sm font-bold text-slate-200">{res.t}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative p-12 rounded-[40px] bg-gradient-to-br from-primary/20 to-transparent border border-primary/20 overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/10 rounded-full blur-[80px] group-hover:scale-110 transition-transform duration-700"></div>
            <span className="material-symbols-outlined text-primary text-6xl opacity-20 absolute top-8 left-8">format_quote</span>
            
            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <p className="text-2xl md:text-3xl font-medium text-slate-200 leading-relaxed italic">
                "Como un cirujano que usa un robot Da Vinci: El robot da la <span className="text-primary font-bold">precisión</span>, el cirujano da el <span className="text-primary font-bold">criterio</span>."
              </p>
              <div className="h-px w-24 bg-primary/30"></div>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Filosofía de Trabajo AIOS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
