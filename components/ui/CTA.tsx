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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6">
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
              className={`inline-flex items-center px-10 py-5 rounded-lg font-black text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 ${
                variant === 'gradient'
                  ? 'bg-white text-primary-900 hover:bg-gray-100 border-4 border-white'
                  : 'bg-primary-900 text-white hover:bg-black border-4 border-primary-950'
              }`}
            >
              {primaryButton.text}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>

            {secondaryButton && (
              <Link
                href={secondaryButton.href}
                className={`inline-flex items-center px-10 py-5 rounded-lg font-black text-xl transition-all duration-300 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-2 ${
                  variant === 'gradient'
                    ? 'bg-black/30 text-white hover:bg-black/50 border-4 border-white backdrop-blur-md focus:ring-white'
                    : 'border-4 border-primary-900 text-primary-900 bg-white hover:bg-primary-900 hover:text-white'
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
