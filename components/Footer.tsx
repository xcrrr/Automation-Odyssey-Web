import React from 'react';
import { Compass, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '../src/LanguageContext';
import { RevealOnScroll } from './RevealOnScroll';

export const Footer: React.FC = () => {
  const { tr } = useLanguage();
  const f = tr.footer;

  return (
    <footer id="contact" className="bg-[#030308] pt-24 pb-12 border-t border-primary/10 relative overflow-hidden z-10">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/[0.04] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 perspective-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Brand */}
          <div className="md:col-span-5">
            <div
              className="flex items-center gap-4 mb-6 group cursor-pointer w-fit"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-12 h-12 bg-white text-black rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] group-hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]">
                <Compass size={24} />
              </div>
              <span className="font-heading font-black text-2xl tracking-tighter text-white group-hover:text-primary transition-colors">
                ODYSSEY
              </span>
            </div>
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-md mb-8">{f.tagline}</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/adam-parszewski/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/40 hover:shadow-[0_0_12px_rgba(0,212,255,0.3)] transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com/xcrrr/Automation-Odyssey"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary/40 hover:shadow-[0_0_12px_rgba(0,212,255,0.3)] transition-all"
              >
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-primary/50" />
              {f.navHeading}
            </h4>
            <ul className="space-y-3">
              {[
                { label: f.strategy, href: '#features' },
                { label: f.process,  href: '#how-it-works' },
                { label: f.support,  href: '#faq' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-gray-500 hover:text-primary transition-colors font-medium text-sm flex items-center gap-2 group/link"
                  >
                    <span className="w-0 group-hover/link:w-3 h-px bg-primary transition-all duration-300" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-white font-black uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2">
              <span className="w-4 h-px bg-primary/50" />
              {f.contactHeading}
            </h4>
            <ul className="space-y-5">
              <li>
                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1 block">Email</span>
                <a href="mailto:automationodyssey@gmail.com" className="text-white hover:text-primary transition-colors font-bold text-sm flex items-center gap-2">
                  <Mail size={14} className="text-primary flex-shrink-0" />
                  automationodyssey@gmail.com
                </a>
              </li>
              <li>
                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1 block">Tel</span>
                <a href="tel:+48729086144" className="text-white hover:text-primary transition-colors font-bold text-sm flex items-center gap-2">
                  <Phone size={14} className="text-primary flex-shrink-0" />
                  +48 729 086 144
                </a>
              </li>
              <li>
                <span className="text-[9px] font-black text-gray-600 uppercase tracking-widest mb-1 block">HQ</span>
                <span className="text-gray-500 text-sm">Niemierzyńska 17, 71-441 Szczecin, PL</span>
              </li>
            </ul>
          </div>
        </div>
        </RevealOnScroll>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-gray-600 text-xs font-light font-mono">
            &copy; {new Date().getFullYear()} {f.copyright}
          </p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="text-gray-600 hover:text-primary text-[10px] font-black uppercase tracking-widest transition-colors">{f.privacy}</a>
            <span className="text-gray-700">·</span>
            <a href="#terms" className="text-gray-600 hover:text-primary text-[10px] font-black uppercase tracking-widest transition-colors">{f.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
