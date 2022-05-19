import { useRef, useEffect } from "react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useRefScrollProgress } from "../hooks/scrollObserver";

const AboutMeBanner: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const [refDiv, start, end] = useRefScrollProgress();

  const xPosAnim = useTransform(
    scrollYProgress,
    [start - 0.8, end],
    [-2000, 0]
  );
  const opacityAnim = useTransform(
    scrollYProgress,
    [start - 0.35, end],
    [0, 1]
  );

  useEffect(() => {
    console.log("this is the start: " + start);
  }, [start]);

  return (
    <div
      ref={refDiv}
      className="h-[10vh] xl:h-[20vh] 2xl:h-[30vh] w-full px-7 xl:px-64 m-auto bodrder-2 border-black"
    >
      <div className="w-full h-full flex items-center xl:items-start 2xl:items-center justify-between overflow-hidden bosrder-2 border-red-500">
        <p className="text-sm xl:text-2xl font-semibold">Get To Know Me</p>
        <motion.p
          style={{
            x: xPosAnim,
            opacity: opacityAnim,
          }}
          className="text-4xl xl:text-6xl 2xl:text-8xl font-bold text-[#e9e9e9]"
        >
          ABOUT ME
        </motion.p>
      </div>
    </div>
  );
};

export default AboutMeBanner;
