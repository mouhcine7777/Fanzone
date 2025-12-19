import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Tv, Gamepad2, UtensilsCrossed, Camera, ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function EspacesSliderSection() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const espaces = [
    {
      id: 1,
      icon: Tv,
      title: "CUBE 360°",
      subtitle: "Vivez chaque match",
      description: "Immersion totale, écrans géants et son surround.",
      image: "cube360.jpg",
      color: "#0dc768"
    },
    {
      id: 2,
      icon: Gamepad2,
      title: "GAMING ZONE",
      subtitle: "Tournois & Challenges",
      description: "Consoles new génération, jeux immersifs et challenges e-sport.",
      image: "gaming.jpg",
      decoration: "decoration5.png",
      color: "#8b0000"
    },
    {
      id: 3,
      icon: Camera,
      title: "PHOTOCALL",
      subtitle: "Souvenir inoubliable",
      description: "Passez par notre photocall CAN et capturez l'énergie, la joie, et les couleurs de la Fan Zone Can Velodrome Casablanca.",
      image: "instagram.jpg",
      color: "#0dc768"
    },
    {
      id: 4,
      icon: UtensilsCrossed,
      title: "FOODCOURT",
      subtitle: "Saveurs & Convivialité",
      description: "Sélection gourmande, servie dans une ambiance festive.",
      image: "foodcourt.jpg",
      decoration: "decoration4.png",
      color: "#8b0000"
    }
  ];

  // Update active index when slide changes
  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      const handleSlideChange = () => {
        setActiveIndex(swiper.realIndex);
      };

      swiper.on('slideChange', handleSlideChange);

      return () => {
        swiper.off('slideChange', handleSlideChange);
      };
    }
  }, []);

  const handleDotClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideToLoop(index);
    }
  };

  return (
    <section id="espaces" className="relative min-h-screen flex items-center overflow-hidden bg-[#8b0000]">
      
      {/* Colorful Energy Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-1/2 h-40 bg-gradient-to-r from-green-500/20 to-transparent blur-3xl" />
        <div className="absolute top-1/2 right-0 w-1/2 h-48 bg-gradient-to-l from-yellow-400/20 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-1/2 h-40 bg-gradient-to-r from-orange-500/20 to-transparent blur-3xl" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#0dc768] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-sm font-black text-black uppercase tracking-wider">
              Découvrez
            </span>
          </div>

          {/* Title */}
          <h2 className="font-edo text-5xl sm:text-6xl lg:text-8xl mb-6 text-white leading-none">
            <span className="inline-block bg-[#0dc768] px-6 py-3 transform -skew-x-12 italic border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <span className="inline-block transform skew-x-12">NOS ESPACES</span>
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            Des zones uniques pensées pour vivre des moments exceptionnels
          </p>
        </div>

        {/* Swiper Container with External Navigation */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Navigation Arrows - Outside slider but on sides */}
          <div className="hidden lg:block">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-12 h-12 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-black hover:bg-[#0dc768] transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-12 h-12 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-black hover:bg-[#0dc768] transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Arrows - Inside container */}
          <div className="lg:hidden flex justify-center items-center gap-4 mb-6">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="w-12 h-12 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-black hover:bg-[#0dc768] transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-12 h-12 bg-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-black hover:bg-[#0dc768] transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Swiper Slider */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            pagination={false}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="espaces-swiper"
          >
            {espaces.map((espace) => {
              const Icon = espace.icon;
              return (
                <SwiperSlide key={espace.id}>
                  <div className="group relative overflow-hidden h-[450px] sm:h-[500px] cursor-pointer border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url(/${espace.image})`,
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:from-black/90 transition-all duration-500" />

                    {/* Decoration Image - Top Right Corner - Only for cards with decoration */}
                    {espace.decoration && (
                      <img
                        src={`/${espace.decoration}`}
                        alt=""
                        className="absolute top-0 right-0 w-20 sm:w-24 md:w-28 pointer-events-none z-10 opacity-90"
                      />
                    )}

                    {/* Content */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                      {/* Top Icon */}
                      <div className="flex justify-start">
                        <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <div
                            className="inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                            style={{
                              backgroundColor: espace.color
                            }}
                          >
                            <Icon className="w-8 h-8 sm:w-9 sm:h-9 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Content */}
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-3xl sm:text-4xl font-black text-white mb-2 leading-tight uppercase">
                            {espace.title}
                          </h3>
                          <div 
                            className="inline-block px-3 py-1 mb-3 border-2 border-black font-black text-sm uppercase"
                            style={{ backgroundColor: espace.color, color: 'white' }}
                          >
                            {espace.subtitle}
                          </div>
                          <p className="text-white text-sm sm:text-base leading-relaxed font-medium">
                            {espace.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner Accent */}
                    <div
                      className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4"
                      style={{ borderColor: espace.color }}
                    />
                    <div
                      className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4"
                      style={{ borderColor: espace.color }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* External Pagination Dots - Bold Style */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {espaces.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-4 rounded-full transition-all duration-300 border-2 border-black ${
                  activeIndex === index
                    ? 'bg-[#0dc768] w-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                    : 'bg-white w-4 hover:bg-[#0dc768]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .espaces-swiper {
          padding: 20px 0;
        }
      `}</style>
    </section>
  );
}