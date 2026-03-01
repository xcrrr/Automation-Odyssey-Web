import React, { useState, useEffect } from 'react';
import { Compass, Menu, X } from 'lucide-react';
import { useLanguage } from '../src/LanguageContext';

export const Header: React.FC = () => {
  const { lang, setLang, tr } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookingClick = () => {
    window.open('https://cal.com/automationodyssey.pl/konsultacja-ai', '_blank');
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (targetId.startsWith('#')) {
      if (targetId === '#privacy' || targetId === '#terms') return;
      e.preventDefault();
      const el = document.getElementById(targetId.replace('#', ''));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsMenuOpen(false);
      } else {
        window.location.href = '/' + targetId;
      }
    }
  };

  const navLinks = [
    { name: tr.nav.strategy, href: '#features' },
    { name: tr.nav.process,  href: '#how-it-works' },
    { name: tr.nav.faq,      href: '#faq' },
  ];

  return (
    <div className="fixed w-full z-50 top-0 left-0 px-4 py-4 md:py-5 pointer-events-none">
      <nav
        className={`max-w-6xl mx-auto transition-all duration-500 rounded-3xl pointer-events-auto border
          ${isScrolled
            ? 'bg-[#06060a]/85 backdrop-blur-2xl border-primary/10 shadow-[0_0_40px_rgba(0,212,255,0.05)] py-2 px-6'
            : 'bg-transparent border-transparent py-4 px-4'
          }`}
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => {
              if (window.location.hash) window.location.href = '/';
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] group-hover:shadow-[0_0_16px_rgba(0,212,255,0.7)]">
              <Compass className="h-6 w-6" />
            </div>
            <span className="font-heading font-black text-xl tracking-tighter text-white group-hover:text-primary transition-colors">
              ODYSSEY
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-400 hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer relative group/link"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover/link:w-full" />
                </a>
              ))}
            </div>

            <div className="h-6 w-px bg-white/10 mx-1" />

            {/* Language toggle */}
            <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-0.5">
              {(['pl', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                    lang === l
                      ? 'bg-primary text-black shadow-[0_0_10px_rgba(0,212,255,0.5)]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={handleBookingClick}
              className="px-6 py-2.5 bg-primary text-black rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.35)]"
            >
              {tr.nav.cta}
            </button>
          </div>

          {/* Mobile burger */}
          <div className="flex md:hidden items-center gap-3">
            <div className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-0.5">
              {(['pl', 'en'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest transition-all duration-300 ${
                    lang === l ? 'bg-primary text-black' : 'text-gray-400'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="p-2 text-white hover:bg-white/10 rounded-xl transition-colors"
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden absolute top-[calc(100%+0.75rem)] left-0 w-full px-4 transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className="bg-[#08080f] backdrop-blur-3xl border border-primary/10 rounded-[2rem] p-6 shadow-2xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-400 hover:text-primary text-lg font-bold tracking-tight py-2 transition-colors border-b border-white/5 last:border-0"
                >
                  {link.name}
                </a>
              ))}
              <button
                type="button"
                onClick={() => { handleBookingClick(); setIsMenuOpen(false); }}
                className="w-full py-4 bg-primary text-black rounded-2xl font-black uppercase tracking-widest mt-2 shadow-[0_0_20px_rgba(0,212,255,0.3)]"
              >
                {tr.nav.ctaMobile}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
