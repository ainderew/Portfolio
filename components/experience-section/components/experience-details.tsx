
import {AnimatePresence, motion} from 'framer-motion';
import { works } from '../../../framer-animation/variants';

type props = {
  data: {
    position: string,
    duration: string,
    employer: string,
		link: string,
    responsibilities: string[],
    techstack: string[]
  };
}

export const ExperienceDetails = ({data}: props) => {
	const { position, duration, employer, link, responsibilities, techstack} = data;

	return (
		<div className="overflow-div overflow-hidden">
			<AnimatePresence initial={false}>
				<motion.div
					key={duration}
					variants={works}
					initial="initial"
					animate="animate"
					exit="exit"
					transition={{
						// ease: 'easeInOut',
						bounce: 0,
						duration: 0,
						
						
					}}
					className="test h-full w-full xl:w-full py-4 xl:px-8 flex flex-col"
				>
					<h2
						className="position-header text-sm xl:text-lg font-semibold">
						<span
							className="position font-semibold">{position}</span>
						<span
							className="duration text-accent font-bold">
							<a href={link} target="_blalnk" className="" rel="noreferrer">
								{' '}@{employer}
							</a>
						</span> 
					</h2>
					<p className="duration-header text-xs xl:text-sm text-gray-500"><span
						className="duration font-semibold">{duration}</span>
					</p>
					{/* <p className="duration-header my-5">Employer:{' '}
						<span
							className="duration text-accent font-bold">
							<a href="https://www.theoriamedical.com" className="">
								{employer}
							</a>
						</span> */}
					{/* </p> */}

					<span className="text-sm xl:text-lg my-5 text-accesnt">Responsibilites and Achievements</span>
					<ul className="flex flex-col gap-2 list-outside ml-4">
						{responsibilities.map((el, index) => {
							return(<li key={index} className="text-xs xl:text-sm list-item list-disc text-justify">
								{el}
							</li>);
						})}
					</ul>

					<span className="text-sm xl:text-lg my-5 text-accents">Techstack used</span>
					<ul className="flex flex-wrap gap-2 xl:gap-6 list-inside">
						{techstack.map((el) =>{
							return(
								<li key={el} className="text-xs xl:text-sm ">{el}</li>
							);
						})}
					</ul>
				</motion.div>
			</AnimatePresence>
		</div>
	);
};


