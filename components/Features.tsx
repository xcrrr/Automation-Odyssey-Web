import React, { useRef, useState } from 'react';
import { Bot, Zap, Target, BarChart3 } from 'lucide-react';
import { useLanguage } from '../src/LanguageContext';

const BentoCard = ({
  icon: Icon, title, description, accentColor, className = ''
}: {
  icon: React.ElementType; title: string; description: string;
  accentColor: string; className?: string;
}) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <div className={`card-neon-wrap corner-bracket ${className}`}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="card-neon-inner relative overflow-hidden p-8 md:p-10 group cursor-default h-full"
      >
        {/* Mouse-follow spotlight */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[calc(1.5rem-1px)]"
          style={{ background: `radial-gradient(500px circle at ${pos.x}px ${pos.y}px, ${accentColor}18, transparent 50%)` }}
        />

        {/* Corner accent lines */}
        <div
          className="absolute top-0 left-0 w-24 h-0.5 opacity-40 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `linear-gradient(to right, ${accentColor}, transparent)` }}
        />
        <div
          className="absolute top-0 left-0 h-24 w-0.5 opacity-40 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `linear-gradient(to bottom, ${accentColor}, transparent)` }}
        />

        <div className="relative z-10">
          <div
            className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500 group-hover:scale-110"
            style={{ background: `${accentColor}12`, borderColor: `${accentColor}25` }}
          >
            <Icon size={26} style={{ color: accentColor }} />
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-4 tracking-tight text-white">{title}</h3>
          <p className="text-white/40 leading-relaxed text-base font-light">{description}</p>
        </div>

        <div className="absolute bottom-6 right-8 text-[40px] font-black opacity-[0.04] select-none" style={{ color: accentColor }}>
          AI
        </div>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  const { tr } = useLanguage();
  const f = tr.features;

  const cards = [
    { icon: Bot,       title: f.card1Title, description: f.card1Desc, color: '#00d4ff' },
    { icon: Zap,       title: f.card2Title, description: f.card2Desc, color: '#6366f1' },
    { icon: Target,    title: f.card3Title, description: f.card3Desc, color: '#ff006e' },
    { icon: BarChart3, title: f.card4Title, description: f.card4Desc, color: '#00d4ff' },
  ];

  return (
    <section id="features" className="py-20 md:py-32 px-6 bg-[#020205] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-primary/50" />
            <span className="text-primary text-[10px] font-bold uppercase tracking-[0.4em]">{f.sectionLabel}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-6 text-white">
            {f.heading} <span className="gradient-text">{f.headingAccent}</span>
          </h2>
          <p className="text-base md:text-xl text-white/40 max-w-2xl font-light">{f.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <BentoCard
              key={i}
              icon={c.icon}
              title={c.title}
              description={c.description}
              accentColor={c.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
