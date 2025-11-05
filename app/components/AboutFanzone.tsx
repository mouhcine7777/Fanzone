"use client";
import { useState, useEffect, useRef } from 'react';

export default function ExperienceSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, [visibleCards]);

  const experiences = [
    {
      title: "L'EXPÉRIENCE DU CUBE 360°",
      description: "Ne manquez rien de la CAN ! Notre arène est centrée sur un cube géant immersif qui vous plonge au cœur de l'action. Ressentez l'ambiance électrique de chaque match depuis nos gradins, avec une vue parfaite sur les écrans panoramiques.",
      icon: "cube" as const,
      gradient: "from-green-600 to-emerald-500",
      accentColor: "green",
      features: ["Vue 360°", "Écrans 4K", "Son Immersif"]
    },
    {
      title: "GAMING ZONE",
      description: "Défiez vos amis dans notre zone de divertissement ! Au programme : bornes Gaming dernier cri, Soccer Table (Foot-Billard), Arcades vintage... et un stand Make-Up incontournable pour porter fièrement les couleurs des Lions de l'Atlas !",
      icon: "game" as const,
      gradient: "from-red-600 to-rose-500",
      accentColor: "red",
      features: ["Gaming", "Soccer Table", "Arcades"]
    },
    {
      title: "LE FOODCOURT",
      description: "Retrouvez vos amis et partagez vos émotions autour d'un bon repas ! Le Foodcourt est le lieu de vie de l'Arena, conçu pour se détendre et se restaurer tous ensemble. Découvrez nos nombreux stands et food-trucks dans une atmosphère animée et décontractée.",
      icon: "food" as const,
      gradient: "from-green-500 to-teal-500",
      accentColor: "green",
      features: ["Food Trucks", "Stands Variés", "Espace Lounge"]
    }
  ];

  const icons: Record<'cube' | 'game' | 'food', React.ReactElement> = {
    cube: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 17L12 22L22 17" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    game: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="10" rx="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7" cy="12" r="1" fill="currentColor"/>
        <circle cx="17" cy="12" r="1" fill="currentColor"/>
        <path d="M6 7V5C6 3.89543 6.89543 3 8 3H16C17.1046 3 18 3.89543 18 5V7" strokeLinecap="round"/>
      </svg>
    ),
    food: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 2V12C3 13.1046 3.89543 14 5 14C6.10457 14 7 13.1046 7 12V2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 7H7" strokeLinecap="round"/>
        <path d="M5 14V22" strokeLinecap="round"/>
        <path d="M13 2V22" strokeLinecap="round"/>
        <path d="M13 2C13 5 15 7 17 7" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  return (
    <div className="relative w-full bg-black py-16 md:py-24 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #22c55e 1px, transparent 1px),
            linear-gradient(to bottom, #22c55e 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-red-500/10 rounded-full blur-3xl"></div>

      {/* Diagonal lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-500/20 to-transparent"></div>
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-red-500/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <div className="inline-block border-l-4 border-green-500 pl-6 mb-6">
            <p className="text-sm md:text-base font-bold text-green-400 tracking-[0.3em] uppercase">
              Découvrez
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
            NOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-red-500">EXPÉRIENCES</span>
          </h2>
          <div className="mt-4 w-32 h-1 bg-gradient-to-r from-green-500 to-red-500"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-12 md:space-y-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`group relative transform transition-all duration-1000 ${
                visibleCards.includes(index)
                  ? 'translate-x-0 opacity-100'
                  : index % 2 === 0
                  ? '-translate-x-20 opacity-0'
                  : 'translate-x-20 opacity-0'
              }`}
            >
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-sm overflow-hidden">
                {/* Hover glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r ${exp.gradient} group-hover:w-full transition-all duration-700`}></div>

                <div className="relative p-8 md:p-12 lg:p-16">
                  <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Icon */}
                    <div className="lg:col-span-2">
                      <div className={`relative w-20 h-20 md:w-24 md:h-24 text-${exp.accentColor}-500 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500`}></div>
                        <div className="relative">
                          {icons[exp.icon]}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-7">
                      <h3 className="font-forsela text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                        {exp.title}
                      </h3>
                      <div className={`w-16 h-1 bg-gradient-to-r ${exp.gradient} mb-6`}></div>
                      <p className="text-base md:text-lg text-white/70 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="lg:col-span-3">
                      <div className="space-y-3">
                        {exp.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center bg-white/5 border border-white/10 px-4 py-3 transform group-hover:translate-x-2 transition-transform duration-300"
                            style={{ transitionDelay: `${i * 100}ms` }}
                          >
                            <div className={`w-2 h-2 bg-gradient-to-br ${exp.gradient} mr-3 rounded-full`}></div>
                            <span className="text-sm md:text-base text-white/80 font-medium">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner accents */}
                <div className={`absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-${exp.accentColor}-500/30`}></div>
                <div className={`absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-${exp.accentColor}-500/30`}></div>
              </div>

              {/* Floating number */}
              <div className="absolute -left-4 top-8 md:-left-8 md:top-12">
                <span className="text-6xl md:text-8xl font-black text-white/5 group-hover:text-white/10 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}