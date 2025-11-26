import { blogPosts } from '@/data/blog-posts';
import { getAuthor } from '@/data/authors';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://northstack.ca';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'NorthStack Solutions';

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export async function GET() {
  // Filter and sort published posts
  const publishedPosts = blogPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escapeXml(siteName + ' Blog')}</title>
    <link>${siteUrl}/blog</link>
    <description>Enterprise DevOps, cloud infrastructure, and IT automation insights from ${escapeXml(siteName)}</description>
    <language>en-ca</language>
    <copyright>Copyright ${new Date().getFullYear()} ${escapeXml(siteName)}</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/logo.png</url>
      <title>${escapeXml(siteName)}</title>
      <link>${siteUrl}</link>
    </image>
${publishedPosts
  .map((post) => {
    const author = getAuthor(post.authorId);
    const postUrl = `${siteUrl}/blog/${post.slug}`;
    const pubDate = new Date(post.date).toUTCString();

    // Strip markdown for description (basic cleanup)
    const description = escapeXml(
      post.excerpt
        .replace(/[#*_`\[\]]/g, '')
        .trim()
        .substring(0, 300)
    );

    // Convert content to basic HTML (remove markdown syntax)
    const htmlContent = escapeXml(
      post.content
        .split('\n\n')
        .map(para => `<p>${para.replace(/[#*_`]/g, '')}</p>`)
        .join('\n')
        .substring(0, 5000) // Limit content length
    );

    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${postUrl}</link>
      <guid isPermaLink="true">${postUrl}</guid>
      <description>${description}</description>
      <content:encoded><![CDATA[${htmlContent}]]></content:encoded>
      <pubDate>${pubDate}</pubDate>
      <dc:creator>${escapeXml(author.name)}</dc:creator>
      <category>${escapeXml(post.category)}</category>
${post.tags.map(tag => `      <category>${escapeXml(tag)}</category>`).join('\n')}
    </item>`;
  })
  .join('\n')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
    },
  });
}
