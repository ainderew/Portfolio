import { useState, useEffect } from "react";

export const useScrollHider = (): string => {
  const [scrolledValue, setScrolledValue] = useState<number>(0);
  const [prevScroll, setPrevScroll] = useState<number>(0);
  const [classValue, setClassValue] = useState<string>("show");
  const handleScroll = () => {
    const progress = window.scrollY;
    setScrolledValue(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (prevScroll < scrolledValue) {
      //hide
      setClassValue("hide");
      setPrevScroll(scrolledValue)
    } else {
      //show
      setClassValue("show");
      setPrevScroll(scrolledValue)
    }
  }, [scrolledValue]);

  return classValue;
};
