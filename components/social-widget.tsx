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
      <a href="https://www.github.com/ainderew" target="_blank" className="group" rel="noreferrer" aria-label="GitHub Profile">
        <motion.div
          variants={fadeIn('up')}
          className="w-8 h-8 xl:w-9 xl:h-9 rounded-full border border-white/10 group-hover:border-transparent flex items-center justify-center relative overflow-hidden transition-all duration-300"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #DE682C, #af4261)' }} />
          <div className="relative w-4 h-4 xl:w-[18px] xl:h-[18px]">
            <Image src={github} fill style={{ objectFit: 'contain' }} alt="github logo" />
          </div>
        </motion.div>
      </a>

      <a href="https://www.linkedin.com/in/andrew-pinon-620b4b14a/" target="_blank" className="group" rel="noreferrer" aria-label="LinkedIn Profile">
        <motion.div
          variants={fadeIn('up')}
          className="w-8 h-8 xl:w-9 xl:h-9 rounded-full border border-white/10 group-hover:border-transparent flex items-center justify-center relative overflow-hidden transition-all duration-300"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #DE682C, #af4261)' }} />
          <div className="relative w-4 h-4 xl:w-[18px] xl:h-[18px]">
            <Image src={linkedin} fill style={{ objectFit: 'contain' }} alt="linkedin logo" />
          </div>
        </motion.div>
      </a>

      <a href="https://twitter.com/ainderew" target="_blank" className="group" rel="noreferrer" aria-label="Twitter Profile">
        <motion.div
          variants={fadeIn('up')}
          className="w-8 h-8 xl:w-9 xl:h-9 rounded-full border border-white/10 group-hover:border-transparent flex items-center justify-center relative overflow-hidden transition-all duration-300"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #DE682C, #af4261)' }} />
          <div className="relative w-4 h-4 xl:w-[18px] xl:h-[18px]">
            <Image src={twitter} fill style={{ objectFit: 'contain' }} alt="twitter logo" />
          </div>
        </motion.div>
      </a>

      <a href="https://instagram.com/ainderew" target="_blank" className="group" rel="noreferrer" aria-label="Instagram Profile">
        <motion.div
          variants={fadeIn('up')}
          className="w-8 h-8 xl:w-9 xl:h-9 rounded-full border border-white/10 group-hover:border-transparent flex items-center justify-center relative overflow-hidden transition-all duration-300"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(135deg, #DE682C, #af4261)' }} />
          <div className="relative w-4 h-4 xl:w-[18px] xl:h-[18px]">
            <Image src={insta} fill style={{ objectFit: 'contain' }} alt="instagram logo" />
          </div>
        </motion.div>
      </a>

      <motion.div
        variants={scaleLine}
        className="w-[2px] h-24 mt-2 rounded-full"
        style={{ background: 'linear-gradient(180deg, #DE682C, #af4261)' }}
      />
    </div>
  );
};

export default SocialWidget;