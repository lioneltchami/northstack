'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import Hero from '@/components/ui/Hero';
import BlogCard from '@/components/ui/BlogCard';
import { blogPosts, blogCategories, calculateReadingTime } from '@/data/blog-posts';
import { Search } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');
  const [searchQuery, setSearchQuery] = useState('');

  const publishedPosts = blogPosts.filter((post) => post.published);

  const filteredPosts = publishedPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All Posts' || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  const featuredPost = publishedPosts[0];

  return (
    <>
      <Hero
        title="Tech Insights & Automation Strategies"
        subtitle="Blog & Resources"
        description="Practical guides, industry insights, and proven strategies for Canadian businesses leveraging modern technology."
        variant="gradient"
        size="medium"
      />

      {/* Featured Post */}
      {featuredPost && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-8 md:p-12 shadow-lg">
              <div className="text-sm font-semibold text-primary-700 mb-2">
                Featured Article
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900">
                {featuredPost.title}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-800">
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{calculateReadingTime(featuredPost.content)}</span>
                <span>•</span>
                <span className="px-3 py-1 bg-primary-200 text-primary-700 rounded-full">
                  {featuredPost.category}
                </span>
              </div>
              <a
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex items-center px-6 py-3 bg-primary-700 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Read Full Article
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-400 bg-white text-gray-900 focus:border-primary-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {blogCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary-700 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                slug={post.slug}
                date={post.date}
                readTime={calculateReadingTime(post.content)}
                category={post.category}
                delay={index * 0.1}
              />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-800">
                No articles found. Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Get Weekly Tech Insights
            </h2>
            <p className="text-xl mb-8 text-white">
              Join 500+ Canadian business owners receiving practical automation tips, cloud strategies,
              and technology updates every Tuesday.
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
                className="px-8 py-4 bg-white text-primary-700 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 whitespace-nowrap"
              >
                Subscribe Free
              </button>
            </form>
            <p className="text-sm text-white/70 mt-4">
              No spam. Unsubscribe anytime. CASL compliant.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
            Popular Topics
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Email Automation',
              'AWS Cost Optimization',
              'Self-Hosting',
              'Nextcloud',
              'Small Business',
              'DevOps',
              'Cloud Migration',
              'n8n',
              'CASL Compliance',
              'Home Server',
              'Proxmox',
              'CI/CD',
            ].map((tag, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(tag)}
                className="px-6 py-3 bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 rounded-full transition-all duration-300"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
