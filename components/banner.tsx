// import Image from 'next/image';
// import me from '../assets/me.png';

import { motion } from 'framer-motion';
import { fadeIn } from '../framer-animation/variants';

interface props{
  scrollFunction: () => void
}

const Banner: React.FC<props> = ({scrollFunction}:props) => {
	return (
		<div className="w-[90%] xl:w-[70%] max-w-[1344px] h-auto mx-auto">
			{/* <div className="w-full h-screen relative flex flex-col gap-2 justify-center px-7 xl:px-64  bg-[#[#EFEFEF]"> */}
			<div className="w-full h-screen relative mx-auto flex flex-col gap-2 justify-center bg-[#[#EFEFEF]">
				<motion.p variants={fadeIn('up')} className="text-lg text-accent">
          Hi, my name is
				</motion.p>
				<motion.h1 variants={fadeIn('up')} className="text-3xl xl:text-5xl font-semibold">
          Andrew Pinon
				</motion.h1>
				<motion.h2
					variants={fadeIn('up')}
					className="text-3xl xl:text-5xl font-semibold text-accent"
				>
          I&apos;m a full-stack web developer.
				</motion.h2>

				<motion.p
					variants={fadeIn('up')}
					className="text text-sm xl:text-base 2xl:break-words 2xl:w-[40%] text-justify mt-7"
				>
          I&apos;m a Philippine based software engineer that has knack for
          creating and building digital solutions to problems on the web.
          Currently I currenty work at Theoria Medical but I&apos;m still open to 
					projects. Let&apos;s create your own digital experience!
				</motion.p>

				<motion.button
					variants={fadeIn('up')}
					className="h-[3rem] w-[10rem] text-base border-accent text-accent border-2 mt-7"
					onClick={scrollFunction}
				>
          My work
				</motion.button>
			</div>
		</div>
	);
};

export default Banner;
