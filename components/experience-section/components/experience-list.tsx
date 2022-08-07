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
			className={`p-4 cursor-pointer ${active && 'bg-blue-50 text-accent'}`}>
			<span className="">{label}</span>
		</li>
	);
	// ) : (
	// 	<li
	// 		onClick={() => clickHandler(experienceKey)}
	// 		className="p-4 border-l-2 border-black hover:border-accent transition ease-out .3s group cursor-pointer">
	// 		<span className="group-hover:text-accent">{label}</span>
	// 	</li>
	// );
};

export default ExperienceList;
