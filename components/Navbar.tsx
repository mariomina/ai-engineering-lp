
import React from 'react';

const Navbar: React.FC = () => {
  const navLinks = [
    { name: 'Metodología', href: '#solution' },
    { name: 'Proceso', href: '#process' },
    { name: 'Trabajo', href: '#work' },
    { name: 'Precios', href: '#pricing' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
          <div className="w-8 h-8 rounded bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:bg-primary/30 transition-colors">
            <span className="material-symbols-outlined text-primary text-sm">terminal</span>
          </div>
          <span className="font-bold text-lg tracking-tight">Dev Mario Mina</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://wa.link/4dfafr"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 px-5 py-2 rounded-full transition-all shadow-lg shadow-primary/20"
          >
            <span>Agendar Entrevista</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </a>
          <button className="md:hidden text-gray-400">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
