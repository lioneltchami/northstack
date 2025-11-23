'use client';

import { m } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  delay?: number;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  date,
  readTime,
  category,
  image,
  delay = 0,
}: BlogCardProps) {
  return (
    <m.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="card card-hover overflow-hidden h-full flex flex-col"
    >
      {image && (
        <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
          <Image
            src={image}
            alt={`${title} - ${category} blog post`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-110"
            quality={85}
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full shadow-lg">
              {category}
            </span>
          </div>
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-300 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
        </div>

        <h3 className="text-xl font-bold font-heading mb-3 text-gray-900 dark:text-white line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
          {excerpt}
        </p>

        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all group mt-auto"
        >
          Read More
          <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </m.article>
  );
}
