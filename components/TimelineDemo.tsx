import React from "react";
import { Timeprogress } from "./ui/Timeprogress";
export default function TimelineDemo() {
  const data = [
    {
      title: "2007",
      content: (
        <div>
            <h3 className="font-semibold md:text-2xl">Naissance d’un acteur à part : TOM</h3>
          <p className="mb-8 text-xs md:text-base dark:text-neutral-200">
            Nous avons décidé de mettre en œuvre notre vision : réinventer la logistique au Sénégal à travers des opérations intégrées, une proximité client forte et une ambition régionale affirmée.
          </p>
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/images/img-2007.jpg"
              alt="creation"
              width={700}
              className="w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-96"
            />
           
          </div>
        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
        <h3 className="font-semibold md:text-2xl">Alliance avec le Port Autonome de Dakar</h3>
          <p className="mb-8 text-sm md:text-base dark:text-neutral-200">
            Installation sur une plateforme logistique de 210.000 m², à 1 km du Port Autonome de Dakar.
        Une infrastructure unique au Sénégal par sa taille et sa proximité.
        Début d’une alliance stratégique avec le PAD pour repenser la logistique nationale et accompagner l’essor du commerce régional.
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/images/img-2015.jpg"
              alt="TOM Medlog 2015"
              width={500}
              height={500}
              className="w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-96"
            />
            
          </div>
        </div>
      ),
    },
    {
      title: "2017",
      content: (
        <div>
            <h3 className="font-semibold md:text-2xl">Lancement de la Zone Unique de Dépotage (ZUD)</h3>
          <p className="mb-4 text-sm md:text-base dark:text-neutral-200">
            Création de la ZUD, initiative pionnière visant à centraliser les opérations de dépotage, 
            fluidifier les contrôles douaniers et accélérer les flux entre le port et l’hinterland, 
            notamment vers le Mali via corridor Dakar-Bamako.
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/images/img-2017-zud.jpg"
              alt="TOM Medlog 2017"
              width={500}
              height={500}
              className="w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-96"
            />
            
          </div>

           <h3 className="font-semibold md:text-2xl mt-16">Démarrage des entrepôts et services logistiques spécialisés</h3>
          <p className="mb-4 text-sm font-normal md:text-base dark:text-neutral-200">
            TOM renforce son ancrage opérationnel avec le développement de services d’entreposage sous douane, 
        de logistique vrac, de manutention spécialisée et de gestion des flux sacherie, 
        répondant aux besoins concrets des grands importateurs nationaux.
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/images/img-2017-entrepot.jpg"
              alt="TOM Medlog 2017"
              width={500}
              height={500}
              className="w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-96"
            />
            
          </div>
        </div>
        
      ),
    },
    {
      title: "Aujourd'hui",
      content: (
        <div>
        <h3 className="font-semibold md:text-2xl">Champion national, pionnier régional</h3>
          <p className="mb-8 text-sm text-neutral-800 md:text-base dark:text-neutral-200">
            TOM est devenu le champion Sénégalais de la logistique et un acteur stratégique incontournable de l’industrie en Afrique de l’Ouest.
            </p>
          
          <div className="grid grid-cols-1 gap-4">
            <img
              src="/images/aujourdhui.png"
              alt="TOM Medlog 2015"
              width={500}
              height={500}
              className="w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-96"
            />
            
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeprogress data={data} />
    </div>
  );
}
