/**
 * Contact Page Tests
 * 
 * Test-Driven Development approach for the Contact page
 * Tests verify page rendering and form presence
 */

import { render, screen } from '@testing-library/react';
import Contact from '../page';

// Mock Layout component to isolate Contact page tests
jest.mock('@/components/Layout/Layout', () => {
  return function MockLayout({ children }: { children: React.ReactNode }) {
    return <div data-testid="layout">{children}</div>;
  };
});

// Mock ContactForm component
jest.mock('@/components/ContactForm/ContactForm', () => {
  return function MockContactForm() {
    return <form data-testid="contact-form">Contact Form</form>;
  };
});

describe('Contact Page', () => {
  describe('Page Rendering', () => {
    it('should render without crashing', () => {
      render(<Contact />);
      
      expect(screen.getByTestId('layout')).toBeInTheDocument();
    });

    it('should render the main content', () => {
      render(<Contact />);
      
      // Check for main heading
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe('Contact Form', () => {
    it('should render the contact form', () => {
      render(<Contact />);
      
      expect(screen.getByTestId('contact-form')).toBeInTheDocument();
    });
  });

  describe('Contact Information', () => {
    it('should display contact information', () => {
      render(<Contact />);
      
      // Look for contact info like email or phone
      const allText = screen.getByTestId('layout').textContent || '';
      const hasContactInfo = 
        /email|phone|contact|reach out/i.test(allText);
      
      expect(hasContactInfo).toBe(true);
    });
  });

  describe('Accessibility', () => {
    it('should have proper semantic structure', () => {
      const { container } = render(<Contact />);
      
      // Should have sections
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
    });

    it('should have accessible headings hierarchy', () => {
      render(<Contact />);
      
      const h1 = screen.queryByRole('heading', { level: 1 });
      const h2Elements = screen.queryAllByRole('heading', { level: 2 });
      
      // Should have at least h1 or h2
      expect(h1 !== null || h2Elements.length > 0).toBe(true);
    });
  });
});

