import { useEffect, useState } from 'react';
import Card from './Card';


const SliderValue = () => {
  const [isPaused, setIsPaused] = useState(false);

  const cards = [
    {
      id: 1,
      icon: "/images/chance.png",
      title: "Nous croyons à l'égalité des chances",
      description: "Nous partageons nos connaissances, offrons formation et soutien pour favoriser la croissance professionnelle de nos employés."+
                    " Nous garantissons des opportunités équitables, "+
                    "un développement à long terme, et valorisons la diversité culturelle."
    },
    {
      id: 2,
      icon: "/images/evolution.png",
      title: "Nous évoluons constamment",
      description: "Grâce à des solutions de transport fiables et durables,"+
                    " nous facilitons les échanges internationaux, "+
                    "soutenons les économies locales et encourageons une logistique responsable. "+
                    "Nous intégrons les nouvelles technologies pour répondre aux besoins du marché."
    },
    {
      id: 3,
      icon: "/images/famille.png",
      title: "Nous sommes une famille",
      description: "Nous cultivons un esprit familial basé sur la confiance,"+
                    " le dévouement et l'appartenance. "+
                    "Cela nous pousse à agir avec courage et responsabilité pour le bien de nos clients et collaborateurs. "
    },
    {
      id: 4,
      icon: "/images/passion.png",
      title: "Nous sommes passionnés et engagés",
      description: "Nous sommes animés par une passion qui nous pousse à offrir des services d'excellence,"+
                    "à relever les défis avec persévérance et à offrir une expérience unique à nos clients."+
                    "Chaque membre de notre équipe partage cette volonté de dépassement et de satisfaction."
    },
    {
      id: 5,
      icon: "/images/soucieux.png",
      title: "Nous nous soucions des gens",
      description: "Nous valorisons chaque individu pour sa contribution unique."+
                    "Nous établissons des relations authentiques basées sur l'éthique"+
                    "le respect et l'esprit d'équipe, en nous préoccupant sincèrement de"+
                    "la satisfaction et fidélité de nos clients et collaborateurs."
    }
  ];

  // Duplicate cards for infinite scroll effect
  const duplicatedCards = [...cards, ...cards, ...cards];

  return (
    <div className="relative overflow-hidden">
      <div 
        className={`flex gap-6 ${isPaused ? 'animate-pause' : 'animate-scroll'}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          width: `${duplicatedCards.length * 320}px`,
        }}
      >
        {duplicatedCards.map((card, index) => (
          <Card
            key={`${card.id}-${index}`}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderValue;
