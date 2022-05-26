import { useRef } from "react";
import type { NextPage } from "next";
import AboutMe from "../components/about-me";
import Banner from "../components/banner";
import WebNav from "../components/web-nav";

import { motion } from "framer-motion";
import { staggerContainer } from "../framer-animation/variants";
import SocialWidget from "../components/social-widget";
import AboutMeBanner from "../components/about-me-banner";
import Works from "../components/works";
import Contact from "../components/contact";
import WorkMobile from "../components/work-mobile";

const Home: NextPage = () => {
  const workRef = useRef<HTMLDivElement>(null);

  const scrollToWork: () => void = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView();
    }
  };

  return (
    <div className="main h-full w-full relative">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="stagger-wrapper"
      >
        <WebNav />
        <Banner scrollFunction={scrollToWork} />
        <SocialWidget />
      </motion.div>

      <div className="first-stick-container h-full sticky top-0 -z-10">
        <AboutMeBanner />
        <AboutMe />
      </div>

      <Works pageRef={workRef} />
      <WorkMobile />
      <Contact />
    </div>
  );
};

export default Home;
