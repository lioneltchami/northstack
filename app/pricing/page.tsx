import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import PricingCard from '@/components/ui/PricingCard';
import CTA from '@/components/ui/CTA';
import { businessPricingTiers, addOnServices, guarantees } from '@/data/pricing';
import { CheckCircle, Shield, DollarSign, Clock, HelpCircle, TrendingUp, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business Pricing | Enterprise IT Solutions | NorthStack Solutions',
  description: 'Transparent, fixed-price IT solutions for Canadian businesses. From $1,500 starter packages to custom enterprise solutions. ROI-focused. No hidden fees.',
  keywords: ['Business IT Pricing', 'Enterprise Web Development', 'DevOps Consulting', 'Cloud Infrastructure Cost', 'Automation Solutions Pricing'],
};

export default function BusinessPricingPage() {
  return (
    <>
      <Hero
        title="Business Solutions Pricing"
        subtitle="Enterprise IT for Growing Businesses"
        description="Scale your business with enterprise-grade infrastructure, automation, and DevOps. Fixed-price projects with clear ROI."
        variant="gradient"
        size="medium"
      />

      {/* ROI Banner */}
      <section className="section-padding bg-white border-b-2 border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 text-gray-900">
              Invest in Growth, Not Overhead
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary-100 mb-4">
                  <TrendingUp className="w-8 h-8 text-primary-700" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2 text-gray-900">Measurable ROI</h3>
                <p className="text-gray-700">Every solution is designed to save time, reduce costs, or increase revenue.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-secondary-100 mb-4">
                  <Shield className="w-8 h-8 text-secondary-700" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2 text-gray-900">Enterprise-Grade</h3>
                <p className="text-gray-700">Fortune 500 infrastructure and security at small business prices.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-green-100 mb-4">
                  <CheckCircle className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2 text-gray-900">Fixed-Price</h3>
                <p className="text-gray-700">Budget with confidence. No hourly billing surprises.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Tiers */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Choose Your Business Package
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              All packages include setup, implementation, testing, training, documentation, and post-launch support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {businessPricingTiers.map((tier, index) => (
              <PricingCard
                key={tier.id}
                name={tier.name}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                highlighted={tier.highlighted}
                cta={tier.cta}
                priceDetail={tier.priceDetail}
                href="/contact"
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Add-On Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Enhance any package or purchase standalone services as needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {addOnServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900">
                  {service.name}
                </h3>
                <div className="text-3xl font-bold text-primary-700 mb-2">
                  {service.price}
                  <span className="text-sm font-normal text-gray-800 ml-2">
                    {service.priceUnit}
                  </span>
                </div>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <a
                  href="/contact"
                  className="inline-flex items-center text-primary-700 hover:text-primary-700 font-semibold"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
            Business Package Comparison
          </h2>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="border-b-2 border-gray-400">
                  <th className="p-4 text-left text-gray-900 font-bold">Feature</th>
                  {businessPricingTiers.map((tier) => (
                    <th
                      key={tier.id}
                      className={`p-4 text-center text-gray-900 font-bold ${
                        tier.highlighted ? 'bg-primary-50' : ''
                      }`}
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: 'Project Scope',
                    values: ['Small (5 pages)', 'Medium (15 pages)', 'Custom/Unlimited'],
                  },
                  {
                    feature: 'Automation Workflows',
                    values: ['1 workflow', 'Up to 5 workflows', 'Unlimited'],
                  },
                  {
                    feature: 'Cloud Infrastructure',
                    values: ['Hosting guidance', 'Full setup (AWS/GCP)', 'Multi-region, HA'],
                  },
                  {
                    feature: 'Support Duration',
                    values: ['30 days', '90 days', '6 months'],
                  },
                  {
                    feature: 'Training & Documentation',
                    values: ['Basic', 'Complete', 'Comprehensive + workshops'],
                  },
                  {
                    feature: 'Monitoring & Alerts',
                    values: ['-', 'Included', 'Advanced + on-call'],
                  },
                  {
                    feature: 'Security Hardening',
                    values: ['Basic SSL', 'DevSecOps', 'Enterprise compliance'],
                  },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-400">
                    <td className="p-4 font-semibold text-gray-900">{row.feature}</td>
                    {row.values.map((value, idx) => (
                      <td
                        key={idx}
                        className={`p-4 text-center text-gray-700 ${
                          businessPricingTiers[idx].highlighted ? 'bg-primary-50' : ''
                        }`}
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
            Our Guarantees
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex gap-4 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2 text-gray-900">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-700">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
              Pricing FAQs
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Are these prices really fixed?',
                  answer:
                    'Yes! The price we quote in our proposal is the price you pay. No surprise costs, no scope creep charges. If the project requirements change significantly, we\'ll discuss that upfront before proceeding.',
                },
                {
                  question: 'What payment methods do you accept?',
                  answer:
                    'We accept e-transfer (preferred for Canadian clients), wire transfer, credit card (via Stripe), and cheque. For projects over $5,000, we typically do 50% upfront and 50% on completion. Larger projects can be milestone-based.',
                },
                {
                  question: 'Do you offer payment plans?',
                  answer:
                    'Yes, for projects over $5,000 we offer flexible payment terms. We can split payments into milestones or arrange monthly payment plans for ongoing services like maintenance and support.',
                },
                {
                  question: 'What\'s NOT included in the pricing?',
                  answer:
                    'Our pricing includes our services and expertise. Not included: third-party tools (domain names, hosting fees, email marketing platforms, etc.), stock images or premium assets, and ongoing monthly service costs (AWS bills, SaaS subscriptions). We\'ll clearly outline all third-party costs in the proposal.',
                },
                {
                  question: 'Can I customize a package?',
                  answer:
                    'Absolutely! These packages are starting points. Most clients customize based on their specific needs. Book a free consultation and we\'ll design a custom package with clear, fixed pricing.',
                },
                {
                  question: 'What happens after the support period ends?',
                  answer:
                    'You own everything we build—code, documentation, access. After support ends, you can maintain it yourself, hire us for ongoing monthly maintenance ($500/month), or purchase hourly consulting as needed ($150/hour).',
                },
                {
                  question: 'Do you offer discounts?',
                  answer:
                    'We offer 10% discounts for: (1) Non-profits and registered charities, (2) Multi-project packages (book 2+ services), (3) Referrals (both parties get 10% off next project). Military and first responders also receive 10% off.',
                },
                {
                  question: 'How does the money-back guarantee work?',
                  answer:
                    'If you\'re not satisfied within the first 7 days of starting the project, we\'ll refund your deposit, no questions asked. After that, we work on milestone approvals—you only pay for milestones you approve.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold font-heading mb-3 text-gray-900">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Our Pricing */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
              Why Our Pricing Is Different
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: DollarSign,
                  title: 'No Hourly Billing',
                  description: 'Fixed prices mean no watching the clock. We focus on delivering results, not billing hours.',
                },
                {
                  icon: CheckCircle,
                  title: 'All-Inclusive',
                  description: 'Setup, implementation, testing, training, documentation, and support—all included.',
                },
                {
                  icon: Clock,
                  title: 'Transparent Timeline',
                  description: 'Clear timelines in every proposal. We deliver on time or communicate proactively.',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
                  <p className="text-white/90">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Need Personal Website? */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-gray-50 p-8 rounded-lg shadow-md border-2 border-primary-200">
            <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900">
              Looking for a Personal Website Instead?
            </h3>
            <p className="text-gray-700 mb-6">
              Need a portfolio, blog, or personal brand site? Check out our personal website packages starting at just $599.
            </p>
            <Link
              href="/pricing/personal"
              className="inline-flex items-center px-8 py-4 border-2 border-primary-800 text-primary-900 bg-white hover:bg-primary-800 hover:text-white rounded-lg text-lg font-bold transition-colors shadow-lg hover:shadow-xl"
            >
              View Personal Pricing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Scale Your Business?"
        description="Book a free consultation to discuss your project. We'll provide a custom quote with transparent, fixed pricing and clear ROI projections."
        primaryButton={{ text: 'Get Free Quote', href: '/contact' }}
        secondaryButton={{ text: 'View All Services', href: '/services' }}
        variant="simple"
      />
    </>
  );
}
