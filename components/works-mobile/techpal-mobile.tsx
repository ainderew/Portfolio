import {motion} from 'framer-motion';
import Image from 'next/image';

import github from '../../public/assets/github_white.svg';
// import web from '../../public/assets/web.svg';
import tp from '../../public/assets/tp.gif';

import { staggerContainer } from '../../framer-animation/variants';



const TechpalMobile: React.FC = () => {
  return (
    <div className="bg-black text-white w-full h-[100vh] grid grid-rows-2 ">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="description-container flex flex-col justify-between ">
        <motion.p
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          className="font-bold text-xl">02</motion.p>
        <div className="flex flex-col justify-center gap-4">
          <motion.p
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            className="font-bold text-3xl">Techpal</motion.p>
          <motion.p
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            className="font-semibold text-lg">Full Stack Developer</motion.p>

          <motion.p
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            className="">
            An ecommerce website built with NextJS for a computer retail store.
            with a custom CRM and multiple payment API integration
          </motion.p>

          <motion.ul
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity:1,
              y:0
            }}
            className="">
            <li className="list-inside list-none">
              <a href="" className="flex items-center gap-4">
                <Image src={github} alt="" width={20} height={20} />
                Github
              </a>
            </li>
          </motion.ul>
        </div>
        <motion.p
          initial={{
            opacity: 0,
            y: 40
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          className="font-bold">NextJS - TypeScript - SQL</motion.p>
      </motion.div>
      <div className="flex justify-center items-center sm:p-8">
        <Image src={tp} alt="" className="" width={500} height={500} style={{ width: '100%', height: 'auto' }} />
      </div>
    </div>
  );
};

export default TechpalMobile;
