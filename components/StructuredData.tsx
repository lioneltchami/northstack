export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://northstack.solutions';
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'NorthStack Solutions';
  const companyName = process.env.NEXT_PUBLIC_COMPANY_NAME || 'Apoti Tech Inc.';
  const contactEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'info@northstack.ca';
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1-587-432-0753';
  const businessLocation = process.env.NEXT_PUBLIC_BUSINESS_LOCATION || 'Calgary, Alberta';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteName,
    alternateName: companyName,
    description:
      `Enterprise-grade DevOps, cloud infrastructure, and IT automation services in ${businessLocation}`,
    url: siteUrl,
    telephone: contactPhone,
    email: contactEmail,
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
      name: `${siteName} Team`,
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
    '@id': siteUrl,
    name: siteName,
    image: `${siteUrl}/logo.png`,
    description:
      `${businessLocation.split(',')[0]}-based DevOps and IT automation consultancy specializing in cloud infrastructure, automation, and modern web solutions for Canadian businesses.`,
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
    url: siteUrl,
    telephone: contactPhone.replace(/\s/g, ''),
    email: contactEmail,
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
