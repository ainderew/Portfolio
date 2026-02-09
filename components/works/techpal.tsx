import Image from 'next/image';
import { motion, useTransform, MotionValue } from 'framer-motion';
import projectImg from '../../public/assets/techpal.webp';
import Magnetic from '../magnetic';

type props = {
  progress: MotionValue<number>;
  range: number[];
};

const WorksTechpal: React.FC<props> = ({ progress, range }) => {
  const opacity = useTransform(progress, [range[0] - 0.05, range[0]], [0, 1]);
  const y = useTransform(progress, [range[0] - 0.05, range[0]], [100, 0]);

  return (
    <motion.div
      style={{
        opacity,
        y,
      }}
      className="w-full h-full bg-[#0a0a0a] grid grid-cols-1 xl:grid-cols-2 absolute top-0 left-0 overflow-hidden border-t border-white/5 z-[3]"
    >
      <div className="left flex flex-col justify-center px-10 xl:px-32 relative">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-accent font-bold text-xl mb-4"
        >
          03.
        </motion.span>
        
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-6xl xl:text-9xl font-black mb-6 tracking-tighter"
          >
            Techpal
          </motion.h2>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl xl:text-2xl text-white/60 mb-8 max-w-lg leading-relaxed"
        >
          A high-performance e-commerce engine for computer retail.
        </motion.p>

        <div className="flex gap-6 items-center">
          <Magnetic>
            <a
              href="https://github.com/ainderew/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase text-xs tracking-widest"
            >
              Github
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://www.Techpal.store"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-bold uppercase text-xs tracking-widest hover:underline"
            >
              View Site
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="right relative flex items-center justify-center bg-[#111]">
        <div className="w-[80%] h-[60%] relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src={projectImg}
            fill
            style={{ objectFit: 'cover' }}
            alt="Techpal Preview"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default WorksTechpal;
