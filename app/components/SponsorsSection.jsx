import React, { useState, useEffect, useRef } from 'react';
import { Award, Sparkles } from 'lucide-react';

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const partners = [
    {
      id: 1,
      name: 'RIA',
      logo: '/logos/ria.png',
      delay: 0,
      website: 'https://www.riamoneytransfer.com'
    },
    {
      id: 2,
      name: 'Wafacash',
      logo: '/logos/wafacash.png',
      delay: 200,
      website: 'https://www.wafacash.com/fr'
    }
  ];

  return (
    <section 
      id="partenaires"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#0dc768]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#800000]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0dc768]/5 to-[#800000]/5 rounded-full blur-3xl" />
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#0dc768]/10 to-transparent hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#800000]/10 to-transparent hidden lg:block" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-[#0dc768]/10 to-[#800000]/10 border border-[#0dc768]/20">
            <Award className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#0dc768' }} />
            <span className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wider">
              Partenaires
            </span>
          </div>

          <h2 className="font-edo text-4xl sm:text-5xl lg:text-7xl mb-6 leading-tight">
            <span className="text-gray-800">Nos </span>
            <span className="bg-gradient-to-r from-[#0dc768] to-[#800000] bg-clip-text text-transparent">Partenaires</span>
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-[#0dc768] to-[#800000] mx-auto mb-6" />
          
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
            Ils nous font confiance pour créer des expériences inoubliables
          </p>
        </div>

        {/* Partners Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div
              key={partner.id}
              className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${partner.delay}ms` }}
            >
              <a 
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="block group relative"
              >
                {/* Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0dc768]/20 to-[#800000]/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative bg-white rounded-3xl p-8 sm:p-12 shadow-xl border-2 border-gray-100 group-hover:border-[#0dc768]/30 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl">
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[#0dc768] rounded-tl-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[#800000] rounded-br-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Logo Container */}
                  <div className="flex items-center justify-center h-32 sm:h-40">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`}
                      className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Sparkle Effect on Hover */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <Sparkles className="w-5 h-5 text-[#0dc768] animate-pulse" />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}