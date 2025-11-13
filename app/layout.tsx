import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/**
 * Geist Sans font configuration
 * Variable font with weight range from 100 to 900
 */
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

/**
 * Geist Mono font configuration
 * Variable font with weight range from 100 to 900
 */
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

/**
 * Root layout metadata for SEO and social sharing
 */
export const metadata: Metadata = {
  title: "Evident Solutions | Technology Solutions Provider",
  description: "Leading technology solutions provider delivering innovative software and consulting services.",
};

/**
 * Root layout component for the Next.js App Router.
 * This component wraps all pages and provides the HTML structure, fonts, and global styles.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The page content to render
 * @returns {JSX.Element} The root HTML structure with fonts and global styles applied
 * 
 * @example
 * This component is automatically used by Next.js for all pages.
 * No need to import or use it manually in page components.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
