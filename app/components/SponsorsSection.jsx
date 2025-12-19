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

  const officialPartners = [
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

  const goldPartners = [
    {
      id: 3,
      name: 'Hyundai',
      logo: '/logos/hyundai.png',
      delay: 0,
      website: 'https://www.hyundai.com'
    }
  ];

  return (
    <section 
      id="partenaires"
      ref={sectionRef}
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-white"
    >
      {/* Subtle Colorful Energy Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-1/3 h-40 bg-gradient-to-r from-green-500/5 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-1/3 h-40 bg-gradient-to-l from-red-600/5 to-transparent blur-3xl" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#0dc768] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <Award className="w-4 h-4 text-black" />
            <span className="text-sm font-black text-black uppercase tracking-wider">
              Partenaires
            </span>
          </div>

          {/* Title */}
          <h2 className="font-edo text-4xl sm:text-5xl lg:text-7xl mb-6 leading-none">
            <span className="inline-block bg-black text-white px-4 py-2 transform -skew-x-12 italic">
              <span className="inline-block transform skew-x-12">NOS PARTENAIRES</span>
            </span>
          </h2>
          
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto font-medium">
            Ils nous font confiance pour créer des expériences inoubliables
          </p>
        </div>

        {/* Official Partners Section */}
        <div className="mb-16">
          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-[#0dc768] border-2 border-black">
              <span className="text-xs font-black text-black uppercase tracking-wider">
                Partenaires Officiels
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-4xl mx-auto">
            {officialPartners.map((partner) => (
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
                  {/* Card - Bold Style */}
                  <div className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 sm:p-12 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-3 left-3 w-8 h-8 border-t-4 border-l-4 border-[#0dc768]" />
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-4 border-r-4 border-[#8b0000]" />
                    
                    {/* Logo Container */}
                    <div className="flex items-center justify-center h-32 sm:h-40">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Sparkle Effect on Hover */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="w-5 h-5 text-[#0dc768]" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Partner Section */}
        <div>
          <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-2 bg-yellow-400 border-2 border-black">
              <span className="text-xs font-black text-black uppercase tracking-wider">
                Partenaire Gold
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 max-w-4xl mx-auto">
            {goldPartners.map((partner) => (
              <div
                key={partner.id}
                className={`transition-all duration-1000 sm:col-start-1 sm:col-end-3 sm:max-w-md sm:mx-auto sm:w-full ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: '600ms' }}
              >
                <a 
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group relative"
                >
                  {/* Card - Bold Style */}
                  <div className="relative bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 sm:p-12 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    
                    {/* Decorative Corner Accents */}
                    <div className="absolute top-3 left-3 w-8 h-8 border-t-4 border-l-4 border-yellow-400" />
                    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-4 border-r-4 border-yellow-400" />
                    
                    {/* Logo Container */}
                    <div className="flex items-center justify-center h-32 sm:h-40">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Sparkle Effect on Hover */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}