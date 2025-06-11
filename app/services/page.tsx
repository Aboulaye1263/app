"use client";
import ExpandSlider from "@/components/Carousel/ExpandSlider";
import Footer from "@/components/Footer";
import HeaderMenu from "@/components/Header/HeaderMenu";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { services } from "@/constants/services";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { url } from "inspector";

// bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/70

export default function ServicesPage() {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const sliderImages = [
    {
      src: "/images/banner_transport_new.png",
      alt: "Transport",
      iconSrc:"/images/other_services/transport.png",
      tagLink:"transport"
    },
    {
      src: "/images/service_depot.png",
      alt: "Dépôt conteneurs",
      iconSrc:"/images/other_services/conteneur.png",
      tagLink:"depot"
    },
    {
      src: "/images/other_services/entrepot_sac_jaune.png",
      alt: "Entreposage / Distribution marchandises",
      iconSrc:"/images/other_services/entreposage.png",
      tagLink:"entreposage"
    },
    {
      src: "/images/reefers_new.png",
      alt: "Solutions logistiques à valeurs ajoutées",
      iconSrc:"/images/other_services/solution.png",
      tagLink:"solution"
    }

  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA] overflow-x-hidden">
      <HeaderMenu isScrolledAndImmutable/>

      {/* Hero Section */}
      {/* <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent" />
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 font-Arial_Black"
            data-aos="fade-up"
          >
            TOM MEDLOG
            <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-gray-600">
              offre une variété de services dans plus de
              <span className="text-[var(--primary)]"> 80 sites </span>à travers
              le monde
            </span>
          </h1>
        </div>
      </div> */}
      <div data-aos="flip-left" className="relative h-screen flex flex-col justify-end items-center pb-32">
        <div className="absolute top-0 left-0 right-0 -z-99 h-full">
          <Image
            src="/images/banner_services.png"
            alt="TOM MEDLOG Image header"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-full h-screen bottom-0 right-0 left-0 bg-gradient-to-r from-black/90 to-black/50" />
        <h1 className="text-focus-in absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-5xl md:text-7xl font-normal mb-2 leading-tight text-white z-10">
          UNE EXPERTISE DÉDIÉE À
        </h1>
        <h1 className="text-focus-in absolute text-[var(--primary)] top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-5xl md:text-7xl font-normal mb-8 leading-tight z-10">
          VOS BESOINS
        </h1>
        <div className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[updown_2s_ease-in-out_infinite] w-80 md:w-144 text-center z-10">
          <span className="text-white text-sm md:text-xl text-center mb-6">
            Des solutions logistiques qui assurent fluidité et performance, pour
            accompagner vos ambitions.
          </span>
        </div>
      </div>

      {/* Services Grid */}
       <div className="min-h-screen bg-gradient-to-br from-white-900 to-white-800 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-12">
            {/* <h1 className="text-4xl md:text-5xl font-normal text-white text-center mb-4">Nos services</h1>
            <div className="flex items-center gap-3">
              
              <p className="text-gray-300 text-center">Lorem ipsum dolor sit amet</p>
              
            </div> */}
          </div>
          
          <ExpandSlider images={sliderImages} />
        </div>
      </div> 
      

      {/* Transport Section */}
      <div className="relative w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/service_with_banner.png"
            alt="Transport service background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>

        {/* <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-white flex items-center gap-4">
              <div className="w-12 h-1 bg-[var(--primary)]"></div>
              TRANSPORT TERRESTRE
            </h2>
            <ul className="space-y-4 text-lg md:text-xl text-gray-200">
              {[
                "Dépôt de conteneurs",
                "Entreposages et distribution",
                "Transport routier",
                "Transport ferroviaire",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 group">
                  <svg
                    className="w-5 h-5 text-[var(--primary)] group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>

      {/* Solutions Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8" style={{
        backgroundImage: `linear-gradient(to bottom, rgba(34, 34, 33, 0.3), rgba(34, 34, 33, 0.35)), url(/images/section_values.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>

        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2
              className="inline-block text-3xl md:text-4xl font-bold border-2 border-[var(--primary)] 
                         px-8 py-4 rounded-md hover:bg-[var(--primary)] hover:text-black transition-colors"
            >
              SERVICES À VALEURS AJOUTÉES
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "/icons/empotage_depotage.png", title: "Dépotage" },
              { icon: "/icons/chandling.png", title: "Consignation et Ship chandling" },
              { icon: "/icons/SERVICE_COLLATERAL MANAGEMENT.png", title: "Gestion collatérale" },
              { icon: "/icons/cargo.png", title: "Project Cargo" },
              { icon: "/icons/douane.png", title: "Agent portuaire" },
              { icon: "/icons/service_pesage_VGM.png", title: "Pesage VGM" },
              { icon: "/icons/maintenance.png", title: "Amélioration" },
              { icon: "/icons/flexitanks.png", title: "Flexibags" },
            ].map((solution, index) => (
              <div
                key={index}
                className="group rounded-xl p-8 shadow-sm hover:shadow-xl 
                         transition-all duration-500 transform hover:-translate-y-1
                         border border-gray-100 hover:border-[var(--primary)] backdrop-blur-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col items-center ">
                  <div className="relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      fill
                      className="object-contain group-hover:opacity-100 
                               transition-opacity duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-center text-gray-100 group-hover:text-[var(--primary)] transition-colors">
                    {solution.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
