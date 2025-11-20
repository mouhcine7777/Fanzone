import React from 'react';
import { Tv, Gamepad2, UtensilsCrossed, Camera } from 'lucide-react';

export default function FeaturesSection() {
  const mainFeature = {
    icon: Tv,
    title: "CUBE 360°",
    subtitle: "Vivez chaque match comme si vous y étiez",
    image: "cube360.jpg"
  };

  const sideFeatures = [
    {
      id: 2,
      icon: Gamepad2,
      title: "GAMING ZONE",
      subtitle: "Tournois & Challenges",
      image: "gaming.jpg"
    },
    {
      id: 3,
      icon: Camera,
      title: "PHOTO SPOTS",
      subtitle: "Instagrammable",
      image: "instagram.jpg"
    },
    {
      id: 4,
      icon: UtensilsCrossed,
      title: "FOODCOURT",
      subtitle: "Saveurs & Convivialité",
      image: "foodcourt.jpg"
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden" style={{ backgroundColor: '#800000' }}>
      {/* Corner Decoration */}
      <div className="absolute top-0 right-0 w-22 h-20 sm:w-40 sm:h-40 lg:w-52 lg:h-48 pointer-events-none z-10">
        <img src="/corner.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-0 left-0 w-22 h-20 sm:w-40 sm:h-40 lg:w-52 lg:h-48 pointer-events-none z-10 transform scale-x-[-1]">
        <img src="/corner.png" alt="" className="w-full h-full object-contain" />
      </div>

      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-black rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-10 lg:mb-10">
          <h2 className="font-edo text-4xl sm:text-5xl lg:text-8xl text-white mb-4"style={{ color: '#0dc768' }}>
            NOS ESPACES
          </h2>
          <div className="h-1 w-20 bg-white/50 mx-auto mb-4" />
          <p className="text-white/80 text-base sm:text-lg font-white max-w-2xl mx-auto">
            Découvrez nos espaces uniques conçus pour une expérience inoubliable
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Large Left Card */}
          <div className="group relative overflow-hidden rounded-3xl h-[500px] sm:h-[600px] lg:h-full lg:row-span-3">
            <div 
              className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-1000"
              style={{
                backgroundImage: `url(/${mainFeature.image})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
            
            <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30">
                  <Tv className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
              </div>
              
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-3 leading-tight">
                {mainFeature.title}
              </h3>
              <p className="text-xl sm:text-2xl text-white/90 font-light mb-6">
                {mainFeature.subtitle}
              </p>

              <div className="flex items-center gap-3 text-white opacity-0 group-hover:opacity-100 transform translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500">
                <span className="text-sm font-semibold uppercase tracking-wider">Explorer</span>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-white/10 to-transparent" />
          </div>

          {/* Right Side Cards */}
          {sideFeatures.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <div 
                key={feature.id}
                className="group relative overflow-hidden rounded-3xl h-[280px] sm:h-[320px]"
                style={{
                  animation: `fadeIn 0.8s ease-out ${(index + 1) * 0.15}s backwards`
                }}
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-1000"
                  style={{
                    backgroundImage: `url(/${feature.image})`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 group-hover:from-black/95 transition-all duration-500" />
                
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">
                    <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-base sm:text-lg text-white/90 font-light">
                    {feature.subtitle}
                  </p>

                  <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-500">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/10 to-transparent" />
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}