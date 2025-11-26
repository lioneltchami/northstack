'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X, FileText, Briefcase, Layout } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  type: 'blog' | 'service' | 'page';
  title: string;
  description: string;
  href: string;
  category?: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sample searchable content - in production, this would be dynamically loaded or use an API
  const searchableContent: SearchResult[] = [
    // Services
    { type: 'service', title: 'Cloud Optimization', description: 'Cut AWS costs by 20-40% with expert optimization', href: '/services#cloud-optimization' },
    { type: 'service', title: 'Automation & DevOps', description: 'Eliminate manual tasks and streamline deployments', href: '/automation' },
    { type: 'service', title: 'Home Server Setup', description: 'Personal cloud infrastructure for your home', href: '/home-server' },
    { type: 'service', title: 'Security & Compliance', description: 'Protect your infrastructure and meet compliance requirements', href: '/services#security' },

    // Pages
    { type: 'page', title: 'Pricing', description: 'Transparent pricing for businesses and individuals', href: '/pricing' },
    { type: 'page', title: 'Portfolio', description: 'View our past projects and success stories', href: '/portfolio' },
    { type: 'page', title: 'About Us', description: 'Learn about NorthStack Solutions and our mission', href: '/about' },
    { type: 'page', title: 'Contact', description: 'Get in touch for a free consultation', href: '/contact' },
    { type: 'page', title: 'Free AWS Audit', description: 'Get a personalized cost optimization report', href: '/tools/aws-audit' },
    { type: 'page', title: 'Automation Checklist', description: 'Download our 25-point DevOps guide', href: '/resources/automation-checklist' },
    { type: 'page', title: 'Cost Calculator', description: 'Calculate your potential cloud savings', href: '/tools/cost-calculator' },

    // Blog (sample - in production would fetch from blog posts)
    { type: 'blog', title: 'AWS Cost Optimization Guide', description: 'Complete guide to reducing AWS costs', href: '/blog/aws-cost-optimization', category: 'Cloud' },
    { type: 'blog', title: 'DevOps Automation Best Practices', description: 'Essential automation strategies for modern teams', href: '/blog/devops-automation-best-practices', category: 'DevOps' },
    { type: 'blog', title: 'Home Server Setup Guide', description: 'Build your personal cloud infrastructure', href: '/blog/home-server-setup-guide', category: 'Home Server' },
  ];

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle search
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const searchLower = query.toLowerCase();
    const filtered = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(searchLower) ||
        item.description.toLowerCase().includes(searchLower) ||
        item.category?.toLowerCase().includes(searchLower)
    );

    setResults(filtered.slice(0, 8)); // Limit to 8 results
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        window.location.href = results[selectedIndex].href;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  if (!isOpen) return null;

  const getIcon = (type: SearchResult['type']) => {
    switch (type) {
      case 'blog':
        return FileText;
      case 'service':
        return Briefcase;
      case 'page':
        return Layout;
    }
  };

  const getTypeLabel = (type: SearchResult['type']) => {
    switch (type) {
      case 'blog':
        return 'Blog Post';
      case 'service':
        return 'Service';
      case 'page':
        return 'Page';
    }
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-20 px-4">
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl animate-slide-down">
          {/* Search Input */}
          <div className="flex items-center gap-3 p-4 border-b border-gray-200">
            <Search className="w-5 h-5 text-gray-500 flex-shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, blog posts, and pages..."
              className="flex-1 text-lg outline-none text-gray-900 placeholder-gray-500"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-96 overflow-y-auto">
            {results.length > 0 ? (
              <div className="py-2">
                {results.map((result, index) => {
                  const Icon = getIcon(result.type);
                  return (
                    <Link
                      key={index}
                      href={result.href}
                      onClick={onClose}
                      className={`flex items-start gap-3 px-4 py-3 transition-colors ${
                        index === selectedIndex
                          ? 'bg-primary-50'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        index === selectedIndex
                          ? 'bg-primary-100 text-primary-700'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-gray-900 truncate">
                            {result.title}
                          </h3>
                          <span className="text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded flex-shrink-0">
                            {getTypeLabel(result.type)}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 line-clamp-1">
                          {result.description}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            ) : query ? (
              <div className="py-12 text-center text-gray-600">
                <p>No results found for "{query}"</p>
                <p className="text-sm mt-2">Try searching for services, blog posts, or pages</p>
              </div>
            ) : (
              <div className="py-12 text-center text-gray-600">
                <Search className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                <p className="font-semibold">Quick Search</p>
                <p className="text-sm mt-2">Type to search across all content</p>
                <div className="flex items-center justify-center gap-4 mt-6 text-xs">
                  <div className="flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300">↑</kbd>
                    <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300">↓</kbd>
                    <span>Navigate</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300">Enter</kbd>
                    <span>Select</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-gray-100 rounded border border-gray-300">Esc</kbd>
                    <span>Close</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
