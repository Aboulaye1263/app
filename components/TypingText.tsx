import React from "react";

interface TypingTextProps {
  title: string;
  coloredTitle: string
  
}

const TypingText: React.FC<TypingTextProps> = ({ title, coloredTitle  }) => {
  return (
    <div className="w-full">
        <h1 className="animate-typing overflow-hidden whitespace-normal border-r-4 border-r-white border-opacity-0 pt-2 font-medium  absolute top-[47%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-3xl md:text-7xl  mb-4 leading-tight text-white z-10">
            {title}
            <span className="text-[#F3DFA2]">{coloredTitle}</span>
        </h1>
    </div>
  );
};

export default TypingText;