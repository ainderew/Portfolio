import React, { useRef, useLayoutEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { projects } from '../core/data/projects';
import Magnetic from './magnetic';

const HorizontalProjects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);
  const [localProgress, setLocalProgress] = useState(0);
  const [bgX, setBgX] = useState(0);
  const [isStickyActive, setIsStickyActive] = useState(false);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let containerTopOffset = 0;

    const calculateOffset = () => {
      const rect = container.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      containerTopOffset = rect.top + scrollTop;
    };

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const containerHeight = container.offsetHeight;

      const containerTop = containerTopOffset;
      const scrollRange = containerHeight - windowHeight;
      const containerBottom = containerTopOffset + scrollRange;

      const fadeOffset = 100;
      const isActive =
        scrollTop >= containerTop - fadeOffset && scrollTop <= containerBottom;
      setIsStickyActive(isActive);

      let progress = (scrollTop - containerTop) / scrollRange;
      progress = Math.max(0, Math.min(1, progress));

      const startBuffer = 0.15;
      let effectiveProgress = 0;
      if (progress > startBuffer) {
        effectiveProgress = (progress - startBuffer) / (1 - startBuffer);
      }

      const horizontalX = -(effectiveProgress * (projects.length - 1) * 100);
      setX(horizontalX);
      setLocalProgress(effectiveProgress);
      setBgX(-effectiveProgress * 50);
    };

    calculateOffset();
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', () => {
      calculateOffset();
      handleScroll();
    });

    const timers = [100, 500, 1000].map((delay) =>
      setTimeout(() => {
        calculateOffset();
        handleScroll();
      }, delay),
    );

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      timers.forEach(clearTimeout);
    };
  }, []);

  const getDotColor = (index: number): string => {
    const segmentStart = index / projects.length;
    const segmentEnd = (index + 1) / projects.length;
    if (localProgress >= segmentStart && localProgress < segmentEnd) {
      return '#DE682C';
    }
    return 'rgba(255,255,255,0.1)';
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#050505] hidden xl:block"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div
        className={`fixed top-0 left-0 w-full h-screen flex items-center overflow-hidden z-[10] transition-opacity duration-300 ease-out ${isStickyActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <motion.div
          style={{ x: bgX + 'vw' }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] whitespace-nowrap"
        >
          <h2 className="text-[40vw] font-black uppercase tracking-tighter">
            PROJRCTS PROJECTS PROJECTS
          </h2>
        </motion.div>

        <motion.div style={{ x: x + '%' }} className="flex h-full items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative h-screen w-screen flex-shrink-0 flex items-center justify-center px-10 xl:px-40"
            >
              <div className="w-full max-w-[1400px] grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-24 items-center">
                <div className="flex flex-col gap-6 xl:gap-10">
                  <div className="flex items-center gap-4">
                    <span className="text-accent text-xl xl:text-3xl font-black">
                      {project.id}
                    </span>
                    <div className="h-px w-20 bg-accent/30" />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-6xl xl:text-8xl 2xl:text-9xl font-black uppercase tracking-tighter leading-none">
                      {project.title}
                    </h3>
                    <p className="text-lg xl:text-xl text-white/40 max-w-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-8 items-center pt-4">
                    <Magnetic>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative inline-block px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-widest overflow-hidden"
                      >
                        <span className="relative z-10">View Code</span>
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white font-black uppercase text-xs tracking-[0.3em] hover:text-accent transition-colors"
                      >
                        Live Preview →
                      </a>
                    </Magnetic>
                  </div>
                </div>

                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/5 shadow-2xl group cursor-none">
                  <div className="absolute inset-0 scale-110 group-hover:scale-100 transition-transform duration-[1.5s] ease-out">
                    {project.video ? (
                      <video
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    ) : (
                      <Image
                        src={project.image}
                        fill
                        style={{ objectFit: 'cover' }}
                        alt={project.title}
                        className="opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-1000"
                      />
                    )}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-8 right-8">
                    <div className="px-4 py-2 border border-white/20 backdrop-blur-md rounded-full text-[8px] font-black tracking-widest uppercase">
                      Featured Work
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-12 left-10 xl:left-20 right-10 xl:right-20 flex justify-between items-end">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-30">
              Scroll to Explore
            </span>
            <div className="h-[2px] w-64 bg-white/10 relative">
              <motion.div
                className="absolute inset-0 bg-accent origin-left"
                style={{ scaleX: localProgress }}
              />
            </div>
          </div>

          <div className="flex gap-4">
            {projects.map((p, i) => (
              <div
                key={p.id}
                className="w-2 h-2 rounded-full border border-white/20 transition-colors duration-300"
                style={{ backgroundColor: getDotColor(i) }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalProjects;
