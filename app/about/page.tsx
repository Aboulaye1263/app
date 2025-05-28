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
      role: "Responsable Achats et Transit - Supply Chain Agroline SA",
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
            src="/images/banners/banner_home.png"
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
          <svg
            width="80"
            height="52"
            viewBox="0 0 24 24"
            fill="#F3DFA2"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-3600 animate-[downward_2s_ease-in-out_infinite]"
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
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
            <p className="text-gray-700 text-sm md:text-base text-center">
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
                  <p className="text-gray-700 text-end">
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
                  <p className="text-gray-700 text-justify">
                  <span className="font-medium">Alliance avec le Port Autonome de Dakar</span><br></br>
                  Installation sur une plateforme logistique de 210.000 m², à 1 km du Port Autonome de Dakar.
                  Une infrastructure unique au Sénégal par sa taille et sa proximité.
                  Début d’une alliance stratégique avec le PAD pour repenser la logistique nationale et accompagner l’essor du commerce régional.
                  </p>
                </div>
              </div>
            </div>

            {/* 2017 Entry */}
            <div className="relative" data-aos="fade-right">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2">2017</h3>
                  <p className="text-gray-700 text-end">
                  <span className="font-medium">Mars 2017 - Lancement de la Zone Unique de Dépotage (ZUD)</span><br></br>
                  Création de la ZUD, initiative pionnière visant à centraliser les opérations de dépotage, 
                  fluidifier les contrôles douaniers et accélérer les flux entre le port et l’hinterland, 
                  notamment vers le Mali via corridor Dakar-Bamako.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>

            <div className="relative mt-8" data-aos="fade-right">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2"></h3>
                  <p className="text-gray-700 text-end">
                  <span className="font-medium">Mi 2017 - Démarrage des entrepôts et services logistiques spécialisés</span><br></br>
                  TOM renforce son ancrage opérationnel avec le développement de services d’entreposage sous douane, 
                  de logistique vrac, de manutention spécialisée et de gestion des flux sacherie, 
                  répondant aux besoins concrets des grands importateurs nationaux.
                  </p>
                </div>
                <div className="absolute left-1/2 top-4 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>

            
            {/* Today Entry */}
            <div className="mb-4 mt-4 relative" data-aos="fade-left">
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2">Aujourd'hui</h3>
                  <p className="text-gray-700 text-justify">
                  <span className="font-medium">Champion national, pionnier régional</span><br></br>
                  TOM est devenu le champion Sénégalais de la logistique et acteur stratégique et incontournable de l’industrie en Afrique de l’Ouest.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-4 items-center mt-16 pb-4"
          >
            <p className="text-gray-700 text-sm md:text-base text-center">
            TOM, <span className="font-bold">c’est la combinaison de l’agilité d’un acteur de proximité profondément local avec la maîtrise du terrain,</span>
            et la puissance d’un réseau logistique global, partenaire et relais régional de <span className="font-bold"> MEDLOG et MSC: premier armateur mondial.</span>
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
              src="/images/notre-objectif.jpg"
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
                {[{
                  icon: "/images/chance.png", 
                  title:"Nous croyons à l'égalité des chances",
                  content: "Nous partageons nos connaissances, offrons formation et soutien pour favoriser la croissance professionnelle de nos employés."+
                          " Nous garantissons des opportunités équitables, "+
                          "un développement à long terme, et valorisons la diversité culturelle."
                         
                  },
                  {
                    icon: "/images/evolution.png", 
                    title:"Nous évoluons constamment", 
                    content: "Grâce à des solutions de transport fiables et durables,"+
                            " nous facilitons les échanges internationaux, "+
                            "soutenons les économies locales et encourageons une logistique responsable. "+
                            "Nous intégrons les nouvelles technologies pour répondre aux besoins du marché."
                    },
                    {
                      icon: "/images/famille.png", 
                      title:"Nous sommes une famille", 
                      content: "nous cultivons un esprit familial basé sur la confiance,"+
                              " le dévouement et l'appartenance. "+
                              "Cela nous pousse à agir avec courage et responsabilité pour le bien de nos clients et collaborateurs. "
                    },
                    {
                      icon: "/images/passion.png",
                      title: "Nous sommes passionnés et engagés",
                      content: "Nous sommes animés par une passion qui nous pousse à offrir des services d'excellence,"+
                              "à relever les défis avec persévérance et à offrir une expérience unique à nos clients."+
                              "Chaque membre de notre équipe partage cette volonté de dépassement et de satisfaction."
                          
                    },
                    {
                      icon:"/images/soucieux.png",
                      title:"Nous nous soucions des gens",
                      content:"Nous valorisons chaque individu pour sa contribution unique."+
                              "Nous établissons des relations authentiques basées sur l'éthique"+
                              "le respect et l'esprit d'équipe, en nous préoccupant sincèrement de"+
                              "la satisfaction et fidélité de nos clients et collaborateurs."
                    }

                ].map((valeurs, index) => (
                  <div key={index} className="flex-wrap w-full md:w-[25%] px-2">
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center text-center h-full w-auto">
                      <div className="mb-6 hover:animate-[bell_1s_ease-in-out]">
                        <Image
                          src={valeurs.icon}
                          alt={valeurs.title}
                          width={70}
                          height={70}
                          className="mr-1"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-4">{valeurs.title}</h3>
                      <p className="text-black text-sm md:text-base text-justify mt-8">{valeurs.content}</p>
                    </div>
                  </div>
                ))}
               
                
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
            <div className="flex-1">
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

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-10 md:mt-16">Amine BOUABID</h3>
              <p className="text-gray-600">Directeur Général</p>
            </div>

            <div className="w-full md:w-1/3 flex justify-center md:justify-start">
              <div className="relative w-full max-w-xs aspect-[3/4] mb-4">
                <Image
                  src="/images/team/dg-tom.jpg"
                  alt="Amine BOUABID"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" h-full md:h-auto">
      <h2
          className="text-3xl font-bold text-center mb-2"
          data-aos="fade-up"
        >
          Témoignages clients
        </h2>
          <Carousel pauseOnHover
          indicators={true}
          className="h-full md:h-[40%]">
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
