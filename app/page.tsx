"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import HeaderMenu from "@/components/Header/HeaderMenu";
import Link from "next/link";
import CarouselImages from "@/components/Carousel/CarouselImages";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { services } from "@/constants/services";
import { refs } from "@/constants/refs";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const items = [
    <Image
      src="/images/banners/banner_1.jpg"
      alt="TOM MEDLOG Image header"
      fill
      key={1}
      className="carousel-slide object-cover brightness-50 transition-all duration-1000"
    />,
    <Image
      src="/images/banners/banner_2.jpg"
      alt="TOM MEDLOG Carousel Image 1"
      fill
      key={2}
      className="carousel-slide object-cover brightness-50 transition-all duration-1000"
    />,
    <Image
      src="/images/new images/header.png"
      alt="TOM MEDLOG Carousel Image 2"
      fill
      key={3}
      className="carousel-slide object-cover brightness-50 transition-all duration-1000"
    />,
  ];
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeaderMenu />

      {/* Hero Section - Enhanced */}
      <div className="relative h-screen">
        <CarouselImages items={items} fetchSlideCount />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="absolute w-full inset-0 flex flex-col items-center justify-center text-white px-4">
          <div className="max-w-5xl" data-aos="fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-2 mt-8 md:mt-0 md:mb-8 leading-tight">
              Leader de la logistique en{" "}
              <span className="text-[var(--primary)]">Afrique de l'Ouest</span>
            </h1>
            <p className="text-lg md:text-xl mb-12 max-w-3xl leading-relaxed opacity-90 text-justify">
              Fondé en 2008, Le Terminal des Opérations Maritimes (TOM) est un opérateur logistique spécialisé pionnier en Afrique
              de l&apos;Ouest, ayant établi sa marque grâce à sa fiabilité. Nous
              avons établi la norme pour les dépôts de conteneurs grâce à notre
              engagement envers l&apos;excellence opérationnelle,
              l&apos;intégration technologique et l&apos;optimisation des
              processus.
            </p>
            <Link
              href="/about#histoire"
              className="inline-flex items-center justify-center gap-3 bg-[var(--primary)] text-black font-semibold 
                       px-8 py-4 rounded-md hover:bg-white hover:scale-105
                       transition-all duration-300 ease-out shadow-lg
                       text-base min-w-[200px] group"
            >
              Découvrez notre histoire
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Column */}
          <div className="flex flex-col md:flex-row" data-aos="fade-right">
            <div className="flex flex-col w-full md:w-1/2">
              <h2 className="text-4xl font-bold">
                NOTRE MISSION
              </h2>
              {/* Text Card */}
              <div className="py-8">
                <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                  Transformer la logistique en Afrique de l'Ouest en répondant
                  aux besoins de nos clients avec des solutions sur mesure,
                  innovantes et intégrées.
                </p>
                <Link
                  href="/about#mission"
                  className="inline-flex bg-[var(--primary)] items-center gap-2 text-black px-4 py-4 rounded-md font-semibold hover:gap-3 transition-all"
                >
                  En savoir plus
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative w-full md:w-1/2">
              <div className="absolute right-[-10%] w-[100%] h-[100%] top-[15%] bg-[var(--primary)]" />

              {/* Content */}
              <div className="relative flex flex-col gap-6">
                {/* Image */}
                <div className="relative h-80 ml-auto w-[95%]">
                  <Image
                    src="/images/new images/notre_mission.png"
                    alt="Mission"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Vision Column */}
          <div
            className="flex flex-col md:flex-row mt-24 gap-8"
            data-aos="fade-left"
          >
            <div className="relative w-full md:w-1/2">
              {/* Background blue rectangle */}
              <div className="absolute left-[-10%] w-full h-full top-[15%] bg-[var(--primary)] mx-auto md:mx-0" />

              {/* Content */}
              <div className="relative flex flex-col gap-6">
                {/* Image */}
                <div className="relative h-80 w-[95%]">
                  <Image
                    src="/images/notre_objectif.png"
                    alt="Vision"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Vision Text */}
            <div className="flex flex-col w-full md:w-1/2">
              <h2 className="text-4xl font-bold mt-8 md:mt-0">
                NOTRE OBJECTIF
              </h2>
              {/* Text Card */}
              <div className="py-8">
                <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                Renforcer notre position de leader régional et de devenir un hub 
                logistique incontournable au Sénégal et en Afrique de l'Ouest.
                </p>
                <Link
                  href="/about#objectif"
                  className="inline-flex items-center gap-2 bg-[var(--primary)] text-black px-4 py-4 rounded-md font-semibold hover:gap-3 transition-all"
                >
                  En savoir plus
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Vision Column */}
          <div className="flex flex-col md:flex-row mt-24"  data-aos="fade-right">
            <div className="flex flex-col w-full md:w-1/2">
              <h2 className="text-4xl font-bold">
                NOTRE VISION
              </h2>
              {/* Text Card */}
              <div className="py-8">
                <p className="text-gray-600 leading-relaxed mb-6 text-justify">
                Notre vision est d'être le leader continental des services
                  logistiques intégrés et de dépôt de conteneurs, tout en créant
                  un environnement de travail enrichissant qui valorise l'esprit
                  d'équipe, le respect mutuel et le développement professionnel
                  de nos collaborateurs.
                </p>
                <Link
                  href="/about#vision"
                  className="inline-flex bg-[var(--primary)] items-center gap-2 text-black px-4 py-4 rounded-md font-semibold hover:gap-3 transition-all"
                >
                  En savoir plus
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="relative w-full md:w-1/2">
              <div className="absolute right-[-10%] w-[100%] h-[100%] top-[15%] bg-[var(--primary)]" />

              {/* Content */}
              <div className="relative flex flex-col gap-6">
                {/* Image */}
                <div className="relative h-80 ml-auto w-[95%]">
                  <Image
                    src="/images/new images/notre_vision.png"
                    alt="Mission"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 px-4 md:px-16 lg:px-32 bg-[#FAFAFA]">
        <h2
          className="text-3xl font-bold text-center mb-16"
          data-aos="fade-down"
        >
          NOS SERVICES
        </h2>
        <div className="relative overflow-hidden">
          <div
            className="pl-0 flex overflow-x-auto scrollbar-hide scroll-smooth transition-transform duration-500 ease-in-out mx-12 directed-scroll"
            id="carousel-container"
            style={{ gap: "1rem" }}
          >
            {services.map((service, index) => (
              <Link
                key={index}
                href={`/services#${service.tagLink}`}
                className="flex-none w-full md:w-1/3 px-2"
              >
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center text-center h-full">
                  <div className="mb-6 hover:animate-[bell_1s_ease-in-out]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={100}
                      height={100}
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => {
              const container = document.getElementById("carousel-container");
              if (container) {
                // Get container width to determine screen size
                const containerWidth = container.clientWidth;
                let visibleItems;

                // Determine number of items based on screen size
                if (containerWidth >= 1024) {
                  // lg breakpoint
                  visibleItems = 5;
                } else if (containerWidth >= 768) {
                  // md breakpoint
                  visibleItems = 4;
                } else {
                  visibleItems = 1;
                }

                // Calculate total width of items to scroll
                const totalItemWidth = container.scrollWidth;
                const itemWidth = totalItemWidth / 11; // Total number of items (11)
                const scrollAmount = itemWidth * visibleItems;

                container.scrollTo({
                  left: container.scrollLeft - scrollAmount,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--primary)] rounded-full hover:scale-125 transition-transform duration-300"
            aria-label="Previous slide"
          >
            <div className="relative w-8 h-12 md:h-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  className="md:w-[54px] md:h-[54px]"
                  viewBox="0 0 24 24"
                  fill="#000000"
                >
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </div>
            </div>
          </button>

          <button
            onClick={() => {
              const container = document.getElementById("carousel-container");
              if (container) {
                // Get container width to determine screen size
                const containerWidth = container.clientWidth;
                let visibleItems;

                // Determine number of items based on screen size
                if (containerWidth >= 1024) {
                  // lg breakpoint
                  visibleItems = 5;
                } else if (containerWidth >= 768) {
                  // md breakpoint
                  visibleItems = 4;
                } else {
                  visibleItems = 1;
                }

                // Calculate total width of items to scroll
                const totalItemWidth = container.scrollWidth;
                const itemWidth = totalItemWidth / 11; // Total number of items (11)
                const scrollAmount = itemWidth * visibleItems;

                container.scrollTo({
                  left: container.scrollLeft + scrollAmount,
                  behavior: "smooth",
                });
              }
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[var(--primary)] rounded-full hover:scale-125 transition-transform duration-300"
            aria-label="Next slide"
          >
            <div className="relative w-8 h-12 md:h-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  className="md:w-[54px] md:h-[54px]"
                  viewBox="0 0 24 24"
                  fill="#000000"
                >
                  <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Présence en Afrique Section */}
      <div className="py-16 px-4 md:px-16 lg:px-32 mt-24">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
          <div className="relative w-full md:w-2/3" data-aos="fade-right">
            <Image
              src="/images/new images/carte-accueil.png"
              alt="Carte de présence en Afrique"
              width={700}
              height={400}
              className="object-cover rounded-lg shadow-lg transform hover:scale-105 transition-all duration-500"
            />
          </div>
          <div
            className="w-full md:w-1/3 transform hover:scale-105 transition-all duration-500"
            data-aos="fade-left"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              PRÉSENCE EN AFRIQUE
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 text-justify">
              Notre présence stratégique en Afrique de l'Ouest nous permet
              d'offrir des services logistiques intégrés et efficaces à travers
              la région. Nous disposons d'infrastructures modernes et d'équipes
              expérimentées pour répondre aux besoins spécifiques de chaque
              marché.
            </p>
          </div>
        </div>
      </div>

      {/* References Section */}
      <div className="pb-16 my-24 pt-8 px-4 md:px-8 lg:px-16 overflow-hidden">
        <h2
          className="text-3xl font-bold text-center mb-16 "
          data-aos="fade-up"
        >
          ILS NOUS FONT CONFIANCE
        </h2>
        <div className="flex whitespace-nowrap animate-[scroll_20s_linear_infinite]">
          {/* First set of images */}
          {refs.map((ref, index) => (
            <div
              key={`first-${index}`}
              className="flex-none w-[200px] h-[150px] mx-4"
            >
              <Image
                src={ref}
                alt={`Reference ${index + 1}`}
                width={300}
                height={150}
                className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full h-full object-contain"
                loading="eager"
                priority={true}
                quality={100}
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {refs.map((ref, index) => (
            <div
              key={`second-${index}`}
              className="flex-none w-[300px] h-[180px] mx-4"
            >
              <Image
                src={ref}
                alt={`Reference ${index + 1}`}
                width={200}
                height={150}
                className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
