import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    mail: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'telephone') {
      const phoneRegex = /^[0-9+\-\s]*$/;
      if (!phoneRegex.test(value)) {
        return;
      }
    }
    
    if (name === 'nom' || name === 'prenom') {
      const nameRegex = /^[a-zA-ZÀ-ÿ\s\-]*$/;
      if (!nameRegex.test(value)) {
        return;
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nom.trim()) {
      newErrors.nom = 'Le nom est requis';
    } else if (formData.nom.trim().length < 2) {
      newErrors.nom = 'Le nom doit contenir au moins 2 caractères';
    }
    
    if (!formData.prenom.trim()) {
      newErrors.prenom = 'Le prénom est requis';
    } else if (formData.prenom.trim().length < 2) {
      newErrors.prenom = 'Le prénom doit contenir au moins 2 caractères';
    }
    
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le téléphone est requis';
    } else if (formData.telephone.replace(/[\s\-+]/g, '').length < 9) {
      newErrors.telephone = 'Numéro de téléphone invalide';
    }
    
    if (!formData.mail.trim()) {
      newErrors.mail = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.mail)) {
      newErrors.mail = 'Email invalide';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'contacts'), {
        nom: formData.nom.trim(),
        prenom: formData.prenom.trim(),
        telephone: formData.telephone.trim(),
        mail: formData.mail.trim().toLowerCase(),
        message: formData.message.trim(),
        createdAt: serverTimestamp()
      });
      
      setFormData({
        nom: '',
        prenom: '',
        telephone: '',
        mail: '',
        message: ''
      });
      
      alert('Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement:', error);
      alert('Une erreur s\'est produite. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact"
      ref={sectionRef}
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden"
      style={{ backgroundColor: '#800000' }}
    >
      {/* Corner Decorations */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-48 pointer-events-none z-10">
        <img src="/corner.png" alt="" className="w-full h-full object-contain" />
      </div>
      <div className="absolute top-0 left-0 w-32 h-32 sm:w-40 sm:h-40 lg:w-52 lg:h-48 pointer-events-none z-10 transform scale-x-[-1]">
        <img src="/corner.png" alt="" className="w-full h-full object-contain" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="text-[#0dc768] font-bold text-sm uppercase tracking-widest border-2 border-[#0dc768] px-4 py-2 rounded-full">
              Contact
            </span>
          </div>
          <h2 className="font-edo text-5xl sm:text-6xl lg:text-8xl mb-4" style={{ color: '#0dc768' }}>
            CONTACTEZ-NOUS
          </h2>
          <div className="h-1 w-24 bg-white/50 mx-auto mb-6" />
          <p className="text-white/90 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Une question ? N'hésitez pas à nous contacter
          </p>
        </div>

        {/* Map & Form Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Map Section */}
          <div className={`relative group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
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
          </div>

          {/* Contact Form Section */}
          <div className={`flex flex-col justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden backdrop-blur-xl"
                 style={{
                   background: 'linear-gradient(135deg, rgba(13, 199, 104, 0.1) 0%, rgba(128, 0, 0, 0.15) 100%)',
                   border: '2px solid rgba(13, 199, 104, 0.3)'
                 }}>
              
              {/* Decorative Pattern Overlay */}
              <div className="absolute inset-0 opacity-5"
                   style={{
                     backgroundImage: `repeating-linear-gradient(45deg, #0dc768 0px, #0dc768 1px, transparent 1px, transparent 20px),
                                      repeating-linear-gradient(-45deg, #0dc768 0px, #0dc768 1px, transparent 1px, transparent 20px)`
                   }} />
              
              <div className="relative">
                <div className="mb-8">
                  <h3 className="text-3xl sm:text-4xl font-black mb-4 leading-tight text-white drop-shadow-lg">
                    Envoyez-nous un<br />
                    <span className="text-[#0dc768]">Message</span>
                  </h3>
                </div>

                {/* Form */}
                <div className="space-y-5">
                  {/* Nom et Prénom */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm drop-shadow">
                        Nom <span className="text-[#0dc768]">*</span>
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 border-2 ${errors.nom ? 'border-red-400' : 'border-white/30'} rounded-xl focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/50 transition-all text-white placeholder-white/50 disabled:opacity-50 disabled:cursor-not-allowed bg-white/10 backdrop-blur-sm`}
                        placeholder="Nom"
                      />
                      {errors.nom && <p className="text-red-300 text-xs mt-1 font-semibold">{errors.nom}</p>}
                    </div>
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm drop-shadow">
                        Prénom <span className="text-[#0dc768]">*</span>
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 border-2 ${errors.prenom ? 'border-red-400' : 'border-white/30'} rounded-xl focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/50 transition-all text-white placeholder-white/50 disabled:opacity-50 disabled:cursor-not-allowed bg-white/10 backdrop-blur-sm`}
                        placeholder="Prénom"
                      />
                      {errors.prenom && <p className="text-red-300 text-xs mt-1 font-semibold">{errors.prenom}</p>}
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm drop-shadow">
                      Téléphone <span className="text-[#0dc768]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border-2 ${errors.telephone ? 'border-red-400' : 'border-white/30'} rounded-xl focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/50 transition-all text-white placeholder-white/50 disabled:opacity-50 disabled:cursor-not-allowed bg-white/10 backdrop-blur-sm`}
                      placeholder="+212 6XX XXX XXX"
                    />
                    {errors.telephone && <p className="text-red-300 text-xs mt-1 font-semibold">{errors.telephone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm drop-shadow">
                      Email <span className="text-[#0dc768]">*</span>
                    </label>
                    <input
                      type="email"
                      name="mail"
                      value={formData.mail}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border-2 ${errors.mail ? 'border-red-400' : 'border-white/30'} rounded-xl focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/50 transition-all text-white placeholder-white/50 disabled:opacity-50 disabled:cursor-not-allowed bg-white/10 backdrop-blur-sm`}
                      placeholder="votre.email@exemple.com"
                    />
                    {errors.mail && <p className="text-red-300 text-xs mt-1 font-semibold">{errors.mail}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm drop-shadow">
                      Message <span className="text-[#0dc768]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      rows="4"
                      className={`w-full px-4 py-3 border-2 ${errors.message ? 'border-red-400' : 'border-white/30'} rounded-xl focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/50 transition-all text-white placeholder-white/50 resize-none disabled:opacity-50 disabled:cursor-not-allowed bg-white/10 backdrop-blur-sm`}
                      placeholder="Votre message..."
                    ></textarea>
                    {errors.message && <p className="text-red-300 text-xs mt-1 font-semibold">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 rounded-xl font-bold text-lg text-white hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 relative overflow-hidden group"
                    style={{ background: 'linear-gradient(135deg, #0dc768 0%, #800000 100%)' }}
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10"></div>
                        <span className="relative z-10">Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">Envoyer le Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-white/70 text-xs text-center mt-4">
                    * Champs obligatoires
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}