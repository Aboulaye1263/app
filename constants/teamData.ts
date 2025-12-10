export interface TeamMember {
    id: string;
    name: string;
    position: string;
    description: string[];
    image: string;
    experience: string;
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Louis Maurice Ngor NDONG",
      position: "Directeur Général Adjoint – TOM MEDLOG",
      description: ["TOM MEDLOG est le fruit d’une ambition forte : transformer durablement le secteur logistique au Sénégal, en proposant des solutions intégrées, fiables et compétitives, au service des économies locales.",
        "Notre action s’inscrit pleinement dans les objectifs de transformation du Port Autonome de Dakar à l’horizon 2035, visant à positionner le Sénégal comme un hub logistique incontournable en Afrique de l’Ouest.",
      "Adossés au Groupe MSC, leader mondial du transport maritime, nous combinons une vision globale à une présence de proximité. Notre modèle repose sur une expertise de terrain, une culture de la performance, et une capacité à nous adapter aux besoins spécifiques du territoire.",
    "Chez TOM MEDLOG, nous croyons que la performance passe par l’humain, par l’excellence opérationnelle et par la rigueur au quotidien. Mon rôle est de mobiliser nos équipes autour de ces valeurs pour bâtir, chaque jour, une logistique plus fluide, plus intelligente, et porteuse de développement.",
  "Nous sommes prêts à relever vos défis logistiques avec réactivité, fiabilité et engagement. N’hésitez pas à nous faire confiance. Nous mettrons tout en œuvre pour vous satisfaire."],
      image: "/images/team/maurice-ndong.jpeg",
      experience: " 2009"
    },
    {
      id: "2",
      name: "Raoul DAGBA",
      position: "Directeur Financier et Comptable",
      description: ['La maîtrise des flux financiers est indissociable de la performance opérationnelle. ',
                 'Chez TOM, la finance n’est pas un service support : c’est un levier stratégique. Chaque donnée fiable, chaque information transparente, chaque processus contribue à accélérer vos opérations, à sécuriser vos transactions et à garantir la performance de bout en bout.',
                 'Chaque donnée fiable, chaque information transparente, chaque processus contribue à accélérer vos opérations, ',
                 'En tant que Directeur Financier et Comptable, je veille à ce que nos engagements financiers soient aussi solides que nos engagements logistiques. Car dans un secteur où la réactivité et la confiance sont essentielles, notre différence se joue aussi dans la précision et la rigueur comptable.'
                 ],
      image: '/images/team/raul-dagba.jpeg',
      experience: " 2011"
    },
    {
      id: "3",
      name: "Hatem HAIDAR",
      position: "Directeur des Exploitations",
      description: ['Chez TOM MEDLOG, notre métier ne se limite pas à déplacer des marchandises, il consiste à mériter votre confiance, chaque jour. Derrière chaque opération, il y a une attente client, un délai à respecter, une promesse à honorer. Ce que nous vous offrons, c’est la certitude que vos marchandises sont traitées avec sérieux, rigueur et réactivité.',
                 'Je crois à une logistique qui a du sens : humaine, précise, et pleinement alignée sur vos priorités. J’attends de mes équipes ce que je m’impose à moi-même chaque jour : une exigence sans compromis, une écoute sincère, et l’engagement d’avancer avec intégrité.',
                 'Notre terminal ne dort jamais. Parce que vos enjeux n’attendent pas. Bienvenue chez TOM MEDLOG : là où chaque action compte, et où l’engagement est réel.'
                ],
      image: '/images/team/hatem-haidar.png',
      experience: " 2016"
    },
    {
        id: "4",
        name:"Alain Dos REIS",
        position: "Secrétaire Général",
        description: ['Premier port sec du Sénégal, et référence logistique pour toute l’Afrique de l’Ouest, TOM MEDLOG est un acteur structurant du secteur depuis 2008, avec une ambition claire : faire de la logistique un accélérateur de croissance.',
                 'Entreprise profondément sénégalaise, portée par des équipes locales engagées, nous accompagnons chaque jour les importateurs, exportateurs, industriels et grands distributeurs à travers des solutions sur mesure — fiables, réactives et compétitives.',
                 'Filiale du Groupe MSC, nous combinons l’expertise d’un leader mondial à une connaissance fine des réalités du territoire national, pour répondre avec justesse et efficacité aux besoins du terrain.',
                 'Chez TOM MEDLOG, la performance commerciale passe par la rigueur, la proximité et l’humain. Notre engagement est clair : transformer la logistique en véritable levier de développement pour nos clients comme pour le pays.',
                 'Nous croyons fermement qu’ensemble, nous pouvons transformer vos défis en opportunités et faire avancer vos projets avec maîtrise et succès.'
                ],
        image: '/images/team/alain-dos-reis.jpeg',
        experience: ' 2008',
    },
  ];