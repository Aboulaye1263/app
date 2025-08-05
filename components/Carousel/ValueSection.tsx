"use client";
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart, Shield, Target, Users, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/components/hooks/use-mobile';
import Image from 'next/image';

import "aos/dist/aos.css";


interface Value {
  id: number;
  icon: string;
  title: string;
  description: string;
}

 const values: Value[] = [
    {
      id: 1,
      icon: "/images/chance.png",
      title: "Nous croyons à l'égalité des chances",
      description: "Nous partageons nos connaissances, offrons formation et soutien pour favoriser la croissance professionnelle de nos employés."+
                    " Nous garantissons des opportunités équitables, "+
                    "un développement à long terme, et valorisons la diversité culturelle."
    },
    {
      id: 2,
      icon: "/images/evolution.png",
      title: "Nous évoluons constamment",
      description: "Grâce à des solutions de transport fiables et durables,"+
                    " nous facilitons les échanges internationaux, "+
                    "soutenons les économies locales et encourageons une logistique responsable. "+
                    "Nous intégrons les nouvelles technologies pour répondre aux besoins du marché."
    },
    {
      id: 3,
      icon: "/images/famille.png",
      title: "Nous sommes une famille",
      description: "Nous cultivons un esprit familial basé sur la confiance,"+
                    " le dévouement et l'appartenance. "+
                    "Cela nous pousse à agir avec courage et responsabilité pour le bien de nos clients et collaborateurs. "
    },
    {
      id: 4,
      icon: "/images/passion.png",
      title: "Nous sommes passionnés et engagés",
      description: "Nous sommes animés par une passion qui nous pousse à offrir des services d'excellence,"+
                    "à relever les défis avec persévérance et à offrir une expérience unique à nos clients."+
                    "Chaque membre de notre équipe partage cette volonté de dépassement et de satisfaction."
    },
    {
      id: 5,
      icon: "/images/soucieux.png",
      title: "Nous nous soucions des gens",
      description: "Nous valorisons chaque individu pour sa contribution unique."+
                    "Nous établissons des relations authentiques basées sur l'éthique"+
                    "le respect et l'esprit d'équipe, en nous préoccupant sincèrement de"+
                    "la satisfaction et fidélité de nos clients et collaborateurs."
    }
  ];
const ValuesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useIsMobile();
  const itemsPerPage = isMobile ? 1 : 3;
  const maxIndex = Math.max(0, values.length - itemsPerPage);

  // Reset index when screen size changes to avoid out of bounds
  useEffect(() => {
    const maxValidIndex = Math.floor((values.length - 2) / itemsPerPage) * itemsPerPage;
    if (currentIndex > maxValidIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, itemsPerPage]);

  const nextSlide = () => {
    setCurrentIndex(prev => {
      const nextIndex = prev + itemsPerPage;
      return nextIndex >= values.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex(prev => {
      const prevIndex = prev - itemsPerPage;
      return prevIndex < 0 ? Math.floor((values.length - 1) / itemsPerPage) * itemsPerPage : prevIndex;
    });
  };

  const visibleValues = values.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <section className="py-16 bg-values-bg">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="relative">
          <div className={`grid gap-8 mb-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
            {visibleValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={value.id}
                  data-aos="fade-in"
                  className="text-center p-6 bg-card rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-values-icon-bg rounded-full flex items-center justify-center shadow-lg">
                    <Image
                      src={value.icon} 
                      alt={value.title}
                      width={100} 
                      height={100}
                      className="text-values-icon-fg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            disabled={values.length <= itemsPerPage}
            className="absolute lg:-left-10 -inset-4 top-1/2 -translate-y-1/2 z-10 rounded-full border-primary/20 hover:border-primary hover:bg-[var(--primary)] backdrop-blur-sm"
          >
            <ChevronLeft size={20} className="text-primary" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            disabled={values.length <= itemsPerPage}
            className="absolute lg:-right-10 -right-4 top-1/2 -translate-y-1/2 z-10 rounded-full border-primary/20 hover:border-primary hover:bg-[var(--primary)] backdrop-blur-sm"
          >
            <ChevronRight size={20} className="text-primary" />
          </Button>

          {/* Indicateurs */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-primary/30 hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;