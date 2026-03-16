Create a handoff document for the current feature work.

1. Analyze recent git commits on this branch (all commits since diverging from main)
2. Read changed files to understand the full scope of work
3. Generate a handoff markdown file at `docs/handoffs/<feature-name>-handoff.md` with:
   - **Summary**: What was built and why
   - **Files changed**: Grouped by area (backend, frontend, shared)
   - **Architecture decisions**: Key design choices made
   - **How it works**: Brief explanation of the flow
   - **Testing**: How to verify the feature works
   - **Known issues / TODOs**: Anything left incomplete
   - **Dependencies**: New packages or services added
4. Follow the format of existing handoff docs in the project if any exist
