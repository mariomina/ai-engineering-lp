
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-32 pb-16 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
      
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center gap-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide uppercase animate-float">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
          AIOS Methodology by Mario Mina
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
          Entrego en 
          <span className="relative inline-block text-primary neon-text-glow px-2">
            2-3 semanas
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary opacity-50" preserveAspectRatio="none" viewBox="0 0 100 10">
              <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
            </svg>
          </span>
          <br className="hidden md:block"/>
          lo que a un equipo tradicional
          <br className="hidden md:block"/> 
          le toma 3 meses.
        </h1>
        
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-medium text-white/90">
            No es promesa. Es metodología probada.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-normal max-w-2xl leading-relaxed mx-auto">
            Soy <span className="text-white font-bold">Mario Mina</span>, Desarrollador Fullstack Senior que usa 
            <span className="text-primary font-bold"> AIOS (AI-Orquestador System)</span> para entregar proyectos 
            enterprise-grade en fracción del tiempo tradicional.
          </p>
          <p className="text-gray-500 italic text-sm">Sin sacrificar calidad. Sin atajos. Solo eficiencia brutal.</p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full justify-center">
          <a href="https://autopiloto-lopdp.onrender.com/" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2 bg-primary text-white font-bold text-base px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(13,127,242,0.4)] hover:shadow-[0_0_40px_rgba(13,127,242,0.6)] transition-all overflow-hidden w-full sm:w-auto">
            <span>Ver la prueba</span>
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">rocket_launch</span>
          </a>
          <a href="https://wa.link/4dfafr" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm sm:text-base font-medium py-3 px-4">
            <span>O agenda una entrevista de validación</span>
            <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform text-primary">chevron_right</span>
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 w-full max-w-3xl">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-6 font-semibold">Tecnologías Principales</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <div className="flex items-center gap-2"><span className="material-symbols-outlined">psychology</span><span className="text-sm font-mono">OpenAI API</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined">code_blocks</span><span className="text-sm font-mono">Next.js</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined">cloud</span><span className="text-sm font-mono">Vercel Edge</span></div>
            <div className="flex items-center gap-2"><span className="material-symbols-outlined">database</span><span className="text-sm font-mono">Supabase</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
