import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, CheckCircle2, ShieldCheck, Zap, Globe, MessageSquare, Receipt, Users } from 'lucide-react';
import { QuantumCore } from './QuantumCore';
import { useLanguage } from '../src/LanguageContext';

const ProductCard = ({ icon: Icon, title, description, badge }: { icon: any, title: string, description: string, badge?: string }) => (
  <div className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all group">
    <div className="flex justify-between items-start mb-6">
      <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
        <Icon className="text-primary" size={24} />
      </div>
      {badge && <span className="text-[10px] bg-primary/20 text-primary px-3 py-1 rounded-full font-bold uppercase tracking-widest">{badge}</span>}
    </div>
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <p className="text-white/40 text-sm leading-relaxed">{description}</p>
  </div>
);

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleBookingClick = () => {
    window.open("https://cal.com/automationodyssey.pl/konsultacja-ai", "_blank");
  };

  return (
    <section className="relative w-full bg-[#020202] pt-32 pb-32 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,212,255,0.08),transparent_70%)] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          
          <div className={`w-full lg:w-3/5 text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-primary text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
              {t.hero.badge}
            </div>
            
            <h1 className="text-white font-black leading-[1.05] mb-8 text-[clamp(2.5rem,7vw,6rem)] tracking-tighter">
              {t.hero.titleMain}<br />
              <span className="gradient-text italic">{t.hero.titleHighlight}</span>
            </h1>
            
            <p className="text-xl text-white/40 font-light leading-relaxed max-w-2xl mb-12">
              {t.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button 
                  onClick={handleBookingClick} 
                  className="btn-luxury px-12 py-5 text-lg"
              >
                {t.hero.startProject}
                <ArrowRight size={20} className="ml-3" />
              </button>
              <a href="tel:+48729086144" className="flex items-center justify-center gap-3 px-10 py-5 rounded-full border border-white/10 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 transition-all">
                <Phone size={18} className="text-primary" />
                {t.hero.hotline}
              </a>
            </div>
          </div>

          <div className={`w-full lg:w-2/5 flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
             <QuantumCore />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            icon={MessageSquare}
            title={t.hero.products.dbr.title}
            description={t.hero.products.dbr.description}
            badge={t.hero.products.dbr.badge}
          />
          <ProductCard 
            icon={Zap}
            title={t.hero.products.speedToLead.title}
            description={t.hero.products.speedToLead.description}
            badge={t.hero.products.speedToLead.badge}
          />
          <ProductCard 
            icon={CheckCircle2}
            title={t.hero.products.reputation.title}
            description={t.hero.products.reputation.description}
          />
        </div>
      </div>
    </section>
  );
};
