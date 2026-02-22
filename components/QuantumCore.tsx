import React from 'react';

export const QuantumCore: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-full max-w-[300px] md:max-w-[500px] aspect-square mx-auto">
      {/* Dynamic Glow Layer */}
      <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full animate-pulse"></div>
      
      {/* The Core - Abstract Glass Geometry */}
      <div className="relative w-48 h-48 md:w-80 md:h-80 group">
        {/* Rotating Rings */}
        <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
        <div className="absolute inset-4 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
        
        {/* Glass Plates */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent backdrop-blur-3xl border border-white/20 rounded-[2.5rem] rotate-12 transition-all duration-1000 group-hover:rotate-[25deg] group-hover:scale-105 shadow-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] -rotate-12 transition-all duration-1000 group-hover:-rotate-[15deg] group-hover:scale-110 shadow-primary/20 shadow-xl"></div>
        
        {/* Floating Inner Orb */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 md:w-40 md:h-40 bg-white rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="w-16 h-16 md:w-28 md:h-28 bg-gradient-to-br from-white via-primary to-secondary rounded-full shadow-[0_0_80px_rgba(0,212,255,0.6)] flex items-center justify-center overflow-hidden">
             {/* Inner Core Detail */}
             <div className="w-full h-full bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]"></div>
          </div>
        </div>
      </div>

      {/* Atmospheric Orbitals */}
      <div className="absolute w-[140%] h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent rotate-45 animate-pulse"></div>
      <div className="absolute w-[140%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45"></div>
    </div>
  );
};
