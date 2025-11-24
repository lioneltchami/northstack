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
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-800 mb-8">
              <strong>Effective Date:</strong> January 1, 2025
              <br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              These Terms of Service ("Terms") govern your use of services provided by NorthStack Solutions
              ("we," "us," "our"). By accessing our website, requesting a consultation, or engaging our services,
              you agree to be bound by these Terms.
            </p>

            <h2>2. Services</h2>
            <p>
              NorthStack Solutions provides IT consulting, DevOps, cloud infrastructure, automation, web
              development, and related technology services ("Services") to businesses and organizations.
            </p>

            <h3>Service Scope</h3>
            <ul>
              <li>All Services are detailed in individual project proposals and statements of work</li>
              <li>Scope changes require written approval and may affect pricing and timelines</li>
              <li>We reserve the right to refuse service to anyone for any lawful reason</li>
            </ul>

            <h2>3. Proposals and Contracts</h2>

            <h3>Binding Agreements</h3>
            <ul>
              <li>Written proposals become binding upon client acceptance (signature or deposit payment)</li>
              <li>Proposals are valid for 30 days unless otherwise stated</li>
              <li>Services begin only after receiving signed agreement and initial payment</li>
            </ul>

            <h3>Project Timeline</h3>
            <ul>
              <li>Timelines are estimates based on information provided by the client</li>
              <li>Delays caused by client (e.g., late feedback, access issues) may extend timelines</li>
              <li>We commit to proactive communication if timelines need adjustment</li>
            </ul>

            <h2>4. Pricing and Payment</h2>

            <h3>Fixed-Price Projects</h3>
            <ul>
              <li>Most projects are quoted at fixed prices as outlined in proposals</li>
              <li>Payment terms are typically: 50% upfront, 50% upon completion</li>
              <li>For projects over $10,000, milestone-based payments may be arranged</li>
            </ul>

            <h3>Hourly Consulting</h3>
            <ul>
              <li>Consulting services are billed at $150 CAD per hour (unless otherwise agreed)</li>
              <li>Invoices are issued monthly and payable within 15 days</li>
              <li>Minimum 1-hour increment for consulting calls</li>
            </ul>

            <h3>Payment Methods</h3>
            <ul>
              <li>We accept e-transfer, wire transfer, credit card (via Stripe), and cheque</li>
              <li>All prices are in Canadian dollars (CAD) unless stated otherwise</li>
              <li>GST/HST applicable based on client location</li>
            </ul>

            <h3>Late Payments</h3>
            <ul>
              <li>Invoices are due within 15 days of issue date</li>
              <li>Late payments may incur 1.5% monthly interest charge</li>
              <li>Unpaid invoices may result in service suspension or termination</li>
            </ul>

            <h3>Refund Policy</h3>
            <ul>
              <li>7-day money-back guarantee on initial deposit (project must not have started)</li>
              <li>Partial refunds may be issued for milestone-based projects (for incomplete milestones only)</li>
              <li>No refunds for completed work or delivered services</li>
            </ul>

            <h2>5. Client Responsibilities</h2>

            <p>Clients agree to:</p>
            <ul>
              <li>Provide accurate information and timely feedback</li>
              <li>Grant necessary access to systems, platforms, and accounts</li>
              <li>Review and approve deliverables within agreed timeframes</li>
              <li>Maintain backups of all data (we are not responsible for data loss)</li>
              <li>Comply with all applicable laws and third-party terms of service</li>
              <li>Provide content, images, and materials in formats we can use</li>
            </ul>

            <h2>6. Intellectual Property</h2>

            <h3>Client Ownership</h3>
            <ul>
              <li>Upon full payment, client owns all custom code, designs, and deliverables created for their project</li>
              <li>We provide source code and documentation for all custom development</li>
              <li>Ownership transfers only after final payment is received</li>
            </ul>

            <h3>Third-Party Components</h3>
            <ul>
              <li>Open-source software and third-party libraries retain their original licenses</li>
              <li>We do not own or transfer ownership of third-party tools and services</li>
              <li>Client is responsible for maintaining licenses for third-party software</li>
            </ul>

            <h3>Our Intellectual Property</h3>
            <ul>
              <li>We retain rights to our methodologies, processes, and internal tools</li>
              <li>We may reuse generic code snippets and frameworks across projects</li>
              <li>We reserve the right to showcase completed projects in our portfolio (with client permission)</li>
            </ul>

            <h2>7. Confidentiality</h2>

            <h3>Mutual Non-Disclosure</h3>
            <ul>
              <li>Both parties agree to keep confidential information private</li>
              <li>Confidential information includes: business strategies, technical details, financial data, and customer lists</li>
              <li>Confidentiality obligations survive termination of the agreement</li>
            </ul>

            <h3>Exceptions</h3>
            <ul>
              <li>Information that is publicly available</li>
              <li>Information required to be disclosed by law</li>
              <li>Information independently developed without using confidential data</li>
            </ul>

            <h2>8. Warranties and Disclaimers</h2>

            <h3>Service Warranty</h3>
            <ul>
              <li>We warrant that services will be performed in a professional manner</li>
              <li>We warrant that deliverables will substantially conform to agreed specifications</li>
              <li>Defects reported within 30 days of delivery will be corrected at no charge</li>
            </ul>

            <h3>Disclaimers</h3>
            <ul>
              <li>Services are provided "as is" without warranties beyond those stated above</li>
              <li>We do not guarantee specific business results or revenue increases</li>
              <li>We are not responsible for third-party service outages or failures</li>
              <li>We cannot guarantee 100% uptime for hosted services</li>
            </ul>

            <h2>9. Limitation of Liability</h2>

            <p>
              To the maximum extent permitted by law:
            </p>
            <ul>
              <li>Our total liability shall not exceed the amount paid by client for the specific service</li>
              <li>We are not liable for indirect, incidental, or consequential damages</li>
              <li>We are not liable for loss of profits, revenue, data, or business opportunities</li>
              <li>Client agrees to maintain adequate insurance and backups</li>
            </ul>

            <h3>Exceptions</h3>
            <p>Liability limitations do not apply to:</p>
            <ul>
              <li>Gross negligence or willful misconduct</li>
              <li>Fraud or fraudulent misrepresentation</li>
              <li>Violations that cannot be limited by law</li>
            </ul>

            <h2>10. Indemnification</h2>

            <p>
              Client agrees to indemnify and hold harmless NorthStack Solutions from claims arising from:
            </p>
            <ul>
              <li>Client's use of deliverables</li>
              <li>Content provided by client (copyright infringement, defamation, etc.)</li>
              <li>Client's violation of third-party rights</li>
              <li>Client's violation of applicable laws</li>
            </ul>

            <h2>11. Termination</h2>

            <h3>By Client</h3>
            <ul>
              <li>Client may terminate with 14 days written notice</li>
              <li>Client is responsible for payment of all work completed up to termination date</li>
              <li>No refund for work already performed</li>
            </ul>

            <h3>By NorthStack Solutions</h3>
            <ul>
              <li>We may terminate immediately for non-payment or breach of terms</li>
              <li>We may terminate with 30 days notice for any other reason</li>
              <li>Upon termination, we will deliver all completed work</li>
            </ul>

            <h2>12. Support and Maintenance</h2>

            <h3>Post-Launch Support</h3>
            <ul>
              <li>All projects include specified post-launch support (30-180 days depending on package)</li>
              <li>Support covers bug fixes and issues with deliverables</li>
              <li>Support does not cover new feature requests or scope changes</li>
            </ul>

            <h3>Ongoing Maintenance</h3>
            <ul>
              <li>Optional maintenance packages available ($500/month and up)</li>
              <li>Includes updates, security patches, and priority support</li>
              <li>Month-to-month commitment, cancel anytime with 30 days notice</li>
            </ul>

            <h2>13. Third-Party Services</h2>

            <ul>
              <li>Client is responsible for costs of third-party services (hosting, domains, email platforms, etc.)</li>
              <li>We assist with setup but do not control third-party services</li>
              <li>Client must maintain direct accounts with third-party providers</li>
              <li>We are not liable for third-party service issues, outages, or price changes</li>
            </ul>

            <h2>14. Data and Backups</h2>

            <ul>
              <li>Client is solely responsible for maintaining backups of all data</li>
              <li>We implement automated backups where applicable but do not guarantee data recovery</li>
              <li>We retain project files for 90 days after project completion</li>
              <li>Client must request delivery of all project files before deletion</li>
            </ul>

            <h2>15. Governing Law</h2>

            <ul>
              <li>These Terms are governed by the laws of Alberta, Canada</li>
              <li>Disputes will be resolved in the courts of Alberta</li>
              <li>Parties agree to attempt mediation before litigation</li>
            </ul>

            <h2>16. Changes to Terms</h2>

            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective immediately
              upon posting to our website. Existing projects will continue under the terms agreed upon at
              project start.
            </p>

            <h2>17. Severability</h2>

            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions will
              remain in full effect.
            </p>

            <h2>18. Entire Agreement</h2>

            <p>
              These Terms, together with any signed proposals and statements of work, constitute the entire
              agreement between parties and supersede all prior agreements or understandings.
            </p>

            <h2>19. Contact Information</h2>

            <p>For questions about these Terms, please contact us:</p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <p className="mb-2"><strong>NorthStack Solutions</strong></p>
              <p className="mb-2">Email: <a href="mailto:legal@northstack.ca">legal@northstack.ca</a></p>
              <p className="mb-2">Phone: +1 (403) 123-4567</p>
              <p className="mb-2">Address: Calgary, Alberta, Canada</p>
            </div>

            <hr className="my-8" />

            <p className="text-sm text-gray-800">
              By using our services, you acknowledge that you have read, understood, and agree to be bound
              by these Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
