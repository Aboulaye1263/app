
import { notFound } from "next/navigation";
import "@/app/blog/[slug]/article.css";
import Image from "next/image";
import HeaderMenu from "@/components/Header/HeaderMenu";
import Footer from "@/components/Footer";

const blogPosts = [
    {

    slug: "logistics-trends-2025",
    title: "Les Reachstackers : la puissance qui fait bouger le monde du conteneur",
    chapo: `Ils ne font pas de bruit médiatique, mais sans eux, aucune plateforme logistique ne pourrait fonctionner. 
 Les reachstackers, ces géants de la manutention capables de soulever des dizaines de tonnes en quelques secondes, sont au cœur des opérations portuaires et des parcs à conteneurs.
 Chez <strong>TOM MEDLOG</strong>, leur puissance, leur précision et leur fiabilité garantissent la fluidité de chaque mouvement, du navire jusqu’au client final.`,
    image: "/images/blogs/reachstacker-banner.jpg",
   
  }
];
  


export default async function BlogArticlePage() {
  const article =  blogPosts.find((post) => post.slug === "logistics-trends-2025");
 

  if (!article) return notFound();

  return (
    <main className="min-h-screen bg-white text-gray-800">
      <HeaderMenu isScrolledAndImmutable />

      {/* <section className="max-w-4xl mx-auto px-6 py-20"> */}
        {/* <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1B365D]">
          {article.title}
        </h1>
        <div className="relative w-full h-80 mb-8">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </div> */}
        <div className="w-full h-[400px] md:h-[700px] overflow-hidden">
            <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover"
            />
        </div>

      {/* Article Content */}
    <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Title */}
        <h1 className="text-2xl md:text-5xl font-medium text-foreground mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Chapo */}
        <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 border-l-4 chapo border-accent pl-6 py-4 bg-secondary/30">
          Ils ne font pas de bruit médiatique, mais sans eux, aucune plateforme logistique ne pourrait fonctionner. 
          Les reachstackers, ces géants de la manutention capables de soulever des dizaines de tonnes en quelques secondes, sont au cœur des opérations portuaires et des parcs à conteneurs.
          Chez <strong>TOM MEDLOG</strong>, leur puissance, leur précision et leur fiabilité garantissent la fluidité de chaque mouvement, du navire jusqu’au client final.
        </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">Des engins à la puissance impressionnante</h2>
    <p>Un reachstacker est un engin de manutention conçu pour déplacer, empiler et charger des conteneurs avec une rapidité et une agilité remarquables.</p>
    <p>Capable de soulever jusqu’à <strong>45 tonnes</strong> et d’empiler des conteneurs sur <strong>cinq niveaux de hauteur</strong>, il combine puissance brute et maniabilité exceptionnelle.</p>
    <p>Grâce à sa grande portée, le reachstacker assure le transfert des conteneurs :</p>
    <ul className="mb-6 list-none space-y-3">
      <li>
        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <span>entre les camions et les zones de stockage,</span>
      </li>
      <li>
        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <span>vers les wagons dans le cadre des opérations ferroviaires,</span>
      </li>
      <li>
        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <span>ou encore au sein même des parcs à conteneurs, selon les priorités d’enlèvement.</span>
      </li>
    </ul>
    <p>Ces machines sont les véritables poumons logistiques des terminaux modernes. Sans elles, impossible d’assurer la rotation continue des flux.</p>
</section>
    <section className="mb-12">
    <br/><h2 className="text-3xl font-bold text-foreground mb-6">Leur rôle dans un parc à conteneurs</h2>
    <p>Sur un site logistique comme celui de <strong>TOM MEDLOG</strong>, le reachstacker est au centre d’une chorégraphie millimétrée.</p>
    <p>Chaque mouvement compte, chaque levée s’inscrit dans un plan d’optimisation global.</p>
    <p>Leur rôle est multiple :</p>
    <ul className="mb-6 list-none space-y-3">
      <li>
        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <span>Charger et décharger les camions en quelques minutes, pour réduire les temps d’attente;</span>
      </li>
      <li>
        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <span>Réorganiser les piles de conteneurs selon les priorités de livraison ou de dédouanement;</span>
      </li>
      <li>
        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <span>Maximiser l’espace disponible grâce à l’empilement vertical, crucial sur les sites à forte densité;</span>
      </li>
      <li>
        <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
        <span>Gagner du temps sur chaque opération pour accélérer le flux global.</span>
      </li>
    </ul>
    <p>C’est cette combinaison de puissance, de rapidité et de précision qui fait du reachstacker un pilier incontournable de la logistique conteneurisée.</p>
</section>
    <section className="mb-12">
    <br/><h2 className="text-3xl font-bold text-foreground mb-6">Fiabilité et sécurité avant tout</h2>
    <p>Chez <strong>TOM MEDLOG</strong>, nous disposons d’une flotte de reachstackers modernes et performants, entretenue localement par nos équipes techniques.</p>
    <p>Chaque machine fait l’objet d’un programme de maintenance préventive rigoureux, incluant des contrôles réguliers, des interventions planifiées et une formation continue des opérateurs.
    Car dans la logistique, un reachstacker à l’arrêt, c’est toute la chaîne qui ralentit. Notre objectif est simple : <strong>zéro interruption, zéro incident.</strong></p>
    <p>Au-delà de la performance mécanique, nous plaçons la sécurité des équipes au centre de nos priorités.
    Les opérateurs sont formés à la précision des gestes, au respect des protocoles et à la coordination entre zones de manœuvre.</p>
</section>
    <section className="mb-12">
    <br/><h2 className="text-3xl font-bold text-foreground mb-6">Les titans silencieux de TOM MEDLOG</h2>
    <p>Chaque jour, nos reachstackers déplacent, empilent et repositionnent des centaines de conteneurs sur nos plateformes.</p>
    <p>Leur efficacité permet à nos clients d’éviter les retards, d’optimiser leurs flux et de réduire leurs coûts logistiques.</p>
    <p>Ces machines colossales mais précises sont bien plus que de simples engins :</p>
    <p><strong>elles incarnent la puissance, la rigueur et la fiabilité de notre modèle opérationnel.</strong></p>
    <p className="mt-10">Chez <strong>TOM MEDLOG</strong>, elles sont le cœur battant de la performance logistique celles qui font en sorte que vos conteneurs bougent… sans jamais s’arrêter.</p>
      </section><br/>
    
        
    </div>
    
      {/* </section> */}
      <Footer />
    </main>
  );
}
