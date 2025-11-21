'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
  delay?: number;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  image,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card p-6 md:p-8 h-full flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300 dark:text-gray-600'
              }`}
            />
          ))}
        </div>
        <Quote className="w-8 h-8 text-primary-200 dark:text-primary-900" />
      </div>

      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow italic">
        &quot;{content}&quot;
      </p>

      <div className="flex items-center space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        {image ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={image}
              alt={`${name} - ${role} at ${company}`}
              fill
              sizes="48px"
              className="object-cover"
              quality={90}
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center text-white font-bold text-sm">
            {name
              .split(' ')
              .map((n) => n[0])
              .join('')}
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {role} at {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
