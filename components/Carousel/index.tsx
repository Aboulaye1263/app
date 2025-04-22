'use client';
import { useState, useEffect } from 'react';

interface CarouselItem {
  title: string;
  content: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

export default function Carousel({ items }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isAnimating) {
        goToNext();
      }
    }, 5000);
    return () => clearInterval(timer);
  }, []); // Remove isAnimating dependency

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-16">
      {/* Navigation Arrows */}
      <button 
        onClick={goToPrevious}
        className="absolute left-0 md:-left-10 top-1/2 -translate-y-1/2 z-10 bg-white/50 md:bg-transparent rounded-r-lg md:rounded-none hover:scale-125 transition-transform duration-300"
        aria-label="Previous slide"
      >
        <div className="relative w-8 md:w-12 h-12 md:h-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="24" height="24" className="md:w-[54px] md:h-[54px]" viewBox="0 0 24 24" fill="#F3DFA2">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </div>
        </div>
      </button>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
        <div className={`space-y-4 md:space-y-6 transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{items[currentIndex].title}</h2>
          <p className="text-gray-700 text-sm md:text-base">
            {items[currentIndex].content}
          </p>
        </div>
        <div className={`bg-gray-100 rounded-lg h-[200px] md:h-[300px] transition-transform duration-500 ${isAnimating ? 'scale-95' : 'scale-100'}`}></div>
      </div>

      {/* Next Arrow */}
      <button 
        onClick={goToNext}
        className="absolute right-0 md:-right-10 top-1/2 -translate-y-1/2 z-10 bg-white/50 md:bg-transparent rounded-l-lg md:rounded-none hover:scale-125 transition-transform duration-300"
        aria-label="Next slide"
      >
        <div className="relative w-8 md:w-12 h-12 md:h-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="24" height="24" className="md:w-[54px] md:h-[54px]" viewBox="0 0 24 24" fill="#F3DFA2">
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"/>
            </svg>
          </div>
        </div>
      </button>
    </div>
  );
}