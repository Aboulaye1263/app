"use client";

import Footer from "@/components/Footer";
import HeaderMenu from "@/components/Header/HeaderMenu";
import Image from "next/image";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { services } from "@/constants/services";
import { useRouter } from "next/navigation";
import Link from "next/link";

// bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/70

export default function ServicesPage() {
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#FAFAFA] overflow-x-hidden">
      <HeaderMenu isScrolledAndImmutable />

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
      <div className="relative h-screen flex flex-col justify-end items-center pb-32">
        <div className="absolute top-0 left-0 right-0 -z-99 h-full">
          <Image
            src="/images/medlog_3.jpg"
            alt="TOM MEDLOG Image header"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute w-full h-screen bottom-0 right-0 left-0 bg-gradient-to-r from-black/90 to-black/50" />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-5xl md:text-7xl font-bold mb-2 leading-tight text-white z-10">
          UNE EXPERTISE DÉDIÉE À
        </h1>
        <h1 className="absolute text-[var(--primary)] top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-5xl md:text-7xl font-bold mb-8 leading-tight z-10">
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
      <div className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div
              id={service.tagLink}
              key={service.id}
              className="directed-scroll"
            >
              <div
                className={`group h-full relative overflow-hidden rounded-2xl backdrop-blur-sm
                         transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl
                         ${
                           index % 2 === 0 ? "bg-[#222221]/95" : "bg-white/95"
                         }`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--primary)]/20 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[var(--primary)]/20 to-transparent rounded-full blur-2xl transform -translate-x-16 translate-y-16"></div>

                <div className="relative p-8 flex flex-col h-full">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl p-3 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <Image
                        src={service.image}
                        alt={service.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3
                      className={`text-2xl font-bold mb-6 tracking-tight
                                ${
                                  index % 2 === 0 ? "text-white" : "text-black"
                                }`}
                    >
                      {service.title}
                    </h3>

                    <ul
                      className={`space-y-4 text-lg leading-relaxed
                                ${
                                  index % 2 === 0
                                    ? "text-gray-300"
                                    : "text-gray-600"
                                }`}
                    >
                      {service.description}
                    </ul>
                  </div>

                  {/* Arrow indicator */}
                  <Link
                    href={`/services/${service.tagLink}`}
                    className={`mt-8 flex items-center gap-2 text-sm font-medium
                                ${
                                  index % 2 === 0
                                    ? "text-[var(--primary)]"
                                    : "text-gray-900"
                                }`}
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
              </div>
            </div>
          ))}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2
              className="inline-block text-3xl md:text-4xl font-bold border-2 border-[var(--primary)] 
                         px-8 py-4 rounded-md hover:bg-[var(--primary)] hover:text-black transition-colors"
            >
              SOLUTIONS À VALEURS AJOUTÉS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "/icons/dropper.png", title: "Dépotage" },
              { icon: "/icons/empotage.png", title: "Empotage" },
              { icon: "/icons/man_coll.png", title: "Gestion collatérale" },
              { icon: "/icons/trailer.png", title: "Cargo de projet" },
              { icon: "/icons/agent.png", title: "Agent portuaire" },
              { icon: "/icons/vmg.png", title: "VMG, pesage et fumigation" },
              { icon: "/icons/improve.png", title: "Amélioration" },
              { icon: "/icons/flexybags.png", title: "Flexibags" },
            ].map((solution, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl 
                         transition-all duration-500 transform hover:-translate-y-1
                         border border-gray-100 hover:border-[var(--primary)]"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 mb-6 group-hover:scale-110 transition-transform">
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      fill
                      className="object-contain opacity-50 group-hover:opacity-100 
                               transition-opacity duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-center text-gray-800 group-hover:text-[var(--primary)] transition-colors">
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
