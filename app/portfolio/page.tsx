'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import Hero from '@/components/ui/Hero';
import TestimonialCard from '@/components/ui/TestimonialCard';
import CTA from '@/components/ui/CTA';
import { portfolioItems, portfolioCategories } from '@/data/portfolio';
import { CheckCircle, TrendingUp } from 'lucide-react';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');

  const filteredProjects =
    selectedCategory === 'All Projects'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <>
      <Hero
        title="Real Results for Real Businesses"
        subtitle="Portfolio & Case Studies"
        description="See how we've helped Canadian businesses save time, reduce costs, and scale their operations with modern technology solutions."
        variant="gradient"
        size="medium"
      />

      {/* Category Filter */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8 md:p-12">
                  {/* Header */}
                  <div className="mb-8">
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">
                      {project.category}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                      {project.title}
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">{project.description}</p>
                  </div>

                  {/* Challenge */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                      The Challenge
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{project.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                      The Solution
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">{project.solution}</p>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                      Results & Impact
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.results.map((result, idx) => (
                        <div key={idx} className="flex items-start gap-3 bg-white dark:bg-gray-900 p-4 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  {project.testimonial && (
                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-lg border-l-4 border-primary-600">
                      <p className="text-lg italic text-gray-800 dark:text-gray-200 mb-4">
                        "{project.testimonial.content}"
                      </p>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        — {project.testimonial.name}, {project.testimonial.role}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-400">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-white/90">
              Proven results across dozens of projects for Canadian businesses.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '40-70%', label: 'Average Cost Reduction' },
              { number: '15-20hrs', label: 'Weekly Time Saved' },
              { number: '98%', label: 'Client Satisfaction' },
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

      {/* CTA */}
      <CTA
        title="Ready to Get Similar Results?"
        description="Let's discuss your project and see how we can help you achieve the same kind of transformation."
        primaryButton={{ text: 'Start Your Project', href: '/contact' }}
        secondaryButton={{ text: 'View Services', href: '/services' }}
        variant="gradient"
      />
    </>
  );
}
