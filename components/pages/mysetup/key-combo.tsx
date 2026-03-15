import React from 'react';

interface KeyComboProps {
  keys: string;
}

function parseKeys(keys: string): string[] {
  // If the string contains " + ", split on that
  if (keys.includes(' + ')) {
    return keys.split(' + ').map((k) => k.trim());
  }

  // Handle special patterns like "<leader>bn" -> ["<leader>", "bn"]
  const leaderMatch = keys.match(/^(<[^>]+>)(.+)$/);
  if (leaderMatch) {
    return [leaderMatch[1], leaderMatch[2]];
  }

  // Handle " / " separators like "Tab / S-Tab"
  if (keys.includes(' / ')) {
    return keys.split(' / ').map((k) => k.trim());
  }

  // Single key
  return [keys];
}

export const KeyCombo: React.FC<KeyComboProps> = ({ keys }) => {
  const parts = parseKeys(keys);
  const separator = keys.includes(' / ') ? '/' : '+';

  return (
    <span className="inline-flex items-center gap-1.5 flex-wrap">
      {parts.map((key, i) => (
        <React.Fragment key={i}>
          {i > 0 && (
            <span className="text-white/30 text-xs">{separator}</span>
          )}
          <kbd className="inline-flex items-center justify-center bg-white/10 border border-white/20 rounded px-2 py-1 font-mono text-xs min-w-[28px] text-white/80">
            {key}
          </kbd>
        </React.Fragment>
      ))}
    </span>
  );
};
