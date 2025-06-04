import { useEffect, useState } from "react";
import "./slider.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { services } from "@/constants/services";



type SliderImage = {
    src: string;
    alt: string;
    iconSrc: string;
    tagLink: string;
  };
  
  interface ExpandSliderProps {
    images: SliderImage[];
    className?: string;
  }
  
  const ExpandSlider = ({ images, className }: ExpandSliderProps) => {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const [isTouch, setIsTouch] = useState(false);
  
    // Detect touch devices
    useEffect(() => {
      setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);
  
    const handleItemClick = (index: number) => {
      if (isTouch) {
        setExpandedIndex(index);
      }
    };
  
      

    return (

      <div className={cn("w-full flex flex-col gap-4 expand-slider-container", className)}>
        <div className="flex w-full h-[500px] md:h-[600px] gap-2 overflow-hidden rounded-2xl shadow-xl">
        
          {images.map((image, index) => (
            <div
              
              key={index}
              className={cn(
                "relative overflow-hidden transition-all duration-500 ease-out cursor-pointer",
                expandedIndex === index 
                  ? "w-[70%] md:w-[60%] border-2 border-white/20" 
                  : "w-[15%] md:w-[20%] hover:w-[20%] md:hover:w-[25%]"
              )}
              onMouseEnter={() => !isTouch && setExpandedIndex(index)}
              onClick={() => handleItemClick(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
                style={{
                  transform: expandedIndex === index ? "scale(1.05)" : "scale(1.2)",
                }}
              />
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 transition-all duration-500",
                expandedIndex === index 
                  ? "opacity-100" 
                  : "opacity-0 hover:opacity-90"
              )}>
                
                <h3 className="flex text-white font-semibold text-xl tracking-wide items-center">
                <img
                  
                  src={image.iconSrc} 
                  alt={`${image.alt} icon`}
                  className="w-10 h-10 mr-3"
                />{image.alt}</h3>
                
                    <Link
                    href={`/services/${image.tagLink}`}
                    className={`mt-8 flex items-center gap-2 text-sm font-medium text-[var(--primary)]
                                `}
                  >
                    <span>En savoir plus</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
        
                
                {expandedIndex === index && (
                  <p className="text-white/80 mt-2 max-w-md text-sm md:text-base">
                    {index === 0 && "Notre flotte moderne de plus de 100 camions et plus 150 remorques, équipée de systèmes GPS avancés, assure un transport fiable et optimisé. Avec plus de 30 nouveaux camions uniquement dédiés aux transferts de conteneurs, nous maximisons l'efficacité, la durabilité et la traçabilité."}
                    {index === 1 && "Notre terminal à conteneurs, d’une surface + de 95.000 m² de capacité de stockage sous douane, offre une capacité de stockage de plus de 10 000 EVP garantissant une gestion optimale des flux. Il est également équipé de 350 prises réfrigérées et 10 groupes électrogènes neufs, permettant un contrôle total sur les cargaisons sensibles à la température."}
                    {index === 2 && "Avec plus de 50.000 m² d'entrepôts sous douane, nous proposons des solutions d’entreposage sécurisées et flexibles pour une large gamme de marchandises, qu’il s’agisse de produits de base (riz, sucre, céréales), de produits périssables, ou d’autres biens importés ou en transit."+
                                    "Notre capacité de stockage de plus de 150.000 tonnes permet une gestion optimisée et évolutive des flux, adaptée aux besoins spécifiques de chaque client."}
                    {index === 3 && "Nous proposons une gamme complète de services spécialisés pour maximiser la performance et la durabilité de vos flux : maintenance, réparation, dépotage, pesage, flexibags… Nos équipes techniques certifiées aux standards internationaux interviennent sur une capacité annuelle de plus de 150.000 EVP"}
                 
                  </p>
                )}
              </div>
            </div>
          ))}
          </div>
       
      
        
        {isTouch && (
          <div className="flex justify-center mt-4">
            <p className="text-xs text-white/60">Touchez une image pour l'agrandir</p>
          </div>
        )}
      </div>
    );
  };
  
  export default ExpandSlider;
  