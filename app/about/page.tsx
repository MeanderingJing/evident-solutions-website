import { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import Container from '@/components/Container/Container';
import Card from '@/components/Card/Card';
import Button from '@/components/Button/Button';

/**
 * SEO Metadata for the About Page.
 * Optimized for search engines and social media sharing.
 */
export const metadata: Metadata = {
  title: 'About Us | Evident Solutions LLC',
  description: 'Learn about Evident Solutions LLC, our mission, vision, and commitment to delivering exceptional test automation and quality assurance solutions.',
  keywords: ['about evident solutions', 'test automation company', 'QA company', 'software testing company'],
  openGraph: {
    title: 'About Us | Evident Solutions LLC',
    description: 'Learn about Evident Solutions LLC and our commitment to quality assurance.',
    type: 'website',
  },
};

/**
 * About page component for Evident Solutions LLC.
 * Displays company overview, mission, vision, values, team information, and contact CTA.
 * 
 * @returns {JSX.Element} The about page with company information and team details
 * 
 * @example
 * This component is automatically rendered at the /about route.
 * No need to import or use it manually.
 */
export default function About() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about', active: true },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ];

  const footerLinkGroups = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Our Team', href: '/team' },
        { label: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Test Automation', href: '/services/automation' },
        { label: 'QA Consulting', href: '/services/consulting' },
        { label: 'Support', href: '/services/support' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Documentation', href: '/docs' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ];

  return (
    <Layout navItems={navItems} footerLinkGroups={footerLinkGroups}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16 sm:py-24">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              About Evident Solutions LLC
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
              Leading the way in test automation and quality assurance solutions
            </p>
          </div>
        </Container>
      </section>

      {/* Company Overview Section */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6 text-center">
              Company Overview
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-neutral-700 mb-4">
                Evident Solutions LLC is a specialized technology company focused on delivering
                comprehensive test automation and quality assurance solutions. We help businesses
                build reliable, high-quality software through innovative testing strategies and
                proven methodologies.
              </p>
              <p className="text-lg text-neutral-700 mb-4">
                Our team of experienced QA engineers and automation specialists work closely with
                clients to understand their unique challenges and deliver tailored solutions that
                drive measurable results.
              </p>
              <p className="text-lg text-neutral-700">
                With a commitment to excellence and continuous improvement, we strive to be the
                trusted partner for organizations seeking to enhance their software quality and
                accelerate their development cycles.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                Our Mission
              </h2>
              <p className="text-neutral-700 mb-4">
                To empower businesses with world-class test automation solutions that ensure
                software quality, reduce time-to-market, and deliver exceptional user experiences.
              </p>
              <p className="text-neutral-700">
                We are committed to helping our clients achieve their quality assurance goals
                through innovative technologies, expert guidance, and proven best practices.
              </p>
            </Card>

            <Card>
              <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-4">
                Our Vision
              </h2>
              <p className="text-neutral-700 mb-4">
                To be the leading provider of test automation solutions, recognized for our
                technical excellence, client-centric approach, and transformative impact on
                software development practices.
              </p>
              <p className="text-neutral-700">
                We envision a future where every software organization has access to the tools
                and expertise needed to deliver flawless digital experiences.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card hover>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Excellence
              </h3>
              <p className="text-neutral-600">
                We strive for excellence in every project, delivering solutions that exceed
                expectations and set new industry standards.
              </p>
            </Card>

            <Card hover>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Innovation
              </h3>
              <p className="text-neutral-600">
                We embrace cutting-edge technologies and methodologies to solve complex
                challenges and drive continuous improvement.
              </p>
            </Card>

            <Card hover>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Integrity
              </h3>
              <p className="text-neutral-600">
                We conduct business with honesty, transparency, and ethical practices,
                building trust through our actions.
              </p>
            </Card>

            <Card hover>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Collaboration
              </h3>
              <p className="text-neutral-600">
                We work closely with our clients as partners, fostering open communication
                and shared success.
              </p>
            </Card>

            <Card hover>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Client Focus
              </h3>
              <p className="text-neutral-600">
                Our clients&apos; success is our success. We prioritize their needs and
                deliver solutions that create real value.
              </p>
            </Card>

            <Card hover>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Continuous Learning
              </h3>
              <p className="text-neutral-600">
                We stay ahead of industry trends and continuously enhance our skills to
                provide the best possible solutions.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Our Team
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Meet the experts behind Evident Solutions LLC
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Placeholder structure for team members */}
            {/* This structure can be easily extended with actual team member data */}
            <Card>
              <div className="text-center">
                <div className="w-24 h-24 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-neutral-400 text-2xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Team Member
                </h3>
                <p className="text-neutral-600 mb-2">Role Title</p>
                <p className="text-sm text-neutral-500">
                  Brief bio or description placeholder
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-24 h-24 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-neutral-400 text-2xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Team Member
                </h3>
                <p className="text-neutral-600 mb-2">Role Title</p>
                <p className="text-sm text-neutral-500">
                  Brief bio or description placeholder
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-24 h-24 bg-neutral-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-neutral-400 text-2xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Team Member
                </h3>
                <p className="text-neutral-600 mb-2">Role Title</p>
                <p className="text-sm text-neutral-500">
                  Brief bio or description placeholder
                </p>
              </div>
            </Card>
          </div>

          <div className="text-center mt-8">
            <p className="text-neutral-600 mb-4">
              We&apos;re always looking for talented individuals to join our team.
            </p>
            <Link href="/careers">
              <Button variant="outline">
                View Careers
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 sm:py-24 bg-primary-600">
        <Container>
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Ready to improve your software quality with expert test automation solutions?
              Get in touch with us today to discuss how Evident Solutions LLC can help
              your business succeed.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="accent">
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

