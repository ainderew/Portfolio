import Image from 'next/image';
import me from '../public/assets/me.png';

const AboutMe: React.FC = () => {
	return (
		<div className="w-full h-auto">
			{/* <div className="h-full min-h-[80vh] w-[90%] xl:w-[70%] px-7 xl:px-64 mt-[0vh] grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-20 2xl:gap-40"> */}
			<div className="h-full min-h-[90vh] xl:min-h-[80vh] 2xl:min-h-[70vh] w-[90%] xl:w-[70%] max-w-[1344px] mx-auto mt-[0vh] grid grid-cols-1 xl:grid-cols-2 gap-4 xl:gap-20 2xl:gap-40">
				<div className="flex flex-col gap-4 borsder-2 border-black">
					<p className="text-sm 2xl:text-base text-justify">
            Hi! my name is Andrew most likely I&apos;m the guy that is asked to
            fix the wifi when it goes out. I enjoy creating digital experiences
            that live on the web, where practicality, problem solving and visual
            experience mix to form a perfect storm.
					</p>

					<p className="text-sm 2xl:text-base">
            Here are some techonologies that I have under my belt
					</p>

					<div className="w-full grid grid-cols-2">
						<ul className="list-disc list-inside">
							<li className="">Javascript</li>
							<li className="">TypeScript</li>
							<li className="">React JS</li>
							<li className="">Next JS</li>
							<li className="">CSS/SCSS</li>
							<li className="">Tailwind</li>
						</ul>
						<ul className="list-disc list-inside">
							<li className="">NodeJS</li>
							<li className="">GraphQL</li>
							<li className="">Express</li>
							<li className="">SQL</li>
							<li className="">MongoDB</li>
							<li className="">GIT</li>
							{/* <li className=""></li> */}
						</ul>
					</div>
				</div>
				<div className="h-[50vh] xl:h-full bosrder-2 border-green-300 flex">
					<div className=" xl:h-1/2 2xl:h-2/3 w-full relative">
						<Image
							src={me}
							layout="fill"
							objectFit="cover"
							objectPosition="top"
							alt="Andrew's picture"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
