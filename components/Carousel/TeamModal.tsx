import { TeamMember } from "@/constants/teamData";
import { Button } from "flowbite-react";

interface TeamModalProps {
  member: TeamMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const TeamModal = ({ member, isOpen, onClose }: TeamModalProps) => {
  if (!isOpen || !member) return null;

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div 
        className="bg-white rounded-2xl max-w-6xl w-full h-[70vh] overflow-hidden shadow-2xl transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <Button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            size="sm"
            color="gray"
          >
            ✕
          </Button>
          
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="md:w-1/3 p-8 h-full md:h-[70vh] px-8 py-16 overflow-y-hidden md:overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-[var(--primary)] scroll-smooth [&>*]:opacity-100 [&>*]:translate-y-0">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {member.name}
              </h2>
              <h3 className="text-xl text-gray-600 font-semibold mb-4">
                {member.position}
              </h3>
              
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-[var(--primary)] text-gray-800 text-sm font-medium rounded-full">
                  Depuis {member.experience} 
                </span>
              </div>
              {member.description.map((item, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-6 text-xs text-justify">
                {item}<br/>
              </p>
              ))}
              
              
              {/* <div>
                <h4 className="font-semibold text-gray-900 mb-3">Compétences</h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-lg hover:bg-blue-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamModal;