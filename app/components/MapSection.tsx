import React from 'react';
import { MapPin, Clock, Phone, Mail, Ticket, Users, Calendar } from 'lucide-react';

export default function MapReservationSection() {
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
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-edo text-4xl sm:text-5xl lg:text-8xl text-white mb-4" style={{ color: '#0dc768' }}>
            NOUS TROUVER
          </h2>
          <div className="h-1 w-20 bg-white/50 mx-auto mb-4" />
          <p className="text-white/80 text-base sm:text-lg font-white max-w-2xl mx-auto">
            Au cœur de Casablanca, une expérience inoubliable vous attend
          </p>
        </div>

        {/* Map & Reservation Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Section */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[400px] sm:h-[500px] lg:h-[600px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.1571668673882!2d-7.645494799999999!3d33.5895662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3f76df51bf3%3A0x5f9dfdc4ca65a5a6!2sParc%20du%20V%C3%A9lodrome!5e1!3m2!1sfr!2sma!4v1762508168569!5m2!1sfr!2sma" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
              
              {/* Map Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 sm:p-8">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#0dc768' }} />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Parc du Vélodrome</h3>
                    <p className="text-white/80 text-sm sm:text-base">Casablanca, Maroc</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Cards Below Map */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <Clock className="w-6 h-6 mb-2" style={{ color: '#0dc768' }} />
                <p className="text-white/60 text-xs mb-1">Horaires</p>
                <p className="text-white font-semibold text-sm">10h - 00h</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                <Phone className="w-6 h-6 mb-2" style={{ color: '#0dc768' }} />
                <p className="text-white/60 text-xs mb-1">Contact</p>
                <p className="text-white font-semibold text-sm">+212 5XX XX XX XX</p>
              </div>
            </div>
          </div>

          {/* Reservation CTA Section */}
          <div className="flex flex-col justify-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 sm:p-10 lg:p-12 border border-white/20">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                  <Ticket className="w-5 h-5" style={{ color: '#0dc768' }} />
                  <span className="text-white text-sm font-medium uppercase tracking-wider">Réservation</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
                  Réservez Votre<br />
                  <span style={{ color: '#0dc768' }}>Expérience</span>
                </h3>
                <p className="text-white/80 text-base sm:text-lg mb-8">
                  Vivez les matchs comme jamais auparavant dans le CUBE 360° avec vos amis et votre famille
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Réservation de Groupe</p>
                    <p className="text-white/60 text-sm">À partir de 10 personnes</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Tous les Matchs</p>
                    <p className="text-white/60 text-sm">CAN Maroc 2025</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Confirmation Rapide</p>
                    <p className="text-white/60 text-sm">Réponse sous 24h</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <button className="w-full px-8 py-4 rounded-xl font-bold text-lg bg-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl" style={{ color: '#800000' }}>
                  Réserver Maintenant
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/60 text-sm text-center">
                  Besoin d'aide ? Contactez-nous au<br />
                  <a href="tel:+212500000000" className="text-white font-semibold hover:underline" style={{ color: '#0dc768' }}>
                    +212 5XX XX XX XX
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}