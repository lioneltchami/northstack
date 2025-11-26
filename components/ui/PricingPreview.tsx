import { ArrowRight, Check } from 'lucide-react';

interface PricingOption {
  name: string;
  price: string;
  description: string;
  popular?: boolean;
  features: string[];
  href?: string;
}

interface PricingPreviewProps {
  variant?: 'full' | 'compact' | 'inline';
  showComparison?: boolean;
}

export default function PricingPreview({
  variant = 'compact',
  showComparison = false,
}: PricingPreviewProps) {
  const pricingOptions: PricingOption[] = [
    {
      name: 'Website + Automation Starter',
      price: '$3,500',
      description: 'Perfect for small businesses launching their digital presence',
      features: [
        'Professional 5-page website',
        'Mobile-responsive design',
        'SSL & hosting setup',
        'Basic SEO optimization',
        '2 automation workflows',
        '30 days support',
      ],
      href: '/pricing',
    },
    {
      name: 'Business Growth Package',
      price: '$6,500',
      description: 'Ideal for growing businesses ready to scale operations',
      popular: true,
      features: [
        'Custom web application (15 pages)',
        'E-commerce or booking system',
        'Complete automation suite (5 workflows)',
        'Cloud infrastructure setup (AWS/GCP)',
        'CI/CD pipeline',
        'Analytics & monitoring',
        '90 days support',
      ],
      href: '/pricing',
    },
    {
      name: 'Enterprise Cloud Migration',
      price: '$12,500+',
      description: 'Comprehensive cloud transformation for established businesses',
      features: [
        'Full cloud architecture',
        'Infrastructure as Code (Terraform)',
        'Unlimited automation workflows',
        'Security hardening & compliance',
        'Disaster recovery planning',
        'Kubernetes/container orchestration',
        '6 months support',
      ],
      href: '/pricing',
    },
  ];

  const serviceStartingPrices = [
    { service: 'Web Development', price: 'Starting at $2,500', icon: '🌐' },
    { service: 'IT Automation', price: 'Starting at $1,500', icon: '⚡' },
    { service: 'Cloud Infrastructure', price: 'Starting at $3,500', icon: '☁️' },
    { service: 'Consulting', price: '$150/hour', icon: '💼' },
  ];

  // Inline Variant - Simple pricing badges
  if (variant === 'inline') {
    return (
      <div className="flex flex-wrap gap-3 items-center">
        {serviceStartingPrices.map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg"
          >
            <span className="text-xl">{item.icon}</span>
            <div>
              <div className="text-xs text-gray-600">{item.service}</div>
              <div className="text-sm font-semibold text-gray-900">
                {item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Compact Variant - Quick pricing overview
  if (variant === 'compact') {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold font-heading mb-4 text-center">
          Transparent, Fixed Pricing
        </h3>
        <p className="text-gray-700 text-center mb-6">
          No hourly billing. No surprise costs. Just straightforward, project-based pricing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {serviceStartingPrices.map((item, index) => (
            <div
              key={index}
              className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-sm text-gray-600 mb-1">{item.service}</div>
              <div className="text-lg font-bold text-primary-700">
                {item.price}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/pricing"
            className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold"
          >
            View Detailed Pricing
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Payment Plans Note */}
        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            ✓ Payment plans available for projects over $5,000
          </p>
          <p className="text-sm text-gray-600">
            ✓ Split payments: 50% upfront, 50% on completion
          </p>
        </div>
      </div>
    );
  }

  // Full Variant - Complete pricing cards
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="text-lg text-gray-700">
          Fixed-price packages designed for Canadian small businesses. No surprises.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingOptions.map((option, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-lg ${
              option.popular
                ? 'bg-primary-700 text-white shadow-2xl scale-105 border-2 border-primary-600'
                : 'bg-white shadow-md border border-gray-200'
            }`}
          >
            {/* Popular Badge */}
            {option.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-secondary-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
            )}

            {/* Package Name */}
            <h3
              className={`text-2xl font-bold font-heading mb-2 ${
                option.popular ? 'text-white' : 'text-gray-900'
              }`}
            >
              {option.name}
            </h3>

            {/* Price */}
            <div
              className={`text-4xl font-bold font-heading mb-4 ${
                option.popular ? 'text-white' : 'text-primary-700'
              }`}
            >
              {option.price}
            </div>

            {/* Description */}
            <p
              className={`mb-6 ${
                option.popular ? 'text-white/90' : 'text-gray-700'
              }`}
            >
              {option.description}
            </p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {option.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check
                    className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      option.popular ? 'text-white' : 'text-primary-700'
                    }`}
                  />
                  <span
                    className={
                      option.popular ? 'text-white/90' : 'text-gray-700'
                    }
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <a
              href={option.href || '/contact'}
              className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                option.popular
                  ? 'bg-white text-primary-700 hover:bg-gray-100 focus:ring-white'
                  : 'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-500'
              }`}
            >
              Get Started
            </a>
          </div>
        ))}
      </div>

      {/* Payment Options */}
      {showComparison && (
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold font-heading mb-6 text-center">
            Flexible Payment Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-3">💳</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Split Payments
              </h4>
              <p className="text-sm text-gray-700">
                50% upfront, 50% on completion for projects over $5,000
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">📅</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Milestone Billing
              </h4>
              <p className="text-sm text-gray-700">
                Pay as we complete each project phase for enterprise projects
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Monthly Retainers
              </h4>
              <p className="text-sm text-gray-700">
                Ongoing support and maintenance packages available
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              ✓ No hidden fees &nbsp;•&nbsp; ✓ Detailed quotes &nbsp;•&nbsp; ✓ 30-day money-back guarantee
            </p>
          </div>
        </div>
      )}

      <div className="text-center">
        <a
          href="/pricing"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-all duration-300"
        >
          See Full Pricing Breakdown
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
