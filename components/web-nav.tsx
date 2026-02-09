import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../framer-animation/variants';
import { useScrollHider } from '../hooks/scrollHide';
import Magnetic from './magnetic';

interface Props {
  scrollToWork?: () => void;
  scrollToAbout?: () => void;
  scrollToContact?: () => void;
}

const WebNav: React.FC<Props> = ({ scrollToWork, scrollToAbout, scrollToContact }) => {
  const classValue = useScrollHider();

  return (
    <nav
      className={`fixed top-0 w-full h-[6rem] hidden xl:flex justify-between items-center z-50 px-20 xl:px-40 transition-all duration-500 ${classValue} ${
        classValue.includes('hide') ? 'bg-transparent' : 'bg-black/20 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <motion.div variants={fadeIn('up')} className="logo flex-1">
        <Magnetic>
          <Link
            href="/"
            className="text-3xl font-bold cursor-pointer tracking-tighter hover:text-accent transition-colors"
          >
            AP.
          </Link>
        </Magnetic>
      </motion.div>

      <div className="flex-[2]">
        <ul className="justify-center flex gap-12 items-center">
          {[
            { label: 'About', action: scrollToAbout },
            { label: 'Works', action: scrollToWork },
            { label: 'My Setup', href: '/mysetup' },
            { label: 'Contact', action: scrollToContact },
          ].map((item, idx) => (
            <Magnetic key={idx}>
              <motion.li
                onClick={item.action}
                variants={fadeIn('up')}
                className="relative group"
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-sm font-medium uppercase tracking-[0.2em] cursor-pointer text-white/70 group-hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button onClick={item.action} className="text-sm font-medium uppercase tracking-[0.2em] cursor-pointer text-white/70 group-hover:text-white transition-colors bg-transparent border-none p-0">
                    {item.label}
                  </button>
                )}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full" />
              </motion.li>
            </Magnetic>
          ))}
        </ul>
      </div>

      <motion.div variants={fadeIn('up')} className="flex-1 flex justify-end">
        <Magnetic>
          <button className="px-8 py-3 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-accent hover:text-white transition-all duration-300">
            Resume
          </button>
        </Magnetic>
      </motion.div>
    </nav>
  );
};

export default WebNav;
