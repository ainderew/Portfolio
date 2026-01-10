import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Intro = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setIsAnimationComplete(true);
      document.body.style.overflow = '';
    }, 3500);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, []);

  if (isAnimationComplete) return null;

  const textVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: { 
      opacity: 1, 
      width: 'auto',
      transition: {
        duration: 0.8,
        delay: 1,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const initialVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
      <motion.div
        className="relative flex items-center justify-center w-full h-full"
      >
        <motion.div
          initial={{ width: 0, height: 0 }}
          animate={{ 
            width: '150vmax', 
            height: '150vmax',
            transition: { 
              duration: 1.2,
              ease: [0.76, 0, 0.24, 1],
              delay: 2.2
            } 
          }}
          style={{
            boxShadow: '0 0 0 9999px #0a0a0a',
            borderRadius: '100%',
            backgroundColor: 'transparent',
          }}
          className="z-40 absolute"
        />
        
        <motion.div 
          className="relative z-50 flex items-center text-4xl font-bold text-white md:text-6xl overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: 0, 
            y: -100,
            transition: { duration: 0.5, delay: 2.2, ease: 'easeIn' }
          }}
        >
          <motion.span variants={initialVariants} initial="hidden" animate="visible">
            A
          </motion.span>
          
          <motion.div 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden whitespace-nowrap"
          >
            ndrew
          </motion.div>
          
          <motion.span 
            variants={initialVariants} 
            initial="hidden" 
            animate="visible"
            className="ml-2"
          >
             P
          </motion.span>
          
          <motion.div 
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden whitespace-nowrap"
          >
            inon
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
