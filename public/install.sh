#!/usr/bin/env bash
set -e

REPO_URL="https://github.com/ainderew/Portfolio.git"
INSTALL_DIR="$HOME/.dotfiles"

# ANSI colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting setup...${NC}"

if [ -d "$INSTALL_DIR" ]; then
  echo -e "${BLUE}Directory $INSTALL_DIR already exists. Updating...${NC}"
  cd "$INSTALL_DIR"
  git pull
else
  echo -e "${BLUE}Cloning dotfiles to $INSTALL_DIR...${NC}"
  git clone --depth 1 --filter=blob:none --sparse "$REPO_URL" "$INSTALL_DIR"
  cd "$INSTALL_DIR"
  git sparse-checkout set dotfiles
fi

echo -e "${GREEN}Repository ready.${NC}"
echo -e "${BLUE}Running bootstrap script...${NC}"

# Ensure the script is executable
chmod +x ./dotfiles/scripts/bootstrap.sh
./dotfiles/scripts/bootstrap.sh
