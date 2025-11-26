'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { Calendar, Clock, Video } from 'lucide-react';

interface CalendlyWidgetProps {
  variant?: 'inline' | 'popup-text' | 'popup-button';
  url?: string;
  buttonText?: string;
  className?: string;
  prefillData?: {
    name?: string;
    email?: string;
    customAnswers?: Record<string, string>;
  };
}

export default function CalendlyWidget({
  variant = 'popup-button',
  url,
  buttonText = 'Schedule a Call',
  className = '',
  prefillData,
}: CalendlyWidgetProps) {
  const calendlyUrl =
    url ||
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    'https://calendly.com/your-username/30min';

  useEffect(() => {
    // Load Calendly widget script if not already loaded
    if (typeof window !== 'undefined' && !window.Calendly) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      const link = document.createElement('link');
      link.href = 'https://assets.calendly.com/assets/external/widget.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
  }, []);

  const openPopupWidget = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: calendlyUrl,
        prefill: prefillData,
      });
    }
  };

  // Inline embedded widget
  if (variant === 'inline') {
    return (
      <div className={`calendly-inline-widget ${className}`}>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
          onLoad={() => {
            if (typeof window !== 'undefined' && window.Calendly) {
              window.Calendly.initInlineWidget({
                url: calendlyUrl,
                parentElement: document.querySelector('.calendly-inline-widget'),
                prefill: prefillData,
              });
            }
          }}
        />
        <div
          className="calendly-inline-widget"
          data-url={calendlyUrl}
          style={{ minWidth: '320px', height: '700px' }}
        ></div>
      </div>
    );
  }

  // Text link that opens popup
  if (variant === 'popup-text') {
    return (
      <>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openPopupWidget();
          }}
          className={`text-primary-700 hover:text-primary-800 font-semibold underline ${className}`}
        >
          {buttonText}
        </a>
      </>
    );
  }

  // Button that opens popup (default)
  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <button
        onClick={openPopupWidget}
        className={`inline-flex items-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${className}`}
      >
        <Calendar className="w-5 h-5" />
        {buttonText}
      </button>
    </>
  );
}

// Pre-configured consultation booking button
export function BookConsultationButton({ className = '' }: { className?: string }) {
  return (
    <CalendlyWidget
      variant="popup-button"
      buttonText="Book Free 30-Min Call"
      className={className}
    />
  );
}

// Standalone booking section with details
export function BookingSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Let's Talk About Your Project
            </h2>
            <p className="text-lg text-gray-700">
              Book a free 30-minute consultation. No sales pressure, just honest advice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <Clock className="w-8 h-8" />,
                title: '30 Minutes',
                description: 'Quick, focused discussion about your needs',
              },
              {
                icon: <Video className="w-8 h-8" />,
                title: 'Video Call',
                description: 'Meet via Google Meet or Zoom',
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                title: 'Choose Your Time',
                description: 'Book a slot that works for you',
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
                <div className="text-primary-700 flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <CalendlyWidget
              variant="popup-button"
              buttonText="Schedule Your Free Consultation"
              className="text-lg px-8 py-4"
            />
            <p className="text-sm text-gray-600 mt-4">
              ✓ No credit card required &nbsp;•&nbsp; ✓ No commitment &nbsp;•&nbsp; ✓ Cancel
              anytime
            </p>
          </div>

          {/* What to Expect */}
          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-bold font-heading mb-4 text-center">
              What We'll Cover
            </h3>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {[
                'Your current tech setup and challenges',
                'Specific goals and desired outcomes',
                'Potential solutions and approaches',
                'Timeline and budget considerations',
                "Next steps (if we're a good fit)",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-700 mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Type declaration for Calendly
declare global {
  interface Window {
    Calendly: any;
  }
}
