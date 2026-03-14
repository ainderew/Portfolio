# Claude Code Configuration

<!-- CARL-MANAGED: Do not remove this section -->
## CARL Integration

Follow all rules in <carl-rules> blocks from system-reminders.
These are dynamically injected based on context and MUST be obeyed.
<!-- END CARL-MANAGED -->

## Tech Stack

- Full-stack JavaScript/TypeScript (Next.js, React, Node, Express)
- Tailwind CSS for styling
- Jest for testing
- Prettier + ESLint for formatting/linting
- LazyVim as Neovim distribution

## Code Preferences

- Use TypeScript with strict mode over plain JavaScript
- Prefer functional components with named exports
- Use arrow functions for callbacks, function declarations for top-level
- Prefer async/await over .then() chains
- Use early returns to reduce nesting
- Keep files focused and small — split when a file exceeds ~200 lines
- Prefer path aliases (e.g., `@/`) over deep relative imports — only when the repository already has them configured

## Project Navigation

- For multi-project repos, always check for a `CLAUDE.md` in the project root before starting work — it contains project-specific context

## Error Recovery

- If a lint/build check fails 2 times on the same issue, stop and ask the user rather than continuing to attempt fixes

## Testing

- Write tests alongside implementation when asked
- Use Jest with React Testing Library for component tests
- Prefer integration tests over unit tests for UI
- Name test files as `*.test.ts` or `*.test.tsx`

## Formatting

- Prettier handles formatting — do not manually format code
- Follow existing ESLint rules in each project
- 2-space indentation, single quotes, trailing commas

## CLI Tool Preferences

- Use `rg` (ripgrep) instead of `grep` for searching code
- Use `fd` instead of `find` for finding files
- Use `bat` instead of `cat` for reading files
- Use `sd` instead of `sed` for find-and-replace
- Use `gh` for all GitHub operations (PRs, issues, etc.)
- Use `jq` for parsing JSON
- Use `difftastic` (`difft`) for structural diffs
- Use `ast-grep` (`sg`) for structural code search
