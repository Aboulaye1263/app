"use client";
import { useState, useEffect } from "react";

interface CarouselProps {
  items: React.ReactNode[];
  fetchSlideCount?: boolean;
}

export default function CarouselImages({
  items,
  fetchSlideCount = false,
}: CarouselProps) {
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
    }, 7000);
    return () => clearInterval(timer);
  }, []); // Remove isAnimating dependency

  return (
    <div className="relative w-full h-full">
      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-0 md:left-5 top-1/2 -translate-y-1/2 z-10 bg-transparent rounded-r-lg md:rounded-none hover:scale-125 transition-transform duration-300"
        aria-label="Previous slide"
      >
        <div className="relative w-8 md:w-12 h-8 md:h-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              className="md:w-[54px] md:h-[54px]"
              viewBox="0 0 24 24"
              fill="#F3DFA2"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </div>
        </div>
      </button>

      {/* Content */}
      <div className="relative overflow-hidden w-full h-full">
        <div
          className={`flex transition-transform duration-1000 ease-in-out h-full`}
          style={{
            width: `${items.length * 100}%`,
            transform: `translateX(-${currentIndex * (100 / items.length)}%)` 
          }}
        >
          {items.map((item, index) => (
            <div 
              key={index} 
              className="relative w-full h-full flex-shrink-0"
              style={{
                width: `${100 / items.length}%`
              }}
            >
              <div className="absolute inset-0">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}

      {/* Next Arrow */}
      <button
        onClick={goToNext}
        className="absolute right-0 md:right-5 top-1/2 -translate-y-1/2 z-10 bg-transparent rounded-l-lg md:rounded-none hover:scale-125 transition-transform duration-300"
        aria-label="Next slide"
      >
        <div className="relative w-8 md:w-12 h-8 md:h-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              className="md:w-[54px] md:h-[54px]"
              viewBox="0 0 24 24"
              fill="#F3DFA2"
            >
              <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
            </svg>
          </div>
        </div>
      </button>

      {/* Dots Navigation */}
      {fetchSlideCount ? (
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10"
          
        >
          {[0, 1, 2].map((index) => (
            <span 
              key={index}
              className={`w-3 h-3 ${currentIndex === index ? 'bg-white' : 'border-2 border-[var(--primary)]'} rounded-full hover:scale-150 transition-transform`}
            ></span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
