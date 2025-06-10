"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import HeaderMenu from "@/components/Header/HeaderMenu";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button, Carousel, Modal, ModalBody, ModalHeader, Tooltip} from "flowbite-react";
import { title } from "process";
import { Content } from "next/font/google";
import TeamCarousel from "@/components/Carousel/TeamCarousel";
import Testimonial from "@/components/Carousel/TestimonialSlider";
import TeamSection from "@/components/Carousel/TeamSection";
import SliderValue from "@/components/Carousel/ValueSlider";


export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const testimonials = [
    {
      name: "Papice MENDY",
      role: "Responsable Logistique - Touba Fruit/Senfruit",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300&h=300",
      text: "En tant qu’acteur majeur de l’exportation de fruits frais vers l’Europe, nous avons trouvé en Tom Medlog Sénégal un partenaire logistique fiable et réactif. Grâce à leur maîtrise du transport réfrigéré et de la chaîne logistique, nous avons considérablement réduit nos délais d’acheminement et amélioré la traçabilité de nos expéditions jusqu’au Port de Dakar. Leur équipe est à l’écoute, disponible et force de proposition, ce qui nous permet de nous concentrer pleinement sur notre cœur de métier. Nous recommandons vivement Tom Medlog à toute entreprise recherchant un service logistique de qualité au Sénégal.",
          },
    {
      name: "Vincent HUET",
      role: "Responsable Achats et Transit - Agroline SA",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=300&h=300",
      text: "En qualité de Responsable Achats et Transit/supply chain d’Agroline SA, une des plus grandes entreprises agro-alimentaires du Sénégal, je tiens à exprimer notre entière satisfaction quant à notre collaboration avec TOM MEDLOG. Leurs services de transport, de logistique et de stockage de conteneurs sont essentiels pour notre chaîne d’approvisionnement, garantissant la qualité et la fraîcheur de nos produits. TOM MEDLOG allie professionnalisme et réactivité, nous permettant ainsi de rester compétitifs sur le marché ouest-africain. Grâce à leur expertise et leur disponibilité, nous pouvons nous concentrer sur notre mission : offrir des produits authentiques inspirés des saveurs traditionnelles du Sénégal.",
          },
    {
      name: "Sophie Martin",
      role: "Responsable des Opérations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=300",
      text: "La solution proposée a transformé notre façon de travailler. Nous avons gagné en efficacité et en productivité de manière significative.",
          },
    {
      name: "Lucas Petit",
      role: "Directeur Technique",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300",
      text: "Une collaboration fructueuse et agréable. Leur expertise nous a permis d'atteindre nos objectifs plus rapidement que prévu.",
          }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderMenu isScrolledAndImmutable/>

      {/* Hero Section */}
      <div className="relative h-screen flex flex-col justify-end items-center pb-32">
        <div className="absolute top-0 left-0 right-0 -z-99 h-full">
          <Image
            src="/images/new images/header.png"
            alt="TOM MEDLOG Image header"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-full h-screen bottom-0 right-0 left-0 bg-gradient-to-r from-black/90 to-black/50" />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-5xl md:text-7xl font-bold mb-8 leading-tight text-white z-10">
          DÉCOUVREZ QUI <span className="text-[#F3DFA2]">NOUS SOMMES</span>
        </h1>
        <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[updown_2s_ease-in-out_infinite] w-80 md:w-auto text-center z-10">
          <span className="text-white text-sm md:text-xl text-center mb-6">
          Une ambition née au Sénégal, une référence pour l’Afrique de l’Ouest.
          </span>
        </div>
        <div className="animate-[updown_2s_ease-in-out_infinite] relative z-10">
          {/* <svg
            width="80"
            height="52"
            viewBox="0 0 24 24"
            fill="#F3DFA2"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-3600 animate-[downward_2s_ease-in-out_infinite]"
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg> */}

          {/* <svg 
          id="Capa_1" 
          enable-background="new 0 0 512 512" 
          height="52" viewBox="0 0 512 512" 
          width="52" 
          xmlns="http://www.w3.org/2000/svg" 
          version="1.1" 
         >
            <g width="100%" height="100%" transform="matrix(1,0,0,1,0,0)"><g>
            <path d="m301.213 58.168c0-14.278-11.616-25.894-25.894-25.894h-38.639c-14.278 0-25.894 11.616-25.894 25.894v38.713h90.427z" fill="#eed484" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/>
            <path d="m259.792 194.274 150.095 39.218v-96.789c0-5.416-4.406-9.822-9.822-9.822h-288.129c-5.416 0-9.822 4.406-9.822 9.822v96.789l150.095-39.218c2.485-.649 5.097-.649 7.583 0z" fill="#eed484" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/>
            <path d="m497 449.725c-16.555 0-24.023-3.719-33.479-8.428-4.439-2.21-9.12-4.541-14.706-6.526-7.755-2.757-17.259-4.848-30.282-5.031l54.92-138.253c1.216-3.283.244-6.016-.449-7.359-.698-1.354-2.381-3.759-5.814-4.656l-211.19-55.181-211.189 55.181c-3.434.897-5.117 3.302-5.814 4.656-.693 1.344-1.666 4.08-.447 7.364l54.797 138.25c-13.018.196-22.512 2.3-30.262 5.067-5.539 1.977-10.19 4.292-14.601 6.489-9.457 4.708-16.926 8.428-33.483 8.428-8.284 0-15 6.716-15 15s6.716 15 15 15c23.612 0 35.96-6.148 46.854-11.572 4.245-2.113 8.094-4.023 12.539-5.491 5.459-1.803 11.818-2.936 20.944-2.936 2.083 0 4.021.059 5.839.172 12.628.78 19.377 4.14 27.644 8.256 10.894 5.424 23.242 11.572 46.854 11.572 23.611 0 35.958-6.148 46.853-11.572 9.456-4.708 16.925-8.428 33.48-8.428s24.023 3.719 33.479 8.428c10.894 5.424 23.241 11.572 46.852 11.572s35.958-6.148 46.852-11.572c8.293-4.129 15.06-7.496 27.764-8.263 1.782-.107 3.679-.165 5.716-.165 9.026 0 15.344 1.111 20.762 2.88 4.52 1.475 8.417 3.407 12.717 5.548 10.894 5.424 23.241 11.572 46.852 11.572 8.284 0 15-6.716 15-15s-6.718-15.002-15.002-15.002zm-379.677-148.67 134.885-35.244c2.486-.649 5.098-.649 7.584 0l134.885 35.244c8.015 2.094 12.815 10.29 10.721 18.305-1.762 6.744-7.844 11.212-14.502 11.212-1.255 0-2.531-.159-3.802-.491l-131.094-34.253-131.093 34.253c-8.015 2.094-16.211-2.706-18.305-10.721s2.706-16.211 10.721-18.305z" fill="#eed484" fill-opacity="1" data-original-color="#000000ff" stroke="none" stroke-opacity="1"/>
            </g></g>
          </svg> */}

          <svg 
            fill="#eed484" 
            height="52" 
            width="52" 
            version="1.1" 
            id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg"  
            viewBox="0 0 512 512"
            className="rotate-3600 animate-[downward_2s_ease-in-out_infinite]">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.024"></g>
              <g id="SVGRepo_iconCarrier"> 
                <g> 
                  <g> 
                    <path d="M356.201,166.708h-200.05c-27.578,0-50.012,22.435-50.012,50.013v39.492l131.467-52.586 c5.905-2.366,12.166-3.576,18.57-3.576c6.404,0,12.665,1.21,18.614,3.598l131.313,52.566v-39.493 C406.102,189.143,383.779,166.708,356.201,166.708z"></path>
                  </g> 
                </g> 
                <g> 
                  <g> 
                    <path d="M322.859,66.683h-16.671V50.013C306.188,22.435,283.755,0,256.176,0c-27.578,0-50.012,22.435-50.012,50.013v16.671 h-16.671c-27.578,0-50.013,22.434-50.013,50.012v16.671h233.392v-16.671C372.871,89.118,350.437,66.683,322.859,66.683z"></path> 
                  </g> 
                </g> 
                <g> 
                  <g> 
                    <path d="M491.781,477.506c-21.511-2.588-41.792-12.449-57.111-27.763c-6.512-6.512-17.062-6.512-23.574,0 c-38.128,38.117-105.006,38.117-143.135,0c-6.512-6.512-17.062-6.512-23.574,0c-38.128,38.117-105.006,38.117-143.135,0 c-6.512-6.512-17.062-6.506-23.574-0.006c-15.401,15.401-35.789,25.277-57.409,27.807c-9.145,1.069-15.688,9.35-14.619,18.495 c1.069,9.145,9.339,15.694,18.495,14.619c23.813-2.784,46.513-12.204,65.321-26.911c48.168,37.672,118.541,37.667,166.708,0.006 c24.084,18.83,53.719,28.246,83.354,28.246s59.27-9.416,83.354-28.252c18.695,14.614,41.254,24.018,64.914,26.862 c9.112,1.074,17.442-5.416,18.544-14.56C507.443,486.905,500.92,478.608,491.781,477.506z"></path> 
                  </g> 
                </g> 
                <g> 
                  <g> 
                    <path d="M428.954,301.257l-156.118-62.492v122.853c0,9.209-7.573,16.671-16.782,16.671c-9.209,0-16.671-7.462-16.671-16.671 V238.765L83.157,301.257c-8.395,3.36-12.585,12.797-9.438,21.273l34.343,92.602c6.198,2.483,11.904,6.173,16.765,11.037 c25.112,25.1,70.909,25.073,95.987-0.006c9.442-9.442,22.005-14.647,35.36-14.647c13.354,0,25.918,5.205,35.36,14.653 c25.112,25.1,70.909,25.073,95.987-0.006c4.551-4.551,9.856-8.061,15.596-10.535l35.235-92.985 C441.572,314.146,437.393,304.633,428.954,301.257z"></path> 
                    </g> 
                  </g> 
                </g>
          </svg>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative py-16 w-full md:pt-10">
      <div className="absolute top-0 left-0 right-0 -z-99 h-full">
          <Image
            src="/images/Notre_Histoire_TOM.png"
            alt="TOM MEDLOG Image header"
            fill
            className="object-cover -z-1"
          />
        </div> 
        <div className="absolute w-full h-full bottom-0 right-0 left-0 bg-gradient-to-r from-white/80 to-white/50 -z-1" />
        <div className="container mx-auto px-4 z-20">
          <div id="histoire" className="relative text-4xl font-bold text-center pt-12 mb-12 directed-scroll text-black">
          <h2>
            NOTRE HISTOIRE
          </h2>
          </div>
          
          <div
            data-aos="fade-up"
            className="flex flex-col gap-4 items-center mb-4"
          >
            <p className="text-black font-bold text-sm md:text-base text-center">
              Depuis 2007, TOM construit bien plus qu’un réseau logistique mais une vision, 
              une ambition et une référence continentale. Chaque étape franchie renforce notre position : 
              celle d’un acteur structurant, visionnaire et profondément ancré en Afrique de l’Ouest.
            </p>
          </div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#F3DFA2]"></div>

            {/* 2008 Entry */}
            <div className="mb-4 relative" data-aos="fade-right">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2">2007</h3>
                  <p className="text-black text-end">
                  <span className="font-medium">Naissance d’un acteur à part : TOM</span><br></br>
                  Nous avons décidé de mettre en œuvre notre vision : 
                  réinventer la logistique au Sénégal à travers des opérations intégrées, 
                  une proximité client forte et une ambition régionale affirmée.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>

            {/* 2014 Entry */}
            <div className="mb-4 relative" data-aos="fade-left">
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2">2015</h3>
                  <p className="text-black text-justify">
                  <span className="font-medium">Alliance avec le Port Autonome de Dakar</span><br></br>
                  Installation sur une plateforme logistique de 210.000 m², à 1 km du Port Autonome de Dakar.
                  Une infrastructure unique au Sénégal par sa taille et sa proximité.
                  Début d’une alliance stratégique avec le PAD pour repenser la logistique nationale et accompagner l’essor du commerce régional.
                  </p>
                </div>
              </div>
            </div>

            {/* 2017 Entry */}
            <div className="relative mt-8" data-aos="fade-right">
              <div className="flex items-center">
                <div className=" w-full pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2">2017</h3>
                  <p className="text-black text-end align-top">
                  <span className="font-medium">Lancement de la Zone Unique de Dépotage (ZUD)</span><br></br>
                  Création de la ZUD, initiative pionnière visant à centraliser les opérations de dépotage, 
                  fluidifier les contrôles douaniers et accélérer les flux entre le port et l’hinterland, 
                  notamment vers le Mali via corridor Dakar-Bamako.
                  </p>
                </div>
                <div className="w-full pl-8 text-right">
                  
                  <p className="text-black text-start align-top mt-16">
                  <span className="font-medium">Démarrage des entrepôts et services logistiques spécialisés</span><br></br>
                  TOM renforce son ancrage opérationnel avec le développement de services d’entreposage sous douane, 
                  de logistique vrac, de manutention spécialisée et de gestion des flux sacherie, 
                  répondant aux besoins concrets des grands importateurs nationaux.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                {/* <div className="w-1/2 pl-8"></div> */}
              </div>
            </div>

            {/* <div className="relative mt-8" data-aos="fade-right">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2"></h3>
                  <p className="text-black text-end">
                  <span className="font-medium">Mi 2017 - Démarrage des entrepôts et services logistiques spécialisés</span><br></br>
                  TOM renforce son ancrage opérationnel avec le développement de services d’entreposage sous douane, 
                  de logistique vrac, de manutention spécialisée et de gestion des flux sacherie, 
                  répondant aux besoins concrets des grands importateurs nationaux.
                  </p>
                </div>
                <div className="absolute left-1/2 top-4 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div> */}

            
            {/* Today Entry */}
            <div className="mb-4 mt-12 relative" data-aos="fade-left">
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2">Aujourd'hui</h3>
                  <p className="text-black text-justify">
                  <span className="font-medium">Champion national, pionnier régional</span><br></br>
                  TOM est devenu le champion Sénégalais de la logistique et un acteur stratégique incontournable de l’industrie en Afrique de l’Ouest.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-4 items-center mt-16 pb-4"
          >
            <p className="text-black font-bold text-sm md:text-base text-center">
            TOM, c’est la combinaison de l’agilité d’un acteur de proximité profondément local avec la maîtrise du terrain,
            et la puissance d’un réseau logistique global, partenaire et relais régional de MEDLOG et MSC: premier armateur mondial.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="container mx-auto py-16 px-4 md:px-32 lg:px-48">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <Image
            src="/images/new images/a-propos.png"
            alt="Medlog"
            width={800}
            height={600}
            className="bg-gray-100 rounded-lg object-cover opacity-100"
            data-aos="fade-right"
          />
          <div data-aos="fade-left">
            <div className="flex items-baseline mb-4">
              <div>
                <span
                  className="text-6xl font-bold text-[#F3DFA2] "
                  style={{ animationDelay: "0.5s" }}
                >
                  18
                </span>
              </div>
              <span className="ml-4 text-[#222221] font-bold">
                années d'expérience
              </span>
            </div>
            <p className="text-gray-700 text-justify">
              Avec une intégration forte au sein du groupe MEDLOG et plusieurs
              sites au Sénégal stratégiquement situés et couvrant 250.000 m²,
              notamment une plateforme de distribution dans le Port Autonome de
              Dakar (PAD), nous proposons des solutions logistiques complètes
              pour l&apos;ensemble de la chaîne d&apos;approvisionnement.
            </p>
          </div>
        </div>
        {/* Stats Section */}
        <div className="flex flex-col-reverse md:flex-row gap-16 mt-28 mb-16">
          <table
            className="w-full hidden md:table mx-auto"
            data-aos="fade-right"
          >
            <tbody>
              <tr>
                <td className="w-1/3 text-center px-4 relative overflow-hidden group hover:scale-110 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="text-4xl font-bold mb-2">
                    
                    <CountUp end={-1} duration={2} /> km
                  </div>
                  <div className="text-black">
                     À vol d'oiseau du port autonome de Dakar
                  </div>
                </td>
                <td className="w-1/3 px-4 py-28 bg-[var(--primary)] border-gray-300 text-center relative overflow-hidden group hover:scale-110 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="text-4xl font-bold mb-2">
                    <CountUp end={10000} duration={2} prefix="+" separator="."/> EVP
                  </div>
                  <div className="text-black">Capacité de stockage</div>
                </td>
                <td className="w-1/3 px-4 text-center relative overflow-hidden group hover:scale-110 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="text-4xl font-bold mb-2">
                   <CountUp end={150000} duration={2} prefix="+" separator="."/> EVP
                  </div>
                  <div className="text-[#222221]">
                  Traitées par an
                  </div>
                 
                </td>
                
              </tr>
              <tr>
                <td className="w-1/3 bg-[#222221] text-center px-4 relative overflow-hidden group hover:scale-110 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="text-4xl text-white font-bold mb-2">
                    
                    <CountUp end={40000} duration={2} prefix="+" separator="."/> m²
                  </div>
                  <div className="text-white">
                  Entrepôts dédiés aux matières premières
                  </div>
                </td>
                <td className="w-1/3 px-4 text-center relative overflow-hidden group hover:scale-110 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  {/* <div className="text-4xl font-bold mb-2">
                    <CountUp end={34500} duration={2} /> m²
                  </div>
                  <div className="text-[#222221]">
                     entrepôts dédiés aux matières premières
                  </div> */}
                   <Image
                    src="/images/chiffres_cles.png"
                    alt="Countries"
                    height={400}
                    width={400}
                    className="w-[400px] h-[400px] md:w-[300px] md:h-[300px] object-contain"
                  />
                </td>

                <td className="w-1/3 border-gray-300 px-4 py-28 bg-[#222221] text-center relative overflow-hidden group hover:scale-110 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="text-4xl font-bold mb-2 text-white">
                    <CountUp end={250000} duration={2} prefix="+" separator="."/> m²
                  </div>
                  <div className="text-white">
                    De surface logistique portuaire
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            className="w-full md:w-1/2 block md:hidden"
            data-aos="fade-right"
          >
            <tbody>
              <tr className="h-48">
                <td className="border-r-2 border-gray-300 bg-[#222221] text-center px-4 w-1/2 h-48">
                  <div className="text-black">
                    <CountUp end={250000}  duration={2} />
                  </div>
                  <div className="text-white">
                    M² Surfaces logistiques dédiées
                  </div>
                </td>
                <td className="px-4 w-1/2 h-48">
                  <Image
                    src="/images/counter_arr.png"
                    alt="Countries"
                    height={400}
                    width={400}
                    className="w-[400px] md:w-[300px] md:h-[300px] object-contain"
                  />
                </td>
              </tr>
              <tr className="h-48">
                <td className="border-r-2 border-t-2 px-4 bg-[#F3DFA2] border-gray-300 text-center w-1/2 h-48">
                  <div className="text-4xl font-bold mb-2">
                    <CountUp end={10000} duration={2} />
                  </div>
                  <div className="text-black">EVP</div>
                </td>
                <td className="border-t-2 px-4 bg-[#222221] text-center w-1/2 h-48">
                  <div className="text-4xl font-bold mb-2">
                    <CountUp end={34500} duration={2} />
                  </div>
                  <div className="text-white">
                    M² entrepôts dédiés aux matières premières
                  </div>
                </td>
              </tr>
              <tr className="h-48">
                <td className="border-r-2 border-t-2 border-gray-300 px-4 bg-[#222221] text-center w-1/2 h-48">
                  <div className="text-4xl font-bold mb-2">
                    <CountUp end={210000} duration={2} />
                  </div>
                  <div className="text-white">
                    M² plateforme logistique portuaire
                  </div>
                </td>
                <td className="text-center px-4 w-1/2 h-48">
                  <div className="text-4xl font-bold mb-2" >
                    
                    <CountUp end={-1} duration={2} /> Km
                  </div>
                  <div className="text-black">
                     à vol d'oiseau du port autonome de Dakar
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Mission/Objectif/Vision Section */}
        <div className="my-48">
          {/* Mission Section */}
          <div
            data-aos="fade-right"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
          >
            <div id="mission" className="flex flex-col directed-scroll">
              <div>
                <h2 className="text-4xl font-bold mb-4 md:mb-6 ">
                  NOTRE MISSION
                </h2>
              </div>
              <p className="text-sm md:text-base text-justify">
                Transformer la logistique en Afrique de
                l'Ouest en répondant aux besoins de nos clients avec des solutions sur
                mesure, innovantes et intégrées. Nous visons l'excellence à chaque
                étape de la chaîne d'approvisionnement. En optimisant les processus
                tout en respectant les normes les plus élevées de durabilité et de
                responsabilité environnementale. Animés par une quête constante
                d'innovation, nous nous engageons à créer une valeur ajoutée pour
                nos clients, nos partenaires et les communautés que nous servons.
              </p>
            </div>
            <Image
              src="/images/notre_mission.jpg"
              alt="Medlog"
              width={800}
              height={600}
              className="w-auto bg-gray-100 rounded-lg h-full opacity-100"
            />
          </div>
          {/* Objectif Section */}
          <div
            data-aos="fade-left"
            className="flex flex-col-reverse md:flex-row gap-6 md:gap-12 items-center mt-24"
          >
            <Image
              src="/images/notre_objectif.png"
              alt="Medlog"
              width={800}
              height={600}
              className=" md:w-1/2 bg-gray-100 rounded-lg h-full opacity-100"
            />
            <div id="objectif" className="flex flex-col md:w-1/2 directed-scroll">
              <div>
                <h2 className="text-4xl font-bold mb-4 md:mb-6 ">
                  NOTRE OBJECTIF
                </h2>
              </div>
              <p className="text-sm md:text-base text-justify">
                Renforcer notre position de leader régional et 
                devenir un hub logistique incontournable au Sénégal et en Afrique de l'Ouest,
                en contribuant activement au développement économique du continent. Nous
                facilitons le commerce, la manutention, et le transport des marchandises avec
                efficacité et sécurité, tout en respectant les standards internationaux.
              </p>
            </div>
          </div>
          {/* Vision Section */}
          <div
            data-aos="fade-right"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center mt-24"
          >
            <div id="vision" className="flex flex-col directed-scroll">
              <div>
                <h2 className="text-4xl font-bold mb-4 md:mb-6 ">
                  NOTRE VISION
                </h2>
              </div>
              <p className="text-sm md:text-base text-justify">
                Etre un leader Africain des services logistiques
                intégrés, tout en créant un environnement de travail enrichissant qui valorise
                l'esprit d'équipe, le respect mutuel et le développement professionnel de nos
                collaborateurs. Solidement ancrés au Sénégal, nous accélérons la croissance
                en connectant les territoires isolés grâce à notre réseau routier et maritime.
                Partenaire de confiance, nous relevons chaque défi logistique avec efficacité et
                engagement, garantissant à nos clients une chaîne d'approvisionnement 
                performante et agile.
              </p>
            </div>
            <Image
              src="/images/new images/notre_vision.png"
              alt="Medlog"
              width={800}
              height={600}
              className="h-full rounded-lg opacity-100"
            />
          </div>
        </div>
      </div>

        <div id="valeurs"  data-aos="zoom-in" className="bg-[#FAFAFA] relative w-full h-full px-4 md:px-8 md:py-8 lg:px-4 text-center flex flex-col">
          <div>
            <h2 className="text-5xl text-[var(--foreground)] font-bold mb-20 md:mb-4">
              NOS VALEURS
            </h2>
          </div>

          <div className="relative flex w-full">
            <div
                className="flex flex-wrap overflow-x-auto scrollbar-hide scroll-smooth transition-transform duration-500 ease-in-out mx-0 directed-scroll justify-center md:py-8"
                id="carousel-container"
                style={{ gap: "2.5rem" }}
              >
                <SliderValue />
               
                
            </div>
            
          </div>
        </div>

     

      {/* Team Section */}
      <div className="bg-[#222221] py-4 px-2 lg:px-2 relative my-0">
        
        <div className="container mx-auto">
          <div
            className="flex flex-col gap-1 items-center directed-scroll"
            id="team"
          >
            <h2 className="text-4xl text-white font-bold mb-4 md:mb-4 text-center">
              NOS EXPERTS
            </h2>
            {/* <p className="text-gray-700 text-sm md:text-base text-justify">
              Notre équipe combine expertise internationale et compréhension
              fine des réalités locales, l'alliance parfaite entre vision
              globale et maîtrise du terrain.
            </p> */}
          </div>
          {/* <div className="w-full md:w-full py-2">
            <TeamCarousel />
          </div> */}
          <div className="max-h-screen">
            <TeamSection />
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-screen-xl mx-auto py-12 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
            <div className="flex-1 text-justify">
              <p className="text-gray-700 text-base sm:text-lg mb-6">
                Nous avons pu traverser l'année 2022 avec d'excellents résultats, aussi bien sur le développement de notre bilan que sur nos performances financières.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-4">
                Cette réussite s'explique essentiellement au niveau commercial par :
              </p>
              <ul className="list-disc pl-6 space-y-4 text-gray-700 text-base sm:text-lg">
                <li>
                  Beaucoup de prudence dans notre diversification sectorielle initiée durant les années Covid, nous forçant à nous replier vers les secteurs à fort potentiel
                </li>
                <li>
                  Une diminution progressive et contrôlée des financements aux États et à la clientèle corporate au profit des PME, dont le rendement est supérieur
                </li>
                <li>
                  Des avancées majeures sur les opérations de commerce extérieur, nous permettant d'apprécier fortement nos revenus de change.
                </li>
              </ul>

              
            </div>

            <div className="w-full md:w-[50%] flex-row justify-center md:justify-start">
              <div className="relative w-full max-w-xl aspect-[1/1] mb-4">
                <Image
                  src="/images/team/dg-tom.jpg"
                  alt="Amine BOUABID"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-10 md:mt-16 text-end">Amine BOUABID</h3>
              <p className="text-gray-600 text-end">Directeur Général</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-h-[400px] max-h-[600px]">
      <h2
          className="text-3xl font-bold text-center mb-2"
          data-aos="fade-up"
        >
          Témoignages clients
        </h2>
          <Carousel pauseOnHover
          indicators={true}
          className="h-[400px] md:h-[500px]">
            {testimonials.map((item, index) => (
            <div key={index} className="w-1/2 flex flex-col rounded-xl shadow-lg bg-[var(--primary)] items-center justify-center space-y-4 p-8">
              {/* <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-full"
              /> */}
              <p className="text-sm italic text-gray-700">“{item.text}”</p>
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
            
          </Carousel>
          
        </div>
      <Footer />
    </main>
  );
}
