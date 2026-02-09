import { RefObject } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeIn } from '../framer-animation/variants';
import Magnetic from './magnetic';

interface Props {
  contactRef: RefObject<HTMLDivElement | null>;
}

const Contact: React.FC<Props> = ({ contactRef }) => {
  const openMail = () => {
    window.open('mailto:andrewapinon@gmail.com?subject=Inquiry');
  };

  return (
    <section 
      ref={contactRef} 
      className="relative w-full h-screen bg-[#0a0a0a] flex items-center justify-center"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <h2 className="text-[30vw] font-black uppercase leading-none">
          Contact
        </h2>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="relative z-10 w-[90%] max-w-4xl flex flex-col items-center text-center gap-8"
      >
        <motion.p
          variants={fadeIn('up')}
          className="text-accent font-bold text-lg uppercase tracking-[0.4em]"
        >
          Get in touch
        </motion.p>
        
        <motion.h2
          variants={fadeIn('up')}
          className="text-6xl xl:text-9xl font-black tracking-tighter"
        >
          Let&apos;s build something <span className="text-accent">great.</span>
        </motion.h2>

        <motion.p
          variants={fadeIn('up')}
          className="text-white/60 text-xl xl:text-2xl max-w-2xl leading-relaxed"
        >
          Currently open for new opportunities and interesting projects. 
          Whether you have a question or just want to say hi, my inbox 
          is always open.
        </motion.p>

        <motion.div variants={fadeIn('up')} className="mt-8">
          <Magnetic>
            <button
              onClick={openMail}
              className="relative group px-12 py-6 bg-white text-black font-black text-xl uppercase tracking-widest overflow-hidden transition-transform duration-300 hover:scale-110"
            >
              <span className="relative z-10">Send a Message</span>
              <div className="absolute inset-0 bg-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.76,0,0.24,1]" />
            </button>
          </Magnetic>
        </motion.div>

        <div className="mt-20 flex gap-8">
          {[
            { name: 'LinkedIn', url: 'https://www.linkedin.com/in/andrew-pinon-620b4b14a/' },
            { name: 'Github', url: 'https://www.github.com/ainderew' },
            { name: 'Twitter', url: 'https://twitter.com/ainderew' }
          ].map((social) => (
            <Magnetic key={social.name}>
              <a 
                href={social.url} 
                target="_blank" 
                rel="noreferrer" 
                className="text-white/40 hover:text-white transition-colors font-bold uppercase text-xs tracking-widest"
              >
                {social.name}
              </a>
            </Magnetic>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
