import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { PricingPlan } from '../types';

const plans: PricingPlan[] = [
  {
    name: 'Starter',
    price: '999 zł',
    description: 'Podstawa dla Twojego biznesu.',
    features: [
      '1 Autonomiczny Voice Bot',
      'Do 500 minut rozmów/mc',
      'Podstawowa integracja CRM',
      'Dashboard Statystyk',
      'Wsparcie Standard'
    ],
    isPopular: false,
  },
  {
    name: 'Business Pro',
    price: '2499 zł',
    description: 'Pełna moc automatyzacji.',
    features: [
      '3 Zaawansowane Boty AI',
      'Nielimitowane minuty',
      'Głęboka integracja GHL/Make',
      'Reaktywacja Bazy (DBR)',
      'Dedykowany Architekt AI',
      'Nagrywanie & Analiza'
    ],
    isPopular: true,
  },
];

export const Pricing: React.FC = () => {
  const handleBookingClick = () => {
    if (window.Cal) {
      window.Cal("ui", "open", { calLink: "automationodyssey.pl/konsultacja-ai" });
    } else {
      window.open("https://cal.com/automationodyssey.pl/konsultacja-ai", "_blank");
    }
  };

  return (
    <section id="pricing" className="py-24 md:py-40 bg-[#030303] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white tracking-tighter">
            Czysta <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Wartość.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">
            Inwestycja, która zwraca się szybciej niż myślisz. Skaluj mądrze.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`group relative p-1 rounded-[2.5rem] transition-all duration-500 hover:scale-[1.02]
                ${plan.isPopular 
                  ? 'bg-gradient-to-b from-secondary/50 to-primary/50 shadow-[0_0_50px_rgba(99,102,241,0.2)]' 
                  : 'bg-white/5 border border-white/5'
                }
              `}
            >
              <div className="bg-[#0a0a0a] rounded-[2.4rem] p-8 md:p-12 h-full flex flex-col">
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-secondary to-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-6 py-2 rounded-full flex items-center gap-2 shadow-2xl">
                    <Sparkles size={12} />
                    Najchętniej Wybierany
                  </div>
                )}
                
                <div className="mb-10">
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-5xl md:text-6xl font-bold text-white tracking-tighter">{plan.price}</span>
                    <span className="text-gray-500 font-light">/netto</span>
                  </div>
                  <p className="text-gray-400 font-light leading-relaxed">{plan.description}</p>
                </div>
                
                <div className="space-y-5 mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 group/item">
                      <div className={`p-1 rounded-full ${plan.isPopular ? 'bg-secondary/20' : 'bg-white/10'} transition-colors group-hover/item:bg-primary/30`}>
                        <Check className={`h-4 w-4 ${plan.isPopular ? 'text-secondary' : 'text-primary'}`} />
                      </div>
                      <span className="text-gray-300 font-light text-base md:text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button 
                  type="button"
                  onClick={handleBookingClick}
                  className={`group relative w-full py-5 rounded-3xl font-black text-lg tracking-widest uppercase transition-all duration-300 overflow-hidden
                    ${plan.isPopular 
                      ? 'bg-white text-black hover:bg-primary hover:text-white' 
                      : 'bg-transparent border border-white/10 text-white hover:bg-white/5'
                    }
                  `}
                >
                  <span className="relative z-10">Wybierz {plan.name}</span>
                  <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
           <p className="text-gray-500 text-sm font-light">Potrzebujesz czegoś niestandardowego? <span className="text-primary font-bold cursor-pointer" onClick={handleBookingClick}>Napisz do nas.</span></p>
        </div>
      </div>
    </section>
  );
};
