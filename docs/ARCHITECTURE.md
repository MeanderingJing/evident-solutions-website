# Architecture Documentation

This document explains the architecture, folder structure, and design decisions for the Evident Solutions website.

## Overview

The project follows Next.js 14 App Router architecture with a component-based, modular structure. It emphasizes type safety, testability, and maintainability.

## Folder Structure

```
evident-solutions-website/
├── app/                          # Next.js App Router directory
│   ├── layout.tsx               # Root layout (metadata, fonts, global styles)
│   ├── page.tsx                  # Home page route (/)
│   ├── globals.css               # Global CSS styles
│   ├── fonts/                    # Custom font files
│   ├── about/                    # About page route (/about)
│   │   ├── page.tsx
│   │   └── __tests__/
│   └── contact/                  # Contact page route (/contact)
│       ├── page.tsx
│       ├── actions.ts            # Server Actions for form submission
│       └── __tests__/
├── components/                   # Reusable React components
│   ├── Button/                   # Button component
│   │   ├── Button.tsx
│   │   └── __tests__/
│   ├── Card/                     # Card component
│   ├── Container/                # Container component
│   ├── ContactForm/              # Contact form component
│   ├── Footer/                   # Footer component
│   ├── Layout/                   # Layout wrapper component
│   └── Navbar/                   # Navigation bar component
├── lib/                          # Utility functions and helpers
│   ├── utils.ts                  # Utility functions
│   └── __tests__/
├── docs/                         # Documentation
├── e2e/                          # End-to-end tests (Playwright)
├── public/                       # Static assets
└── Configuration files...
```

## Design Decisions

### 1. App Router Architecture

**Decision**: Use Next.js 14 App Router instead of Pages Router

**Rationale**:
- Modern React Server Components support
- Better performance with automatic code splitting
- Improved SEO with Server Components
- Built-in support for layouts and nested routes
- Better TypeScript support

**Implementation**:
- Each route is a folder with a `page.tsx` file
- Shared layouts use `layout.tsx` files
- Server Actions are co-located with routes

### 2. Component Organization

**Decision**: Organize components by feature/type in individual folders

**Rationale**:
- Each component has its own folder with tests
- Easy to find related files (component + tests)
- Scalable as the project grows
- Clear separation of concerns

**Structure**:
```
ComponentName/
├── ComponentName.tsx
└── __tests__/
    └── ComponentName.test.tsx
```

### 3. TypeScript Strict Mode

**Decision**: Enable all TypeScript strict mode options

**Rationale**:
- Catch errors at compile time
- Better IDE support and autocomplete
- Self-documenting code
- Prevents common JavaScript pitfalls

**Configuration**:
- `strict: true` in `tsconfig.json`
- Additional strict checks enabled
- Path aliases for cleaner imports (`@/*`)

### 4. Design System

**Decision**: Create a custom design system with Tailwind CSS

**Rationale**:
- Consistent UI across the application
- Easy to maintain and update
- Reusable components
- Brand identity consistency

**Implementation**:
- Custom color palette in `tailwind.config.ts`
- Typography scale defined
- Reusable components (Button, Card, etc.)
- Design tokens for spacing, colors, typography

### 5. Testing Strategy

**Decision**: Comprehensive testing with TDD approach

**Rationale**:
- Catch bugs early
- Ensure code quality
- Enable confident refactoring
- Document expected behavior

**Layers**:
1. **Unit Tests**: Test individual functions
2. **Component Tests**: Test React components
3. **Integration Tests**: Test component interactions
4. **E2E Tests**: Test complete user flows

### 6. Server Actions for Form Handling

**Decision**: Use Server Actions instead of API routes for form submissions

**Rationale**:
- Simpler code (no API route needed)
- Type-safe with TypeScript
- Better performance (no client-server round trip)
- Works with static export (for GitHub Pages)

**Implementation**:
- Server Actions in `app/contact/actions.ts`
- Client-side validation with React Hook Form + Zod
- Server-side processing in Server Actions

### 7. Static Export Configuration

**Decision**: Configure Next.js for static HTML export

**Rationale**:
- Deploy to GitHub Pages (free hosting)
- Fast page loads (static files)
- No server required
- Works with CDN

**Trade-offs**:
- No server-side features (API routes, middleware)
- No dynamic routes at build time
- Images must be unoptimized

## Key Patterns

### 1. Component Pattern

All components follow this pattern:

```tsx
'use client'; // Only if needed for interactivity

import { ComponentProps } from './types';

/**
 * Component description
 * @component
 */
export default function Component({ prop }: ComponentProps) {
  // Implementation
}
```

### 2. Page Pattern

All pages follow this pattern:

```tsx
import { Metadata } from 'next';
import Layout from '@/components/Layout/Layout';

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
};

export default function Page() {
  return (
    <Layout>
      {/* Page content */}
    </Layout>
  );
}
```

### 3. Server Action Pattern

Server Actions follow this pattern:

```tsx
'use server';

import type { FormData } from '@/types';

export async function actionName(data: FormData): Promise<void> {
  // Server-side logic
}
```

### 4. Test Pattern

Tests follow TDD principles:

```tsx
describe('Component', () => {
  describe('Feature', () => {
    it('should do something', () => {
      // Test implementation
    });
  });
});
```

## Data Flow

### Client-Side Flow

1. User interacts with UI
2. Client component handles interaction
3. React Hook Form validates input
4. On submit, calls Server Action
5. Server Action processes request
6. Response updates UI state

### Server-Side Flow

1. Server Action receives data
2. Validates data (if needed)
3. Processes request (save to DB, send email, etc.)
4. Returns success/error
5. Client updates UI accordingly

## State Management

**Decision**: Use React's built-in state management

**Rationale**:
- Simple use cases don't need complex state management
- React hooks (useState, useForm) are sufficient
- No external dependencies needed
- Easy to understand and maintain

**Future Consideration**:
- If state becomes complex, consider Zustand or React Context
- For server state, consider React Query or SWR

## Styling Approach

**Decision**: Tailwind CSS utility-first approach

**Rationale**:
- Fast development
- Consistent spacing and colors
- No CSS conflicts
- Easy to maintain
- Small bundle size with purging

**Customization**:
- Design tokens in `tailwind.config.ts`
- Custom components for repeated patterns
- Global styles in `app/globals.css`

## Performance Optimizations

1. **Static Export**: Pre-rendered pages for fast loading
2. **Code Splitting**: Automatic with Next.js App Router
3. **Image Optimization**: Disabled for static export (use optimized images manually)
4. **Font Optimization**: Next.js font optimization for custom fonts
5. **CSS Purging**: Tailwind automatically removes unused CSS

## Security Considerations

1. **Server Actions**: Validate all inputs server-side
2. **Type Safety**: TypeScript prevents many security issues
3. **No Sensitive Data**: No API keys or secrets in client code
4. **Environment Variables**: Use `.env.local` for sensitive data (not committed)

## Scalability

The architecture is designed to scale:

1. **Modular Components**: Easy to add new components
2. **Route-based Structure**: Easy to add new pages
3. **Type Safety**: Prevents breaking changes
4. **Testing**: Ensures code quality as it grows
5. **Documentation**: Helps onboard new developers

## Future Enhancements

See [ROADMAP.md](ROADMAP.md) for planned enhancements.

## References

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [React Server Components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-server-components)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

