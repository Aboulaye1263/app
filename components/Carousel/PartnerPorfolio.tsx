import { refs } from '@/constants/refs';
import { useState, useEffect } from 'react';

// Images placeholder pour les logos des partenaires
const partnerLogos = [...refs, ...refs, ...refs];

const PartnerPortfolio = () => {
  const [currentLogos, setCurrentLogos] = useState(partnerLogos.slice(0, 9));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (partnerLogos.length <= 9) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % partnerLogos.length;
        const newLogos = [];
        
        for (let i = 0; i < 9; i++) {
          let j = i+3
          const logoIndex = (newIndex + j) % partnerLogos.length;
          newLogos.push(partnerLogos[logoIndex]);
        }
        
        setCurrentLogos(newLogos);
        return newIndex;
      });
    }, 3000); // Rotation toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4 bg-portfolio-bg md:hidden flex">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {currentLogos.map((logo, index) => (
            <div
             data-aos="fade-up"
              key={`${logo}-${index}-${currentIndex}`}
              className="aspect-square bg-portfolio-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 overflow-hidden border border-border group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="w-full h-full p-4 flex items-center justify-center relative overflow-hidden">
                <img
                  src={logo}
                  alt={`Partenaire ${index + 1}`}
                  className="w-full h-full object-contain filter  group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=200&fit=crop';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
        
        {partnerLogos.length > 9 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.min(partnerLogos.length, 5) }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / 3) % 5 === index
                    ? 'bg-primary scale-125'
                    : 'bg-border'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      
    </section>
  );
};

export default PartnerPortfolio;