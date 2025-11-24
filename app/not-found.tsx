'use client';

import { useState } from 'react';
import { Home, Search, ArrowLeft, FileQuestion } from 'lucide-react';

export default function NotFoundPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const popularPages = [
    { name: 'Home', href: '/', description: 'Return to homepage' },
    { name: 'Services', href: '/services', description: 'Explore our IT solutions' },
    { name: 'About Us', href: '/about', description: 'Learn about our team' },
    { name: 'Blog', href: '/blog', description: 'Read tech insights' },
    { name: 'Contact', href: '/contact', description: 'Get in touch' },
    { name: 'Pricing', href: '/pricing', description: 'View packages and pricing' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Redirect to blog search with query
      window.location.href = `/blog?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Animated 404 */}
        <div className="mb-8 relative">
          <div className="inline-block relative">
            {/* Large 404 Text with Gradient */}
            <h1 className="text-9xl md:text-[200px] font-bold font-heading bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent animate-pulse">
              404
            </h1>

            {/* Floating Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
              <FileQuestion className="w-16 h-16 md:w-24 md:h-24 text-primary-400 opacity-50" />
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 text-gray-900">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
          Oops! The page you're looking for seems to have wandered off into the cloud.
          Don't worry, we'll help you find your way back.
        </p>

        {/* Search Bar */}
        <div className="mb-12 max-w-xl mx-auto">
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search our site..."
                className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-400 bg-white text-gray-900 focus:border-primary-600 focus:outline-none text-lg"
              />
            </div>
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-primary-700 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
            >
              Search
            </button>
          </form>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Quick Actions
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Home className="w-5 h-5" />
              Go Home
            </a>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-semibold rounded-lg transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </div>

        {/* Popular Pages */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularPages.map((page, index) => (
              <a
                key={index}
                href={page.href}
                className="group p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-primary-600"
              >
                <h4 className="text-lg font-bold font-heading mb-2 text-gray-900 group-hover:text-primary-700 transition-colors">
                  {page.name}
                </h4>
                <p className="text-sm text-gray-800">
                  {page.description}
                </p>
              </a>
            ))}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 p-6 bg-primary-50 rounded-lg max-w-2xl mx-auto">
          <h3 className="text-lg font-bold text-primary-900 mb-2">
            Still Can't Find What You're Looking For?
          </h3>
          <p className="text-gray-700 mb-4">
            We're here to help! Contact us and we'll point you in the right direction.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-primary-700 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Contact Support
          </a>
        </div>

        {/* Fun Error Code */}
        <div className="mt-12 text-sm text-gray-700 space-y-1">
          <p>Error Code: PAGE_NOT_FOUND_404</p>
          <p>Time: {new Date().toLocaleString()}</p>
          <p className="italic">
            "In the cloud, we trust. But sometimes pages get lost in the mist."
          </p>
        </div>
      </div>
    </div>
  );
}
