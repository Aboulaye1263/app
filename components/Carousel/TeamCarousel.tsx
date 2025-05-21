import React, { useState } from 'react';
import { Button } from 'flowbite-react';
import { ArrowLeftIcon, ArrowRightIcon } from 'flowbite-react';
import { cn } from '@/lib/utils';

interface TeamMember {
  id: number;
  name: string;
  position: string;
  since: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Maurice NDONG',
    position: 'Directeur Général Adjoint',
    since: 'Mai 2009',
    description: 'Professionnel expérimenté avec plus de 15 ans dans le secteur. Expert en gestion opérationnelle et optimisation des processus. Passionné par l\'innovation et le développement des équipes.',
    image: '/images/team/maurice-ndong.png',
  },
  {
    id: 2,
    name: 'Raoul DAGBA',
    position: 'Directeur Financier et Comptable',
    since: 'Date absente',
    description: 'Experte en finance avec un parcours solide dans la gestion stratégique des ressources. Responsable de la planification financière et des analyses de performance de l\'entreprise.',
    image: '/images/team/raul-dagba.png',
  },
  {
    id: 3,
    name: 'Hatem HAIDAR',
    position: 'Directeur des Exploitations',
    since: 'Avril 2016',
    description: 'Spécialiste de la gestion de projets complexes avec une approche méthodique et orientée résultats. Fort d\'une expérience variée dans différents domaines d\'expertise.',
    image: '/images/team/hatem-haidar.png',
  },
  {
    id: 4,
    name: 'Alain Dos REIS',
    position: 'Secrétaire Général',
    since: 'Avril 2008',
    description: 'Spécialiste de la gestion de projets complexes avec une approche méthodique et orientée résultats. Fort d\'une expérience variée dans différents domaines d\'expertise.',
    image: '/images/team/alain-dos-reis.png',
  }
];



const TeamCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const activeMember = teamMembers[activeIndex];

  return (
    
      <div className="relative w-full">
        <div className="flex flex-col md:flex-row overflow-hidden">
        
          {/* Photo Section (Center) */}
          <div className="bg-gray-100 md:w-[60%] items-center justify-center flex">
            <img 
              src={activeMember.image} 
              alt={activeMember.name} 
              className="md:h-[70vh] object-cover"
            />
          </div>
          
          {/* Description Section (Right) */}
          <div className="bg-[var(--primary)] p-6 md:w-[40%] text-justify">
            <div className="h-40 mb-4">
              <p className="text-sm">
                {activeMember.description}
              </p>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-xl font-bold">{activeMember.name}</h3>
              <p className="font-medium">{activeMember.position}</p>
              <p className="text-sm mt-1">{activeMember.since}</p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        {/* <div className="absolute left-0 top-1/2 -translate-y-1/2">
          <Button 
             
            size="icon" 
            className="bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10"
            onClick={prevSlide}
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Button>
        </div> */}
        
        {/* <div className="absolute right-0 top-1/2 -translate-y-1/2">
          <Button 
            
            size="icon" 
            className="bg-black/30 hover:bg-black/50 text-white rounded-full h-10 w-10"
            onClick={nextSlide}
          >
            <ArrowRightIcon className="h-5 w-5" />
          </Button>
        </div> */}
        
        {/* Dots */}
        <div className="flex justify-center items-center gap-2 mt-4">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                activeIndex === index ? "bg-amber-300" : "bg-gray-300"
              )}
            />
          ))}
        </div>
      </div>
    
  );
};

export default TeamCarousel;
