import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';
import { BlogPost } from '@/types';
import { getAuthor } from '@/data/authors';
import BlogPostClient from './BlogPostClient';
import ArticleSchema from '@/components/ArticleSchema';

type Props = {
  params: Promise<{ slug: string }>;
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://northstack.solutions';
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'NorthStack Solutions';

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post || !post.published) {
    return {
      title: 'Article Not Found',
    };
  }

  const author = getAuthor(post.authorId);
  const imageUrl = post.image ? `${siteUrl}${post.image}` : `${siteUrl}/og-image.jpg`;

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: author.name }],
    creator: author.name,
    publisher: siteName,
    openGraph: {
      type: 'article',
      locale: 'en_CA',
      url: `${siteUrl}/blog/${post.slug}`,
      title: post.title,
      description: post.excerpt,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [author.name],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
      creator: author.twitter || '@northstackca',
    },
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  // Improved related posts logic: mix of same category, similar tags, and recent posts
  const allPublishedPosts = blogPosts.filter((p) => p.published && p.slug !== slug);

  // Score posts by relevance
  const scoredPosts = allPublishedPosts.map((p) => {
    let score = 0;

    // Same category: +10 points
    if (p.category === post.category) score += 10;

    // Shared tags: +2 points per tag
    const sharedTags = p.tags.filter((tag) => post.tags.includes(tag));
    score += sharedTags.length * 2;

    // Recency bonus: newer posts get slight boost
    const daysDiff = Math.abs(
      new Date(p.date).getTime() - new Date(post.date).getTime()
    ) / (1000 * 60 * 60 * 24);
    if (daysDiff < 30) score += 1;

    return { post: p, score };
  });

  // Sort by score and take top 3
  const relatedPosts = scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map((item) => item.post);

  return (
    <>
      <ArticleSchema post={post} />
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.filter((post) => post.published).map((post) => ({
    slug: post.slug,
  }));
}
