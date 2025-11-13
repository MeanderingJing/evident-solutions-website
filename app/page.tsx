import { Metadata } from 'next';
import Link from 'next/link';
import Layout from '@/components/Layout/Layout';
import Container from '@/components/Container/Container';
import Card from '@/components/Card/Card';
import Button from '@/components/Button/Button';

/**
 * SEO Metadata for the Home Page.
 * Optimized for search engines and social media sharing.
 */
export const metadata: Metadata = {
  title: 'Evident Solutions LLC | Test Automation & Quality Assurance Solutions',
  description: 'Leading provider of test automation solutions and quality assurance services. We help businesses deliver reliable software through comprehensive testing strategies.',
  keywords: ['test automation', 'quality assurance', 'QA services', 'software testing', 'test automation solutions'],
  openGraph: {
    title: 'Evident Solutions LLC | Test Automation Solutions',
    description: 'Leading provider of test automation solutions and quality assurance services.',
    type: 'website',
  },
};

/**
 * Home page component for Evident Solutions LLC.
 * Displays the hero section, services overview, value propositions, and call-to-action sections.
 * 
 * @returns {JSX.Element} The home page with hero, services, and CTA sections
 * 
 * @example
 * This component is automatically rendered at the root route (/).
 * No need to import or use it manually.
 */
export default function Home() {
  const navItems = [
    { label: 'Home', href: '/', active: true },
    { label: 'About', href: '/about' },
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
              Test Automation Solutions
              <span className="block text-primary-600">That Drive Quality</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
              Evident Solutions LLC delivers comprehensive test automation and quality assurance
              services to help your business deliver reliable, high-quality software faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="primary">
                  Get Started
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive test automation and QA solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card hover>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Test Automation
              </h3>
              <p className="text-neutral-600">
                Custom test automation frameworks and strategies to accelerate your testing
                cycles and improve software quality.
              </p>
            </Card>

            <Card hover>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                QA Consulting
              </h3>
              <p className="text-neutral-600">
                Expert guidance on quality assurance processes, test strategy development,
                and best practices implementation.
              </p>
            </Card>

            <Card hover>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Continuous Testing
              </h3>
              <p className="text-neutral-600">
                Integration of testing into your CI/CD pipeline for faster feedback
                and continuous quality assurance.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Evident Solutions LLC?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We combine technical expertise with industry best practices to deliver
              test automation solutions that make a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Expert Team
              </h3>
              <p className="text-neutral-600">
                Our experienced QA engineers and automation specialists bring years of
                industry expertise to every project.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Proven Methodologies
              </h3>
              <p className="text-neutral-600">
                We use industry-leading tools and frameworks to build scalable, maintainable
                test automation solutions.
              </p>
            </Card>

            <Card>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Measurable Results
              </h3>
              <p className="text-neutral-600">
                Track record of successful implementations delivering improved test coverage,
                faster releases, and reduced defects.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 sm:py-24 bg-primary-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Testing?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how Evident Solutions LLC can help you implement effective
              test automation strategies for your business.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="accent">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
