'use client';

import { useState, useEffect } from 'react';
import { X, Download, CheckCircle } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown in this session
    const popupShown = sessionStorage.getItem('exitPopupShown');
    if (popupShown) {
      setHasShown(true);
      return;
    }

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Detect when mouse moves towards top of viewport (likely to close tab/window)
      if (e.clientY <= 10 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        sessionStorage.setItem('exitPopupShown', 'true');
      }
    };

    // Add event listener after a delay to avoid showing on immediate page load
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000); // Wait 5 seconds before activating exit intent

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // In production, send to email service (Mailchimp, ConvertKit, etc.)
    try {
      // Example: await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) })
      console.log('Email captured:', email);

      setIsSubmitted(true);

      // Trigger download after showing success message
      setTimeout(() => {
        // In production, this would be a real PDF download
        window.location.href = '/downloads/aws-cost-optimization-checklist.pdf';
      }, 1500);

      // Close modal after download
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } catch (error) {
      console.error('Subscription error:', error);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  // Don't render if not visible
  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="bg-white rounded-lg max-w-lg w-full p-8 relative shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <>
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <Download className="w-8 h-8 text-primary-700" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading mb-3">
                Wait! Before You Go...
              </h2>
              <p className="text-lg text-gray-700 mb-2">
                Get Our <span className="font-semibold text-primary-700">Free AWS Cost Optimization Checklist</span>
              </p>
              <p className="text-gray-600">
                Save up to 50% on your cloud infrastructure costs
              </p>
            </div>

            {/* Benefits */}
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 mb-3">
                What's inside:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-primary-700 mt-0.5">✓</span>
                  <span>15 proven cost-cutting strategies for AWS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-700 mt-0.5">✓</span>
                  <span>Step-by-step implementation guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-700 mt-0.5">✓</span>
                  <span>Real-world case studies from Canadian businesses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-700 mt-0.5">✓</span>
                  <span>Exclusive automation scripts and templates</span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-base"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-base"
              >
                Get My Free Checklist
              </button>
            </form>

            {/* Trust Signals */}
            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                🔒 We respect your privacy. No spam, ever. Unsubscribe anytime.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Join 500+ Canadian business owners getting DevOps tips
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold font-heading mb-3">
              Success! Check Your Email
            </h3>
            <p className="text-gray-700 mb-2">
              We've sent the AWS Cost Optimization Checklist to:
            </p>
            <p className="text-primary-700 font-semibold mb-4">{email}</p>
            <p className="text-sm text-gray-600">
              Your download will start automatically...
            </p>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
