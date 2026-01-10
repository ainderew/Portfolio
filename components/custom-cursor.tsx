import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestLink = target.closest('a') || target.closest('button');
      const isProjectArea = target.closest('.group');

      if (closestLink) {
        setIsHovering(true);
        setCursorText('');
      } else if (isProjectArea) {
        setIsHovering(true);
        setCursorText('VIEW');
      } else {
        setIsHovering(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-accent pointer-events-none z-[9999] hidden xl:flex items-center justify-center text-[8px] font-black text-white"
      style={{
        x: cursorX,
        y: cursorY,
        scale: isHovering ? 2.5 : 1,
        backgroundColor: isHovering ? 'rgba(222, 104, 44, 0.2)' : 'transparent',
        borderColor: isHovering ? 'transparent' : '#DE682C',
      }}
      transition={{ scale: { duration: 0.2 } }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering && cursorText ? 1 : 0 }}
        className="tracking-tighter"
      >
        {cursorText}
      </motion.span>
    </motion.div>
  );
};

export default CustomCursor;
