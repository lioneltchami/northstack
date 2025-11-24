'use client';

import { ReactNode } from 'react';
import { m } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  cta?: {
    primary?: { text: string; href: string };
    secondary?: { text: string; href: string };
  };
  children?: ReactNode;
  variant?: 'gradient' | 'simple' | 'dark';
  size?: 'small' | 'medium' | 'large';
}

export default function Hero({
  title,
  subtitle,
  description,
  cta,
  children,
  variant = 'gradient',
  size = 'large',
}: HeroProps) {
  const sizeClasses = {
    small: 'py-16 md:py-24',
    medium: 'py-24 md:py-32',
    large: 'py-32 md:py-48',
  };

  const backgroundClasses = {
    gradient: 'animated-gradient text-white',
    simple: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white',
    dark: 'bg-gray-900 text-white',
  };

  return (
    <section
      className={`relative overflow-hidden ${sizeClasses[size]} ${backgroundClasses[variant]}`}
    >
      {/* Animated background elements */}
      {variant === 'gradient' && (
        <>
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </>
      )}

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {subtitle && (
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6 ${
                variant === 'gradient'
                  ? 'bg-white/20 backdrop-blur-sm'
                  : 'bg-primary-200 dark:bg-primary-900 text-primary-800 dark:text-primary-300'
              }`}
            >
              {subtitle}
            </m.div>
          )}

          <m.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading mb-6 leading-tight ${
              variant === 'simple' ? 'text-gray-900 dark:text-white' : ''
            }`}
          >
            {title}
          </m.h1>

          {description && (
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className={`text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto ${
                variant === 'gradient'
                  ? 'text-white'
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {description}
            </m.p>
          )}

          {cta && (
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {cta.primary && (
                <a
                  href={cta.primary.href}
                  className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    variant === 'gradient'
                      ? 'bg-primary-800 text-white hover:bg-primary-900 border-2 border-primary-800 hover:border-primary-900 focus:ring-white'
                      : 'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-500'
                  }`}
                >
                  {cta.primary.text}
                </a>
              )}
              {cta.secondary && (
                <a
                  href={cta.secondary.href}
                  className={`px-8 py-4 rounded-lg font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    variant === 'gradient'
                      ? 'bg-gray-900 hover:bg-gray-800 text-white border-2 border-gray-900 hover:border-gray-800 focus:ring-white'
                      : 'border-2 border-primary-700 text-primary-700 hover:bg-primary-50 dark:text-primary-300 dark:border-primary-300 dark:hover:bg-primary-900/20 focus:ring-primary-500'
                  }`}
                >
                  {cta.secondary.text}
                </a>
              )}
            </m.div>
          )}

          {children && (
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className={`mt-12 ${
                variant === 'simple' ? 'text-gray-900 dark:text-white' : ''
              }`}
            >
              {children}
            </m.div>
          )}
        </div>
      </div>
    </section>
  );
}
