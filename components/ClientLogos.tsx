'use client';

import { m } from 'framer-motion';

/**
 * Client Logos Component
 * Displays client/partner logos with animation
 * Note: Replace placeholder text with actual logo images when available
 */

const clients = [
  { name: 'Calgary Artisan Coffee', category: 'Retail' },
  { name: 'TechStart Alberta', category: 'Technology' },
  { name: 'Mountain View Construction', category: 'Construction' },
  { name: 'Foster Financial Group', category: 'Finance' },
  { name: 'MacLeod Ranch Supply', category: 'Agriculture' },
  { name: 'Marketing Maven Podcast', category: 'Media' },
];

export default function ClientLogos() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2">
            Trusted By
          </p>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900">
            Canadian Businesses We've Helped
          </h2>
        </m.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {clients.map((client, index) => (
            <m.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group"
            >
              {/* Placeholder logo - Replace with actual <Image> when logos are available */}
              <div className="relative flex flex-col items-center justify-center p-6 rounded-lg bg-white border border-gray-400 transition-all duration-300 hover:shadow-lg hover:scale-105 hover:border-primary-500 min-h-[120px]">
                {/* Logo placeholder */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">
                    {client.name.split(' ').map(word => word[0]).slice(0, 2).join('')}
                  </span>
                </div>

                {/* Client name */}
                <p className="text-xs font-semibold text-center text-gray-700 group-hover:text-primary-700 transition-colors">
                  {client.name}
                </p>
                <p className="text-xs text-gray-700 mt-1">
                  {client.category}
                </p>
              </div>
            </m.div>
          ))}
        </div>

        {/* Note for adding real logos */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-700 italic">
            * Replace with actual client logos in{' '}
            <code className="bg-gray-200 px-2 py-1 rounded text-xs">
              public/images/logos/
            </code>
          </p>
        </m.div>
      </div>
    </section>
  );
}
