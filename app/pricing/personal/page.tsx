import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import PricingCard from '@/components/ui/PricingCard';
import CTA from '@/components/ui/CTA';
import { personalPricingTiers, addOnServices, guarantees } from '@/data/pricing';
import { CheckCircle, Shield, Heart, Zap, HelpCircle, ArrowRight, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Personal Website Pricing | Affordable Websites for Individuals | NorthStack',
  description: 'Get your dream personal website without the tech headache. Fixed prices from $599. No monthly fees. Own it forever. Perfect for portfolios, blogs, and personal brands.',
  keywords: ['Personal Website Cost', 'Portfolio Website Pricing', 'Freelancer Website', 'Personal Brand Website', 'Affordable Website'],
};

export default function PersonalPricingPage() {
  return (
    <>
      <Hero
        title="Your Personal Website, Made Simple"
        subtitle="Personal Website Pricing"
        description="Beautiful, professional websites for individuals. One flat price. No monthly fees. Own it forever."
        variant="gradient"
        size="medium"
      />

      {/* Value Proposition Banner */}
      <section className="section-padding bg-white border-b-2 border-gray-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8 text-gray-900">
              Why Choose Us for Your Personal Website?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary-100 mb-4">
                  <Heart className="w-8 h-8 text-primary-700" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2 text-gray-900">No Monthly Fees</h3>
                <p className="text-gray-700">Pay once, own forever. Unlike Wix or Squarespace, no recurring charges.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-secondary-100 mb-4">
                  <Zap className="w-8 h-8 text-secondary-700" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2 text-gray-900">Fast & Easy</h3>
                <p className="text-gray-700">Get your site live in 2 weeks, not 2 months. We handle all the tech.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-green-100 mb-4">
                  <Users className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-lg font-bold font-heading mb-2 text-gray-900">Real Support</h3>
                <p className="text-gray-700">Talk to real humans. No chatbots, no automated responses.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Pricing Tiers */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Choose Your Package
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              All packages include design, development, mobile optimization, and post-launch support. No hidden fees.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 bg-green-50 border-2 border-green-400 text-green-800 px-6 py-3 rounded-lg font-semibold">
              <CheckCircle className="w-5 h-5" />
              <span>⚡ Limited Time: First 15 clients get these introductory rates!</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {personalPricingTiers.map((tier, index) => (
              <PricingCard
                key={tier.id}
                name={tier.name}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                highlighted={tier.highlighted}
                cta={tier.cta}
                priceDetail={tier.priceDetail}
                href="/contact"
                delay={index * 0.1}
              />
            ))}
          </div>

          {/* Comparison with DIY platforms */}
          <div className="mt-16 max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold font-heading mb-6 text-center text-gray-900">
              Why Not Use Wix or Squarespace?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">DIY Platforms (Wix, Squarespace)</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-600 mr-3 mt-1">✗</span>
                    <span>$16-65/month = $192-780/year forever</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-600 mr-3 mt-1">✗</span>
                    <span>Limited customization options</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-600 mr-3 mt-1">✗</span>
                    <span>You do all the work yourself</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-600 mr-3 mt-1">✗</span>
                    <span>Generic templates everyone uses</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-red-600 mr-3 mt-1">✗</span>
                    <span>Hard to move to another platform</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Our Personal Websites</h4>
                <ul className="space-y-2">
                  <li className="flex items-start text-gray-700">
                    <span className="text-primary-700 mr-3 mt-1">✓</span>
                    <span>One-time payment, own forever</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-primary-700 mr-3 mt-1">✓</span>
                    <span>Fully custom design just for you</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-primary-700 mr-3 mt-1">✓</span>
                    <span>We build it, you approve it</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-primary-700 mr-3 mt-1">✓</span>
                    <span>Unique design that stands out</span>
                  </li>
                  <li className="flex items-start text-gray-700">
                    <span className="text-primary-700 mr-3 mt-1">✓</span>
                    <span>Full code ownership</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-lg font-bold text-primary-800">
                💡 Break-even in just 1-2 years vs. Squarespace, then it's FREE forever!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's Perfect For */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
            Perfect For...
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Freelancers',
                description: 'Showcase your work and attract clients with a professional portfolio.',
                icon: '💼',
              },
              {
                title: 'Content Creators',
                description: 'Build your personal brand and grow your audience.',
                icon: '🎨',
              },
              {
                title: 'Professionals',
                description: 'Stand out with a personal website that highlights your expertise.',
                icon: '👔',
              },
              {
                title: 'Side Hustlers',
                description: 'Launch your side business with a professional online presence.',
                icon: '🚀',
              },
              {
                title: 'Bloggers',
                description: 'Share your thoughts and build a following with a custom blog.',
                icon: '✍️',
              },
              {
                title: 'Photographers',
                description: 'Display your photography in stunning galleries.',
                icon: '📸',
              },
              {
                title: 'Consultants',
                description: 'Establish credibility and generate leads.',
                icon: '🎯',
              },
              {
                title: 'Artists',
                description: 'Sell your art and connect with fans.',
                icon: '🖼️',
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold font-heading mb-2 text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
              Common Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  question: 'Do I really own the website forever?',
                  answer:
                    'Yes! After we build your site and you pay, it\'s 100% yours. You own the code, design, and content. You can host it anywhere, modify it, or hire someone else to work on it. No lock-in, no recurring fees from us.',
                },
                {
                  question: 'What about hosting? Do I need to pay for that?',
                  answer:
                    'Hosting is separate (typically $5-20/month from providers like Netlify, Vercel, or traditional hosts). We\'ll help you choose the best option and can set it up for you. Think of it like this: we build your house (one-time), you pay utilities (hosting).',
                },
                {
                  question: 'Can I make changes myself after launch?',
                  answer:
                    'Absolutely! We provide tutorial videos and documentation so you can make basic updates (text, images, blog posts). For bigger changes, we offer hourly support at $75/hour, or you can hire any developer since you own the code.',
                },
                {
                  question: 'How long does it take to get my website?',
                  answer:
                    'Most personal websites are completed in 2-3 weeks. Here\'s the timeline: Week 1 - Design mockups and your feedback. Week 2 - Development and content. Week 3 - Revisions and launch. We can rush it for an additional fee if needed.',
                },
                {
                  question: 'What if I don\'t like it?',
                  answer:
                    'We offer unlimited revisions during development. If you\'re not satisfied within the first 7 days, we\'ll refund your deposit. After design approval, we work in milestones - you only pay for work you approve.',
                },
                {
                  question: 'Can I add e-commerce later?',
                  answer:
                    'Yes! You can start with Personal Lite or Personal, then upgrade to e-commerce later. We\'ll charge the difference plus a small setup fee. Or choose Personal Pro from the start if you know you\'ll need it.',
                },
                {
                  question: 'Do you offer payment plans?',
                  answer:
                    'Yes! For Personal Pro ($1,499), we offer 3 monthly payments of $499 (0% interest). For other packages, we do 50% upfront and 50% on completion.',
                },
                {
                  question: 'What if I need help after the support period ends?',
                  answer:
                    'No problem! We offer hourly support at $75/hour (vs. $150/hour for businesses). Or purchase an extended support package: 6 months for $200 or 12 months for $350.',
                },
                {
                  question: 'Are you really in Canada?',
                  answer:
                    'Yes! We\'re based in Canada, which means: Your data stays in Canada (privacy laws), Easy communication (same time zones), E-transfer payments accepted, All prices in Canadian dollars.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary-700 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold font-heading mb-3 text-gray-900">
                        {faq.question}
                      </h3>
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Guarantees */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
            Our Guarantees
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex gap-4 bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2 text-gray-900">
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-700">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-8">
              Join Our Happy Clients
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-5xl font-bold font-heading mb-2">127+</div>
                <div className="text-white/90">Websites Built</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold font-heading mb-2">4.9/5</div>
                <div className="text-white/90">Client Rating</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold font-heading mb-2">100%</div>
                <div className="text-white/90">Canadian-Based</div>
              </div>
            </div>
            <p className="text-xl text-white/90 mb-8">
              "More professional than Fiverr. More affordable than agencies. No monthly fees like Wix."
            </p>
          </div>
        </div>
      </section>

      {/* Need Business Solutions? */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center bg-white p-8 rounded-lg shadow-md border-2 border-primary-200">
            <h3 className="text-2xl font-bold font-heading mb-4 text-gray-900">
              Need a Business Website Instead?
            </h3>
            <p className="text-gray-700 mb-6">
              Looking for advanced features like automation, cloud infrastructure, or DevOps?
              Check out our business solutions starting at $1,500.
            </p>
            <Link
              href="/pricing"
              className="inline-flex items-center px-8 py-4 bg-primary-800 hover:bg-primary-900 text-white rounded-lg text-lg font-bold transition-colors shadow-lg hover:shadow-xl border-2 border-primary-900"
            >
              View Business Pricing
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Get Your Personal Website?"
        description="Book a free consultation. We'll discuss your vision and provide a clear quote—no pressure, no obligation."
        primaryButton={{ text: 'Get Started Free', href: '/contact' }}
        secondaryButton={{ text: 'See Our Work', href: '/portfolio' }}
        variant="simple"
      />
    </>
  );
}
