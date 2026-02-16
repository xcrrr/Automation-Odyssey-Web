import React from 'react';
import { Settings, Mic, Link, CheckCircle, ArrowRight } from 'lucide-react';
import { Step } from '../types';

const steps: Step[] = [
  {
    id: 1,
    title: 'Blueprint Strategiczny',
    description: 'Analizujemy wąskie gardła w Twojej firmie i projektujemy logikę agenta. Działający prototyp w 48h.',
    Icon: Settings,
  },
  {
    id: 2,
    title: 'Inżynieria Głosu',
    description: 'Klonujemy Twój głos lub wybieramy z biblioteki profesjonalnych modeli. Gwarancja 100% naturalności.',
    Icon: Mic,
  },
  {
    id: 3,
    title: 'Głęboka Integracja',
    description: 'Spinamy AI z Twoim CRM, kalendarzem i telefonem. Dane płyną tam, gdzie ich potrzebujesz.',
    Icon: Link,
  },
  {
    id: 4,
    title: 'Dominacja Rynkowa',
    description: 'Uruchamiamy system i optymalizujemy konwersję. Twoje AI dzwoni, sprzedaje i umawia spotkania.',
    Icon: CheckCircle,
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-40 bg-[#030303] relative overflow-hidden">
      {/* Cinematic Background Lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary via-transparent to-transparent"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-secondary via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-heading font-bold mb-6 text-white tracking-tighter">
            Proces <span className="gradient-text">Odysei.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Od chaosu manualnych zadań do precyzyjnie naoliwionej machiny AI. Szybko, konkretnie, bez zbędnych pytań.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Connector Arrows for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 -right-4 z-20">
                  <ArrowRight size={24} className="text-white/10 group-hover:text-primary transition-colors duration-500" />
                </div>
              )}

              <div className="relative p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/5 transition-all duration-500 hover:border-primary/40 h-full flex flex-col items-center text-center">
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-dark border border-white/10 flex items-center justify-center">
                   <span className="text-primary font-black text-xs">0{step.id}</span>
                </div>

                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <step.Icon size={32} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-gray-400 font-light leading-relaxed text-base">{step.description}</p>
                
                {/* Subtle Progress Indicator */}
                <div className="mt-8 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <div 
                    className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out" 
                    style={{ width: index === 0 ? '25%' : index === 1 ? '50%' : index === 2 ? '75%' : '100%' }}
                   ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Bar */}
        <div className="mt-24 p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
           <div className="flex items-center gap-6 text-center md:text-left">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                 <Mic className="text-primary animate-pulse" size={20} />
              </div>
              <div>
                 <h4 className="text-xl font-bold text-white">Gotowy na własnego klona AI?</h4>
                 <p className="text-gray-400 font-light">Sprawdź demo głosu na żywo podczas darmowej rozmowy.</p>
              </div>
           </div>
           <a 
            href="#pricing" 
            className="px-10 py-4 bg-white text-black rounded-full font-black text-sm uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-300 shadow-2xl"
           >
            Wybierz Plan
           </a>
        </div>
      </div>
    </section>
  );
};
