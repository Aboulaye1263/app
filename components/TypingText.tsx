import React from "react";

interface TypingTextProps {
  title: string;
  
}

const TypingText: React.FC<TypingTextProps> = ({ title }) => {
  return (
    <div className="w-full">
        <h1 className="text-focus-in overflow-hidden whitespace-normal border-r-4 border-r-white border-opacity-0 pr-5 pt-2 font-medium  absolute top-1/3 md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-5xl md:text-7xl  mb-4 leading-tight text-white z-10">
            {title}
           
        </h1>
    </div>
  );
};

export default TypingText;