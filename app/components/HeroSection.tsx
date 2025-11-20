import React from 'react';
import { Calendar, MapPin, Monitor } from 'lucide-react';

export default function HeroSection() {
  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/bg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          <div className="max-w-2xl">
            {/* Title */}
            <h1 className="font-edo text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-white mb-3 sm:mb-2 leading-none">
            Plus qu’un match
              <span
                className="block"
                style={{ color: '#800000' }}
              >
                Une émotion
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed">
              L'expérience football ultime avec écran 360° au cœur de l'action
            </p>

            {/* Info Items - Compact */}
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 flex-shrink-0" style={{ color: '#0dc768' }} />
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">21 Décembre 2025 — 18 Janvier 2026</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: '#0dc768' }} />
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">Parc Vélodrome, Casablanca</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Monitor className="w-5 h-5 flex-shrink-0" style={{ color: '#0dc768' }} />
                <div>
                  <p className="text-white font-medium text-sm sm:text-base">Écran 360° Géant</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button 
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base text-white transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: '#800000',
                }}
              >
                Réserver Maintenant
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white rounded-lg font-semibold text-sm sm:text-base text-white hover:bg-white hover:text-black transition-all duration-300">
                En Savoir Plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}