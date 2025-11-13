/**
 * Footer Component Tests
 * 
 * Tests for the Footer component following TDD best practices
 */

import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

// Mock next/link
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return <a href={href}>{children}</a>;
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});

describe('Footer Component', () => {
  const mockLinkGroups = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Consulting', href: '/services/consulting' },
        { label: 'Development', href: '/services/development' },
      ],
    },
  ];

  describe('Rendering', () => {
    it('should render footer with default brand', () => {
      render(<Footer />);
      
      expect(screen.getByText('Evident Solutions')).toBeInTheDocument();
    });

    it('should render footer with custom brand', () => {
      render(<Footer brand="Custom Brand" />);
      
      expect(screen.getByText('Custom Brand')).toBeInTheDocument();
    });

    it('should render description when provided', () => {
      render(<Footer description="Test description" />);
      
      expect(screen.getByText('Test description')).toBeInTheDocument();
    });

    it('should render link groups', () => {
      render(<Footer linkGroups={mockLinkGroups} />);
      
      expect(screen.getByText('Company')).toBeInTheDocument();
      expect(screen.getByText('About')).toBeInTheDocument();
      expect(screen.getByText('Contact')).toBeInTheDocument();
    });

    it('should render copyright text', () => {
      const currentYear = new Date().getFullYear();
      render(<Footer />);
      
      expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
    });

    it('should render custom copyright text', () => {
      render(<Footer copyright="Custom Copyright 2024" />);
      
      expect(screen.getByText('Custom Copyright 2024')).toBeInTheDocument();
    });
  });

  describe('Social Links', () => {
    const mockSocialLinks = [
      {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: <span data-testid="twitter-icon">Twitter</span>,
      },
      {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: <span data-testid="linkedin-icon">LinkedIn</span>,
      },
    ];

    it('should render social links when provided', () => {
      render(<Footer socialLinks={mockSocialLinks} />);
      
      expect(screen.getByTestId('twitter-icon')).toBeInTheDocument();
      expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    });

    it('should have proper hrefs for social links', () => {
      render(<Footer socialLinks={mockSocialLinks} />);
      
      const twitterLink = screen.getByTestId('twitter-icon').closest('a');
      expect(twitterLink).toHaveAttribute('href', 'https://twitter.com');
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive grid layout', () => {
      const { container } = render(<Footer linkGroups={mockLinkGroups} />);
      
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-4');
    });
  });

  describe('Accessibility', () => {
    it('should have proper link structure', () => {
      render(<Footer linkGroups={mockLinkGroups} />);
      
      const aboutLink = screen.getByText('About');
      expect(aboutLink.closest('a')).toHaveAttribute('href', '/about');
    });

    it('should have ARIA labels for social links', () => {
      const mockSocialLinks = [
        {
          name: 'Twitter',
          href: 'https://twitter.com',
          icon: <span>Twitter</span>,
        },
      ];
      
      render(<Footer socialLinks={mockSocialLinks} />);
      
      const socialLink = screen.getByLabelText('Twitter');
      expect(socialLink).toBeInTheDocument();
    });
  });
});

