
import { notFound } from "next/navigation";
import "@/app/blog/[slug]/article.css";
import Image from "next/image";
import HeaderMenu from "@/components/Header/HeaderMenu";
import Footer from "@/components/Footer";

const blogPosts = [
    {
   
    slug: "transport-revolution",
    title: "Comprendre les Incoterms : la clé d'une logistique internationale sans erreurs",
    chapo: "Dans le commerce international, chaque détail compte. Un simple malentendu sur la responsabilité d'un transport ou la prise en charge d'un risque peut coûter des milliers d'euros. C'est pour éviter ces zones grises qu'existent les Incoterms. Ce langage universel qui définit les règles du jeu entre acheteur et vendeur à travers le monde. Chez TOM MEDLOG, nous les utilisons au quotidien pour garantir la fluidité et la sécurité de vos opérations logistiques.",
    image: "/images/blogs/incoterm2-banner.png",
   
  }
];
  


export default async function BlogArticlePage() {
  const article =  blogPosts.find((post) => post.slug === "transport-revolution");
 

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
          {article.chapo}
        </div>

      <section className="mb-12">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">Pourquoi les Incoterms sont essentiels</h2>
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
         
          <div className="border-l-4 chapo pl-6 py-4 bg-secondary/30">
            <h3 className="text-xl font-bold text-foreground mb-2">
              <span className="text-[var(--primary)]">EXW</span> (Ex Works)
            </h3>
            <p className="text-foreground mb-3">
              Le vendeur met la marchandise à disposition dans ses locaux. L'acheteur organise tout : transport, assurance, douane.
            </p>
            <p className="text-sm text-muted-foreground italic">
              ➡ Idéal pour les acheteurs expérimentés disposant d'un réseau logistique fiable.
            </p>
          </div>

          <div className="border-l-4 chapo pl-6 py-4 bg-secondary/30">
            <h3 className="text-xl font-bold text-foreground mb-2">
              <span className="text-[var(--primary)]">FOB</span> (Free On Board)
            </h3>
            <p className="text-foreground mb-3">
              Le vendeur livre la marchandise à bord du navire, au port de départ. À partir de là, les risques et les frais basculent chez l'acheteur.
            </p>
            <p className="text-sm text-muted-foreground italic">
              ➡ Couramment utilisé pour les exportations maritimes africaines.
            </p>
          </div>

       
          <div className="border-l-4 chapo pl-6 py-4 bg-secondary/30">
            <h3 className="text-xl font-bold text-foreground mb-2">
              <span className="text-[var(--primary)]">CIF</span> (Cost, Insurance and Freight)
            </h3>
            <p className="text-foreground mb-3">
              Le vendeur paie le transport et l'assurance jusqu'au port d'arrivée.
            </p>
            <p className="text-sm text-muted-foreground italic">
              ➡ Recommandé pour sécuriser les livraisons internationales sur de longues distances.
            </p>
          </div>

         
          <div className="border-l-4 chapo pl-6 py-4 bg-secondary/30">
            <h3 className="text-xl font-bold text-foreground mb-2">
              <span className="text-[var(--primary)]">DAP</span> (Delivered At Place)
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
    
        
    </div>
    
      {/* </section> */}
      <Footer />
    </main>
  );
}
