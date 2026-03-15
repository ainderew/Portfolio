import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  fadeIn,
  staggerContainer,
  works,
} from '../../../framer-animation/variants';
import { cliAliases, aliasCategoryLabels } from '../../../core/data/setup';
import type { AliasCategory } from '../../../core/types/setup';

const categories: Array<{ key: string; label: string }> = [
  { key: 'all', label: 'All' },
  ...Object.entries(aliasCategoryLabels).map(([key, label]) => ({
    key,
    label,
  })),
];

export const CliCheatsheet: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredAliases = useMemo(() => {
    let result = cliAliases;

    if (activeCategory !== 'all') {
      result = result.filter(
        (a) => a.category === (activeCategory as AliasCategory),
      );
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.alias.toLowerCase().includes(query) ||
          a.command.toLowerCase().includes(query) ||
          a.description.toLowerCase().includes(query),
      );
    }

    return result;
  }, [activeCategory, searchQuery]);

  return (
    <motion.section
      variants={fadeIn('up')}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className="w-[90%] xl:w-[70%] max-w-[1344px] mx-auto py-20"
    >
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="space-y-3">
          <motion.p
            variants={fadeIn('up')}
            className="text-sm xl:text-lg font-bold text-accent uppercase tracking-[0.3em]"
          >
            CLI Cheatsheet
          </motion.p>
          <motion.h2
            variants={fadeIn('up')}
            className="text-3xl xl:text-5xl font-bold"
          >
            Custom Aliases &amp; Functions
          </motion.h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer ${
                activeCategory === cat.key
                  ? 'bg-accent text-white'
                  : 'bg-white/5 text-white/40 hover:text-white/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative max-w-md">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search aliases..."
            className="w-full bg-white/[0.03] border border-white/[0.06] rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-white/30 outline-none focus:border-white/[0.12] transition-colors"
          />
        </div>

        {/* Alias list */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredAliases.map((alias) => (
              <motion.div
                key={alias.alias}
                variants={works}
                initial="initial"
                animate="animate"
                exit="exit"
                layout
                className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4"
              >
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-mono font-bold text-accent">
                    {alias.alias}
                  </span>
                  <span className="text-white/30">&rarr;</span>
                  <span className="font-mono text-white/60 text-sm break-all">
                    {alias.command}
                  </span>
                </div>
                <p className="text-sm text-white/40 mt-2">
                  {alias.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredAliases.length === 0 && (
            <p className="text-sm text-white/30 text-center py-8">
              No aliases match your search.
            </p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};
