import { RefObject } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRefScrollProgress } from '../hooks/scrollObserver';

interface props {
  aboutRef: RefObject<HTMLDivElement | null>;
}

const AboutMeBanner: React.FC<props> = ({ aboutRef }: props) => {
  const { scrollYProgress } = useScroll();
  const [refDiv, start, end] = useRefScrollProgress();

  const xPos = useTransform(scrollYProgress, [start - 0.5, end], [-600, 0]);
  const textOpacity = useTransform(
    scrollYProgress,
    [start - 0.15, end],
    [0, 0.12],
  );
  const lineScale = useTransform(
    scrollYProgress,
    [start - 0.3, end - 0.1],
    [0, 1],
  );

  return (
    <div ref={refDiv} className="w-full">
      <div
        ref={aboutRef}
        className="h-[12vh] xl:h-[22vh] 2xl:h-[28vh] w-[90%] xl:w-[70%] max-w-[1344px] mx-auto"
      >
        <div className="w-full h-full flex items-end pb-6 xl:pb-10 overflow-hidden">
          <div className="w-full flex items-center gap-4 xl:gap-8">
            <span className="hero-mono text-xs xl:text-sm text-accent tracking-widest shrink-0">
              03
            </span>
            <motion.div
              style={{ scaleX: lineScale, transformOrigin: 'left' }}
              className="flex-1 h-px bg-white/15"
            />
            <motion.span
              style={{ x: xPos, opacity: textOpacity }}
              className="hero-display text-6xl xl:text-8xl 2xl:text-[10rem] font-bold tracking-tighter select-none shrink-0"
            >
              ABOUT
            </motion.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeBanner;
