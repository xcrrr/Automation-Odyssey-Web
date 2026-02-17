import React, { useEffect, useRef } from 'react';

export const QuantumCore: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = 800;
    let height = canvas.height = 800;
    
    const particles: any[] = [];
    const particleCount = 150;
    
    class Particle {
      x: number; y: number; r: number; color: string; 
      angle: number; orbit: number; speed: number;
      opacity: number;
      
      constructor() {
        this.reset();
      }
      
      reset() {
        this.orbit = 50 + Math.random() * 150;
        this.angle = Math.random() * Math.PI * 2;
        this.speed = 0.005 + Math.random() * 0.01;
        this.r = 0.5 + Math.random() * 2;
        this.opacity = 0.1 + Math.random() * 0.5;
        this.color = Math.random() > 0.5 ? '#00d4ff' : '#6366f1';
      }
      
      update() {
        this.angle += this.speed;
        this.x = 400 + Math.cos(this.angle) * this.orbit;
        this.y = 400 + Math.sin(this.angle) * this.orbit * 0.6; // Elliptical galaxy
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        
        // Bloom
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      // Trail effect for smooth motion
      ctx.fillStyle = 'rgba(2, 2, 2, 0.15)';
      ctx.globalAlpha = 1;
      ctx.fillRect(0, 0, width, height);

      // 1. Central Singularity (Nebula Glow)
      const grad = ctx.createRadialGradient(400, 400, 0, 400, 400, 250);
      grad.addColorStop(0, 'rgba(0, 212, 255, 0.2)');
      grad.addColorStop(0.4, 'rgba(99, 102, 241, 0.05)');
      grad.addColorStop(1, 'transparent');
      
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(400, 400, 250, 0, Math.PI * 2);
      ctx.fill();

      // 2. Swirling Particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      // 3. Focal Core (Glassy Center)
      const coreGrad = ctx.createRadialGradient(380, 380, 10, 400, 400, 100);
      coreGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
      coreGrad.addColorStop(0.2, 'rgba(0, 212, 255, 0.4)');
      coreGrad.addColorStop(1, 'rgba(2, 2, 2, 0.8)');
      
      ctx.globalAlpha = 1;
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(400, 400, 100, 0, Math.PI * 2);
      ctx.fill();
      
      // Rim Light
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative flex items-center justify-center pointer-events-none">
       {/* Pure Atmospheric Glow */}
       <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"></div>
       
       <canvas 
        ref={canvasRef} 
        width={800} 
        height={800} 
        className="relative z-10 w-full h-full max-w-[350px] md:max-w-[700px] mix-blend-screen"
       />
    </div>
  );
};
