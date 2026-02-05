#!/usr/bin/env bash
set -euo pipefail

DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

backup() {
  local target="$1"
  if [ -e "$target" ] && [ ! -L "$target" ]; then
    local ts
    ts="$(date +%Y%m%d%H%M%S)"
    mv "$target" "${target}.bak.${ts}"
  fi
}

link_file() {
  local src="$1"
  local dest="$2"
  backup "$dest"
  mkdir -p "$(dirname "$dest")"
  ln -sfn "$src" "$dest"
}

# 1) Symlink configs
link_file "$DOTFILES_DIR/zsh/.zshrc" "$HOME/.zshrc"
link_file "$DOTFILES_DIR/zsh/.zprofile" "$HOME/.zprofile"
link_file "$DOTFILES_DIR/zsh/.p10k.zsh" "$HOME/.p10k.zsh"
link_file "$DOTFILES_DIR/tmux/.tmux.conf" "$HOME/.tmux.conf"
link_file "$DOTFILES_DIR/nvim" "$HOME/.config/nvim"
link_file "$DOTFILES_DIR/zsh/aliases.zsh" "$HOME/.config/zsh/aliases.zsh"

# 2) Secrets template
if [ ! -f "$HOME/.zshrc.secrets" ]; then
  cp "$DOTFILES_DIR/zsh/.zshrc.secrets.example" "$HOME/.zshrc.secrets"
  chmod 600 "$HOME/.zshrc.secrets"
fi

# 3) Homebrew bundle (if brew exists)
if [ "${SKIP_BREW:-0}" = "0" ]; then
  if command -v brew >/dev/null 2>&1; then
    brew bundle --file "$DOTFILES_DIR/Brewfile"
  else
    echo "Homebrew not found. Install it, then run: brew bundle --file $DOTFILES_DIR/Brewfile"
  fi
fi

# 4) macOS defaults (optional)
if [ "${SKIP_DEFAULTS:-0}" = "0" ] && [ -f "$DOTFILES_DIR/scripts/macos-defaults.sh" ]; then
  bash "$DOTFILES_DIR/scripts/macos-defaults.sh" || true
fi

cat <<'MSG'
Done.
- Open a new terminal session to pick up changes.
- Fill in ~/.zshrc.secrets with your keys.
MSG
