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
    <footer className="bg-gray-900 text-gray-300">
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
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-3 py-2 rounded-lg shadow-lg">
                  NS
                </div>
              </div>
              <span className="text-white font-extrabold">
                {siteName}
              </span>
            </Link>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-md">
              Enterprise-Grade DevOps & Automation for Canadian Businesses.
              Bringing 7+ years of enterprise experience to personalized service.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>{businessLocation}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-5 h-5 text-primary-400" />
                <a
                  href={`mailto:${contactEmail}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-5 h-5 text-primary-400" />
                <a
                  href={`tel:${contactPhone.replace(/\s/g, '')}`}
                  className="hover:text-primary-400 transition-colors"
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
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
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
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
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
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center space-x-1 group"
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
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center space-x-1 group"
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
            <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center space-x-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Stay Connected */}
            <div className="mt-6">
              <h4 className="text-white font-medium mb-2">Stay Updated</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                Follow our latest insights and automation tips.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-gray-700 dark:text-gray-300 text-center md:text-left">
              © {currentYear} NorthStack Solutions. Operated by{' '}
              <span className="text-primary-400">Apoti Tech Inc.</span> All
              rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Terms
              </Link>
              <span className="text-gray-600">
                Made with care in Calgary 🇨🇦
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
