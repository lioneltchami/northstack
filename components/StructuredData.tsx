export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'NorthStack Solutions',
    alternateName: 'Apoti Tech Inc.',
    description:
      'Enterprise-grade DevOps, cloud infrastructure, and IT automation services in Calgary, Alberta',
    url: 'https://northstack.solutions',
    telephone: '+1-403-123-4567',
    email: 'info@northstack.solutions',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.0447',
      longitude: '-114.0719',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Canada',
    },
    priceRange: '$$',
    serviceType: [
      'DevOps Consulting',
      'Cloud Infrastructure',
      'IT Automation',
      'Web Development',
      'Home Server Setup',
      'Security Services',
    ],
    founder: {
      '@type': 'Person',
      name: 'NorthStack Solutions Team',
    },
    foundingDate: '2017',
    sameAs: [
      'https://linkedin.com/company/northstack-solutions',
      'https://github.com/northstack-solutions',
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://northstack.solutions',
    name: 'NorthStack Solutions',
    image: 'https://northstack.solutions/logo.png',
    description:
      'Calgary-based DevOps and IT automation consultancy specializing in cloud infrastructure, automation, and modern web solutions for Canadian businesses.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Calgary',
      addressRegion: 'Alberta',
      postalCode: 'T2P',
      addressCountry: 'Canada',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.0447,
      longitude: -114.0719,
    },
    url: 'https://northstack.solutions',
    telephone: '+14031234567',
    email: 'info@northstack.solutions',
    priceRange: '$$-$$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
