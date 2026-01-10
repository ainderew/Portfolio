import { useRef } from 'react';
import type { NextPage } from 'next';
import AboutMe from '../components/about-me';
import Experience from '../components/pages/home/experience-section/experience';
import Banner from '../components/banner';
import WebNav from '../components/web-nav';

import { motion } from 'framer-motion';
import { staggerContainer } from '../framer-animation/variants';
import SocialWidget from '../components/social-widget';
import AboutMeBanner from '../components/about-me-banner';
import Contact from '../components/contact';
import HorizontalProjects from '../components/horizontal-projects';
import WorkMobile from '../components/work-mobile';

const Home: NextPage = () => {

  const workRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToWork: () => void = () => {
    if (workRef.current) {
      workRef.current.scrollIntoView();
    }
  };

  const scrollToAbout: () => void = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView();
    }
  };

  const scrollToContact: () => void = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView();
    }
  };

  return (
    <div className="relative w-full">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="stagger-wrapper first-page"
      >
        <WebNav
          scrollToWork={scrollToWork}
          scrollToAbout={scrollToAbout}
          scrollToContact={scrollToContact}
        />
        <Banner scrollFunction={scrollToWork} />
        <SocialWidget />
      </motion.div>

      <Experience />

      <div className="relative">
        <AboutMeBanner aboutRef={aboutRef} />
        <AboutMe />
      </div>

      <div ref={workRef} className="w-full h-px" />
      <HorizontalProjects />
      <WorkMobile />
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default Home;
