/**
 * Home Page Tests
 * 
 * Test-Driven Development approach for the Home page
 * Tests verify all required elements are present and functional
 */

import { render, screen } from '@testing-library/react';
import Home from '../page';

// Mock Layout component to isolate Home page tests
jest.mock('@/components/Layout/Layout', () => {
  return function MockLayout({ children }: { children: React.ReactNode }) {
    return <div data-testid="layout">{children}</div>;
  };
});

// Mock Next.js Link component
jest.mock('next/link', () => {
  return function MockLink({ 
    children, 
    href 
  }: { 
    children: React.ReactNode; 
    href: string;
  }) {
    return <a href={href}>{children}</a>;
  };
});

describe('Home Page', () => {
  describe('Page Rendering', () => {
    it('should render without crashing', () => {
      render(<Home />);
      
      expect(screen.getByTestId('layout')).toBeInTheDocument();
    });

    it('should render the main content', () => {
      render(<Home />);
      
      // Check for hero section heading
      const heroHeading = screen.getByRole('heading', { level: 1 });
      expect(heroHeading).toBeInTheDocument();
    });
  });

  describe('Company Name Display', () => {
    it('should display company name "Evident Solutions LLC"', () => {
      render(<Home />);
      
      // Company name appears multiple times, so use getAllByText
      const companyNameElements = screen.getAllByText(/evident solutions llc/i);
      expect(companyNameElements.length).toBeGreaterThan(0);
      expect(companyNameElements[0]).toBeInTheDocument();
    });
  });

  describe('Hero Section', () => {
    it('should have a hero section with value proposition', () => {
      render(<Home />);
      
      // Check for main heading (h1) which should be in hero
      const heroHeading = screen.getByRole('heading', { level: 1 });
      expect(heroHeading).toBeInTheDocument();
      
      // Check for value proposition text (appears multiple times, check in h1)
      expect(heroHeading.textContent).toMatch(/test automation/i);
    });

    it('should have a hero section with descriptive text', () => {
      render(<Home />);
      
      // Hero should have descriptive paragraph
      const paragraphs = screen.getAllByText(/./);
      const hasDescriptiveText = paragraphs.some(p => 
        p.textContent && p.textContent.length > 50
      );
      expect(hasDescriptiveText).toBe(true);
    });
  });

  describe('Navigation Links', () => {
    it('should have navigation link to About page', () => {
      render(<Home />);
      
      // Find link by href since the visible text might be different
      const aboutLink = screen.getByRole('link', { name: /learn more/i });
      expect(aboutLink).toBeInTheDocument();
      expect(aboutLink).toHaveAttribute('href', '/about');
    });

    it('should have navigation link to Contact page', () => {
      render(<Home />);
      
      // Contact link appears multiple times, check for one with /contact href
      const contactLinks = screen.getAllByRole('link', { name: /contact|get started/i });
      const contactLink = contactLinks.find(link => link.getAttribute('href') === '/contact');
      expect(contactLink).toBeInTheDocument();
      expect(contactLink).toHaveAttribute('href', '/contact');
    });
  });

  describe('Call-to-Action', () => {
    it('should have at least one call-to-action button', () => {
      render(<Home />);
      
      const ctaButtons = screen.getAllByRole('button');
      expect(ctaButtons.length).toBeGreaterThan(0);
    });

    it('should have a CTA button with actionable text', () => {
      render(<Home />);
      
      // Look for common CTA text patterns
      const ctaTexts = [
        /get started/i,
        /contact us/i,
        /learn more/i,
        /get in touch/i,
      ];
      
      const hasCTA = ctaTexts.some(pattern => {
        try {
          screen.getByRole('button', { name: pattern });
          return true;
        } catch {
          return false;
        }
      });
      
      expect(hasCTA).toBe(true);
    });
  });

  describe('Services Overview', () => {
    it('should have a services section', () => {
      render(<Home />);
      
      // Check for services heading or section
      const servicesHeading = screen.queryByRole('heading', { 
        name: /services/i 
      });
      
      // Services might be in a section with heading or just mentioned
      const hasServicesContent = 
        servicesHeading !== null || 
        screen.queryByText(/test automation/i) !== null ||
        screen.queryByText(/consulting/i) !== null;
      
      expect(hasServicesContent).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should have proper semantic structure', () => {
      const { container } = render(<Home />);
      
      // Should have sections
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
    });

    it('should have accessible headings hierarchy', () => {
      render(<Home />);
      
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
    });
  });
});
