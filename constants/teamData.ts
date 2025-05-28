export interface TeamMember {
    id: string;
    name: string;
    position: string;
    description: string;
    image: string;
    skills: string[];
    experience: string;
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: "1",
      name: "Maurice NDONG",
      position: "Directeur Général Adjoint",
      description: 'TOM MEDLOG est le fruit d’une ambition forte : transformer durablement le secteur logistique au Sénégal, en proposant des solutions intégrées, fiables et compétitives, au service des économies locales.'+
                 'Notre action s’inscrit pleinement dans les objectifs de transformation du Port Autonome de Dakar à l’horizon 2035, visant à positionner le Sénégal comme un hub logistique incontournable en Afrique de l’Ouest.'+
                 'Adossés au Groupe MSC, leader mondial du transport maritime, nous combinons une vision globale à une présence de proximité. Notre modèle repose sur une expertise de terrain, une culture de la performance, et une capacité à nous adapter aux besoins spécifiques du territoire.'+
                 'Chez TOM MEDLOG, nous croyons que la performance passe par l’humain, par l’excellence opérationnelle et par la rigueur au quotidien. Mon rôle est de mobiliser nos équipes autour de ces valeurs pour bâtir, chaque jour, une logistique plus fluide, plus intelligente, et porteuse de développement.'+
                 'Nous sommes prêts à relever vos défis logistiques avec réactivité, fiabilité et engagement. N’hésitez pas à nous faire confiance. Nous mettrons tout en œuvre pour vous satisfaire.',
      image: "/images/team/maurice-ndong.png",
      skills: ["React", "Node.js", "Architecture", "Leadership"],
      experience: "Mai 2009"
    },
    {
      id: "2",
      name: "Raoul DAGBA",
      position: "Directeur Financier et Comptable",
      description: 'TOM MEDLOG est le fruit d’une ambition forte : transformer durablement le secteur logistique au Sénégal, en proposant des solutions intégrées, fiables et compétitives, au service des économies locales.'+
                 'Notre action s’inscrit pleinement dans les objectifs de transformation du Port Autonome de Dakar à l’horizon 2035, visant à positionner le Sénégal comme un hub logistique incontournable en Afrique de l’Ouest.'+
                 'Adossés au Groupe MSC, leader mondial du transport maritime, nous combinons une vision globale à une présence de proximité. Notre modèle repose sur une expertise de terrain, une culture de la performance, et une capacité à nous adapter aux besoins spécifiques du territoire.'+
                 'Chez TOM MEDLOG, nous croyons que la performance passe par l’humain, par l’excellence opérationnelle et par la rigueur au quotidien. Mon rôle est de mobiliser nos équipes autour de ces valeurs pour bâtir, chaque jour, une logistique plus fluide, plus intelligente, et porteuse de développement.'+
                 'Nous sommes prêts à relever vos défis logistiques avec réactivité, fiabilité et engagement. N’hésitez pas à nous faire confiance. Nous mettrons tout en œuvre pour vous satisfaire.',
      image: '/images/team/raul-dagba.png',
      skills: ["Figma", "Design System", "Prototypage", "Recherche UX"],
      experience: "A Compléter"
    },
    {
      id: "3",
      name: "Hatem HAIDAR",
      position: "Directeur des Exploitations",
      description: 'Chez TOM MEDLOG, notre métier ne se limite pas à déplacer des marchandises,'+
                 'il consiste à mériter votre confiance, chaque jour. '+
                 'Derrière chaque opération, il y a une attente client, un délai à respecter, une promesse à honorer. '+
                 'Ce que nous vous offrons, c’est la certitude que vos marchandises sont traitées avec sérieux, rigueur et réactivité.'+
                 'Je crois à une logistique qui a du sens : humaine, précise, et pleinement alignée sur vos priorités.'+
                 'J’attends de mes équipes ce que je m’impose à moi-même chaque jour : une exigence sans compromis, une écoute sincère, et l’engagement d’avancer avec intégrité.'+
                 'Notre terminal ne dort jamais. Parce que vos enjeux n’attendent pas. '+
                 'Bienvenue chez TOM MEDLOG : là où chaque action compte, et où l’engagement est réel.',
      image: '/images/team/hatem-haidar.png',
      skills: ["Python", "JavaScript", "Database", "API Design"],
      experience: "Avril 2016"
    },
    {
        id: "4",
        name:"Alain Dos REIS",
        position: "Secrétaire Général",
        description: 'Chez TOM MEDLOG, notre métier ne se limite pas à déplacer des marchandises,'+
                 'il consiste à mériter votre confiance, chaque jour. '+
                 'Derrière chaque opération, il y a une attente client, un délai à respecter, une promesse à honorer. '+
                 'Ce que nous vous offrons, c’est la certitude que vos marchandises sont traitées avec sérieux, rigueur et réactivité.'+
                 'Je crois à une logistique qui a du sens : humaine, précise, et pleinement alignée sur vos priorités.'+
                 'J’attends de mes équipes ce que je m’impose à moi-même chaque jour : une exigence sans compromis, une écoute sincère, et l’engagement d’avancer avec intégrité.'+
                 'Notre terminal ne dort jamais. Parce que vos enjeux n’attendent pas. '+
                 'Bienvenue chez TOM MEDLOG : là où chaque action compte, et où l’engagement est réel.',
        image: '/images/team/alain-dos-reis.png',
        skills: [],
        experience: 'Avril 2008',
    },
  ];