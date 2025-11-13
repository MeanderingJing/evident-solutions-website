'use client';

import { HTMLAttributes, ReactNode } from 'react';

/**
 * Props for the Card component
 * 
 * @interface CardProps
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** The content to display inside the card */
  children: ReactNode;
  /** Optional header content */
  header?: ReactNode;
  /** Optional footer content */
  footer?: ReactNode;
  /** Whether the card has a hover effect */
  hover?: boolean;
  /** Whether the card has padding */
  padding?: boolean;
}

/**
 * Card component for displaying content in a contained, elevated container.
 * Follows the Evident Solutions design system with consistent spacing and styling.
 * 
 * @component
 * @param {CardProps} props - The component props
 * @returns {JSX.Element} A styled card element
 * 
 * @example
 * ```tsx
 * // Basic card
 * <Card>
 *   <p>Card content</p>
 * </Card>
 * 
 * // Card with header and footer
 * <Card 
 *   header={<h3>Card Title</h3>}
 *   footer={<Button>Action</Button>}
 * >
 *   <p>Card content</p>
 * </Card>
 * 
 * // Hoverable card
 * <Card hover>
 *   <p>Hover over me</p>
 * </Card>
 * ```
 */
export default function Card({
  children,
  header,
  footer,
  hover = false,
  padding = true,
  className = '',
  ...props
}: CardProps) {
  const baseStyles = 'bg-white rounded-lg border border-neutral-200 shadow-sm';
  const hoverStyles = hover ? 'transition-shadow duration-200 hover:shadow-md' : '';
  const paddingStyles = padding ? 'p-4 sm:p-6' : '';
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${paddingStyles} ${className}`}
      {...props}
    >
      {header && (
        <div className="mb-4 pb-4 border-b border-neutral-200">
          {header}
        </div>
      )}
      <div>{children}</div>
      {footer && (
        <div className="mt-4 pt-4 border-t border-neutral-200">
          {footer}
        </div>
      )}
    </div>
  );
}

