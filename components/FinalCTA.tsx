
import React from 'react';

const FinalCTA: React.FC = () => {
  return (
    <div className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Máscara de degradado superior para suavizar transición desde bg-surface/30 */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-surface/30 to-transparent pointer-events-none"></div>
      
      {/* Elementos Decorativos de Fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1200px] h-[800px] bg-primary/10 blur-[180px] rounded-full pointer-events-none z-0 opacity-40"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24 space-y-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest animate-pulse">
            La oportunidad es hoy
          </div>
          
          <div className="space-y-6">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none text-white">
              ¿Listo para mover tu roadmap <br className="hidden md:block" />
              <span className="text-primary neon-text-glow italic">10x más rápido?</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
