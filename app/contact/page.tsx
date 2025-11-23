'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Hero from '@/components/ui/Hero';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  timeline: z.string().min(1, 'Please select a timeline'),
  preferredContact: z.enum(['email', 'phone']),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      preferredContact: 'email',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      setSubmitStatus('success');
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <>
      <Hero
        title="Let's Build Something Great Together"
        subtitle="Contact Us"
        description="Ready to transform your IT infrastructure? Book a free consultation or send us a message. We typically respond within 24 hours."
        variant="gradient"
        size="medium"
      />

      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
                Get In Touch
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Email</h3>
                    <a
                      href={`mailto:${process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@northstack.ca'}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@northstack.ca'}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <a
                      href={`tel:${(process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (403) 123-4567').replace(/\s/g, '')}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (403) 123-4567'}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {process.env.NEXT_PUBLIC_BUSINESS_LOCATION || 'Calgary, Alberta, Canada'}
                      <br />
                      <span className="text-sm">Serving all of Canada remotely</span>
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">Business Hours</h3>
                    <div className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM MST</p>
                      <p>Saturday: 10:00 AM - 2:00 PM MST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <h3 className="font-bold text-primary-900 dark:text-primary-300 mb-2">
                  Response Time Commitment
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  We typically respond to all inquiries within 24 hours during business days.
                  For urgent matters, please call us directly.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold font-heading mb-6 text-gray-900 dark:text-white">
                  Send Us a Message
                </h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-lg flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <p className="text-green-800 dark:text-green-200">
                      Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-lg">
                    <p className="text-red-800 dark:text-red-200">
                      Oops! Something went wrong. Please try again or email us directly at {process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@northstack.ca'}
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      {...register('name')}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary-600 dark:focus:border-primary-400 focus:outline-none"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary-600 dark:focus:border-primary-400 focus:outline-none"
                        placeholder="john@company.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary-600 dark:focus:border-primary-400 focus:outline-none"
                        placeholder="(403) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      What service are you interested in? *
                    </label>
                    <select
                      id="service"
                      {...register('service')}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary-600 dark:focus:border-primary-400 focus:outline-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="web-development">Web Development</option>
                      <option value="automation">IT Automation</option>
                      <option value="home-server">Home Server Setup</option>
                      <option value="cloud-infrastructure">Cloud Infrastructure</option>
                      <option value="security">Security & DevSecOps</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other / Not Sure</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Budget and Timeline */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Budget Range *
                      </label>
                      <select
                        id="budget"
                        {...register('budget')}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary-600 dark:focus:border-primary-400 focus:outline-none"
                      >
                        <option value="">Select budget...</option>
                        <option value="under-2500">Under $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-plus">$10,000+</option>
                        <option value="not-sure">Not Sure</option>
                      </select>
                      {errors.budget && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.budget.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Timeline *
                      </label>
                      <select
                        id="timeline"
                        {...register('timeline')}
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary-600 dark:focus:border-primary-400 focus:outline-none"
                      >
                        <option value="">Select timeline...</option>
                        <option value="urgent">Urgent (1-2 weeks)</option>
                        <option value="soon">Soon (2-4 weeks)</option>
                        <option value="flexible">Flexible (1-3 months)</option>
                        <option value="planning">Just Planning</option>
                      </select>
                      {errors.timeline && (
                        <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.timeline.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Contact Method *
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="email"
                          {...register('preferredContact')}
                          className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">Email</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="phone"
                          {...register('preferredContact')}
                          className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-gray-700 dark:text-gray-300">Phone</span>
                      </label>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      {...register('message')}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary-600 dark:focus:border-primary-400 focus:outline-none resize-none"
                      placeholder="Tell us about your project, challenges, and goals..."
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading'}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
              Before You Reach Out
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'What happens after I submit this form?',
                  answer:
                    'We\'ll review your inquiry and respond within 24 business hours (usually much faster). We\'ll schedule a free 30-minute consultation call to discuss your needs, answer questions, and determine if we\'re a good fit.',
                },
                {
                  question: 'Do you charge for the initial consultation?',
                  answer:
                    'No! The first consultation is always free, with no obligation. We want to understand your project and provide honest advice, even if that means recommending a different solution or provider.',
                },
                {
                  question: 'How long does a typical project take?',
                  answer:
                    'It varies: small automation projects take 1-2 weeks, websites take 2-4 weeks, and cloud migrations can take 4-8 weeks. We\'ll provide a clear timeline in our proposal.',
                },
                {
                  question: 'Do you work with clients outside of Calgary?',
                  answer:
                    'Absolutely! While we\'re based in Calgary, we work with clients across Canada and internationally. Most projects are done remotely with video calls and screen sharing.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold font-heading mb-2 text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Booking Placeholder */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Prefer to Book Directly?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Skip the form and schedule a free consultation call directly on our calendar.
            </p>
            <a
              href={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/northstack'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300"
            >
              Book Free Consultation
            </a>
            <p className="text-sm text-white/70 mt-4">
              Powered by Calendly - Choose a time that works for you
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
