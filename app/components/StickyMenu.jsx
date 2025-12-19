import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MapPin, Ticket } from 'lucide-react';

export default function StickyNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#a-propos' },
    { name: 'Espaces', href: '#espaces' },
    { name: 'Partenaires', href: '#partenaires' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = isScrolled ? 80 : 96;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const ticketUrl = "https://guichet.com/ma-fr/event/sport/fanzone-arena-vivez-la-can-2025-a-360-a-casablanca-5326";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3'
            : 'py-6'
        }`}
      >
        {/* Gradient Background with Glass Effect */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          isScrolled 
            ? 'bg-gradient-to-r from-[#8b0000]/95 via-black/95 to-[#8b0000]/95 backdrop-blur-xl shadow-2xl shadow-[#0dc768]/20' 
            : 'bg-transparent'
        }`}>
          {/* Animated Border Bottom */}
          {isScrolled && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0dc768] to-transparent animate-pulse"></div>
          )}
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div
                className={`transition-all duration-500 ${
                  isScrolled ? 'w-16 h-16' : 'w-20 h-20'
                }`}
              >
                <img
                  src="/logo.png"
                  alt="Fanzone Arena"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-white hover:text-[#0dc768] font-medium uppercase transition-colors duration-300 relative group cursor-pointer text-sm xl:text-base whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0dc768] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              
              {/* Ticket Button - Desktop */}
              <a
                href={ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#0dc768] hover:bg-[#0ab359] text-black font-bold px-4 xl:px-6 py-2 xl:py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#0dc768]/50 uppercase whitespace-nowrap text-xs xl:text-base"
              >
                <Ticket className="w-4 h-4 xl:w-5 xl:h-5" />
                <span>Réserver</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-300"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#8b0000]/95 via-black/95 to-[#8b0000]/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                handleNavClick(e, item.href);
                setIsMobileMenuOpen(false);
              }}
              className="text-white text-2xl sm:text-3xl font-bold uppercase hover:text-[#0dc768] transition-all duration-300 transform hover:scale-110 cursor-pointer"
              style={{
                animation: isMobileMenuOpen
                  ? `slideIn 0.5s ease-out ${index * 0.1}s backwards`
                  : 'none',
              }}
            >
              {item.name}
            </a>
          ))}

          {/* Ticket Button - Mobile */}
          <a
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#0dc768] hover:bg-[#0ab359] text-black font-bold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg text-base mt-4 uppercase whitespace-nowrap"
            style={{
              animation: isMobileMenuOpen
                ? `slideIn 0.5s ease-out ${navItems.length * 0.1}s backwards`
                : 'none',
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Ticket className="w-5 h-5" />
            <span>Réserver mes billets</span>
          </a>

          {/* Info Items in Mobile Menu */}
          <div
            className="mt-8 space-y-4"
            style={{
              animation: isMobileMenuOpen
                ? `slideIn 0.5s ease-out ${(navItems.length + 1) * 0.1}s backwards`
                : 'none',
            }}
          >
            <div className="flex items-center gap-3 text-white/80">
              <Calendar className="w-4 h-4" style={{ color: '#0dc768' }} />
              <span className="text-sm">21 Dec — 18 Jan 2026</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <MapPin className="w-4 h-4" style={{ color: '#0dc768' }} />
              <span className="text-sm">Parc Vélodrome, Casa</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}