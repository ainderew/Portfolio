import { useRef } from 'react';
import dynamic from 'next/dynamic';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import type { MotionValue } from 'framer-motion';
import {
  fadeIn,
  staggerContainer,
  wordReveal,
} from '../framer-animation/variants';

const ImageScene = dynamic<{
  distortion: MotionValue<number>;
  colorMix: MotionValue<number>;
}>(
  () =>
    import('./about-me-scene').then(
      (mod) => mod.ImageScene,
    ),
  {
    ssr: false,
    loading: () => <div className="w-full h-full bg-[#0a0a0a]" />,
  },
);

const BackgroundScene = dynamic<{ scrollProgress: MotionValue<number> }>(
  () =>
    import('./about-me-scene').then(
      (mod) => mod.BackgroundScene,
    ),
  { ssr: false },
);

const headingStagger: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const techStack = [
  'TypeScript',
  'React',
  'Next.js',
  'Framer Motion',
  'Node.js',
  'GraphQL',
  'PostgreSQL',
  'Tailwind',
];

const AboutMe: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Three.js shader values
  const distortion = useTransform(
    scrollYProgress,
    [0, 0.15, 0.4, 0.7, 1],
    [1.2, 0.8, 0, 0.2, 0.6],
  );
  const colorMix = useTransform(
    scrollYProgress,
    [0.1, 0.4, 0.75, 0.95],
    [0, 1, 1, 0.3],
  );

  // CSS 3D for text elements
  const bioRotateX = useTransform(scrollYProgress, [0.15, 0.45], [4, 0]);
  const bioZ = useTransform(scrollYProgress, [0.15, 0.45], [-30, 0]);
  const techRotateX = useTransform(scrollYProgress, [0.25, 0.5], [6, 0]);
  const techZ = useTransform(scrollYProgress, [0.25, 0.5], [-50, 0]);

  return (
    <div
      ref={sectionRef}
      className="w-full h-auto bg-[#0a0a0a] py-20 xl:py-32 relative overflow-hidden"
      style={{ perspective: 1200 }}
    >
      <BackgroundScene scrollProgress={scrollYProgress} />

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-[90%] xl:w-[70%] max-w-[1344px] mx-auto relative z-10"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Heading with word reveal */}
        <motion.h3
          variants={headingStagger}
          className="text-5xl xl:text-7xl font-bold tracking-tighter flex flex-wrap gap-x-3 xl:gap-x-4 mb-16 xl:mb-20"
        >
          {['A', 'bit', 'about'].map((word) => (
            <motion.span key={word} className="overflow-hidden inline-block">
              <motion.span variants={wordReveal} className="inline-block">
                {word}
              </motion.span>
            </motion.span>
          ))}
          <motion.span className="overflow-hidden inline-block">
            <motion.span variants={wordReveal} className="inline-block">
              <span className="text-accent">me.</span>
            </motion.span>
          </motion.span>
        </motion.h3>

        {/* Image + Bio */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-start">
          {/* Three.js image with distortion shader */}
          <motion.div variants={fadeIn('up')} className="xl:col-span-5">
            <div className="relative aspect-[4/5]">
              <ImageScene distortion={distortion} colorMix={colorMix} />
            </div>
          </motion.div>

          {/* Bio content with CSS 3D depth */}
          <motion.div
            className="xl:col-span-7 flex flex-col gap-8 xl:pt-4"
            style={{
              rotateX: bioRotateX,
              translateZ: bioZ,
              transformOrigin: 'center top',
            }}
          >
            <motion.p
              variants={fadeIn('up')}
              className="text-lg xl:text-xl text-white/60 leading-relaxed"
            >
              I&apos;m Andrew, a software engineer driven by the intersection of
              practicality and aesthetics. I don&apos;t just build functional
              applications; I craft digital experiences that feel intuitive and
              look stunning.
            </motion.p>

            <motion.p
              variants={fadeIn('up')}
              className="text-lg xl:text-xl text-white/60 leading-relaxed"
            >
              When I&apos;m not debugging or designing, you&apos;ll probably find
              me exploring the latest web technologies or helping someone fix
              their WiFi. Here are a few things I&apos;m currently working with:
            </motion.p>

            <motion.p
              variants={fadeIn('up')}
              className="text-white/40 text-sm xl:text-base leading-relaxed"
              style={{
                rotateX: techRotateX,
                translateZ: techZ,
                transformOrigin: 'center top',
              }}
            >
              {techStack.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < techStack.length - 1 && (
                    <span className="text-accent/40 mx-2">/</span>
                  )}
                </span>
              ))}
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
