{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  },
  "permissions": {
    "allow": [
      "Bash(npx create-next-app:*)",
      "Bash(npm test:*)",
      "Bash(npm run:*)",
      "Bash(npx jest:*)",
      "Bash(npx tsc:*)",
      "Bash(git status:*)",
      "Bash(git diff:*)",
      "Bash(git log:*)",
      "Bash(git add:*)",
      "Bash(git commit:*)",
      "Bash(git checkout:*)",
      "Bash(git switch:*)",
      "Bash(git branch:*)",
      "Bash(git stash:*)",
      "Bash(git fetch:*)",
      "Bash(git merge:*)",
      "Bash(git rebase:*)",
      "Bash(git rev-parse:*)",
      "Bash(git show:*)",
      "Bash(tail:*)",
      "Bash(mkdir:*)",
      "Bash(cat:*)",
      "Bash(wc:*)",
      "Bash(which:*)",
      "Bash(node:*)",
      "Bash(npx:*)",
      "Bash(nvm:*)",
      "Bash(pwd:*)",
      "mcp__playwright__browser_navigate",
      "Bash(head:*)",
      "Bash(nvim:*)",
      "Bash(alias:*)",
      "Bash(zsh:*)",
      "Bash(codesign:*)",
      "Bash(echo:*)",
      "Bash(ls:*)",
      "Bash(brew upgrade:*)",
      "Bash(du:*)",
      "Bash(curl:*)",
      "Bash(python3:*)",
      "Bash(git clone:*)",
      "Bash(claude config:*)",
      "Bash(claude:*)",
      "Bash(cp:*)",
      "Bash(mv:*)",
      "Bash(touch:*)",
      "Bash(chmod:*)",
      "Bash(grep:*)",
      "Bash(find:*)",
      "Bash(sed:*)",
      "Bash(diff:*)",
      "Bash(ssh:*)",
      "Bash(docker:*)",
      "Bash(gh:*)",
      "Bash(git worktree:*)",
      "Bash(sort:*)",
      "Bash(uniq:*)",
      "Bash(xargs:*)",
      "Bash(tee:*)",
      "Bash(realpath:*)",
      "Bash(basename:*)",
      "Bash(dirname:*)",
      "Bash({{HOME}}/.local/bin/claude:*)",
      "Bash(pkill:*)"
    ],
    "defaultMode": "plan"
  },
  "hooks": {
    "UserPromptSubmit": [
      {
        "hooks": [
          {
            "type": "command",
            "command": "python3 {{HOME}}/.claude/hooks/carl-hook.py"
          }
        ]
      }
    ]
  },
  "statusLine": {
    "type": "command",
    "command": "bash {{HOME}}/.claude/statusline-command.sh"
  },
  "enabledPlugins": {
    "typescript-lsp@claude-plugins-official": true,
    "code-review@claude-code-plugins": true,
    "feature-dev@claude-code-plugins": true,
    "frontend-design@claude-code-plugins": true,
    "ralph-wiggum@claude-code-plugins": false,
    "figma@claude-plugins-official": true,
    "impeccable@impeccable": true
  },
  "extraKnownMarketplaces": {
    "impeccable": {
      "source": {
        "source": "github",
        "repo": "pbakaus/impeccable"
      }
    }
  },
  "effortLevel": "high",
  "skipDangerousModePermissionPrompt": true
}
