/**
 * Container Component Tests
 * 
 * Tests for the Container component following TDD best practices
 */

import { render, screen } from '@testing-library/react';
import Container from '../Container';

describe('Container Component', () => {
  describe('Rendering', () => {
    it('should render container with children', () => {
      render(<Container>Container content</Container>);
      
      expect(screen.getByText('Container content')).toBeInTheDocument();
    });

    it('should apply default size (lg)', () => {
      const { container } = render(<Container>Content</Container>);
      
      expect(container.firstChild).toHaveClass('max-w-screen-lg');
    });

    it('should apply small size', () => {
      const { container } = render(<Container size="sm">Content</Container>);
      
      expect(container.firstChild).toHaveClass('max-w-screen-sm');
    });

    it('should apply medium size', () => {
      const { container } = render(<Container size="md">Content</Container>);
      
      expect(container.firstChild).toHaveClass('max-w-screen-md');
    });

    it('should apply large size', () => {
      const { container } = render(<Container size="lg">Content</Container>);
      
      expect(container.firstChild).toHaveClass('max-w-screen-lg');
    });

    it('should apply extra large size', () => {
      const { container } = render(<Container size="xl">Content</Container>);
      
      expect(container.firstChild).toHaveClass('max-w-screen-xl');
    });

    it('should apply full width size', () => {
      const { container } = render(<Container size="full">Content</Container>);
      
      expect(container.firstChild).toHaveClass('max-w-full');
    });

    it('should have responsive padding', () => {
      const { container } = render(<Container>Content</Container>);
      
      expect(container.firstChild).toHaveClass('px-4', 'sm:px-6', 'lg:px-8');
    });

    it('should apply custom className', () => {
      const { container } = render(<Container className="custom-class">Content</Container>);
      
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });

  describe('Responsive Design', () => {
    it('should be mobile-first with responsive padding', () => {
      const { container } = render(<Container>Content</Container>);
      const element = container.firstChild as HTMLElement;
      
      expect(element).toHaveClass('px-4'); // Mobile padding
      expect(element).toHaveClass('sm:px-6'); // Small screens
      expect(element).toHaveClass('lg:px-8'); // Large screens
    });

    it('should center content with mx-auto', () => {
      const { container } = render(<Container>Content</Container>);
      
      expect(container.firstChild).toHaveClass('mx-auto');
    });

    it('should be full width', () => {
      const { container } = render(<Container>Content</Container>);
      
      expect(container.firstChild).toHaveClass('w-full');
    });
  });

  describe('Accessibility', () => {
    it('should render as a div element', () => {
      const { container } = render(<Container>Content</Container>);
      
      expect(container.firstChild?.tagName).toBe('DIV');
    });

    it('should pass through HTML attributes', () => {
      render(<Container data-testid="container" aria-label="Test container">Content</Container>);
      
      expect(screen.getByTestId('container')).toHaveAttribute('aria-label', 'Test container');
    });
  });
});

