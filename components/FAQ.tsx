
import React, { useState } from 'react';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "¿Qué pasa si desapareces?",
      a: "I provide complete documentation and standard hand-off protocols to ensure you are never locked in. You receive a full codebase walkthrough, architectural diagrams, and a video library explaining how every part of the system works."
    },
    {
      q: "¿El código es mío?",
      a: "Yes, absolutely. Once the project is settled, 100% of the Intellectual Property (IP) is transferred to you. I do not retain any rights to the code written for your specific business logic."
    },
    {
      q: "¿Por qué eres más caro que un freelancer?",
      a: "You aren't paying for hours; you're paying for outcomes and seniority. I leverage AI to work 10x faster than a mid-level developer, applying 10+ years of architectural experience to ensure that speed doesn't result in technical debt."
    },
    {
      q: "¿Cómo funciona el soporte post-lanzamiento?",
      a: "I include 30 days of hyper-responsive support for bug fixes and deployment issues. Longer-term maintenance retainers are available if you want to keep iterating together."
    }
  ];

  return (
    <div className="py-24 px-6 bg-surface/10">
      <div className="max-w-3xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Common Questions</h2>
          <p className="text-slate-500 text-lg">Everything you need to know about the collaboration process.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl border border-slate-800 bg-surface transition-all duration-300 overflow-hidden ${openIdx === idx ? 'bg-surface-light border-primary/30' : ''}`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-lg font-bold text-left hover:text-primary transition-colors"
              >
                <span>{faq.q}</span>
                <span className={`material-symbols-outlined transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-primary' : 'text-slate-500'}`}>
                  expand_more
                </span>
              </button>
              <div 
                className={`px-6 pb-6 text-slate-400 leading-relaxed transition-all duration-300 ${openIdx === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
