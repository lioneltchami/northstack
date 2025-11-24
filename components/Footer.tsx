import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  ArrowUpRight,
} from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Web Development', href: '/services' },
    { label: 'Automation Solutions', href: '/automation' },
    { label: 'Home Server Setup', href: '/home-server' },
    { label: 'Cloud Infrastructure', href: '/services#cloud' },
    { label: 'Security Services', href: '/services#security' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Free Resources', href: '/resources' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'NorthStack Solutions';
  const contactEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'info@northstack.solutions';
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '(403) 123-4567';
  const businessLocation = process.env.NEXT_PUBLIC_BUSINESS_LOCATION || 'Calgary, Alberta, Canada';

  return (
    <footer className="bg-gray-100 text-gray-900 border-t-4 border-primary-700">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-bold font-heading group mb-4"
            >
              <div className="relative">
                <div className="bg-gradient-to-r from-primary-700 to-secondary-700 text-white px-3 py-2 rounded-lg shadow-lg">
                  NS
                </div>
              </div>
              <span className="text-gray-900 font-extrabold">
                {siteName}
              </span>
            </Link>
            <p className="text-gray-800 mb-6 max-w-md font-normal">
              Enterprise-Grade DevOps & Automation for Canadian Businesses.
              Bringing 7+ years of enterprise experience to personalized service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-primary-700" />
                <span className="text-gray-900 font-medium">{businessLocation}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-primary-700" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-gray-900 hover:text-primary-900 transition-colors font-medium"
                >
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-primary-700" />
                <a
                  href={`tel:${contactPhone.replace(/\s/g, '')}`}
                  className="text-gray-900 hover:text-primary-900 transition-colors font-medium"
                >
                  {contactPhone}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              {process.env.NEXT_PUBLIC_LINKEDIN_URL && (
                <a
                  href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border-2 border-gray-400 rounded-lg hover:border-primary-900 hover:bg-primary-900 hover:text-white transition-all shadow-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
              {process.env.NEXT_PUBLIC_GITHUB_URL && (
                <a
                  href={process.env.NEXT_PUBLIC_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border-2 border-gray-400 rounded-lg hover:border-primary-900 hover:bg-primary-900 hover:text-white transition-all shadow-sm"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {process.env.NEXT_PUBLIC_TWITTER_URL && (
                <a
                  href={process.env.NEXT_PUBLIC_TWITTER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white border-2 border-gray-400 rounded-lg hover:border-primary-900 hover:bg-primary-900 hover:text-white transition-all shadow-sm"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-900 hover:text-primary-900 transition-colors flex items-center space-x-1 group font-semibold"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-900 hover:text-primary-900 transition-colors flex items-center space-x-1 group font-semibold"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-gray-900 font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-900 hover:text-primary-900 transition-colors flex items-center space-x-1 group font-semibold"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Stay Connected */}
            <div className="mt-6">
              <h4 className="text-gray-900 font-bold mb-2">Stay Updated</h4>
              <p className="text-sm text-gray-800 mb-3 font-normal">
                Follow our latest insights and automation tips.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-primary-800 hover:bg-primary-900 text-white rounded-lg text-lg font-bold transition-colors shadow-xl hover:shadow-2xl border-2 border-primary-900"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t-2 border-gray-300 bg-white">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-900 text-center md:text-left font-medium">
              © {currentYear} NorthStack Solutions. Operated by{' '}
              <span className="text-primary-800 font-bold">Apoti Tech Inc.</span> All
              rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-900 hover:text-primary-900 transition-colors font-semibold"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-900 hover:text-primary-900 transition-colors font-semibold"
              >
                Terms
              </Link>
              <span className="text-gray-900 font-semibold">
                Made with care in Calgary 🇨🇦
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
