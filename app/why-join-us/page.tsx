"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import HeaderMenu from "@/components/Header/HeaderMenu";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function WhyJoinUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen mt-32">
      <HeaderMenu isScrolledAndImmutable />
      {/* Hero Section */}
            <div className="relative h-screen flex flex-col justify-end items-center pb-32">
              <div className="absolute -top-20 left-0 right-0 -z-99 h-full">
                <Image
                  src="/images/joinUs-banner.png"
                  alt="TOM MEDLOG Image header"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute w-full h-screen -top-20 bottom-0 right-0 left-0 bg-gradient-to-r from-black/90 to-black/50" />
              <Image
                src="/images/Couronne_Laurier.png"
                alt="Medlog"
                width={300}
                height={100}
                className="absolute top-10 left-1/2object-cover rounded-lg opacity-70"
                
              />
              <h1 className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-5xl md:text-7xl font-normal mb-8 leading-tight text-white z-10">
                UNE ENTREPRISE <span className="text-[#F3DFA2]">SÉNÉGALAISE</span>
              </h1>
              <div className="absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[updown_2s_ease-in-out_infinite] w-80 md:w-auto text-center z-10">
                <span className="text-white text-sm md:text-xl text-center mb-6">
                  TOM est avant tout une entreprise sénégalaise et fière de ses racines. 
                  Créée, développée et dirigée localement, nous sommes le champion national de la logistique et un véritable pionnier,
                  premier opérateur à implanter un port à sec en Afrique de l’Ouest. 
                  Depuis, nous avons établi la norme pour toute l’industrie.
                </span>
              </div>
              {/* <div className="animate-[updown_2s_ease-in-out_infinite] relative z-10">
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
              </div> */}
            </div>

      <div className="container mx-auto px-4 py-16 space-y-32">
          {/* Second section */}
          <section className="flex flex-col-reverse md:flex-row items-center gap-16">
          <div 
          className="w-full md:w-1/2 relative" data-aos="fade-right">
            <Image
              src="/images/objectif-section.png"
              alt="Medlog"
              width={800}
              height={600}
              className="object-cover rounded-lg"
              
            />
            <div className="absolute -bottom-10 right-2 md:-right-8 w-20 h-20 grid grid-cols-4 gap-0.5 rotate-180">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-yellow-400 rounded-full"
                ></div>
              ))}
            </div>
          </div>
          <div id="passion" className="w-full md:w-1/2 space-y-6 directed-scroll">
           <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold ">CHAMPION NATIONAL DE LA LOGISTIQUE SÉNÉGALAISE</h2>
            </div> 
            <div className="w-20 h-1 bg-yellow-400"></div>
            <p className="text-gray-700 text-justify">
            Nous avons prouvé qu’un acteur local, Sénégalais, pouvait atteindre l’excellence, tout en s’appuyant sur un réseau mondial 
              — celui de <span className="font-bold ">MEDLOG</span> et de <span className="font-bold ">MSC</span>, leader mondial du transport maritime et de la logistique.
              Notre fierté : porter haut les couleurs du Sénégal, 
              au service du commerce et du développement économique de tout le pays et de la sous-région.
            </p>
          </div>
        </section>

        {/* First section */}
        <section className="flex flex-col md:flex-row items-center gap-16">
          <div id="entreprise-familiale" className="w-full md:w-1/2 space-y-6 directed-scroll">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold ">
              UNE ENTREPRISE FAMILIALE, À TAILLE HUMAINE
              </h2>
            </div>
            <div className="w-20 h-1 bg-yellow-400"></div>
            <p className="text-gray-700 text-justify">
              Rejoindre <span className="font-bold ">TOM</span>,  c’est intégrer une famille. 
              Depuis notre création, nous avons toujours fonctionné comme une entreprise à taille humaine, où chacun compte réellement.
              Nous ne croyons pas aux structures anonymes. Ce qui fait notre force, c’est la proximité, 
              la confiance et l’entraide entre nos équipes.
              Ici, on se connaît, on se respecte, on avance ensemble.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative" data-aos="fade-left">
            <Image
              src="/images/sections/section_1.jpg"
              alt="Medlog"
              width={800}
              height={600}
              className="object-cover bg-gray-200 rounded-lg"
            />
            <div className="absolute -top-4 -right-4 w-20 h-20 grid grid-cols-4 gap-0.5">
              {[...Array(16)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-yellow-400 rounded-full"
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* Second section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 relative" data-aos="fade-right">
            <Image
              src="/images/evolution-section.png"
              alt="Medlog"
              width={800}
              height={600}
              className="object-cover bg-gray-200 rounded-lg"
            />
            <div className="absolute -bottom-10 right-2 md:-right-8 w-20 h-20 grid grid-cols-4 gap-0.5 rotate-180">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 bg-yellow-400 rounded-full"
                ></div>
              ))}
            </div>
          </div>
          <div id="passion" className="w-full md:w-1/2 space-y-6 directed-scroll">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold ">UNE ENTREPRISE QUI FAIT ÉVOLUER</h2>
            </div>
            <div className="w-20 h-1 bg-yellow-400"></div>
            <p className="text-gray-700 text-justify">
              Chez <span className="font-bold ">TOM</span>, nous croyons fermement en la progression de chacun.
              Nos collaborateurs ne sont pas de simples exécutants : ce sont des piliers de notre croissance. 
              C’est pourquoi nous faisons de l’évolution interne une priorité et investissons dans la formation, 
              la responsabilisation et l’accompagnement de chaque membre de l’équipe.
              Nous voulons que nos talents grandissent avec nous — durablement, selon leurs ambitions, 
              avec un vrai plan de carrière et un environnement qui favorise l’initiative et la prise de responsabilités.
            </p>
          </div>
        </section>

        
      </div>
<<<<<<< HEAD
      <div 
      className="h-[50vh] flex flex-col justify-center items-end mb-32"
      style={{
        backgroundImage: `linear-gradient(to left, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url('/images/cv-section.png')`,
        backgroundSize: 'cover',
        backgroundPositionY: `20%`,
        backgroundRepeat: 'no-repeat',
      }}>
          {/* <div className="absolute top-0 left-0 right-0 -z-99 h-full">
            <Image
              src="/images/cv-section.png"
              alt="TOM MEDLOG Image header"
              fill
              className="object-cover"
            />
          </div> */}
          {/* <div className="absolute w-full h-screen top-0 bottom-0 right-0 left-0 bg-gradient-to-l from-black/90 to-black/20" /> */}
          {/* <Image
            src="/images/Couronne_Laurier.png"
            alt="Medlog"
            width={300}
            height={100}
            className="object-cover rounded-lg opacity-70"
            
          /> */}
          <h1 className="w-30 text-center text-5xl md:text-7xl font-normal mb-8 leading-tight text-white z-10">
            Rejoignez-nous
          </h1>
          <div className="w-30 md:w-4/12 text-center z-10">
            <Link
            href="#"
            className="bg-[var(--primary)] text-black font-normal text-2xl px-10 py-5 hover:brightness-95 transition-all duration-300 rounded-full hover:scale-105 hover:shadow-lg"
          >
              Postulez maintenant        
            </Link>
          </div>
          {/* <div className="animate-[updown_2s_ease-in-out_infinite] relative z-10">
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
          </div> */}
      </div>
    
=======
     {/* <div className="relative h-1/2 flex flex-col justify-end items-center pb-32">
              <div className="absolute top-20 left-0 right-0 -z-99 h-full">
                <Image
                  src="/images/cv-section.png"
                  alt="TOM MEDLOG Image header"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute w-full h-screen top-20 bottom-0 right-0 left-0 bg-gradient-to-r from-black/90 to-black/50" />
              <Image
                src="/images/Couronne_Laurier.png"
                alt="Medlog"
                width={300}
                height={100}
                className="object-cover rounded-lg opacity-70"
                
              />
              <h1 className="w-full text-center text-5xl md:text-7xl font-normal mb-8 leading-tight text-white z-10">
                UNE ENTREPRISE <span className="text-[#F3DFA2]">SÉNÉGALAISE</span>
              </h1>
              <div className="w-80 md:w-auto text-center z-10">
                <span className="text-white text-sm md:text-xl text-center mb-6">
                  TOM est avant tout une entreprise sénégalaise et fière de ses racines. 
                  Créée, développée et dirigée localement, nous sommes le champion national de la logistique et un véritable pionnier,
                  premier opérateur à implanter un port à sec en Afrique de l’Ouest. 
                  Depuis, nous avons établi la norme pour toute l’industrie.
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
            </div>*/}
>>>>>>> 3511d0b8f2b86993083f8fe735613a9f72ffcaef

      <Footer />
    </main>
  );
}
