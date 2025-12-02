import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useRefScrollProgress } from '../hooks/scrollObserver';
import PosMobile from './works-mobile/pos-mobile';
import TechpalMobile from './works-mobile/techpal-mobile';

const WorkMobile: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const [ref_text, start, stop] = useRefScrollProgress();

  const xTextAnim = useTransform(
    scrollYProgress,
    [start - 0.8, stop],
    [-2000, 0]
  );
  const opacityAnim = useTransform(
    scrollYProgress,
    [start - 0.1, stop],
    [0, 1]
  );

  return (
    <div className="w-full min-h-screen px-6 bg-black xl:hidden relative">
      <div
        ref={ref_text}
        className="h-[20vh] w-[100%] max-w-[1344px] flex justify-between items-center bordder-2 border-black"
      >
        <p className="text-base xl:text-3xl font-semibold text-accent">
          My Recent Projects
        </p>
        <motion.p
          style={{
            x: xTextAnim,
            opacity: opacityAnim,
          }}
          className="text-3xl xl:text-6xl 2xl:text-8xl font-bold text-[#b9b9b9]"
        >
          MY WORKS
        </motion.p>
      </div>

      <PosMobile />
      <TechpalMobile />

    </div>
  );
};

export default WorkMobile;
