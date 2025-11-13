import Layout from '@/components/Layout/Layout';
import Container from '@/components/Container/Container';
import Card from '@/components/Card/Card';
import Button from '@/components/Button/Button';

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
        { label: 'Consulting', href: '/services/consulting' },
        { label: 'Development', href: '/services/development' },
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
              Technology Solutions
              <span className="block text-primary-600">That Drive Results</span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-700 mb-8 max-w-2xl mx-auto">
              We deliver innovative software solutions and expert consulting services
              to help your business thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Evident Solutions?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions
              that make a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card hover>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Expert Team
              </h3>
              <p className="text-neutral-600">
                Our experienced developers and consultants bring years of industry
                expertise to every project.
              </p>
            </Card>

            <Card hover>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Modern Technology
              </h3>
              <p className="text-neutral-600">
                We use the latest tools and frameworks to build scalable, maintainable
                solutions for your business.
              </p>
            </Card>

            <Card hover>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Proven Results
              </h3>
              <p className="text-neutral-600">
                Track record of successful projects delivering measurable business
                value and ROI.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-primary-600">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help transform your business with innovative
              technology solutions.
            </p>
            <Button size="lg" variant="accent">
              Contact Us Today
            </Button>
          </div>
        </Container>
      </section>
    </Layout>
  );
}
