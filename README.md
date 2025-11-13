# Evident Solutions Website

A modern Next.js 14 website built with TypeScript, Tailwind CSS, and ESLint.

## Project Overview

This is a Next.js 14 project using the App Router architecture, providing a scalable foundation for building modern web applications. The project is configured with strict TypeScript settings, Tailwind CSS for styling, and ESLint for code quality.

## Tech Stack

- **Framework**: Next.js 14.2.33 (App Router)
- **Language**: TypeScript 5 (strict mode enabled)
- **Styling**: Tailwind CSS 3.4.1
- **Linting**: ESLint with Next.js configuration
- **Runtime**: Node.js 24.11.1

## Project Structure

```
evident-solutions-website/
├── app/                    # App Router directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── fonts/             # Font files
├── components/            # Reusable React components
│   └── README.md         # Components guidelines
├── lib/                   # Utility functions and helpers
│   └── README.md         # Lib guidelines
├── public/                # Static assets (if needed)
├── .eslintrc.json        # ESLint configuration
├── next.config.mjs        # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration (strict mode)

```

## Getting Started

### Prerequisites

- Node.js 18.17 or later (currently using 24.11.1)
- npm, yarn, pnpm, or bun

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run build:static` - Build static HTML export for GitHub Pages
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run deploy` - Build static site for deployment

## TypeScript Configuration

This project uses TypeScript with strict mode enabled. The configuration includes:

- **Strict mode**: All strict type checking options enabled
- **No unused locals**: Prevents unused local variables
- **No unused parameters**: Prevents unused function parameters
- **No fallthrough cases**: Prevents fallthrough in switch statements
- **Force consistent casing**: Ensures consistent file name casing
- **Path aliases**: `@/*` configured to point to the root directory

## Folder Structure Guidelines

### App Router (`app/`)
- Contains all routes and layouts using the App Router architecture
- Each folder represents a route segment
- `layout.tsx` files define shared layouts
- `page.tsx` files define page components

### Components (`components/`)
- Reusable React components that can be shared across the application
- Organize by feature or type (ui, layout, features)
- Use TypeScript interfaces for props

### Lib (`lib/`)
- Utility functions, helpers, and shared logic
- API helper functions
- Constants and configuration
- Shared TypeScript types

## Version Control

This project uses Git for version control with a structured branching strategy.

### Branching Strategy

- **`main`**: Production-ready code (automatically deploys to GitHub Pages)
- **`develop`**: Integration branch for completed features
- **`feature/*`**: Feature development branches
- **`hotfix/*`**: Critical bug fixes for production

For detailed information, see [BRANCHING_STRATEGY.md](docs/BRANCHING_STRATEGY.md).

### Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on:
- Development workflow
- Code standards
- Pull request process
- Commit message conventions

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Next.js App Router](https://nextjs.org/docs/app) - learn about the App Router
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## Deployment

This project is configured for deployment to GitHub Pages using GitHub Actions.

### GitHub Pages Setup

#### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select:
   - **Source**: `GitHub Actions`
4. Save the settings

#### 2. Automatic Deployment

The project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:

- Runs on every push to the `main` branch
- Runs on pull requests to `main` (for testing)
- Installs dependencies
- Runs linting checks
- Builds the static site
- Deploys to GitHub Pages

After enabling GitHub Pages and pushing to `main`, the workflow will automatically deploy your site.

#### 3. Access Your Site

Once deployed, your site will be available at:
- `https://your-username.github.io/evident-solutions-website/`

Or if using a custom domain:
- `https://your-custom-domain.com`

#### 4. Custom Domain Setup (Optional)

To use a custom domain:

1. Add a `CNAME` file to the `public/` folder with your domain:
   ```
   your-custom-domain.com
   ```

2. Update `next.config.mjs` and uncomment/update:
   ```javascript
   basePath: '/your-repo-name',  // Only if using subdirectory
   assetPrefix: '/your-repo-name',  // Only if using subdirectory
   ```

3. Configure DNS settings:
   - Add a `CNAME` record pointing to `your-username.github.io`
   - Or add `A` records for GitHub Pages IPs

4. In GitHub repository settings → Pages, enter your custom domain

#### 5. Manual Deployment

If you need to deploy manually:

```bash
npm run deploy
```

This will build the static site in the `out/` directory. You can then manually push the `out/` folder contents to the `gh-pages` branch if needed.

### Build Output

The static export is generated in the `out/` directory, which contains:
- Static HTML files
- CSS and JavaScript assets
- All public assets

### CI/CD Pipeline

The GitHub Actions workflow includes:

- **Build Job**: Installs dependencies, lints code, and builds the static site
- **Deploy Job**: Deploys the built site to GitHub Pages (only on `main` branch)

### Troubleshooting

- **Build fails**: Check the GitHub Actions logs for errors
- **Site not updating**: Ensure the workflow completed successfully
- **404 errors**: Verify `basePath` and `assetPrefix` are correctly configured if using a subdirectory
- **Images not loading**: Ensure `images.unoptimized: true` is set in `next.config.mjs` (already configured)

### Alternative Deployment Options

You can also deploy to:
- [Vercel](https://vercel.com/new) - Recommended for Next.js apps with server features
- [Netlify](https://www.netlify.com/) - Another popular static site host
- Any static hosting service that supports static HTML exports

For more information, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).
