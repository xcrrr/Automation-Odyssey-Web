import React, { useState } from 'react';
import { Plus, Minus, Calendar, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

const faqs: FAQItem[] = [
  {
    question: 'Jak szybko działa bot?',
    answer: 'Bot odpowiada natychmiastowo, bez opóźnień. Jest w stanie obsłużyć tysiące połączeń jednocześnie, gwarantując zerowy czas oczekiwania dla Twoich klientów.',
  },
  {
    question: 'Czy chatbot integruje się z moim CRM?',
    answer: 'Tak, oferujemy pełne integracje z GoHighLevel, HubSpot, Pipedrive i Make.com. Twój bot może sam dodawać leady i rezerwować spotkania w kalendarzu.',
  },
  {
    question: 'Ile czasu trwa wdrożenie?',
    answer: 'Proste systemy wdrażamy w 48h. Bardziej zaawansowane orkiestracje procesów biznesowych zajmują od 5 do 14 dni roboczych.',
  },
  {
    question: 'Czy dane są bezpieczne?',
    answer: 'Bezpieczeństwo to nasz priorytet. Wszystkie dane są szyfrowane (SSL/TLS), a nasze serwery znajdują się w Unii Europejskiej, zapewniając pełną zgodność z RODO.',
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleBookingClick = () => {
    if (window.Cal) {
      window.Cal("ui", "open", { calLink: "automationodyssey.pl/konsultacja-ai" });
    } else {
      window.open("https://cal.com/automationodyssey.pl/konsultacja-ai", "_blank");
    }
  };

  return (
    <section id="faq" className="py-24 md:py-40 bg-[#050505] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-20">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 mb-6">
            <HelpCircle size={32} className="text-primary animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white tracking-tighter">
            Warto <span className="gradient-text">Wiedzieć.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light max-w-lg">
            Odpowiadamy na najczęstsze pytania dotyczące przyszłości Twojej firmy.
          </p>
        </div>

        <div className="space-y-3 mb-20">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`transition-all duration-500 rounded-[2rem] overflow-hidden border
                ${openIndex === index 
                  ? 'bg-white/5 border-white/20 shadow-2xl' 
                  : 'bg-transparent border-white/5 hover:border-white/10'
                }
              `}
            >
              <button
                type="button"
                className="w-full px-8 py-7 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-xl font-bold tracking-tight transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-gray-400'}`}>
                  {faq.question}
                </span>
                <div className={`transition-all duration-500 ${openIndex === index ? 'rotate-45 text-primary' : 'text-gray-600'}`}>
                  <Plus size={24} />
                </div>
              </button>
              <div 
                className={`transition-all duration-500 ease-luxury overflow-hidden ${
                  openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8 text-gray-400 text-lg font-light leading-relaxed border-t border-white/5 pt-6">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
           <div className="bg-[#0a0a0a] rounded-[2.4rem] p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white tracking-tight">Ciągle się wahasz?</h3>
              <p className="text-gray-400 mb-8 font-light">Daj nam 15 minut, a pokażemy Ci demo stworzone specjalnie pod Twój biznes.</p>
              <button 
                type="button"
                onClick={handleBookingClick}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-black text-lg uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                <Calendar size={20} />
                Zarezerwuj Termin
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};
