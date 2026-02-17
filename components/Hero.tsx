import React, { useEffect, useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { QuantumCore } from './QuantumCore';

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookingClick = () => {
    window.open("https://cal.com/automationodyssey.pl/konsultacja-ai", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden bg-[#020202]">
      {/* Absolute Background Layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.05),transparent_70%)]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Content */}
          <div className={`flex-1 text-left transition-all duration-1000 ease-luxury ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-ping"></span>
              Lider Automatyzacji AI w Szczecinie
            </div>
            
            <h1 className="text-white font-black leading-tight mb-8">
              Automatyzacja,<br />
              <span className="gradient-text italic">Która Zarabia.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/40 font-light leading-relaxed max-w-xl mb-12">
              Wdrażamy inteligentne voiceboty i systemy Speed-to-Lead. Skaluj swój biznes bez zatrudniania armii ludzi.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                  onClick={handleBookingClick} 
                  className="btn-luxury group flex items-center justify-center"
              >
                Bezpłatna Konsultacja
                <ArrowRight size={18} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:+48729086144" className="flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                <Phone size={16} className="text-primary" />
                Zadzwoń do AI
              </a>
            </div>
            
            <div className="mt-16 flex gap-12 border-t border-white/5 pt-10">
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white tracking-tighter">24/7</span>
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1">Dostępność</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white tracking-tighter">&lt;30s</span>
                  <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] mt-1">Reakcja Leadów</span>
               </div>
            </div>
          </div>

          {/* Right Side: The "Galaxy" Visual */}
          <div className={`flex-1 flex items-center justify-center transition-all duration-1000 delay-300 ease-luxury ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
             <div className="relative w-full max-w-[600px] aspect-square">
                <QuantumCore />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};
