'use client';

import { m } from 'framer-motion';
import { Shield, Award, Users, TrendingUp, CheckCircle, Star } from 'lucide-react';

/**
 * Trust Signals Component
 * Displays certifications, awards, and client trust indicators
 */

const trustBadges = [
  {
    icon: Shield,
    title: 'AWS Certified',
    description: 'Solutions Architect',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: CheckCircle,
    title: '7+ Years',
    description: 'DevOps Experience',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Award,
    title: 'Enterprise Grade',
    description: 'IBM Canada Background',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Users,
    title: '50+ Projects',
    description: 'Successfully Delivered',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: TrendingUp,
    title: '50%+ Savings',
    description: 'Average Cost Reduction',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Star,
    title: '98% Satisfaction',
    description: 'Client Retention Rate',
    color: 'from-yellow-500 to-yellow-600',
  },
];

export default function TrustSignals() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 border-t border-b border-gray-200 dark:border-gray-800">
      <div className="container-custom">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-2 text-gray-900 dark:text-white">
            Trusted by Canadian Businesses
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Enterprise expertise with personalized service
          </p>
        </m.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {trustBadges.map((badge, index) => (
            <m.div
              key={badge.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              className="group"
            >
              <div className="relative p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:scale-105">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${badge.color} opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300`} />

                <div className="relative">
                  <div className={`inline-flex p-2 rounded-lg bg-gradient-to-br ${badge.color} mb-2`}>
                    <badge.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-sm text-gray-900 dark:text-white mb-1">
                    {badge.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {badge.description}
                  </p>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
