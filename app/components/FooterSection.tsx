import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Youtube, Calendar, Clock, Ticket, ArrowRight } from 'lucide-react';

export default function Footer() {
  const ticketUrl = "https://guichet.com/ma-fr/event/sport/fanzone-arena-vivez-la-can-2025-a-360-a-casablanca-5326";

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#a-propos' },
    { name: 'Espaces', href: '#espaces' },
    { name: 'Partenariat', href: '#partenaires' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/fanzonearenavelodrome', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/fanzone_arena', label: 'Instagram' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-[#8b0000]/20 to-black text-white overflow-hidden">
      {/* Animated Gradient Top Border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#8b0000] via-[#0dc768] to-[#8b0000] animate-pulse" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0dc768] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#8b0000] rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            
            {/* Column 1: Logo & Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4 group">
                <div className="w-16 h-16 relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-[#0dc768] rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <img src="/logo.png" alt="Fanzone Arena" className="w-full h-full object-contain relative z-10 drop-shadow-2xl" />
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                L'expérience football ultime à Casablanca. Vivez chaque match comme jamais auparavant dans une ambiance électrique et immersive.
              </p>
              
              {/* Social Icons with Creative Design */}
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-full flex items-center justify-center text-white/70 hover:text-white hover:bg-gradient-to-br hover:from-[#0dc768] hover:to-[#0aa054] transition-all duration-300 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-[#0dc768]/50 relative overflow-hidden group"
                    >
                      {/* Shine Effect */}
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      <Icon className="w-5 h-5 relative z-10" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-black text-lg mb-6 flex items-center gap-2 uppercase tracking-wider">
                <div className="w-1.5 h-8 bg-gradient-to-b from-[#0dc768] to-[#0aa054] rounded-full shadow-lg shadow-[#0dc768]/50" />
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#0dc768] transition-all duration-300 flex items-center gap-2 group text-sm font-medium uppercase tracking-wide"
                    >
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300 text-[#0dc768]" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Event Info */}
            <div>
              <h4 className="font-black text-lg mb-6 flex items-center gap-2 uppercase tracking-wider">
                <div className="w-1.5 h-8 bg-gradient-to-b from-[#8b0000] to-[#6b0000] rounded-full shadow-lg shadow-[#8b0000]/50" />
                Informations
              </h4>
              <div className="space-y-5">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="p-2 bg-[#0dc768]/10 rounded-lg group-hover:bg-[#0dc768]/20 transition-all duration-300">
                    <Calendar className="w-5 h-5 flex-shrink-0 text-[#0dc768]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-wide">Dates</p>
                    <p className="text-gray-400 text-xs font-medium">21 Dec 2025 — 18 Jan 2026</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="p-2 bg-[#0dc768]/10 rounded-lg group-hover:bg-[#0dc768]/20 transition-all duration-300">
                    <Clock className="w-5 h-5 flex-shrink-0 text-[#0dc768]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-wide">Horaires</p>
                    <p className="text-gray-400 text-xs font-medium">Tous les jours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="p-2 bg-[#0dc768]/10 rounded-lg group-hover:bg-[#0dc768]/20 transition-all duration-300">
                    <Ticket className="w-5 h-5 flex-shrink-0 text-[#0dc768]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-wide">Billetterie</p>
                    <a 
                      href={ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 text-xs hover:text-[#0dc768] transition-colors font-medium underline"
                    >
                      Obtenez vos places
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="font-black text-lg mb-6 flex items-center gap-2 uppercase tracking-wider">
                <div className="w-1.5 h-8 bg-gradient-to-b from-[#8b0000] to-[#6b0000] rounded-full shadow-lg shadow-[#8b0000]/50" />
                Contact
              </h4>
              <div className="space-y-5">
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="p-2 bg-[#0dc768]/10 rounded-lg group-hover:bg-[#0dc768]/20 transition-all duration-300">
                    <MapPin className="w-5 h-5 flex-shrink-0 text-[#0dc768]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-wide">Adresse</p>
                    <p className="text-gray-400 text-xs font-medium">Parc Vélodrome<br />Casablanca, Maroc</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 group cursor-pointer">
                  <div className="p-2 bg-[#0dc768]/10 rounded-lg group-hover:bg-[#0dc768]/20 transition-all duration-300">
                    <Mail className="w-5 h-5 flex-shrink-0 text-[#0dc768]" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-wide">Email</p>
                    <a href="mailto:contact@fanzonecan.com" className="text-gray-400 text-xs hover:text-[#0dc768] transition-colors font-medium">
                      contact@fanzonecan.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar with Gradient Border */}
          <div className="pt-8 border-t border-gradient-to-r from-transparent via-white/20 to-transparent relative">
            {/* Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0dc768] to-transparent"></div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8">
              <p className="text-gray-500 text-sm text-center md:text-left font-medium">
                © 2025 <span className="text-[#0dc768] font-bold">Fanzone Arena</span>. Tous droits réservés.
              </p>
              
              {/* CTA Button in Footer */}
              <a
                href={ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-[#0dc768] to-[#0aa054] hover:from-[#0aa054] hover:to-[#0dc768] text-white font-black px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#0dc768]/40 hover:shadow-xl hover:shadow-[#0dc768]/60 uppercase text-xs tracking-wider relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <Ticket className="w-4 h-4 relative z-10" />
                <span className="relative z-10">Réserver Maintenant</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}