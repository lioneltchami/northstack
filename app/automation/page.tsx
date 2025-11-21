import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import CTA from '@/components/ui/CTA';
import {
  Workflow,
  Clock,
  TrendingUp,
  Zap,
  Mail,
  Calendar,
  Database,
  MessageSquare,
  ShoppingCart,
  FileText,
  Bot,
  CheckCircle,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Automation Solutions | Save Time & Reduce Costs | NorthStack',
  description: 'Professional automation solutions using n8n, Make.com, and AI. Streamline your business operations and save 10-20 hours per week.',
  keywords: ['Business Automation', 'n8n', 'Make.com', 'AI Automation', 'Workflow Automation'],
};

export default function AutomationPage() {
  return (
    <>
      <Hero
        title="Stop Doing Repetitive Tasks. Automate Everything."
        subtitle="IT Automation Solutions"
        description="Save 10-20 hours per week with intelligent automation. From email marketing to document processing, we'll build custom workflows that run your business on autopilot."
        cta={{
          primary: { text: 'Book Free Automation Assessment', href: '/contact' },
          secondary: { text: 'View Case Studies', href: '/portfolio' },
        }}
        variant="gradient"
        size="medium"
      />

      {/* The Problem Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Is Your Team Drowning in Manual Tasks?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Most small businesses waste 15-20 hours per week on tasks that could be automated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Mail,
                title: 'Manual Email Follow-ups',
                problem: 'Spending hours sending order confirmations, shipping updates, and follow-up emails to every customer.',
              },
              {
                icon: Calendar,
                title: 'Social Media Posting',
                problem: 'Manually posting content across 5+ platforms, scheduling posts, and cross-posting everywhere.',
              },
              {
                icon: ShoppingCart,
                title: 'Order Processing',
                problem: 'Copying data between systems, updating inventory, and manually triggering fulfillment processes.',
              },
              {
                icon: Database,
                title: 'Data Entry & Syncing',
                problem: 'Maintaining spreadsheets, syncing customer data across tools, and updating multiple databases.',
              },
              {
                icon: FileText,
                title: 'Document Generation',
                problem: 'Creating invoices, proposals, and reports manually using templates and copy-paste.',
              },
              {
                icon: MessageSquare,
                title: 'Lead Management',
                problem: 'Manually adding leads to CRM, sending welcome emails, and tracking follow-up schedules.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <div className="inline-flex p-3 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              What If All Of That Happened Automatically?
            </h2>
            <p className="text-xl mb-12 text-white/90">
              That's exactly what we build. Custom automation workflows that handle repetitive tasks
              perfectly, every time, without human intervention.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  stat: '15-20 hrs/week',
                  label: 'Time Saved on Average',
                },
                {
                  icon: TrendingUp,
                  stat: '40-70%',
                  label: 'Cost Reduction',
                },
                {
                  icon: CheckCircle,
                  stat: '99.9%',
                  label: 'Task Accuracy',
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div className="text-4xl font-bold font-heading mb-2">{item.stat}</div>
                  <div className="text-white/90">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              What Can Be Automated?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Almost anything. Here are the most popular automation workflows we build.
            </p>
          </div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {[
              {
                title: 'E-Commerce Automation',
                description: 'Complete order-to-fulfillment automation for online stores.',
                workflows: [
                  'Instant order confirmation emails',
                  'Inventory sync across platforms (Shopify, Amazon, Etsy)',
                  'Automated shipping notifications with tracking',
                  'Abandoned cart recovery sequences (1hr, 24hr, 3-day)',
                  'Post-purchase review requests',
                  'Low inventory alerts and reorder triggers',
                ],
                example: 'Calgary Artisan Coffee saved 18 hours/week and increased sales by 40%',
              },
              {
                title: 'Email Marketing Automation',
                description: 'Sophisticated email sequences based on customer behavior.',
                workflows: [
                  'Welcome series for new subscribers (3-5 email sequence)',
                  'Lead nurturing campaigns based on downloads/actions',
                  'Customer segmentation by behavior and purchase history',
                  'Re-engagement campaigns for inactive customers',
                  'Birthday and anniversary emails with special offers',
                  'Event-triggered campaigns (webinar signup, product launch)',
                ],
                example: 'Mountain View Construction increased conversion rate from 8% to 18%',
              },
              {
                title: 'Content Creator Automation',
                description: 'End-to-end content distribution workflows.',
                workflows: [
                  'Podcast episode processing and transcription',
                  'AI-generated show notes and social posts',
                  'Multi-platform publishing (YouTube, Spotify, Apple Podcasts)',
                  'Social media scheduling across 5+ platforms',
                  'Newsletter compilation and distribution',
                  'Blog post creation from audio/video content',
                ],
                example: 'Marketing Maven Podcast reduced post-production from 12 hours to 90 minutes',
              },
              {
                title: 'CRM & Lead Management',
                description: 'Automatically capture, nurture, and convert leads.',
                workflows: [
                  'Lead capture from website forms, ads, and events',
                  'Auto-add to CRM with proper tagging and segmentation',
                  'Welcome email and first touchpoint automation',
                  'Follow-up sequences based on lead score',
                  'Sales team notifications for hot leads',
                  'Lead activity tracking and reporting',
                ],
                example: 'TechStart Alberta doubled qualified leads without adding sales staff',
              },
              {
                title: 'Document & Invoice Automation',
                description: 'Generate, send, and track documents automatically.',
                workflows: [
                  'Invoice generation from completed orders/projects',
                  'Automated proposal creation from templates',
                  'Contract generation and e-signature workflows',
                  'Payment reminder sequences (7-day, 14-day, 30-day)',
                  'Receipt generation and delivery',
                  'Expense report compilation and approval routing',
                ],
                example: 'Foster Financial Group cut invoice processing time by 85%',
              },
              {
                title: 'Social Media Automation',
                description: 'Consistent social presence without manual posting.',
                workflows: [
                  'Content calendar scheduling across platforms',
                  'Auto-posting to Facebook, Twitter, LinkedIn, Instagram',
                  'Cross-platform content repurposing',
                  'User-generated content aggregation',
                  'Engagement tracking and reporting',
                  'Hashtag optimization and trend monitoring',
                ],
                example: 'Local businesses see 250% increase in social reach',
              },
            ].map((useCase, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold font-heading mb-3 text-gray-900 dark:text-white">
                  {useCase.title}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  {useCase.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {useCase.workflows.map((workflow, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{workflow}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg border-l-4 border-primary-600">
                  <p className="text-sm font-semibold text-primary-900 dark:text-primary-300">
                    Real Result: {useCase.example}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Best-in-Class Automation Tools
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We use proven automation platforms that integrate with 5,000+ apps and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'n8n',
                description: 'Open-source automation platform. Self-hosted for complete control and privacy.',
                benefits: ['Unlimited workflows', 'Custom integrations', 'Lower long-term costs', 'Data stays private'],
                bestFor: 'Technical businesses wanting full control',
              },
              {
                name: 'Make.com',
                description: 'Visual automation platform with powerful features and excellent UI.',
                benefits: ['5,000+ app integrations', 'Advanced logic & routing', 'Error handling', 'Easy to maintain'],
                bestFor: 'Most businesses (our top recommendation)',
                highlighted: true,
              },
              {
                name: 'Zapier',
                description: 'Most popular automation tool. Easy to use but higher pricing at scale.',
                benefits: ['Largest app directory', 'Simple to understand', 'Great documentation', 'Quick setup'],
                bestFor: 'Simple workflows and quick starts',
              },
            ].map((tool, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  tool.highlighted
                    ? 'bg-primary-600 text-white shadow-xl scale-105'
                    : 'bg-white dark:bg-gray-900 shadow-md'
                }`}
              >
                <h3
                  className={`text-2xl font-bold font-heading mb-3 ${
                    tool.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {tool.name}
                </h3>
                <p
                  className={`mb-6 ${
                    tool.highlighted ? 'text-white/90' : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {tool.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {tool.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tool.highlighted ? 'text-white' : 'text-primary-600 dark:text-primary-400'
                        }`}
                      />
                      <span
                        className={
                          tool.highlighted ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'
                        }
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`text-sm font-semibold ${
                    tool.highlighted ? 'text-white' : 'text-primary-600 dark:text-primary-400'
                  }`}
                >
                  Best for: {tool.bestFor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Integration */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex p-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-6">
              <Bot className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              AI-Powered Automation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              We integrate Claude, ChatGPT, and other AI tools to make your automations even smarter.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Content Generation',
                examples: [
                  'Email subject lines and body copy',
                  'Social media posts from blog content',
                  'Product descriptions from specifications',
                  'Meeting summaries from transcripts',
                ],
              },
              {
                title: 'Data Processing',
                examples: [
                  'Sentiment analysis of customer feedback',
                  'Lead qualification and scoring',
                  'Document summarization',
                  'Category and tag suggestions',
                ],
              },
              {
                title: 'Customer Communication',
                examples: [
                  'Personalized email responses',
                  'FAQ chatbot responses',
                  'Review response generation',
                  'Support ticket triage',
                ],
              },
              {
                title: 'Creative Tasks',
                examples: [
                  'Blog post idea generation',
                  'Newsletter content curation',
                  'Image alt text generation',
                  'SEO meta descriptions',
                ],
              },
            ].map((category, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold font-heading mb-4 text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.examples.map((example, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Zap className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-center">
              Calculate Your Potential Savings
            </h2>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Typical Time Savings Per Week:</h3>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex justify-between">
                      <span>Email follow-ups and responses:</span>
                      <strong>4-6 hours</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Social media posting and scheduling:</span>
                      <strong>3-5 hours</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Order processing and data entry:</span>
                      <strong>4-6 hours</strong>
                    </li>
                    <li className="flex justify-between">
                      <span>Lead management and CRM updates:</span>
                      <strong>2-4 hours</strong>
                    </li>
                    <li className="flex justify-between border-t-2 pt-2 mt-2 font-bold text-gray-900 dark:text-white">
                      <span>Total Time Saved:</span>
                      <strong>15-20 hours/week</strong>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg">
                  <h4 className="text-lg font-bold mb-3 text-primary-900 dark:text-primary-300">
                    Cost-Benefit Analysis:
                  </h4>
                  <div className="space-y-2 text-gray-800 dark:text-gray-200">
                    <p>
                      <strong>20 hours/week × $25/hour (staff cost)</strong> = $500/week = $26,000/year wasted
                    </p>
                    <p>
                      <strong>Our automation setup:</strong> $1,500 - $3,500 one-time
                    </p>
                    <p>
                      <strong>Monthly tool costs:</strong> $50 - $200/month
                    </p>
                    <p className="text-xl font-bold text-primary-600 dark:text-primary-400 pt-3 border-t">
                      ROI: Automation pays for itself in the first month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              How We Build Your Automation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From discovery to deployment, we make automation easy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Process Audit',
                description: 'We analyze your current workflows and identify the best automation opportunities.',
              },
              {
                step: '02',
                title: 'Custom Design',
                description: 'Design automation workflows tailored to your business processes and tools.',
              },
              {
                step: '03',
                title: 'Build & Test',
                description: 'Implement, test thoroughly, and refine until everything works perfectly.',
              },
              {
                step: '04',
                title: 'Train & Launch',
                description: 'Train your team, provide documentation, and monitor the first week.',
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold font-heading text-primary-100 dark:text-primary-900/30 mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Automate Your Business?"
        description="Book a free automation assessment. We'll analyze your current workflows and show you exactly how much time and money automation can save."
        primaryButton={{ text: 'Book Free Assessment', href: '/contact' }}
        secondaryButton={{ text: 'View Case Studies', href: '/portfolio' }}
        variant="gradient"
      />
    </>
  );
}
