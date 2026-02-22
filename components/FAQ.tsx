import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../src/LanguageContext';

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
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-[#020202]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black mb-16 text-white text-center">
          {t.faq.title} <span className="gradient-text italic">{t.faq.titleHighlight}</span>
        </h2>
        <div className="space-y-4">
          {t.faq.items.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};
