
import React, { useState } from 'react';

const ProjectDeepDive: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'resumen' | 'fraude' | 'rat'>('fraude');

  return (
    <div className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Máscara de degradado superior para suavizar transición desde bg-surface/30 */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-surface/30 to-transparent pointer-events-none"></div>
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0 bg-grid opacity-[0.03] pointer-events-none"></div>
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-6">
            04. Evidence & Market Validation
          </div>
          <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-[0.95]">
            No te pido que me creas.<br/>
            <span className="text-primary neon-text-glow font-black">Te muestro la evidencia real.</span>
          </h2>
          <div className="max-w-4xl space-y-6">
            <p className="text-white text-xl md:text-3xl font-black leading-tight">
              Construí esto específicamente para <span className="underline decoration-primary decoration-4 underline-offset-8">ENEXT.</span>
            </p>
            <p className="text-slate-300 text-lg md:text-2xl leading-relaxed font-medium">
              Antes de aplicar, invertí <span className="text-white">48 horas</span> en entender profundamente tu negocio de identidad digital, firmas electrónicas y cumplimiento LOPDP — y construí un <span className="text-primary font-bold">MVP funcional</span> de la plataforma que ustedes podrían estar vendiendo <span className="italic">HOY.</span>
            </p>
          </div>
        </div>

        <div className="glass-card rounded-[48px] border-white/10 overflow-hidden shadow-2xl mb-16 transition-all duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[850px]">
            <div className="lg:col-span-7 bg-[#f8fafd] flex flex-col border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="h-16 bg-white border-b border-slate-100 flex items-center justify-between px-6 shrink-0">
                 <div className="flex items-center gap-4">
                   <div className="size-8 rounded bg-[#5340f5] flex items-center justify-center font-black text-white text-xs">E</div>
                   <div className="flex gap-2">
                      {['resumen', 'fraude', 'rat'].map((tab) => (
                        <button 
                          key={tab}
                          onClick={() => setActiveTab(tab as any)}
                          className={`px-3 py-1.5 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all ${activeTab === tab ? 'bg-[#5340f5]/10 text-[#5340f5]' : 'text-slate-400 hover:bg-slate-50'}`}
                        >
                          {tab === 'resumen' ? 'Dashboard' : tab === 'fraude' ? 'Identidad' : 'Auditoría'}
                        </button>
                      ))}
                   </div>
                 </div>
                 <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-slate-300 text-xl">notifications</span>
                    <div className="size-8 rounded-full bg-slate-100 border border-slate-200"></div>
                 </div>
              </div>

              <div className="flex-1 p-8 space-y-8 overflow-hidden flex flex-col">
                <div className="space-y-5">
                  <div className="flex justify-between items-end">
                    <div>
                       <h3 className="text-xl font-black text-slate-800 leading-tight">Biometría & Seguridad Panel</h3>
                       <p className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em]">Integrity Hub // V2.4.1</p>
                    </div>
                    <button className="px-5 py-2.5 bg-[#5340f5] text-white text-[11px] font-black rounded-xl shadow-lg shadow-[#5340f5]/20 uppercase tracking-widest">INICIAR AUDITORÍA</button>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                     <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Puntaje LOPDP</p>
                        <h4 className="text-3xl font-black text-slate-800 tracking-tighter">98/100</h4>
                        <div className="absolute top-0 right-0 p-4"><span className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">+2.4%</span></div>
                     </div>
                     <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Efectividad Deepfake</p>
                        <h4 className="text-3xl font-black text-slate-800 tracking-tighter">99.2%</h4>
                     </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex-1 flex flex-col min-h-[200px]">
                   <div className="flex justify-between items-center mb-6">
                      <p className="text-[11px] font-black text-slate-800 uppercase tracking-widest">Cumplimiento y Puntaje LOPDP</p>
                      <span className="text-[10px] text-slate-400 font-bold">Últimas 24 Horas</span>
                   </div>
                   <div className="flex-1 relative flex items-center justify-center">
                      <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                         <path d="M0,80 C50,70 100,10 150,60 C200,110 250,30 300,20 C350,10 400,60" fill="transparent" stroke="#5340f5" strokeWidth="3" />
                         <path d="M0,80 C50,70 100,10 150,60 C200,110 250,30 300,20 C350,10 400,60 L400,100 L0,100 Z" fill="rgba(83, 64, 245, 0.05)" />
                      </svg>
                   </div>
                   <div className="grid grid-cols-2 gap-6 mt-6">
                      <div className="space-y-2">
                         <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 tracking-tighter"><span>Suplantación</span><span>78%</span></div>
                         <div className="h-2 bg-slate-50 rounded-full overflow-hidden"><div className="h-full bg-red-500 w-[78%]"></div></div>
                      </div>
                      <div className="space-y-2">
                         <div className="flex justify-between text-[10px] font-black uppercase text-slate-500 tracking-tighter"><span>Inyección Video</span><span>92%</span></div>
                         <div className="h-2 bg-slate-50 rounded-full overflow-hidden"><div className="h-full bg-red-500 w-[92%]"></div></div>
                      </div>
                   </div>
                </div>

                <div className="bg-white p-7 rounded-3xl border border-slate-100 shadow-sm space-y-6">
                   <div className="flex justify-between items-end">
                      <p className="text-[11px] font-black text-slate-800 uppercase tracking-widest">Consola de Decisión</p>
                      <span className="text-[11px] font-black text-[#5340f5]">SENSIBILIDAD: 0.95</span>
                   </div>
                   <div className="h-2 bg-slate-100 rounded-full relative flex items-center">
                      <div className="w-[85%] h-full bg-[#5340f5] rounded-full"></div>
                      <div className="absolute left-[85%] size-5 bg-white border-2 border-[#5340f5] rounded-full shadow-lg -ml-2.5"></div>
                   </div>
                   <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                      <span className="text-red-500">Protección Máxima</span>
                      <span>Balanceado</span>
                      <span className="text-amber-500">Alta Fluidez</span>
                   </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                   <div className="p-4 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
                      <span className="text-[11px] font-black text-slate-600 uppercase tracking-widest">Últimos Registros RAT</span>
                      <span className="material-symbols-outlined text-slate-400 text-lg">open_in_full</span>
                   </div>
                   <div className="p-4 space-y-4">
                      {[
                        { u: "Admin_04", a: "Modificación de Política", h: "8f43...9a1b", s: "ALTO" },
                        { u: "Legal_01", a: "Acceso a Datos Sensibles", h: "3a12...7e9c", s: "BAJO" }
                      ].map((log, i) => (
                        <div key={i} className="flex items-center justify-between text-[11px] border-b border-slate-50 pb-3 last:border-0 last:pb-0">
                           <div className="flex flex-col">
                              <span className="font-black text-slate-800">{log.u}</span>
                              <span className="text-slate-500">{log.a}</span>
                           </div>
                           <span className={`px-2.5 py-1 rounded-md font-black ${log.s === 'ALTO' ? 'bg-red-50 text-red-500' : 'bg-emerald-50 text-emerald-600'}`}>{log.s}</span>
                        </div>
                      ))}
                   </div>
                </div>
                
                <div className="pt-4">
                   <a href="https://autopiloto-lopdp.onrender.com/" target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#5340f5] text-sm font-black text-white rounded-2xl hover:scale-[1.02] transition-all shadow-xl shadow-[#5340f5]/20 group uppercase tracking-widest">
                      VER DEMO EN VIVO
                      <span className="material-symbols-outlined text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">north_east</span>
                   </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-10 md:p-14 space-y-14 bg-surface/20 flex flex-col justify-center border-t lg:border-t-0 border-white/5">
              <div className="space-y-6">
                <h4 className="text-xs font-black text-primary uppercase tracking-[0.4em]">¿QUÉ ES ESTO?</h4>
                <p className="text-slate-200 text-xl md:text-2xl leading-relaxed font-medium">
                  Es mi respuesta técnica a la pregunta: <br/>
                  <span className="text-white font-bold italic">"¿Puede Mario entregar algo enterprise-grade, rápido, sin comprometer calidad?"</span>
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Construí una plataforma SaaS B2B completa de infraestructura LOPDP que resuelve exactamente los problemas que enfrentan tus clientes objetivo.
                </p>
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-black text-red-500 uppercase tracking-[0.4em]">EL PROBLEMA QUE RESUELVE</h4>
                <div className="space-y-8">
                  {[
                    { t: "Riesgo Legal", d: "Evita multas de hasta el 1% de la facturación anual por incumplimiento LOPDP.", i: "gavel" },
                    { t: "Abandono de Clientes", d: "Reduce el 40% de deserción causada por procesos de validación lentos.", i: "person_remove" },
                    { t: "Fraude Sintético", d: "Detecta ataques con Deepfakes y validaciones comprometidas en tiempo real.", i: "face_retouching_off" }
                  ].map((p, i) => (
                    <div key={i} className="flex gap-5 group/item">
                      <div className="size-12 rounded-2xl bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                        <span className="material-symbols-outlined text-red-500 text-2xl">{p.i}</span>
                      </div>
                      <p className="text-lg text-slate-400 leading-relaxed">
                        <strong className="text-slate-100 block text-xl mb-1 group-hover/item:text-red-400 transition-colors">{p.t}</strong> {p.d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <h4 className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em]">LOS 3 PILARES</h4>
                <div className="space-y-8">
                  {[
                    { t: "Seguridad Invisible", d: "Valida identidad y detecta Deepfakes en <2s sin gestos incómodos ni fricción.", i: "visibility_off" },
                    { t: "Orquestador de Evidencias", d: "Genera Registro de Actividades (RAT) automático, sellado con SHA-256.", i: "database" },
                    { t: "Firma Cloud + Scoring", d: "Elimina tokens físicos. Ofrece visibilidad en tiempo real del cumplimiento.", i: "bolt" }
                  ].map((p, i) => (
                    <div key={i} className="flex gap-5 group/item">
                      <div className="size-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                        <span className="material-symbols-outlined text-emerald-500 text-2xl">{p.i}</span>
                      </div>
                      <p className="text-lg text-slate-400 leading-relaxed">
                        <strong className="text-slate-100 block text-xl mb-1 group-hover/item:text-emerald-400 transition-colors">{p.t}</strong> {p.d}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDeepDive;
