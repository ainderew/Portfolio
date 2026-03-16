Deploy the current project branch to a target environment.

1. Check git status — ensure working tree is clean and branch is pushed
2. Identify the project from the current directory (check for CLAUDE.md or package.json)
3. Use the theoria-deploy MCP tools to:
   - List available targets
   - Trigger deployment of the current branch to the selected target
4. Monitor deployment status until complete
5. Report success/failure with deployment logs if needed

If no target is specified, ask which environment to deploy to.
