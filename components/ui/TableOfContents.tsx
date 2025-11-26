'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, List } from 'lucide-react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Extract headings from markdown content
    const extractedHeadings: Heading[] = [];
    const headingRegex = /^(#{2,3})\s+(.+)$/gm;
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();

      extractedHeadings.push({ id, text, level });
    }

    setHeadings(extractedHeadings);
  }, [content]);

  useEffect(() => {
    // Track scroll position to highlight active heading
    const handleScroll = () => {
      const headingElements = headings.map(h => document.getElementById(h.id)).filter(Boolean);

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const element = headingElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveId(headings[i].id);
            return;
          }
        }
      }

      setActiveId('');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  if (headings.length === 0) {
    return null;
  }

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden sticky top-16 z-40 mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
        >
          <span className="flex items-center gap-2 font-semibold text-gray-900">
            <List className="w-5 h-5" />
            Table of Contents
          </span>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4 max-h-96 overflow-y-auto">
            <nav>
              <ul className="space-y-2">
                {headings.map((heading) => (
                  <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 1}rem` }}>
                    <button
                      onClick={() => scrollToHeading(heading.id)}
                      className={`text-left w-full py-1 px-2 rounded transition-colors ${
                        activeId === heading.id
                          ? 'text-primary-700 font-semibold bg-primary-50'
                          : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                      }`}
                    >
                      {heading.text}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* Desktop Sticky Sidebar */}
      <div className="hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <div className="bg-white border-2 border-gray-300 rounded-lg shadow-md p-6">
          <h3 className="text-lg font-bold font-heading mb-4 text-gray-900 flex items-center gap-2">
            <List className="w-5 h-5" />
            Table of Contents
          </h3>
          <nav>
            <ul className="space-y-2">
              {headings.map((heading) => (
                <li key={heading.id} style={{ paddingLeft: `${(heading.level - 2) * 0.75}rem` }}>
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={`text-left text-sm w-full py-1.5 px-2 rounded transition-colors ${
                      activeId === heading.id
                        ? 'text-primary-700 font-semibold bg-primary-50 border-l-2 border-primary-700'
                        : 'text-gray-700 hover:text-primary-700 hover:bg-gray-50'
                    }`}
                  >
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Quick Stats */}
        <div className="mt-6 bg-primary-50 border-2 border-primary-200 rounded-lg p-4">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">{headings.length}</span> sections in this article
          </p>
        </div>
      </div>
    </>
  );
}
