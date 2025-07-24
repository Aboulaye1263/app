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
    className="bg-white rounded-2xl w-full max-w-6xl max-h-[95vh] overflow-hidden shadow-2xl transform transition-all duration-300 scale-100"
    onClick={(e) => e.stopPropagation()}
  >
    <div className="relative">
      <Button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
        size="sm"
        color="dark"
      >
        ✕
      </Button>

      <div className="flex flex-col md:flex-row h-full">
        {/* Image */}
        <div className="w-full md:w-2/3 h-64 md:h-auto">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Description */}
        <div className="w-full md:w-1/3 p-6 md:p-8 overflow-y-auto h-[calc(100%-3rem)] max-h-[60vh] md:max-h-[70vh] scroll-smooth
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-[var(--primary)]
        ">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            {member.name}
          </h2>
          <h3 className="text-lg md:text-xl text-gray-600 font-semibold mb-4">
            {member.position}
          </h3>

          <div className="mb-6">
            <span className="inline-flex items-center px-3 py-1 bg-[var(--primary)] text-gray-800 text-sm font-medium rounded-full">
              Depuis {member.experience} 
            </span>
          </div>

          {member.description.map((item, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4 text-sm md:text-xs text-justify">
              {item}<br/>
            </p>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default TeamModal;