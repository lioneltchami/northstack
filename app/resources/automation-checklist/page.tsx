'use client';

import { useState } from 'react';
import Hero from '@/components/ui/Hero';
import { CheckSquare, Download, CheckCircle } from 'lucide-react';

export default function AutomationChecklistPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual download/email logic
    console.log('Checklist requested for:', email);
    setSubmitted(true);
  };

  const checklistItems = [
    { category: 'Infrastructure as Code', count: 5, items: ['Terraform setup', 'Version control integration', 'State management', 'Module organization', 'CI/CD integration'] },
    { category: 'CI/CD Pipeline', count: 6, items: ['Automated testing', 'Build automation', 'Deployment automation', 'Rollback procedures', 'Environment management', 'Security scanning'] },
    { category: 'Monitoring & Alerts', count: 4, items: ['System monitoring', 'Log aggregation', 'Alert configuration', 'Performance tracking'] },
    { category: 'Security Automation', count: 5, items: ['Automated patching', 'Security scanning', 'Access management', 'Compliance checks', 'Incident response'] },
    { category: 'Backup & Recovery', count: 5, items: ['Automated backups', 'Disaster recovery plan', 'Recovery testing', 'Data retention policy', 'Backup monitoring'] },
  ];

  return (
    <>
      <Hero
        title="DevOps Automation Checklist"
        subtitle="25-Point Implementation Guide"
        description="Download our proven checklist to systematically automate your infrastructure and eliminate manual tasks."
        variant="gradient"
        size="medium"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Preview */}
            <div>
              <h2 className="text-3xl font-bold font-heading mb-6 text-gray-900">
                What's Inside
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Our comprehensive 25-point checklist covers everything you need to automate your infrastructure, from foundational setup to advanced optimization.
              </p>

              <div className="space-y-6">
                {checklistItems.map((section, index) => (
                  <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-primary-300 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-900 text-lg">{section.category}</h3>
                      <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                        {section.count} items
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-700">
                          <CheckSquare className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Download Form */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white p-8 rounded-lg shadow-xl">
                {submitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold font-heading mb-2">
                      Check Your Email!
                    </h3>
                    <p className="mb-6">
                      We've sent the DevOps Automation Checklist to {email}
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-white/90 hover:text-white font-semibold underline"
                    >
                      Download for another email
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <div className="inline-block p-4 bg-white/20 rounded-lg mb-4">
                        <Download className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold font-heading mb-2">
                        Download Your Free Checklist
                      </h3>
                      <p className="text-white/90">
                        Instant download. No spam, ever.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2">
                          Your Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                          placeholder="you@company.com"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                      >
                        Download Checklist (PDF)
                      </button>

                      <p className="text-xs text-white/80 text-center">
                        By downloading, you agree to receive occasional emails with DevOps tips. Unsubscribe anytime.
                      </p>
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/20">
                      <p className="text-sm text-center">
                        ✓ Used by 200+ DevOps teams
                        <br />
                        ✓ Regularly updated with best practices
                        <br />
                        ✓ Free forever
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
