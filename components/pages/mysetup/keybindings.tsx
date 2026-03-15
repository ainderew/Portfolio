import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, works } from '../../../framer-animation/variants';
import { keybindings } from '../../../core/data/setup';
import type { KeybindingContext } from '../../../core/types/setup';
import { KeyCombo } from './key-combo';

const contextTabs: Array<{ key: KeybindingContext; label: string }> = [
  { key: 'tmux', label: 'Tmux' },
  { key: 'neovim', label: 'Neovim' },
  { key: 'kitty', label: 'Kitty' },
];

export const KeybindingsReference: React.FC = () => {
  const [activeContext, setActiveContext] =
    useState<KeybindingContext>('tmux');

  const groupedBindings = useMemo(() => {
    const contextBindings = keybindings.filter(
      (kb) => kb.context === activeContext,
    );

    const groups: Record<string, typeof contextBindings> = {};
    for (const kb of contextBindings) {
      const cat = kb.category ?? 'General';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(kb);
    }

    return groups;
  }, [activeContext]);

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
            Keybindings
          </motion.p>
          <motion.h2
            variants={fadeIn('up')}
            className="text-3xl xl:text-5xl font-bold"
          >
            Keyboard Shortcuts Reference
          </motion.h2>
        </div>

        {/* Context tabs */}
        <div className="flex gap-1 border-b border-white/[0.06]">
          {contextTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveContext(tab.key)}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 cursor-pointer ${
                activeContext === tab.key
                  ? 'text-accent'
                  : 'text-white/40 hover:text-white/60'
              }`}
            >
              {activeContext === tab.key && (
                <motion.div
                  layoutId="keybinding-tab-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Keybindings content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeContext}
            variants={works}
            initial="initial"
            animate="animate"
            exit="exit"
            className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 xl:p-12"
          >
            <div className="flex flex-col gap-8">
              {Object.entries(groupedBindings).map(([category, bindings]) => (
                <div key={category}>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-white/30 mb-3">
                    {category}
                  </h3>
                  <div>
                    {bindings.map((kb, i) => (
                      <div
                        key={kb.keys}
                        className={`flex items-center justify-between py-3 ${
                          i < bindings.length - 1
                            ? 'border-b border-white/[0.04]'
                            : ''
                        }`}
                      >
                        <KeyCombo keys={kb.keys} />
                        <span className="text-sm text-white/60 text-right ml-4">
                          {kb.action}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
};
