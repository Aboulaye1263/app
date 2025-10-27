
import { notFound } from "next/navigation";
import "@/app/blog/[slug]/article.css";
import Image from "next/image";
import HeaderMenu from "@/components/Header/HeaderMenu";
import Footer from "@/components/Footer";

const blogPosts = [
    {
 
    slug: "environmental-initiatives",
    title: "Conteneurs maritimes : au cœur de la performance logistique mondiale",
    chapo: "Ils sillonnent les océans, empilés par milliers sur les navires porte-conteneurs. Discrets mais essentiels, les conteneurs maritimes sont la colonne vertébrale du commerce international. "+
 "Chez TOM MEDLOG, nous les manipulons chaque jour, conscients qu’ils sont bien plus que de simples caisses métalliques : ce sont les coffres-forts du commerce mondial, garants de la sécurité, de la standardisation et de la fluidité des échanges.",
    image: "/images/blogs/conteneurs-banner.jpg",
   
  }
];
  


export default async function BlogArticlePage() {
  const article =  blogPosts.find((post) => post.slug === "environmental-initiatives");
 

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
          Ils sillonnent les océans, empilés par milliers sur les navires porte-conteneurs. Discrets mais essentiels, les conteneurs maritimes sont la colonne vertébrale du commerce international. 
 <strong> Chez TOM MEDLOG</strong>, nous les manipulons chaque jour, conscients qu’ils sont bien plus que de simples caisses métalliques : ce sont les coffres-forts du commerce mondial, garants de la sécurité, de la standardisation et de la fluidité des échanges.

        </div>

      <section className="mb-12 text-justify">
        

      <br/>
      <h2 className="text-3xl font-bold text-foreground mb-6">Une standardisation qui a tout changé</h2>
      <p>L’invention du conteneur dans les années 1950 a bouleversé la logistique mondiale. Avant son arrivée, le chargement des navires demandait des jours, parfois des semaines.</p>
      <p>Grâce à la standardisation des dimensions et des formats, il est désormais possible de transférer rapidement des marchandises d’un camion à un navire ou un train sans manipulation directe du contenu.</p>
      <p><strong>Aujourd’hui, plus de 90 % des marchandises échangées dans le monde transitent dans des conteneurs maritimes. </strong>
      C’est cette innovation qui a rendu le commerce international aussi rapide, fiable et accessible. Une révolution silencieuse… mais essentielle.</p>
</section>
      <section className="mb-12">
      <br/><h2 className="text-3xl font-bold text-foreground mb-6">Les principaux types de conteneurs utilisés par TOM MEDLOG</h2>
      <p>Chez <strong>TOM MEDLOG</strong>, nous gérons et manipulons une large gamme de conteneurs adaptés à chaque type de marchandise. Chaque format a sa fonction et son rôle dans la performance logistique.</p>

      <ul className="list-none space-y-3 mb-6">
        <li className="flex-col items-start mt-3">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span><strong>Dry containers (20’, 40’, 40’ High Cube)</strong></span>
            <br/><span className="block pt-3">Le modèle standard pour les marchandises sèches : cartons, sacs, palettes, produits manufacturés… C’est le plus polyvalent et le plus courant sur nos plateformes.</span>
        </li>

        <li className="flex-col items-start mt-3">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span><strong>Reefer containers (conteneurs frigorifiques)</strong></span>
            <br/><span className="block pt-3">Équipés d’un groupe froid intégré, ils garantissent la température idéale pour les produits périssables : denrées alimentaires, produits pharmaceutiques, etc.
        Un maillon essentiel pour préserver la qualité des flux sensibles en Afrique de l’Ouest.</span>
        </li>

        <li className="flex-col items-start mt-3">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span><strong>Open top containers</strong></span>
            <br/><span className="block pt-3">Sans toit rigide, ils sont parfaits pour les cargaisons volumineuses comme les machines industrielles ou les pièces de grande hauteur.
        Idéal pour les opérations de levage et le transport hors format.</span>
        </li>

        <li className="flex-col items-start mt-3">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span><strong>Flat rack containers</strong></span>
            <br/><span className="block pt-3">Dépourvus de parois latérales, ils facilitent le transport des charges lourdes et hors gabarit : véhicules, structures métalliques, matériaux de construction…
        Adapté aux projets industriels et aux manutentions complexes.</span>
        </li>

        <li className="flex-col items-start mt-3">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span><strong>Tank containers</strong></span>
            <br/><span className="block pt-3">Spécialement conçus pour le transport sécurisé de liquides en vrac : produits chimiques, huiles, ou liquides alimentaires.
        Une garantie de sécurité et de conformité internationale.</span>
        </li>

      </ul>
</section>
      <section className="mb-12">
      <br/><h2 className="text-3xl font-bold text-foreground mb-6">Pourquoi le choix du conteneur est stratégique</h2>
      <p>Derrière chaque conteneur se cache une décision logistique clé. Un mauvais choix peut entraîner des pertes de place, des surcoûts de fret, voire des dommages aux marchandises.</p>
      <p>Chez <strong>TOM MEDLOG</strong>, nos équipes conseillent chaque client selon la nature de sa cargaison, ses contraintes de volume et ses exigences réglementaires.</p>

      <p>Cette expertise permet d’optimiser :</p>
      <ul className="list-none space-y-3 mb-6">
        <li className="flex-col items-start mt-3">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span> 
            <span>le coût du transport, en maximisant la capacité de chargement;</span>
        </li>
        <li className="flex-col items-start mt-3">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span> 
            <span>la sécurité, en réduisant les manipulations inutiles;</span>
        </li>
        <li className="flex-col items-start mt-3">
            <span className="inline-block w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span> 
            <span>et la traçabilité, grâce à des procédures de suivi intégrées.</span>
        </li>
        
      </ul>

      <p>Parce que dans la logistique moderne, chaque conteneur compte et bien choisi, il devient un levier de performance.</p>
</section>
      <section className="mb-12">
      <br/><h2 className="text-3xl font-bold text-foreground mb-6">TOM MEDLOG, acteur clé de la gestion de conteneurs en Afrique de l’Ouest</h2>
      <p>Au Sénégal et dans la sous-région, <strong>TOM MEDLOG</strong> se distingue par sa capacité à gérer un flux continu de conteneurs sur ses sites portuaires et plateformes logistiques.</p>
      <p>De la manutention à la réparation, du stockage à la livraison finale, chaque opération est pensée pour garantir fluidité, fiabilité et sécurité.</p>
      <p>C’est cette maîtrise de bout en bout qui fait de <strong>TOM MEDLOG</strong> un partenaire logistique de confiance pour les acteurs du commerce régional et international.</p>

      </section><br/>

    </div>
    
      {/* </section> */}
      <Footer />
    </main>
  );
}
