import React from 'react';
import Link from 'next/link';
import { getAllBlogPosts } from '@/utils/blog';
import styles from '@/styles/Blog.module.css';

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog</h1>
      <div className={styles.grid}>
        {posts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} className={styles.cardLink}>
            <article className={styles.card}>
              <h2 className={styles.postTitle}>
                {post.title}
              </h2>
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
              <p className={styles.excerpt}>{post.excerpt}</p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
} 