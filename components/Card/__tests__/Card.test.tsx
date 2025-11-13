/**
 * Card Component Tests
 * 
 * Tests for the Card component following TDD best practices
 */

import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card Component', () => {
  describe('Rendering', () => {
    it('should render card with children', () => {
      render(<Card>Card content</Card>);
      
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('should render card with header', () => {
      render(
        <Card header={<h3>Card Title</h3>}>
          Card content
        </Card>
      );
      
      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('should render card with footer', () => {
      render(
        <Card footer={<button>Action</button>}>
          Card content
        </Card>
      );
      
      expect(screen.getByText('Card content')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument();
    });

    it('should render card with header and footer', () => {
      render(
        <Card
          header={<h3>Card Title</h3>}
          footer={<button>Action</button>}
        >
          Card content
        </Card>
      );
      
      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card content')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /action/i })).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      const { container } = render(<Card className="custom-class">Content</Card>);
      
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });

  describe('Hover Effect', () => {
    it('should have hover effect when hover prop is true', () => {
      const { container } = render(<Card hover>Content</Card>);
      
      expect(container.firstChild).toHaveClass('hover:shadow-md');
    });

    it('should not have hover effect when hover prop is false', () => {
      const { container } = render(<Card hover={false}>Content</Card>);
      
      expect(container.firstChild).not.toHaveClass('hover:shadow-md');
    });
  });

  describe('Padding', () => {
    it('should have padding by default', () => {
      const { container } = render(<Card>Content</Card>);
      
      expect(container.firstChild).toHaveClass('p-4');
    });

    it('should not have padding when padding prop is false', () => {
      const { container } = render(<Card padding={false}>Content</Card>);
      
      expect(container.firstChild).not.toHaveClass('p-4');
    });
  });

  describe('Accessibility', () => {
    it('should render as a div element', () => {
      const { container } = render(<Card>Content</Card>);
      
      expect(container.firstChild?.tagName).toBe('DIV');
    });

    it('should pass through HTML attributes', () => {
      render(<Card data-testid="card" aria-label="Test card">Content</Card>);
      
      expect(screen.getByTestId('card')).toHaveAttribute('aria-label', 'Test card');
    });
  });
});

