
import React from 'react';

const ArchitectureDiagram: React.FC = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-center py-20 bg-surface/20">
      <div className="flex-1 flex flex-col justify-center w-full lg:w-1/2 p-6 lg:pl-32 lg:pr-16">
        <div className="flex flex-col gap-8 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary neon-box-glow"></span>
            <h3 className="text-primary text-sm font-bold tracking-widest uppercase">AI-Orchestrated System (AIOS)</h3>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
            Ingeniería Senior <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400 neon-text-glow">Asistida por IA</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            No es solo código, es arquitectura. La IA genera el boilerplate; yo orquesto la lógica, seguridad y escalabilidad. No reemplazo. Amplificación.
          </p>
          
          <div className="glass-card rounded-xl p-6 relative overflow-hidden group border-l-4 border-l-primary">
            <div className="flex flex-col gap-3 relative z-10">
              <div className="flex items-center gap-3 text-primary mb-1">
                <span className="material-symbols-outlined text-2xl">precision_manufacturing</span>
                <span className="text-xs font-bold uppercase tracking-wider opacity-80">Concepto Central</span>
              </div>
              <p className="text-slate-200 text-lg font-medium italic">
                "Como un cirujano experto operando un robot Da Vinci, la precisión humana guía la velocidad de la máquina."
              </p>
            </div>
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
          </div>

          <div className="flex flex-wrap gap-6 mt-4 border-t border-slate-800 pt-8">
            {[
              { label: "Dev Speed", value: "10x", color: "text-emerald-500" },
              { label: "Code Coverage", value: "100%", color: "text-white" },
              { label: "Architecture", value: "Verified", color: "text-primary" }
            ].map((stat, i) => (
              <React.Fragment key={i}>
                <div>
                  <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                  <p className={`${stat.color} text-2xl font-bold`}>{stat.value}</p>
                </div>
                {i < 2 && <div className="w-px h-12 bg-slate-800"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className="flex-1 w-full lg:w-1/2 min-h-[500px] flex items-center justify-center relative overflow-hidden bg-background">
        <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        {/* Connection Lines (Static for simplicity, can use SVGs) */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <line x1="50%" y1="50%" x2="80%" y2="25%" stroke="#0d7ff2" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="50%" y1="50%" x2="80%" y2="75%" stroke="#0d7ff2" strokeWidth="2" strokeDasharray="5,5" />
          <line x1="50%" y1="50%" x2="20%" y2="50%" stroke="#0d7ff2" strokeWidth="2" strokeDasharray="5,5" />
        </svg>

        <div className="relative z-10 w-full max-w-lg h-[500px] flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-surface border-2 border-primary shadow-[0_0_30px_rgba(13,127,242,0.4)] flex items-center justify-center z-10 animate-glow">
                <span className="material-symbols-outlined text-4xl">psychology</span>
              </div>
            </div>
            <div className="glass-card px-4 py-2 rounded-lg text-center">
              <p className="font-bold text-sm">Human Architect</p>
              <p className="text-xs text-primary">Core Decisions</p>
            </div>
          </div>

          <div className="absolute top-10 right-10 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-xl glass-card flex items-center justify-center border-slate-700"><span className="material-symbols-outlined text-emerald-400">database</span></div>
            <p className="text-xs text-slate-400">DB Agent</p>
          </div>
          <div className="absolute bottom-10 right-10 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-xl glass-card flex items-center justify-center border-slate-700"><span className="material-symbols-outlined text-purple-400">bug_report</span></div>
            <p className="text-xs text-slate-400">Test Agent</p>
          </div>
          <div className="absolute top-1/2 left-10 -translate-y-1/2 flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-xl glass-card flex items-center justify-center border-slate-700"><span className="material-symbols-outlined text-orange-400">brush</span></div>
            <p className="text-xs text-slate-400">UI Agent</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureDiagram;
