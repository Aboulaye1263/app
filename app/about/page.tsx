"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import HeaderMenu from "@/components/Header/HeaderMenu";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Tooltip } from "flowbite-react";
import { title } from "process";


function CountUp({
  end,
  duration = 2,
  delay = 0,
  fontColor = "font-black",
  prefix = "",
  fontWeightSize = "text-4xl font-bold mb-2",
}: {
  end: number;
  duration?: number;
  fontColor?: string;
  delay?: number;
  prefix?: string;
  fontWeightSize?: string;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const startTime = Date.now() + delay * 1000;
    let animationFrameId: number;

    const updateCount = () => {
      const now = Date.now();
      if (now < startTime) {
        animationFrameId = requestAnimationFrame(updateCount);
        return;
      }

      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const currentCount = Math.floor(end * progress);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration, delay]);

  return (
    <span className={`font-[ubuntu] ${fontColor} ${fontWeightSize}`}>
      {prefix}
      {count}
    </span>
  );
}

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <HeaderMenu />

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
      <div className="bg-gray-50 py-16 px-4 md:px-32 lg:px-48">
        <div className="container mx-auto px-4">
          <h2 id="histoire" className="text-4xl font-bold text-center mb-12 directed-scroll">
            NOTRE HISTOIRE
          </h2>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-4 items-center mb-16"
          >
            <p className="text-gray-700 text-sm md:text-base text-center">
              Parce que la logistique en Afrique de l'Ouest méritait mieux que
              des embûches et des retards, on s'est lancé un défi: Révolutionner
              le secteur, brique par brique, innovation par innovation.
            </p>
          </div>
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#F3DFA2]"></div>

            {/* 2008 Entry */}
            <div className="mb-16 relative" data-aos="fade-right">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2">2008</h3>
                  <p className="text-gray-700 text-justify">
                    On a décidé de faire bouger les lignes de la logistique en
                    Afrique de l'Ouest. Depuis, on n'a jamais levé le pied.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>

            {/* 2014 Entry */}
            <div className="mb-16 relative" data-aos="fade-left">
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2">2015</h3>
                  <p className="text-gray-700 text-justify">
                    On démarre la plateforme logistique portuaire à 1 Km à vol
                    d’oiseau du port, avec 210 000 m2. On devient le plus grand
                    port sec du Sénégal. Une alliance stratégique avec le Port
                    Autonome de Dakar pour repenser les infrastructures et
                    accélérer le commerce international.
                  </p>
                </div>
              </div>
            </div>

            {/* 2017 Entry */}
            <div className="relative" data-aos="fade-right">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2">2017</h3>
                  <p className="text-gray-700 text-justify">
                    Lancement de la zone unique de dépotage pour centraliser
                    toutes les zones de dépotages et avoir un meilleur contrôle
                    des services douanier. Impact direct sur l’amélioration des
                    flux avec l’hinterland, particulièrement le corridor
                    Dakar-Bamako.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>

            {/* 2022 Entry */}
            <div className="mb-16 mt-16 relative" data-aos="fade-left">
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2">2022</h3>
                  <p className="text-gray-700 text-justify">
                    Le Terminal des Opérations Maritimes (TOM)
                    Sénégal a traité durant le mois de novembre 2022, 80.449
                    tonnes de marchandises en conventionnel réalisant ainsi une
                    performance record.
                  </p>
                </div>
              </div>
            </div>

            {/* Present Entry */}
            <div className="relative" data-aos="fade-right">
              <div className="flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <h3 className="text-2xl font-bold mb-2">2024</h3>
                  <p className="text-gray-700 text-justify">
                    Record établis en décembre 2024 de 3500 EVP dépotés dans la
                    zone unique de dépotage en un seul mois.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>

            {/* Today Entry */}
            <div className="mb-16 mt-16 relative" data-aos="fade-left">
              <div className="flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#F3DFA2] rounded-full"></div>
                <div className="w-1/2 pl-8">
                  <h3 className="text-2xl font-bold mb-2">Aujourd'hui</h3>
                  <p className="text-gray-700 text-justify">
                    Nous sommes le numéro un de la logistique au Sénégal en
                    associant expertise mondiale et connaissance du terrain pour
                    offrir des solutions logistiques de pointe à nos clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col gap-4 items-center mt-16"
          >
            <p className="text-gray-700 text-sm md:text-base text-center">
              Ce qu'on construit, ce n'est pas juste des entrepôts : On facilite
              les échanges. On booste les entreprises locales. On accélère la
              transformation logistique. Et surtout, on ne s'arrête pas là.
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
                  +17
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
                    +<CountUp end={10000} duration={2} /> EVP
                  </div>
                  <div className="text-black">Capacité de stockage</div>
                </td>
                <td className="w-1/3 px-4 text-center relative overflow-hidden group hover:scale-110 transition-transform duration-300">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <div className="text-4xl font-bold mb-2">
                   <CountUp end={150000} duration={2} /> EVP
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
                    
                    <CountUp end={34500} duration={2} /> m²
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
                    <CountUp end={21} fontColor="text-white" duration={2} /> hectares
                  </div>
                  <div className="text-white">
                    De plateforme logistique portuaire
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
                    <CountUp end={250000} fontColor="text-white" duration={2} />
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
                    <CountUp end={34500} fontColor="text-white" duration={2} />
                  </div>
                  <div className="text-white">
                    M² entrepôts dédiés aux matières premières
                  </div>
                </td>
              </tr>
              <tr className="h-48">
                <td className="border-r-2 border-t-2 border-gray-300 px-4 bg-[#222221] text-center w-1/2 h-48">
                  <div className="text-4xl font-bold mb-2">
                    <CountUp end={210000} fontColor="text-white" duration={2} />
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
                Notre mission est de transformer la logistique en Afrique de
                l&apos;Ouest en répondant aux besoins de nos clients avec des
                solutions sur mesure, innovantes et intégrées. Nous visons
                l&apos;excellence à chaque étape de la chaîne
                d&apos;approvisionnement. Comment ? En optimisant les processus
                tout en respectant les normes les plus élevées de durabilité et
                de responsabilité environnementale. Animés par une quête
                constante d&apos;innovation, nous nous engageons à créer une
                valeur durable pour nos clients, nos partenaires et les
                communautés que nous servons.
              </p>
            </div>
            <Image
              src="/images/new images/notre_mission.png"
              alt="Medlog"
              width={800}
              height={600}
              className="w-fullbg-gray-100 rounded-lg h-full opacity-100"
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
                Renforcer notre position de leader régional et de devenir un hub
                logistique incontournable au Sénégal et en Afrique de
                l&apos;Ouest, tout en contribuant activement au développement
                économique du continent. Nous facilitons le commerce, la
                manutention, et le transport des marchandises avec efficacité et
                sécurité, en nous inspirant des meilleures pratiques
                internationales.
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
                Nous aspirons à devenir le référent continental en matière de
                logistique intégrée et de gestion de conteneurs, tout en créant
                un environnement de travail épanouissant, fondé sur la
                collaboration et le respect. Solidement ancrés au Sénégal, nous
                accélérons la croissance de l&apos;Afrique de l&apos;Ouest en
                connectant les territoires isolés grâce à notre réseau routier
                et maritime. Partenaire de confiance, nous relevons chaque défi
                logistique avec efficacité et engagement, garantissant à nos
                clients une chaîne d&apos;approvisionnement performante et
                agile.
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

      {/* <div
        data-aos="zoom-in"
        className="bg-[var(--primary)] relative w-full h-[60vh] px-4 md:px-32 lg:px-4 text-center "
      >
        <div
          data-aos="fade-left"
          className="hidden md:block md:absolute left-8 md:left-16 lg:left-24 top-0 bottom-0 w-[2px] bg-[var(--primary)]"
        />
        <div>
          <h2 className="text-5xl text-[var(--foreground)] font-bold mb-20 md:mb-20 mt-14">
            NOS VALEURS
          </h2>
          
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 container mx-auto">
          <div
            id="valeurs"
            className="w-full mt-16 md:mt-0  flex flex-row md:flex-col items-center justify-center directed-scroll"
          >
            <Image
              src="/images/chance.png"
              alt="Medlog"
              width={70}
              height={70}
              className="mr-1"
            />
            <h3 className="text-xl font-bold text-[#222221] mt-4">
              Nous croyons à l'égalité des chances
            </h3>
          </div>
          <div
            id="valeurs"
            className="w-full mt-16 md:mt-0 flex flex-row md:flex md:flex-col items-center justify-center directed-scroll"
          >
            <Image
              src="/images/evolution.png"
              alt="Medlog"
              width={70}
              height={70}
              className="mr-1"
            />
            <h3 className="text-xl font-bold text-[#222221] mt-4">
              Nous évoluons constamment
            </h3> 
          </div>
          <div
            id="valeurs"
            className="w-full mt-16 md:mt-0 flex flex-row md:flex-col items-center justify-center directed-scroll"
          >
            <Image
              src="/images/famille.png"
              alt="Medlog"
              width={70}
              height={70}
              className="mr-1"
            />
            <h3 className="text-xl font-bold text-[#222221] mt-4">
              Nous sommes une famille
            </h3>
          </div>
          <div
            id="valeurs"
            className="w-full mt-16 md:mt-0 flex flex-row md:flex-col items-center justify-center directed-scroll"
          >
            <Image
              src="/images/passion.png"
              alt="Medlog"
              width={70}
              height={70}
              className="mr-1"
            />
            <h3 className="text-xl font-bold text-[#222221] mt-4">
              Nous sommes passionnés et engagés
            </h3>
          </div>
          <div
            id="valeurs"
            className="w-full mt-16 md:mt-0 flex flex-row md:flex-col items-center justify-center directed-scroll"
          >
            <Image
              src="/images/soucieux.png"
              alt="Medlog"
              width={70}
              height={70}
              className="mr-1"
            />
            <h3 className="text-xl font-bold text-[#222221] mt-4">
              Nous nous soucions des gens
            </h3>
          </div>
          </div>
        </div> */}

        <div   data-aos="zoom-in" className="bg-[#FAFAFA] relative w-full h-[90vh] px-4 md:px-32 lg:px-4 text-center ">
          <div>
            <h2 className="text-5xl text-[var(--foreground)] font-bold mb-20 md:mb-20 mt-14">
              NOS VALEURS
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div
                className="pl-0 flex overflow-x-auto scrollbar-hide scroll-smooth transition-transform duration-500 ease-in-out mx-12 directed-scroll"
                id="carousel-container"
                style={{ gap: "1rem" }}
              >
                {[{
                  icon: "/images/chance.png", 
                  title:"Nous croyons à l'égalité des chances", 
                  content: "Notre mission est de fournir à nos employés des opportunités d'épanouissement et de croissance personnelle."+
                          " Nous nousengageons à partager nos connaissances, à fournir une formationet un soutien, "+
                          "permettant la croissance professionnelle de nosemployés. "+
                          "Nous garantissons des opportunités équitables, offrantun développement professionnel à long terme, "+
                          "accueillant ladiversité et valorisant toutes les cultures."
                  },
                  {
                    icon: "/images/evolution.png", 
                    title:"Nous évoluons constamment", 
                    content: "À travers des solutions de transport fiables et durables, nous"+
                            " facilitons les échanges internationaux, stimulons les économies "+
                            "locales et œuvrons pour une logistique plus responsable. "
                    },
                    {
                      icon: "/images/famille.png", 
                      title:"Nous sommes une famille", 
                      content: "Chez TOM, nous cultivons un esprit de famille qui inspire confiance,"+
                              " dévouement et sentiment d' appartenance. Nous croyons en la force des relations humaines "+
                              "et en l'importance de créer un environnement où chacun se sent valorisé et soutenu. "
                    },
                    {
                      icon: "/images/passion.png",
                      title: "Nous sommes passionnés et engagés",
                      content: "Nous sommes passionnés par ce que nous faisons. Cette passion se traduit par un engagement quotidien"+
                              "à fournir des services d'excellence, à surmonter les défis"+
                              "avec persévérance et à offrir à nos clients une expérience unique."+
                              "Chaque membre de notre équipe est animé par cette volonté de dépassement et de satisfaction client."
                    },
                    {
                      icon:"/images/soucieux.png",
                      title:"Nous nous soucions des gens",
                      content:"Nous pensons que chaque personne apporte une valeur unique. Nous"+
                              "développons des relations authentiques fondées sur l'éthique, le"+
                              "respect et l' esprit d'équipe. Nous nous soucions vraiment de la"+
                              "satisfaction et de la fidélité de nos clients et collaborateurs."
                    }

                ].map((valeurs, index) => (
                  <div key={index} className="flex-none w-full md:w-1/3 px-2">
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center text-center h-full w-96">
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

     

      {/* Team Section */}
      <div className="bg-[#222221] py-16 px-4 md:px-32 lg:px-48 relative my-48">
        <div className="absolute bg-[#222221] w-full h-1/2 left-0 bottom-0"></div>
        <div className="container mx-auto">
          <div
            className="flex flex-col gap-4 items-center mb-16 directed-scroll"
            id="team"
          >
            <h2 className="text-4xl text-white font-bold mb-4 md:mb-6 text-center">
              UNE ÉQUIPE D'EXPERTS
            </h2>
            {/* <p className="text-gray-700 text-sm md:text-base text-justify">
              Notre équipe combine expertise internationale et compréhension
              fine des réalités locales, l'alliance parfaite entre vision
              globale et maîtrise du terrain.
            </p> */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Nom Prénom",
                role: "Directeur Général",
                image: "/images/team/pp.jpeg",
              },
              {
                name: "Nom Prénom",
                role: "Directeur Commercial",
                image: "/images/team/pp.jpeg",
              },
              {
                name: "Nom Prénom",
                role: "Directeur Opérations",
                image: "/images/team/pp.jpeg",
              },
              {
                name: "Nom Prénom",
                role: "Directeur Financier",
                image: "/images/team/pp.jpeg",
              },
            ].map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="relative w-48 h-48 mb-4">
                  <div className="absolute inset-0 rounded-full"></div>
                  <div className="absolute inset-2 overflow-hidden rounded-full bg-white">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-white text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container mx-auto py-16 md:pb-32 px-4 md:px-32 lg:px-48">
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <div className="text-[var(--primary)] text-6xl font-serif mb-2">
                "
              </div>
              <p className="text-gray-700 text-lg mb-6">
                Nous avons pu traverser l'année 2022 avec d'excellents
                résultats, aussi bien sur le développement de notre bilan que
                sur nos performances financières.
              </p>
              <p className="text-gray-700 text-lg mb-4">
                Cette réussite s'explique essentiellement au niveau commercial
                par :
              </p>
              <ul className="list-disc pl-6 space-y-4 text-gray-700">
                <li>
                  Beaucoup de prudence dans notre diversification sectorielle
                  initiée durant les années Covid, nous forçant à nous replier
                  vers les secteurs à fort potentiel
                </li>
                <li>
                  Une diminution progressive et contrôlée des financements aux
                  États et à la clientèle corporate au profit des PME, dont le
                  rendement est supérieur
                </li>
                <li>
                  Des avancées majeures sur les opérations de commerce
                  extérieur, nous permettant d'apprécier fortement nos revenus
                  de change.
                </li>
              </ul>
              <div className="text-[var(--primary)] text-6xl font-serif text-right">
                "
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <div className="w-48 h-48 relative mb-4">
                <Image
                  src="/images/team/pp.jpeg"
                  alt="Amine BOUABID"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Amine BOUABID</h3>
              <p className="text-gray-600">Directeur Général</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
