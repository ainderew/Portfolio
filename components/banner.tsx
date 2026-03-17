import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";
import Magnetic from "./magnetic";

interface Props {
  scrollFunction: () => void;
}

const Banner: React.FC<Props> = ({ scrollFunction }) => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 40, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 30 });

  const glowLeft = useTransform(springX, [0, 1], ["15%", "75%"]);
  const glowTop = useTransform(springY, [0, 1], ["10%", "50%"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const nameReveal = {
    initial: { y: "110%" },
    animate: (i: number) => ({
      y: "0%",
      transition: {
        duration: 1.2,
        ease: [0.76, 0, 0.24, 1] as const,
        delay: 0.6 + i * 0.12,
      },
    }),
  };

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9] as const,
        delay,
      },
    },
  });

  return (
    <div className="relative w-full h-screen flex items-center overflow-hidden">
      {/* Mouse-tracking ambient glow */}
      <motion.div
        className="absolute w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(222, 104, 44, 0.08), transparent 70%)",
          left: glowLeft,
          top: glowTop,
          x: "-50%",
          y: "-50%",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Section number — decorative */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute top-[12%] right-[5%] xl:right-[8%] hero-mono text-[10px] xl:text-xs tracking-[0.3em] text-white/10 hidden md:block"
      >
        01
      </motion.span>

      {/* Main content */}
      <div className="relative z-10 w-[88%] xl:w-[82%] max-w-[1600px] mx-auto">
        {/* Role label */}
        <motion.p
          {...fadeUp(0.4)}
          className="hero-mono text-[11px] xl:text-sm tracking-[0.35em] uppercase text-accent mb-6 xl:mb-10"
        >
          <span className="text-white/25 mr-1">//</span> Software Developer
        </motion.p>

        {/* Name */}
        <div>
          <div className="overflow-hidden pb-1">
            <motion.h1
              variants={nameReveal}
              custom={0}
              initial="initial"
              animate="animate"
              className="hero-display text-[15vw] md:text-[13vw] xl:text-[11vw] leading-[0.88] tracking-[-0.03em]"
            >
              Andrew
            </motion.h1>
          </div>
          <div className="overflow-hidden pb-1">
            <motion.h1
              variants={nameReveal}
              custom={1}
              initial="initial"
              animate="animate"
              className="hero-display text-[15vw] md:text-[13vw] xl:text-[11vw] leading-[0.88] tracking-[-0.03em]"
            >
              Pinon<span className="text-accent">.</span>
            </motion.h1>
          </div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay: 1.1 }}
          className="h-px bg-white/15 mt-7 xl:mt-10 w-full xl:w-[55%] origin-left"
        />

        {/* Description + CTA */}
        <div className="mt-7 xl:mt-9 flex flex-col xl:flex-row xl:items-end xl:justify-between gap-6 xl:gap-12">
          <motion.p
            {...fadeUp(1.3)}
            className="text-sm xl:text-[15px] text-white/40 max-w-[420px] leading-[1.75]"
          >
            Crafting fast, accessible, and visually striking digital products
            from the Philippines.
          </motion.p>

          <motion.div {...fadeUp(1.5)}>
            <Magnetic>
              <button
                onClick={scrollFunction}
                className="group flex items-center gap-3 text-[11px] xl:text-xs uppercase tracking-[0.25em] text-white/50 hover:text-white transition-colors duration-300 bg-transparent border-none cursor-pointer"
              >
                <span className="relative py-1">
                  Explore Work
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" />
                </span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-accent text-sm"
                >
                  &rarr;
                </motion.span>
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* Pulsing accent dot — decorative */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-[18%] right-[12%] hidden xl:block"
      >
        <div className="relative w-1.5 h-1.5 rounded-full bg-accent/50">
          <motion.div
            animate={{ scale: [1, 3, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 rounded-full bg-accent/20"
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 xl:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="hero-mono text-[9px] tracking-[0.4em] text-white/15 uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0], opacity: [0.3, 0.1, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-7 bg-gradient-to-b from-white/25 to-transparent"
        />
      </motion.div>
    </div>
  );
};

export default Banner;
