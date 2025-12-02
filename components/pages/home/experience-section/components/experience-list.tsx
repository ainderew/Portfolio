type props =  {
  label: string;
  experienceKey: string;
	active: boolean;
  clickHandler: (experienceKey: string)=>void;
}


const ExperienceList: React.FC<props> = ({ label, experienceKey, active, clickHandler }: props) => {
  
  return  (
    <li
      onClick={() => clickHandler(experienceKey)}
      className={`p-4 min-w-[150px] max-w-[500px] border-b-4 border-l-0 xl:border-b-0 xl:border-l-4 border-gray-300 flex justify-center ${active ? 'bg-accent text-white' : 'bg-[#333333]'}`}>
      <span className="whitespace-nowrap">{label}</span>
    </li>
  );
};

export default ExperienceList;
