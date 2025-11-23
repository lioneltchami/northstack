'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import Hero from '@/components/ui/Hero';
import { resources, resourceCategories } from '@/data/resources';
import { Download, FileText, CheckSquare, PlayCircle, Code } from 'lucide-react';

const iconMap: Record<string, any> = {
  guide: FileText,
  checklist: CheckSquare,
  video: PlayCircle,
  template: Code,
};

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Resources');
  const [selectedType, setSelectedType] = useState('all');

  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      selectedCategory === 'All Resources' || resource.category === selectedCategory;
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    return matchesCategory && matchesType;
  });

  return (
    <>
      <Hero
        title="Free Resources for Canadian Businesses"
        subtitle="Guides, Checklists & Templates"
        description="Download practical guides, checklists, and templates to help you implement modern IT solutions in your business."
        variant="gradient"
        size="medium"
      />

      {/* Filters */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="mb-8">
            <h3 className="text-center text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Filter by Category
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {resourceCategories.map((category) => (
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
          </div>

          {/* Type Filter */}
          <div className="mb-12">
            <h3 className="text-center text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Filter by Type
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { id: 'all', name: 'All Types' },
                { id: 'guide', name: 'Guides' },
                { id: 'checklist', name: 'Checklists' },
                { id: 'template', name: 'Templates' },
                { id: 'video', name: 'Videos' },
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedType === type.id
                      ? 'bg-secondary-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {type.name}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => {
              const IconComponent = iconMap[resource.type] || FileText;
              return (
                <div
                  key={resource.id}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-6">
                    {/* Icon and Type Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded-full text-xs font-semibold uppercase">
                        {resource.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold font-heading mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {resource.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{resource.description}</p>

                    {/* Category Tag */}
                    <div className="mb-4">
                      <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                        {resource.category}
                      </span>
                    </div>

                    {/* Download Button */}
                    <a
                      href={resource.downloadUrl}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <Download className="w-5 h-5" />
                      Download Free
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600 dark:text-gray-300">
                No resources found matching your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Want More Resources?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Subscribe to our newsletter for exclusive guides, automation templates, and industry insights
              delivered to your inbox every Tuesday.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 whitespace-nowrap"
              >
                Get Free Resources
              </button>
            </form>
            <p className="text-sm text-white/70 mt-4">
              Join 500+ Canadian business owners. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Need Custom Help */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Need Personalized Help?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              These resources are a great starting point, but every business is different. Let's discuss
              how we can customize a solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Book Free Consultation
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-900/20 font-semibold rounded-lg transition-all duration-300"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
