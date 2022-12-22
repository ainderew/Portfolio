// import Image from 'next/image';
// import me from '../assets/me.png';

import { motion } from 'framer-motion';
import { fadeIn } from '../framer-animation/variants';

interface props {
	scrollFunction: () => void;
}

const Banner: React.FC<props> = ({ scrollFunction }: props) => {
	const onHover = (e: any): void => {
		e.target.classList.add('bounce');

		setTimeout(() => {
			e.target.classList.remove('bounce');
		}, 500);
	};
	return (
		<div className='w-[90%] xl:w-[70%] max-w-[1344px] h-auto mx-auto'>
			<div className='w-full h-screen relative py-[10vh] mx-auto flex flex-col gap-2 items-center justify-center xl:items-start xl:justify-center xl:py-0 '>
				<motion.p variants={fadeIn('up')} className='text-lg text-accent'>
					Hi, my name is
				</motion.p>
				<motion.h1 variants={fadeIn('up')} className='text-3xl xl:text-7xl font-semibold'>
					Andrew Pinon
				</motion.h1>
				<motion.h2
					variants={fadeIn('up')}
					className='text-3xl xl:text-7xl 2xl:text-8xl text-center xl:text-left font-semibold gradient-text 2xl:w-[60%]'
				>
					<span onMouseEnter={onHover}>I</span>
					<span onMouseEnter={onHover}>&apos;</span>
					<span onMouseEnter={onHover}>m</span>{' '}
					<span onMouseEnter={onHover}>a</span> full-stack web developer.
				</motion.h2>

				<motion.p
					variants={fadeIn('up')}
					className='text text-sm xl:text-base 2xl:break-words xl:w-[70%] 2xl:w-[60%] text-justify mt-5'
				>
					I&apos;m a Philippine based software engineer that has knack for creating and building
					digital solutions to problems on the web. Currently I currenty work at Theoria Medical but
					I&apos;m still open to projects. Let&apos;s create your own digital experience!
				</motion.p>

				<motion.button
					variants={fadeIn('up')}
					className='h-[3rem] w-[15rem] text-base border-accent text-accent border-2 mt-7 btn-hover hover:text-white hover:border-transparent'
					onClick={scrollFunction}
				>
					My work
				</motion.button>
			</div>
		</div>
	);
};

export default Banner;
