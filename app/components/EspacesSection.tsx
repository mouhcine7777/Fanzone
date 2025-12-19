import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

export default function AboutSection() {
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

  return (
    <section 
      id="a-propos"
      ref={sectionRef} 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-50"
    >
      {/* Colorful Energy */}
      <div className="absolute top-0 left-0 bottom-0 w-1/2 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-full h-40 bg-gradient-to-r from-green-500/10 to-transparent blur-3xl" />
        <div className="absolute top-1/2 left-0 w-full h-48 bg-gradient-to-r from-red-600/10 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-full h-40 bg-gradient-to-r from-yellow-400/10 to-transparent blur-3xl" />
      </div>

      {/* Decorative Images - Behind content */}
      <img
        src="/decoration3.png"
        alt=""
        className="absolute bottom-0 right-0 w-40 sm:w-52 md:w-64 pointer-events-none z-0 opacity-80"
      />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#0dc768] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <Sparkles className="w-4 h-4 text-black" />
              <span className="text-sm font-black text-black uppercase tracking-wider">
                À Propos
              </span>
            </div>

            {/* Title */}
            <h2 className="font-edo text-white mb-6 leading-none text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="inline-block bg-[#0dc768] px-4 py-2 transform -skew-x-12 italic">
                <span className="inline-block transform skew-x-12">LA PASSION</span>
              </span>

              <span className="block mt-2 inline-block bg-[#8b0000] px-4 py-2 transform -skew-x-12 italic">
                <span className="inline-block transform skew-x-12">DEVIENT SPECTACLE</span>
              </span> 
            </h2>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">
                La Fanzone Arena réinvente l'expérience sportive à Casablanca. Un écosystème unique où technologie de pointe et ambiance électrique se rencontrent.
              </p>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Plus qu'un simple lieu de rassemblement, nous sommes le théâtre des émotions collectives et l'épicentre de la célébration sportive.
              </p>
            </div>

          </div>

          {/* Right Content - Stats */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              
              {/* Main Stats Card - Bold Style */}
              <div className="relative bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 sm:p-10">
                
                <div className="grid grid-cols-2 gap-8">
                  
                  {/* Stat 1 */}
                  <div className="text-center group cursor-pointer">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-black mb-2 text-[#0dc768] group-hover:scale-110 transition-transform duration-300">
                      5K+
                    </div>
                    <div className="text-black font-black uppercase text-xs sm:text-sm tracking-wider">
                      Capacité
                    </div>
                    <div className="mt-3 h-2 w-full bg-black" />
                  </div>

                  {/* Stat 2 */}
                  <div className="text-center group cursor-pointer">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-black mb-2 text-[#0dc768] group-hover:scale-110 transition-transform duration-300">
                      30+
                    </div>
                    <div className="text-black font-black uppercase text-xs sm:text-sm tracking-wider">
                      Jours
                    </div>
                    <div className="mt-3 h-2 w-full bg-black" />
                  </div>

                  {/* Stat 3 */}
                  <div className="text-center group cursor-pointer">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-black mb-2 text-[#8b0000] group-hover:scale-110 transition-transform duration-300">
                      10
                    </div>
                    <div className="text-black font-black uppercase text-xs sm:text-sm tracking-wider">
                      Zones Premium
                    </div>
                    <div className="mt-3 h-2 w-full bg-black" />
                  </div>

                  {/* Stat 4 */}
                  <div className="text-center group cursor-pointer">
                    <div className="text-5xl sm:text-6xl lg:text-7xl font-black mb-2 text-[#8b0000] group-hover:scale-110 transition-transform duration-300">
                      7/7
                    </div>
                    <div className="text-black font-black uppercase text-xs sm:text-sm tracking-wider">
                      Live
                    </div>
                    <div className="mt-3 h-2 w-full bg-black" />
                  </div>
                  
                </div>
              </div>

              {/* Floating Badge - Bold Style */}
              <div className="absolute -top-6 -right-6 bg-[#0dc768] border-4 border-black text-black px-6 py-3 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-black">21 DEC</div>
                <div className="text-xs sm:text-sm font-black uppercase">Ouverture</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}