import { useState } from "react";
import { teamMembers, TeamMember } from "@/constants/teamData";
import TeamCard from "./TeamCard";
import TeamModal from "./TeamModal";

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (member: TeamMember) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedMember(null), 300);
  };

  return (
    <section className="py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <TeamCard 
              key={member.id}
              member={member}
              onClick={() => handleCardClick(member)}
            />
          ))}
        </div>
      </div>
      
      <TeamModal 
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default TeamSection;