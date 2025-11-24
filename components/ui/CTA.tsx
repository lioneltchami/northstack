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
          ? 'bg-gradient-to-r from-primary-800 to-secondary-800 text-white'
          : 'bg-gray-50 text-gray-900'
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6" style={{textShadow: variant === 'gradient' ? '0 2px 4px rgba(0,0,0,0.2)' : 'none'}}>
            {title}
          </h2>
          <p
            className={`text-lg md:text-xl mb-8 ${
              variant === 'gradient'
                ? 'text-white'
                : 'text-gray-700'
            }`}
          >
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryButton.href}
              className={`inline-flex items-center px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 ${
                variant === 'gradient'
                  ? 'bg-white text-primary-900 hover:bg-gray-100 border-2 border-white'
                  : 'bg-primary-800 text-white hover:bg-primary-900 border-2 border-primary-900'
              }`}
            >
              {primaryButton.text}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className={`inline-flex items-center px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                  variant === 'gradient'
                    ? 'bg-white/10 text-white hover:bg-white/20 border-2 border-white/80 hover:border-white backdrop-blur-md focus:ring-white'
                    : 'border-2 border-primary-800 text-primary-900 bg-white hover:bg-primary-800 hover:text-white'
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
