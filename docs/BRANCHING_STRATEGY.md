# Branching Strategy

This document outlines the Git branching strategy used in this project.

## Branch Types

### Main Branches

#### `main`
- **Purpose**: Production-ready code
- **Protection**: Protected branch (requires pull request and approvals)
- **Deployment**: Automatically deploys to GitHub Pages
- **Merges**: Only from `develop` branch via pull requests

#### `develop`
- **Purpose**: Integration branch for completed features
- **Protection**: Protected branch (requires pull request)
- **Merges**: From feature branches and hotfix branches
- **Status**: Should always be in a deployable state

### Supporting Branches

#### Feature Branches
- **Naming**: `feature/feature-name` or `feature/issue-number-feature-name`
- **Purpose**: Develop new features
- **Branch from**: `develop`
- **Merge to**: `develop` via pull request
- **Example**: `feature/user-authentication`, `feature/123-add-contact-form`

#### Hotfix Branches
- **Naming**: `hotfix/issue-description` or `hotfix/issue-number`
- **Purpose**: Fix critical bugs in production
- **Branch from**: `main`
- **Merge to**: Both `main` and `develop`
- **Example**: `hotfix/security-patch`, `hotfix/456-fix-navigation`

#### Release Branches
- **Naming**: `release/version-number` or `release/v1.0.0`
- **Purpose**: Prepare a new production release
- **Branch from**: `develop`
- **Merge to**: Both `main` and `develop`
- **Example**: `release/v1.2.0`

## Workflow

### Starting a New Feature

1. Ensure you're on the latest `develop` branch:
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. Create a new feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

4. Push your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

5. Create a pull request to merge into `develop`

### Completing a Feature

1. Ensure all tests pass and code is linted
2. Create a pull request from your feature branch to `develop`
3. Get code review approval
4. Merge the pull request
5. Delete the feature branch after merging

### Hotfix Workflow

1. Create a hotfix branch from `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b hotfix/issue-description
   ```

2. Make the fix and commit:
   ```bash
   git add .
   git commit -m "fix: description of the fix"
   ```

3. Create pull requests:
   - One to merge into `main`
   - One to merge into `develop`

4. After merging, delete the hotfix branch

## Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` - A new feature
- `fix:` - A bug fix
- `docs:` - Documentation only changes
- `style:` - Code style changes (formatting, missing semi-colons, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Changes to build process or auxiliary tools

Example:
```
feat: add user authentication
fix: resolve navigation menu issue
docs: update deployment instructions
```

## Branch Protection Rules

### Main Branch
- Require pull request reviews before merging
- Require status checks to pass before merging
- Require branches to be up to date before merging
- Do not allow force pushes
- Do not allow deletions

### Develop Branch
- Require pull request reviews before merging
- Require status checks to pass before merging
- Do not allow force pushes

## Best Practices

1. **Keep branches small**: Work on one feature or fix per branch
2. **Regular updates**: Regularly pull from `develop` to keep your branch up to date
3. **Clear naming**: Use descriptive branch names
4. **Clean history**: Use meaningful commit messages
5. **Test before merge**: Ensure all tests pass before creating a pull request
6. **Delete merged branches**: Clean up after merging to keep the repository tidy

