import React, { useState, useEffect, useRef } from 'react';
import { Phone, ArrowRight, MessageSquare, Zap, CheckCircle2, Star } from 'lucide-react';
import { QuantumCore } from './QuantumCore';
import { useLanguage } from '../src/LanguageContext';

const useCountUp = (target: number, duration = 1800, startDelay = 0) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const timer = setTimeout(() => {
      let start: number | null = null;
      const step = (ts: number) => {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, startDelay);
    return () => clearTimeout(timer);
  }, [started, target, duration, startDelay]);

  return { count, ref };
};

const StatCard = ({
  value, suffix, label, delay
}: { value: number; suffix: string; label: string; delay: number }) => {
  const { count, ref } = useCountUp(value, 1600, delay);
  return (
    <div ref={ref} className="flex flex-col items-center px-6 py-4 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur">
      <div className="stat-number text-2xl md:text-3xl font-bold text-primary mb-1">
        {count}{suffix}
      </div>
      <div className="text-[10px] text-white/30 uppercase tracking-[0.25em] font-bold">{label}</div>
    </div>
  );
};

const ProductCard = ({
  icon: Icon, title, description, badge, accentColor, learnMore
}: {
  icon: React.ElementType; title: string; description: string;
  badge?: string; accentColor: string; learnMore: string;
}) => (
  <div className="card-neon-wrap group h-full">
    <div className="card-neon-inner corner-bracket p-6 flex flex-col gap-4 h-full">
      <div className="flex items-start justify-between">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center border"
          style={{ background: `${accentColor}15`, borderColor: `${accentColor}30` }}
        >
          <Icon size={20} style={{ color: accentColor }} />
        </div>
        {badge && (
          <span
            className="text-[9px] px-2.5 py-1 rounded-full font-bold uppercase tracking-widest border"
            style={{ color: accentColor, background: `${accentColor}15`, borderColor: `${accentColor}30` }}
          >
            {badge}
          </span>
        )}
      </div>
      <div>
        <h3 className="text-base font-bold text-white mb-2">{title}</h3>
        <p className="text-white/40 text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-auto pt-3 border-t border-white/5">
        <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: accentColor }}>
          ▶ {learnMore}
        </span>
      </div>
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const { tr } = useLanguage();
  const h = tr.hero;
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setTypedText('');
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(h.subtitle.slice(0, i + 1));
      i++;
      if (i >= h.subtitle.length) clearInterval(interval);
    }, 28);
    return () => clearInterval(interval);
  }, [h.subtitle]);

  const handleBookingClick = () => {
    window.open('https://cal.com/automationodyssey.pl/konsultacja-ai', '_blank');
  };

  return (
    <section className="relative w-full bg-[#020202] pt-28 pb-24 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_50%_-10%,rgba(0,212,255,0.12),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left */}
          <div className="flex flex-col gap-8 opacity-100 translate-y-0">
            <div className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_6px_#00d4ff]" />
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.35em]">{h.badge}</span>
            </div>

            <h1 className="text-white font-black leading-[1.0] text-[clamp(2.6rem,6.5vw,5.5rem)] tracking-tighter glitch">
              {h.headline1}<br />
              {h.headline2}{' '}
              <span className="gradient-text italic">{h.headline3}</span>
            </h1>

            <div className="relative">
              <p className="text-lg text-white/50 font-light leading-relaxed max-w-xl min-h-[3.5rem]">
                {typedText}
                <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 align-middle animate-blink" />
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={handleBookingClick} className="btn-luxury px-10 py-4 text-base">
                {h.cta1}
                <ArrowRight size={18} className="ml-2" />
              </button>
              <a href="tel:+48729086144" className="btn-neon px-8 py-4 text-sm">
                <Phone size={16} className="mr-2" />
                {h.cta2}
              </a>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="text-primary fill-primary" />
                ))}
                <span className="text-white/30 text-xs ml-1.5">{h.trustRating}</span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-white/30 text-xs font-medium">{h.trustInvoice}</span>
              <div className="w-px h-4 bg-white/10" />
              <span className="text-white/30 text-xs font-medium">{h.trustSla}</span>
            </div>
          </div>

          {/* Right – QuantumCore */}
          <div className="opacity-100 translate-y-0">
            <QuantumCore />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-24 max-w-2xl mx-auto">
          <StatCard value={h.stat1Value} suffix={h.stat1Suffix} label={h.stat1Label} delay={300} />
          <StatCard value={h.stat2Value} suffix={h.stat2Suffix} label={h.stat2Label} delay={500} />
          <StatCard value={h.stat3Value} suffix={h.stat3Suffix} label={h.stat3Label} delay={700} />
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProductCard icon={MessageSquare} title={h.card1Title} description={h.card1Desc} badge={h.card1Badge} accentColor="#00d4ff" learnMore={h.learnMore} />
          <ProductCard icon={Zap}          title={h.card2Title} description={h.card2Desc} badge={h.card2Badge} accentColor="#6366f1" learnMore={h.learnMore} />
          <ProductCard icon={CheckCircle2} title={h.card3Title} description={h.card3Desc}                       accentColor="#ff006e" learnMore={h.learnMore} />
        </div>
      </div>
    </section>
  );
};
