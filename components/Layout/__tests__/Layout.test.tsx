/**
 * Layout Component Tests
 * 
 * Tests for the Layout component following TDD best practices
 */

import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

// Mock child components
jest.mock('../../Navbar/Navbar', () => {
  return function MockNavbar() {
    return <nav data-testid="navbar">Navbar</nav>;
  };
});

jest.mock('../../Footer/Footer', () => {
  return function MockFooter() {
    return <footer data-testid="footer">Footer</footer>;
  };
});

describe('Layout Component', () => {
  describe('Rendering', () => {
    it('should render layout with children', () => {
      render(
        <Layout>
          <div>Page Content</div>
        </Layout>
      );
      
      expect(screen.getByText('Page Content')).toBeInTheDocument();
    });

    it('should render navbar by default', () => {
      render(
        <Layout>
          <div>Content</div>
        </Layout>
      );
      
      expect(screen.getByTestId('navbar')).toBeInTheDocument();
    });

    it('should render footer by default', () => {
      render(
        <Layout>
          <div>Content</div>
        </Layout>
      );
      
      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('should hide navbar when showNavbar is false', () => {
      render(
        <Layout showNavbar={false}>
          <div>Content</div>
        </Layout>
      );
      
      expect(screen.queryByTestId('navbar')).not.toBeInTheDocument();
    });

    it('should hide footer when showFooter is false', () => {
      render(
        <Layout showFooter={false}>
          <div>Content</div>
        </Layout>
      );
      
      expect(screen.queryByTestId('footer')).not.toBeInTheDocument();
    });
  });

  describe('Structure', () => {
    it('should have proper layout structure', () => {
      const { container } = render(
        <Layout>
          <div>Content</div>
        </Layout>
      );
      
      const layout = container.firstChild;
      expect(layout).toHaveClass('min-h-screen', 'flex', 'flex-col');
    });

    it('should have main content area', () => {
      render(
        <Layout>
          <div>Content</div>
        </Layout>
      );
      
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('should make main content flex-grow', () => {
      const { container } = render(
        <Layout>
          <div>Content</div>
        </Layout>
      );
      
      const main = container.querySelector('main');
      expect(main).toHaveClass('flex-grow');
    });
  });
});

