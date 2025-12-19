import React from 'react';
import { Calendar, MapPin, Monitor, Ticket } from 'lucide-react';

export default function HeroSection() {
  const ticketUrl =
    "https://guichet.com/ma-fr/event/sport/fanzone-arena-vivez-la-can-2025-a-360-a-casablanca-5326";

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/bg.jpg)' }}
      >
        {/* Lighter gradient - more transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        
        {/* Additional shadow vignette on the left for text readability - even stronger */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black/60 to-transparent" />
      </div>

      {/* Colorful Energy - Left Side Only */}
      <div className="absolute top-0 left-0 bottom-0 w-1/2 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-40 bg-gradient-to-r from-green-500/20 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-0 w-full h-48 bg-gradient-to-r from-yellow-400/20 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-full h-40 bg-gradient-to-r from-orange-500/20 to-transparent blur-3xl" />
      </div>


      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
          <div className="max-w-2xl">

            {/* TITLE (original red boxes) */}
            <h1
              className="font-edo text-white mb-3 leading-none
                         text-4xl sm:text-6xl md:text-7xl lg:text-7xl"
            >
              <span className="inline-block bg-[#8b0000] px-2 sm:px-4 py-2 transform -skew-x-12 italic">
                <span className="inline-block transform skew-x-12 whitespace-nowrap">PLUS QU&apos;UN MATCH</span>
              </span>

              <span
                className="block mt-2 inline-block bg-[#8b0000] px-2 sm:px-4 py-2 transform -skew-x-12"
              >
                <span className="inline-block transform skew-x-12 italic ">UNE ÉMOTION</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-white mb-8 sm:mb-10 md:mb-12 leading-relaxed font-semibold drop-shadow-lg">
              L'expérience football ultime avec écran 360° au cœur de l'action
            </p>

            {/* Info Items */}
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5" style={{ color: '#0dc768' }} />
                <p className="text-white font-medium text-sm sm:text-base drop-shadow-md">
                  21 Décembre 2025 — 18 Janvier 2026
                </p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" style={{ color: '#0dc768' }} />
                <p className="text-white font-medium text-sm sm:text-base drop-shadow-md">
                  Parc Vélodrome, Casablanca
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Monitor className="w-5 h-5" style={{ color: '#0dc768' }} />
                <p className="text-white font-medium text-sm sm:text-base drop-shadow-md">
                  Écran 360° Géant
                </p>
              </div>
            </div>

            {/* Bold CTA Button - Mobile Responsive */}
            <div className="inline-block">
              <a
                href={ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-4 bg-gradient-to-r from-green-500 to-emerald-600
                           text-white font-black text-sm sm:text-lg md:text-xl px-4 sm:px-10 py-3 sm:py-6 
                           transition-all duration-300 transform hover:scale-105
                           shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
                           hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                           border-2 sm:border-4 border-black uppercase tracking-wide"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))'
                }}
              >
                <Ticket className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
                <span>Acheter vos billets</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}