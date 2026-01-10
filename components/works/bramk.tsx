import { motion, useTransform, MotionValue } from 'framer-motion';
import Magnetic from '../magnetic';

type props = {
  progress: MotionValue<number>;
  range: number[];
};

const Bramk: React.FC<props> = ({ progress, range }) => {
  const opacity = useTransform(
    progress, 
    [range[0] - 0.05, range[0], range[1], range[1] + 0.05], 
    [0, 1, 1, 0]
  );
  
  const y = useTransform(progress, [range[0] - 0.05, range[0]], [100, 0]);
  const scale = useTransform(progress, [range[0], range[1]], [1, 0.9]);

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
      }}
      className="w-full h-full bg-[#0a0a0a] grid grid-cols-1 xl:grid-cols-2 absolute top-0 left-0 overflow-hidden border-t border-white/5 z-[2]"
    >
      <div className="left flex flex-col justify-center px-10 xl:px-32 relative order-2 xl:order-1">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-accent font-bold text-xl mb-4"
        >
          02.
        </motion.span>
        
        <div className="overflow-hidden">
          <motion.h2 
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="text-6xl xl:text-9xl font-black mb-6 tracking-tighter"
          >
            Bramk
          </motion.h2>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl xl:text-2xl text-white/60 mb-8 max-w-lg leading-relaxed"
        >
          An AI-powered customer support ecosystem for MSMEs.
        </motion.p>

        <div className="flex gap-6 items-center">
          <Magnetic>
            <a
              href="https://github.com/ainderew/POSandInventoryManagement"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase text-xs tracking-widest"
            >
              Github Repo
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="https://bramk.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-bold uppercase text-xs tracking-widest hover:underline"
            >
              Visit Platform
            </a>
          </Magnetic>
        </div>
      </div>

      <div className="right relative flex items-center justify-center bg-[#111] order-1 xl:order-2">
        <div className="w-[85%] aspect-video relative rounded-xl overflow-hidden border border-white/10 shadow-2xl">
          <video 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover"
          >
            <source src="/low.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </motion.div>
  );
};

export default Bramk;
