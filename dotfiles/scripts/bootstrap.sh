#!/usr/bin/env bash
set -euo pipefail

DOTFILES_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OBSIDIAN_REPO_SSH="git@github.com:ainderew/Obsidian.git"
OBSIDIAN_DIR="$HOME/Andrew_Notes"
LINK_ONLY=0

if [ "${1:-}" = "--link-only" ]; then
  LINK_ONLY=1
fi

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

install_zsh_plugins() {
  local zsh_custom="${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}"
  local plugins=(zsh-autosuggestions zsh-syntax-highlighting)
  for plugin in "${plugins[@]}"; do
    local plugin_dir="$zsh_custom/plugins/$plugin"
    if [ ! -d "$plugin_dir" ]; then
      echo "Installing $plugin..."
      git clone --depth=1 "https://github.com/zsh-users/$plugin.git" "$plugin_dir"
    fi
  done
}

install_tpm() {
  local tpm_dir="$HOME/.tmux/plugins/tpm"
  if [ ! -d "$tpm_dir" ]; then
    echo "Installing TPM (tmux plugin manager)..."
    git clone --depth=1 https://github.com/tmux-plugins/tpm "$tpm_dir"
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
    echo "  Backing up $target -> ${target}.bak.${ts}"
    mv "$target" "${target}.bak.${ts}"
  fi
}

link_file() {
  local src="$1"
  local dest="$2"
  backup "$dest"
  mkdir -p "$(dirname "$dest")"
  ln -sfn "$src" "$dest"
  echo "  Linked $dest"
}

if [ "$LINK_ONLY" = "0" ]; then
  # 0) Shell framework + prompt theme + plugins
  install_oh_my_zsh
  install_powerlevel10k
  install_zsh_plugins

  # 0.5) SSH key (optional)
  if [ "${SKIP_SSH:-0}" = "0" ]; then
    ensure_ssh_key
  fi
fi

# Initialize git submodules (needed for nvim config, etc.)
echo "Initializing git submodules..."
git -C "$DOTFILES_DIR" submodule update --init --recursive

# 1) Symlink configs
echo "Linking config files..."
link_file "$DOTFILES_DIR/zsh/.zshrc" "$HOME/.zshrc"
link_file "$DOTFILES_DIR/zsh/.zprofile" "$HOME/.zprofile"
link_file "$DOTFILES_DIR/zsh/.p10k.zsh" "$HOME/.p10k.zsh"
link_file "$DOTFILES_DIR/tmux/.tmux.conf" "$HOME/.tmux.conf"
link_file "$DOTFILES_DIR/nvim" "$HOME/.config/nvim"
link_file "$DOTFILES_DIR/zsh/aliases.zsh" "$HOME/.config/zsh/aliases.zsh"
link_file "$DOTFILES_DIR/kitty" "$HOME/.config/kitty"
link_file "$DOTFILES_DIR/claude/CLAUDE.md" "$HOME/.claude/CLAUDE.md"
link_file "$DOTFILES_DIR/claude/keybindings.json" "$HOME/.claude/keybindings.json"
link_file "$DOTFILES_DIR/claude/statusline-command.sh" "$HOME/.claude/statusline-command.sh"
link_file "$DOTFILES_DIR/claude/mcp.json" "$HOME/.claude/mcp.json"
link_file "$DOTFILES_DIR/claude/hooks" "$HOME/.claude/hooks"
link_file "$DOTFILES_DIR/claude/commands" "$HOME/.claude/commands"
link_file "$DOTFILES_DIR/claude/agents" "$HOME/.claude/agents"
link_file "$DOTFILES_DIR/claude/skills" "$HOME/.claude/skills"

# Claude Code — templated configs (copy with path substitution)
for tpl in settings.json settings.local.json; do
  if [ ! -f "$HOME/.claude/$tpl" ] || [ -L "$HOME/.claude/$tpl" ]; then
    backup "$HOME/.claude/$tpl"
    sed "s|{{HOME}}|$HOME|g" "$DOTFILES_DIR/claude/${tpl}.tpl" > "$HOME/.claude/$tpl"
    echo "  Generated ~/.claude/$tpl"
  fi
done

# CARL rule system
for f in manifest global commands context example-custom-domain; do
  link_file "$DOTFILES_DIR/carl/$f" "$HOME/.carl/$f"
done
mkdir -p "$HOME/.carl/sessions"

link_file "$DOTFILES_DIR/git/.gitconfig" "$HOME/.gitconfig"
link_file "$DOTFILES_DIR/git/.gitconfig-personal" "$HOME/.gitconfig-personal"

if [ "$LINK_ONLY" = "0" ]; then
  # 2) TPM (tmux plugin manager)
  install_tpm

  # 3) Secrets template
  if [ ! -f "$HOME/.zshrc.secrets" ]; then
    cp "$DOTFILES_DIR/zsh/.zshrc.secrets.example" "$HOME/.zshrc.secrets"
    chmod 600 "$HOME/.zshrc.secrets"
  fi

  # 4) Claude Code plugins (requires claude CLI)
  if [ "${SKIP_CLAUDE_PLUGINS:-0}" = "0" ] && command -v claude >/dev/null 2>&1; then
    echo "Installing Claude Code plugins..."
    claude plugins install typescript-lsp@claude-plugins-official || true
    claude plugins install code-review@claude-code-plugins || true
    claude plugins install feature-dev@claude-code-plugins || true
    claude plugins install frontend-design@claude-code-plugins || true
    claude plugins install figma@claude-plugins-official || true
    claude plugins install impeccable@impeccable || true
  fi

  # 5) Homebrew bundle (if brew exists)
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

  # 5) Obsidian vault (optional)
  if [ "${SKIP_OBSIDIAN:-0}" = "0" ]; then
    if [ -d "$OBSIDIAN_DIR/.git" ]; then
      git -C "$OBSIDIAN_DIR" pull --ff-only
    else
      git clone "$OBSIDIAN_REPO_SSH" "$OBSIDIAN_DIR"
    fi
  fi

  # 6) macOS defaults (optional)
  if [ "${SKIP_DEFAULTS:-0}" = "0" ] && [ -f "$DOTFILES_DIR/scripts/macos-defaults.sh" ]; then
    bash "$DOTFILES_DIR/scripts/macos-defaults.sh" || true
  fi
fi

echo "Done. Open a new terminal session to pick up changes."
if [ "$LINK_ONLY" = "0" ]; then
  echo "- Fill in ~/.zshrc.secrets with your keys."
  echo "- Run 'prefix + I' inside tmux to install plugins."
fi
