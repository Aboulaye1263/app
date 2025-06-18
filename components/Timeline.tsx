
import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = () => {
  const timelineData = [
    {
      year: "2007",
      title: "Naissance d’un acteur à part : TOM",
      description: "Nous avons décidé de mettre en œuvre notre vision : réinventer la logistique au Sénégal à travers des opérations intégrées, une proximité client forte et une ambition régionale affirmée.",
      image: "/images/img-2007.jpg",
      position: "left"
    },
    {
      year: "2015",
      title: "Alliance avec le Port Autonome de Dakar",
      description: "Installation sur une plateforme logistique de 210.000 m², à 1 km du Port Autonome de Dakar."+
                  " Une infrastructure unique au Sénégal par sa taille et sa proximité."+
                  " Début d’une alliance stratégique avec le PAD pour repenser la logistique nationale et accompagner l’essor du commerce régional.",
                  
      image: "/images/img-2015.jpg",
      position: "right"
    },
    {
      year: "2017",
      title: "Lancement de la Zone Unique de Dépotage (ZUD)",
      description: "Création de la ZUD, initiative pionnière visant à centraliser les opérations de dépotage, "+
                  "fluidifier les contrôles douaniers et accélérer les flux entre le port et l’hinterland, "+
                  "notamment vers le Mali via corridor Dakar-Bamako.",
      image: "/images/img-2017-zud.jpg",
      position: "left"
    },
    {
    year: "2017",
    title: "Démarrage des entrepôts et services logistiques spécialisés",
    description: "TOM renforce son ancrage opérationnel avec le développement de services d’entreposage sous douane, "+
                  "de logistique vrac, de manutention spécialisée et de gestion des flux sacherie, "+
                  "répondant aux besoins concrets des grands importateurs nationaux.",
    image: "/images/img-2017-entrepot.jpg",
    position: "left"
    },
    {
      year: "Aujourd'hui",
      title: "Champion national, pionnier régional",
      description: "TOM est devenu le champion Sénégalais de la logistique et un acteur stratégique incontournable de l’industrie en Afrique de l’Ouest.",
      image: "/images/aujourdhui.png",
      position: "right"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Notre Histoire
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez les moments clés qui ont façonné notre entreprise depuis sa création
          </p>
        </div> */}
        
        <div className="relative">
          {/* Ligne verticale centrale pour desktop, à gauche pour mobile/tablette */}
          <div className="absolute left-1/2 md:left-1/2 lg:left-1/2 left-8 transform md:transform lg:transform -translate-x-1/2 md:-translate-x-1/2 lg:-translate-x-1/2 translate-x-0 w-1 bg-[var(--primary)] h-full rounded-full shadow-lg"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {timelineData.map((item, index) => (
              <TimelineItem
                key={index}
                year={item.year}
                title={item.title}
                description={item.description}
                image={item.image}
                position={item.position as "left" | "right"}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;