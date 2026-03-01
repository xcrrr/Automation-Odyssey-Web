import React, { useEffect, useRef } from 'react';

export const QuantumCore: React.FC = () => {
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = coreRef.current;
    if (!el) return;
    const handleMouse = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      el.style.transform = `perspective(600px) rotateY(${dx * 15}deg) rotateX(${-dy * 15}deg)`;
    };
    const reset = () => { el.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)'; };
    window.addEventListener('mousemove', handleMouse);
    window.addEventListener('mouseleave', reset);
    return () => { window.removeEventListener('mousemove', handleMouse); window.removeEventListener('mouseleave', reset); };
  }, []);

  return (
    <div
      ref={coreRef}
      className="relative flex items-center justify-center w-full max-w-[320px] md:max-w-[420px] aspect-square mx-auto"
      style={{ transition: 'transform 0.15s ease-out' }}
    >
      {/* Outer glow */}
      <div className="absolute inset-0 rounded-full bg-primary/10 blur-[80px] animate-pulse" />
      <div className="absolute inset-[15%] rounded-full bg-secondary/10 blur-[60px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Orbit ring 1 */}
      <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
      {/* Orbit ring 2 */}
      <div className="absolute inset-[8%] rounded-full border border-dashed border-white/10 animate-spin-slow-rev" />
      {/* Orbit ring 3 */}
      <div className="absolute inset-[16%] rounded-full border border-secondary/20 animate-spin-slow" style={{ animationDuration: '20s' }} />

      {/* Orbiting dot 1 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute w-2.5 h-2.5 bg-primary rounded-full shadow-[0_0_12px_#00d4ff]"
          style={{ animation: 'orbit 7s linear infinite', transformOrigin: 'center' }}
        />
      </div>
      {/* Orbiting dot 2 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="absolute w-2 h-2 bg-secondary rounded-full shadow-[0_0_10px_#6366f1]"
          style={{ animation: 'orbit 11s linear infinite reverse', transformOrigin: 'center' }}
        />
      </div>

      {/* Core geometry */}
      <div className="relative w-32 h-32 md:w-44 md:h-44">
        {/* Background rotating squares */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-primary/10 backdrop-blur-xl border border-white/10 rotate-12 animate-spin-slow" style={{ animationDuration: '30s' }} />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-secondary/20 backdrop-blur-xl border border-primary/20 -rotate-12 animate-spin-slow-rev" style={{ animationDuration: '25s' }} />

        {/* Inner orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 w-14 h-14 md:w-20 md:h-20 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 bg-primary/30 rounded-full blur-xl animate-pulse" />
            <div
              className="w-14 h-14 md:w-20 md:h-20 rounded-full relative overflow-hidden"
              style={{ background: 'radial-gradient(circle at 35% 35%, #ffffff, #00d4ff 50%, #6366f1)', boxShadow: '0 0 30px rgba(0,212,255,0.6), 0 0 60px rgba(0,212,255,0.3)' }}
            >
              {/* Scanline on orb */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, rgba(0,0,0,0.5) 2px, rgba(0,0,0,0.5) 4px)'
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Cross hairs */}
      <div className="absolute w-[110%] h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent rotate-45" />
      <div className="absolute w-[110%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -rotate-45" />

      {/* Corner brackets */}
      <div className="absolute top-4 left-4 w-5 h-5 border-t-2 border-l-2 border-primary/60" />
      <div className="absolute top-4 right-4 w-5 h-5 border-t-2 border-r-2 border-primary/60" />
      <div className="absolute bottom-4 left-4 w-5 h-5 border-b-2 border-l-2 border-primary/60" />
      <div className="absolute bottom-4 right-4 w-5 h-5 border-b-2 border-r-2 border-primary/60" />

      {/* Status label */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_6px_#00d4ff]" />
        <span className="font-mono text-[9px] text-primary/70 uppercase tracking-widest">SYSTEM ONLINE</span>
      </div>
    </div>
  );
};
