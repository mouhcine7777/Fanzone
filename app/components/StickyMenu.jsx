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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/95 backdrop-blur-md shadow-2xl py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
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
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-white hover:text-[#0dc768] font-medium transition-colors duration-300 relative group cursor-pointer"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0dc768] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                disabled
                className="px-6 py-3 rounded-lg font-semibold text-white/50 cursor-not-allowed flex items-center gap-2 bg-gray-600"
              >
                <Ticket className="w-4 h-4" />
                Billetterie Bientôt
              </button>
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
          className="absolute inset-0 bg-black/95 backdrop-blur-lg"
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
              className="text-white text-2xl sm:text-3xl font-bold hover:text-[#0dc768] transition-all duration-300 transform hover:scale-110 cursor-pointer"
              style={{
                animation: isMobileMenuOpen
                  ? `slideIn 0.5s ease-out ${index * 0.1}s backwards`
                  : 'none',
              }}
            >
              {item.name}
            </a>
          ))}

          <button
            disabled
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 px-8 py-4 rounded-lg font-bold text-lg text-white/50 cursor-not-allowed flex items-center gap-3 bg-gray-600"
            style={{
              animation: isMobileMenuOpen
                ? `slideIn 0.5s ease-out ${navItems.length * 0.1}s backwards`
                : 'none',
            }}
          >
            <Ticket className="w-5 h-5" />
            Billetterie Bientôt
          </button>

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