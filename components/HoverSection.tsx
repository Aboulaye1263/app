import { useState } from "react";
import Image from "next/image";

interface HoverSectionProps{
    title: string;
    content: string;
}

const HoverSection = ({ title, content }: HoverSectionProps) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div 
        className="relative w-full h-40 bg-[var(--secondary)] rounded-lg shadow-md overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Contenu initial (icône + titre) */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center gap-3 transition-all duration-700 fade-in-out
            ${isHovered ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
        >
         
          <h3 className="text-3xl font-bold text-white text-center">{title}</h3>
        </div>
  
        {/* Contenu au hover (texte) */}
        <div 
          className={`absolute inset-0 flex items-center justify-center p-6 bg-[var(--secondary)] transition-all duration-300 ease-in-out
            ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
        >
          <p className="text-white text-center">{content}</p>
        </div>
      </div>
    );
  };
  
  export default HoverSection;