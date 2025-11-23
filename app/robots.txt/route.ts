import { MetadataRoute } from 'next';

export function GET(): Response {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://northstack.solutions';
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'NorthStack Solutions';

  const robotsTxt = `# robots.txt for ${siteName}
# ${baseUrl}

User-agent: *
Allow: /

# Disallow admin and API routes
Disallow: /api/

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}