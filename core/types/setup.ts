export type ToolCategory =
  | 'terminal'
  | 'editor'
  | 'multiplexer'
  | 'shell'
  | 'cli'
  | 'other';

export interface Tool {
  id: string;
  name: string;
  category: ToolCategory;
  icon: string;
  description: string;
  highlights: string[];
  url?: string;
}

export interface ToolConnection {
  from: string;
  to: string;
  label: string;
}

export interface BootstrapFlag {
  flag: string;
  envVar: string;
  description: string;
  default: boolean;
}

export interface SetupStep {
  id: number;
  title: string;
  description: string;
  detail: string;
  skippedBy?: string[];
}

export interface ConfigFile {
  id: string;
  label: string;
  filename: string;
  language: string;
  content: string;
}

export type AliasCategory =
  | 'general'
  | 'git'
  | 'navigation'
  | 'claude'
  | 'tmux';

export interface CliAlias {
  alias: string;
  command: string;
  description: string;
  category: AliasCategory;
}

export type KeybindingContext = 'tmux' | 'neovim' | 'kitty';

export interface Keybinding {
  keys: string;
  action: string;
  context: KeybindingContext;
  category?: string;
}

export interface SetupStat {
  value: string | number;
  label: string;
}
