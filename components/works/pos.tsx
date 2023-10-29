import Image from "next/image";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRefScrollProgress } from "../../hooks/scrollObserver";

import web from "../../public/assets/web.svg";

const WorksPos: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const [elRef, start, stop] = useRefScrollProgress();
  const yPosAnim = useTransform(
    scrollYProgress,
    [start - 0.1, stop],
    [2000, 0]
  );
  const opacityAnim = useTransform(
    scrollYProgress,
    [start - 0.1, stop],
    [-2, 1]
  );

  return (
    <motion.div
      ref={elRef}
      className='w-full bordser-8 border-lime-300 h-screen overflow-y-hidden grid grid-cols-2 absolute top-0'
    >
      <motion.div
        style={{
          // y: yPosAnimDown,
          opacity: opacityAnim,
        }}
        transition={{
          ease: "easeIn",
        }}
        className='left bg-black
				 flex items-center px-32  relative'
      >
        <p className='text-4xl font-bold absolute top-10 left-10'>01</p>

        <div className='content-container flex flex-col gap-4 '>
          <h2 className='project-heading text-7xl font-bold mb-10'>
            Bramk
          </h2>
          <p className='role-heading text-3xl font-medium'>
            Full Stack Developer
          </p>
          <p className='project-description text-2xl break-words '>
            Made for MSME. Bramk aims to aid businesses with their customer support by utilizing AI and LLMs
						as well as analytics tracking.
          </p>
          <ul className='mt-10 flex flex-col gap-2'>
            <li className=''>
              <a
                href='https://github.com/ainderew/POSandInventoryManagement'
                target='_blank'
                rel='noopener noreferrer'
                className='flex gap-4 text-xl'
              >
                <Image src={'/assets/github_white.svg'} width={20} height={20} />
                Github
              </a>
            </li>

            <li className=''>
              <a
                href='https://bramk.tech'
                className='flex gap-4 text-xl'
								target="_blank"
              >
                <Image src={web} width={20} height={20} />
                https://bramk.tech
              </a>
            </li>
          </ul>
        </div>

        <p className='text-xl font-semibold absolute bottom-10 left-10'>
          Electron - Typescript - ReactJS - SQLite (local DB) - NodeJS - MySQL
        </p>
      </motion.div>

      <motion.div
        className='right bg-black flex justify-center items-center px-32'
        style={{
          y: yPosAnim,
        }}
      >
        <div className='w-full max-w-[950px] h-1/2 max-h-[531px] relative'>
          {/* <Image src={'/med.mp4'} layout="fill" objectFit="contain" placeholder="blur" blurDataURL="../../public/assets/loading.webp" /> */}
          <video
            autoPlay
            muted
            loop

          >
            <source src='/low.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorksPos;
