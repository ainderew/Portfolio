#!/usr/bin/env bash
# Claude Code status line — inspired by Powerlevel10k p10k-classic layout
# Segments: user@host | dir | git branch | model | context usage | time

input=$(cat)

cwd=$(echo "$input" | jq -r '.workspace.current_dir // .cwd // ""')
model=$(echo "$input" | jq -r '.model.display_name // ""')
used_pct=$(echo "$input" | jq -r '.context_window.used_percentage // empty')

# --- user@host ---
user=$(whoami)
host=$(hostname -s)

# --- short dir (replace $HOME with ~) ---
short_dir="${cwd/#$HOME/\~}"

# --- git branch (skip optional locks) ---
git_branch=""
if git -C "$cwd" rev-parse --git-dir >/dev/null 2>&1; then
  git_branch=$(GIT_OPTIONAL_LOCKS=0 git -C "$cwd" symbolic-ref --short HEAD 2>/dev/null)
fi

# --- context bar (color-coded: green < 50%, yellow < 80%, red >= 80%) ---
ctx_segment=""
if [ -n "$used_pct" ]; then
  used_int=$(printf "%.0f" "$used_pct")
  if [ "$used_int" -ge 80 ]; then
    ctx_color=$'\033[0;31m'  # red
  elif [ "$used_int" -ge 50 ]; then
    ctx_color=$'\033[0;33m'  # yellow
  else
    ctx_color=$'\033[0;32m'  # green
  fi
  reset=$'\033[0m'
  ctx_segment=" | ${ctx_color}ctx ${used_int}%${reset}"
fi

# --- git segment ---
git_segment=""
if [ -n "$git_branch" ]; then
  git_segment=$' | \033[0;36m'"${git_branch}"$'\033[0m'
fi

# --- model segment ---
model_segment=""
if [ -n "$model" ]; then
  model_segment=$' | \033[0;35m'"${model}"$'\033[0m'
fi

# --- time ---
time_str=$(date +%H:%M)

printf "\033[0;33m%s@%s\033[0m \033[0;34m%s\033[0m%s%s%s | %s\n" \
  "$user" "$host" "$short_dir" "$git_segment" "$model_segment" "$ctx_segment" "$time_str"
