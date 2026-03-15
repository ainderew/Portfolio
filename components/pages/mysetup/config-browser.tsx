import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { fadeIn } from '../../../framer-animation/variants';
import { ConfigFile } from '../../../core/types/setup';
import { CodeBlock } from './code-block';

interface ConfigBrowserProps {
  configs: ConfigFile[];
}

export const ConfigBrowser: React.FC<ConfigBrowserProps> = ({ configs }) => {
  const [activeId, setActiveId] = useState(configs[0]?.id ?? '');

  const activeConfig = configs.find((c) => c.id === activeId) ?? configs[0];

  return (
    <motion.section
      variants={fadeIn('up')}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="w-[90%] xl:w-[70%] max-w-[1344px] mx-auto py-20"
    >
        {/* Section label */}
        <span className="text-sm xl:text-lg font-bold text-accent uppercase tracking-[0.3em]">
          Config Files
        </span>

        {/* Heading */}
        <h2 className="text-2xl xl:text-4xl font-bold mt-3 mb-8">
          Browse My Configs
        </h2>

        {/* Tab bar */}
        <LayoutGroup>
          <div className="flex gap-1 overflow-x-auto border-b border-white/[0.06] mb-8 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
            {configs.map((config) => {
              const isActive = config.id === activeId;

              return (
                <button
                  key={config.id}
                  onClick={() => setActiveId(config.id)}
                  className={`relative px-4 py-2 text-sm font-mono whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                    isActive
                      ? 'text-accent'
                      : 'text-white/40 hover:text-white/60'
                  }`}
                >
                  {config.label}

                  {isActive && (
                    <motion.div
                      layoutId="config-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent"
                      transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </LayoutGroup>

        {/* Active config content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeConfig.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <CodeBlock
              code={activeConfig.content}
              language={activeConfig.language}
              filename={activeConfig.filename}
            />
          </motion.div>
        </AnimatePresence>
    </motion.section>
  );
};

export default ConfigBrowser;
