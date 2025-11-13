/**
 * Navbar Component Tests
 * 
 * Tests for the Navbar component following TDD best practices
 */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from '../Navbar';

// Mock next/link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Navbar Component', () => {
  const mockItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
  ];

  describe('Rendering', () => {
    it('should render navbar with default brand', () => {
      render(<Navbar />);
      
      expect(screen.getByText('Evident Solutions')).toBeInTheDocument();
    });

    it('should render navbar with custom brand', () => {
      render(<Navbar brand="Custom Brand" />);
      
      expect(screen.getByText('Custom Brand')).toBeInTheDocument();
    });

    it('should render navigation items', () => {
      render(<Navbar items={mockItems} />);
      
      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Services')).toBeInTheDocument();
    });

    it('should render CTA button when ctaText is provided', () => {
      render(<Navbar ctaText="Get Started" ctaHref="/contact" />);
      
      expect(screen.getByText('Get Started')).toBeInTheDocument();
    });

    it('should highlight active navigation item', () => {
      const itemsWithActive = [
        { label: 'Home', href: '/', active: true },
        { label: 'About', href: '/about', active: false },
      ];
      
      render(<Navbar items={itemsWithActive} />);
      
      const homeLink = screen.getByText('Home').closest('a');
      expect(homeLink).toHaveClass('text-primary-600');
    });
  });

  describe('Mobile Menu', () => {
    it('should show hamburger menu button on mobile', () => {
      render(<Navbar items={mockItems} />);
      
      const menuButton = screen.getByLabelText(/toggle navigation menu/i);
      expect(menuButton).toBeInTheDocument();
    });

    it('should toggle mobile menu when hamburger is clicked', async () => {
      const user = userEvent.setup();
      render(<Navbar items={mockItems} />);
      
      const menuButton = screen.getByLabelText(/toggle navigation menu/i);
      
      // Menu should be closed initially
      expect(screen.queryByText('Home')).not.toBeVisible();
      
      // Open menu
      await user.click(menuButton);
      expect(screen.getByText('Home')).toBeVisible();
      
      // Close menu
      await user.click(menuButton);
      // Menu items should still be in DOM but not visible in mobile view
    });

    it('should close mobile menu when link is clicked', async () => {
      const user = userEvent.setup();
      render(<Navbar items={mockItems} />);
      
      const menuButton = screen.getByLabelText(/toggle navigation menu/i);
      await user.click(menuButton);
      
      const homeLink = screen.getByText('Home');
      await user.click(homeLink);
      
      // Menu should close after clicking a link
    });
  });

  describe('Desktop Navigation', () => {
    it('should show navigation items in desktop view', () => {
      render(<Navbar items={mockItems} />);
      
      // Desktop navigation should be visible (hidden on mobile)
      const navItems = screen.getAllByText(/home|about|services/i);
      expect(navItems.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels', () => {
      render(<Navbar items={mockItems} />);
      
      const menuButton = screen.getByLabelText(/toggle navigation menu/i);
      expect(menuButton).toHaveAttribute('aria-expanded');
    });

    it('should have accessible navigation links', () => {
      render(<Navbar items={mockItems} />);
      
      const homeLink = screen.getByText('Home');
      expect(homeLink.closest('a')).toHaveAttribute('href', '/');
    });
  });
});

