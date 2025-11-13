'use client';

import { useState } from 'react';
import Link from 'next/link';

/**
 * Navigation item structure
 */
export interface NavItem {
  /** The label to display */
  label: string;
  /** The URL to navigate to */
  href: string;
  /** Whether the item is currently active */
  active?: boolean;
}

/**
 * Props for the Navbar component
 */
export interface NavbarProps {
  /** The brand/logo text or element */
  brand?: React.ReactNode;
  /** Array of navigation items */
  items?: NavItem[];
  /** Optional CTA button text */
  ctaText?: string;
  /** Optional CTA button href */
  ctaHref?: string;
  /** Optional CTA button onClick handler */
  ctaOnClick?: () => void;
}

/**
 * Responsive navigation bar component following the Evident Solutions design system.
 * Mobile-first design with a hamburger menu for mobile devices.
 * 
 * @component
 * @param {NavbarProps} props - The component props
 * @returns {JSX.Element} A styled navigation bar
 * 
 * @example
 * ```tsx
 * <Navbar
 *   brand="Evident Solutions"
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'About', href: '/about' },
 *     { label: 'Services', href: '/services' },
 *   ]}
 *   ctaText="Get Started"
 *   ctaHref="/contact"
 * />
 * ```
 */
export default function Navbar({
  brand = 'Evident Solutions',
  items = [],
  ctaText,
  ctaHref,
  ctaOnClick,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
              {brand}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-base font-medium transition-colors ${
                  item.active
                    ? 'text-primary-600 border-b-2 border-primary-600'
                    : 'text-neutral-700 hover:text-primary-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {ctaText && (
              <Link
                href={ctaHref || '#'}
                onClick={ctaOnClick}
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors"
              >
                {ctaText}
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded="false"
              aria-label="Toggle navigation menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-neutral-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  item.active
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-neutral-700 hover:text-primary-600 hover:bg-neutral-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            {ctaText && (
              <div className="px-3 pt-2">
                <Link
                  href={ctaHref || '#'}
                  onClick={() => {
                    setIsOpen(false);
                    ctaOnClick?.();
                  }}
                  className="block w-full text-center px-4 py-2 text-sm font-semibold text-white bg-primary-500 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  {ctaText}
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

