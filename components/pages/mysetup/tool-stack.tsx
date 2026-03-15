import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../framer-animation/variants';
import {
  tools,
  toolConnections,
  toolCategoryLabels,
} from '../../../core/data/setup';
import type { ToolCategory } from '../../../core/types/setup';
import { ToolCard } from './tool-card';

const categories: Array<{ key: string; label: string }> = [
  { key: 'all', label: 'All' },
  ...Object.entries(toolCategoryLabels).map(([key, label]) => ({
    key,
    label,
  })),
];

export const ToolStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTools = useMemo(() => {
    if (activeCategory === 'all') return tools;
    return tools.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  const resolvedConnections = useMemo(() => {
    return toolConnections.map((conn) => {
      const fromTool = tools.find((t) => t.id === conn.from);
      const toTool = tools.find((t) => t.id === conn.to);
      return {
        ...conn,
        fromName: fromTool?.name ?? conn.from,
        toName: toTool?.name ?? conn.to,
      };
    });
  }, []);

  return (
    <motion.section
      variants={fadeIn('up')}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="w-[90%] xl:w-[70%] max-w-[1344px] mx-auto py-20"
    >
      <div className="flex flex-col gap-12">
        {/* Header */}
        <div className="space-y-3">
          <motion.p
            variants={fadeIn('up')}
            className="text-sm xl:text-lg font-bold text-accent uppercase tracking-[0.3em]"
          >
            Tool Stack
          </motion.p>
          <motion.h2
            variants={fadeIn('up')}
            className="text-3xl xl:text-5xl font-bold"
          >
            What Powers My Workflow
          </motion.h2>
        </div>

        {/* Filter tabs */}
        <LayoutGroup>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`relative px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer ${
                  activeCategory === cat.key
                    ? 'text-white'
                    : 'text-white/40 hover:text-white/60'
                }`}
              >
                {activeCategory === cat.key && (
                  <motion.div
                    layoutId="active-tool-tab"
                    className="absolute inset-0 bg-white/[0.08] border border-white/[0.1] rounded-xl"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>

        {/* Tool grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Connections */}
        <div className="mt-8 space-y-6">
          <h3 className="text-lg font-bold text-white/80">Connections</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {resolvedConnections.map((conn) => (
              <div
                key={`${conn.from}-${conn.to}`}
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl px-5 py-4 flex items-center gap-3"
              >
                <span className="text-sm font-semibold text-white/70">
                  {conn.fromName}
                </span>
                <span className="text-accent text-xs">&rarr;</span>
                <span className="text-sm font-semibold text-white/70">
                  {conn.toName}
                </span>
                <span className="ml-auto text-xs text-white/30">
                  {conn.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ToolStack;
