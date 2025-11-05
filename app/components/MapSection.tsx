"use client";
import { useState, useEffect, useRef } from 'react';

export default function BookingLocationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #22c55e 1px, transparent 1px),
            linear-gradient(to bottom, #22c55e 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}></div>
      </div>

      {/* Glowing elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>

      {/* Diagonal accent lines */}
      <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>

      <div className="relative h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full py-12">
            
            {/* Left Side - Booking CTA */}
            <div 
              className={`transform transition-all duration-1000 ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
              }`}
            >
              <div className="relative">
                {/* Decorative corner */}
                <div className="absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-green-500/40"></div>

                {/* Label */}
                <div className="inline-block border-l-4 border-green-500 pl-6 mb-6">
                  <p className="text-xs sm:text-sm font-bold text-green-400 tracking-[0.3em] uppercase">
                    Ne Ratez Rien
                  </p>
                </div>

                {/* Title */}
                <h2 className="font-forsela text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                  RÉSERVEZ VOTRE{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-red-500">
                    PLACE
                  </span>
                </h2>

                {/* Accent line */}
                <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-red-500 mb-8"></div>

                {/* Description */}
                <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
                  Assurez-vous d'avoir votre billet pour l'expérience CAN 2025 incontournable !
                </p>

                {/* CTA Button */}
                <button 
                  onClick={() => {
                    console.log('Booking clicked');
                  }}
                  className="group relative inline-flex items-center bg-gradient-to-r from-green-600 to-green-500 px-8 py-5 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/40 hover:scale-105 overflow-hidden mb-8"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  
                  <span className="relative text-base md:text-lg font-black text-white uppercase tracking-wider">
                    Réserver Maintenant
                  </span>
                  
                  <svg 
                    className="relative w-5 h-5 ml-4 text-white transform group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                {/* Info badges */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { text: 'Places Limitées' },
                    { text: 'Confirmation Immédiate' },
                    { text: 'Billets Numériques' }
                  ].map((badge, i) => (
                    <div 
                      key={i}
                      className="inline-flex items-center bg-white/5 border border-white/20 px-4 py-2 backdrop-blur-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-green-500 mr-2 rounded-full"></div>
                      <span className="text-xs md:text-sm text-white/80 font-medium">{badge.text}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom corner */}
                <div className="absolute -bottom-6 -right-6 w-20 h-20 border-b-2 border-r-2 border-red-500/40"></div>
              </div>
            </div>

            {/* Right Side - Location Map */}
            <div 
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
              }`}
            >
              <div className="relative">
                {/* Section Label */}
                <div className="inline-block border-l-4 border-red-500 pl-6 mb-6">
                  <p className="text-xs sm:text-sm font-bold text-red-400 tracking-[0.3em] uppercase">
                    Localisation
                  </p>
                </div>

                <h3 className="font-forsela text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  OÙ NOUS{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-green-500">
                    TROUVER
                  </span>
                </h3>

                {/* Map Container */}
                <div className="relative group">
                  {/* Decorative corners */}
                  <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-green-500/50 z-10"></div>
                  <div className="absolute -top-3 -right-3 w-16 h-16 border-t-2 border-r-2 border-red-500/50 z-10"></div>
                  <div className="absolute -bottom-3 -left-3 w-16 h-16 border-b-2 border-l-2 border-red-500/50 z-10"></div>
                  <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-green-500/50 z-10"></div>

                  {/* Map wrapper */}
                  <div className="relative overflow-hidden border-2 border-white/20 bg-white/5 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-red-500/0 group-hover:from-green-500/5 group-hover:to-red-500/5 transition-all duration-500 pointer-events-none z-10"></div>
                    
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.1571668673882!2d-7.645494799999999!3d33.5895662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3f76df51bf3%3A0x5f9dfdc4ca65a5a6!2sParc%20du%20V%C3%A9lodrome!5e1!3m2!1sfr!2sma!4v1762273032538!5m2!1sfr!2sma" 
                      width="100%" 
                      height="350" 
                      style={{ border: 0, display: 'block' }}
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-[280px] lg:h-[350px] grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                  </div>

                  {/* Location info overlay */}
                  <div className="mt-6 bg-white/5 backdrop-blur-md border border-white/20 p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-forsela text-lg md:text-xl font-black text-white mb-1">
                          ARENA VÉLODROME
                        </h4>
                        <p className="text-white/70 text-sm">
                          Parc du Vélodrome, Casablanca
                        </p>
                      </div>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=33.5895662,-7.645494799999999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-500 px-5 py-3 hover:shadow-lg hover:shadow-red-500/30 transition-all duration-300"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="font-bold text-white text-sm uppercase">
                          Itinéraire
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-green-500/20"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-red-500/20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-red-500/20"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-green-500/20"></div>
    </div>
  );
}