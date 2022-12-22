import Image from 'next/image';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import { useRefScrollProgress } from '../../hooks/scrollObserver';

import projectImg from '../../public/assets/pos_pic.png';
// import loading from '../../public/assets/loading.webp';

import github from '../../public/assets/github_black.svg';
import web from '../../public/assets/web.svg';

// interface props {
//   //   pRef: MutableRefObject<HTMLDivElement>;
//   start: number;
//   stop: number;
// }

const WorksPos: React.FC = () => {
	const { scrollYProgress } = useViewportScroll();
	const [elRef, start, stop] = useRefScrollProgress();
	const yPosAnim = useTransform(scrollYProgress, [start-0.1, stop], [2000, 0]);
	// const yPosAnimDown = useTransform(scrollYProgress, [start, stop], [-2500, 0]);
	const opacityAnim = useTransform(scrollYProgress, [start-0.1, stop], [-2, 1]);
	// const zindexer = useTransform(scrollYProgress, [start, stop], [1, 0]);

	return (
		<motion.div
			ref={elRef}
			className="w-full bordser-8 border-lime-300 h-screen overflow-y-hidden grid grid-cols-2 absolute top-0"
		>
			<motion.div
				style={{
					// y: yPosAnimDown,
					opacity: opacityAnim
         
				}}
				transition={{
					ease: 'easeIn'
				}}
				className="left bg-black
				 flex items-center px-32  relative"
			>
				<p className="text-4xl font-bold absolute top-10 left-10">01</p>

				<div className="content-container flex flex-col gap-4 ">
					<h2 className="project-heading text-7xl font-bold mb-10">
            POS and Inventory
					</h2>
					<p className="role-heading text-3xl font-medium">
            Full Stack Developer
					</p>
					<p className="project-description text-2xl break-words ">
            An electron desktop app that serves as a POS. Tracks store metrics
            and provides data driven insight on your store.
					</p>
					<ul className="mt-10 flex flex-col gap-2">
						<li className="">
							<a
								href="https://github.com/ainderew/POSandInventoryManagement"
								target="_blank"
								rel="noopener noreferrer"
								className="flex gap-4 text-xl"
							>
								<Image src={github} width={20} height={20} />
                Github
							</a>
						</li>

						<li className="">
							<a
								href="https://github.com/ainderew/POSandInventoryManagement"
								className="flex gap-4 text-xl"
							>
								<Image src={web} width={20} height={20} />
                https://www.Techpal.store
							</a>
						</li>
					</ul>
				</div>

				<p className="text-xl font-semibold absolute bottom-10 left-10">
          Electron - Typescript - ReactJS - SQLite  (local DB) - NodeJS - MySQL
				</p>
			</motion.div>

			<motion.div
				className="right bg-black flex justify-center items-center px-32"
				style={{
					y: yPosAnim,
				}}
			>
				<div className="w-full max-w-[950px] h-1/2 max-h-[531px] relative">
					<Image src={projectImg} layout="fill" objectFit="contain" placeholder="blur" blurDataURL="../../public/assets/loading.webp" />
				</div>
			</motion.div>
		</motion.div>
	);
};

export default WorksPos;
