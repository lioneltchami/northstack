'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  href?: string;
  variant?: 'default' | 'featured';
  delay?: number;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
  href,
  variant = 'default',
  delay = 0,
}: ServiceCardProps) {
  const card = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`card card-hover p-6 md:p-8 h-full ${
        variant === 'featured'
          ? 'border-2 border-primary-500 bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-gray-800'
          : ''
      }`}
    >
      <div
        className={`inline-flex p-3 rounded-lg mb-4 ${
          variant === 'featured'
            ? 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white'
            : 'bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400'
        }`}
      >
        <Icon className="w-8 h-8" />
      </div>

      <h3 className="text-xl md:text-2xl font-bold font-heading mb-3 text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>

      {features && features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400"
            >
              <svg
                className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {href && (
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all group">
            Learn More
            <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}
