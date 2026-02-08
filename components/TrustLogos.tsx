
import React from 'react';

const TrustLogos: React.FC = () => {
  const logos = [
    { name: "TechNova", icon: "rocket" },
    { name: "FinFlow", icon: "account_balance" },
    { name: "SecureNode", icon: "shield" },
    { name: "CloudScale", icon: "cloud_done" },
    { name: "DataCore", icon: "database" }
  ];

  return (
    <div className="py-12 border-y border-white/5 bg-background/50">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-10">
          Proyectos entregados para líderes en tecnología
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          {logos.map((logo, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl text-slate-400">{logo.icon}</span>
              <span className="text-lg font-bold tracking-tight text-slate-300">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustLogos;
