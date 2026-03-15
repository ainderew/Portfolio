import React, { useState, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../../framer-animation/variants';
import { bootstrapFlags, setupSteps } from '../../../core/data/setup';
import type { BootstrapFlag } from '../../../core/types/setup';

const LINK_ONLY_FLAG = '--link-only';
const SYMLINK_STEP_ID = 3;

export const SetupGuide: React.FC = () => {
  const [activeFlags, setActiveFlags] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(bootstrapFlags.map((f) => [f.flag, f.default])),
  );
  const [copied, setCopied] = useState(false);

  const isLinkOnly = activeFlags[LINK_ONLY_FLAG];

  const toggleFlag = useCallback(
    (flag: string) => {
      if (flag !== LINK_ONLY_FLAG && isLinkOnly) return;
      setActiveFlags((prev) => ({ ...prev, [flag]: !prev[flag] }));
    },
    [isLinkOnly],
  );

  const skippedStepIds = useMemo(() => {
    const skipped = new Set<number>();

    if (isLinkOnly) {
      setupSteps.forEach((step) => {
        if (step.id !== SYMLINK_STEP_ID) skipped.add(step.id);
      });
      return skipped;
    }

    const activeSkipFlags = Object.entries(activeFlags)
      .filter(([key, val]) => val && key !== LINK_ONLY_FLAG)
      .map(([key]) => key);

    setupSteps.forEach((step) => {
      if (
        step.skippedBy &&
        step.skippedBy.some((flag) => activeSkipFlags.includes(flag))
      ) {
        skipped.add(step.id);
      }
    });

    return skipped;
  }, [activeFlags, isLinkOnly]);

  const command = useMemo(() => {
    const base = './dotfiles/scripts/bootstrap.sh';

    if (isLinkOnly) return `${base} --link-only`;

    const envVars = bootstrapFlags
      .filter((f) => f.flag !== LINK_ONLY_FLAG && activeFlags[f.flag])
      .map((f) => `${f.envVar}=1`)
      .join(' ');

    return envVars ? `${envVars} ${base}` : base;
  }, [activeFlags, isLinkOnly]);

  const copyCommand = useCallback(() => {
    navigator.clipboard.writeText(command).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [command]);

  const linkOnlyFlag = bootstrapFlags.find((f) => f.flag === LINK_ONLY_FLAG)!;
  const skipFlags = bootstrapFlags.filter((f) => f.flag !== LINK_ONLY_FLAG);

  return (
    <motion.section
      variants={fadeIn('up')}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="w-[90%] xl:w-[70%] max-w-[1344px] mx-auto py-24"
    >
      <p className="text-sm xl:text-lg font-bold text-accent uppercase tracking-[0.3em] mb-4">
        Setup Guide
      </p>
      <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-12">
        Interactive Bootstrap Builder
      </h2>

      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8"
      >
        {/* Flag Builder */}
        <motion.div
          variants={fadeIn('up')}
          className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 xl:p-12"
        >
          <h3 className="text-lg font-semibold text-white mb-6">
            Flag Builder
          </h3>

          <FlagToggle
            flag={linkOnlyFlag}
            active={activeFlags[linkOnlyFlag.flag]}
            disabled={false}
            onToggle={toggleFlag}
          />

          <div className="border-t border-white/[0.06] my-4" />

          <div className="flex flex-col gap-3">
            {skipFlags.map((flag) => (
              <FlagToggle
                key={flag.flag}
                flag={flag}
                active={activeFlags[flag.flag]}
                disabled={isLinkOnly}
                onToggle={toggleFlag}
              />
            ))}
          </div>
        </motion.div>

        {/* Step Timeline */}
        <motion.div
          variants={fadeIn('up')}
          className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 xl:p-12"
        >
          <h3 className="text-lg font-semibold text-white mb-6">
            Bootstrap Steps
          </h3>

          <div className="flex flex-col">
            {setupSteps.map((step, index) => {
              const isSkipped = skippedStepIds.has(step.id);
              const isLast = index === setupSteps.length - 1;

              return (
                <div key={step.id} className="flex gap-4">
                  {/* Timeline column */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-all duration-300 ${
                        isSkipped
                          ? 'bg-white/5 text-white/20'
                          : 'bg-accent/20 text-accent border border-accent/30'
                      }`}
                    >
                      {step.id}
                    </div>
                    {!isLast && (
                      <div
                        className={`w-px flex-1 min-h-[24px] transition-all duration-300 ${
                          isSkipped ? 'bg-white/5' : 'bg-white/10'
                        }`}
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div
                    className={`pb-5 transition-all duration-300 ${
                      isSkipped ? 'opacity-30' : 'opacity-100'
                    }`}
                  >
                    <p
                      className={`text-sm font-semibold text-white leading-8 ${
                        isSkipped ? 'line-through' : ''
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-400">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>

      {/* Command Builder */}
      <motion.div
        variants={fadeIn('up')}
        className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 xl:p-8"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex-1 overflow-x-auto">
            <div className="flex items-center gap-2">
              <span className="text-accent text-sm font-mono shrink-0">$</span>
              <code className="text-sm font-mono text-gray-300 whitespace-nowrap">
                {command}
              </code>
            </div>
          </div>
          <button
            onClick={copyCommand}
            className="shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 bg-white/[0.06] hover:bg-white/[0.1] text-gray-300 hover:text-white border border-white/[0.06]"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
};

interface FlagToggleProps {
  flag: BootstrapFlag;
  active: boolean;
  disabled: boolean;
  onToggle: (flag: string) => void;
}

const FlagToggle: React.FC<FlagToggleProps> = ({
  flag,
  active,
  disabled,
  onToggle,
}) => {
  return (
    <div
      className={`flex items-center justify-between gap-4 transition-opacity duration-300 ${
        disabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'
      }`}
      onClick={() => onToggle(flag.flag)}
    >
      <div className="flex flex-col min-w-0">
        <span className="text-sm font-mono text-white truncate">
          {flag.flag}
        </span>
        <span className="text-xs text-gray-400">{flag.description}</span>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={active}
        disabled={disabled}
        className={`w-10 h-5 rounded-full relative shrink-0 transition-colors duration-200 ${
          active ? 'bg-accent' : 'bg-white/10'
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onToggle(flag.flag);
        }}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform duration-200 ${
            active ? 'translate-x-5' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
};
