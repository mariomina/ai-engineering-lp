
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Andrés Rodríguez",
      role: "CTO @ Fintech Solutions",
      text: "La velocidad de entrega fue absurda. Lo que nuestro equipo interno estimó en 4 meses, estuvo listo en 3 semanas con una arquitectura más sólida de lo que imaginábamos.",
      avatar: "AR"
    },
    {
      name: "Lucía Méndez",
      role: "Founder @ EcoStartup",
      text: "No solo es código. El enfoque estratégico y la comprensión del modelo de negocio nos ahorraron miles de dólares en retrabajo técnico futuro.",
      avatar: "LM"
    },
    {
      name: "Carlos Vega",
      role: "CEO @ LogiSync",
      text: "El método AIOS es el futuro. La capacidad de iterar a esta velocidad manteniendo el 100% de cobertura de tests es simplemente una ventaja competitiva brutal.",
      avatar: "CV"
    }
  ];

  return (
    <div className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Lo que dicen los clientes</h2>
          <p className="text-slate-500 text-lg">Resultados reales para equipos de alto rendimiento.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="glass-card p-8 rounded-2xl flex flex-col justify-between border-t-4 border-t-primary hover:translate-y-[-4px] transition-all duration-300">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-amber-500 !text-sm">star</span>
                  ))}
                </div>
                <p className="text-slate-300 italic mb-8 leading-relaxed">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-bold text-primary">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase font-semibold">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
