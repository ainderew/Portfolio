# Dotfiles

Workstation setup for macOS: zsh, tmux, Neovim, Claude Code, CARL, Homebrew, and sensible defaults.

## Quick start

```bash
git clone <your-repo>
cd <your-repo>
./dotfiles/scripts/bootstrap.sh
```

Then:

```bash
$EDITOR ~/.zshrc.secrets
```

Open a new terminal session.

## What gets installed

- Homebrew packages from `dotfiles/Brewfile`
- macOS defaults via `dotfiles/scripts/macos-defaults.sh`
- Oh My Zsh plugins (zsh-autosuggestions, zsh-syntax-highlighting)
- TPM (tmux plugin manager) — run `prefix + I` inside tmux to install plugins
- Claude Code plugins (typescript-lsp, code-review, feature-dev, frontend-design, figma, impeccable)
- Symlinks for:
  - `~/.zshrc`
  - `~/.zprofile`
  - `~/.p10k.zsh`
  - `~/.config/nvim`
  - `~/.tmux.conf`
  - `~/.config/zsh/aliases.zsh`
  - `~/.config/kitty`
  - `~/.claude/CLAUDE.md`
  - `~/.claude/keybindings.json`
  - `~/.claude/statusline-command.sh`
  - `~/.claude/mcp.json`
  - `~/.claude/hooks/` (CARL hook)
  - `~/.claude/commands/` (deploy, handoff, pr, carl manager)
  - `~/.claude/agents/` (lint-check)
  - `~/.claude/skills/` (carl-help, carl-manager)
  - `~/.carl/manifest`, `~/.carl/global`, `~/.carl/commands`, `~/.carl/context`
  - `~/.gitconfig`
  - `~/.gitconfig-personal`
- Templated (generated with `$HOME` substitution):
  - `~/.claude/settings.json`
  - `~/.claude/settings.local.json`

## Notes

- Secrets are **not** tracked. Keep them in `~/.zshrc.secrets`.
- If you want to keep server IPs private, use a private GitHub repo.
- Optional tools are commented in `dotfiles/Brewfile`.
