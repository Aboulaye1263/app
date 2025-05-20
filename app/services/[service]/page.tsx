"use client";

import { useEffect } from "react";
import Image from "next/image";
import HeaderMenu from "@/components/Header/HeaderMenu";
import Footer from "@/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useParams } from "next/navigation";
// Service details map
const serviceDetails = {
  transport: {
    title: "Transport",
    heroImage: "/images/banner_transport_new.png", // You'll need to add these images
    description:
      "Nos solutions de transport multimodal garantissent l’acheminement sécurisé et rapide des marchandises, en combinant différents modes de transport tels que le camion, le rail et les solutions frigorifiques (GENSET). Grâce à notre expertise, nous assurons une chaîne logistique fluide et performante à nos clients dans les principaux secteurs d’activités tels que l’Agroalimentaire, pharmaceutique, industrie manufacturière, grande distribution, commerce et services.",
    features: [
      {
        title: "Transport multimodal",
        description:
          "Une réduction des coûts logistiques grâce aux solutions combinées Camion/Rail pour une flexibilité optimale. Cette approche permet d'adapter chaque solution aux spécificités géographiques et réglementaires des marchandises transportées.",
        icon: "/icons/SERVICE_HINTERLAND.png", // Add corresponding icons
      },
      {
        title: "Transport frigorifique (Solutions GENSET)",
        description:
          "Pour les produits sensibles et périssables, nous proposons des solutions frigorifiques complètes intégrant la technologie GENSET. Ces groupes électrogènes embarqués assurent un  maintien parfait de la chaîne du froid tout au long du transport.",
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
        description: "Grâce à une expertise mondiale reconnue à travers MEDWAY. TOM assure des liaisons fiables entre les ports et les hubs logistiques intérieurs, réduisant ainsi l'empreinte carbone tout en optimisant les coûts.",
        icon: "/icons/ferroviaire.png",
      },
    ],
    stats: [
      { value: "+100", label: "Camions" },
      { value: "24/7", label: "Suivi en temps réel" },
      { value: "4", label: "Modes de transport" },
    ],
  },
  depot: {
    title: "Dépôt de Conteneurs",
    heroImage: "/images/service_depot.png",
    description:
      "Nous offrons des solutions complètes pour le stockage et la gestion des conteneurs vides et pleins, sous douane ou déclarés. Notre infrastructure moderne garantit la sécurité et la conformité réglementaire.",
    features: [
      {
        title: "Stockage sous douane",
        description:
          "Pour une gestion optimisée et sécurisée des marchandises sous douane.",
        icon: "/icons/douane.png",
      },
      {
        title: "Dépôt de conteneurs vides",
        description: "Avec une capacité de plus de 10 000 EVP.",
        icon: "/icons/empotage_depotage.png",
      },
      {
        title: "CFS",
        description: "Nos Container Freight Stations (CFS) permettent les opérations de groupage et dégroupage avec une grande efficacité. Ces plateformes sont équipées pour manipuler tous types de marchandises dans le respect des normes les plus strictes.",
        icon: "/icons/conteneurs.png",
      },
      {
        title: "Stockage Reefers",
        description:
          "Le stockage reefers bénéficie d'infrastructures spécialisées, avec des échafaudages équipés de plus de 250 prises frigorifiques. Cette capacité importante nous permet de répondre aux besoins saisonniers des produits frais et congelés.",
        icon: "/icons/frigorifique.png",
      },
      {
        title: "Maintenance conteneurs (Dry/reefer)",
        description:
          "Afin d’assurer une réduction des risques de détérioration, nous proposons l’entretien, les réparations et le suivi de qualité des conteneurs.",
        icon: "/icons/frigorifique.png",
      },
    ],
    stats: [
      { value: "65 000  m²", label: "Espace de stockage de conteneurs" },
      { value: "+250", label: "Prises réfrigérées et groupes électrogènes neufs" },
    ],
  },
  entreposage: {
    title: "Entreposage / Distribution de Marchandises",
    heroImage: "/images/other_services/entrepot_sac_jaune.png",
    description:
      "Nos entrepôts offrent des espaces de stockage sous douane, à sec ou à température contrôlée, adaptés aux besoins de chaque client.",
    features: [
      {
        title: "Stockage sous douane",
        description:
          "Stockage en entrepôt ou sur terreplein de marchandises en conformité avec la réglementation douanière.",
        icon: "/icons/douane.png",
      },
      {
        title: "Entreposage à sec",
        description:
          "Le port à sec est une infrastructure stratégique, conçue pour " +
          "optimiser la gestion des flux logistiques en Afrique de l'Ouest. " +
          "Véritable alternative aux infrastructures portuaires " +
          "traditionnelles, ce hub optimise le stockage, la gestion et la " +
          "redistribution des conteneurs et marchandises. " +
          "En réduisant les délais et les coûts d'acheminement, il " +
          "garantit une logistique plus efficace, agile et compétitive.",
        icon: "/icons/distribution_marchandise.png",
      },
      {
        title: "Entreposage température contrôlée",
        description:
          "Maintenez l'intégrité de vos produits sensibles grâce à nos installations à température contrôlée, garantissant une conservation optimale.",
        icon: "/icons/conteneurs.png",
      },
    ],
    stats: [
      { value: "+120 000 tonnes", label: "Capacité de stockage" },
      { value: "100 %", label: "Sécurisé" },
      { value: "3", label: "Types de stockage" },
    ],
  },
  solution: {
    title: "Services à Valeur Ajoutée",
    heroImage: "/images/reefers_new.png",
    description:
      "Nous proposons des services spécialisés pour ajouter de la valeur à vos opérations logistiques, allant de la gestion frigorifique à la manutention de project cargo.",
    features: [
      {
        title: "Services frigorifiques",
        description:
          "Nos solutions services frigorifiques intègrent un ensemble complet de prestations : inspections préalables (PTI), paramétrages précis des équipements, branchement professionnel et suivi continu des températures. Cette approche globale garantit une parfaite maîtrise de la chaîne du froid.",
        icon: "/icons/frigorifique.png",
      },
      {
        title: "Maintenance et réparation",
        description:
          "Nous sommes leaders dans la maintenance, la réparation et le dépotage de conteneurs, avec une capacité de traitement de 3 millions de conteneurs secs et 600 000 conteneurs frigorifiques par an. Nos équipes techniques hautement qualifiées assurent des services de qualité, conformes aux normes internationales.",
        icon: "/icons/maintenance.png",
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
    ],
    stats: [
      { value: "+10", label: "Services spécialisés" },
      { value: "24/7", label: "Support technique" },
      { value: "100%", label: "Satisfaction client" },
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
      <div className="relative h-[60vh] w-full">
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
            className="text-4xl md:text-6xl text-white font-normal text-center max-w-4xl px-4"
            data-aos="fade-up"
          >
            {service.title}
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <p
          className="text-xl text-gray-700 text-center  mx-auto"
          data-aos="fade-up"
        >
          {service.description}
        </p>
      </div>

      {/* Features Grid */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {service.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl font-bold text-[var(--foreground)] mb-2">
                  {stat.value}
                </div>
                <div className="text-[var(--foreground)] opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
