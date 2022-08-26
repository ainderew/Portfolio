import {useState} from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useRefScrollProgress } from '../../hooks/scrollObserver';
import { ExperienceDetails } from './components/experience-details';
import ExperienceList from './components/experience-list';

import { experiences, jobList} from './data/experience-data';


const Experience: React.FC = () => {


	const data: {
    [key:string ]: {
      position: string,
      duration: string,
      employer: string,
			link:string,
      responsibilities: string[],
      techstack: string[]
    }
  } = experiences;



	const { scrollYProgress } = useViewportScroll();
	const [ref_text, start, stop] = useRefScrollProgress();

	const xTextAnim = useTransform(
		scrollYProgress,
		[start - 0.8, stop],
		[-800, 0]
	);
	const opacityAnim = useTransform(
		scrollYProgress,
		[start - 0.1, stop],
		[0, 1]
	);

	const [experienceKey, setExperienceKey] = useState<string>('theoria');
  
	const handleExperienceClick = (key: string) =>{
		setExperienceKey(key);
	};

	return (
		<div className="experience-container w-full h-screen flex flex-col items-center">
			<div className="w-[90%] xl:w-[70%] max-w-[1344px]">
				<div
					ref={ref_text}
					className="h-[20vh] xl:h-[30vh] w-[100%] flex justify-between items-center relative"
				>
					<p className="text-base xl:text-3xl font-semibold text-accent">Industry Experience</p>
					<motion.p
						style={{
							x: xTextAnim,
							opacity: opacityAnim,
						}}
						className="text-2xl xl:text-6xl 2xl:text-8xl font-bold text-[#b9b9b9]"
					>
            MY EXPERIENCE
					</motion.p>
				</div>
			</div>

			<div className="job-table w-full xl:w-[70%] max-w-[1344px] h-full grid grid-cols-1  xl:grid-cols-[1fr_2fr] mx-0 grid-rows-[10vh_1fr] xl:grid-rows-1 justify-items-center">
				<div className="left-col xl:p-14 xl:w-full w-[100vw] overflow-auto">
					<ul className="flex xl:flex-col">
						{jobList.map((el) => {
							return (
								<div className="list-container relative" key={el.experienceKey} >
									<ExperienceList  label={el.name} experienceKey={el.experienceKey} active={experienceKey === el.experienceKey ? true: false} clickHandler={handleExperienceClick} />	
									{(experienceKey === el.experienceKey) ? <motion.div className="line z-10 absolute bottom-[-1px] right-0 left-0 w-full xl:w-1 h-1 xl:h-full bg-accent" layoutId="line" /> : null}
								</div>
							);
						})}
					</ul>
					
				</div>
				<div className="right-col w-[85%] xl:w-full xl:p-14">
					<ExperienceDetails
						data ={data[experienceKey]}
					/>
				</div>
			</div>
		</div>
	);
};

export default Experience;
