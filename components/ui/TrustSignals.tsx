import { Shield, Users, Award, Clock, CheckCircle, Lock } from 'lucide-react';

interface TrustSignalsProps {
  variant?: 'full' | 'compact' | 'inline' | 'badges-only';
  className?: string;
}

export default function TrustSignals({
  variant = 'full',
  className = '',
}: TrustSignalsProps) {
  const stats = [
    {
      icon: <Clock className="w-6 h-6" />,
      value: '7+',
      label: 'Years Experience',
      detail: 'Enterprise DevOps expertise',
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: '50+',
      label: 'Businesses Served',
      detail: 'Across Canada',
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: '100%',
      label: 'Client Satisfaction',
      detail: 'On-time delivery',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      value: 'A+',
      label: 'Security Rating',
      detail: 'DevSecOps certified',
    },
  ];

  const badges = [
    {
      name: 'AWS',
      image: '/images/badges/aws.svg',
      alt: 'AWS Partner',
    },
    {
      name: 'Google Cloud',
      image: '/images/badges/gcp.svg',
      alt: 'Google Cloud Partner',
    },
    {
      name: 'SSL Secured',
      icon: <Lock className="w-8 h-8" />,
      text: 'SSL Secured',
    },
    {
      name: 'Privacy',
      icon: <Shield className="w-8 h-8" />,
      text: 'Privacy Protected',
    },
  ];

  const guarantees = [
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: 'Fixed-price projects',
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: 'No hidden fees',
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: '30-day money-back guarantee',
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: 'Based in Calgary, AB',
    },
  ];

  // Badges Only Variant
  if (variant === 'badges-only') {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-6 ${className}`}>
        {badges.map((badge, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-3 bg-white rounded-lg shadow-sm border border-gray-200 min-w-[100px]"
          >
            {badge.icon ? (
              <div className="text-gray-600">
                {badge.icon}
                <p className="text-xs mt-1 text-center">{badge.text}</p>
              </div>
            ) : (
              <img
                src={badge.image}
                alt={badge.alt}
                className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  // Inline Variant (for headers/footers)
  if (variant === 'inline') {
    return (
      <div className={`flex flex-wrap items-center gap-6 text-sm ${className}`}>
        {guarantees.map((guarantee, index) => (
          <div key={index} className="flex items-center gap-2 text-gray-700">
            <span className="text-primary-700">{guarantee.icon}</span>
            <span>{guarantee.text}</span>
          </div>
        ))}
      </div>
    );
  }

  // Compact Variant
  if (variant === 'compact') {
    return (
      <div className={`${className}`}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-primary-700 flex justify-center mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Full Variant (Default)
  return (
    <div className={`${className}`}>
      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-primary-700 flex justify-center mb-3">
              {stat.icon}
            </div>
            <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {stat.value}
            </div>
            <div className="text-base font-semibold text-gray-700 mb-1">
              {stat.label}
            </div>
            <div className="text-sm text-gray-600">{stat.detail}</div>
          </div>
        ))}
      </div>

      {/* Guarantees */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold font-heading text-center mb-4">
          Our Commitment to You
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {guarantees.map((guarantee, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-green-600">{guarantee.icon}</span>
              <span className="text-gray-700">{guarantee.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Security & Partner Badges */}
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-4">Trusted Partners & Security</p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm border border-gray-200"
            >
              {badge.icon ? (
                <div className="text-gray-600 text-center">
                  {badge.icon}
                  <p className="text-xs mt-1">{badge.text}</p>
                </div>
              ) : (
                <img
                  src={badge.image}
                  alt={badge.alt}
                  className="h-10 object-contain grayscale hover:grayscale-0 transition-all"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Additional Trust Text */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-600">
          🏆 Former IBM Canada DevOps Consultant &nbsp;•&nbsp; 🇨🇦 Proudly Canadian &nbsp;•&nbsp; 🔒 Privacy-First Approach
        </p>
      </div>
    </div>
  );
}

// Standalone Guarantee Badge Component
export function GuaranteeBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-lg">
      <Shield className="w-5 h-5 text-green-600" />
      <div className="text-left">
        <div className="text-sm font-semibold text-green-900">
          30-Day Money-Back Guarantee
        </div>
        <div className="text-xs text-green-700">100% risk-free</div>
      </div>
    </div>
  );
}

// Standalone Security Badge Component
export function SecurityBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-2 bg-gray-100 rounded-lg">
      <Lock className="w-4 h-4 text-gray-600" />
      <span className="text-xs font-semibold text-gray-700">
        SSL Secured • Privacy Protected
      </span>
    </div>
  );
}
