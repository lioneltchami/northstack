'use client';

import { m } from 'framer-motion';
import Link from 'next/link';
import { Check } from 'lucide-react';

interface PricingCardProps {
  name: string;
  description: string;
  price: string;
  priceDetail: string;
  features: string[];
  href: string;
  cta: string;
  highlighted?: boolean;
  delay?: number;
}

export default function PricingCard({
  name,
  description,
  price,
  priceDetail,
  features,
  href,
  cta,
  highlighted = false,
  delay = 0,
}: PricingCardProps) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`card p-8 h-full flex flex-col ${
        highlighted
          ? 'border-2 border-primary-500 shadow-2xl transform scale-105 bg-gradient-to-br from-primary-50 to-white'
          : ''
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 right-6 transform -translate-y-1/2">
          <span className="px-4 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-bold rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold font-heading mb-2 text-gray-900">
          {name}
        </h3>
        <p className="text-gray-700">{description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-5xl font-bold text-gray-900">
            {price}
          </span>
          {price !== 'Custom' && (
            <span className="text-gray-700 ml-2">
              {priceDetail}
            </span>
          )}
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3">
            <Check className="w-5 h-5 text-primary-700 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`block text-center py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
          highlighted
            ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg hover:shadow-xl'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        {cta}
      </Link>
    </m.div>
  );
}
