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
    title: "Services Transport",
    heroImage: "/images/transport-hero.jpg", // You'll need to add these images
    description:
      "Nos solutions de transport multimodal garantissent l’acheminement sécurisé et rapide des marchandises, en combinant différents modes de transport tels que le camion, le rail et les solutions frigorifiques (GENSET). Grâce à notre expertise, nous assurons une chaîne logistique fluide et performante à nos clients dans les principaux secteurs d’activités tels que l’Agroalimentaire, pharmaceutique, industrie manufacturière, grande distribution, commerce et services.",
    features: [
      {
        title: "Transport multimodal",
        description:
          "Nous proposons des solutions de transport multimodal intégrées, combinant les différents modes de transport pour optimiser les flux logistiques. Cette approche permet d'adapter chaque solution aux spécifiques géographiques et réglementaires des marchandises transportées.",
        icon: "/icons/multimodal.png", // Add corresponding icons
      },
      {
        title: "Transport frigorifique",
        description:
          "Pour les produits sensibles, nous proposons des solutions frigorifiques complètes intégrant la technologie GENSET. Ces groupes électrogènes embarqués assurent un maintien parfait de la chaîne du froid tout au long du transport.",
        icon: "/icons/frigo.png",
      },
      {
        title: "Transport par camion",
        description:
          "Le transport par camion constitue l'un des piliers de notre offre, avec une flotte moderne et polyvalente capable de répondre aux besoins les plus exigeants. Nos véhicules sont équipés de systèmes de suivi en temps réel pour garantir une parfaite traçabilité des marchandises.",
        icon: "/icons/truck.png",
      },
      {
        title: "Transport ferroviaire",
        description: "Elle offre une alternative durable et performante pour les trajets longs. MEDLOG assure des liaisons fiables entre les ports et les hubs logistiques intérieurs, réduisant ainsi l'empreinte carbone tout en optimisant les coûts.",
        icon: "/icons/rail.png",
      },
    ],
    stats: [
      { value: "100+", label: "Camions" },
      { value: "24/7", label: "Suivi en temps réel" },
      { value: "4", label: "Modes de transport" },
    ],
  },
  depot: {
    title: "Services de Dépôt de Conteneurs",
    heroImage: "/images/depot-hero.jpg",
    description:
      "Nous offrons des solutions complètes pour le stockage et la gestion des conteneurs vides et pleins, sous douane ou déclarés. Notre infrastructure moderne garantit la sécurité et la conformité réglementaire.",
    features: [
      {
        title: "Stockage sous douane",
        description:
          "Avec 34 500 m² d'entrepôts sous douane, nous offrons des solutions sécurisées pour les matières premières telles que le riz, le sucre et les céréales. Notre capacité de stockage dépasse 120 000 tonnes, garantissant une gestion optimale de vos stocks.",
        icon: "/icons/customs.png",
      },
      {
        title: "Dépôt de conteneurs vides",
        description: "Les dépôts de conteneurs vides sont conçus pour une gestion rationnelle des équipements de transport. Nous proposons des solutions de stockage sécurisées et organisées permettant une rotation optimale des conteneurs.",
        icon: "/icons/container.png",
      },
      {
        title: "CFS",
        description: "Nos Container Freight Stations (CFS) permettent les opérations de groupage et dégroupage avec une grande efficacité. Ces plateformes sont équipées pour manipuler tous types de marchandises dans le respect des normes les plus strictes.",
        icon: "/icons/container.png",
      },
      {
        title: "Stockage Reefers",
        description:
          "Le stockage reefers bénéficie d'infrastructures spécialisées, avec des échafaudages équipés de plus de 200 prises frigorifiques. Cette capacité importante nous permet de répondre aux besoins saisonniers des produits frais et congelés.",
        icon: "/icons/reefer.png",
      },
    ],
    stats: [
      { value: "10000+", label: "EVP capacité" },
      { value: "200+", label: "Prises frigorifiques" },
    ],
  },
  entreposage: {
    title: "Services Entreposage / Distribution de Marchandises",
    heroImage: "/images/entreposage-hero.jpg",
    description:
      "Nos entrepôts offrent des espaces de stockage sous douane, à sec ou à température contrôlée, adaptés aux besoins de chaque client.",
    features: [
      {
        title: "Stockage sous douane",
        description:
          "Avec 34 500 m² d'entrepôts sous douane, nous offrons des solutions sécurisées pour les matières premières telles que le riz, le sucre et les céréales. Notre capacité de stockage dépasse 120 000 tonnes, garantissant une gestion optimale de vos stocks.",
        icon: "/icons/customs-warehouse.png",
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
        icon: "/icons/dry-storage.png",
      },
      {
        title: "Entreposage température contrôlée",
        description:
          "Maintenez l'intégrité de vos produits sensibles grâce à nos installations à température contrôlée, garantissant une conservation optimale.",
        icon: "/icons/temp-control.png",
      },
    ],
    stats: [
      { value: "3", label: "Types de stockage" },
      { value: "24/7", label: "Surveillance" },
      { value: "100%", label: "Sécurisé" },
    ],
  },
  solution: {
    title: "Solutions Logistiques à Valeur Ajoutée",
    heroImage: "/images/solutions-hero.jpg",
    description:
      "Nous proposons des services spécialisés pour ajouter de la valeur à vos opérations logistiques, allant de la gestion frigorifique à la manutention de project cargo.",
    features: [
      {
        title: "Services frigorifiques",
        description:
          "Nos solutions services frigorifiques intègrent un ensemble complet de prestations : inspections préalables (PTI), paramétrages précis des équipements, branchement professionnel et suivi continu des températures. Cette approche globale garantit une parfaite maîtrise de la chaîne du froid.",
        icon: "/icons/frigo-service.png",
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
          "Nous disposons des équipements et de l'expertise nécessaire pour la manutention de charges diverses et hors gabarit.",
        icon: "/icons/project-cargo.png",
      },
      {
        title: "Pesage VGM",
        description:
          "Le pesage VGM, conforme à la convention SOLAS, est réalisé " +
          "avec des équipements certifiés. Cette prestation essentielle " +
          "garantit la sécurité des opérations de transport maritime.",
        icon: "/icons/vgm.png",
      },
      {
        title: "Fumigation",
        description:
          "La fumigation des conteneurs est effectuée selon les " +
          "protocoles les plus stricts, notamment pour le traitement des " +
          "bois d'emballage contre les insectes xylophages. Nos équipes " +
          "spécialisées utilisent des méthodes approuvées au niveau " +
          "international.",
        icon: "/icons/fumigation.png",
      },
      {
        title: "Transit douanier",
        description:
          "Les services de transit et formalités douanières simplifient les " +
          "procédures administratives. Nos experts accompagnent les " +
          "clients dans toutes les étapes du dédouanement, " +
          "garantissant une fluidité optimale des opérations.",
        icon: "/icons/customs-transit.png",
      },
      {
        title: "Flexibags/Flexitanks",
        description:
          "La préparation et l'installation de flexibags/flexitanks sont " +
          "réalisées par des équipes expérimentées. Ces solutions " +
          "innovantes permettent le transport de liquides alimentaires " +
          "ou chimiques en conteneurs standards.",
        icon: "/icons/flexitank.png",
      },
      {
        title: "Empotage/Dépotage",
        description:
          "Les opérations d'empotage et dépotage des conteneurs sont effectuées avec soin et professionnalisme. Nous disposons des équipements adaptés pour manipuler tous types de marchandises en toute sécurité.",
        icon: "/icons/stuffing.png",
      },
      {
        title: "Station de lavage",
        description:
          "Nos stations de lavage et nettoyage de conteneurs assurent " +
          "une remise en état complète des équipements. Ces " +
          "installations permettent d'éliminer toute trace des " +
          "marchandises précédemment transportées.",
        icon: "/icons/washing.png",
      },
      {
        title: "Ship chandling",
        description:
          "En tant qu'agent consignataire, nous offrons une gestion " +
          "maritime complète pour optimiser le passage de vos navires en " +
          "toute sérénité. Nos services couvrent l'avitaillement en " +
          "carburant, la fourniture d'équipements et de provisions, ainsi " +
          "que la coordination des escales. Notre équipe dédiée travaille " +
          "24h/24 et 7j/7 pour garantir une prise en charge fluide et " +
          "efficace.",
        icon: "/icons/ship-chandling.png",
      },
    ],
    stats: [
      { value: "10+", label: "Services spécialisés" },
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
        <div className="absolute inset-0 bg-[var(--secondary)]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1
            className="text-4xl md:text-6xl text-white font-bold text-center max-w-4xl px-4"
            data-aos="fade-up"
          >
            {service.title}
          </h1>
        </div>
      </div>

      {/* Description Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <p
          className="text-xl text-gray-700 text-center max-w-3xl mx-auto"
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
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
