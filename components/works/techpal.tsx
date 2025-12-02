import Image from 'next/image';
import { motion, useTransform, useViewportScroll } from 'framer-motion';

import projectImg from '../../public/assets/tp.gif';
// import loading from '../../public/assets/loading.webp';

// import github from '../../public/assets/github_black.svg';
import web from '../../public/assets/web.svg';

type props = {
  //   pRef: MutableRefObject<HTMLDivElement>;
  start: number;
  stop: number;
};

const WorksTechpal: React.FC<props> = ({ start, stop }: props) => {
  const { scrollYProgress } = useViewportScroll();
  //   const [elRef, start, stop] = useRefScrollProgress();
  const yPosAnim = useTransform(scrollYProgress, [start, stop], [2000, 0]);
  // const yPosAnimUp = useTransform(scrollYProgress, [start, stop], [-2000, 0]);
  const opacityAnim = useTransform(scrollYProgress, [start, stop], [-1, 1]);
  const zindexer = useTransform(scrollYProgress, [start, stop], [-1, 1]);

  return (
    <motion.div
      style={{
        zIndex: zindexer,
      }}
      className="w-full bordder-8 border-blue-300 h-screen overflow-y-hidden grid grid-cols-2 absolute top-0"
    >
      <motion.div
        className="left bg-black flex items-center px-32 relative"
        style={{
          // y: yPosAnimUp,
          opacity: opacityAnim,
        }}
      >
        <p className="text-4xl font-bold absolute top-10 left-10">02</p>

        <div className="content-container flex flex-col gap-4 ">
          <h2 className="project-heading text-7xl font-bold mb-10">Techpal</h2>
          <p className="role-heading text-3xl font-medium">
            Front End Developer
          </p>
          <p className="project-description text-2xl break-words ">
            An ecommerce website built with NextJS for a computer retail store.
            with a custom CRM and multiple payment API integration
          </p>

          <ul className="mt-10 flex flex-col gap-2">
            <li className="">
              <a
                href="https://github.com/ainderew/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 text-xl"
              >
                <Image
                  src={'/assets/github_white.svg'}
                  width={20}
                  height={20}
                />
                Github
              </a>
            </li>

            <li className="">
              <a
                href="https://github.com/ainderew/POSandInventoryManagement"
                className="flex gap-4 text-xl"
              >
                <Image src={web} width={20} height={20} />
                https://www.Techpal.store
              </a>
            </li>
          </ul>
        </div>
        <p className="text-xl font-semibold absolute bottom-10 left-10">
          Typescript - NextJS
        </p>
      </motion.div>

      <motion.div
        className="right bg-black flex justify-center items-center px-32"
        style={{
          y: yPosAnim,
        }}
      >
        <div className="w-full max-w-[950px] h-1/2 max-h-[531px] relative">
          <Image
            src={projectImg}
            layout="fill"
            placeholder="blur"
            blurDataURL="/assets/loading.webp"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WorksTechpal;
