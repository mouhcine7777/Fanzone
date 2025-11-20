import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function ProgrammeSection() {
  const moroccoMatches = [
    {
      id: 1,
      date: "21 DÉC",
      time: "18:00",
      opponent: "Comores",
      opponentCode: "COM",
      opponentFlag: "/flags/km.svg",
      venue: "Prince Moulay Abdellah",
      city: "Rabat",
      stage: "Match d'ouverture"
    },
    {
      id: 2,
      date: "26 DÉC",
      time: "21:00",
      opponent: "Mali",
      opponentCode: "MLI",
      opponentFlag: "/flags/ml.svg",
      venue: "Prince Moulay Abdellah",
      city: "Rabat",
      stage: "Phase de Groupes"
    },
    {
      id: 3,
      date: "29 DÉC",
      time: "21:00",
      opponent: "Zambie",
      opponentCode: "ZAM",
      opponentFlag: "/flags/zm.svg",
      venue: "Prince Moulay Abdellah",
      city: "Rabat",
      stage: "Phase de Groupes"
    }
  ];

  return (
    <section className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-50 rounded-full blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-red-50 border border-red-100">
              <Calendar className="w-5 h-5" style={{ color: '#800000' }} />
              <span className="text-gray-700 text-sm font-medium uppercase tracking-wider">CAN Maroc 2025</span>
            </div>
          </div>
          
          <h2 className="font-edo text-4xl sm:text-5xl lg:text-8xl mb-4 leading-tight" style={{ color: '#800000' }}>
            LES LIONS DE L'ATLAS
          </h2>
          <div className="h-1 w-24 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #800000, #0dc768)' }} />
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Vivez chaque match du Maroc dans une ambiance exceptionnelle
          </p>
        </div>

        {/* Matches Grid */}
        <div className="max-w-5xl mx-auto mb-12 space-y-6">
          {moroccoMatches.map((match, index) => (
            <div
              key={match.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-[1.02] border border-gray-100"
              style={{
                animation: `slideIn 0.6s ease-out ${index * 0.15}s backwards`
              }}
            >
              {/* Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500" style={{ background: 'linear-gradient(to bottom, #800000, #0dc768)' }} />
              
              <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                {/* Date & Time */}
                <div className="flex-shrink-0 text-center sm:text-left min-w-[120px]">
                  <div className="text-3xl sm:text-4xl font-black mb-1" style={{ color: '#800000' }}>{match.date}</div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm font-medium">{match.time}</span>
                  </div>
                </div>

                {/* Flags & VS */}
                <div className="flex items-center gap-6 sm:gap-8 flex-1">
                  {/* Morocco Flag */}
                  <div className="flex flex-col items-center gap-3 group-hover:scale-110 transition-transform duration-500">
                    <img src="/flags/ma.svg" alt="Maroc" className="w-20 h-20 sm:w-24 sm:h-24" />
                    <span className="text-sm font-bold" style={{ color: '#800000' }}>MAR</span>
                  </div>

                  {/* VS Badge */}
                  <div className="relative flex-shrink-0">
                    <div className="text-2xl sm:text-3xl font-black text-gray-300 group-hover:text-gray-400 transition-colors duration-300">VS</div>
                  </div>

                  {/* Opponent Flag */}
                  <div className="flex flex-col items-center gap-3 group-hover:scale-110 transition-transform duration-500">
                    <img src={match.opponentFlag} alt={match.opponent} className="w-20 h-20 sm:w-24 sm:h-24" />
                    <span className="text-sm font-bold text-gray-700">{match.opponentCode}</span>
                  </div>
                </div>

                {/* Match Info */}
                <div className="flex-1 text-center sm:text-right space-y-2">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2" style={{ backgroundColor: 'rgba(13, 199, 104, 0.1)', color: '#0dc768' }}>
                    {match.stage}
                  </div>
                  <div className="flex items-center justify-center sm:justify-end gap-2 text-gray-700 text-sm">
                    <MapPin className="w-4 h-4" style={{ color: '#0dc768' }} />
                    <span className="font-medium">{match.city}</span>
                  </div>
                  <p className="text-gray-500 text-xs sm:text-sm">{match.venue}</p>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-red-50/0 via-green-50/0 to-red-50/0 opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/programmes"
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg text-white transition-all duration-500 hover:scale-105 hover:shadow-xl group relative overflow-hidden"
            style={{ 
              background: 'linear-gradient(135deg, #800000 0%, #b30000 100%)',
            }}
          >
            <span className="relative z-10">Voir Tous Les Matchs</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'linear-gradient(135deg, #0dc768 0%, #800000 100%)' }} />
          </a>
          
          <p className="mt-4 text-gray-500 text-sm">Programme complet de la CAN Maroc 2025</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
}