# Contributing Guidelines

This project uses a structured Git workflow with Jira integration, Conventional Commits, and Semantic Versioning.  
All contributors must follow the rules below to ensure code quality, traceability, and consistent releases.

## Tools and Standards

- Jira for issue tracking (project key: EWA)
- Conventional Commits for commit messages
- Semantic Versioning (SemVer 2.0.0) for release tagging
- Branch model: main → stage → production

---

## Branch Structure

| Branch      | Description                                 |
|-------------|---------------------------------------------|
| main        | Active development. All new work starts here. |
| stage       | QA and UAT testing before production.        |
| production  | Stable, production-ready code.               |
| feature/*   | New features, based on Jira tickets.         |
| bugfix/*    | Non-urgent fixes, based on Jira tickets.     |
| hotfix/*    | Urgent production fixes.                     |
| docs/*      | Documentation changes.                       |

---

## Branch Naming

Use the Jira issue key in your branch name.

Examples:  
````
- feature/EWA-123-login-form
- bugfix/EWA-145-header-alignment  
- hotfix/EWA-200-crash-on-homepage  
- docs/update-readme-guide (if no Jira ticket)
````
Use lowercase and hyphens for readability.

---

## Commit Message Format

We follow the Conventional Commits specification and include the Jira key in every commit message.

Format:  
````
type(scope): EWA-123 short summary
````

Examples:
````
- feat(auth): EWA-123 add login form  
- fix(header): EWA-145 fix layout on mobile  
- docs(readme): EWA-101 update contribution section  
- hotfix(api): EWA-200 handle crash when data is null
````
Allowed types:  
- feat – new feature  
- fix – bug fix
- chore – tooling or maintenance
- refactor – code restructuring
- docs – documentation changes
- test – adding or updating tests
- style – formatting only
- perf – performance improvements
- hotfix – urgent production fix

---

## Pull Requests

All code must be submitted via pull request.

Pull request requirements:
- Branch name includes Jira issue key
- PR title follows Conventional Commit format
- PR description includes a link to the Jira issue
- All CI checks must pass
- At least one reviewer must approve

Example PR title:
````
docs(readme): EWA-101 update contribution section
````
---

## Releasing to Stage and Production

1. Merge main into stage when work is ready for QA
2. After QA approval, merge stage into production
3. Tag the release on the production branch

---

## Semantic Versioning

We use Semantic Versioning 2.0.0.

Version format: 
````
v<MAJOR>.<MINOR>.<PATCH>
````

Examples:  
````
v1.0.0 – First public release  
v1.1.0 – New feature release  
v1.1.1 – Patch fix release
`````
Release tagging should be done on the production branch using:

```
git tag v1.4.0  
git push origin v1.4.0
```
Do not tag on main or stage.

---

## Branch Protection Rules

- No direct pushes to main, stage, or production
- All changes must go through pull requests
- Pull requests must:
    - Use correct branch naming
    - Follow Conventional Commit format
    - Include a Jira issue key
    - Pass all checks
    - Be approved by at least one reviewer

---

## Summary

- Start from a Jira ticket whenever possible
- Include the Jira key in branch names, commit messages, and PR titles
- Follow Conventional Commits strictly
- Tag production releases using vX.Y.Z format
- Never push directly to protected branches

If you are unsure about anything, check existing examples or ask your team lead.
