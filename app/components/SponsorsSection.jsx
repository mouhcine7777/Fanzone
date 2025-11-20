import React, { useState, useEffect, useRef } from 'react';
import { Download, Handshake, Users, TrendingUp, Award } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function SponsorSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    entreprise: '',
    telephone: '',
    mail: ''
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
    
    if (!formData.entreprise.trim()) {
      newErrors.entreprise = 'L\'entreprise est requise';
    } else if (formData.entreprise.trim().length < 2) {
      newErrors.entreprise = 'Le nom de l\'entreprise doit contenir au moins 2 caractères';
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

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await addDoc(collection(db, 'sponsors'), {
        nom: formData.nom.trim(),
        prenom: formData.prenom.trim(),
        entreprise: formData.entreprise.trim(),
        telephone: formData.telephone.trim(),
        mail: formData.mail.trim().toLowerCase(),
        createdAt: serverTimestamp()
      });

      const link = document.createElement('a');
      link.href = '/dossiersponsoring.pdf';
      link.download = 'Dossier_Sponsoring_FanZone_CAN2025.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setFormData({
        nom: '',
        prenom: '',
        entreprise: '',
        telephone: '',
        mail: ''
      });
      
      alert('Merci ! Vos informations ont été enregistrées. Le téléchargement du dossier de sponsoring va commencer.');
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement:', error);
      alert('Une erreur s\'est produite. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: Users,
      title: "1500+",
      subtitle: "visiteurs/jour"
    },
    {
      icon: TrendingUp,
      title: "29 jours",
      subtitle: "d'événement"
    },
    {
      icon: Award,
      title: "Exclusivité",
      subtitle: "sectorielle"
    },
    {
      icon: Handshake,
      title: "ROI",
      subtitle: "garanti"
    }
  ];

  return (
    <section 
    id="partenariat"
      ref={sectionRef}
      className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0dc768]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#800000]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#0dc768] to-[#800000] text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-4 sm:px-6 py-2 rounded-full shadow-lg">
              Partenariat
            </span>
          </div>
          <h2 className="font-edo text-4xl sm:text-5xl lg:text-7xl mb-4 sm:mb-6">
            <span className="text-gray-800">Devenez </span>
            <span className="bg-gradient-to-r from-[#0dc768] to-[#800000] bg-clip-text text-transparent">partenaire</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#0dc768] to-[#800000] mx-auto mb-6" />
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Téléchargez notre dossier de sponsoring et découvrez comment associer votre marque à l'événement sportif de l'année
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left Side - Benefits */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            
            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#0dc768]/10 to-[#800000]/10 mb-3">
                      <Icon className="w-6 h-6 text-[#0dc768]" />
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mb-1">
                      {benefit.title}
                    </p>
                    <p className="text-sm text-gray-600">
                      {benefit.subtitle}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Main Info Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Handshake className="w-7 h-7 text-[#0dc768]" />
                Pourquoi devenir partenaire ?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#0dc768] mt-2 flex-shrink-0"></span>
                  <span>Visibilité maximale auprès d'une audience passionnée</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#0dc768] mt-2 flex-shrink-0"></span>
                  <span>Packages personnalisés adaptés à vos objectifs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#0dc768] mt-2 flex-shrink-0"></span>
                  <span>Activation sur mesure avec événements brandés</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#0dc768] mt-2 flex-shrink-0"></span>
                  <span>Positionnement unique dans votre secteur</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={`lg:sticky lg:top-8 h-fit transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100 relative overflow-hidden">
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0dc768]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-[#800000]/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 bg-gradient-to-br from-[#0dc768] to-[#800000]">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Téléchargez le Dossier
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Remplissez le formulaire pour recevoir le dossier complet
                  </p>
                </div>

                <div className="space-y-5">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`text-gray-700 w-full px-4 py-3 border-2 ${errors.nom ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                      placeholder="Votre nom"
                    />
                    {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`text-gray-700 w-full px-4 py-3 border-2 ${errors.prenom ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                      placeholder="Votre prénom"
                    />
                    {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Entreprise <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`text-gray-700 w-full px-4 py-3 border-2 ${errors.entreprise ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                      placeholder="Nom de votre entreprise"
                    />
                    {errors.entreprise && <p className="text-red-500 text-sm mt-1">{errors.entreprise}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`text-gray-700 w-full px-4 py-3 border-2 ${errors.telephone ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                      placeholder="+212 6XX XXX XXX"
                    />
                    {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="mail"
                      value={formData.mail}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`text-gray-700 w-full px-4 py-3 border-2 ${errors.mail ? 'border-red-500' : 'border-gray-200'} rounded-lg focus:outline-none focus:border-[#0dc768] focus:ring-2 focus:ring-[#0dc768]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed`}
                      placeholder="votre.email@exemple.com"
                    />
                    {errors.mail && <p className="text-red-500 text-sm mt-1">{errors.mail}</p>}
                  </div>

                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-full font-bold text-white uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 bg-gradient-to-r from-[#0dc768] to-[#800000] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Download className="w-5 h-5" />
                        Télécharger le Dossier
                      </>
                    )}
                  </button>

                  <p className="text-gray-500 text-xs text-center mt-4">
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