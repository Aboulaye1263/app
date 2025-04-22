"use client";
import Image from "next/image";
import Footer from "@/components/Footer";
import HeaderMenu from "@/components/Header/HeaderMenu";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

      <div className="container mx-auto px-4 py-16 space-y-32">
        {/* First section */}
        <section className="flex flex-col md:flex-row items-center gap-16">
          <div id="entreprise-familiale" className="w-full md:w-1/2 space-y-6 directed-scroll">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-bold ">
                LES GENS AU COEUR DE NOS ACTIVITÉS
              </h2>
            </div>
            <div className="w-20 h-1 bg-yellow-400"></div>
            <p className="text-gray-700 text-justify">
              Chez <span className="font-bold ">TOM</span>, les gens sont au
              cœur de nos activités. Nous nous engageons non seulement à
              recruter les bonnes personnes, mais aussi à fournir la formation
              et l’accompagnement dont nos équipes ont besoin pour faire
              progresser leur carrière, conformément à leurs propres objectifs
              et aspirations.
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
              src="/images/sections/section_2.jpg"
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
              <h2 className="text-2xl font-bold ">VALORISER LA DIVERSITÉ</h2>
            </div>
            <p className="text-gray-700 text-justify">
              La diversité est la clé de notre succès : notre main-d'œuvre est
              composée de multiples nationalités et de plusieurs générations.
              Nous entretenons un environnement ouvert et culturellement
              diversifié pour nos employés et nous croyons fermement dans
              l'égalité des opportunités.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 space-y-6 p" data-aos="fade-right">
              <div className="w-full md:w-1/2">
                <div className="flex flex-row items-center gap-2">
                  <h2 className="text-2xl font-bold mb-4 mt-4">
                    IMPACT POSITIF AU TRAVAIL
                  </h2>
                </div>
                <div className="w-full h-0.5 bg-[#F3DFA2] mb-6"></div>
              </div>
              <p className="text-gray-700 text-justify">
                Lorsque vous travaillez pour TOM, vous faites partie
                d'une équipe qui se concentre sur l'impact positif dans le monde
                – du maintien du flux des échanges mondiaux à la fourniture de
                solutions durables et à la protection de nos mers.
              </p>
            </div>
            <div className="w-full md:w-1/2" data-aos="fade-left">
              <Image
                src="/images/sections/section_3.jpg"
                width={800}
                height={600}
                alt="Image 3"
                className="object-cover bg-gray-200 rounded-lg"
              />
            </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
