# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# Path to your Oh My Zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="powerlevel10k/powerlevel10k"

plugins=(git)

source $ZSH/oh-my-zsh.sh

# fzf shell integration (guarded)
if command -v fzf >/dev/null 2>&1; then
  source <(fzf --zsh)
fi

# Load aliases/functions
ZSHRC_CONFIG_DIR="${XDG_CONFIG_HOME:-$HOME/.config}/zsh"
if [[ -f "$ZSHRC_CONFIG_DIR/aliases.zsh" ]]; then
  source "$ZSHRC_CONFIG_DIR/aliases.zsh"
fi

# Prompt config
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

# nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Homebrew / Erlang
export PATH="/opt/homebrew/opt/erlang@26/bin:$PATH"
export PATH="$PATH:/opt/homebrew/sbin"

# pnpm
export PNPM_HOME="$HOME/Library/pnpm"
case ":$PATH:" in
  *":$PNPM_HOME:"*) ;;
  *) export PATH="$PNPM_HOME:$PATH" ;;
esac

# OrbStack (safe to ignore if not installed)
source ~/.orbstack/shell/init.zsh 2>/dev/null || :

# Local secrets (not tracked)
[[ -f "$HOME/.zshrc.secrets" ]] && source "$HOME/.zshrc.secrets"
