'use client';

import { FileDown, CheckSquare, Calculator, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ValueCTAProps {
  type: 'audit' | 'checklist' | 'calculator';
  variant?: 'compact' | 'full';
}

const ctaContent = {
  audit: {
    icon: FileDown,
    title: 'Free AWS Cost Audit',
    description: 'Get a personalized report showing exactly where you can cut cloud costs by 20-40%.',
    cta: 'Get Your Free Audit',
    href: '/tools/aws-audit',
    color: 'bg-blue-600 hover:bg-blue-700',
  },
  checklist: {
    icon: CheckSquare,
    title: 'DevOps Automation Checklist',
    description: 'Download our proven 25-point checklist for automating your infrastructure.',
    cta: 'Download Checklist',
    href: '/resources/automation-checklist',
    color: 'bg-green-600 hover:bg-green-700',
  },
  calculator: {
    icon: Calculator,
    title: 'Cloud Cost Calculator',
    description: 'Calculate your potential savings with our interactive cloud cost calculator.',
    cta: 'Try Calculator',
    href: '/tools/cost-calculator',
    color: 'bg-purple-600 hover:bg-purple-700',
  },
};

export default function ValueCTA({ type, variant = 'full' }: ValueCTAProps) {
  const content = ctaContent[type];
  const Icon = content.icon;

  if (variant === 'compact') {
    return (
      <Link
        href={content.href}
        className={`block p-4 ${content.color} text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Icon className="w-6 h-6 flex-shrink-0" />
            <div>
              <h4 className="font-bold">{content.title}</h4>
              <p className="text-sm text-white/90 mt-0.5">{content.description}</p>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </Link>
    );
  }

  return (
    <div className={`${content.color} text-white rounded-xl p-8 shadow-xl`}>
      <div className="flex items-start gap-6">
        <div className="bg-white/20 p-4 rounded-lg">
          <Icon className="w-8 h-8" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold font-heading mb-2">{content.title}</h3>
          <p className="text-lg text-white/90 mb-6">{content.description}</p>
          <Link
            href={content.href}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 group"
          >
            {content.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
