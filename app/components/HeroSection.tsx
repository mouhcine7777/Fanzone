"use client";
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
      </div>

      {/* Geometric grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #22c55e 1px, transparent 1px),
            linear-gradient(to bottom, #22c55e 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}></div>
      </div>

      {/* Diagonal accent lines */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-20">
        <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-green-500 to-transparent"></div>
        <div className="absolute top-20 right-0 w-full h-1 bg-gradient-to-l from-red-500 to-transparent"></div>
        <div className="absolute top-40 right-0 w-full h-1 bg-gradient-to-l from-green-400 to-transparent"></div>
      </div>

      <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-20">
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-transparent"></div>
        <div className="absolute bottom-20 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-transparent"></div>
        <div className="absolute bottom-40 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 py-8">
        <div 
          className={`w-full max-w-7xl mx-auto transform transition-all duration-1000 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          {/* Top label */}
          <div className="mb-4 md:mb-6">
            <div className="inline-block border-l-4 border-green-500 pl-4">
              <p className="text-xs sm:text-sm md:text-base font-bold text-green-400 tracking-[0.3em] uppercase">
                CAN 2025 Casablanca
              </p>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-4 md:mb-6">
            <h1 className="font-forsela text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
              <span className="block">FANZONE</span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 md:mt-3 text-white/90">
                ARENA VÉLODROME
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-6 md:mb-8 max-w-3xl">
            <div className="border-l-2 border-red-500 pl-6 py-2">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-white/90 leading-tight">
                L'expérience immersive 360° de la CAN 2025
              </p>
            </div>
          </div>

          {/* Date and CTA Row */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 mb-12">
            {/* Date */}
            <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 px-6 py-4">
              <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-red-500 mr-4"></div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Période</p>
                <p className="text-base sm:text-lg font-semibold text-white">
                  21 Décembre 2025 — 18 Janvier 2026
                </p>
              </div>
            </div>

            {/* CTA */}
            <button 
              onClick={() => {
                console.log('Booking clicked');
              }}
              className="group relative inline-flex items-center bg-gradient-to-r from-green-600 to-green-500 px-8 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 hover:scale-[1.02]"
            >
              <span className="text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                Réserver vos billets
              </span>
              <svg 
                className="w-5 h-5 ml-3 text-white transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300"></div>
            </button>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            {[
              { label: 'Tous les matchs en direct', value: '52' },
              { label: 'Écrans HD géants', value: '4K' },
              { label: 'Capacité d\'accueil', value: '5000+' },
              { label: 'Animations live', value: '24/7' }
            ].map((item, i) => (
              <div 
                key={i}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-4 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300"
              >
                <p className="text-2xl sm:text-3xl font-bold text-white mb-1">{item.value}</p>
                <p className="text-xs sm:text-sm text-white/70 uppercase tracking-wide">{item.label}</p>
                
                {/* Accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-500 to-red-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-green-500/30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-red-500/30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-red-500/30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-green-500/30"></div>
    </div>
  );
}