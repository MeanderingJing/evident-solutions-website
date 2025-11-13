'use client';

import Link from 'next/link';

/**
 * Footer link group structure
 */
export interface FooterLinkGroup {
  /** The title of the link group */
  title: string;
  /** Array of links in this group */
  links: Array<{
    label: string;
    href: string;
  }>;
}

/**
 * Props for the Footer component
 */
export interface FooterProps {
  /** The brand/company name */
  brand?: string;
  /** Optional brand description */
  description?: string;
  /** Array of footer link groups */
  linkGroups?: FooterLinkGroup[];
  /** Copyright text */
  copyright?: string;
  /** Social media links */
  socialLinks?: Array<{
    name: string;
    href: string;
    icon: React.ReactNode;
  }>;
}

/**
 * Footer component following the Evident Solutions design system.
 * Responsive and mobile-first with a clean, professional layout.
 * Includes link groups, social media links, and copyright information.
 * 
 * @component
 * @param {FooterProps} props - The component props
 * @param {string} [props.brand] - The brand/company name (default: "Evident Solutions")
 * @param {string} [props.description] - Optional brand description
 * @param {FooterLinkGroup[]} [props.linkGroups] - Array of footer link groups
 * @param {string} [props.copyright] - Copyright text (default: includes current year)
 * @param {Array} [props.socialLinks] - Array of social media links with icons
 * @returns {JSX.Element} A styled footer element
 * 
 * @example
 * ```tsx
 * <Footer
 *   brand="Evident Solutions"
 *   description="Leading technology solutions provider"
 *   linkGroups={[
 *     {
 *       title: 'Company',
 *       links: [
 *         { label: 'About', href: '/about' },
 *         { label: 'Contact', href: '/contact' },
 *       ],
 *     },
 *   ]}
 *   copyright="© 2024 Evident Solutions LLC. All rights reserved."
 * />
 * ```
 */
export default function Footer({
  brand = 'Evident Solutions',
  description,
  linkGroups = [],
  copyright = `© ${new Date().getFullYear()} Evident Solutions LLC. All rights reserved.`,
  socialLinks = [],
}: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">{brand}</h3>
            {description && (
              <p className="text-sm text-neutral-400 mb-4">{description}</p>
            )}
            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Link Groups */}
          {linkGroups.map((group, groupIndex) => (
            <div key={groupIndex} className="col-span-1">
              <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-800">
          <p className="text-sm text-neutral-500 text-center">{copyright}</p>
        </div>
      </div>
    </footer>
  );
}

