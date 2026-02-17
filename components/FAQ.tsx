import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 mb-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-primary transition-colors"
      >
        <span className="text-lg md:text-xl font-bold text-white">{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[500px] pb-6' : 'max-h-0'}`}>
        <p className="text-white/50 leading-relaxed italic">{answer}</p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Czy AI brzmi jak robot?",
      answer: "Nie. Używamy najnowocześniejszych modeli mowy (GPT-4o + Echo), które zachowują naturalną intonację, potrafią robić pauzy i reagują w czasie rzeczywistym. W większości przypadków klienci nie orientują się, że rozmawiają z AI."
    },
    {
      question: "Jak wygląda kwestia prawna i RODO w Polsce?",
      answer: "Wszystkie nasze wdrożenia są zgodne z polskim prawem. Bot informuje o nagrywaniu rozmowy, a dane są przetwarzane na bezpiecznych, europejskich serwerach. Przygotowujemy pełną dokumentację prawną dla Twojej firmy."
    },
    {
      question: "Ile czasu zajmuje wdrożenie?",
      answer: "Standardowy system rekrutacyjny lub voicebot sprzedażowy uruchamiamy w ciągu 7-14 dni roboczych, wliczając w to testy i tuning skryptów."
    },
    {
      question: "Co jeśli bot nie będzie znał odpowiedzi na pytanie?",
      answer: "System jest zaprogramowany tak, aby w razie wątpliwości grzecznie zasugerować kontakt z człowiekiem lub przekazać prośbę o oddzwonienie do właściciela firmy."
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-[#020202]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-white text-center">
          Pytania i <span className="gradient-text italic">Odpowiedzi.</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};
