import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blog-posts';
import { BlogPost } from '@/types';
import BlogPostClient from './BlogPostClient';

type Props = {
  params: { slug: string };
};

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post || !post.published) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.published && p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return <BlogPostClient post={post} relatedPosts={relatedPosts} />;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.filter((post) => post.published).map((post) => ({
    slug: post.slug,
  }));
}
