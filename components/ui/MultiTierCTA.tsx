'use client';

import { useState } from 'react';
import { Calendar, FileCheck, Download, ArrowRight, X } from 'lucide-react';

interface CTAOption {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  buttonText: string;
  buttonHref?: string;
  commitmentLevel: 'high' | 'medium' | 'low';
  onClick?: () => void;
}

interface MultiTierCTAProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'compact';
}

export default function MultiTierCTA({
  title = 'Ready to Transform Your Business?',
  subtitle = 'Choose the option that works best for you',
  variant = 'default',
}: MultiTierCTAProps) {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [email, setEmail] = useState('');
  const [downloadSubmitted, setDownloadSubmitted] = useState(false);

  const ctaOptions: CTAOption[] = [
    {
      id: 'book-call',
      icon: <Calendar className="w-8 h-8" />,
      title: 'Book Free Consultation',
      description: '30-minute strategy call to discuss your specific needs',
      buttonText: 'Schedule Now',
      buttonHref: '/contact?type=consultation',
      commitmentLevel: 'high',
    },
    {
      id: 'free-audit',
      icon: <FileCheck className="w-8 h-8" />,
      title: 'Get Free Tech Audit',
      description: 'Receive a personalized assessment of your current setup',
      buttonText: 'Request Audit',
      buttonHref: '/contact?type=audit',
      commitmentLevel: 'medium',
    },
    {
      id: 'download-guide',
      icon: <Download className="w-8 h-8" />,
      title: 'Download Free Guide',
      description: 'Get our comprehensive DevOps & Automation guide',
      buttonText: 'Download Now',
      commitmentLevel: 'low',
      onClick: () => setShowDownloadModal(true),
    },
  ];

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to your email service (Mailchimp, ConvertKit, etc.)
    console.log('Email submitted:', email);
    setDownloadSubmitted(true);

    // Trigger download after 1 second
    setTimeout(() => {
      // In production, this would be a real PDF download
      window.location.href = '/downloads/devops-automation-guide.pdf';
      setShowDownloadModal(false);
      setEmail('');
      setDownloadSubmitted(false);
    }, 1500);
  };

  if (variant === 'compact') {
    return (
      <>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {ctaOptions.map((option) => (
            <a
              key={option.id}
              href={option.buttonHref}
              onClick={(e) => {
                if (option.onClick) {
                  e.preventDefault();
                  option.onClick();
                }
              }}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                option.commitmentLevel === 'high'
                  ? 'bg-primary-700 hover:bg-primary-800 text-white focus:ring-primary-500'
                  : option.commitmentLevel === 'medium'
                  ? 'bg-secondary-700 hover:bg-secondary-800 text-white focus:ring-secondary-500'
                  : 'border-2 border-primary-600 text-primary-700 hover:bg-primary-50 focus:ring-primary-500'
              }`}
            >
              {option.buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Download Modal */}
        {showDownloadModal && (
          <DownloadModal
            email={email}
            setEmail={setEmail}
            downloadSubmitted={downloadSubmitted}
            handleSubmit={handleDownloadSubmit}
            onClose={() => setShowDownloadModal(false)}
          />
        )}
      </>
    );
  }

  return (
    <>
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                {title}
              </h2>
              <p className="text-lg text-gray-700">{subtitle}</p>
            </div>

            {/* CTA Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {ctaOptions.map((option, index) => (
                <div
                  key={option.id}
                  className={`group relative bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ${
                    option.commitmentLevel === 'high'
                      ? 'border-2 border-primary-500 transform hover:scale-105'
                      : 'border border-gray-200 hover:border-primary-300'
                  }`}
                >
                  {/* Popular Badge for High Commitment */}
                  {option.commitmentLevel === 'high' && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-700 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`mb-6 ${
                      option.commitmentLevel === 'high'
                        ? 'text-primary-700'
                        : option.commitmentLevel === 'medium'
                        ? 'text-secondary-700'
                        : 'text-gray-600'
                    }`}
                  >
                    {option.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold font-heading mb-3 text-gray-900">
                    {option.title}
                  </h3>
                  <p className="text-gray-700 mb-6 min-h-[3rem]">
                    {option.description}
                  </p>

                  {/* Button */}
                  <a
                    href={option.buttonHref}
                    onClick={(e) => {
                      if (option.onClick) {
                        e.preventDefault();
                        option.onClick();
                      }
                    }}
                    className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 group-hover:gap-2 inline-flex items-center justify-center ${
                      option.commitmentLevel === 'high'
                        ? 'bg-primary-700 hover:bg-primary-800 text-white focus:ring-primary-500'
                        : option.commitmentLevel === 'medium'
                        ? 'bg-secondary-700 hover:bg-secondary-800 text-white focus:ring-secondary-500'
                        : 'border-2 border-primary-600 text-primary-700 hover:bg-primary-50 focus:ring-primary-500'
                    }`}
                  >
                    {option.buttonText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Commitment Level Indicator */}
                  <div className="mt-4 text-center">
                    <span className="text-xs text-gray-500">
                      {option.commitmentLevel === 'high' && '⚡ Quick action required'}
                      {option.commitmentLevel === 'medium' && '✓ No commitment'}
                      {option.commitmentLevel === 'low' && '📥 Instant access'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Signal */}
            <div className="text-center mt-12 text-gray-600">
              <p className="text-sm">
                ✓ No credit card required &nbsp;•&nbsp; ✓ No sales pressure &nbsp;•&nbsp; ✓ 100%
                free resources
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      {showDownloadModal && (
        <DownloadModal
          email={email}
          setEmail={setEmail}
          downloadSubmitted={downloadSubmitted}
          handleSubmit={handleDownloadSubmit}
          onClose={() => setShowDownloadModal(false)}
        />
      )}
    </>
  );
}

// Download Modal Component
function DownloadModal({
  email,
  setEmail,
  downloadSubmitted,
  handleSubmit,
  onClose,
}: {
  email: string;
  setEmail: (email: string) => void;
  downloadSubmitted: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {!downloadSubmitted ? (
          <>
            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Download className="w-8 h-8 text-primary-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading mb-2">
                Get Your Free Guide
              </h3>
              <p className="text-gray-700">
                DevOps & Automation Best Practices for Canadian Businesses
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="download-email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="download-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Download Guide
              </button>

              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-heading mb-2">Success!</h3>
            <p className="text-gray-700">Your download will start shortly...</p>
          </div>
        )}
      </div>
    </div>
  );
}
