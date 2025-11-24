'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import Hero from '@/components/ui/Hero';
import ServiceCard from '@/components/ui/ServiceCard';
import CTA from '@/components/ui/CTA';
import { services, serviceCategories } from '@/data/services';
import {
  Globe,
  Workflow,
  Server,
  Cloud,
  Shield,
  Video,
  Headphones,
  Code,
} from 'lucide-react';

const iconMap: Record<string, any> = {
  Globe,
  Workflow,
  Server,
  Cloud,
  Shield,
  Video,
  Headphones,
  Code,
};

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices =
    selectedCategory === 'all'
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <>
      <Hero
        title="Comprehensive IT Solutions for Modern Businesses"
        subtitle="Our Services"
        description="From web development to cloud infrastructure, we deliver enterprise-grade technology solutions tailored for Canadian small businesses."
        variant="gradient"
        size="medium"
      />

      {/* Services Navigation */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                  selectedCategory === category.id
                    ? 'bg-primary-700 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Globe;
              return (
                <div key={service.id} className="flex">
                  <ServiceCard
                    title={service.title}
                    description={service.description}
                    icon={IconComponent}
                    features={service.features}
                    href="/contact"
                    delay={index * 0.1}
                  />
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-700 dark:text-gray-200">
                No services found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Why Choose NorthStack Solutions?
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              We combine enterprise experience with small business pricing to deliver exceptional value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Enterprise Experience',
                description: '7+ years working with IBM Canada and major energy companies.',
                stat: '7+ Years',
              },
              {
                title: 'Proven Results',
                description: 'Average 50%+ cost reduction and 3x efficiency improvements.',
                stat: '50+ Projects',
              },
              {
                title: 'Canadian Focus',
                description: 'Based in Calgary, understanding Canadian business and compliance.',
                stat: '100% Canadian',
              },
              {
                title: 'Fixed Pricing',
                description: 'No surprises. The price we quote is the price you pay.',
                stat: 'No Hidden Fees',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl font-bold font-heading text-primary-700 dark:text-primary-300 mb-2">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Simple, Transparent Process
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              From initial consultation to ongoing support, we make it easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Free Consultation',
                description:
                  '30-minute call to understand your needs, challenges, and goals. No sales pressure.',
              },
              {
                step: '02',
                title: 'Custom Proposal',
                description:
                  'Detailed proposal with timeline, pricing, and technical approach. Fixed-price quote.',
              },
              {
                step: '03',
                title: 'Implementation',
                description:
                  'Regular updates, milestone reviews, and transparent communication throughout.',
              },
              {
                step: '04',
                title: 'Launch & Support',
                description:
                  'Training, documentation, and post-launch support included. No surprise fees.',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold font-heading text-primary-100 dark:text-primary-900/30 mb-4" aria-hidden="true">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent dark:from-primary-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages Comparison */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Common Service Packages
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">
              Most clients choose one of these popular packages, but every project is customized to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Website + Automation Starter',
                price: '$3,500',
                description: 'Perfect for small businesses launching their digital presence.',
                features: [
                  'Professional 5-page website',
                  'Mobile-responsive design',
                  'SSL certificate & hosting setup',
                  'Basic SEO optimization',
                  '2 automation workflows',
                  'Email marketing integration',
                  '30 days support',
                ],
              },
              {
                name: 'Business Growth Package',
                price: '$6,500',
                description: 'Ideal for growing businesses ready to scale operations.',
                features: [
                  'Custom web application (15 pages)',
                  'E-commerce or booking system',
                  'Complete automation suite (5 workflows)',
                  'Cloud infrastructure setup (AWS/GCP)',
                  'CI/CD pipeline',
                  'Analytics & monitoring',
                  '90 days support',
                ],
                highlighted: true,
              },
              {
                name: 'Enterprise Cloud Migration',
                price: '$12,500+',
                description: 'Comprehensive cloud transformation for established businesses.',
                features: [
                  'Full cloud architecture (AWS/Azure/GCP)',
                  'Infrastructure as Code (Terraform)',
                  'Unlimited automation workflows',
                  'Security hardening & compliance',
                  'Disaster recovery planning',
                  'Kubernetes/container orchestration',
                  '6 months support',
                ],
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg ${
                  pkg.highlighted
                    ? 'bg-primary-700 text-white shadow-2xl scale-105'
                    : 'bg-white dark:bg-gray-900 shadow-md'
                }`}
              >
                <h3
                  className={`text-2xl font-bold font-heading mb-2 ${
                    pkg.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {pkg.name}
                </h3>
                <div
                  className={`text-4xl font-bold font-heading mb-4 ${
                    pkg.highlighted ? 'text-white' : 'text-primary-700 dark:text-primary-300'
                  }`}
                >
                  {pkg.price}
                </div>
                <p
                  className={`mb-6 ${
                    pkg.highlighted ? 'text-white' : 'text-gray-700 dark:text-gray-200'
                  }`}
                >
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span
                        className={`${
                          pkg.highlighted ? 'text-white' : 'text-primary-700 dark:text-primary-300'
                        } mt-1`}
                      >
                        ✓
                      </span>
                      <span
                        className={
                          pkg.highlighted ? 'text-white' : 'text-gray-700 dark:text-gray-200'
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    pkg.highlighted
                      ? 'bg-white text-primary-700 hover:bg-gray-100 focus:ring-white'
                      : 'bg-primary-700 text-white hover:bg-primary-800 dark:bg-primary-700 dark:hover:bg-primary-800 focus:ring-primary-500'
                  }`}
                >
                  Get Free Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: 'Do you work with clients outside of Calgary?',
                  answer:
                    'Absolutely! While we\'re based in Calgary, we serve clients across all of Canada. Most projects are completed remotely with video calls, screen sharing, and comprehensive documentation.',
                },
                {
                  question: 'What if I need changes after the project is complete?',
                  answer:
                    'All projects include a post-launch support period (30-180 days depending on package). After that, we offer monthly maintenance packages or hourly consulting rates for ongoing changes and support.',
                },
                {
                  question: 'Can you integrate with our existing tools and systems?',
                  answer:
                    'Yes! Integration is one of our specialties. We work with most major platforms (Shopify, WordPress, Salesforce, HubSpot, etc.) and can build custom integrations using APIs and automation tools.',
                },
                {
                  question: 'How long does a typical project take?',
                  answer:
                    'Timeline varies by project: simple websites or automation workflows take 1-2 weeks, comprehensive web applications take 2-4 weeks, and complex cloud migrations can take 4-8 weeks. We provide a detailed timeline in every proposal.',
                },
                {
                  question: 'Do you offer payment plans?',
                  answer:
                    'Yes, for projects over $5,000 we offer split payments (50% upfront, 50% on completion). For larger enterprise projects, we can arrange milestone-based payments. Payment plans can be discussed during consultation.',
                },
                {
                  question: 'What makes you different from other IT consultants?',
                  answer:
                    'Three things: (1) Enterprise experience at small business prices, (2) Fixed-price projects with no surprise costs, and (3) Education-focused approach—we teach you how systems work so you\'re never dependent on us.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-bold font-heading mb-3 text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-200">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Get Started?"
        description="Book a free 30-minute consultation to discuss your project. No sales pressure, just honest advice on the best technology solutions for your business."
        primaryButton={{ text: 'Book Free Consultation', href: '/contact' }}
        secondaryButton={{ text: 'View Pricing', href: '/pricing' }}
        variant="gradient"
      />
    </>
  );
}
