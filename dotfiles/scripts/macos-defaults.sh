#!/usr/bin/env bash
set -euo pipefail

# macOS defaults (safe, minimal set). You can expand over time.

# Show hidden files in Finder
defaults write com.apple.finder AppleShowAllFiles -bool true

# Show all filename extensions
defaults write NSGlobalDomain AppleShowAllExtensions -bool true

# Disable auto-correct
defaults write NSGlobalDomain NSAutomaticSpellingCorrectionEnabled -bool false

# Restart affected apps
killall Finder >/dev/null 2>&1 || true
