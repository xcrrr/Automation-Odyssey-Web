import React from 'react';
import { useLanguage } from '../src/LanguageContext';

export const Comparison: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="comparison" className="py-32 px-6 scroll-mt-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-7xl font-black mb-20 text-center tracking-tighter uppercase">
          {t.comparison.title} <span className="gradient-text">{t.comparison.titleHighlight}</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 relative">
          {/* Vertical Divider for desktop */}
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/10 hidden md:block"></div>
          
          {/* Human Side */}
          <div className="bg-white/[0.02] border border-white/5 p-10 md:p-16 rounded-[3rem] transition-all duration-500 hover:bg-white/[0.04]">
            <div className="text-white/20 text-xs font-black uppercase tracking-[0.3em] mb-6">
              {t.comparison.human.label}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-10 text-white">
              {t.comparison.human.title}
            </h3>
            <ul className="space-y-6">
              {t.comparison.human.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4 text-white/40 group">
                  <span className="text-red-500/50 font-black mt-1 group-hover:text-red-500 transition-colors">✕</span>
                  <span className="text-lg font-light leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Side */}
          <div className="bg-primary/5 border border-primary/20 p-10 md:p-16 rounded-[3rem] transition-all duration-500 hover:bg-primary/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
               <div className="w-24 h-24 bg-primary rounded-full blur-3xl"></div>
            </div>
            
            <div className="text-primary text-xs font-black uppercase tracking-[0.3em] mb-6">
              {t.comparison.ai.label}
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-10 text-white">
              {t.comparison.ai.title}
            </h3>
            <ul className="space-y-6">
              {t.comparison.ai.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-4 text-white group">
                  <span className="text-primary font-black mt-1 shadow-[0_0_10px_rgba(0,212,255,0.5)]">✓</span>
                  <span className="text-lg font-light leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
