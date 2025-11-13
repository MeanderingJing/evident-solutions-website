'use client';

import { ReactNode } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { NavItem } from '../Navbar/Navbar';
import { FooterLinkGroup } from '../Footer/Footer';

/**
 * Props for the Layout component
 */
export interface LayoutProps {
  /** The main content to display */
  children: ReactNode;
  /** Navigation items for the navbar */
  navItems?: NavItem[];
  /** Footer link groups */
  footerLinkGroups?: FooterLinkGroup[];
  /** Whether to show the navbar */
  showNavbar?: boolean;
  /** Whether to show the footer */
  showFooter?: boolean;
}

/**
 * Layout component that wraps all pages with consistent structure.
 * Includes Navbar and Footer, following the Evident Solutions design system.
 * 
 * @component
 * @param {LayoutProps} props - The component props
 * @returns {JSX.Element} A layout wrapper with navbar, content, and footer
 * 
 * @example
 * ```tsx
 * <Layout
 *   navItems={[
 *     { label: 'Home', href: '/' },
 *     { label: 'About', href: '/about' },
 *   ]}
 * >
 *   <h1>Page Content</h1>
 * </Layout>
 * ```
 */
export default function Layout({
  children,
  navItems = [],
  footerLinkGroups = [],
  showNavbar = true,
  showFooter = true,
}: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {showNavbar && (
        <Navbar
          items={navItems}
          ctaText="Get Started"
          ctaHref="/contact"
        />
      )}
      <main className="flex-grow">
        {children}
      </main>
      {showFooter && (
        <Footer
          linkGroups={footerLinkGroups}
          description="Leading technology solutions provider"
        />
      )}
    </div>
  );
}

