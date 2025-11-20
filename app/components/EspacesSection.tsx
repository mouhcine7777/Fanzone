import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

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
      className="relative bg-white h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative Lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#0dc768]/20 to-transparent hidden lg:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#800000]/20 to-transparent hidden lg:block" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#0dc768]/10 to-[#800000]/10 border border-[#0dc768]/20">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: '#0dc768' }} />
              <span className="text-xs font-semibold text-gray-700 uppercase tracking-wider">
                À Propos
              </span>
            </div>

            <h2 className="font-edo text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 leading-tight">
              <span className="text-black">Là où la </span>
              <span className="bg-gradient-to-r from-[#0dc768] to-[#0dc768]/80 bg-clip-text text-transparent">passion</span>
              <br />
              <span className="text-black">devient </span>
              <span className="bg-gradient-to-r from-[#800000] to-[#800000]/80 bg-clip-text text-transparent">spectacle</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 mb-6">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                La Fanzone Arena réinvente l'expérience sportive à Casablanca. Un écosystème unique où technologie de pointe et ambiance électrique se rencontrent.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Plus qu'un simple lieu de rassemblement, nous sommes le théâtre des émotions collectives et l'épicentre de la célébration sportive.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="group px-5 sm:px-6 py-2.5 sm:py-3 bg-[#0dc768] text-white rounded-lg font-bold text-sm sm:text-base hover:bg-[#0dc768]/90 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Découvrir l'expérience
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-800 rounded-lg font-bold text-sm sm:text-base border-2 border-gray-200 hover:border-[#0dc768] transition-all duration-300 hover:scale-105">
                Nos espaces
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative">
              {/* Main Stats Card */}
              <div className="relative bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
                <div className="absolute -top-4 -left-4 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#0dc768] to-[#0dc768]/50 rounded-2xl -z-10 blur-xl opacity-50" />
                <div className="absolute -bottom-4 -right-4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-[#800000] to-[#800000]/50 rounded-2xl -z-10 blur-xl opacity-50" />
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center group cursor-pointer">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 bg-gradient-to-br from-[#0dc768] to-[#0dc768]/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      5K+
                    </div>
                    <div className="text-gray-600 font-semibold uppercase text-xs tracking-wide">
                      Capacité
                    </div>
                    <div className="mt-2 h-1 w-12 mx-auto bg-gradient-to-r from-[#0dc768] to-transparent rounded-full" />
                  </div>

                  <div className="text-center group cursor-pointer">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 bg-gradient-to-br from-[#0dc768] to-[#0dc768]/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      30+
                    </div>
                    <div className="text-gray-600 font-semibold uppercase text-xs tracking-wide">
                      Jours
                    </div>
                    <div className="mt-2 h-1 w-12 mx-auto bg-gradient-to-r from-[#0dc768] to-transparent rounded-full" />
                  </div>

                  <div className="text-center group cursor-pointer">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 bg-gradient-to-br from-[#800000] to-[#800000]/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      10
                    </div>
                    <div className="text-gray-600 font-semibold uppercase text-xs tracking-wide">
                      Zones VIP
                    </div>
                    <div className="mt-2 h-1 w-12 mx-auto bg-gradient-to-r from-[#800000] to-transparent rounded-full" />
                  </div>

                  <div className="text-center group cursor-pointer">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-black mb-1 bg-gradient-to-br from-[#800000] to-[#800000]/70 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                      24/7
                    </div>
                    <div className="text-gray-600 font-semibold uppercase text-xs tracking-wide">
                      Live
                    </div>
                    <div className="mt-2 h-1 w-12 mx-auto bg-gradient-to-r from-[#800000] to-transparent rounded-full" />
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-[#0dc768] rounded-tl-lg" />
                <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-[#800000] rounded-br-lg" />
              </div>
              {/* Floating Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-br from-[#0dc768] to-[#0dc768]/80 text-white px-4 py-2 rounded-xl shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="text-lg sm:text-xl font-black">21 DEC</div>
                <div className="text-xs font-semibold opacity-90">Ouverture</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}