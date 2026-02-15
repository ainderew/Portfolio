import { useState } from "react";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
  AnimatePresence,
  LayoutGroup,
} from "framer-motion";
import { useRefScrollProgress } from "../../../../hooks/scrollObserver";
import { ExperienceDetails } from "./components/experience-details";
import ExperienceList from "./components/experience-list";
import { experiences, jobList } from "./data/experience-data";
import { experienceObject } from "../../../../core/types/base";

const Experience: React.FC = () => {
  const data: experienceObject = experiences;
  const { scrollYProgress } = useViewportScroll();
  const [ref_text, start, stop] = useRefScrollProgress();

  const xTransform = useTransform(
    scrollYProgress,
    [start - 0.5, stop + 0.5],
    [400, -400],
  );

  const xTextAnim = useSpring(xTransform, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [experienceKey, setExperienceKey] = useState<string>("expertise");

  const handleExperienceClick = (key: string) => {
    setExperienceKey(key);
  };

  return (
    <section className="relative w-full min-h-screen py-20 flex flex-col items-center">
      <motion.div
        style={{ x: xTextAnim }}
        className="absolute top-20 left-0 whitespace-nowrap pointer-events-none opacity-[0.03] select-none"
      >
        <h2 className="text-[20vw] font-black uppercase leading-none">
          Experience Experience Experience
        </h2>
      </motion.div>

      <div className="w-[90%] xl:w-[70%] max-w-[1344px] z-10">
        <div
          ref={ref_text}
          className="mb-20 flex flex-col xl:flex-row justify-between items-start xl:items-end gap-4"
        >
          <div className="space-y-2">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-sm xl:text-lg font-bold text-accent uppercase tracking-[0.3em]"
            >
              Career Path
            </motion.p>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl xl:text-7xl font-bold"
            >
              Work History.
            </motion.h3>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-8 xl:gap-16">
          <LayoutGroup>
            <div className="flex flex-row xl:flex-col overflow-x-auto xl:overflow-visible border-b xl:border-b-0 border-white/5">
              {jobList.map((el) => (
                <ExperienceList
                  key={el.experienceKey}
                  label={el.name}
                  experienceKey={el.experienceKey}
                  active={experienceKey === el.experienceKey}
                  clickHandler={handleExperienceClick}
                  logo={el.logo}
                />
              ))}
            </div>
          </LayoutGroup>

          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 xl:p-12 min-h-[500px]">
            <AnimatePresence mode="wait">
              <ExperienceDetails
                key={experienceKey}
                data={data[experienceKey]}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
