import { motion } from 'framer-motion';

type props = {
  label: string;
  experienceKey: string;
  active: boolean;
  clickHandler: (experienceKey: string) => void;
  logo?: string;
};

const ExperienceList: React.FC<props> = ({
  label,
  experienceKey,
  active,
  clickHandler,
  logo,
}: props) => {
  return (
    <button
      onClick={() => clickHandler(experienceKey)}
      className={`group relative w-full text-left cursor-pointer transition-all duration-300 ${
        active ? 'opacity-100' : 'opacity-40 hover:opacity-70'
      }`}
    >
      <div className="py-4 xl:py-5 px-5 xl:px-6 flex items-center gap-3">
        {logo && (
          <div className="w-7 h-7 rounded-full bg-white/90 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img
              src={logo}
              alt={`${label} logo`}
              className="w-4 h-4 object-contain"
            />
          </div>
        )}
        <span className="text-[10px] xl:text-xs font-bold uppercase tracking-[0.2em] text-white/60">
          {label}
        </span>
      </div>

      {active && (
        <motion.div
          layoutId="active-job-indicator"
          className="absolute left-0 top-0 bottom-0 w-[3px] bg-accent"
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        />
      )}

      <div
        className={`absolute bottom-0 left-5 right-5 h-px transition-colors duration-300 ${
          active ? 'bg-white/10' : 'bg-white/5'
        }`}
      />
    </button>
  );
};

export default ExperienceList;
