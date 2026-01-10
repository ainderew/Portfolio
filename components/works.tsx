import React from 'react';
import { motion, useTransform, useViewportScroll, useSpring } from 'framer-motion';
import { projects } from '../core/data/projects';
import ProjectCard from './pages/home/projects/project-card';
import { useRefScrollProgress } from '../hooks/scrollObserver';

const Works: React.FC = () => {
  const [containerRef, start, end] = useRefScrollProgress();
  const { scrollYProgress } = useViewportScroll();

  const totalProjects = projects.length;
  const cardWidth = 100;
  const totalWidth = totalProjects * cardWidth;

  const targetX = -(totalWidth - 100);

  const safeStart = start || 0;
  const safeEnd = end ||1;

  const xTranslate = useTransform(
    scrollYProgress,
    [safeStart, safeEnd],
    ['0vw', targetX + 'vw']
  );

  const xSpring = useSpring(xTranslate, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const localProgress = useTransform(scrollYProgress, [safeStart, safeEnd], [0, 1]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#0a0a0a] hidden xl:block"
      style={{ height: `${totalProjects * 200}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden z-[5]">
        <div className="absolute top-10 left-10 z-10 pointer-events-none opacity-[0.05]">
          <h2 className="text-[20vw] font-black uppercase leading-none tracking-tighter">
            Portfolio
          </h2>
        </div>

        <motion.div 
          style={{ x: xSpring }}
          className="flex h-full"
        >
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              total={totalProjects}
              progress={localProgress}
              targetX={targetX}
            />
          ))}
        </motion.div>


        <div className="absolute bottom-10 left-10 right-10 h-px bg-white/10 z-20">
          <motion.div 
            style={{ scaleX: localProgress, originX: 0 }}
            className="w-full h-full bg-accent"
          />
          <div className="absolute top-4 left-0 text-[10px] font-black tracking-widest text-white/20 uppercase">
            Scroll to Navigate
          </div>
          <div className="absolute top-4 right-0 text-[10px] font-black tracking-widest text-white/20 uppercase">
            {totalProjects} Projects Total
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
