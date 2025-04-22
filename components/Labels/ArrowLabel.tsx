interface ServiceLabelProps {
    text: string;
  }
  
  export default function ServiceLabel({ text }: ServiceLabelProps) {
    return (
      <div className="relative">
        <div className="flex items-center">
          {/* Main label */}
          <div className="bg-[#F3DFA2] h-[36px] px-4 flex items-center">
            <span className="font-bold text-black uppercase">{text}</span>
          </div>
          
          {/* Arrow part */}
          <div className="h-[36px] w-[36px] relative">
            <div className="absolute top-0 left-0 h-0 w-0 
                           border-t-[18px] border-b-[18px] 
                           border-l-[18px] border-r-[18px]
                           border-l-[#F3DFA2]
                           border-r-transparent
                           border-t-[#F3DFA2]
                           border-b-[#F3DFA2]" />
          </div>
        </div>
      </div>
    );
  }