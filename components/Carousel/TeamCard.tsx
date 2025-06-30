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
        <button className="w-full flex gap-6 justify-items-center items-center text-[var(--primary)] hover:text-gray-900" onClick={onClick}>
       
          Lire la suite 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z" clipRule="evenodd" />
          </svg>

        </button>
        
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