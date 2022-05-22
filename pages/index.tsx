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

const Home: NextPage = () => {
  return (
    <div className="main h-full w-full relative">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="stagger-wrapper"
      >
        <WebNav />
        <Banner />
        <SocialWidget />
      </motion.div>

      <div className="first-stick-container h-full sticky top-0 -z-10">
        <AboutMeBanner />
        <AboutMe />
      </div>

      <Works />
      <Contact />
    </div>
  );
};

export default Home;
