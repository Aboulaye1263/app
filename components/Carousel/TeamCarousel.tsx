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
    description: 'TOM MEDLOG est le fruit d’une ambition forte : transformer durablement le secteur logistique au Sénégal, en proposant des solutions intégrées, fiables et compétitives, au service des économies locales.'+
                 'Notre action s’inscrit pleinement dans les objectifs de transformation du Port Autonome de Dakar à l’horizon 2035, visant à positionner le Sénégal comme un hub logistique incontournable en Afrique de l’Ouest.'+
                 'Adossés au Groupe MSC, leader mondial du transport maritime, nous combinons une vision globale à une présence de proximité. Notre modèle repose sur une expertise de terrain, une culture de la performance, et une capacité à nous adapter aux besoins spécifiques du territoire.'+
                 'Chez TOM MEDLOG, nous croyons que la performance passe par l’humain, par l’excellence opérationnelle et par la rigueur au quotidien. Mon rôle est de mobiliser nos équipes autour de ces valeurs pour bâtir, chaque jour, une logistique plus fluide, plus intelligente, et porteuse de développement.'+
                 'Nous sommes prêts à relever vos défis logistiques avec réactivité, fiabilité et engagement. N’hésitez pas à nous faire confiance. Nous mettrons tout en œuvre pour vous satisfaire.',
    image: '/images/team/maurice-ndong.png',
  },
  {
    id: 2,
    name: 'Raoul DAGBA',
    position: 'Directeur Financier et Comptable',
    since: 'Date absente',
    description: 'TOM MEDLOG est le fruit d’une ambition forte : transformer durablement le secteur logistique au Sénégal, en proposant des solutions intégrées, fiables et compétitives, au service des économies locales.'+
                 'Notre action s’inscrit pleinement dans les objectifs de transformation du Port Autonome de Dakar à l’horizon 2035, visant à positionner le Sénégal comme un hub logistique incontournable en Afrique de l’Ouest.'+
                 'Adossés au Groupe MSC, leader mondial du transport maritime, nous combinons une vision globale à une présence de proximité. Notre modèle repose sur une expertise de terrain, une culture de la performance, et une capacité à nous adapter aux besoins spécifiques du territoire.'+
                 'Chez TOM MEDLOG, nous croyons que la performance passe par l’humain, par l’excellence opérationnelle et par la rigueur au quotidien. Mon rôle est de mobiliser nos équipes autour de ces valeurs pour bâtir, chaque jour, une logistique plus fluide, plus intelligente, et porteuse de développement.'+
                 'Nous sommes prêts à relever vos défis logistiques avec réactivité, fiabilité et engagement. N’hésitez pas à nous faire confiance. Nous mettrons tout en œuvre pour vous satisfaire.',
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
    description: 'Premier port sec du Sénégal, et référence logistique pour toute l’Afrique de l’Ouest, TOM MEDLOG est un acteur structurant du secteur depuis 2008,'+
                'avec une ambition claire : faire de la logistique un accélérateur de croissance.'+
                'Entreprise profondément sénégalaise, portée par des équipes locales engagées, nous accompagnons chaque jour les importateurs, exportateurs, '+
                'industriels et grands distributeurs à travers des solutions sur mesure — fiables, réactives et compétitives.'+
                'Filiale du Groupe MSC, nous combinons l’expertise d’un leader mondial à une connaissance fine des réalités du territoire national,'+
                'pour répondre avec justesse et efficacité aux besoins du terrain.'+
                'Chez TOM MEDLOG, la performance commerciale passe par la rigueur, la proximité et l’humain.'+
                'Notre engagement est clair : transformer la logistique en véritable levier de développement pour nos clients comme pour le pays.'+
                'Nous croyons fermement qu’ensemble, nous pouvons transformer vos défis en opportunités et faire avancer vos projets avec maîtrise et succès.',
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
        <div className="flex flex-col md:flex-row md:w-full">
        
          {/* Photo Section (Center) */}
          <div className="bg-gray-100 md:w-full items-center justify-center flex">
            <img 
              src={activeMember.image} 
              alt={activeMember.name} 
              className="md:h-full  object-cover"
            />
          </div>
          
          {/* Description Section (Right) */}
          <div className="bg-[var(--primary)] p-6 md:w-[40%] text-justify">
            <div className="mb-4">
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
