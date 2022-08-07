import { RefObject, useEffect } from 'react';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useRefScrollProgress } from '../hooks/scrollObserver';

interface props{
  aboutRef: RefObject<HTMLDivElement>
}

const AboutMeBanner: React.FC<props> = ({aboutRef}:props) => {
	const { scrollYProgress } = useViewportScroll();
	const [refDiv, start, end] = useRefScrollProgress();

	const xPosAnim = useTransform(
		scrollYProgress,
		[start - 0.8, end],
		[-2000, 0]
	);
	const opacityAnim = useTransform(
		scrollYProgress,
		[start - 0.1, end],
		[0, 1]
	);

	useEffect(() => {
		console.log('this is the start: ' + start);
	}, [start]);

	return (
		<div ref={refDiv} className="w-full h-full bsorder-2 bordder-green-300">
			<div
				ref={aboutRef}
				className="h-[10vh] xl:h-[20vh] 2xl:h-[30vh] w-[90%] xl:w-[70%] max-w-[1344px] mx-auto bordder-2 border-black"
			>
				<div className="w-full h-full flex items-center xl:items-start 2xl:items-center justify-between overflow-hidden bosrder-2 border-red-500">
					<p className="text-lg xl:text-3xl font-semibold text-accent">Get To Know Me</p>
					<motion.p
						style={{
							x: xPosAnim,
							opacity: opacityAnim,
						}}
						className="text-4xl xl:text-6xl 2xl:text-8xl font-bold text-[#b9b9b9]"
					>
            ABOUT ME
					</motion.p>
				</div>
			</div>
		</div>
	);
};

export default AboutMeBanner;
