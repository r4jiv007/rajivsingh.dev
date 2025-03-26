import React from 'react';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogPosts } from '@/utils/blog';
import styles from '@/styles/BlogPost.module.css';
import ReactMarkdown from 'react-markdown';

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className={styles.container}>
        <h1>Post not found</h1>
        <Link href="/blog" className={styles.backLink}>
          ← Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.meta}>
          <time className={styles.date}>{post.date}</time>
          <div className={styles.tags}>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.content}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      
      <Link href="/blog" className={styles.backLink}>
        ← Back to blog
      </Link>
    </div>
  );
} 