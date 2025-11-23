'use client';

import { m } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface CTAProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: 'gradient' | 'simple';
}

export default function CTA({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = 'gradient',
}: CTAProps) {
  return (
    <section
      className={`section-padding ${
        variant === 'gradient'
          ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
          : 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white'
      }`}
    >
      <div className="container-custom">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
            {title}
          </h2>
          <p
            className={`text-lg md:text-xl mb-8 ${
              variant === 'gradient'
                ? 'text-white/90'
                : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryButton.href}
              className={`inline-flex items-center px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl ${
                variant === 'gradient'
                  ? 'bg-primary-800 text-white hover:bg-primary-900 border-2 border-white/20 hover:border-white/30'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              {primaryButton.text}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className={`inline-flex items-center px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                  variant === 'gradient'
                    ? 'bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm'
                    : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-900/20'
                }`}
              >
                {secondaryButton.text}
              </Link>
            )}
          </div>
        </m.div>
      </div>
    </section>
  );
}
