import type { NextPage } from "next";
import AboutMe from "../components/about-me";
import Banner from "../components/banner";
import WebNav from "../components/web-nav";

import { motion } from "framer-motion";
import { staggerContainer } from "../framer-animation/variants";
import SocialWidget from "../components/social-widget";
import AboutMeBanner from "../components/about-me-banner";

const Home: NextPage = () => {
  return (
    <div className="main h-full w-full relative">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="stagger-wrapper "
      >
        <WebNav />
        <Banner />
        <SocialWidget />
      </motion.div>
      {/* <div className="h-screen"></div> */}
      <div className="first-stick-container h-full sticky top-0 -z-10">
      <AboutMeBanner />
        <AboutMe />
      </div>

      <div className="bg-black z-20 w-full h-screen"></div>
    </div>
  );
};

export default Home;
