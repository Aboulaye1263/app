import { TeamMember } from "@/constants/teamData";

interface TeamCardProps {
  member: TeamMember;
  onClick: () => void;
}

const TeamCard = ({ member, onClick }: TeamCardProps) => {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
      
    >
      <div className="relative overflow-hidden">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[var(--primary)] transition-colors">
          {member.name}
        </h3>
        <p className="text-gray-600 font-medium mb-3">
          {member.position}
        </p>
        <p className="text-gray-600 text-sm line-clamp-1">
          {member.description}
        </p>
        <button className="items-justify text-[var(--primary)] hover:text-gray-900" onClick={onClick}>
       
          Lire la suite</button>
        
        {/* <div className="mt-4 flex flex-wrap gap-2">
          {member.skills.slice(0, 2).map((skill, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
          {member.skills.length > 2 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{member.skills.length - 2}
            </span>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default TeamCard;