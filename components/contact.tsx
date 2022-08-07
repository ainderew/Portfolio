import { RefObject } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../framer-animation/variants';

interface props {
  contactRef: RefObject<HTMLDivElement>;
}

const Contact: React.FC<props> = ({ contactRef }: props) => {
	const openMail = () => {
		window.open('mailto:andrewapinon@gmail.com?subject=Inquiry');
	};
	return (
		<motion.div
			ref={contactRef}
			variants={staggerContainer}
			className="w-full h-screen bg-white"
		>
			<div className="w-[90%] h-full flex flex-col gap-4 justify-center items-center mx-auto">
				<motion.p
					initial={{
						opacity: 0,
						y: 40,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: {
							delay: 0.3,
						},
					}}
					className="text-accent text-2xl"
				>
          Get in touch
				</motion.p>
				<motion.p
					initial={{
						opacity: 0,
						y: 40,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: {
							delay: 0.3,
						},
					}}
					className="text-5xl font-semibold"
				>
          Let&apos;s Talk It Out
				</motion.p>
				<motion.p
					initial={{
						opacity: 0,
						y: 40,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: {
							delay: 0.3,
						},
					}}
					className="break-words xl:w-[30%] text-center"
				>
          I&apos;m very eager to hear and work with you so we can execute on your
          ideas. My email is open for those looking to implement technology
          driven strategies and ideas into reality.
				</motion.p>

				<motion.button
					initial={{
						opacity: 0,
						y: 40,
					}}
					whileInView={{
						opacity: 1,
						y: 0,
						transition: {
							delay: 0.3,
						},
					}}
					onClick={openMail}
					className="border-2 border-accent text-accent font-medium px-7 py-3 mt-8"
				>
          Say Hello
				</motion.button>
			</div>
		</motion.div>
	);
};

export default Contact;
