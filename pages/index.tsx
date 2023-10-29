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
import Works from '../components/works';
import Contact from '../components/contact';
import WorkMobile from '../components/work-mobile';
import ProjectSection from '../components/pages/home/projects';

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
    <div className='main h-full w-full relative exp'>
      <motion.div
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        className='stagger-wrapper first-page'
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

      <div className='first-stick-container h-full sticky top-0'>
        <AboutMeBanner aboutRef={aboutRef} />
        <AboutMe />
      </div>
      <div ref={workRef} className='w-0 h-0'></div>
      <Works />
      <WorkMobile />
      <div className='spacer w-full h-[30vh] relative bg-black z-10'></div>
      <ProjectSection />
      <Contact contactRef={contactRef} />
    </div>
  );
};

export default Home;
