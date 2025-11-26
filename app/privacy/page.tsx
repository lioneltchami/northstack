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
          {/* Effective Date */}
          <div className="bg-gray-50 border-l-4 border-primary-800 p-6 rounded-r-lg mb-12">
            <p className="text-sm text-gray-900 font-semibold">
              <span className="font-bold">Effective Date:</span> January 1, 2025
            </p>
            <p className="text-sm text-gray-900 font-semibold mt-1">
              <span className="font-bold">Last Updated:</span> January 1, 2025
            </p>
          </div>

          {/* Introduction */}
          <p className="text-lg text-gray-800 leading-relaxed mb-12">
            NorthStack Solutions ("we," "us," or "our") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you visit our
            website or use our services.
          </p>

          {/* Section 1 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            1. Information We Collect
          </h2>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Personal Information
          </h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            We collect information that you voluntarily provide to us when you:
          </p>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Fill out our contact form</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Subscribe to our newsletter</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Request a consultation or quote</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Download resources</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Communicate with us via email or phone</span>
            </li>
          </ul>

          <p className="text-gray-800 leading-relaxed mb-4">
            This information may include:
          </p>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Name and contact information (email address, phone number)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Company name and business information</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Project details and requirements</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Budget and timeline preferences</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Any other information you choose to provide</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Automatically Collected Information
          </h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            When you visit our website, we automatically collect certain information about your device, including:
          </p>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>IP address and geographic location</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Browser type and version</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Device type and operating system</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Pages visited and time spent on pages</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Referring website or source</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Date and time of visit</span>
            </li>
          </ul>

          {/* Section 2 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Respond to your inquiries and provide customer support</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Provide quotes and proposals for services</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Deliver services and manage client projects</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Send newsletters and marketing communications (with your consent)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Improve our website and services</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Analyze website usage and trends</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Comply with legal obligations</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Prevent fraud and ensure security</span>
            </li>
          </ul>

          {/* Section 3 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            3. Legal Basis for Processing (PIPEDA Compliance)
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            We process your personal information in accordance with Canada's Personal Information Protection
            and Electronic Documents Act (PIPEDA). We collect and use your information only when:
          </p>
          <ul className="space-y-3 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Consent:</strong> You have given us explicit consent to process your information for a specific purpose</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Contract:</strong> Processing is necessary to fulfill a contract with you</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Legal Obligation:</strong> We must comply with Canadian law</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Legitimate Interests:</strong> Processing is in our legitimate business interests (and does not override your rights)</span>
            </li>
          </ul>

          {/* Section 4 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            4. How We Share Your Information
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            We do not sell, rent, or trade your personal information. We may share your information with:
          </p>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Service Providers
          </h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            We work with trusted third-party service providers who assist us in operating our business, including:
          </p>
          <ul className="space-y-2 mb-4 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Web hosting providers (servers located in Canada)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Email service providers (for newsletters and communications)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Analytics providers (Google Analytics, with IP anonymization)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Payment processors (for invoicing and payments)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Cloud infrastructure providers (AWS, GCP - Canadian regions when possible)</span>
            </li>
          </ul>
          <p className="text-gray-800 leading-relaxed mb-8">
            These providers are contractually obligated to protect your data and use it only for the purposes we specify.
          </p>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Legal Requirements
          </h3>
          <p className="text-gray-800 leading-relaxed mb-8">
            We may disclose your information if required by law or in response to valid requests by public authorities.
          </p>

          {/* Continue with remaining sections in the same format... */}
          {/* Section 5 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            5. Data Retention
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy:
          </p>
          <ul className="space-y-3 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Contact inquiries:</strong> 2 years from last contact</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Client project data:</strong> 7 years (for business records and tax purposes)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Newsletter subscribers:</strong> Until you unsubscribe</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Website analytics:</strong> 26 months (Google Analytics default)</span>
            </li>
          </ul>

          {/* Section 6 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            6. Your Privacy Rights
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            Under Canadian privacy law (PIPEDA), you have the right to:
          </p>
          <ul className="space-y-3 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Access:</strong> Request a copy of the personal information we hold about you</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Correction:</strong> Request correction of inaccurate or incomplete information</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Withdraw Consent:</strong> Withdraw your consent for marketing communications at any time</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Object:</strong> Object to processing based on legitimate interests</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span><strong className="font-bold text-gray-900">Data Portability:</strong> Request your data in a structured, machine-readable format</span>
            </li>
          </ul>
          <p className="text-gray-800 leading-relaxed mb-8">
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:privacy@northstack.ca" className="text-primary-800 hover:text-primary-900 font-semibold underline transition-colors">
              privacy@northstack.ca
            </a>
            . We will respond within 30 days.
          </p>

          {/* Section 7 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            7. Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            We use cookies and similar tracking technologies to improve your browsing experience:
          </p>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Essential Cookies
          </h3>
          <p className="text-gray-800 leading-relaxed mb-6">
            Required for basic website functionality (session management, security).
          </p>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Analytics Cookies
          </h3>
          <p className="text-gray-800 leading-relaxed mb-6">
            Help us understand how visitors interact with our website (Google Analytics with IP anonymization).
          </p>

          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4 mt-8">
            Preference Cookies
          </h3>
          <p className="text-gray-800 leading-relaxed mb-6">
            Remember your settings (e.g., dark mode preference).
          </p>

          <p className="text-gray-800 leading-relaxed mb-8">
            You can control cookies through your browser settings. Note that disabling cookies may affect website
            functionality.
          </p>

          {/* Section 8 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            8. Data Security
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            We implement industry-standard security measures to protect your information:
          </p>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>SSL/TLS encryption for all data transmission</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Secure servers with regular security updates</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Access controls and authentication requirements</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Regular security audits and vulnerability assessments</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Employee training on data protection</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Encrypted backups</span>
            </li>
          </ul>
          <p className="text-gray-800 leading-relaxed mb-8">
            While we use reasonable security measures, no method of transmission over the internet is 100%
            secure. We cannot guarantee absolute security.
          </p>

          {/* Section 9 */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            9. Canadian Anti-Spam Legislation (CASL)
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            We comply with Canada's Anti-Spam Legislation (CASL):
          </p>
          <ul className="space-y-2 mb-8 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We only send commercial emails to those who have explicitly consented</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Every email includes a clear unsubscribe mechanism</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We honor unsubscribe requests immediately</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>We maintain records of consent for 3 years</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Our emails clearly identify our business</span>
            </li>
          </ul>

          {/* Sections 10-15 continue with same format */}
          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            10. Third-Party Links
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            Our website may contain links to third-party websites. We are not responsible for the privacy
            practices of these external sites. We encourage you to review their privacy policies.
          </p>

          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            11. Children's Privacy
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            Our services are not directed to individuals under 18 years of age. We do not knowingly collect
            personal information from children. If you believe we have inadvertently collected information
            from a child, please contact us immediately.
          </p>

          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            12. International Data Transfers
          </h2>
          <p className="text-gray-800 leading-relaxed mb-8">
            Your information is primarily stored on servers in Canada. Some of our service providers may be
            located in the United States or other countries. When we transfer data internationally, we ensure
            adequate safeguards are in place to protect your information.
          </p>

          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            13. Changes to This Privacy Policy
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. We will notify you of significant changes by:
          </p>
          <ul className="space-y-2 mb-6 ml-6">
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Posting the new policy on this page</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Updating the "Last Updated" date</span>
            </li>
            <li className="text-gray-800 leading-relaxed flex items-start">
              <span className="text-primary-800 mr-3 mt-1">•</span>
              <span>Sending an email notification (for material changes)</span>
            </li>
          </ul>
          <p className="text-gray-800 leading-relaxed mb-8">
            Your continued use of our services after changes indicates acceptance of the updated policy.
          </p>

          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            14. Contact Us
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            If you have questions or concerns about this Privacy Policy or our data practices, please contact us:
          </p>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300 p-8 rounded-xl shadow-sm mb-8">
            <p className="text-gray-900 font-bold text-lg mb-4">NorthStack Solutions</p>
            <p className="text-gray-800 mb-3">
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:privacy@northstack.ca" className="text-primary-800 hover:text-primary-900 font-semibold underline transition-colors">
                privacy@northstack.ca
              </a>
            </p>
            <p className="text-gray-800 mb-3">
              <span className="font-semibold">Phone:</span> +1 (587) 432-0753
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Address:</span> Calgary, Alberta, Canada
            </p>
          </div>

          <h2 className="text-3xl font-bold font-heading text-gray-900 mb-6 mt-12">
            15. Privacy Commissioner
          </h2>
          <p className="text-gray-800 leading-relaxed mb-6">
            If you are not satisfied with our response to your privacy concern, you have the right to
            contact the Office of the Privacy Commissioner of Canada:
          </p>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-2 border-gray-300 p-8 rounded-xl shadow-sm mb-12">
            <p className="text-gray-900 font-bold text-lg mb-4">Office of the Privacy Commissioner of Canada</p>
            <p className="text-gray-800 mb-3">
              <span className="font-semibold">Toll-free:</span> 1-800-282-1376
            </p>
            <p className="text-gray-800">
              <span className="font-semibold">Website:</span>{' '}
              <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-primary-800 hover:text-primary-900 font-semibold underline transition-colors">
                www.priv.gc.ca
              </a>
            </p>
          </div>

          <div className="border-t-2 border-gray-300 pt-8">
            <p className="text-sm text-gray-700 leading-relaxed">
              This Privacy Policy is governed by the laws of Alberta, Canada. By using our services, you consent
              to the collection and use of your information as described in this policy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
