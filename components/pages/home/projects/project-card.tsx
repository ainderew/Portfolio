import React from 'react';
import Image from 'next/image';
import { motion, useTransform, MotionValue } from 'framer-motion';
import { Project } from '../../../../core/data/projects';
import Magnetic from '../../../magnetic';

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  targetX: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, progress }) => {
  const imageX = useTransform(progress, [0, 1], [150, -150]);

  return (
    <div 
      className="relative h-screen w-[100vw] flex-shrink-0 flex items-center justify-center px-6 xl:px-20"
    >
      <div className="relative w-full h-[60vh] xl:h-[70vh] grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col gap-4 xl:gap-6 order-2 xl:order-1">
          <motion.span 
            className="text-accent font-black text-xl xl:text-3xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {project.id}.
          </motion.span>
          
          <div className="overflow-hidden">
            <motion.h2 
              className="text-5xl xl:text-8xl 2xl:text-9xl font-black tracking-tighter uppercase leading-none"
              initial={{ y: '100%' }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            >
              {project.title}
            </motion.h2>
          </div>

          <motion.p 
            className="text-base xl:text-xl text-white/50 max-w-md leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {project.description}
          </motion.p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-6 items-center mt-4">
            {project.github && (
              <Magnetic>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 xl:px-8 py-2 xl:py-3 border border-white/20 hover:bg-white hover:text-black transition-all duration-300 font-bold uppercase text-[10px] xl:text-xs tracking-widest"
                >
                  Code
                </a>
              </Magnetic>
            )}
            {project.live && (
              <Magnetic>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-black uppercase text-[10px] xl:text-xs tracking-widest hover:underline"
                >
                  Launch Live
                </a>
              </Magnetic>
            )}
          </div>
        </div>

        <div className="relative h-[40vh] xl:h-full w-full order-1 xl:order-2 overflow-hidden rounded-2xl border border-white/5 group">
          <motion.div 
            style={{ x: imageX }}
            className="absolute inset-0 scale-150"
          >
            {project.video ? (
              <video 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              >
                <source src={project.video} type="video/mp4" />
              </video>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={project.image}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="grayscale group-hover:grayscale-0 transition-all duration-700"
                  alt={project.title}
                />
              </div>
            )}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
          
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center bg-accent/10 backdrop-blur-[2px] pointer-events-none">
            <span className="text-white font-black text-xs tracking-[1em] uppercase">Visit Project</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
