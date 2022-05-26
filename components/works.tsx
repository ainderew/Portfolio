import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useRefScrollProgress } from "../hooks/scrollObserver";
import WorksPos from "./works/pos";
import WorksTechpal from "./works/techpal";


interface props{
  pageRef:any
}

const Works: React.FC<props> = ({pageRef}:props) => {
  const { scrollYProgress } = useViewportScroll();
  const [ref_text, start, stop] = useRefScrollProgress();

  const [ref_1, start_1, stop_1] = useRefScrollProgress();
  const [ref_2, start_2, stop_2] = useRefScrollProgress();

  const xTextAnim = useTransform(scrollYProgress, [start-0.8, stop], [-2000, 0]);
  const opacityAnim = useTransform(scrollYProgress, [start-0.1, stop], [0, 1]);

  return (
    <div ref={pageRef}  className="w-full h-[270vh] min-h-screen bg-white relative hidden xl:flex flex-col items-center custom-work-shadow">
      <div
        ref={ref_text}
        className="h-[30vh] w-[70%] max-w-[1344px] flex justify-between items-end bordder-2 border-black"
      >
        <p className="text-lg xl:text-3xl font-semibold text-accent">My Recent Projects</p>
        <motion.p
          style={{
            x: xTextAnim,
            opacity: opacityAnim,
          }}
          className="text-4xl xl:text-6xl 2xl:text-8xl font-bold text-[#b9b9b9]"
        >
          MY WORKS
        </motion.p>
      </div>

      <div className=" w-full max-w-[1920px] h-[100vh] sticky top-0 ">
        <WorksPos />
        <WorksTechpal start={start_2} stop={stop_2} />
      </div>

      <div
        ref={ref_1}
        className="ref-div-1 h-[50vh] border-2 border-white sticky top-0 -z-10"
      ></div>
      <div
        ref={ref_2}
        className="ref-div-1 h-[50vh] border-2 border-red-500 sticky top-0 -z-10"
      ></div>
      <div className="SPACER h-[50vh] w-full "></div>
    </div>
  );
};

export default Works;
