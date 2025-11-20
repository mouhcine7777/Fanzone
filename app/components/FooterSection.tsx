import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Calendar, Clock, Ticket, ArrowRight } from 'lucide-react';

export default function Footer() {
  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#a-propos' },
    { name: 'Espaces', href: '#espaces' },
    { name: 'Partenariat', href: '#partenariat' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#800000] via-[#0dc768] to-[#800000]" />

      {/* Main Footer Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            {/* Column 1: Logo & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16">
                  <img src="/logo1.png" alt="Fanzone Arena" className="w-full h-full object-contain" />
                </div>
                <div className="ml-3">
                  <h3 className="font-edo text-2xl leading-none" style={{ color: '#0dc768' }}>
                    FANZONE
                    <span className="block text-white">ARENA</span>
                  </h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                L'expérience football ultime à Casablanca. Vivez chaque match comme jamais auparavant dans une ambiance électrique et immersive.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-[#0dc768] hover:border-[#0dc768] transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-[#0dc768] rounded-full" />
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#0dc768] transition-colors duration-300 flex items-center gap-2 group text-sm"
                    >
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Event Info */}
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-[#800000] rounded-full" />
                Informations
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0dc768' }} />
                  <div>
                    <p className="text-white font-medium text-sm">Dates</p>
                    <p className="text-gray-400 text-xs">21 Dec 2025 — 18 Jan 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0dc768' }} />
                  <div>
                    <p className="text-white font-medium text-sm">Horaires</p>
                    <p className="text-gray-400 text-xs">Tous les jours, 14h — 01h</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ticket className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0dc768' }} />
                  <div>
                    <p className="text-white font-medium text-sm">Billetterie</p>
                    <p className="text-gray-400 text-xs">Bientôt disponible</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-[#800000] rounded-full" />
                Contact
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0dc768' }} />
                  <div>
                    <p className="text-white font-medium text-sm">Adresse</p>
                    <p className="text-gray-400 text-xs">Parc Vélodrome<br />Casablanca, Maroc</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0dc768' }} />
                  <div>
                    <p className="text-white font-medium text-sm">Téléphone</p>
                    <a href="tel:+212522000000" className="text-gray-400 text-xs hover:text-[#0dc768] transition-colors">
                      +212 522 00 00 00
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: '#0dc768' }} />
                  <div>
                    <p className="text-white font-medium text-sm">Email</p>
                    <a href="mailto:contact@fanzonearena.ma" className="text-gray-400 text-xs hover:text-[#0dc768] transition-colors">
                      contact@fanzonecan.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="relative bg-gradient-to-r from-[#800000]/20 via-[#0dc768]/20 to-[#800000]/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h4 className="font-bold text-xl mb-2">Restez Informés</h4>
                <p className="text-gray-400 text-sm">Inscrivez-vous pour recevoir les dernières actualités et offres exclusives</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-[#0dc768] transition-colors w-full sm:w-64 text-sm"
                />
                <button className="px-6 py-3 bg-[#0dc768] text-white rounded-lg font-semibold text-sm hover:bg-[#0dc768]/90 transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  S'inscrire
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © 2025 Fanzone Arena. Tous droits réservés.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#0dc768]/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#800000]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </footer>
  );
}