import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';

export const metadata: Metadata = {
  title: 'Privacy Policy | NorthStack Solutions',
  description: 'Privacy Policy for NorthStack Solutions. Learn how we collect, use, and protect your personal information in compliance with Canadian privacy laws (PIPEDA).',
};

export default function PrivacyPage() {
  return (
    <>
      <Hero
        title="Privacy Policy"
        subtitle="Your Privacy Matters"
        description="We take your privacy seriously. This policy explains how we collect, use, and protect your personal information."
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

            <p>
              NorthStack Solutions ("we," "us," or "our") is committed to protecting your privacy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your information when you visit our
              website or use our services.
            </p>

            <h2>1. Information We Collect</h2>

            <h3>Personal Information</h3>
            <p>We collect information that you voluntarily provide to us when you:</p>
            <ul>
              <li>Fill out our contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a consultation or quote</li>
              <li>Download resources</li>
              <li>Communicate with us via email or phone</li>
            </ul>

            <p>This information may include:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Company name and business information</li>
              <li>Project details and requirements</li>
              <li>Budget and timeline preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we automatically collect certain information about your device, including:</p>
            <ul>
              <li>IP address and geographic location</li>
              <li>Browser type and version</li>
              <li>Device type and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website or source</li>
              <li>Date and time of visit</li>
            </ul>

            <h2>2. How We Use Your Information</h2>

            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Provide quotes and proposals for services</li>
              <li>Deliver services and manage client projects</li>
              <li>Send newsletters and marketing communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Analyze website usage and trends</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure security</li>
            </ul>

            <h2>3. Legal Basis for Processing (PIPEDA Compliance)</h2>

            <p>
              We process your personal information in accordance with Canada's Personal Information Protection
              and Electronic Documents Act (PIPEDA). We collect and use your information only when:
            </p>
            <ul>
              <li><strong>Consent:</strong> You have given us explicit consent to process your information for a specific purpose</li>
              <li><strong>Contract:</strong> Processing is necessary to fulfill a contract with you</li>
              <li><strong>Legal Obligation:</strong> We must comply with Canadian law</li>
              <li><strong>Legitimate Interests:</strong> Processing is in our legitimate business interests (and does not override your rights)</li>
            </ul>

            <h2>4. How We Share Your Information</h2>

            <p>We do not sell, rent, or trade your personal information. We may share your information with:</p>

            <h3>Service Providers</h3>
            <p>We work with trusted third-party service providers who assist us in operating our business, including:</p>
            <ul>
              <li>Web hosting providers (servers located in Canada)</li>
              <li>Email service providers (for newsletters and communications)</li>
              <li>Analytics providers (Google Analytics, with IP anonymization)</li>
              <li>Payment processors (for invoicing and payments)</li>
              <li>Cloud infrastructure providers (AWS, GCP - Canadian regions when possible)</li>
            </ul>
            <p>These providers are contractually obligated to protect your data and use it only for the purposes we specify.</p>

            <h3>Legal Requirements</h3>
            <p>We may disclose your information if required by law or in response to valid requests by public authorities.</p>

            <h2>5. Data Retention</h2>

            <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy:</p>
            <ul>
              <li><strong>Contact inquiries:</strong> 2 years from last contact</li>
              <li><strong>Client project data:</strong> 7 years (for business records and tax purposes)</li>
              <li><strong>Newsletter subscribers:</strong> Until you unsubscribe</li>
              <li><strong>Website analytics:</strong> 26 months (Google Analytics default)</li>
            </ul>

            <h2>6. Your Privacy Rights</h2>

            <p>Under Canadian privacy law (PIPEDA), you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Withdraw Consent:</strong> Withdraw your consent for marketing communications at any time</li>
              <li><strong>Object:</strong> Object to processing based on legitimate interests</li>
              <li><strong>Data Portability:</strong> Request your data in a structured, machine-readable format</li>
            </ul>

            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:privacy@northstack.ca">privacy@northstack.ca</a>. We will respond within 30 days.
            </p>

            <h2>7. Cookies and Tracking Technologies</h2>

            <p>We use cookies and similar tracking technologies to improve your browsing experience:</p>

            <h3>Essential Cookies</h3>
            <p>Required for basic website functionality (session management, security).</p>

            <h3>Analytics Cookies</h3>
            <p>Help us understand how visitors interact with our website (Google Analytics with IP anonymization).</p>

            <h3>Preference Cookies</h3>
            <p>Remember your settings (e.g., dark mode preference).</p>

            <p>
              You can control cookies through your browser settings. Note that disabling cookies may affect website
              functionality.
            </p>

            <h2>8. Data Security</h2>

            <p>We implement industry-standard security measures to protect your information:</p>
            <ul>
              <li>SSL/TLS encryption for all data transmission</li>
              <li>Secure servers with regular security updates</li>
              <li>Access controls and authentication requirements</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Employee training on data protection</li>
              <li>Encrypted backups</li>
            </ul>

            <p>
              While we use reasonable security measures, no method of transmission over the internet is 100%
              secure. We cannot guarantee absolute security.
            </p>

            <h2>9. Canadian Anti-Spam Legislation (CASL)</h2>

            <p>We comply with Canada's Anti-Spam Legislation (CASL):</p>
            <ul>
              <li>We only send commercial emails to those who have explicitly consented</li>
              <li>Every email includes a clear unsubscribe mechanism</li>
              <li>We honor unsubscribe requests immediately</li>
              <li>We maintain records of consent for 3 years</li>
              <li>Our emails clearly identify our business</li>
            </ul>

            <h2>10. Third-Party Links</h2>

            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy
              practices of these external sites. We encourage you to review their privacy policies.
            </p>

            <h2>11. Children's Privacy</h2>

            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect
              personal information from children. If you believe we have inadvertently collected information
              from a child, please contact us immediately.
            </p>

            <h2>12. International Data Transfers</h2>

            <p>
              Your information is primarily stored on servers in Canada. Some of our service providers may be
              located in the United States or other countries. When we transfer data internationally, we ensure
              adequate safeguards are in place to protect your information.
            </p>

            <h2>13. Changes to This Privacy Policy</h2>

            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by:
            </p>
            <ul>
              <li>Posting the new policy on this page</li>
              <li>Updating the "Last Updated" date</li>
              <li>Sending an email notification (for material changes)</li>
            </ul>

            <p>Your continued use of our services after changes indicates acceptance of the updated policy.</p>

            <h2>14. Contact Us</h2>

            <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <p className="mb-2"><strong>NorthStack Solutions</strong></p>
              <p className="mb-2">Email: <a href="mailto:privacy@northstack.ca">privacy@northstack.ca</a></p>
              <p className="mb-2">Phone: +1 (403) 123-4567</p>
              <p className="mb-2">Address: Calgary, Alberta, Canada</p>
            </div>

            <h2>15. Privacy Commissioner</h2>

            <p>
              If you are not satisfied with our response to your privacy concern, you have the right to
              contact the Office of the Privacy Commissioner of Canada:
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-6">
              <p className="mb-2"><strong>Office of the Privacy Commissioner of Canada</strong></p>
              <p className="mb-2">Toll-free: 1-800-282-1376</p>
              <p className="mb-2">Website: <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">www.priv.gc.ca</a></p>
            </div>

            <hr className="my-8" />

            <p className="text-sm text-gray-800">
              This Privacy Policy is governed by the laws of Alberta, Canada. By using our services, you consent
              to the collection and use of your information as described in this policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
