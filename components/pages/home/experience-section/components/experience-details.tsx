import { motion } from 'framer-motion';
import { workExperienceData } from '../../../../../core/types/base';

type props = {
  data: workExperienceData;
};

export const ExperienceDetails = ({ data }: props) => {
  const { position, duration, employer, location, link, responsibilities, techstack } =
    data;

  function renderPosition() {
    if (Array.isArray(position)) {
      return position.map((pos, index) => (
        <div key={pos} className="space-y-1">
          <h2 className="text-lg xl:text-2xl font-black tracking-tight text-white">
            {pos}
          </h2>
          <p className="text-[10px] xl:text-xs font-bold uppercase tracking-[0.2em] text-white/30">
            {(duration as string[])[index]}
          </p>
        </div>
      ));
    }

    return (
      <div className="space-y-1">
        <h2 className="text-lg xl:text-2xl font-black tracking-tight text-white">
          {position}
        </h2>
        <p className="text-[10px] xl:text-xs font-bold uppercase tracking-[0.2em] text-white/30">
          {duration as string}
        </p>
      </div>
    );
  }

  return (
    <motion.div
      key={employer}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      className="flex flex-col"
    >
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 text-accent font-bold text-xs xl:text-sm uppercase tracking-[0.15em] hover:opacity-70 transition-opacity mb-6"
      >
        @{employer}
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className="opacity-50"
        >
          <path
            d="M3.5 1.5H10.5V8.5M10.5 1.5L1.5 10.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      {location && (
        <p className="text-[10px] xl:text-xs font-bold uppercase tracking-[0.2em] text-white/20 mb-6">
          {location}
        </p>
      )}

      <div className="flex flex-col gap-3 mb-8">{renderPosition()}</div>

      <div className="w-full h-px bg-white/5 mb-8" />

      <div className="mb-8">
        <span className="text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.3em] text-white/20 mb-5 block">
          Key Contributions
        </span>
        <ul className="flex flex-col gap-3.5">
          {responsibilities.map((el, index) => (
            <li key={index} className="flex gap-3 items-start">
              <span className="mt-[7px] xl:mt-[9px] w-1 h-1 rounded-full bg-accent flex-shrink-0" />
              <span className="text-xs xl:text-sm text-white/50 leading-relaxed">
                {el}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-px bg-white/5 mb-8" />

      <div>
        <span className="text-[10px] xl:text-[11px] font-bold uppercase tracking-[0.3em] text-white/20 mb-4 block">
          Stack
        </span>
        <div className="flex flex-wrap gap-2">
          {techstack.map((el) => (
            <span
              key={el}
              className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/40"
            >
              {el}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
