import { useState, useEffect, useRef } from "react";

export const useScrollHider = (): string => {
  const [classValue, setClassValue] = useState<string>("show");
  const prevScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Add a small buffer to prevent jitter or hiding at the very top
      if (currentScrollY < 10) {
        setClassValue("show");
      } else if (currentScrollY > prevScrollY.current && currentScrollY > 50) {
        // Scrolling down & past threshold
        setClassValue("hide");
      } else if (currentScrollY < prevScrollY.current) {
        // Scrolling up
        setClassValue("show");
      }
      
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return classValue;
};
