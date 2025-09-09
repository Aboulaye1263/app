import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  excerpt: string;
  fullText: string;
  rating: number;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Touba Fruit/Senfruit",
    role: "Responsable Logistique",
    company: "Papice MENDY",
    excerpt: "Grâce à la maîtrise de TOM MEDLOG du transport réfrigéré et de la chaîne logistique, nous avons considérablement réduit nos délais d'acheminement et amélioré la traçabilité de nos expéditions. Leur équipe est à l'écoute, disponible et force de proposition.",
      
    fullText: "En tant qu’acteur majeur de l’exportation de fruits frais vers l’Europe,"+
      " nous avons trouvé en Tom Medlog Sénégal un partenaire logistique fiable et réactif."+
      " Grâce à leur maîtrise du transport réfrigéré et de la chaîne logistique, nous avons considérablement réduit nos délais d’acheminement et amélioré la traçabilité de nos expéditions jusqu’au Port de Dakar."+
      " Leur équipe est à l’écoute, disponible et force de proposition, ce qui nous permet de nous concentrer pleinement sur notre cœur de métier. "+
      "Nous recommandons vivement Tom Medlog à toute entreprise recherchant un service logistique de qualité au Sénégal.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Agroline SA",
    role: "Responsable Achats et Transit",
    company: "Vincent HUET",
    excerpt: "TOM MEDLOG allie professionnalisme et réactivité. Grâce à leur expertise et leur disponibilité, nous pouvons offrir des produits authentiques Sénégalais. ",
            
    fullText: "En qualité de Responsable Achats et Transit/supply chain d’Agroline SA, une des plus grandes entreprises agro-alimentaires du Sénégal,"+
      " je tiens à exprimer notre entière satisfaction quant à notre collaboration avec TOM MEDLOG. Leurs services de transport,"+
      " de logistique et de stockage de conteneurs sont essentiels pour notre chaîne d’approvisionnement, garantissant la qualité et la fraîcheur de nos produits."+
      " TOM MEDLOG allie professionnalisme et réactivité, nous permettant ainsi de rester compétitifs sur le marché ouest-africain. "+
      "Grâce à leur expertise et leur disponibilité, nous pouvons nous concentrer sur notre mission : offrir des produits authentiques inspirés des saveurs traditionnelles du Sénégal.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "PATISEN",
    role: "Service logistique",
    company: "",
    excerpt: "Avec TOM MEDLOG, nous avons trouvé bien plus qu'un prestataire : un véritable partenaire stratégique qui partage nos valeurs de rigueur, d'innovation et de respect des engagements. C'est ce qui fait toute la différence.",
      
    fullText: "Dans un secteur aussi exigeant que le nôtre, la fiabilité logistique est essentielle. "+
      "Avec Tom Medlog, nous avons trouvé bien plus qu’un prestataire : un véritable partenaire stratégique. "+
      "Leur expertise, leur réactivité et leur parfaite connaissance de la logistique et des opérations portuaires ont largement contribué à fluidifier notre supply chain,"+
      " au Sénégal comme à l’international. Grâce à cette collaboration, nous gagnons en performance logistique tout en maintenant les standards de qualité qui font la réputation de PATISEN à travers l’Afrique et au-delà."+
      " Tom Medlog partage nos valeurs de rigueur, d’innovation et de respect des engagements. C’est ce qui fait toute la différence. ",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 4,
    name: "Tropical Fruits",
    role: "Directrice Générale",
    company: "Mouna Assad",
    excerpt: "Depuis plus de 10 ans, TOM MEDLOG est un partenaire de confiance qui comprend parfaitement nos impératifs et anticipe nos besoins.",
    fullText:  "En tant qu’entreprise agroalimentaire spécialisée dans la distribution de fruits et légumes frais à travers le Sénégal,"+
      " nous avons des exigences élevées en matière de qualité, de rigueur et de réactivité. Depuis plus de 10 ans, TOM MEDLOG est un partenaire de confiance qui comprend parfaitement nos impératifs et anticipe nos besoins."+
      " Leur maîtrise des opérations logistiques, la fiabilité de leur service de transport, la gestion optimisée du stockage des conteneurs, ainsi que la prise en charge experte des conteneurs frigorifiques,"+
      " sont autant d’éléments clés qui nous permettent de garantir à nos clients des produits toujours frais, livrés dans les meilleurs délais."+
      " TOM MEDLOG incarne les valeurs qui nous sont chères : professionnalisme, efficacité et engagement. C’est un partenaire stratégique sur lequel nous savons pouvoir nous appuyer au quotidien.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || isModalOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, isModalOpen]);

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const openModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="w-full md:w-[70vh] max-w-1xl mx-auto py-16 px-4">
      <div 
        className="relative"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {/* Navigation Arrows */}
        <button
          onClick={prevTestimonial}
          className="absolute lg:-left-4 left-4 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-[var(--primary)] hover:bg-gray-600 shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 group"
          aria-label="Témoignage précédent"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800 group-hover:text-gray-50 transition-colors" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute lg:-right-4 right-4 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-[var(--primary)] hover:bg-gray-600 shadow-lg hover:shadow-xl rounded-full p-3 transition-all duration-300 group"
          aria-label="Témoignage suivant"
        >
          <ChevronRight className="w-6 h-6 text-gray-800 group-hover:text-gray-50 transition-colors" />
        </button>

        {/* Testimonial Card */}
        <div className="bg-[var(--primary)] rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 mx-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
            {/* Avatar */}
            

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Rating */}

              {/* Author Info */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600 font-medium">
                  {testimonials[currentIndex].role}
                </p>
                <p className="text-gray-500">
                  {testimonials[currentIndex].company}
                </p>
              </div>

              {/* Excerpt */}
              <blockquote className="text-xs md:text-sm text-gray-700 mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].excerpt}"
              </blockquote>

              {/* Read More Button */}
              <button
                onClick={() => openModal(testimonials[currentIndex])}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Lire la suite
              </button>
            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-gray-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Fermer"
            >
              <X className="w-6 h-6 text-gray-500" />
            </button>

            <div className="p-8">
              {/* Header */}
              <div className="flex items-center space-x-6 mb-8">
               
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {selectedTestimonial.name}
                  </h3>
                  <p className="text-gray-700 font-medium text-lg">
                    {selectedTestimonial.role}
                  </p>
                  <p className="text-gray-500">
                    {selectedTestimonial.company}
                  </p>
                </div>
              </div>

              {/* Rating */}
              

              {/* Full Text */}
              <blockquote className="lg:text-xl text-sm text-gray-700 leading-relaxed italic">
                "{selectedTestimonial.fullText}"
              </blockquote>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;