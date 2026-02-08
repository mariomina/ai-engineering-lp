
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemTimeline from './components/ProblemTimeline';
import Comparison from './components/Comparison';
import ProjectDeepDive from './components/ProjectDeepDive';
import Differentiators from './components/Differentiators';
import FitSection from './components/FitSection';
import ExecutionProcess from './components/ExecutionProcess';
import Pricing from './components/Pricing';
import RiskReversal from './components/RiskReversal';
import FinalCTA from './components/FinalCTA';
import PostScript from './components/PostScript';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Control del botón de volver arriba
      setShowScrollTop(window.scrollY > 1000);

      // Cálculo del progreso del scroll
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutar una vez al inicio para inicializar el progreso
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background selection:bg-primary/30 selection:text-white antialiased">
      <Navbar />
      
      <main className="flex-grow">
        {/* 01. HERO - Gancho inicial */}
        <section id="hero" className="scroll-mt-16">
          <Hero />
        </section>

        {/* 02. EL PROBLEMA - Agitación del dolor */}
        <section id="problem" className="scroll-mt-16">
          <ProblemTimeline />
        </section>

        {/* 03. LA SOLUCIÓN - Presentación de la Metodología AIOS */}
        <section id="solution" className="scroll-mt-16">
          <Comparison />
        </section>

        {/* 04. LA PRUEBA - Case Study Profundo LOPDP */}
        <section id="work" className="scroll-mt-16">
          <ProjectDeepDive />
        </section>

        {/* 05. MI DIFERENCIA - Valor único estratégico */}
        <section id="why-us" className="scroll-mt-16">
          <Differentiators />
        </section>

        {/* 06. FILTRO - Cualificación del prospecto */}
        <section id="fit" className="scroll-mt-16">
          <FitSection />
        </section>

        {/* 07. EL PROCESO - Cómo trabajamos paso a paso */}
        <section id="process" className="scroll-mt-16">
          <ExecutionProcess />
        </section>

        {/* 08. PRICING - Inversión y ROI */}
        <section id="pricing" className="scroll-mt-16">
          <Pricing />
        </section>

        {/* 09. GARANTÍA - Seguridad total anti-riesgo */}
        <section id="guarantee" className="scroll-mt-16">
          <RiskReversal />
        </section>

        {/* 10. CTA FINAL - Cierre de venta directo */}
        <section id="cta-final" className="scroll-mt-16">
          <FinalCTA />
        </section>

        {/* 11. POST-SCRIPTUMS - Objeciones finales */}
        <section id="ps" className="scroll-mt-16">
          <PostScript />
        </section>
      </main>

      <Footer />

      {/* Floating Action Button: Back to Top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-[60] size-14 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-xl flex items-center justify-center text-primary shadow-2xl transition-all duration-500 hover:bg-primary hover:text-white hover:scale-110 active:scale-90 ${showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}
        aria-label="Volver arriba"
      >
        <span className="material-symbols-outlined text-3xl">arrow_upward</span>
      </button>

      {/* Global Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none">
        <div 
          className="h-full bg-primary shadow-[0_0_15px_rgba(13,127,242,0.9)] transition-all duration-75 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default App;
