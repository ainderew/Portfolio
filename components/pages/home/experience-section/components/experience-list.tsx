type props =  {
  label: string;
  experienceKey: string;
	active: boolean;
  clickHandler: (experienceKey: string)=>void;
  logo?: string;
}


const ExperienceList: React.FC<props> = ({ label, experienceKey, active, clickHandler, logo }: props) => {

  return  (
    <li
      onClick={() => clickHandler(experienceKey)}
      className={`p-4 min-w-[150px] max-w-[500px] border-b-4 border-l-0 xl:border-b-0 xl:border-l-4 border-gray-300 flex items-center gap-3 ${active ? 'bg-accent text-white' : 'bg-[#333333]'}`}>
      {logo && (
        <div className="bg-white/90 rounded px-1.5 py-1 flex-shrink-0">
          <img
            src={logo}
            alt={`${label} logo`}
            className="h-4 w-4 object-contain"
          />
        </div>
      )}
      <span className="whitespace-nowrap">{label}</span>
    </li>
  );
};

export default ExperienceList;
