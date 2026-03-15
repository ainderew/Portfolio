import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { works } from '../../../framer-animation/variants';
import type { Tool } from '../../../core/types/setup';

interface ToolCardProps {
  tool: Tool;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const content = (
    <motion.div
      variants={works}
      layout
      whileHover={{ y: -4 }}
      className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 flex flex-col gap-4 h-full transition-colors duration-300 hover:border-white/[0.12]"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
          <Image
            src={tool.icon}
            alt={`${tool.name} icon`}
            width={24}
            height={24}
          />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white">{tool.name}</h3>
          <span className="text-[10px] uppercase tracking-[0.15em] text-white/30 font-medium">
            {tool.category}
          </span>
        </div>
      </div>

      <p className="text-sm text-white/50 leading-relaxed">
        {tool.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {tool.highlights.map((highlight) => (
          <span
            key={highlight}
            className="px-2.5 py-1 bg-white/5 border border-white/[0.06] rounded-lg text-[10px] text-white/40 font-medium"
          >
            {highlight}
          </span>
        ))}
      </div>
    </motion.div>
  );

  if (tool.url) {
    return (
      <a href={tool.url} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default ToolCard;
