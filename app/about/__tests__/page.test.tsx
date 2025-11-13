/**
 * About Page Tests
 * 
 * Test-Driven Development approach for the About page
 * Tests verify all required elements are present and functional
 */

import { render, screen } from '@testing-library/react';
import About from '../page';

// Mock Layout component to isolate About page tests
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

describe('About Page', () => {
  describe('Page Rendering', () => {
    it('should render without crashing', () => {
      render(<About />);
      
      expect(screen.getByTestId('layout')).toBeInTheDocument();
    });

    it('should render the main content', () => {
      render(<About />);
      
      // Check for main heading
      const headings = screen.getAllByRole('heading');
      expect(headings.length).toBeGreaterThan(0);
    });
  });

  describe('Company Overview', () => {
    it('should have a company overview section', () => {
      render(<About />);
      
      // Look for company name (appears multiple times, so use getAllBy)
      const companyNameElements = screen.getAllByText(/evident solutions/i);
      const hasOverviewHeading = screen.queryByRole('heading', { 
        name: /company overview/i 
      }) !== null;
      
      expect(companyNameElements.length > 0 || hasOverviewHeading).toBe(true);
    });

    it('should display company information', () => {
      render(<About />);
      
      // Should have some descriptive text about the company
      const paragraphs = screen.getAllByText(/./);
      const hasDescriptiveText = paragraphs.some(p => 
        p.textContent && p.textContent.length > 50
      );
      expect(hasDescriptiveText).toBe(true);
    });
  });

  describe('Mission/Vision Section', () => {
    it('should have a mission section', () => {
      render(<About />);
      
      // Look for mission heading or text
      const missionHeading = screen.queryByRole('heading', { 
        name: /mission/i 
      });
      const missionText = screen.queryByText(/mission/i);
      
      expect(missionHeading !== null || missionText !== null).toBe(true);
    });

    it('should have a vision section', () => {
      render(<About />);
      
      // Look for vision heading (use getAllBy since there might be multiple)
      const visionHeadings = screen.getAllByRole('heading', { 
        name: /our vision/i 
      });
      const visionText = screen.queryByText(/our vision/i);
      
      expect(visionHeadings.length > 0 || visionText !== null).toBe(true);
    });

    it('should have mission/vision content', () => {
      render(<About />);
      
      // Should have content about mission or vision
      const allText = screen.getByTestId('layout').textContent || '';
      const hasMissionVisionContent = 
        /mission|vision|values|purpose/i.test(allText);
      
      expect(hasMissionVisionContent).toBe(true);
    });
  });

  describe('Team Section', () => {
    it('should have a team section structure', () => {
      render(<About />);
      
      // Look for team heading (use getAllBy since there might be multiple)
      const teamHeadings = screen.getAllByRole('heading', { 
        name: /our team/i 
      });
      const teamTexts = screen.queryAllByText(/our team/i);
      
      expect(teamHeadings.length > 0 || teamTexts.length > 0).toBe(true);
    });

    it('should have a flexible structure for team members', () => {
      render(<About />);
      
      // Team section should exist (even if empty/placeholder)
      const allText = screen.getByTestId('layout').textContent || '';
      const hasTeamSection = /team|our team|meet the team/i.test(allText);
      
      expect(hasTeamSection).toBe(true);
    });
  });

  describe('Contact CTA', () => {
    it('should have a contact call-to-action', () => {
      render(<About />);
      
      // Look for CTA button or link
      const ctaButtons = screen.queryAllByRole('button', { 
        name: /contact|get in touch|reach out/i 
      });
      const ctaLinks = screen.queryAllByRole('link', { 
        name: /contact|get in touch|reach out/i 
      });
      
      expect(ctaButtons.length > 0 || ctaLinks.length > 0).toBe(true);
    });

    it('should have a link to the contact page', () => {
      render(<About />);
      
      // Find link with href to /contact
      const contactLink = screen.queryByRole('link', { 
        name: /contact/i 
      });
      
      if (contactLink) {
        expect(contactLink).toHaveAttribute('href', '/contact');
      } else {
        // Alternative: check if there's any link to /contact
        const allLinks = screen.getAllByRole('link');
        const hasContactLink = allLinks.some(link => 
          link.getAttribute('href') === '/contact'
        );
        expect(hasContactLink).toBe(true);
      }
    });
  });

  describe('Accessibility', () => {
    it('should have proper semantic structure', () => {
      const { container } = render(<About />);
      
      // Should have sections
      const sections = container.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
    });

    it('should have accessible headings hierarchy', () => {
      render(<About />);
      
      const h1 = screen.queryByRole('heading', { level: 1 });
      const h2Elements = screen.queryAllByRole('heading', { level: 2 });
      
      // Should have at least h1 or h2
      expect(h1 !== null || h2Elements.length > 0).toBe(true);
    });
  });
});

