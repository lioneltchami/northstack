import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import CTA from '@/components/ui/CTA';
import {
  Server,
  Shield,
  DollarSign,
  HardDrive,
  Lock,
  Wifi,
  Cloud,
  Home,
  CheckCircle,
  XCircle,
  Zap,
  Users,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home Server Setup | Self-Hosting Solutions | NorthStack',
  description: 'Take control of your data with custom home server solutions. Professional Nextcloud, Plex, and self-hosting setup in Calgary and across Canada.',
  keywords: ['Home Server', 'Self-Hosting', 'Nextcloud', 'Proxmox', 'Privacy', 'Data Ownership'],
};

export default function HomeServerPage() {
  return (
    <>
      <Hero
        title="Take Back Control of Your Data"
        subtitle="Home Server & Self-Hosting Solutions"
        description="Stop paying monthly fees for cloud storage. Build your own private cloud with complete privacy, unlimited storage, and one-time costs."
        cta={{
          primary: { text: 'Get Free Setup Quote', href: '/contact' },
          secondary: { text: 'Read Setup Guide', href: '/blog/building-home-cloud-nextcloud-proxmox-guide' },
        }}
        variant="gradient"
        size="medium"
      />

      {/* Why Self-Host */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Why Self-Host Your Cloud Storage?
            </h2>
            <p className="text-lg text-gray-800">
              Privacy, cost savings, and complete control over your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'Complete Privacy',
                description: 'Your photos, documents, and personal files never leave your control. No data mining, no third-party access.',
              },
              {
                icon: DollarSign,
                title: 'Save Money',
                description: 'Stop paying $10-30/month forever. One-time hardware investment pays for itself in 2-3 years.',
              },
              {
                icon: HardDrive,
                title: 'Unlimited Storage',
                description: 'Add 4TB, 8TB, or 16TB drives. Your storage limits are only bound by your hardware.',
              },
              {
                icon: Lock,
                title: 'Data Ownership',
                description: 'You own the hardware, you control the data. No Terms of Service changes or surprise shutdowns.',
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary-100 text-primary-700 mb-4">
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900">
                  {benefit.title}
                </h3>
                <p className="text-gray-800">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud vs Self-Hosted Comparison */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
            Commercial Cloud vs. Self-Hosted
          </h2>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="border-b-2 border-gray-400">
                  <th className="p-4 text-left text-gray-900 font-bold">Feature</th>
                  <th className="p-4 text-center text-gray-900 font-bold">Commercial Cloud</th>
                  <th className="p-4 text-center text-gray-900 font-bold">Self-Hosted</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: 'Monthly Cost (2TB)',
                    cloud: '$10-20/month forever',
                    selfHosted: '$0 after initial setup',
                    winner: 'selfHosted',
                  },
                  {
                    feature: 'Initial Investment',
                    cloud: '$0',
                    selfHosted: '$500-1,000 one-time',
                    winner: 'cloud',
                  },
                  {
                    feature: '5-Year Total Cost',
                    cloud: '$600-1,200',
                    selfHosted: '$500-1,000',
                    winner: 'selfHosted',
                  },
                  {
                    feature: 'Privacy & Data Control',
                    cloud: 'Limited',
                    selfHosted: 'Complete',
                    winner: 'selfHosted',
                  },
                  {
                    feature: 'Storage Capacity',
                    cloud: 'Pay per GB',
                    selfHosted: 'Unlimited (add drives)',
                    winner: 'selfHosted',
                  },
                  {
                    feature: 'Setup Difficulty',
                    cloud: 'Very Easy',
                    selfHosted: 'Technical (we help!)',
                    winner: 'cloud',
                  },
                  {
                    feature: 'Accessibility',
                    cloud: 'Excellent',
                    selfHosted: 'Excellent (with VPN)',
                    winner: 'tie',
                  },
                  {
                    feature: 'Maintenance',
                    cloud: 'Zero',
                    selfHosted: 'Minimal (monthly updates)',
                    winner: 'cloud',
                  },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-400">
                    <td className="p-4 font-semibold text-gray-900">{row.feature}</td>
                    <td className={`p-4 text-center ${row.winner === 'cloud' ? 'bg-green-50' : ''}`}>
                      <div className="flex items-center justify-center gap-2">
                        {row.winner === 'cloud' && <CheckCircle className="w-5 h-5 text-green-600" />}
                        {row.winner === 'selfHosted' && <XCircle className="w-5 h-5 text-red-600" />}
                        <span className="text-gray-700">{row.cloud}</span>
                      </div>
                    </td>
                    <td className={`p-4 text-center ${row.winner === 'selfHosted' ? 'bg-green-50' : ''}`}>
                      <div className="flex items-center justify-center gap-2">
                        {row.winner === 'selfHosted' && <CheckCircle className="w-5 h-5 text-green-600" />}
                        {row.winner === 'cloud' && <XCircle className="w-5 h-5 text-red-600" />}
                        <span className="text-gray-700">{row.selfHosted}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What We Set Up */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              What's Included in Your Home Server
            </h2>
            <p className="text-lg text-gray-800">
              A complete, production-ready private cloud tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Nextcloud',
                description: 'File sync & share (Dropbox/Google Drive replacement)',
                features: ['Desktop & mobile sync', 'Share files with anyone', 'Calendar & contacts', 'Office document editing'],
              },
              {
                name: 'Immich',
                description: 'Photo backup & management (Google Photos alternative)',
                features: ['Automatic phone backup', 'Face recognition', 'Object detection', 'Timeline & albums'],
              },
              {
                name: 'Jellyfin / Plex',
                description: 'Media server for movies, TV shows, and music',
                features: ['Stream to any device', 'Auto-organize media', 'Remote access', 'Multiple users'],
              },
              {
                name: 'Vaultwarden',
                description: 'Password manager (Bitwarden-compatible)',
                features: ['Secure password storage', 'Browser extensions', 'Mobile apps', 'Encrypted vault'],
              },
              {
                name: 'Tailscale VPN',
                description: 'Secure remote access from anywhere',
                features: ['Zero-config VPN', 'Access from phone/laptop', 'Encrypted connections', 'No port forwarding'],
              },
              {
                name: 'Automated Backups',
                description: 'Scheduled backups to external drive or cloud',
                features: ['Nightly automated backups', 'Incremental snapshots', 'Easy restore process', 'Off-site backup option'],
              },
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold font-heading mb-2 text-primary-700">
                  {service.name}
                </h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-800">
                      <CheckCircle className="w-4 h-4 text-primary-700 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
            Home Server Packages
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Essential',
                price: '$1,200',
                description: 'Perfect for individuals and families.',
                included: [
                  'Proxmox hypervisor setup',
                  'Nextcloud file storage',
                  'Immich photo backup',
                  'Tailscale VPN access',
                  'Automated daily backups',
                  'Remote management setup',
                  'Documentation & training',
                ],
                hardware: 'Your existing PC or mini PC',
              },
              {
                name: 'Professional',
                price: '$2,500',
                description: 'For power users and small businesses.',
                included: [
                  'Everything in Essential',
                  'Plex/Jellyfin media server',
                  'Vaultwarden password manager',
                  'Home Assistant integration',
                  'Custom domain & SSL',
                  'RAID storage configuration',
                  'Advanced monitoring',
                  '90 days remote support',
                ],
                hardware: 'Includes hardware recommendations',
                highlighted: true,
              },
              {
                name: 'Enterprise',
                price: '$4,500+',
                description: 'Complete business infrastructure.',
                included: [
                  'Everything in Professional',
                  'High-availability setup',
                  'Business productivity suite',
                  'CRM & project management',
                  'Email server (optional)',
                  'Multi-site backup',
                  'Disaster recovery plan',
                  '6 months support',
                ],
                hardware: 'Custom server hardware specs',
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`p-8 rounded-lg ${
                  pkg.highlighted
                    ? 'bg-primary-700 text-white shadow-2xl scale-105'
                    : 'bg-white shadow-md'
                }`}
              >
                <h3
                  className={`text-2xl font-bold font-heading mb-2 ${
                    pkg.highlighted ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {pkg.name}
                </h3>
                <div
                  className={`text-4xl font-bold font-heading mb-4 ${
                    pkg.highlighted ? 'text-white' : 'text-primary-700'
                  }`}
                >
                  {pkg.price}
                </div>
                <p
                  className={`mb-6 ${
                    pkg.highlighted ? 'text-white/90' : 'text-gray-800'
                  }`}
                >
                  {pkg.description}
                </p>
                <div
                  className={`text-sm font-semibold mb-4 ${
                    pkg.highlighted ? 'text-white/90' : 'text-gray-700'
                  }`}
                >
                  {pkg.hardware}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle
                        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          pkg.highlighted ? 'text-white' : 'text-primary-700'
                        }`}
                      />
                      <span
                        className={
                          pkg.highlighted ? 'text-white/90' : 'text-gray-700'
                        }
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.highlighted
                      ? 'bg-white text-primary-700 hover:bg-gray-100'
                      : 'bg-primary-700 text-white hover:bg-primary-700'
                  }`}
                >
                  Get Setup Quote
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Recommendations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Hardware Recommendations
            </h2>
            <p className="text-lg text-gray-800">
              We'll help you choose the right hardware for your needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                tier: 'Budget',
                price: '$300-500',
                option: 'Used Office PC',
                specs: ['Dell Optiplex / HP EliteDesk', 'Intel i5 / Ryzen 5', '16GB RAM', '2x 4TB HDD (RAID 1)'],
                performance: 'Perfect for 1-3 users, basic services',
              },
              {
                tier: 'Recommended',
                price: '$700-1,000',
                option: 'Mini PC',
                specs: ['Intel NUC / Beelink', 'Intel i5-i7 / Ryzen 5-7', '32GB RAM', '256GB NVMe + 2x 8TB HDD'],
                performance: 'Great for families, multiple services',
              },
              {
                tier: 'Premium',
                price: '$1,500-2,500',
                option: 'Rackmount Server',
                specs: ['Dell R730 / HP DL380', 'Xeon processors', '64-128GB RAM', 'Multiple drives, redundant PSU'],
                performance: 'Small business, high availability',
              },
            ].map((hw, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="text-sm font-semibold text-primary-700 mb-2">
                  {hw.tier}
                </div>
                <div className="text-2xl font-bold font-heading mb-2 text-gray-900">
                  {hw.price}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{hw.option}</h3>
                <ul className="space-y-2 mb-4">
                  {hw.specs.map((spec, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Zap className="w-4 h-4 text-primary-700 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-gray-800">{hw.performance}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto bg-primary-50 p-6 rounded-lg">
            <h4 className="text-lg font-bold mb-3 text-primary-900">
              Power Consumption Note:
            </h4>
            <p className="text-gray-800">
              Modern mini PCs use only 15-30W at idle (comparable to a light bulb). At Calgary electricity rates,
              that's approximately <strong>$15-30/year</strong>—far less than cloud subscriptions.
            </p>
          </div>
        </div>
      </section>

      {/* Setup Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
            Professional Setup Process
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                step: '01',
                title: 'Hardware Consultation',
                description: 'We assess your needs and recommend the perfect hardware (or use what you have).',
                duration: '1 day',
              },
              {
                step: '02',
                title: 'Installation & Configuration',
                description: 'We install Proxmox, configure services, and set up secure remote access.',
                duration: '2-3 days',
              },
              {
                step: '03',
                title: 'Data Migration',
                description: 'Transfer your existing files from Google Drive, Dropbox, or local storage.',
                duration: '1-2 days',
              },
              {
                step: '04',
                title: 'Training & Documentation',
                description: 'Comprehensive training on using and maintaining your new system.',
                duration: '1 day',
              },
              {
                step: '05',
                title: 'Support & Monitoring',
                description: 'We monitor the first week and provide ongoing remote support.',
                duration: 'Ongoing',
              },
            ].map((step, index) => (
              <div key={index} className="flex gap-6 bg-white p-6 rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-700">
                      {step.step}
                    </span>
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold font-heading text-gray-900">
                      {step.title}
                    </h3>
                    <span className="text-sm text-gray-800">{step.duration}</span>
                  </div>
                  <p className="text-gray-800">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Privacy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex p-4 rounded-full bg-primary-100 text-primary-700 mb-6">
              <Shield className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Security & Privacy Built-In
            </h2>
            <p className="text-lg text-gray-800">
              Your home server is secured with enterprise-grade practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Encrypted Remote Access',
                description: 'Tailscale VPN provides zero-trust encrypted access. No open ports, no security risks.',
              },
              {
                title: 'Automatic Security Updates',
                description: 'Scheduled updates for OS and applications. We configure unattended security patches.',
              },
              {
                title: 'Backup & Disaster Recovery',
                description: 'Automated daily backups with easy restore. Optional off-site backup to cloud.',
              },
              {
                title: 'Network Isolation',
                description: 'Services run in isolated containers. Firewall rules protect from unauthorized access.',
              },
              {
                title: 'SSL/TLS Certificates',
                description: 'Automatic HTTPS with Let\'s Encrypt. All connections are encrypted.',
              },
              {
                title: 'User Access Control',
                description: 'Multi-user support with role-based permissions. Family members get separate accounts.',
              },
            ].map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                <div className="flex-shrink-0">
                  <Lock className="w-8 h-8 text-primary-700" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-800">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Ready to Build Your Private Cloud?"
        description="Let's discuss your needs and design the perfect home server solution. Free consultation and custom quote."
        primaryButton={{ text: 'Get Free Quote', href: '/contact' }}
        secondaryButton={{ text: 'Read Setup Guide', href: '/blog/building-home-cloud-nextcloud-proxmox-guide' }}
        variant="gradient"
      />
    </>
  );
}
