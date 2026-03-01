import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../src/LanguageContext';
import { RevealOnScroll } from './RevealOnScroll';

const FAQItem = ({ question, answer, index }: { question: string; answer: string; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const accent = index % 2 === 0 ? '#00d4ff' : '#6366f1';

  return (
    <div
      className={`rounded-2xl border transition-all duration-500 overflow-hidden ${
        isOpen ? 'border-primary/30 bg-white/[0.03]' : 'border-white/5 bg-white/[0.015] hover:border-white/10'
      }`}
      style={isOpen ? { boxShadow: `0 0 30px ${accent}10` } : {}}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex justify-between items-center text-left gap-6"
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs font-bold flex-shrink-0 w-6 text-right" style={{ color: accent }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-base md:text-lg font-bold text-white">{question}</span>
        </div>
        <div
          className="w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300"
          style={isOpen ? { borderColor: accent, background: `${accent}15`, color: accent } : { borderColor: '#ffffff15', color: '#666' }}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <div className={`transition-all duration-500 ease-luxury overflow-hidden ${isOpen ? 'max-h-[400px]' : 'max-h-0'}`}>
        <div className="pb-6 px-6 pl-16 md:pl-20">
          <div className="h-px w-full mb-4 opacity-30" style={{ background: `linear-gradient(to right, ${accent}, transparent)` }} />
          <p className="text-white/50 leading-relaxed text-sm md:text-base">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const { tr } = useLanguage();
  const f = tr.faq;

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-[#020202] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="max-w-4xl mx-auto relative z-10">
        <RevealOnScroll>
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-primary/50" />
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">{f.faqLabel}</span>
              <div className="h-px w-8 bg-primary/50" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white">
              {f.heading} <span className="gradient-text italic">{f.headingAccent}</span>
            </h2>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-3">
          {f.items.map((item, i) => (
            <RevealOnScroll key={i} delay={i * 100}>
              <FAQItem question={item.q} answer={item.a} index={i} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
