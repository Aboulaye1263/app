"use client";

import { useEffect } from "react";
import Image from "next/image";
import HeaderMenu from "@/components/Header/HeaderMenu";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "next/navigation";
import Link from "next/link";
// Service details map
const serviceDetails = {
  transport: {
    title: "Transport",
    heroText: "Soyez livrez partout. Sans rupture. Sans retard. Sans compromis.",
    heroImage: "/images/banner_transport_new.png", // You'll need to add these images
    description:
      "Camion, rail ou froid embarqué (GENSET) : nos solutions multimodales garantissent un transport sécurisé, rapide et fluide pour tous vos secteurs : agroalimentaire, pharma, industrie, grande distribution et services.",
    actionTitle: "Un besoin logistique ? Une urgence ?",
    actionDescription: "Demandez votre devis express et laissez-nous optimiser votre chaîne de transport.",
    features: [
      {
        title: "Transport multimodal",
        description:
          "Une réduction des coûts logistiques grâce aux solutions combinées Camion/Rail pour une flexibilité optimale. Cette approche permet d'adapter chaque solution aux spécificités géographiques et réglementaires des marchandises transportées.",
        icon: "/icons/SERVICE_HINTERLAND.png", // Add corresponding icons
      },
      {
        title: "Transport frigorifique (Solutions Reefer & GENSET)",
        description:
          "Nous assurons le transport sécurisé des marchandises sensibles et périssables grâce à des conteneurs réfrigérés (reefer), équipés de groupes électrogènes autonomes (GENSET)."+
          " Cette technologie garantit une régulation thermique continue et précise, permettant ainsi de maintenir strictement les conditions requises de température tout au long de la chaîne logistique, indépendamment des contraintes externes ou de la durée du transport.",
        icon: "/icons/frigorifique.png",
      },
      {
        title: "Transport par camion",
        description:
          "Le transport par camion constitue l'un des piliers de notre offre, avec une flotte moderne et polyvalente de plus de 100 camions capable de répondre aux besoins les plus exigeants. Nos véhicules sont équipés de systèmes de suivi en temps réel pour garantir une parfaite traçabilité des marchandises.",
        icon: "/icons/transport.png",
      },
      {
        title: "Transport ferroviaire",
        description: "Grâce à une expertise mondiale reconnue à travers MEDWAY, TOM assure des liaisons fiables entre les ports et les hubs logistiques intérieurs, réduisant ainsi l'empreinte carbone tout en optimisant les coûts.",
        icon: "/icons/ferroviaire.png",
      },
    ],
    stats: [
      { value: "+100", label: "Camions" },
      { value: "24/7", label: "Suivi en temps réel" },
      { value: "+11500", label: "Conteneurs EVP livrés et positionnés" },
      { value: "+100.000", label: "Conteneurs EVP transférés" },
    ],
  },
  depot: {
    title: "Dépôt de Conteneurs",
    heroText: "Votre partenaire de confiance pour la gestion de conteneurs.",
    heroImage: "/images/service_depot.png",
    description:
      "Avec plus de 50.000 m² d’espace et de solutions complètes pour le stockage et la gestion de conteneurs sous douane, qu’ils soient vides, pleins, ou spéciaux comme les réfrigérés, nos infrastructures et équipements modernes garantissent sécurité et conformité."+
      "  ",
    actionTitle: "Optimisez vos opérations logistiques dès aujourd’hui.",
    actionDescription: "Contactez-nous pour une solution personnalisée.",
      features: [
      {
        title: "Stockage sous douane de conteneurs pleins",
        description:
          "Nous offrons des solutions sécurisées et performantes de stockage sous douane spécialement dédiée aux conteneurs pleins."+
          " Nos espaces sont agréés par les autorités douanières, garantissant une gestion optimisée des formalités administratives, "+
          "une traçabilité totale des flux, ainsi qu'une sécurité renforcée de vos marchandises.",
        icon: "/icons/douane.png",
      },
      {
        title: "Dépôt de conteneurs vides",
        description: "Avec une capacité de stockage supérieure à 10.000 EVP,"+
        " notre dépôt de conteneurs vides garantit une disponibilité immédiate pour les besoins opérationnels des compagnies maritimes,"+
        " transporteurs et opérateurs économiques. Nos procédures rigoureuses et équipements assurent une rotation rapide des conteneurs, "+
        "facilitant la gestion optimisée des flux.",
        icon: "/icons/empotage_depotage.png",
      },
      {
        title: "Container Freight Stations (CFS)",
        description: "Nos plateformes CFS (Container Freight Stations) offrent une efficacité maximale pour les opérations de groupage et dégroupage."+
        " Grâce à nos équipes expérimentées et à des équipements spécialisés, nous assurons des opérations sécurisées, rapides et conformes aux normes internationales,"+
        " adaptées à tout type de marchandise (produits manufacturés, agroalimentaires, électroniques, etc.).",
        icon: "/icons/conteneurs.png",
      },
      {
        title: "Stockage Reefers",
        description:
          "Nos installations spécialisées pour conteneurs frigorifiques (reefer) sont équipées de plus de 300 prises"+
          " frigorifiques et plus de 10 groupes électrogènes neufs, permettant une gestion optimale et sécurisée des cargaisons à température dirigée des produits périssables frais ou surgelés."+
          " Notre capacité d’accueil étendue répond efficacement aux pics saisonniers et aux besoins spécifiques des importateurs et exportateurs.",
        icon: "/icons/frigorifique.png",
      },
      {
        title: "Maintenance des conteneurs (Dry & Reefer)",
        description:
          "Pour garantir l’intégrité et la disponibilité optimale de vos équipements,"+
          " nous proposons des services professionnels d’entretien préventif, réparation et contrôle qualité des conteneurs Dry et Reefer."+
          " Notre personnel certifié réalise des interventions techniques rapides et précises,"+
          " permettant une réduction significative des risques opérationnels et une meilleure préservation de vos actifs.",
        icon: "/icons/maintenance.png",
      },
    ],
    stats: [
      { value: "+90.000 m²", label: "Capacité de stockage sous douane" },
      { value: "+250", label: "Prises refeers" },
      { value: "+10", label: "Engins de manutention" },
      { value: "+10.000", label: "Capacité de conteneurs à réparer" },
    ],
  },
  entreposage: {
    title: "Entreposage / Distribution de Marchandises",
    heroText: "Stockez en toute confiance. Quelles que soient vos marchandises, nous avons l’espace, la sécurité et la solution.",
    heroImage: "/images/other_services/entrepot_sac_jaune.png",
    description:
      "Avec plus de 50 000 m² d’espaces sécurisés et d’entrepôts modernes, sous douane ou à température contrôlée, nous pouvons stocker tous types de marchandises et répondre aux exigences spécifiques de chaque client, quelles que soient la nature ou la complexité de vos produits."+
      "Besoin d’un espace de stockage adapté ? Contactez nos équipes pour plus d’informations.",
      actionTitle: "Optimisez vos opérations logistiques dès aujourd’hui.",
      actionDescription: "Contactez-nous pour une solution personnalisée.",
      features: [
      {
        title: "Stockage sous douane",
        description:
          "Nous mettons à votre disposition des espaces dédiés, sécurisés et agréés par les autorités douanières, permettant de stocker vos marchandises en entrepôt ou sur terre-plein sous régime suspensif. "+
          "Ce service vous permet d’optimiser vos flux financiers en différant le paiement des droits et taxes, tout en respectant strictement la réglementation douanière en vigueur.",
        icon: "/icons/douane.png",
      },
      {
        title: "Entreposage à sec",
        description:
          "Nos infrastructures modernes offrent des espaces sécurisés adaptés au stockage de marchandises non périssables. " +
          "Nous assurons une gestion optimale des flux grâce à un système avancé de suivi des stocks, " +
          "des contrôles réguliers d'inventaire, ainsi qu’une organisation efficace des mouvements d’entrée et de sortie. ",
        icon: "/icons/distribution_marchandise.png",
      },
      {
        title: "Entreposage à température contrôlée",
        description:
          "Nous assurons une parfaite conservation de vos marchandises sensibles ou périssables (agroalimentaire, pharmaceutique, cosmétique), grâce à des installations spécialisées équipées de systèmes précis de contrôle thermique. "+
          "La surveillance permanente des températures garantit l’intégrité et la conformité totale aux normes de la chaîne du froid.",
        icon: "/icons/conteneurs.png",
      },
      {
        title: "Manutention d’entrepôt",
        description:
          "Gestion complète des flux entrants et sortants avec des équipes qualifiées assurant chargement, déchargement, palettisation et dépalettisation, empotage et dépotage, ainsi que transfert interne sécurisé des marchandises."+
          " Services complets incluant le picking, l’emballage, l’étiquetage, l'inspection et la consolidation de vos commandes pour expédition, garantissant exactitude, rapidité et traçabilité.",
        icon: "/icons/cargo.png",
      },
    ],
    stats: [
      { value: "+120.000 tonnes", label: "Capacité de stockage" },
      { value: "100 %", label: "Sécurisé" },
      { value: "3", label: "Types de stockage" },
      { value: "0,1 %", label: " Taux de freinte magasin" },
    ],
  },
  solution: {
    title: "Services à Valeur Ajoutée",
    heroText: "Plus que du stockage : de la valeur à chaque étape",
    heroImage: "/images/reefers_new.png",
    description:
      "Dépotage, réparation, maintenance, Genset, conditionnement… Nos solutions spécialisées optimisent vos flux, prolongent la durée de vie des équipements et marchandises, et renforcent votre compétitivité. "+
      "Gagnez en efficacité dès maintenant. Contactez nos équipes pour une solution sur mesure ou un audit de vos besoins.",
      actionTitle: "Optimisez vos opérations logistiques dès aujourd’hui.",
      actionDescription: "Contactez-nous pour une solution personnalisée.",
      features: [
      {
        title: "Services frigorifiques",
        description:
          "Nos solutions services frigorifiques intègrent un ensemble complet de prestations : inspections préalables (PTI), paramétrages précis des équipements, branchement professionnel et suivi continu des températures. Cette approche globale garantit une parfaite maîtrise de la chaîne du froid.",
        icon: "/icons/frigorifique.png",
      },
      {
        title: "Project Cargo",
        description:
          "Nous disposons des équipements et de l'expertise nécessaire pour la manutention de charges diverses et hors gabarit adaptée aux projets complexes.",
        icon: "/icons/cargo.png",
      },
      {
        title: "Pesage VGM",
        description:
          "Le pesage Verified Gross Mass (VGM) conforme à la convention "+
          "SOLAS, est réalisé avec des équipements certifiés. Cette prestation essentielle "+
          "garantit la sécurité et la conformité de vos expéditions.",
        icon: "/icons/service_pesage_VGM.png",
      },
      {
        title: "Fumigation des conteneurs",
        description:
          "Nos services de fumigation assurent la désinfection de vos "+
          "conteneurs, prévenant la prolifération de parasites et garantissant la qualité de "+
          "vos marchandises.",
        icon: "/icons/fumigation.png",
      },
      {
        title: "Transit et formalités douanières complètes",
        description:
          "Ce service simplifie les procédures douanières en "+
          "prenant en charge l’ensemble des formalités nécessaires. Nos experts "+
          "accompagnent les clients dans toutes les étapes du dédouanement, "+
          "garantissant une fluidité optimale des opérations pour un transit sans accroc.",
        icon: "/icons/douane.png",
      },
      {
        title: "Flexibags/Flexitanks",
        description:
          "Nos experts préparent et installent des flexibags et flexitanks pour le "+
          "transport sécurisé de produits liquides, offrant une solution alternative fiable "+
          "aux conteneurs traditionnels.",
        icon: "/icons/flexitanks.png",
      },
      {
        title: "Empotage/Dépotage des conteneurs",
        description:
          "Nous assurons l’empotage et le dépotage de "+
          "conteneurs avec des équipements spécialisés, garantissant un traitement "+
          "rapide et sécurisé de vos marchandises.",
        icon: "/icons/empotage_depotage.png",
      },
      {
        title: "Station de lavage et nettoyage des conteneurs",
        description:
          "Nos stations de lavage permettent un "+
          "nettoyage complet et efficace de vos conteneurs, assurant ainsi leur conformité "+
          "et leur propreté avant une nouvelle utilisation.",
        icon: "/icons/lavage.png",
      },
      {
        title: "Consignation et ship chandling ",
        description:
          "En tant que partenaires logistiques, nous offrons "+
          "des services de ship chandling et consignation, fournissant tout le nécessaire à "+
          "bord pour assurer le confort et le bon fonctionnement des opérations maritimes.",
        icon: "/icons/chandling.png",
      },
      {
        title: "Maintenance et réparations",
        description:
          "Nous sommes pour l’entretien et la réparation des conteneurs, secs comme frigorifiques, avec une capacité de xxx"+
          "Nous combinons expertise technique, réactivité et conformité aux standards internationaux. Nos ateliers équipés et nos équipes certifiées interviennent avec précision pour assurer :"+
          "- Réparations structurelles, esthétiques et techniques. \n"+
          "- Contrôles de sécurité et de conformité. \n"+
          "- Entretien préventif pour prolonger la durée de vie des conteneurs. \n"+
          "- Préparation des reefers avant mise à disposition client.\n",
        icon: "/icons/maintenance.png",
      },
    ],
    stats: [
      { value: "+10", label: "Services spécialisés" },
      { value: "+2500 PTI/an", label: "Capacité de Maintenance et réparations" },
      { value: "4", label: "Ponts bascules / Pèse-essieu" },
      { value: "+30", label: "GENSETS Services Frigorifiques" },
    ],
  },
};

export default function ServiceDetail() {
  const params = useParams();
  const service = serviceDetails[params.service as keyof typeof serviceDetails];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <HeaderMenu isScrolledAndImmutable />

      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white text-center max-w-8xl px-4"
            data-aos="fade-up"
          >
            {service.title}
          </h1>
          
          <div className="absolute top-[55%] md:top-[60%] lg:top-[65%] left-1/2 transform -translate-x-1/2 w-full md:w-[124vh] text-center z-10">
            <span className="text-white text-sm md:text-xl text-center mb-6">
              {service.heroText}
            </span><br/>
            <span className="text-white text-sm md:text-xl text-center mb-6">
              {service.description}
            </span>
          </div>
        </div>
      </div>

      {/* Description Section */}
      {/* <div className="flex flex-col max-w-7xl mx-auto px-4 py-16 items-center">
        <p
          className="text-xl text-gray-700 text-center  mx-auto mb-8"
          data-aos="fade-up"
        >
          {service.description}
        </p>
        

      </div> */}


      <div className="bg-gray-500 dark:bg-gray-300">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <h1 className="mb-4 text-4xl font-medium tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-gray-100">{service.actionTitle}</h1>
              <p className="mb-8 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-800">{service.actionDescription}</p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                  <a href="/contact#form" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[var(--foreground)] hover:bg-gray-100 hover:text-gray-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                      Demandez un devis 
                  </a>
                   
              </div>
          </div>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className=" bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
               
                
                <h3 className="flex text-xl font-bold items-center mb-7">
                <Image
                  src={feature.icon}
                  alt={service.title}
                  width={60}
                  height={60}
                  className="object-cover mr-5"
                  priority
                />{feature.title}</h3>
               
                <p className="text-gray-600 text-justify">{feature.description}</p>
              </div>

            ))}
            
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-[var(--primary)] py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center content-center justify-center">
            {service.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-2">
                  {stat.value}
                </div>
                <div className="text-[var(--foreground)] opacity-80 text-2xl">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
