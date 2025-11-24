import { Metadata } from 'next';
import Hero from '@/components/ui/Hero';
import {
  Award,
  Briefcase,
  Code,
  Shield,
  Users,
  Lightbulb,
  Heart,
  MapPin,
  GraduationCap,
  TrendingUp
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About | NorthStack Solutions - Calgary DevOps Expert',
  description: 'Learn about NorthStack Solutions - a Calgary-based DevOps and automation expert with 7+ years of enterprise experience from IBM Canada and major energy companies.',
  keywords: ['DevOps Calgary', 'IT Automation Canada', 'Enterprise Technology', 'Cloud Infrastructure'],
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Building Better IT Solutions for Canadian Businesses"
        subtitle="About NorthStack Solutions"
        description="Enterprise-grade expertise with a personal touch. Bringing years of experience from IBM Canada and major energy companies to help your business thrive."
        variant="gradient"
        size="medium"
      />

      {/* Story Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-center">
              From Farm to Enterprise Tech
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
                My journey into technology started in an unlikely place—a farm in rural Canada. Growing up,
                I learned the value of hard work, problem-solving, and making things work with what you have.
                Those lessons shaped how I approach technology today: practical, efficient, and always focused on results.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
                After pursuing computer science and diving deep into enterprise technology, I spent years working
                as a contractor for <strong>IBM Canada</strong> and major energy companies across Western Canada.
                I witnessed firsthand how large organizations leverage technology to scale operations, improve security,
                and drive innovation.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
                But I also saw a gap: small and medium-sized Canadian businesses struggling to access the same
                enterprise-level expertise. They needed modern DevOps practices, cloud infrastructure, and intelligent
                automation—but couldn't afford the enterprise price tag or navigate complex corporate consultancies.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                That's why I founded <strong>NorthStack Solutions</strong> in Calgary. To bring enterprise-grade
                IT solutions to Canadian businesses in a way that's personal, affordable, and actually useful.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Experience Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
            Enterprise Experience You Can Trust
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Briefcase,
                title: 'IBM Canada Contractor',
                description: 'Worked on mission-critical enterprise systems, implementing DevOps pipelines, infrastructure automation, and cloud migrations for Fortune 500 clients.',
              },
              {
                icon: Shield,
                title: 'Energy Sector Expertise',
                description: 'Implemented secure, compliant infrastructure solutions for major Canadian energy companies, handling sensitive data and high-availability requirements.',
              },
              {
                icon: Code,
                title: 'Full-Stack DevOps',
                description: 'Deep hands-on experience with AWS, Azure, Terraform, Docker, Kubernetes, CI/CD pipelines, and modern automation frameworks.',
              },
              {
                icon: Award,
                title: '7+ Years in Technology',
                description: 'From junior developer to senior DevOps engineer, with certifications and real-world battle scars from production incidents at scale.',
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-primary-200 dark:bg-primary-800 text-primary-700 dark:text-primary-300">
                    <item.icon className="w-8 h-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                category: 'Cloud & Infrastructure',
                skills: [
                  'AWS (EC2, S3, RDS, Lambda, CloudFront)',
                  'Google Cloud Platform (GCP)',
                  'Microsoft Azure',
                  'Terraform & Infrastructure as Code',
                  'Docker & Kubernetes',
                  'Proxmox & Virtualization',
                ],
              },
              {
                category: 'DevOps & Automation',
                skills: [
                  'CI/CD Pipelines (GitHub Actions, GitLab CI)',
                  'n8n & Make.com Automation',
                  'Python Scripting',
                  'Bash & PowerShell',
                  'Configuration Management (Ansible)',
                  'Monitoring (Datadog, CloudWatch)',
                ],
              },
              {
                category: 'Development & Security',
                skills: [
                  'React & Next.js',
                  'Node.js & TypeScript',
                  'PostgreSQL & MySQL',
                  'DevSecOps Best Practices',
                  'SSL/TLS & Certificate Management',
                  'Network Security & VPN Setup',
                ],
              },
            ].map((section, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-bold font-heading mb-4 text-primary-700 dark:text-primary-300">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-200">
                      <span className="text-primary-700 dark:text-primary-300 mt-1">✓</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
            Career Journey
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative border-l-2 border-primary-300 dark:border-primary-700 pl-8 space-y-8">
              {[
                {
                  year: '2024-Present',
                  title: 'Founder, NorthStack Solutions',
                  description: 'Launched consultancy to bring enterprise-level DevOps and automation expertise to Canadian small businesses. Serving clients across Calgary, Alberta, and beyond.',
                },
                {
                  year: '2021-2024',
                  title: 'Senior DevOps Engineer (Contract)',
                  description: 'Led infrastructure modernization projects for energy sector clients. Implemented AWS cloud migrations, Kubernetes deployments, and comprehensive CI/CD pipelines.',
                },
                {
                  year: '2019-2021',
                  title: 'DevOps Engineer, IBM Canada',
                  description: 'Worked on enterprise automation projects for Fortune 500 clients. Specialized in Infrastructure as Code, cloud cost optimization, and security hardening.',
                },
                {
                  year: '2017-2019',
                  title: 'System Administrator & Developer',
                  description: 'Started career managing Linux servers, building internal tools, and automating deployment processes. Discovered passion for DevOps and infrastructure automation.',
                },
              ].map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-10 mt-1.5 w-4 h-4 bg-primary-700 dark:bg-primary-400 rounded-full border-4 border-gray-50 dark:border-gray-800"></div>
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                    <div className="text-sm font-semibold text-primary-700 dark:text-primary-300 mb-1">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-2 text-gray-900 dark:text-white">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-200">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12 text-center">
            My Approach to Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Lightbulb,
                title: 'Practical Over Trendy',
                description: 'I use proven technologies that solve your actual business problems, not just the latest hype.',
              },
              {
                icon: Users,
                title: 'Education-Focused',
                description: 'I don\'t just implement solutions—I teach you how they work so you\'re never dependent on me.',
              },
              {
                icon: TrendingUp,
                title: 'Built to Scale',
                description: 'Every solution is designed to grow with your business, from startup to enterprise.',
              },
              {
                icon: Shield,
                title: 'Security First',
                description: 'DevSecOps mindset means security is built in from day one, not bolted on later.',
              },
              {
                icon: Heart,
                title: 'Honest Communication',
                description: 'No jargon, no overselling. I\'ll tell you what you need and what you don\'t.',
              },
              {
                icon: GraduationCap,
                title: 'Continuous Learning',
                description: 'Technology evolves fast. I stay current so your solutions use modern best practices.',
              },
            ].map((principle, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary-200 dark:bg-primary-800 text-primary-700 dark:text-primary-300 mb-4">
                  <principle.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-2 text-gray-900 dark:text-white">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-200">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Calgary/Canada Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-secondary-700 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex p-4 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <MapPin className="w-12 h-12" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Proudly Based in Calgary, Serving All of Canada
            </h2>
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-xl mb-4">
                Being based in Calgary means I understand the unique challenges Canadian businesses face—from
                navigating PIPEDA and CASL compliance to dealing with cross-border data regulations.
              </p>
              <p className="text-xl mb-4">
                I know the local business landscape, the seasonal challenges, and the resourcefulness required
                to succeed in the Canadian market. Whether you're in Alberta's energy sector, BC's tech scene,
                or Ontario's manufacturing hub, I speak your language.
              </p>
              <p className="text-xl">
                Plus, all your data stays in Canada, and you're working with someone in your time zone who
                actually answers the phone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch Section */}
      <section className="section-padding bg-white dark:bg-gray-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-center">
              Beyond the Code
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none text-center">
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
                When I'm not optimizing AWS bills or setting up automation workflows, you'll find me:
              </p>
              <ul className="text-lg text-gray-700 dark:text-gray-200 space-y-2 text-left max-w-2xl mx-auto">
                <li>Exploring the Rocky Mountains (hiking and photography)</li>
                <li>Tinkering with home lab setups (Proxmox, self-hosted everything)</li>
                <li>Contributing to open-source projects</li>
                <li>Reading about emerging technologies and DevOps trends</li>
                <li>Helping local startups with technical mentorship</li>
              </ul>
              <p className="text-lg text-gray-700 dark:text-gray-200 mt-6">
                I believe technology should enhance life, not complicate it. That philosophy guides everything
                I build for my clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50 dark:bg-gray-800">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-200 mb-8">
              Whether you need a complete cloud migration, intelligent automation workflows, or just want
              to chat about your technology challenges, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-primary-700 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Free Consultation
              </a>
              <a
                href="/services"
                className="px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-900/20 font-semibold rounded-lg transition-all duration-300"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
