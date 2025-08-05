import { useEffect, useState } from 'react';
import Card from './Card';
import { refs } from '@/constants/refs';
import Image from "next/image";



const LogoSlider = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate cards for infinite scroll effect
  const duplicatedCards = [...refs, ...refs, ...refs];

  return (
    <div className="relative overflow-hidden w-full md:block  hidden">
      <div 
        className={`flex gap-6 ${isPaused ? 'md:hover:[animation-play-state:paused]' : 'animate-scroll'}`}
        style={{
          width: `${duplicatedCards.length * 420}px`,
        }}
      >
        {duplicatedCards.map((ref, index) => (
          <div key={index} className="flex-none md:w-[200px] md:h-[150px] mx-4">
                          <Image
                            src={ref}
                            alt={`Reference ${index + 1}`}
                            width={200}
                            height={150}
                            className={` ${isPaused ? 'hover:[animation-play-state:paused]' : 'animate-scroll'} transition-all duration-300 hover:scale-105 md:w-full md:h-full w-64 h-64 object-contain`}
                            loading="eager"
                            priority={index < refs.length} // Priorité sur le premier set uniquement
                            quality={100}
                          />
                        </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
