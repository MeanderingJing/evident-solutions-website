# Contributing to Evident Solutions Website

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## Development Workflow

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun
- Git
- A GitHub account

### Getting Started

1. **Fork the repository** on GitHub

2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/evident-solutions-website.git
   cd evident-solutions-website
   ```

3. **Add the upstream repository**:
   ```bash
   git remote add upstream https://github.com/original-owner/evident-solutions-website.git
   ```

4. **Install dependencies**:
   ```bash
   npm install
   ```

5. **Create a new branch** from `develop`:
   ```bash
   git checkout develop
   git pull upstream develop
   git checkout -b feature/your-feature-name
   ```

### Development Process

1. **Make your changes**
   - Write clean, readable code
   - Follow the existing code style
   - Add comments where necessary
   - Update documentation if needed

2. **Test your changes**:
   ```bash
   npm run lint      # Check for linting errors
   npm run build     # Ensure the build succeeds
   npm run dev       # Test locally
   ```

3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```
   
   Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation
   - `style:` - Code style
   - `refactor:` - Code refactoring
   - `test:` - Tests
   - `chore:` - Build/tooling changes

4. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**:
   - Go to the original repository on GitHub
   - Click "New Pull Request"
   - Select your branch
   - Fill out the pull request template
   - Request review from maintainers

### Code Standards

#### TypeScript
- Use TypeScript strict mode
- Define types and interfaces for all props and data structures
- Avoid `any` types
- Use meaningful variable and function names

#### React Components
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use TypeScript interfaces for props

#### Styling
- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography

#### File Organization
- Place components in `components/` directory
- Place utilities in `lib/` directory
- Use the App Router structure in `app/` directory

### Pull Request Guidelines

1. **Title**: Use a clear, descriptive title
2. **Description**: Explain what changes you made and why
3. **Testing**: Describe how you tested your changes
4. **Screenshots**: Include screenshots for UI changes
5. **Checklist**: Complete the pull request checklist

#### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] I have tested locally
- [ ] All tests pass
- [ ] Linting passes

## Checklist
- [ ] Code follows the project style guidelines
- [ ] I have commented my code where necessary
- [ ] I have updated the documentation accordingly
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective
```

### Review Process

1. **Automated Checks**: All pull requests must pass:
   - Linting checks
   - Build checks
   - Type checking

2. **Code Review**: At least one maintainer must approve
   - Address all review comments
   - Make requested changes
   - Respond to feedback

3. **Merge**: Once approved, a maintainer will merge your PR

### Reporting Issues

When reporting bugs or requesting features:

1. **Check existing issues** to avoid duplicates
2. **Use the issue template** provided
3. **Provide clear information**:
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots (if applicable)
   - Environment details

### Getting Help

- Check the [README.md](README.md) for project documentation
- Review [BRANCHING_STRATEGY.md](docs/BRANCHING_STRATEGY.md) for Git workflow
- Open an issue for questions or discussions

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Celebrate contributions of all kinds

Thank you for contributing! 🎉

