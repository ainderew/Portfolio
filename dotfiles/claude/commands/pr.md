Create a pull request for the current branch.

1. Run git status and git log to understand all changes since diverging from main
2. Ensure all changes are committed — if not, ask whether to commit first
3. Push the branch to origin if not already pushed
4. Create a PR using `gh pr create` with:
   - A concise title (under 70 chars)
   - A body with ## Summary (bullet points of changes) and ## Test plan
5. Return the PR URL
