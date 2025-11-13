'use client';

import { HTMLAttributes, ReactNode } from 'react';

/**
 * Container size variants
 */
export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

/**
 * Props for the Container component
 * 
 * @interface ContainerProps
 * @extends {HTMLAttributes<HTMLDivElement>}
 */
export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** The content to display inside the container */
  children: ReactNode;
  /** Maximum width size of the container */
  size?: ContainerSize;
}

/**
 * Container component for constraining content width and providing consistent spacing.
 * Responsive and mobile-first, following the Evident Solutions design system.
 * 
 * @component
 * @param {ContainerProps} props - The component props
 * @returns {JSX.Element} A styled container element
 * 
 * @example
 * ```tsx
 * // Default container (max-width: 1280px)
 * <Container>
 *   <p>Content</p>
 * </Container>
 * 
 * // Small container
 * <Container size="sm">
 *   <p>Narrow content</p>
 * </Container>
 * 
 * // Full width container
 * <Container size="full">
 *   <p>Full width content</p>
 * </Container>
 * ```
 */
export default function Container({
  children,
  size = 'lg',
  className = '',
  ...props
}: ContainerProps) {
  const sizeStyles: Record<ContainerSize, string> = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    full: 'max-w-full',
  };
  
  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

