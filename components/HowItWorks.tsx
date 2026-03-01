import React from 'react';
import { Settings, Mic, Link, CheckCircle } from 'lucide-react';
import { useLanguage } from '../src/LanguageContext';

const ICONS = [Settings, Mic, Link, CheckCircle];
const COLORS = ['#00d4ff', '#6366f1', '#ff006e', '#00d4ff'];

export const HowItWorks: React.FC = () => {
  const { tr } = useLanguage();
  const p = tr.process;

  const steps = [
    { title: p.step1Title, desc: p.step1Desc },
    { title: p.step2Title, desc: p.step2Desc },
    { title: p.step3Title, desc: p.step3Desc },
    { title: p.step4Title, desc: p.step4Desc },
  ];

  const handleBookingClick = () => {
    window.open('https://cal.com/automationodyssey.pl/konsultacja-ai', '_blank');
  };

  return (
    <section id="how-it-works" className="py-24 md:py-40 bg-[#050202] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(99,102,241,0.06),transparent_50%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/50" />
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">{p.methodologyLabel}</span>
            <div className="h-px w-8 bg-primary/50" />
          </div>
          <h2 className="text-4xl md:text-7xl font-heading font-black mb-6 text-white tracking-tighter uppercase">
            {p.heading} <span className="gradient-text">{p.headingAccent}</span>
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light max-w-2xl mx-auto">{p.subtitle}</p>
        </div>

        <div className="relative">
          {/* Horizontal connector (desktop) */}
          <div className="hidden md:block absolute top-[2.5rem] left-[calc(12.5%)] right-[calc(12.5%)] h-px">
            <div className="w-full h-full bg-gradient-to-r from-primary/40 via-secondary/40 to-primary/40" />
            <div
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_#00d4ff]"
              style={{ animation: 'travelDot 4s linear infinite' }}
            />
          </div>

          {/* Vertical connector (mobile) */}
          <div className="md:hidden absolute top-0 bottom-0 left-8 w-px bg-gradient-to-b from-primary/40 via-secondary/40 to-primary/40" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 md:gap-6">
            {steps.map((step, i) => {
              const Icon = ICONS[i];
              const color = COLORS[i];
              return (
                <div key={i} className="relative pl-20 md:pl-0 pb-12 md:pb-0">
                  <div className="md:flex md:justify-center md:mb-8">
                    <div
                      className="absolute left-0 md:relative w-16 h-16 rounded-2xl flex items-center justify-center border-2 bg-[#050202] z-10 transition-all duration-500 hover:scale-110"
                      style={{ borderColor: `${color}60`, boxShadow: `0 0 20px ${color}20` }}
                    >
                      <div
                        className="absolute inset-[-4px] rounded-[14px] border animate-pulse"
                        style={{ borderColor: `${color}20` }}
                      />
                      <Icon size={22} style={{ color }} />
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black border"
                        style={{ background: color, borderColor: color, color: '#000' }}
                      >
                        {i + 1}
                      </div>
                    </div>
                  </div>

                  <div className="group p-5 md:p-6 rounded-2xl border border-white/5 bg-white/[0.02] transition-all duration-400 hover:border-white/10 hover:bg-white/[0.04]">
                    <h3 className="text-base font-bold uppercase tracking-widest mb-3" style={{ color }}>
                      {step.title}
                    </h3>
                    <p className="text-gray-500 font-light leading-relaxed text-sm">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <button onClick={handleBookingClick} className="btn-luxury">{p.cta}</button>
        </div>
      </div>

      <style>{`
        @keyframes travelDot {
          0%   { left: 0%; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
};
