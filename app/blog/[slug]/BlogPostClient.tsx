'use client';

import { useState, useEffect } from 'react';
import { BlogPost } from '@/types';
import {
  Calendar,
  Clock,
  Tag,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
  Mail,
  ArrowLeft,
  ExternalLink,
} from 'lucide-react';
import BlogCard from '@/components/ui/BlogCard';
import TableOfContents from '@/components/ui/TableOfContents';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import { getAuthor } from '@/data/authors';
import { calculateReadingTime } from '@/data/blog-posts';
import 'highlight.js/styles/github-dark.css';

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const [readingProgress, setReadingProgress] = useState(0);
  const author = getAuthor(post.authorId);
  const dynamicReadTime = calculateReadingTime(post.content);

  // Helper function to generate IDs from heading text
  const generateId = (text: any): string => {
    const textString = typeof text === 'string' ? text : String(text);
    return textString
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  useEffect(() => {
    const handleScroll = () => {
      const articleContent = document.querySelector('.blog-article-content');
      if (!articleContent) return;

      const articleTop = articleContent.getBoundingClientRect().top + window.scrollY;
      const articleHeight = articleContent.clientHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // Calculate progress based on article content only
      const scrolledIntoArticle = Math.max(0, scrollTop - articleTop + windowHeight);
      const progress = (scrolledIntoArticle / articleHeight) * 100;
      setReadingProgress(Math.min(Math.round(progress), 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = post.title;

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-primary-700 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Breadcrumbs & Back Button */}
      <div className="section-padding bg-gray-50 py-8">
        <div className="container-custom max-w-7xl">
          <div className="mb-4">
            <Breadcrumbs
              items={[
                { label: 'Blog', href: '/blog' },
                { label: post.category, href: `/blog?category=${post.category}` },
                { label: post.title },
              ]}
            />
          </div>
          <a
            href="/blog"
            className="inline-flex items-center text-primary-700 hover:text-primary-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Blog
          </a>
        </div>
      </div>

      {/* Article Header */}
      <article className="section-padding bg-white">
        <div className="container-custom max-w-7xl">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 text-gray-900">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-800 mb-8">{post.excerpt}</p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-gray-400">
            <div className="flex items-center gap-2 text-gray-800">
              <Calendar className="w-5 h-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
              <Clock className="w-5 h-5" />
              <span>{dynamicReadTime}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-800">
              <span>By {author.name}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <Tag className="w-5 h-5 text-gray-800" />
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Share Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12 pb-8 border-b border-gray-400">
            <span className="text-gray-800 font-semibold flex items-center gap-2">
              <Share2 className="w-5 h-5" />
              Share:
            </span>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Share on Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Share on Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
              aria-label="Share via Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Article Content */}
          <div className="blog-article-content prose prose-lg prose-primary max-w-none prose-headings:font-heading prose-headings:font-bold prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8 prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-8 prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-6 prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4 prose-a:text-primary-700 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-code:text-primary-700 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6 prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6 prose-li:my-2 prose-li:text-gray-700 prose-blockquote:border-l-4 prose-blockquote:border-primary-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700 prose-img:rounded-lg prose-img:shadow-lg prose-hr:my-8 prose-hr:border-gray-300">
            <ReactMarkdown
              rehypePlugins={[rehypeHighlight]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-4xl font-bold font-heading mb-6 mt-8 text-gray-900">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => {
                  const id = generateId(children);
                  return (
                    <h2 id={id} className="text-3xl font-bold font-heading mb-4 mt-8 text-gray-900 border-b-2 border-primary-200 pb-2">
                      {children}
                    </h2>
                  );
                },
                h3: ({ children }) => {
                  const id = generateId(children);
                  return (
                    <h3 id={id} className="text-2xl font-bold font-heading mb-3 mt-6 text-gray-900">
                      {children}
                    </h3>
                  );
                },
                h4: ({ children }) => (
                  <h4 className="text-xl font-semibold font-heading mb-2 mt-4 text-gray-900">
                    {children}
                  </h4>
                ),
                p: ({ children }) => (
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="my-4 list-disc pl-6 space-y-2">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="my-4 list-decimal pl-6 space-y-2">
                    {children}
                  </ol>
                ),
                li: ({ children }) => (
                  <li className="text-gray-700 leading-relaxed">
                    {children}
                  </li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-4 italic text-gray-700 bg-primary-50 rounded-r">
                    {children}
                  </blockquote>
                ),
                code: ({ className, children, ...props }) => {
                  const match = /language-(\w+)/.exec(className || '');
                  const isInline = !match;

                  if (isInline) {
                    return (
                      <code className="text-primary-700 bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                        {children}
                      </code>
                    );
                  }

                  return (
                    <div className="my-6">
                      <div className="bg-gray-800 rounded-t px-4 py-2 text-gray-300 text-sm font-mono">
                        {match ? match[1] : 'code'}
                      </div>
                      <pre className="bg-gray-900 text-gray-100 rounded-b p-4 overflow-x-auto">
                        <code className={className} {...props}>
                          {children}
                        </code>
                      </pre>
                    </div>
                  );
                },
                pre: ({ children }) => <>{children}</>,
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="text-primary-700 hover:text-primary-800 underline decoration-primary-300 hover:decoration-primary-500 transition-colors"
                    target={href?.startsWith('http') ? '_blank' : undefined}
                    rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {children}
                  </a>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-gray-900">
                    {children}
                  </strong>
                ),
                em: ({ children }) => (
                  <em className="italic text-gray-800">
                    {children}
                  </em>
                ),
                hr: () => (
                  <hr className="my-8 border-t-2 border-gray-300" />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Author Info */}
          <div className="mt-12 pt-8 border-t border-gray-400">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                {author.image && (
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-bold font-heading mb-1 text-gray-900">
                    {author.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{author.role}</p>
                  <p className="text-gray-800 mb-4">{author.bio}</p>
                  <div className="flex gap-4">
                    {author.linkedin && (
                      <a
                        href={author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary-700 hover:text-primary-800 font-semibold"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                    )}
                    {author.website && (
                      <a
                        href={author.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-primary-700 hover:text-primary-800 font-semibold"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Website
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
            </div>

            {/* Table of Contents Sidebar */}
            <div className="lg:col-span-4">
              <TableOfContents content={post.content} />
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((relatedPost, index) => (
                <BlogCard
                  key={relatedPost.slug}
                  title={relatedPost.title}
                  excerpt={relatedPost.excerpt}
                  slug={relatedPost.slug}
                  date={relatedPost.date}
                  readTime={relatedPost.readTime}
                  category={relatedPost.category}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Enjoyed This Article?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Get weekly tech insights, automation tips, and industry news delivered to your inbox every Tuesday.
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
              Join 500+ Canadian business owners. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Need Help Implementing This?
            </h2>
            <p className="text-xl text-gray-800 mb-8">
              We can help you implement the strategies discussed in this article. Book a free consultation
              to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-primary-700 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
              >
                Book Free Consultation
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-primary-600 text-primary-700 hover:bg-primary-50 font-semibold rounded-lg transition-all duration-300"
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
