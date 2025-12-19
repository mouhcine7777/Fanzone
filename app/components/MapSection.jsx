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
      className="relative py-20 sm:py-28 lg:py-36 overflow-hidden bg-[#8b0000]"
    >
      {/* Colorful Energy Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-0 w-1/2 h-40 bg-gradient-to-r from-green-500/20 to-transparent blur-3xl" />
        <div className="absolute top-1/2 right-0 w-1/2 h-48 bg-gradient-to-l from-yellow-400/20 to-transparent blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-1/2 h-40 bg-gradient-to-r from-orange-500/20 to-transparent blur-3xl" />
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-[#0dc768] border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="text-sm font-black text-black uppercase tracking-wider">
              Contact
            </span>
          </div>

          {/* Title */}
          <h2 className="font-edo text-4xl sm:text-6xl lg:text-8xl mb-6 leading-none">
            <span className="inline-block bg-[#0dc768] px-6 py-3 transform -skew-x-12 italic border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <span className="inline-block transform skew-x-12 text-white">CONTACTEZ-NOUS</span>
            </span>
          </h2>

          <p className="text-white text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed font-medium">
            Une question ? N'hésitez pas à nous contacter
          </p>
        </div>

        {/* Map & Form Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Map Section */}
          <div className={`relative group transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <div className="relative overflow-hidden border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] h-[400px] sm:h-[500px] lg:h-[600px]">
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
              <div className="absolute bottom-0 left-0 right-0 bg-[#0dc768] border-t-4 border-black p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 flex-shrink-0 mt-1 text-black" />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-black mb-1 uppercase">Parc du Vélodrome</h3>
                    <p className="text-black/80 text-sm sm:text-base font-bold">Casablanca, Maroc</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className={`flex flex-col justify-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="relative bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] p-8 sm:p-10 lg:p-12">
              
              <div className="relative">
                <div className="mb-8">
                  <h3 className="text-2xl sm:text-4xl font-black mb-4 leading-tight text-black uppercase">
                    Envoyez-nous un<br />
                    <span className="text-[#0dc768]">Message</span>
                  </h3>
                </div>

                {/* Form */}
                <div className="space-y-5">
                  {/* Nom et Prénom */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-black font-black mb-2 text-sm uppercase tracking-wide">
                        Nom <span className="text-[#8b0000]">*</span>
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 border-2 ${errors.nom ? 'border-[#8b0000]' : 'border-black'} focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/50 transition-all text-black placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 font-medium`}
                        placeholder="Nom"
                      />
                      {errors.nom && <p className="text-[#8b0000] text-xs mt-1 font-bold">{errors.nom}</p>}
                    </div>
                    <div>
                      <label className="block text-black font-black mb-2 text-sm uppercase tracking-wide">
                        Prénom <span className="text-[#8b0000]">*</span>
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-4 py-3 border-2 ${errors.prenom ? 'border-[#8b0000]' : 'border-black'} focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/50 transition-all text-black placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 font-medium`}
                        placeholder="Prénom"
                      />
                      {errors.prenom && <p className="text-[#8b0000] text-xs mt-1 font-bold">{errors.prenom}</p>}
                    </div>
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label className="block text-black font-black mb-2 text-sm uppercase tracking-wide">
                      Téléphone <span className="text-[#8b0000]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border-2 ${errors.telephone ? 'border-[#8b0000]' : 'border-black'} focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/50 transition-all text-black placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 font-medium`}
                      placeholder="+212 6XX XXX XXX"
                    />
                    {errors.telephone && <p className="text-[#8b0000] text-xs mt-1 font-bold">{errors.telephone}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-black font-black mb-2 text-sm uppercase tracking-wide">
                      Email <span className="text-[#8b0000]">*</span>
                    </label>
                    <input
                      type="email"
                      name="mail"
                      value={formData.mail}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-4 py-3 border-2 ${errors.mail ? 'border-[#8b0000]' : 'border-black'} focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/50 transition-all text-black placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 font-medium`}
                      placeholder="votre.email@exemple.com"
                    />
                    {errors.mail && <p className="text-[#8b0000] text-xs mt-1 font-bold">{errors.mail}</p>}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-black font-black mb-2 text-sm uppercase tracking-wide">
                      Message <span className="text-[#8b0000]">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      rows="4"
                      className={`w-full px-4 py-3 border-2 ${errors.message ? 'border-[#8b0000]' : 'border-black'} focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/50 transition-all text-black placeholder-gray-400 resize-none disabled:opacity-50 disabled:cursor-not-allowed bg-gray-50 font-medium`}
                      placeholder="Votre message..."
                    ></textarea>
                    {errors.message && <p className="text-[#8b0000] text-xs mt-1 font-bold">{errors.message}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#0dc768] border-4 border-black font-black text-lg text-white hover:scale-105 transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3 uppercase tracking-wide"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Envoyer le Message</span>
                      </>
                    )}
                  </button>

                  <p className="text-gray-600 text-xs text-center mt-4 font-bold">
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