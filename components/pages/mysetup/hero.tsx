import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../framer-animation/variants';
import { stats } from '../../../core/data/setup';

export const SetupHero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const installCommand =
    'curl -fsSL https://raw.githubusercontent.com/ainderew/Portfolio/main/public/install.sh | bash';

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.section
      variants={fadeIn('up')}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="w-[90%] xl:w-[70%] max-w-[1344px] mx-auto pt-40 pb-20"
    >
      <div className="flex flex-col items-center text-center gap-8">
        {/* Badge */}
        <motion.span
          variants={fadeIn('up')}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-accent"
        >
          My Setup
        </motion.span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl xl:text-7xl font-bold leading-tight">
          Reproducible{' '}
          <span className="text-accent">Dev Environment</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base xl:text-lg text-white/50 max-w-[640px] leading-relaxed">
          One command to set up my entire macOS development environment.
          Dotfiles, CLI tools, Neovim, and more.
        </p>

        {/* Install command */}
        <div className="w-full max-w-[720px]">
          <button
            onClick={handleCopy}
            className="group w-full bg-white/[0.03] border border-white/[0.06] rounded-2xl px-6 py-4 flex items-center justify-between gap-4 transition-colors duration-300 hover:border-accent/30 hover:bg-white/[0.05] cursor-pointer"
          >
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="text-accent font-mono text-sm shrink-0">$</span>
              <code className="text-sm font-mono text-white/70 truncate">
                {installCommand}
              </code>
            </div>
            <span className="shrink-0 text-white/30 group-hover:text-accent transition-colors duration-300">
              {copied ? (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"
                    fill="currentColor"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 22C4.45 22 3.979 21.8043 3.587 21.413C3.196 21.021 3 20.55 3 20V6H5V20H16V22H5ZM9 18C8.45 18 7.979 17.8043 7.588 17.413C7.196 17.021 7 16.55 7 16V4C7 3.45 7.196 2.979 7.588 2.587C7.979 2.196 8.45 2 9 2H18C18.55 2 19.021 2.196 19.413 2.587C19.804 2.979 20 3.45 20 4V16C20 16.55 19.804 17.021 19.413 17.413C19.021 17.804 18.55 18 18 18H9ZM9 16H18V4H9V16Z"
                    fill="currentColor"
                  />
                </svg>
              )}
            </span>
          </button>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-[720px] mt-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeIn('up')}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 flex flex-col items-center gap-1"
            >
              <span className="text-3xl xl:text-4xl font-bold text-accent">
                {stat.value}
              </span>
              <span className="text-xs text-white/40 uppercase tracking-[0.15em] font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SetupHero;
