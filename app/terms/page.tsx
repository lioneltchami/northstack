import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';

export const metadata: Metadata = {
  title: 'Terms of Service | NorthStack Solutions',
  description: 'Terms of Service for NorthStack Solutions. Read our service terms, payment policies, and legal agreements governing the use of our IT services.',
};

export default function TermsPage() {
  return (
    <>
      <Hero
        title="Terms of Service"
        subtitle="Service Agreement"
        description="Please read these terms carefully before using our services. By engaging with NorthStack Solutions, you agree to these terms."
        variant="simple"
        size="small"
      />

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          {/* Effective Date */}
          <div className="bg-gray-50 border-l-4 border-primary-800 p-6 rounded-r-lg mb-12">
            <p className="text-sm text-gray-900 font-semibold">
              <span className="font-bold">Effective Date:</span> January 1, 2025
            </p>
            <p className="text-sm text-gray-900 font-semibold mt-1">
              <span className="font-bold">Last Updated:</span> January 1, 2025
            </p>
          </div>

          {/* Section 1 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            These Terms of Service ("Terms") govern your use of services provided by NorthStack Solutions
            ("we," "us," "our"). By accessing our website, requesting a consultation, or engaging our services,
            you agree to be bound by these Terms.
          </p>

          {/* Section 2 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            2. Services
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            NorthStack Solutions provides IT consulting, DevOps, cloud infrastructure, automation, web
            development, and related technology services ("Services") to businesses and organizations.
          </p>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Service Scope
          </h3>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>All Services are detailed in individual project proposals and statements of work</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Scope changes require written approval and may affect pricing and timelines</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We reserve the right to refuse service to anyone for any lawful reason</span>
            </li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            3. Proposals and Contracts
          </h2>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Binding Agreements
          </h3>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Written proposals become binding upon client acceptance (signature or deposit payment)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Proposals are valid for 30 days unless otherwise stated</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Services begin only after receiving signed agreement and initial payment</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Project Timeline
          </h3>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Timelines are estimates based on information provided by the client</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Delays caused by client (e.g., late feedback, access issues) may extend timelines</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We commit to proactive communication if timelines need adjustment</span>
            </li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            4. Pricing and Payment
          </h2>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Fixed-Price Projects
          </h3>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Most projects are quoted at fixed prices as outlined in proposals</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Payment terms are typically: 50% upfront, 50% upon completion</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>For projects over $10,000, milestone-based payments may be arranged</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Hourly Consulting
          </h3>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Consulting services are billed at $150 CAD per hour (unless otherwise agreed)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Invoices are issued monthly and payable within 15 days</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Minimum 1-hour increment for consulting calls</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Payment Methods
          </h3>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We accept e-transfer, wire transfer, credit card (via Stripe), and cheque</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>All prices are in Canadian dollars (CAD) unless stated otherwise</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>GST/HST applicable based on client location</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Late Payments
          </h3>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Invoices are due within 15 days of issue date</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Late payments may incur 1.5% monthly interest charge</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Unpaid invoices may result in service suspension or termination</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Refund Policy
          </h3>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>7-day money-back guarantee on initial deposit (project must not have started)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Partial refunds may be issued for milestone-based projects (for incomplete milestones only)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>No refunds for completed work or delivered services</span>
            </li>
          </ul>

          {/* Section 5 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            5. Client Responsibilities
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Clients agree to:
          </p>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Provide accurate information and timely feedback</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Grant necessary access to systems, platforms, and accounts</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Review and approve deliverables within agreed timeframes</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Maintain backups of all data (we are not responsible for data loss)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Comply with all applicable laws and third-party terms of service</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Provide content, images, and materials in formats we can use</span>
            </li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            6. Intellectual Property
          </h2>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Client Ownership
          </h3>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Upon full payment, client owns all custom code, designs, and deliverables created for their project</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We provide source code and documentation for all custom development</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Ownership transfers only after final payment is received</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Third-Party Components
          </h3>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Open-source software and third-party libraries retain their original licenses</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We do not own or transfer ownership of third-party tools and services</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Client is responsible for maintaining licenses for third-party software</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Our Intellectual Property
          </h3>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We retain rights to our methodologies, processes, and internal tools</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We may reuse generic code snippets and frameworks across projects</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We reserve the right to showcase completed projects in our portfolio (with client permission)</span>
            </li>
          </ul>

          {/* Section 7 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            7. Confidentiality
          </h2>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Mutual Non-Disclosure
          </h3>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Both parties agree to keep confidential information private</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Confidential information includes: business strategies, technical details, financial data, and customer lists</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Confidentiality obligations survive termination of the agreement</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Exceptions
          </h3>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Information that is publicly available</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Information required to be disclosed by law</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Information independently developed without using confidential data</span>
            </li>
          </ul>

          {/* Section 8 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            8. Warranties and Disclaimers
          </h2>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Service Warranty
          </h3>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We warrant that services will be performed in a professional manner</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We warrant that deliverables will substantially conform to agreed specifications</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Defects reported within 30 days of delivery will be corrected at no charge</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Disclaimers
          </h3>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Services are provided "as is" without warranties beyond those stated above</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We do not guarantee specific business results or revenue increases</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We are not responsible for third-party service outages or failures</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We cannot guarantee 100% uptime for hosted services</span>
            </li>
          </ul>

          {/* Section 9 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            9. Limitation of Liability
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            To the maximum extent permitted by law:
          </p>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Our total liability shall not exceed the amount paid by client for the specific service</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We are not liable for indirect, incidental, or consequential damages</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We are not liable for loss of profits, revenue, data, or business opportunities</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Client agrees to maintain adequate insurance and backups</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Exceptions
          </h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Liability limitations do not apply to:
          </p>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Gross negligence or willful misconduct</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Fraud or fraudulent misrepresentation</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Violations that cannot be limited by law</span>
            </li>
          </ul>

          {/* Section 10 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            10. Indemnification
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Client agrees to indemnify and hold harmless NorthStack Solutions from claims arising from:
          </p>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Client's use of deliverables</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Content provided by client (copyright infringement, defamation, etc.)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Client's violation of third-party rights</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Client's violation of applicable laws</span>
            </li>
          </ul>

          {/* Section 11 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            11. Termination
          </h2>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            By Client
          </h3>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Client may terminate with 14 days written notice</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Client is responsible for payment of all work completed up to termination date</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>No refund for work already performed</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            By NorthStack Solutions
          </h3>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We may terminate immediately for non-payment or breach of terms</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We may terminate with 30 days notice for any other reason</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Upon termination, we will deliver all completed work</span>
            </li>
          </ul>

          {/* Section 12 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            12. Support and Maintenance
          </h2>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Post-Launch Support
          </h3>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>All projects include specified post-launch support (30-180 days depending on package)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Support covers bug fixes and issues with deliverables</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Support does not cover new feature requests or scope changes</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Ongoing Maintenance
          </h3>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Optional maintenance packages available ($500/month and up)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Includes updates, security patches, and priority support</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Month-to-month commitment, cancel anytime with 30 days notice</span>
            </li>
          </ul>

          {/* Section 13 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            13. Third-Party Services
          </h2>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Client is responsible for costs of third-party services (hosting, domains, email platforms, etc.)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We assist with setup but do not control third-party services</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Client must maintain direct accounts with third-party providers</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We are not liable for third-party service issues, outages, or price changes</span>
            </li>
          </ul>

          {/* Section 14 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            14. Data and Backups
          </h2>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Client is solely responsible for maintaining backups of all data</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We implement automated backups where applicable but do not guarantee data recovery</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We retain project files for 90 days after project completion</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Client must request delivery of all project files before deletion</span>
            </li>
          </ul>

          {/* Section 15 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            15. Governing Law
          </h2>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>These Terms are governed by the laws of Alberta, Canada</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Disputes will be resolved in the courts of Alberta</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Parties agree to attempt mediation before litigation</span>
            </li>
          </ul>

          {/* Section 16 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            16. Changes to Terms
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            We reserve the right to modify these Terms at any time. Changes will be effective immediately
            upon posting to our website. Existing projects will continue under the terms agreed upon at
            project start.
          </p>

          {/* Section 17 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            17. Severability
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            If any provision of these Terms is found to be unenforceable, the remaining provisions will
            remain in full effect.
          </p>

          {/* Section 18 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            18. Entire Agreement
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            These Terms, together with any signed proposals and statements of work, constitute the entire
            agreement between parties and supersede all prior agreements or understandings.
          </p>

          {/* Section 19 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            19. Contact Information
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            For questions about these Terms, please contact us:
          </p>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300 p-8 rounded-xl shadow-sm mb-12">
            <p className="text-gray-900 font-bold text-lg mb-4">NorthStack Solutions</p>
            <p className="text-gray-800 mb-3">
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:legal@northstack.ca" className="text-primary-800 hover:text-primary-900 font-semibold underline transition-colors">
                legal@northstack.ca
              </a>
            </p>
            <p className="text-gray-800 mb-3">
              <span className="font-semibold">Phone:</span> +1 (403) 123-4567
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Address:</span> Calgary, Alberta, Canada
            </p>
          </div>

          <div className="border-t-2 border-gray-300 pt-8">
            <p className="text-sm text-gray-700 leading-relaxed">
              By using our services, you acknowledge that you have read, understood, and agree to be bound
              by these Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
