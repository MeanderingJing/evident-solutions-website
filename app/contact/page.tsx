import { Metadata } from 'next';
import Layout from '@/components/Layout/Layout';
import Container from '@/components/Container/Container';
import Card from '@/components/Card/Card';
import ContactForm from '@/components/ContactForm/ContactForm';

/**
 * SEO Metadata for Contact Page
 */
export const metadata: Metadata = {
  title: 'Contact Us | Evident Solutions LLC',
  description: 'Get in touch with Evident Solutions LLC. Contact us for test automation and quality assurance solutions.',
  keywords: ['contact evident solutions', 'test automation contact', 'QA consulting contact'],
  openGraph: {
    title: 'Contact Us | Evident Solutions LLC',
    description: 'Get in touch with Evident Solutions LLC for test automation solutions.',
    type: 'website',
  },
};

/**
 * Handle form submission
 * This can be replaced with actual API call later
 */
async function handleFormSubmit(data: {
  name: string;
  email: string;
  company?: string;
  message: string;
}) {
  // TODO: Replace with actual API call
  console.log('Form submission:', data);
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // For now, always succeed
  // In production, this would call your API endpoint
  return Promise.resolve();
}

export default function Contact() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact', active: true },
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
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
              Get in touch with Evident Solutions LLC. We&apos;re here to help with your
              test automation and quality assurance needs.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Send us a Message
              </h2>
              <Card>
                <ContactForm onSubmit={handleFormSubmit} />
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <Card>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-primary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        Email
                      </h3>
                      <p className="text-neutral-600">
                        <a
                          href="mailto:contact@evidentsolutions.com"
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          contact@evidentsolutions.com
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-primary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        Phone
                      </h3>
                      <p className="text-neutral-600">
                        <a
                          href="tel:+1234567890"
                          className="text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          +1 (234) 567-8900
                        </a>
                      </p>
                    </div>
                  </div>
                </Card>

                <Card>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-primary-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        Response Time
                      </h3>
                      <p className="text-neutral-600">
                        We typically respond within 24 hours during business days.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  );
}

