"use client";

import { Carousel } from "flowbite-react";
import { Heart, Users, Lightbulb, Shield, Globe } from "lucide-react";

 const values = [
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
      icon: "/images/famille.png",
      title: "Nous sommes une famille",
      description: "Nous cultivons un esprit familial basé sur la confiance,"+
                    " le dévouement et l'appartenance. "+
                    "Cela nous pousse à agir avec courage et responsabilité pour le bien de nos clients et collaborateurs. "
    },
    {
      id: 5,
      icon: "/images/passion.png",
      title: "Nous sommes passionnés et engagés",
      description: "Nous sommes animés par une passion qui nous pousse à offrir des services d'excellence,"+
                    "à relever les défis avec persévérance et à offrir une expérience unique à nos clients."+
                    "Chaque membre de notre équipe partage cette volonté de dépassement et de satisfaction."
    },
    {
      id: 6,
      icon: "/images/soucieux.png",
      title: "Nous nous soucions des gens",
      description: "Nous valorisons chaque individu pour sa contribution unique."+
                    "Nous établissons des relations authentiques basées sur l'éthique"+
                    "le respect et l'esprit d'équipe, en nous préoccupant sincèrement de"+
                    "la satisfaction et fidélité de nos clients et collaborateurs."
    }
  ];

function groupValues(value: typeof values, size: number) {
  const grouped = [];
  for (let i = 0; i < values.length; i += size) {
    grouped.push(values.slice(i, i + size));
  }
  return grouped;
}

export default function ValueSection() {
  const groupedValues = groupValues(values, 3);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Carousel slide={true} indicators={true} className="h-[350px]">
        {groupedValues.map((group, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6"
          >
            {group.map((value) => (
              <div
                key={value.id}
                className="flex flex-col items-center justify-center xs:justify-center bg-white rounded-2xl shadow-md p-6 text-center"
              >
                <img src={value.icon} alt={value.title} width={85} />
                <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
