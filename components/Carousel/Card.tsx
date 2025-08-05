
import React from 'react';
import Image from "next/image";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="flex-shrink-0 w-80 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:scale-105 md:hidden flex">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors duration-300">
          <Image
            src={icon}
            alt="Medlog"
            width={80}
            height={80}
            className="mr-1"
            
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;