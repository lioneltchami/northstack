'use client';

import Hero from '@/components/ui/Hero';
import ServiceCard from '@/components/ui/ServiceCard';
import TestimonialCard from '@/components/ui/TestimonialCard';
import BlogCard from '@/components/ui/BlogCard';
import CTA from '@/components/ui/CTA';
import TrustSignals from '@/components/TrustSignals';
import ClientLogos from '@/components/ClientLogos';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { blogPosts } from '@/data/blog-posts';
import {
  Globe,
  Workflow,
  Server,
  Cloud,
  Shield,
  Video,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
} from 'lucide-react';

// Icon mapping for services
const iconMap: Record<string, any> = {
  Globe,
  Workflow,
  Server,
  Cloud,
  Shield,
  Video,
};

export default function Home() {
  // Get top 6 services for homepage
  const featuredServices = services.slice(0, 6);

  // Get latest 3 blog posts
  const latestPosts = blogPosts.filter(post => post.published).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <Hero
        subtitle="7+ Years Experience | Enterprise-Grade Solutions"
        title="Modern IT Solutions & Automation for Canadian Businesses"
        description="Enterprise-grade DevOps expertise meets personalized service. Based in Calgary, serving businesses across Canada with cloud infrastructure, automation, and innovative IT solutions."
        cta={{
          primary: { text: 'Book Free Consultation', href: '/contact' },
          secondary: { text: 'View Our Services', href: '/services' },
        }}
        variant="gradient"
      >
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8 text-white/90">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">7+ Years Experience</span>
          </div>
          <div className="flex items-center space-x-2">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Enterprise Background</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="w-5 h-5" />
            <span className="font-semibold">Canadian-Based</span>
          </div>
        </div>
      </Hero>

      {/* Trust Signals Section */}
      <TrustSignals />

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              Why Choose NorthStack Solutions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Enterprise expertise with small business pricing. We bring years of experience
              from major companies to deliver personalized IT solutions for Canadian businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Enterprise Experience',
                description:
                  'Former IBM Canada contractor with hands-on experience at major energy companies.',
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description:
                  'Reduced client costs by 40-70% while improving performance and reliability.',
              },
              {
                icon: Shield,
                title: 'Security First',
                description:
                  'DevSecOps expertise ensures your infrastructure is secure from day one.',
              },
              {
                icon: Users,
                title: 'Canadian Focus',
                description:
                  'Based in Calgary with deep understanding of Canadian business needs and regulations.',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From web development to cloud infrastructure, we offer comprehensive IT solutions
              tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Globe;
              return (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={IconComponent}
                  features={service.features.slice(0, 4)}
                  href="/services"
                  delay={index * 0.1}
                />
              );
            })}
          </div>

          <div className="text-center">
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A streamlined process designed to deliver results quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery Call',
                description:
                  'Free 30-minute consultation to understand your needs and challenges.',
              },
              {
                step: '02',
                title: 'Proposal & Planning',
                description:
                  'Detailed proposal with timeline, costs, and technical approach.',
              },
              {
                step: '03',
                title: 'Implementation',
                description:
                  'Efficient execution with regular updates and milestone reviews.',
              },
              {
                step: '04',
                title: 'Launch & Support',
                description:
                  'Smooth deployment with training, documentation, and ongoing support.',
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold font-heading text-primary-100 dark:text-primary-900/30 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent dark:from-primary-700"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real results from real Canadian businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                content={testimonial.content}
                rating={testimonial.rating}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '7+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold font-heading mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technical guides, industry insights, and automation strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post, index) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                date={post.date}
                readTime={post.readTime}
                category={post.category}
                delay={index * 0.1}
              />
            ))}
          </div>

          <div className="text-center">
            <a
              href="/blog"
              className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg transition-all duration-300"
            >
              Read More Articles
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        title="Ready to Transform Your IT Infrastructure?"
        description="Let's discuss how we can help your Canadian business scale efficiently with modern DevOps and automation solutions."
        primaryButton={{ text: 'Schedule Free Consultation', href: '/contact' }}
        secondaryButton={{ text: 'View Pricing', href: '/pricing' }}
        variant="gradient"
      />
    </>
  );
}
