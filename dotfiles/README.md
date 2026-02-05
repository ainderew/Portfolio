# Dotfiles

Workstation setup for macOS: zsh, tmux, Neovim, Homebrew, and sensible defaults.

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
- Symlinks for:
  - `~/.zshrc`
  - `~/.zprofile`
  - `~/.p10k.zsh`
  - `~/.config/nvim`
  - `~/.tmux.conf`
  - `~/.config/zsh/aliases.zsh`

## Notes

- Secrets are **not** tracked. Keep them in `~/.zshrc.secrets`.
- If you want to keep server IPs private, use a private GitHub repo.
- Optional tools are commented in `dotfiles/Brewfile`.
