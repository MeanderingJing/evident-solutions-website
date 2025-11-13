/**
 * Home Page Tests
 * 
 * Integration tests for the home page component
 */

import { render, screen } from '@testing-library/react';
import Home from '../page';

// Mock next/image to avoid issues in tests
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />;
  },
}));

describe('Home Page', () => {
  it('should render the home page', () => {
    render(<Home />);
    
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('should contain navigation links', () => {
    render(<Home />);
    
    // Check for footer links
    const learnLink = screen.getByRole('link', { name: /learn/i });
    expect(learnLink).toBeInTheDocument();
    expect(learnLink).toHaveAttribute('href');
  });

  it('should be accessible', () => {
    const { container } = render(<Home />);
    
    // Check for semantic HTML structure
    expect(container.querySelector('main')).toBeInTheDocument();
    expect(container.querySelector('footer')).toBeInTheDocument();
  });
});

