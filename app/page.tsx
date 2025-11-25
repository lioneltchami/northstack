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
  Building2,
  User,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

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
          secondary: { text: 'View All Services', href: '/services' },
        }}
        variant="gradient"
      >
        <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
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

      {/* Services Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
              className="inline-flex items-center px-8 py-4 bg-primary-800 hover:bg-primary-900 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] focus:outline-none focus:ring-4 focus:ring-primary-400 border-2 border-primary-900"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              Why Choose NorthStack Solutions?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
                  'Senior DevOps engineer with IBM Canada and major energy companies. Battle-tested at scale.',
              },
              {
                icon: TrendingUp,
                title: 'Proven Results',
                description:
                  'Consistently reduce operational costs by 50%+ while improving performance and reliability.',
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
                <div className="inline-flex p-4 rounded-full bg-primary-200 text-primary-800 mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              How We Work
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A streamlined process designed to deliver results quickly and efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
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
              <div key={index} className="relative z-10">
                <div className="text-6xl font-bold font-heading text-gray-200 mb-4" aria-hidden="true">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-700">{step.description}</p>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent z-0"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <ClientLogos />

      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
      <section className="section-padding bg-gradient-to-r from-primary-800 to-secondary-800 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '7+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-black/20 backdrop-blur-sm border-2 border-white/20">
                <div className="text-5xl md:text-6xl font-extrabold font-heading mb-3 text-white" style={{textShadow: '0 2px 4px rgba(0,0,0,0.2)'}}>
                  {stat.number}
                </div>
                <div className="text-white text-lg md:text-xl font-semibold" style={{textShadow: '0 2px 4px rgba(0,0,0,0.2)'}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              Latest Insights
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
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
              className="inline-flex items-center px-8 py-4 border-2 border-primary-800 text-primary-900 bg-white hover:bg-primary-800 hover:text-white font-bold text-lg rounded-lg transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary-400 focus:ring-offset-2"
            >
              Read More Articles
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Selector Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4">
              Find the Right Pricing for You
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Whether you're a business or an individual, we have transparent, fixed-price solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Business Pricing Card */}
            <Link href="/pricing" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200 hover:border-primary-600 h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary-100 rounded-full group-hover:bg-primary-200 transition-colors">
                    <Building2 className="w-12 h-12 text-primary-700" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-center text-gray-900">
                  Business Solutions
                </h3>
                <p className="text-gray-700 mb-6 text-center">
                  Enterprise-grade infrastructure, automation, and DevOps for growing businesses.
                </p>
                <div className="mb-6">
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-primary-800">$1,500+</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary-700 mr-2 flex-shrink-0" />
                      <span>Cloud infrastructure & automation</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary-700 mr-2 flex-shrink-0" />
                      <span>CI/CD pipelines & DevOps</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary-700 mr-2 flex-shrink-0" />
                      <span>Enterprise security & compliance</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-primary-700 mr-2 flex-shrink-0" />
                      <span>90 days - 6 months support</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <span className="inline-flex items-center text-primary-800 font-bold text-lg group-hover:text-primary-900">
                    View Business Pricing
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Personal Pricing Card */}
            <Link href="/pricing/personal" className="group">
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200 hover:border-secondary-600 h-full">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-secondary-100 rounded-full group-hover:bg-secondary-200 transition-colors">
                    <User className="w-12 h-12 text-secondary-700" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-center text-gray-900">
                  Personal Websites
                </h3>
                <p className="text-gray-700 mb-6 text-center">
                  Beautiful, professional websites for individuals, freelancers, and creators.
                </p>
                <div className="mb-6">
                  <div className="text-center mb-4">
                    <span className="text-4xl font-bold text-secondary-800">$599+</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-secondary-700 mr-2 flex-shrink-0" />
                      <span>Custom design & development</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-secondary-700 mr-2 flex-shrink-0" />
                      <span>Portfolio, blog, or e-commerce</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-secondary-700 mr-2 flex-shrink-0" />
                      <span>No monthly fees - own forever</span>
                    </li>
                    <li className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-secondary-700 mr-2 flex-shrink-0" />
                      <span>14-60 days support included</span>
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <span className="inline-flex items-center text-secondary-800 font-bold text-lg group-hover:text-secondary-900">
                    View Personal Pricing
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTA
        title="Ready to Transform Your IT Infrastructure?"
        description="Let's discuss how we can help your Canadian business scale efficiently with modern DevOps and automation solutions."
        primaryButton={{ text: 'Book Free Consultation', href: '/contact' }}
        secondaryButton={{ text: 'View All Services', href: '/services' }}
        variant="gradient"
      />
    </>
  );
}
