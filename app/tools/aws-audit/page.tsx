'use client';

import { useState } from 'react';
import Hero from '@/components/ui/Hero';
import { FileDown, CheckCircle, TrendingDown, DollarSign } from 'lucide-react';

export default function AWSAuditPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    monthlySpend: '',
    services: [] as string[],
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual audit request logic
    console.log('Audit requested:', formData);
    setSubmitted(true);
  };

  return (
    <>
      <Hero
        title="Free AWS Cost Audit"
        subtitle="Discover Hidden Savings"
        description="Get a personalized audit showing exactly where you can cut AWS costs by 20-40%. No commitment required."
        variant="gradient"
        size="medium"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Benefits */}
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 text-gray-900">
                What You'll Get
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: TrendingDown,
                    title: 'Cost Reduction Opportunities',
                    description: 'Identify 5-10 specific areas where you can reduce costs immediately.',
                  },
                  {
                    icon: DollarSign,
                    title: 'Estimated Savings',
                    description: 'Get a concrete dollar amount you could save per month.',
                  },
                  {
                    icon: CheckCircle,
                    title: 'Implementation Roadmap',
                    description: 'Step-by-step plan to implement cost optimizations.',
                  },
                  {
                    icon: FileDown,
                    title: 'Detailed PDF Report',
                    description: 'Comprehensive audit delivered within 48 hours.',
                  },
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary-100 rounded-lg">
                      <benefit.icon className="w-6 h-6 text-primary-700" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-green-50 border-2 border-green-200 rounded-lg">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold text-green-900">Average savings for our clients:</span> $2,400/month
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold font-heading mb-2 text-gray-900">
                    Request Received!
                  </h3>
                  <p className="text-gray-700 mb-6">
                    We'll send your AWS cost audit to {formData.email} within 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary-700 hover:text-primary-800 font-semibold"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold font-heading mb-6 text-gray-900">
                    Request Your Free Audit
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 bg-white text-gray-900 focus:border-primary-700 focus:outline-none"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 bg-white text-gray-900 focus:border-primary-700 focus:outline-none"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 bg-white text-gray-900 focus:border-primary-700 focus:outline-none"
                        placeholder="Acme Corp"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Estimated Monthly AWS Spend *
                      </label>
                      <select
                        required
                        value={formData.monthlySpend}
                        onChange={(e) => setFormData({ ...formData, monthlySpend: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-400 bg-white text-gray-900 focus:border-primary-700 focus:outline-none"
                      >
                        <option value="">Select range...</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-2000">$500 - $2,000</option>
                        <option value="2000-5000">$2,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-plus">$10,000+</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                    >
                      Get My Free Audit
                    </button>

                    <p className="text-xs text-gray-700 text-center">
                      No credit card required. We'll never share your information.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
