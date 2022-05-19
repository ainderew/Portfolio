import { transform, Variants } from "framer-motion";

export const fadeIn = (direction: "up" | "down"): Variants => {
  return {
    initial: {
      y: direction === "up" ? 40 : -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };
};

export const scaleLine: Variants = {
  initial: {
    scaleY: 0,
    originY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: .3,
      ease: "easeIn"
    },
  },
};
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
