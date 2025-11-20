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
      subtitle: "Vivez chaque match comme si vous y étiez",
      description: "Une expérience immersive unique avec écrans géants et son surround",
      image: "cube360.jpg",
      color: "#0dc768"
    },
    {
      id: 2,
      icon: Gamepad2,
      title: "GAMING ZONE",
      subtitle: "Tournois & Challenges",
      description: "Consoles dernière génération et compétitions eSport en continu",
      image: "gaming.jpg",
      color: "#800000"
    },
    {
      id: 3,
      icon: Camera,
      title: "PHOTO SPOTS",
      subtitle: "Instagrammable",
      description: "Des décors uniques pour immortaliser vos moments",
      image: "instagram.jpg",
      color: "#0dc768"
    },
    {
      id: 4,
      icon: UtensilsCrossed,
      title: "FOODCOURT",
      subtitle: "Saveurs & Convivialité",
      description: "Une sélection de cuisines du monde dans une ambiance festive",
      image: "foodcourt.jpg",
      color: "#800000"
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
    <section id="espaces" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: '#800000' }}>
      {/* Corner Decorations */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-48 pointer-events-none z-10">
        <img src="/corner.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-48 pointer-events-none z-10 transform scale-x-[-1]">
        <img src="/corner.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="text-[#0dc768] font-bold text-sm uppercase tracking-widest border-2 border-[#0dc768] px-4 py-2 rounded-full">
              Découvrez
            </span>
          </div>
          <h2 className="font-edo text-5xl sm:text-6xl lg:text-8xl mb-4" style={{ color: '#0dc768' }}>
            NOS ESPACES
          </h2>
          <div className="h-1 w-24 bg-white/50 mx-auto mb-6" />
          <p className="text-white/90 text-lg sm:text-xl max-w-2xl mx-auto font-light">
            Des zones uniques pensées pour vivre des moments exceptionnels
          </p>
        </div>

        {/* Swiper Container with External Navigation */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Navigation Arrows - Outside slider but on sides */}
          <div className="hidden lg:block">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#0dc768] hover:border-[#0dc768] transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-12 h-12 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#0dc768] hover:border-[#0dc768] transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Navigation Arrows - Inside container */}
          <div className="lg:hidden flex justify-center items-center gap-4 mb-6">
            <button
              onClick={() => swiperRef.current?.swiper.slidePrev()}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#0dc768] hover:border-[#0dc768] transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => swiperRef.current?.swiper.slideNext()}
              className="w-12 h-12 bg-white/10 backdrop-blur-md border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:bg-[#0dc768] hover:border-[#0dc768] transition-all duration-300 hover:scale-110"
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
                  <div className="group relative overflow-hidden rounded-2xl shadow-2xl h-[450px] sm:h-[500px] cursor-pointer">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                      style={{
                        backgroundImage: `url(/${espace.image})`,
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:from-black/90 transition-all duration-500" />

                    {/* Content */}
                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                      {/* Top Icon */}
                      <div className="flex justify-start">
                        <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <div
                            className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl backdrop-blur-md border-2"
                            style={{
                              backgroundColor: `${espace.color}20`,
                              borderColor: espace.color
                            }}
                          >
                            <Icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: espace.color }} />
                          </div>
                        </div>
                      </div>

                      {/* Bottom Content */}
                      <div className="space-y-3">
                        <div>
                          <h3 className="text-3xl sm:text-4xl font-black text-white mb-2 leading-tight">
                            {espace.title}
                          </h3>
                          <p className="text-lg sm:text-xl font-light mb-2" style={{ color: espace.color }}>
                            {espace.subtitle}
                          </p>
                          <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                            {espace.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative Corner */}
                    <div
                      className="absolute top-0 right-0 w-24 h-24 opacity-20"
                      style={{
                        background: `radial-gradient(circle at top right, ${espace.color}, transparent)`
                      }}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* External Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {espaces.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === index
                    ? 'bg-[#0dc768] w-8'
                    : 'bg-white/50 hover:bg-white/80'
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