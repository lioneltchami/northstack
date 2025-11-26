import { BlogPost } from '@/types';
import { getAuthor } from '@/data/authors';

interface ArticleSchemaProps {
  post: BlogPost;
}

export default function ArticleSchema({ post }: ArticleSchemaProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://northstack.solutions';
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'NorthStack Solutions';
  const author = getAuthor(post.authorId);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `${siteUrl}${post.image}` : `${siteUrl}/og-image.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.website || siteUrl,
      ...(author.linkedin && {
        sameAs: [author.linkedin],
      }),
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    articleSection: post.category,
    inLanguage: 'en-CA',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${siteUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.category,
        item: `${siteUrl}/blog?category=${post.category}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: `${siteUrl}/blog/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
