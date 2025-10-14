import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideData {
  id: number;
  image: string;
  title: string;
  description: string;
  

}




const slides: SlideData[] = [
    {
      id: 1,
      image: "/images/chance.png",
      title: "Nous croyons à l'égalité des chances",
      description: "Nous partageons nos connaissances, offrons formation et soutien pour favoriser la croissance professionnelle de nos employés."+
                    " Nous garantissons des opportunités équitables, "+
                    "un développement à long terme, et valorisons la diversité culturelle.",
      
    },
    {
      id: 2,
      image: "/images/evolution.png",
      title: "Nous évoluons constamment",
      description: "Grâce à des solutions de transport fiables et durables,"+
                    " nous facilitons les échanges internationaux, "+
                    "soutenons les économies locales et encourageons une logistique responsable. "+
                    "Nous intégrons les nouvelles technologies pour répondre aux besoins du marché."
    },
    {
      id: 3,
      image: "/images/famille.png",
      title: "Nous sommes une famille",
      description: "Nous cultivons un esprit familial basé sur la confiance,"+
                    " le dévouement et l'appartenance. "+
                    "Cela nous pousse à agir avec courage et responsabilité pour le bien de nos clients et collaborateurs. "
    },
    {
      id: 4,
      image: "/images/passion.png",
      title: "Nous sommes passionnés et engagés",
      description: "Nous sommes animés par une passion qui nous pousse à offrir des services d'excellence,"+
                    "à relever les défis avec persévérance et à offrir une expérience unique à nos clients."+
                    "Chaque membre de notre équipe partage cette volonté de dépassement et de satisfaction."
    },
  
    {
      id: 5,
      image: "/images/soucieux.png",
      title: "Nous nous soucions des gens",
      description: "Nous valorisons chaque individu pour sa contribution unique."+
                    "Nous établissons des relations authentiques basées sur l'éthique"+
                    "le respect et l'esprit d'équipe, en nous préoccupant sincèrement de"+
                    "la satisfaction et fidélité de nos clients et collaborateurs."
    }
  ];

  
const NewSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState<number | null>(null);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    handleResize(); // calcul initial
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth === null) return null; // évite le rendu côté serveur

  const isMobile = windowWidth < 768;
  const maxIndex = isMobile ? slides.length - 1 : slides.length - 3;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < maxIndex ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < maxIndex;

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => {
//       // Sur mobile (1 slide), on peut aller jusqu'au dernier slide
//       // Sur desktop (3 slides), on s'arrête quand on ne peut plus afficher 3 slides complètes
//       const maxIndex = window.innerWidth < 768 ? slides.length - 1 : slides.length - 3;
//       return prevIndex < maxIndex ? prevIndex + 1 : prevIndex;
//     });
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => prevIndex > 0 ? prevIndex - 1 : 0);
//   };

//   const canGoPrev = currentIndex > 0;
//   const canGoNext = window.innerWidth < 768 ? currentIndex < slides.length - 1 : currentIndex < slides.length - 3;

  return (
    <div className="relative w-full max-w-7xl mx-auto px-2 py-8">
      {/* Navigation Button Left */}
      <button
        onClick={prevSlide}
        disabled={!canGoPrev}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
          canGoPrev 
            ? 'bg-white hover:bg-gray-50 text-gray-800 hover:shadow-xl transform hover:scale-110' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        <ChevronLeft size={24} />
      </button>

      {/* Slider Container */}
      <div className="overflow-hidden mx-4">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 768 ? 1 : 3))}%)` 
          }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="w-full md:w-1/3 flex-shrink-0 px-3"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-96">
                <div className="relative h-35 overflow-hidden justify-items-center xs:justify-center">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    width={125}
                    className="w-24 h-24 object-contain transition-transform duration-300 hover:scale-105"
                  />
                  
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{slide.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{slide.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Button Right */}
      <button
        onClick={nextSlide}
        disabled={!canGoNext}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 ${
          canGoNext 
            ? 'bg-white hover:bg-gray-50 text-gray-800 hover:shadow-xl transform hover:scale-110' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {slides.map((_, index) => {
          const isActive = window.innerWidth < 768 
            ? index === currentIndex 
            : index >= currentIndex && index < currentIndex + 3;
          
          return (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                isActive ? 'bg-gray-500 scale-110' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewSlider;
