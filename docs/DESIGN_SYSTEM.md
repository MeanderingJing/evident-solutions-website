# Evident Solutions Design System

This document outlines the design system foundation for Evident Solutions LLC, including colors, typography, and reusable components.

## Color Palette

### Primary Colors
- **Primary-500** (`#0073e6`): Main brand color - Professional blue
- **Primary-600** (`#005bb3`): Hover states
- **Primary-700** (`#004480`): Active states

### Secondary Colors
- **Secondary-500** (`#627d98`): Supporting color - Sophisticated slate
- Used for secondary actions and accents

### Accent Colors
- **Accent-500** (`#ff8f00`): Call-to-action color - Energetic orange
- Used for CTAs and highlights

### Neutral Colors
- **Neutral-50** to **Neutral-900**: Grayscale palette
- Used for text, backgrounds, and borders

### Semantic Colors
- **Success**: Green tones for success states
- **Error**: Red tones for error states
- **Warning**: Yellow/amber tones for warnings

## Typography Scale

The typography scale follows a mobile-first approach:

- **xs**: 0.75rem (12px) - Small labels, captions
- **sm**: 0.875rem (14px) - Body text, small paragraphs
- **base**: 1rem (16px) - Default body text
- **lg**: 1.125rem (18px) - Large body text
- **xl**: 1.25rem (20px) - Small headings
- **2xl**: 1.5rem (24px) - Section headings
- **3xl**: 1.875rem (30px) - Page headings
- **4xl**: 2.25rem (36px) - Large page headings
- **5xl**: 3rem (48px) - Hero headings
- **6xl**: 3.75rem (60px) - Extra large headings

## Components

### Button

A versatile button component with multiple variants and sizes.

**Variants:**
- `primary` - Main action button (default)
- `secondary` - Secondary action
- `accent` - Call-to-action
- `outline` - Outlined style
- `ghost` - Minimal style
- `danger` - Destructive action

**Sizes:**
- `sm` - Small
- `md` - Medium (default)
- `lg` - Large

**Props:**
```tsx
interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  // ... standard button HTML attributes
}
```

### Card

A container component for displaying content in an elevated container.

**Props:**
```tsx
interface CardProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  hover?: boolean;
  padding?: boolean;
}
```

### Container

A responsive container component for constraining content width.

**Sizes:**
- `sm` - Small (640px max)
- `md` - Medium (768px max)
- `lg` - Large (1024px max, default)
- `xl` - Extra large (1280px max)
- `full` - Full width

**Props:**
```tsx
interface ContainerProps {
  children: ReactNode;
  size?: ContainerSize;
}
```

### Navbar

Responsive navigation bar with mobile hamburger menu.

**Props:**
```tsx
interface NavbarProps {
  brand?: React.ReactNode;
  items?: NavItem[];
  ctaText?: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
}
```

### Footer

Responsive footer component with link groups and social links.

**Props:**
```tsx
interface FooterProps {
  brand?: string;
  description?: string;
  linkGroups?: FooterLinkGroup[];
  copyright?: string;
  socialLinks?: Array<{
    name: string;
    href: string;
    icon: React.ReactNode;
  }>;
}
```

### Layout

Main layout component that wraps all pages with Navbar and Footer.

**Props:**
```tsx
interface LayoutProps {
  children: ReactNode;
  navItems?: NavItem[];
  footerLinkGroups?: FooterLinkGroup[];
  showNavbar?: boolean;
  showFooter?: boolean;
}
```

## Responsive Design

All components follow a mobile-first approach:

1. **Base styles** target mobile devices (default)
2. **sm:** breakpoint for small screens (640px+)
3. **md:** breakpoint for tablets (768px+)
4. **lg:** breakpoint for desktops (1024px+)
5. **xl:** breakpoint for large desktops (1280px+)

## Usage Examples

### Basic Page Structure

```tsx
import Layout from '@/components/Layout/Layout';
import Container from '@/components/Container/Container';
import Card from '@/components/Card/Card';
import Button from '@/components/Button/Button';

export default function Page() {
  return (
    <Layout>
      <Container>
        <Card>
          <h1>Page Title</h1>
          <Button variant="primary">Action</Button>
        </Card>
      </Container>
    </Layout>
  );
}
```

## Testing

All components include comprehensive test suites following TDD best practices:
- Unit tests for rendering and props
- Interaction tests for user events
- Accessibility tests
- Responsive design tests

Run tests with:
```bash
npm run test
```

## Best Practices

1. **Use design system colors**: Always use the defined color palette
2. **Mobile-first**: Design for mobile, enhance for larger screens
3. **Consistent spacing**: Use Tailwind's spacing scale
4. **Accessibility**: All components are accessible by default
5. **TypeScript**: All components are fully typed
6. **Documentation**: All components include JSDoc comments

