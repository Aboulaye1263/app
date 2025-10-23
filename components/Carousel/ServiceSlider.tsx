import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight} from "lucide-react";
import Link from "next/link";


interface Service {
  id: number;
  title: string;
  description: string;
  backgroundImage: string;
  tagLink: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Transport",
    description: "Notre flotte moderne de plus de 100 camions et plus 150 remorques, équipée de systèmes GPS avancés, assure un transport fiable et optimisé. Avec plus de 30 nouveaux camions uniquement dédiés aux transferts de conteneurs, nous maximisons l'efficacité, la durabilité et la traçabilité.",
    backgroundImage: "/images/banner_transport_new.png",
    tagLink:"transport"
  },
  {
    id: 2,
    title: "Dépôt de conteneurs",
    description: "Notre terminal à conteneurs, d’une surface + de 95.000 m² de capacité de stockage sous douane, offre une capacité de stockage de plus de 10 000 EVP garantissant une gestion optimale des flux. Il est également équipé de 350 prises réfrigérées et 10 groupes électrogènes neufs, permettant un contrôle total sur les cargaisons sensibles à la température.",
    backgroundImage: "/images/service_depot.png",
    tagLink:"depot"
  },
  {
    id: 3,
    title: "Entreposage / Distribution de Marchandises",
    description: "Avec plus de 50.000 m² d'entrepôts sous douane, nous proposons des solutions d’entreposage sécurisées et flexibles pour une large gamme de marchandises, qu’il s’agisse de produits de base (riz, sucre, céréales), de produits périssables, ou d’autres biens importés ou en transit.",
    backgroundImage: "/images/other_services/entrepot_sac_jaune.png",
    tagLink:"entreposage"
  },
  {
    id: 4,
    title: "Services à Valeur Ajoutée",
    description: "Nous proposons une gamme complète de services spécialisés pour maximiser la performance et la durabilité de vos flux : maintenance, réparation, dépotage, pesage, flexibags… Nos équipes techniques certifiées aux standards internationaux interviennent sur une capacité annuelle de plus de 150.000 EVP",
    backgroundImage: "/images/reefers_new.png",
    tagLink:"solution"
  }
];

 const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentService = services[currentIndex];

  return (
    <div className="relative w-full h-[65vh] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50 transition-all duration-700 ease-out"
        style={{
          backgroundImage: `url(${currentService.backgroundImage})`,
        }}
      >
        <div className="absolute inset-0 bg-carousel-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-6 text-center">
        <div className="max-w-md mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl text-white font-bold text-carousel-text leading-tight">
            {currentService.title}
          </h2>
          
          <p className="text-sm md:text-lg text-gray-100 text-carousel-text-muted leading-relaxed">
            {currentService.description}
          </p>
          
          <Link
            href={`/services/${currentService.tagLink}`}
            className={`mt-8 flex items-center justify-center gap-2 text-sm font-medium text-[var(--primary)]
                        `}
          >
            <span>En savoir plus</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-4">
          <Button
            
            size="icon"
            onClick={goToPrevious}
            className="rounded-full w-12 h-12"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
         
            size="icon"
            onClick={goToNext}
            className="rounded-full w-12 h-12"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary scale-125"
                  : "bg-carousel-text/50 hover:bg-carousel-text/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ServiceSlider;