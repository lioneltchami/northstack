import { BlogPost } from '@/types';
import { services } from '@/data/services';
import { ArrowRight } from 'lucide-react';

interface RelatedServicesProps {
  post: BlogPost;
}

export default function RelatedServices({ post }: RelatedServicesProps) {
  // Keyword mapping for matching blog posts to services
  const keywordMap: Record<string, string[]> = {
    'automation': ['automation', 'workflow', 'automate', 'integration', 'zapier', 'make'],
    'cloud-infrastructure': ['cloud', 'aws', 'devops', 'kubernetes', 'docker', 'terraform', 'infrastructure'],
    'web-development': ['web', 'website', 'react', 'next.js', 'frontend', 'development', 'ecommerce'],
    'security': ['security', 'backup', 'protection', 'ssl', 'firewall', 'compliance', 'encryption'],
    'home-server': ['home server', 'self-hosting', 'nas', 'plex', 'nextcloud', 'privacy'],
    'content-creator': ['content', 'podcast', 'youtube', 'newsletter', 'creator', 'publishing'],
    'consulting': ['consulting', 'strategy', 'migration', 'planning', 'support'],
  };

  // Calculate relevance score for each service
  const scoredServices = services.map((service) => {
    let score = 0;
    const keywords = keywordMap[service.id] || [];
    const searchText = `${post.title} ${post.excerpt} ${post.tags.join(' ')} ${post.category}`.toLowerCase();

    // Check for keyword matches
    keywords.forEach((keyword) => {
      if (searchText.includes(keyword.toLowerCase())) {
        score += 2;
      }
    });

    // Category match bonus
    if (service.category === post.category) {
      score += 5;
    }

    return { service, score };
  });

  // Get top 3 most relevant services
  const relatedServices = scoredServices
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.service);

  // Don't show section if no relevant services found
  if (relatedServices.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Interested in Implementing This?
          </h2>
          <p className="text-lg text-gray-700">
            We offer professional services to help you implement the strategies discussed in this article.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {relatedServices.map((service) => (
            <a
              key={service.id}
              href="/contact"
              className="group bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-bold font-heading mb-3 text-gray-900 group-hover:text-primary-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-4 line-clamp-3">
                {service.description}
              </p>
              <div className="flex items-center text-primary-700 font-semibold group-hover:gap-2 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">{service.pricing}</span>
                  <span className="text-gray-600">{service.timeline}</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-all duration-300"
          >
            View All Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
