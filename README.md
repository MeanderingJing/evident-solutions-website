# Evident Solutions Website

A modern, production-ready Next.js 14 website for Evident Solutions LLC, built with TypeScript, Tailwind CSS, and comprehensive testing infrastructure.

## Project Overview

This is a professional website for Evident Solutions LLC, a company specializing in test automation and quality assurance solutions. The website showcases services, company information, and provides a contact form for potential clients.

### Key Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with comprehensive design system
- **Comprehensive Testing**: Unit, integration, and E2E tests with Jest and Playwright
- **SEO Optimized**: Metadata API for all pages
- **Form Handling**: Contact form with Server Actions and client-side validation
- **CI/CD**: Automated deployment to GitHub Pages via GitHub Actions
- **Type Safety**: Strict TypeScript configuration
- **Code Quality**: ESLint, pre-commit hooks, and lint-staged

## Tech Stack

### Core Framework
- **Next.js**: 14.2.33 (App Router architecture)
- **React**: 19.2.0
- **TypeScript**: 5 (strict mode enabled)

### Styling & UI
- **Tailwind CSS**: 3.4.1 (utility-first CSS framework)
- **Custom Design System**: Brand colors, typography scale, reusable components

### Form Handling & Validation
- **React Hook Form**: 7.66.0 (form state management)
- **Zod**: 4.1.12 (schema validation)
- **@hookform/resolvers**: 5.2.2 (Zod resolver for React Hook Form)

### Testing
- **Jest**: 29.7.0 (unit and integration testing)
- **React Testing Library**: 16.3.0 (component testing)
- **Playwright**: 1.41.1 (end-to-end testing)
- **@testing-library/jest-dom**: 6.9.1 (DOM matchers)
- **@testing-library/user-event**: 14.5.1 (user interaction simulation)

### Development Tools
- **ESLint**: 9.39.1 (code linting)
- **eslint-config-next**: 14.2.33 (Next.js ESLint configuration)
- **Husky**: 9.1.7 (Git hooks)
- **lint-staged**: 15.5.2 (run linters on staged files)

### Runtime
- **Node.js**: 18.17+ (currently using 24.11.1)

## Getting Started

### Prerequisites

- **Node.js**: 18.17 or later (LTS version recommended)
- **npm**: 9.0.0 or later (comes with Node.js)
- **Git**: For version control

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/evident-solutions-website.git
   cd evident-solutions-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Verify installation**:
   ```bash
   npm run test
   ```

### Development

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page auto-updates as you edit files. Hot Module Replacement (HMR) is enabled for instant feedback.

## Development Workflow

### Branching Strategy

We follow a Git Flow-inspired branching strategy:

- **`main`**: Production-ready code (automatically deploys to GitHub Pages)
- **`develop`**: Integration branch for completed features
- **`feature/*`**: Feature development branches (e.g., `feature/contact-form`)
- **`hotfix/*`**: Critical bug fixes for production (e.g., `hotfix/security-patch`)

For detailed information, see [BRANCHING_STRATEGY.md](docs/BRANCHING_STRATEGY.md).

### Workflow Steps

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and commit:
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

3. **Run tests** before pushing:
   ```bash
   npm run test
   npm run lint
   ```

4. **Push and create a Pull Request**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **After PR approval**, merge to `develop` or `main`

### Pre-commit Hooks

Husky automatically runs:
- ESLint on staged files
- Tests (if configured)
- Code formatting checks

To bypass hooks (not recommended):
```bash
git commit --no-verify
```

## Available Scripts

### Development

- `npm run dev` - Start the development server on http://localhost:3000
- `npm run build` - Build the application for production
- `npm run build:static` - Build static HTML export for GitHub Pages
- `npm run start` - Start the production server (requires build first)
- `npm run lint` - Run ESLint to check code quality

### Testing

- `npm run test` - Run all unit and integration tests
- `npm run test:watch` - Run tests in watch mode (re-runs on file changes)
- `npm run test:coverage` - Generate test coverage report
- `npm run test:unit` - Run only unit tests
- `npm run test:integration` - Run integration tests
- `npm run test:e2e` - Run end-to-end tests with Playwright
- `npm run test:e2e:ui` - Run E2E tests with interactive UI
- `npm run test:e2e:headed` - Run E2E tests in headed mode (see browser)
- `npm run test:all` - Run all tests (unit + E2E) with coverage

### Deployment

- `npm run deploy` - Build static site for deployment (creates `out/` directory)

## Testing

This project includes a comprehensive testing setup following Test-Driven Development (TDD) principles.

### Testing Strategy

- **Unit Tests**: Test individual functions and utilities
- **Component Tests**: Test React components in isolation
- **Integration Tests**: Test component interactions
- **E2E Tests**: Test complete user flows with Playwright

### Quick Start

Run all tests:
```bash
npm run test
```

Run tests with coverage:
```bash
npm run test:coverage
```

Run E2E tests:
```bash
npm run test:e2e
```

### Writing Tests

We follow TDD (Test-Driven Development) principles:

1. Write tests first
2. Run tests (they should fail)
3. Implement the feature
4. Run tests (they should pass)
5. Refactor if needed

For detailed testing documentation, see [TESTING.md](docs/TESTING.md).

## Deployment

This project is configured for deployment to GitHub Pages using GitHub Actions.

### Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:

- Runs on every push to the `main` branch
- Runs on pull requests to `main` (for testing)
- Installs dependencies
- Runs linting checks
- Builds the static site
- Deploys to GitHub Pages

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

This creates a static export in the `out/` directory.

### Environment Variables

Currently, no environment variables are required for basic functionality. Future additions may include:

- `NEXT_PUBLIC_API_URL` - API endpoint URL
- `CONTACT_FORM_ENDPOINT` - Contact form submission endpoint
- `ANALYTICS_ID` - Analytics tracking ID

Create a `.env.local` file for local development:

```env
# Example (not currently used)
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

**Note**: Never commit `.env.local` to version control. It's already in `.gitignore`.

For detailed deployment documentation, see [DEPLOYMENT.md](docs/DEPLOYMENT.md).

## Project Structure

```
evident-solutions-website/
├── app/                    # App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   │   ├── page.tsx
│   │   └── __tests__/
│   ├── contact/           # Contact page
│   │   ├── page.tsx
│   │   ├── actions.ts     # Server Actions
│   │   └── __tests__/
│   ├── globals.css        # Global styles
│   └── fonts/             # Font files
├── components/            # Reusable React components
│   ├── Button/           # Button component
│   ├── Card/             # Card component
│   ├── Container/        # Container component
│   ├── ContactForm/      # Contact form component
│   ├── Footer/           # Footer component
│   ├── Layout/           # Layout wrapper
│   └── Navbar/           # Navigation bar
├── lib/                   # Utility functions and helpers
│   ├── utils.ts          # Utility functions
│   └── __tests__/
├── docs/                  # Documentation
│   ├── ARCHITECTURE.md   # Architecture documentation
│   ├── BRANCHING_STRATEGY.md
│   ├── DEPLOYMENT.md     # Deployment guide
│   ├── DESIGN_SYSTEM.md  # Design system
│   ├── ROADMAP.md        # Future features
│   └── TESTING.md        # Testing guide
├── e2e/                  # End-to-end tests
├── public/               # Static assets
├── .github/             # GitHub Actions workflows
│   └── workflows/
│       └── deploy.yml
├── .eslintrc.json       # ESLint configuration
├── jest.config.js        # Jest configuration
├── jest.setup.js        # Jest setup file
├── next.config.mjs      # Next.js configuration
├── package.json         # Dependencies and scripts
├── playwright.config.ts # Playwright configuration
├── postcss.config.mjs   # PostCSS configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

For detailed architecture documentation, see [ARCHITECTURE.md](docs/ARCHITECTURE.md).

## TypeScript Configuration

This project uses TypeScript with strict mode enabled. The configuration includes:

- **Strict mode**: All strict type checking options enabled
- **No unused locals**: Prevents unused local variables
- **No unused parameters**: Prevents unused function parameters
- **No fallthrough cases**: Prevents fallthrough in switch statements
- **Force consistent casing**: Ensures consistent file name casing
- **Path aliases**: `@/*` configured to point to the root directory

## Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:

- Development workflow
- Code standards
- Pull request process
- Commit message conventions

## Documentation

- [ARCHITECTURE.md](docs/ARCHITECTURE.md) - Architecture and design decisions
- [TESTING.md](docs/TESTING.md) - Testing strategy and guide
- [DEPLOYMENT.md](docs/DEPLOYMENT.md) - Deployment process
- [DESIGN_SYSTEM.md](docs/DESIGN_SYSTEM.md) - Design system and components
- [BRANCHING_STRATEGY.md](docs/BRANCHING_STRATEGY.md) - Git workflow
- [ROADMAP.md](docs/ROADMAP.md) - Future features and enhancements

## Learn More

### Framework & Tools
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Next.js App Router](https://nextjs.org/docs/app) - Learn about the App Router
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript guide
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Tailwind CSS reference
- [React Documentation](https://react.dev) - React guide

### Testing
- [Jest Documentation](https://jestjs.io/docs/getting-started) - Jest testing framework
- [React Testing Library](https://testing-library.com/react) - Component testing
- [Playwright Documentation](https://playwright.dev) - E2E testing

## License

This project is private and proprietary to Evident Solutions LLC.

## Support

For questions or issues, please open an issue on GitHub or contact the development team.
