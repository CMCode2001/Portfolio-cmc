import React, { useEffect, useRef } from 'react';
import { ArrowDown, Play, Sparkles } from 'lucide-react';
import ProfilePic from '../assets/img/as.jpg';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animated particles
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: Math.random() > 0.5 ? '#00D9FF' : '#FF0080'
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 20;
        ctx.shadowColor = particle.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div>
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 md:pt-0">
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-magenta-500/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-magenta-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-10">
        

        {/* Animated badge */}
        <div className=" inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8 group hover:bg-white/20 transition-all duration-300">
          <Sparkles className="w-4 h-4 text-cyan-300 animate-spin" />
          <span className="text-white/90 font-medium">Expérience Révolutionnaire</span>
        </div>
        {/* Photo de profil */}
        <div className="flex justify-center mb-8">
          <img
            src={ProfilePic}
            alt="Photo de profil"
            className="w-36 h-36 rounded-full border-4 border-cyan-400 shadow-lg object-cover bg-white/10"
            style={{ objectPosition: 'center' }}
          />
        </div>
        {/* Main title with cinematic effect */}
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-magenta-400 mb-6 animate-pulse">
          <span className="block">DESIGN</span>
          <span className="block text-5xl md:text-7xl bg-gradient-to-r from-magenta-400 via-cyan-400 to-white bg-clip-text">
            THE FUTURE
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Fusion créative entre <span className="text-cyan-300 font-semibold">art numérique</span>, 
          <span className="text-magenta-300 font-semibold"> motion design</span> et 
          <span className="text-purple-300 font-semibold"> innovation UX</span>
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full font-bold text-white hover:scale-105 transition-all duration-300 flex items-center space-x-3">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Découvrir l'Univers</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-magenta-500 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
          </button>

          <button className="group px-8 py-4 border-2 border-white/30 rounded-full font-bold text-white hover:border-cyan-300 hover:text-cyan-300 hover:bg-white/10 transition-all duration-300">
            Portfolio Immersif
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 text-white/60 mx-auto" />
        </div>
      </div>

      {/* Cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none"></div>
    </section>
    </div>
  );
}