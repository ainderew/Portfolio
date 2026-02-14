import { AnimatePresence, motion } from 'framer-motion';
import { works } from '../../../../../framer-animation/variants';
import { workExperienceData } from '../../../../../core/types/base';

type props = {
  data: workExperienceData;
};

export const ExperienceDetails = ({ data }: props) => {
  const { position, duration, employer, link, logo, responsibilities, techstack } =
    data;

  function renderPosition() {
    if (Array.isArray(position)) {
      return position.map((pos, index) => {
        return (
          <div key={pos}>
            <h2 className="position-header text-sm xl:text-lg font-semibold">
              <span className="position font-semibold">{pos}</span>
              <span className="duration text-accent font-bold">
                <a href={link} target="_blank" className="" rel="noreferrer">
                  {' '}
                  @{employer}
                </a>
              </span>
            </h2>
            <p className="duration-header text-xs xl:text-sm text-gray-500">
              <span className="duration font-semibold">{duration[index]}</span>
            </p>
          </div>
        );
      });
    }

    return (
      <div>
        <h2 className="position-header text-sm xl:text-lg font-semibold">
          <span className="position font-semibold">{position}</span>
          <span className="duration text-accent font-bold">
            <a href={link} target="_blank" className="" rel="noreferrer">
              {' '}
              @{employer}
            </a>
          </span>
        </h2>
        <p className="duration-header text-xs xl:text-sm text-gray-500">
          <span className="duration font-semibold">{duration}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-div overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={employer}
          variants={works}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            bounce: 0,
            duration: 0,
          }}
          className="test h-full w-full xl:w-full xl:px-8 flex flex-col"
        >
          <div className="flex flex-col gap-4">{renderPosition()}</div>
          <span className="text-sm xl:text-lg my-5 text-accesnt">
            Responsibilites and Achievements
          </span>
          <ul className="flex flex-col gap-2 list-outside ml-4">
            {responsibilities.map((el, index) => {
              return (
                <li
                  key={index}
                  className="text-xs xl:text-sm list-item list-disc text-justify"
                >
                  {el}
                </li>
              );
            })}
          </ul>

          <span className="text-sm xl:text-lg my-5 text-accents">
            Techstack used
          </span>
          <ul className="flex flex-wrap gap-2 xl:gap-6 list-inside">
            {techstack.map((el) => {
              return (
                <li key={el} className="text-xs xl:text-sm ">
                  {el}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
