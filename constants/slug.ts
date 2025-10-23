
export const blogPosts = [
  {
    slug: "transport-revolution",
    title: "Comprendre les Incoterms : la clé d'une logistique internationale sans erreurs",
    chapo: "Dans le commerce international, chaque détail compte. Un simple malentendu sur la responsabilité d'un transport ou la prise en charge d'un risque peut coûter des milliers d'euros. C'est pour éviter ces zones grises qu'existent les Incoterms. Ce langage universel qui définit les règles du jeu entre acheteur et vendeur à travers le monde. Chez TOM MEDLOG, nous les utilisons au quotidien pour garantir la fluidité et la sécurité de vos opérations logistiques.",
    image: "/images/blogs/incoterm2-banner.png",
    content: `
      <section className="mb-12">
        <h2 className="text-4xl font-bold text-foreground mb-6">Pourquoi les Incoterms sont essentiels</h2>
        <p className="text-foreground mb-4 leading-relaxed">
          Les Incoterms (International Commercial Terms) sont des règles créées par la Chambre de commerce internationale (CCI) 
          afin d'uniformiser les pratiques du commerce mondial.
        </p>
        <p className="text-foreground mb-4 leading-relaxed">
          Ils servent à répondre à une question simple : <strong>qui fait quoi, quand, et jusqu'où ?</strong>
        </p>
        <p className="text-foreground mb-4 leading-relaxed">
          Chaque contrat d'achat international doit préciser l'Incoterm choisi, car il détermine :
        </p>
        <ul className="list-none space-y-3 mb-6">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-foreground">le partage des frais (transport, assurance, dédouanement) ;</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-foreground">le transfert de responsabilité (à quel moment les risques passent du vendeur à l'acheteur) ;</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-foreground">les documents obligatoires à fournir à chaque étape (factures, connaissements, certificats, etc.).</span>
          </li>
        </ul>
        <p className="text-foreground leading-relaxed">
          Grâce à ce langage commun, importateurs, exportateurs et transitaires parlent la même langue. 
          Un avantage décisif pour éviter les litiges, retards ou surcoûts.
        </p>
      </section><br/>

      
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Comment fonctionnent les Incoterms</h2>
        <p className="text-foreground mb-6 leading-relaxed">
          Les Incoterms ne sont pas qu'une formalité juridique : ils sont le socle d'une logistique fluide et maîtrisée. 
          Chaque terme correspond à une configuration précise de transport et de responsabilité.
        </p>
        <p className="text-foreground mb-6 leading-relaxed">
          Voici les plus utilisés en Afrique de l'Ouest, où TOM MEDLOG accompagne quotidiennement ses clients :
        </p>

        <div className="space-y-8">
         
          <div className="border-l-4 border-accent pl-6 py-4 bg-secondary/30">
            <h3 className="text-xl font-bold text-foreground mb-2">
              <span className="text-accent">EXW</span> (Ex Works)
            </h3>
            <p className="text-foreground mb-3">
              Le vendeur met la marchandise à disposition dans ses locaux. L'acheteur organise tout : transport, assurance, douane.
            </p>
            <p className="text-sm text-muted-foreground italic">
              ➡ Idéal pour les acheteurs expérimentés disposant d'un réseau logistique fiable.
            </p>
          </div>

          <div className="border-l-4 border-accent pl-6 py-4 bg-secondary/30">
            <h3 className="text-xl font-bold text-foreground mb-2">
              <span className="text-accent">FOB</span> (Free On Board)
            </h3>
            <p className="text-foreground mb-3">
              Le vendeur livre la marchandise à bord du navire, au port de départ. À partir de là, les risques et les frais basculent chez l'acheteur.
            </p>
            <p className="text-sm text-muted-foreground italic">
              ➡ Couramment utilisé pour les exportations maritimes africaines.
            </p>
          </div>

       
          <div className="border-l-4 border-accent pl-6 py-4 bg-secondary/30">
            <h3 className="text-xl font-bold text-foreground mb-2">
              <span className="text-accent">CIF</span> (Cost, Insurance and Freight)
            </h3>
            <p className="text-foreground mb-3">
              Le vendeur paie le transport et l'assurance jusqu'au port d'arrivée.
            </p>
            <p className="text-sm text-muted-foreground italic">
              ➡ Recommandé pour sécuriser les livraisons internationales sur de longues distances.
            </p>
          </div>

         
          <div className="border-l-4 border-accent pl-6 py-4 bg-secondary/30">
            <h3 className="text-xl font-bold text-foreground mb-2">
              <span className="text-accent">DAP</span> (Delivered At Place)
            </h3>
            <p className="text-foreground mb-3">
              Le vendeur prend en charge l'acheminement complet jusqu'au lieu convenu, sans formalités douanières à l'import.
            </p>
            <p className="text-sm text-muted-foreground italic">
              ➡ Souvent choisi pour simplifier la logistique côté client.
            </p>
          </div>
        </div>
      </section><br/>

      
      <section className="mb-12 bg-accent/10 p-8 rounded-lg">
        <h2 className="text-3xl font-bold text-foreground mb-6">L'expertise TOM MEDLOG</h2>
        <p className="text-foreground mb-4 leading-relaxed">
          Chez TOM MEDLOG, nous maîtrisons les Incoterms jusque dans leurs implications opérationnelles. 
          Nos équipes conseillent et accompagnent nos clients pour :
        </p>
        <ul className="list-none space-y-3 mb-6">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-foreground">choisir l'Incoterm le plus adapté à leurs besoins et à leur niveau de maîtrise logistique ;</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-foreground">garantir la conformité documentaire et la traçabilité à chaque étape ;</span>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span className="text-foreground">assurer une transition fluide entre acteurs (vendeurs, transitaires, transporteurs, clients finaux).</span>
          </li>
        </ul>
        <p className="text-foreground font-medium leading-relaxed">
          Parce qu'au-delà des règles, l'efficacité logistique repose sur la confiance et la précision.
        </p>
      </section><br/>
    `
  },
  {
    slug: "environmental-initiatives",
    title: "Conteneurs maritimes : au cœur de la performance logistique mondiale",
    chapo: "Ils sillonnent les océans, empilés par milliers sur les navires porte-conteneurs. Discrets mais essentiels, les conteneurs maritimes sont la colonne vertébrale du commerce international. "+
 "Chez TOM MEDLOG, nous les manipulons chaque jour, conscients qu’ils sont bien plus que de simples caisses métalliques : ce sont les coffres-forts du commerce mondial, garants de la sécurité, de la standardisation et de la fluidité des échanges.",
    image: "/images/blogs/conteneurs-banner.jpg",
    content: `
      <p>Chez <strong>TOM MEDLOG</strong>, nous les manipulons chaque jour, conscients qu’ils sont bien plus que de simples caisses métalliques :
      ce sont les coffres-forts du commerce mondial, garants de la sécurité, de la standardisation et de la fluidité des échanges.</p>

      <br>
      <h2>Une standardisation qui a tout changé</h2>
      <p>L’invention du conteneur dans les années 1950 a bouleversé la logistique mondiale. Avant son arrivée, le chargement des navires demandait des jours, parfois des semaines.</p>
      <p>Grâce à la standardisation des dimensions et des formats, il est désormais possible de transférer rapidement des marchandises d’un camion à un navire ou un train — sans manipulation directe du contenu.</p>
      <p><strong>Aujourd’hui, plus de 90 % des marchandises échangées dans le monde transitent dans des conteneurs maritimes.</strong>
      C’est cette innovation qui a rendu le commerce international aussi rapide, fiable et accessible. Une révolution silencieuse… mais essentielle.</p>

      <br><h2>Les principaux types de conteneurs utilisés par TOM MEDLOG</h2>
      <p>Chez <strong>TOM MEDLOG</strong>, nous gérons et manipulons une large gamme de conteneurs adaptés à chaque type de marchandise. Chaque format a sa fonction et son rôle dans la performance logistique.</p>

      <ul>
        <li><strong>Dry containers (20’, 40’, 40’ High Cube)</strong><br/>
        Le modèle standard pour les marchandises sèches : cartons, sacs, palettes, produits manufacturés… C’est le plus polyvalent et le plus courant sur nos plateformes.</li>

        <li><strong>Reefer containers (conteneurs frigorifiques)</strong><br/>
        Équipés d’un groupe froid intégré, ils garantissent la température idéale pour les produits périssables : denrées alimentaires, produits pharmaceutiques, etc.
        Un maillon essentiel pour préserver la qualité des flux sensibles en Afrique de l’Ouest.</li>

        <li><strong>Open top containers</strong><br/>
        Sans toit rigide, ils sont parfaits pour les cargaisons volumineuses comme les machines industrielles ou les pièces de grande hauteur.
        Idéal pour les opérations de levage et le transport hors format.</li>

        <li><strong>Flat rack containers</strong><br/>
        Dépourvus de parois latérales, ils facilitent le transport des charges lourdes et hors gabarit : véhicules, structures métalliques, matériaux de construction…
        Adapté aux projets industriels et aux manutentions complexes.</li>

        <li><strong>Tank containers</strong><br/>
        Spécialement conçus pour le transport sécurisé de liquides en vrac : produits chimiques, huiles, ou liquides alimentaires.
        Une garantie de sécurité et de conformité internationale.</li>
      </ul>

      <br><h2>Pourquoi le choix du conteneur est stratégique</h2>
      <p>Derrière chaque conteneur se cache une décision logistique clé. Un mauvais choix peut entraîner des pertes de place, des surcoûts de fret, voire des dommages aux marchandises.</p>
      <p>Chez <strong>TOM MEDLOG</strong>, nos équipes conseillent chaque client selon la nature de sa cargaison, ses contraintes de volume et ses exigences réglementaires.</p>

      <p>Cette expertise permet d’optimiser :</p>
      <ul>
        <li>le coût du transport, en maximisant la capacité de chargement ;</li>
        <li>la sécurité, en réduisant les manipulations inutiles ;</li>
        <li>et la traçabilité, grâce à des procédures de suivi intégrées.</li>
      </ul>

      <p>Parce que dans la logistique moderne, chaque conteneur compte — et bien choisi, il devient un levier de performance.</p>

      <br><h2>TOM MEDLOG, acteur clé de la gestion de conteneurs en Afrique de l’Ouest</h2>
      <p>Au Sénégal et dans la sous-région, <strong>TOM MEDLOG</strong> se distingue par sa capacité à gérer un flux continu de conteneurs sur ses sites portuaires et plateformes logistiques.</p>
      <p>De la manutention à la réparation, du stockage à la livraison finale, chaque opération est pensée pour garantir fluidité, fiabilité et sécurité.</p>
      <p>C’est cette maîtrise de bout en bout qui fait de <strong>TOM MEDLOG</strong> un partenaire logistique de confiance pour les acteurs du commerce régional et international.</p>

    `
  },
  {
    slug: "logistics-trends-2025",
    title: "Les Reachstackers : la puissance qui fait bouger le monde du conteneur",
    chapo: "Ils ne font pas de bruit médiatique, mais sans eux, aucune plateforme logistique ne pourrait fonctionner. "+
 "Les reachstackers, ces géants de la manutention capables de soulever des dizaines de tonnes en quelques secondes, sont au cœur des opérations portuaires et des parcs à conteneurs. "+
 "Chez TOM MEDLOG, leur puissance, leur précision et leur fiabilité garantissent la fluidité de chaque mouvement, du navire jusqu’au client final.",
    image: "/images/blogs/reachstacker-banner.jpg",
    content: `
      
    <h2>Des engins à la puissance impressionnante</h2>
    <p>Un reachstacker est un engin de manutention conçu pour déplacer, empiler et charger des conteneurs avec une rapidité et une agilité remarquables.</p>
    <p>Capable de soulever jusqu’à <strong>45 tonnes</strong> et d’empiler des conteneurs sur <strong>cinq niveaux de hauteur</strong>, il combine puissance brute et maniabilité exceptionnelle.</p>
    <p>Grâce à sa grande portée, le reachstacker assure le transfert des conteneurs :</p>
    <ul>
      <li>entre les camions et les zones de stockage,</li>
      <li>vers les wagons dans le cadre des opérations ferroviaires,</li>
      <li>ou encore au sein même des parcs à conteneurs, selon les priorités d’enlèvement.</li>
    </ul>
    <p>Ces machines sont les véritables poumons logistiques des terminaux modernes. Sans elles, impossible d’assurer la rotation continue des flux.</p>

    <br><h2>Leur rôle dans un parc à conteneurs</h2>
    <p>Sur un site logistique comme celui de <strong>TOM MEDLOG</strong>, le reachstacker est au centre d’une chorégraphie millimétrée.</p>
    <p>Chaque mouvement compte, chaque levée s’inscrit dans un plan d’optimisation global.</p>
    <p>Leur rôle est multiple :</p>
    <ul>
      <li>Charger et décharger les camions en quelques minutes, pour réduire les temps d’attente ;</li>
      <li>Réorganiser les piles de conteneurs selon les priorités de livraison ou de dédouanement ;</li>
      <li>Maximiser l’espace disponible grâce à l’empilement vertical, crucial sur les sites à forte densité ;</li>
      <li>Gagner du temps sur chaque opération pour accélérer le flux global.</li>
    </ul>
    <p>C’est cette combinaison de puissance, de rapidité et de précision qui fait du reachstacker un pilier incontournable de la logistique conteneurisée.</p>

    <br><h2>Fiabilité et sécurité avant tout</h2>
    <p>Chez <strong>TOM MEDLOG</strong>, nous disposons d’une flotte de reachstackers modernes et performants, entretenue localement par nos équipes techniques.</p>
    <p>Chaque machine fait l’objet d’un programme de maintenance préventive rigoureux, incluant des contrôles réguliers, des interventions planifiées et une formation continue des opérateurs.</p>
    <p>Car dans la logistique, un reachstacker à l’arrêt, c’est toute la chaîne qui ralentit. Notre objectif est simple : <strong>zéro interruption, zéro incident.</strong></p>
    <p>Au-delà de la performance mécanique, nous plaçons la sécurité des équipes au centre de nos priorités.
    Les opérateurs sont formés à la précision des gestes, au respect des protocoles et à la coordination entre zones de manœuvre.</p>

    <br><h2>Les titans silencieux de TOM MEDLOG</h2>
    <p>Chaque jour, nos reachstackers déplacent, empilent et repositionnent des centaines de conteneurs sur nos plateformes.</p>
    <p>Leur efficacité permet à nos clients d’éviter les retards, d’optimiser leurs flux et de réduire leurs coûts logistiques.</p>
    <p>Ces machines colossales mais précises sont bien plus que de simples engins :</p>
    <p><strong>elles incarnent la puissance, la rigueur et la fiabilité de notre modèle opérationnel.</strong></p>
    <p>Chez <strong>TOM MEDLOG</strong>, elles sont le cœur battant de la performance logistique — celles qui font en sorte que vos conteneurs bougent… sans jamais s’arrêter.</p>

    `
  },
]