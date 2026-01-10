import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, wordReveal } from '../framer-animation/variants';
import Magnetic from './magnetic';

interface Props {
  scrollFunction: () => void;
}

const Banner: React.FC<Props> = ({ scrollFunction }) => {
  const name = 'Andrew Pinon';
  
  return (
    <div className="w-[90%] xl:w-[70%] max-w-[1344px] h-auto mx-auto overflow-hidden">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="w-full h-screen relative py-[10vh] mx-auto flex flex-col gap-4 items-center justify-center xl:items-start xl:justify-center xl:py-0"
      >
        <motion.p variants={fadeIn('up')} className="text-lg xl:text-xl text-accent font-medium tracking-widest uppercase">
          Hi, my name is
        </motion.p>
        
        <div className="overflow-hidden py-2">
          <motion.h1
            className="text-5xl xl:text-9xl font-bold leading-none flex flex-wrap"
          >
            {name.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={wordReveal}
                className="inline-block"
                style={{ marginRight: char === ' ' ? '0.3em' : '0' }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <motion.h2
          variants={fadeIn('up')}
          className="text-3xl xl:text-7xl font-semibold text-white/50 xl:w-[80%]"
        >
          I build high-end digital experiences.
        </motion.h2>

        <motion.p
          variants={fadeIn('up')}
          className="text-sm xl:text-lg xl:w-[60%] text-white/70 mt-4 leading-relaxed"
        >
          I&apos;m a Philippine-based software engineer specializing in 
          building (and occasionally designing) exceptional digital products 
          that are fast, accessible, and visually stunning.
        </motion.p>

        <motion.div variants={fadeIn('up')} className="mt-10">
          <Magnetic>
            <button
              className="group relative px-10 py-4 bg-accent text-white font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105"
              onClick={scrollFunction}
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
