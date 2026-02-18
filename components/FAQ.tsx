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
      question: "Czy to się opłaca małej firmie?",
      answer: "Zdecydowanie. Nasze systemy kosztują ułamek pensji pracownika, a pracują 24/7. System Speed-to-Lead zwraca się zazwyczaj już przy pierwszym uratowanym leadzie, który inaczej poszedłby do konkurencji."
    },
    {
      question: "Czy wystawiacie faktury VAT?",
      answer: "Tak. Jako profesjonalna agencja działająca w ramach inkubatora przedsiębiorczości wystawiamy faktury VAT, które możesz wliczyć w koszty prowadzenia działalności."
    },
    {
      question: "Czy muszę znać się na technologii?",
      answer: "Absolutnie nie. My zajmujemy się wszystkim – od konfiguracji serwerów po pisanie skryptów rozmów. Ty otrzymujesz gotowy panel i powiadomienia o nowych klientach na telefon."
    },
    {
      question: "Czy AI nie popsuje mojej reputacji?",
      answer: "Wręcz przeciwnie. Nasze boty są zawsze uprzejme, nigdy nie zapominają o oddzwonieniu i zbierają tylko pozytywne opinie. W razie trudnych pytań system płynnie przekazuje kontakt do Ciebie."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-[#020202]">
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
