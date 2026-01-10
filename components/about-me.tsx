import Image from 'next/image';
import { motion } from 'framer-motion';
import me from '../public/assets/me3.jpg';
import { fadeIn, staggerContainer } from '../framer-animation/variants';

const AboutMe: React.FC = () => {
  return (
    <div className="w-full h-auto bg-[#0a0a0a] py-20">
      <motion.div 
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="h-full w-[90%] xl:w-[70%] max-w-[1344px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-20 items-center"
      >
        <div className="flex flex-col gap-6">
          <motion.h3 
            variants={fadeIn('up')}
            className="text-4xl xl:text-6xl font-bold tracking-tighter"
          >
            A bit about <span className="text-accent">me.</span>
          </motion.h3>
          
          <motion.p variants={fadeIn('up')} className="text-lg xl:text-xl text-white/60 leading-relaxed">
            I&apos;m Andrew, a software engineer driven by the intersection of 
            practicality and aesthetics. I don&apos;t just build functional 
            applications; I craft digital experiences that feel intuitive and 
            look stunning.
          </motion.p>

          <motion.p variants={fadeIn('up')} className="text-lg xl:text-xl text-white/60 leading-relaxed">
            When I&apos;m not debugging or designing, you&apos;ll probably find me 
            exploring the latest web technologies or helping someone fix their 
            WiFi. Here are a few things I&apos;m currently working with:
          </motion.p>

          <motion.div variants={fadeIn('up')} className="grid grid-cols-2 gap-4 mt-4">
            <ul className="space-y-2">
              {['TypeScript', 'React', 'Next.js', 'Framer Motion'].map(item => (
                <li key={item} className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {['Node.js', 'GraphQL', 'PostgreSQL', 'Tailwind'].map(item => (
                <li key={item} className="flex items-center gap-2 text-white/80">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          variants={fadeIn('up')}
          className="relative aspect-square group"
        >
          <div className="absolute inset-0 border-2 border-accent translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
          <div className="relative h-full w-full grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
            <Image
              src={me}
              layout="fill"
              objectFit="cover"
              alt="Andrew's picture"
              className="scale-110 group-hover:scale-100 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-accent/20 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
