import type {
  Tool,
  ToolConnection,
  BootstrapFlag,
  SetupStep,
  CliAlias,
  Keybinding,
  SetupStat,
} from '../types/setup';

export const stats: SetupStat[] = [
  { value: '15+', label: 'CLI Tools' },
  { value: '75+', label: 'Nvim Plugins' },
  { value: 8, label: 'Config Files' },
  { value: 1, label: 'Command' },
];

export const tools: Tool[] = [
  {
    id: 'kitty',
    name: 'Kitty',
    category: 'terminal',
    icon: '/assets/setup/kitty.svg',
    description: 'GPU-accelerated terminal emulator',
    highlights: [
      'GPU rendering',
      'Ligature support',
      'Image protocol',
      'Tab powerline style',
    ],
    url: 'https://sw.kovidgoyal.net/kitty/',
  },
  {
    id: 'neovim',
    name: 'Neovim',
    category: 'editor',
    icon: '/assets/setup/neovim.svg',
    description: 'Hyperextensible Vim-based text editor via LazyVim',
    highlights: [
      'LazyVim distribution',
      'LSP + completion',
      'Telescope fuzzy finder',
      'Claude Code integration',
    ],
    url: 'https://neovim.io/',
  },
  {
    id: 'tmux',
    name: 'Tmux',
    category: 'multiplexer',
    icon: '/assets/setup/tmux.svg',
    description: 'Terminal multiplexer for persistent sessions',
    highlights: [
      'Vim-tmux-navigator',
      'Session resurrect',
      'Powerline theme',
      'Vi copy mode',
    ],
    url: 'https://github.com/tmux/tmux',
  },
  {
    id: 'zsh',
    name: 'Zsh + Oh My Zsh',
    category: 'shell',
    icon: '/assets/setup/zsh.svg',
    description: 'Shell framework with Powerlevel10k prompt',
    highlights: [
      'Powerlevel10k',
      'Auto-suggestions',
      'Syntax highlighting',
      'Custom aliases',
    ],
    url: 'https://ohmyz.sh/',
  },
  {
    id: 'ripgrep',
    name: 'ripgrep',
    category: 'cli',
    icon: '/assets/setup/cli.svg',
    description: 'Lightning-fast regex search across files',
    highlights: ['Respects .gitignore', 'Regex support', 'Parallelized'],
    url: 'https://github.com/BurntSushi/ripgrep',
  },
  {
    id: 'fzf',
    name: 'fzf',
    category: 'cli',
    icon: '/assets/setup/cli.svg',
    description: 'General-purpose command-line fuzzy finder',
    highlights: ['Shell integration', 'Bat preview', 'Neovim telescope'],
    url: 'https://github.com/junegunn/fzf',
  },
  {
    id: 'bat',
    name: 'bat',
    category: 'cli',
    icon: '/assets/setup/cli.svg',
    description: 'Cat clone with syntax highlighting and git integration',
    highlights: ['Syntax highlighting', 'Git diff', 'Line numbers'],
    url: 'https://github.com/sharkdp/bat',
  },
  {
    id: 'fd',
    name: 'fd',
    category: 'cli',
    icon: '/assets/setup/cli.svg',
    description: 'Fast, user-friendly alternative to find',
    highlights: ['Regex patterns', 'Ignores .gitignore', 'Colorized output'],
    url: 'https://github.com/sharkdp/fd',
  },
  {
    id: 'gh',
    name: 'GitHub CLI',
    category: 'cli',
    icon: '/assets/setup/github.svg',
    description: 'Official GitHub CLI for PRs, issues, and more',
    highlights: ['PR management', 'Issue tracking', 'Actions workflow'],
    url: 'https://cli.github.com/',
  },
  {
    id: 'difftastic',
    name: 'difftastic',
    category: 'cli',
    icon: '/assets/setup/cli.svg',
    description: 'Structural diff tool that understands syntax',
    highlights: ['AST-based diffs', 'Language-aware', 'Side-by-side'],
    url: 'https://difftastic.wilfred.me.uk/',
  },
  {
    id: 'ast-grep',
    name: 'ast-grep',
    category: 'cli',
    icon: '/assets/setup/cli.svg',
    description: 'Structural code search and lint tool',
    highlights: ['AST patterns', 'Multi-language', 'Code rewriting'],
    url: 'https://ast-grep.github.io/',
  },
  {
    id: 'zoxide',
    name: 'zoxide',
    category: 'cli',
    icon: '/assets/setup/cli.svg',
    description: 'Smarter cd command that learns your habits',
    highlights: ['Frecency algorithm', 'Shell integration', 'Fast lookups'],
    url: 'https://github.com/ajeetdsouza/zoxide',
  },
  {
    id: 'claude-code',
    name: 'Claude Code',
    category: 'other',
    icon: '/assets/setup/claude.svg',
    description: 'AI pair programmer with Neovim integration',
    highlights: [
      'Terminal-native',
      'Neovim plugin',
      'Custom CLAUDE.md',
      'Context-aware',
    ],
    url: 'https://claude.ai/code',
  },
  {
    id: 'git',
    name: 'Git',
    category: 'cli',
    icon: '/assets/setup/git.svg',
    description: 'Version control with conditional profile configs',
    highlights: [
      'Conditional includes',
      'Personal + work profiles',
      'SSH signing',
    ],
    url: 'https://git-scm.com/',
  },
];

export const toolConnections: ToolConnection[] = [
  {
    from: 'neovim',
    to: 'tmux',
    label: 'vim-tmux-navigator',
  },
  {
    from: 'neovim',
    to: 'claude-code',
    label: 'claudecode.nvim',
  },
  {
    from: 'kitty',
    to: 'tmux',
    label: 'True color passthrough',
  },
  {
    from: 'fzf',
    to: 'bat',
    label: 'Preview with syntax highlighting',
  },
];

export const bootstrapFlags: BootstrapFlag[] = [
  {
    flag: '--link-only',
    envVar: '--link-only',
    description: 'Only create symlinks, skip all installations',
    default: false,
  },
  {
    flag: 'SKIP_SSH',
    envVar: 'SKIP_SSH',
    description: 'Skip SSH key generation',
    default: false,
  },
  {
    flag: 'SKIP_BREW',
    envVar: 'SKIP_BREW',
    description: 'Skip Homebrew bundle install',
    default: false,
  },
  {
    flag: 'SKIP_NODE',
    envVar: 'SKIP_NODE',
    description: 'Skip Node.js installation via nvm',
    default: false,
  },
  {
    flag: 'SKIP_OBSIDIAN',
    envVar: 'SKIP_OBSIDIAN',
    description: 'Skip Obsidian vault clone',
    default: false,
  },
  {
    flag: 'SKIP_DEFAULTS',
    envVar: 'SKIP_DEFAULTS',
    description: 'Skip macOS system defaults',
    default: false,
  },
];

export const setupSteps: SetupStep[] = [
  {
    id: 1,
    title: 'Install Oh My Zsh',
    description: 'Shell framework + Powerlevel10k theme',
    detail: 'Installs Oh My Zsh, Powerlevel10k prompt, and Zsh plugins',
  },
  {
    id: 2,
    title: 'Generate SSH Key',
    description: 'Ed25519 key for GitHub authentication',
    detail: 'Creates SSH key pair and copies public key to clipboard',
    skippedBy: ['SKIP_SSH'],
  },
  {
    id: 3,
    title: 'Symlink Configs',
    description: 'Link all dotfiles to their target locations',
    detail:
      '.zshrc, .tmux.conf, nvim/, kitty/, .gitconfig, aliases.zsh, CLAUDE.md',
  },
  {
    id: 4,
    title: 'Install TPM',
    description: 'Tmux Plugin Manager',
    detail: 'Clones TPM for managing tmux plugins',
  },
  {
    id: 5,
    title: 'Create Secrets File',
    description: 'Template for API keys and tokens',
    detail: 'Copies .zshrc.secrets.example with 600 permissions',
  },
  {
    id: 6,
    title: 'Homebrew Bundle',
    description: 'Install all packages from Brewfile',
    detail:
      'git, ripgrep, fd, fzf, bat, gh, jq, zoxide, tmux, neovim, difftastic, ast-grep, kitty',
    skippedBy: ['SKIP_BREW'],
  },
  {
    id: 7,
    title: 'Install Node.js',
    description: 'LTS version via nvm',
    detail: 'Installs nvm and sets up the latest LTS Node version',
    skippedBy: ['SKIP_BREW', 'SKIP_NODE'],
  },
  {
    id: 8,
    title: 'Clone Obsidian Vault',
    description: 'Personal knowledge base',
    detail: 'Clones Obsidian vault via SSH to ~/Andrew_Notes',
    skippedBy: ['SKIP_OBSIDIAN'],
  },
  {
    id: 9,
    title: 'macOS Defaults',
    description: 'System preferences for development',
    detail: 'Applies opinionated macOS settings for a better dev experience',
    skippedBy: ['SKIP_DEFAULTS'],
  },
];

export const cliAliases: CliAlias[] = [
  {
    alias: 'f',
    command: 'nvim $(fzf -m --preview="bat --style=numbers --color=always {}")',
    description: 'Fuzzy-find files and open in Neovim with bat preview',
    category: 'general',
  },
  {
    alias: 'ta',
    command: 'tmux attach-session -t',
    description: 'Attach to a tmux session by name',
    category: 'tmux',
  },
  {
    alias: 'cc',
    command: 'claude',
    description: 'Launch Claude Code',
    category: 'claude',
  },
  {
    alias: 'ccc',
    command: 'claude --continue',
    description: 'Continue last Claude Code conversation',
    category: 'claude',
  },
  {
    alias: 'ccr',
    command: 'claude --resume',
    description: 'Resume a Claude Code conversation',
    category: 'claude',
  },
  {
    alias: 'ccp',
    command: 'claude --print',
    description: 'Print-only mode (no interactive)',
    category: 'claude',
  },
  {
    alias: 'tsfix',
    command:
      'for f in ~/.local/share/nvim/site/parser/*.so; do codesign --force --sign - "$f"; done',
    description: 'Re-sign nvim tree-sitter parsers (macOS fix)',
    category: 'general',
  },
  {
    alias: 'sft <n>',
    command: 'git switch "feature/CHART-$1"',
    description: 'Switch to a feature branch by ticket number',
    category: 'git',
  },
  {
    alias: 'cft <n>',
    command: 'git checkout -b "feature/CHART-$1"',
    description: 'Create a feature branch by ticket number',
    category: 'git',
  },
  {
    alias: 'c projects',
    command: 'cd ~/projects',
    description: 'Quick navigate to projects directory',
    category: 'navigation',
  },
];

export const keybindings: Keybinding[] = [
  // Tmux
  {
    keys: 'prefix + |',
    action: 'Split pane horizontally',
    context: 'tmux',
    category: 'Panes',
  },
  {
    keys: 'prefix + -',
    action: 'Split pane vertically',
    context: 'tmux',
    category: 'Panes',
  },
  {
    keys: 'prefix + m',
    action: 'Maximize/restore pane',
    context: 'tmux',
    category: 'Panes',
  },
  {
    keys: 'prefix + H/J/K/L',
    action: 'Resize pane (repeatable)',
    context: 'tmux',
    category: 'Panes',
  },
  {
    keys: 'prefix + c',
    action: 'New window (current dir)',
    context: 'tmux',
    category: 'Windows',
  },
  {
    keys: 'prefix + r',
    action: 'Reload tmux config',
    context: 'tmux',
    category: 'General',
  },
  {
    keys: 'prefix + v',
    action: 'Begin selection (copy mode)',
    context: 'tmux',
    category: 'Copy Mode',
  },
  {
    keys: 'prefix + y',
    action: 'Copy selection',
    context: 'tmux',
    category: 'Copy Mode',
  },
  {
    keys: 'Ctrl + h/j/k/l',
    action: 'Navigate between tmux panes and Neovim splits',
    context: 'tmux',
    category: 'Navigation',
  },

  // Neovim
  {
    keys: '<leader>bn',
    action: 'Close all buffers except current',
    context: 'neovim',
    category: 'Buffers',
  },
  {
    keys: '<leader>,',
    action: 'Add trailing comma + new line',
    context: 'neovim',
    category: 'Editing',
  },
  {
    keys: '<leader>T',
    action: 'Open terminal in insert mode',
    context: 'neovim',
    category: 'Terminal',
  },
  {
    keys: '<leader>zz',
    action: 'Close terminal buffer',
    context: 'neovim',
    category: 'Terminal',
  },
  {
    keys: 'ESC',
    action: 'Exit terminal mode',
    context: 'neovim',
    category: 'Terminal',
  },
  {
    keys: '<leader>ml',
    action: 'List GitLab MRs',
    context: 'neovim',
    category: 'GitLab',
  },
  {
    keys: '<leader>ma',
    action: 'Approve MR',
    context: 'neovim',
    category: 'GitLab',
  },
  {
    keys: '<leader>mr',
    action: 'Revoke MR approval',
    context: 'neovim',
    category: 'GitLab',
  },
  {
    keys: '<leader>mc',
    action: 'Comment on MR',
    context: 'neovim',
    category: 'GitLab',
  },
  {
    keys: 'Tab / S-Tab',
    action: 'Navigate completion menu',
    context: 'neovim',
    category: 'Completion',
  },
  {
    keys: 'Ctrl + /',
    action: 'Floating terminal (snacks.nvim)',
    context: 'neovim',
    category: 'Terminal',
  },

  // Kitty
  {
    keys: 'Cmd + T',
    action: 'New tab',
    context: 'kitty',
    category: 'Tabs',
  },
  {
    keys: 'Cmd + W',
    action: 'Close tab',
    context: 'kitty',
    category: 'Tabs',
  },
  {
    keys: 'Cmd + N',
    action: 'New OS window',
    context: 'kitty',
    category: 'Windows',
  },
  {
    keys: 'Cmd + Backspace',
    action: 'Delete line (sends Ctrl+U)',
    context: 'kitty',
    category: 'Editing',
  },
  {
    keys: 'Cmd + =',
    action: 'Increase font size',
    context: 'kitty',
    category: 'Font',
  },
  {
    keys: 'Cmd + -',
    action: 'Decrease font size',
    context: 'kitty',
    category: 'Font',
  },
  {
    keys: 'Cmd + 0',
    action: 'Reset font size',
    context: 'kitty',
    category: 'Font',
  },
  {
    keys: 'Cmd + F',
    action: 'Search scrollback with less',
    context: 'kitty',
    category: 'Search',
  },
];

export const toolCategoryLabels: Record<string, string> = {
  terminal: 'Terminal',
  editor: 'Editor',
  multiplexer: 'Multiplexer',
  shell: 'Shell',
  cli: 'CLI Tools',
  other: 'Other',
};

export const aliasCategoryLabels: Record<string, string> = {
  general: 'General',
  git: 'Git',
  navigation: 'Navigation',
  claude: 'Claude Code',
  tmux: 'Tmux',
};
