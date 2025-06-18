
import React, { useEffect, useRef, useState } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image: string;
  position: "left" | "right";
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  image,
  position,
  index
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative flex items-center justify-center lg:justify-center md:justify-center justify-start transition-all duration-700 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Point central sur la ligne - visible sur toutes les tailles d'écran */}
      <div className="absolute lg:left-1/2 md:left-1/2 left-6 transform lg:transform md:transform -translate-x-1/2 md:-translate-x-1/2 lg:-translate-x-1/2 translate-x-0 w-6 h-6 bg-white border-4 border-[var(--primary)] rounded-full shadow-lg z-10 flex items-center justify-center">
        <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
      </div>


      {/* Contenu à gauche pour desktop, aligné à droite de la ligne pour mobile/tablette */}
      {position === "left" && (
        
        <div className="w-full flex lg:justify-end md:justify-end justify-start lg:pr-8 md:pr-16 pl-20">
          
          <div className="w-full md:w-96 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-white text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                {year}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed text-justify">{description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Contenu à droite pour desktop, aligné à droite de la ligne pour mobile/tablette */}
      {position === "right" && (
        <div className="w-full flex lg:justify-start md:justify-start justify-start lg:pl-8 md:pl-16 pl-20">
          <div className="w-full md:w-96 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <div className="relative overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute top-4 left-4 lg:left-4 md:left-4  bg-[var(--primary)] text-white px-3 py-1 rounded-full text-sm font-semibold">
                {year}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
