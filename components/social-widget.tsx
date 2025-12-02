import Image from 'next/image';
import {motion} from 'framer-motion';
import { fadeIn, scaleLine } from '../framer-animation/variants';
import { useScrollHider } from '../hooks/scrollHide';


import github from '../public/assets/github.svg';
import twitter from '../public/assets/twitter.svg';
import insta from '../public/assets/insta.svg';
import linkedin from '../public/assets/linkedin.svg';
const SocialWidget:React.FC = () =>{
  const classValue = useScrollHider();

  return(
    <div className={`social-widget-container flex flex-col gap-4 xl:gap-6 justify-between items-center fixed bottom-0 right-14 xl:right-auto left-auto xl:left-14 z-20 ${classValue}`}>
      <a href="https://www.github.com/ainderew" target="_blank" className="" rel="noreferrer">
        <motion.div
          variants={fadeIn('up')}
          className="group w-[1.5rem] h-[2.5rem] xl:w-[2rem] xl:h-[2rem] relative overflow-visible">
          <Image
            src={github}
            layout="fill"
            objectFit="contain"
            alt="github logo"
            className="group-hover:scale-[0.9] group-hover:translate-y-1 transition ease-in-out .3s"
          />
        </motion.div>
      </a>

      <a href="https://www.linkedin.com/in/andrew-pinon-620b4b14a/" target="_blank" className="" rel="noreferrer">
        <motion.div
          variants={fadeIn('up')}
          className="group w-[1.5rem] h-[1.5rem] xl:w-[2rem] xl:h-[2rem] relative">
          <Image
            src={linkedin}
            layout="fill"
            objectFit="contain"
            alt="linkedin logo"
            className="group-hover:scale-[.9] group-hover:translate-y-1 transition ease-in-out .3s"
          />
        </motion.div>
      </a>
			
      <a href="https://twitter.com/ainderew" target="_blank" className="" rel="noreferrer">
        <motion.div
          variants={fadeIn('up')}
          className="group w-[1.5rem] h-[1.5rem] xl:w-[2rem] xl:h-[2rem] relative">
          <Image
            src={twitter}
            layout="fill"
            objectFit="contain"
            alt="twitter logo"
            className="group-hover:scale-[.9] group-hover:translate-y-1 transition ease-in-out .3s"
          />
        </motion.div>
      </a>

      <a href="https://instagram.com/ainderew" target="_blank" className="" rel="noreferrer">
        <motion.div
          variants={fadeIn('up')}
          className="group w-[1.5rem] h-[1.5rem] xl:w-[2rem] xl:h-[2rem] relative">
          <Image
            src={insta}
            layout="fill"
            objectFit="contain"
            alt="instagram logo"
            className="group-hover:scale-[.9] group-hover:translate-y-1 transition ease-in-out .3s"
          />
        </motion.div>
      </a>

      <motion.div
        variants={scaleLine}
        className="w-0 h-24 mt-2 border-l-[2px] border-[#0AA1DD]"></motion.div>
    </div>
  );
};

export default SocialWidget;