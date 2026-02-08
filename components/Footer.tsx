
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-800 bg-[#06080b]">
      <div className="max-w-7xl mx-auto px-6 py-16 md:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="flex flex-col gap-6 max-w-xs">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
              <span className="text-xl font-bold tracking-tight">Mario Mina | AIOS</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Desarrollador Fullstack Senior. Metodología AIOS (AI-Orquestador System). 
              Quito, Ecuador.
            </p>
            <div className="flex flex-col gap-2 text-sm text-slate-400">
              <a href="mailto:mariomina01@gmail.com" className="hover:text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-base">mail</span> mariomina01@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-base">location_on</span> Quito, Ecuador
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-12 sm:gap-24">
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">Sitemap</h3>
              <div className="flex flex-col gap-4 text-sm text-slate-500">
                <a href="https://autopiloto-lopdp.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Portafolio Demo</a>
                <a href="#process" className="hover:text-primary transition-colors">Metodología</a>
                <a href="#fit" className="hover:text-primary transition-colors">Filtro</a>
                <a href="#pricing" className="hover:text-primary transition-colors">Precios</a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest">Social</h3>
              <div className="flex flex-col gap-4 text-sm text-slate-500">
                <a href="https://wa.link/4dfafr" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WhatsApp Directo</a>
                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-primary transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-600">
            © 2026 Mario Mina - Todos los derechos reservados. Cumplimiento SRI incluido.
          </p>
          <div className="flex items-center gap-6">
             <a href="#" className="text-slate-500 hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">code</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
