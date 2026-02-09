#!/usr/bin/env bash
set -euo pipefail

DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OBSIDIAN_REPO_SSH="git@github.com:ainderew/Obsidian.git"
OBSIDIAN_DIR="$HOME/Andrew_Notes"

install_oh_my_zsh() {
  if [ ! -d "$HOME/.oh-my-zsh" ]; then
    echo "Installing Oh My Zsh..."
    RUNZSH=no CHSH=no KEEP_ZSHRC=yes sh -c \
      "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
  fi
}

install_powerlevel10k() {
  local zsh_custom="${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}"
  local theme_dir="$zsh_custom/themes/powerlevel10k"
  if [ ! -d "$theme_dir" ]; then
    echo "Installing Powerlevel10k..."
    git clone --depth=1 https://github.com/romkatv/powerlevel10k.git "$theme_dir"
  fi
}

ensure_ssh_key() {
  local key_path="$HOME/.ssh/id_ed25519"
  if [ ! -f "$key_path" ]; then
    mkdir -p "$HOME/.ssh"
    local email
    email="$(git config --global user.email || true)"
    if [ -z "$email" ]; then
      email="andrew@$(hostname)"
    fi
    echo "Generating SSH key..."
    ssh-keygen -t ed25519 -C "$email" -f "$key_path" -N ""
  fi

  echo "SSH public key:"
  cat "$key_path.pub"

  if command -v pbcopy >/dev/null 2>&1; then
    pbcopy < "$key_path.pub"
    echo "Copied public key to clipboard."
  else
    echo "Copy the key above and add it to GitHub."
  fi

  echo "Add the key at: https://github.com/settings/keys"
  read -r -p "Press Enter after adding the key to GitHub..."
}

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

# 0) Shell framework + prompt theme
install_oh_my_zsh
install_powerlevel10k

# 0.5) SSH key (optional)
if [ "${SKIP_SSH:-0}" = "0" ]; then
  ensure_ssh_key
fi

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

    # Optional: install Node via nvm
    if [ "${SKIP_NODE:-0}" = "0" ]; then
      export NVM_DIR="$HOME/.nvm"
      mkdir -p "$NVM_DIR"
      if [ -s "$(brew --prefix nvm)/nvm.sh" ]; then
        # shellcheck disable=SC1090
        . "$(brew --prefix nvm)/nvm.sh"
        nvm install --lts
        nvm use --lts
      fi
    fi
  else
    echo "Homebrew not found. Install it, then run: brew bundle --file $DOTFILES_DIR/Brewfile"
  fi
fi

# 4) Obsidian vault (optional)
if [ "${SKIP_OBSIDIAN:-0}" = "0" ]; then
  if [ -d "$OBSIDIAN_DIR/.git" ]; then
    git -C "$OBSIDIAN_DIR" pull --ff-only
  else
    git clone "$OBSIDIAN_REPO_SSH" "$OBSIDIAN_DIR"
  fi
fi

# 4) macOS defaults (optional)
if [ "${SKIP_DEFAULTS:-0}" = "0" ] && [ -f "$DOTFILES_DIR/scripts/macos-defaults.sh" ]; then
  bash "$DOTFILES_DIR/scripts/macos-defaults.sh" || true
fi

# 5) iTerm2 config
# Tell iTerm2 to use the custom folder for preferences
defaults write com.googlecode.iterm2 PrefsCustomFolder -string "$DOTFILES_DIR/iterm"
# Tell iTerm2 to load the preferences from the custom folder
defaults write com.googlecode.iterm2 LoadPrefsFromCustomFolder -bool true

cat <<'MSG'
Done.
- Open a new terminal session to pick up changes.
- Fill in ~/.zshrc.secrets with your keys.
- iTerm2 is now configured to load preferences from ~/.dotfiles/iterm.
  - To sync your current profile, save it there or configure iTerm2 > Preferences > General > Preferences > Load preferences from a custom folder.
MSG
