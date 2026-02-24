import React, { useEffect, useRef } from 'react';

export const CelestialBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    const starCount = 300; // Increased density

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2, // Slightly larger stars
        speed: Math.random() * 0.15 + 0.05, // Faster movement
        opacity: Math.random()
      });
    }

    const animate = () => {
      ctx.fillStyle = '#020202';
      ctx.fillRect(0, 0, width, height);

      // Enhanced Nebula Glows
      const grad1 = ctx.createRadialGradient(width * 0.3, height * 0.3, 0, width * 0.3, height * 0.3, 600);
      grad1.addColorStop(0, 'rgba(0, 212, 255, 0.06)');
      grad1.addColorStop(1, 'transparent');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(width * 0.7, height * 0.6, 0, width * 0.7, height * 0.6, 800);
      grad2.addColorStop(0, 'rgba(99, 102, 241, 0.05)');
      grad2.addColorStop(1, 'transparent');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      stars.forEach(star => {
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }
        
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
        
        // Dynamic Twinkle
        star.opacity += (Math.random() - 0.5) * 0.03;
        if (star.opacity < 0.1) star.opacity = 0.1;
        if (star.opacity > 0.9) star.opacity = 0.9;
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};
