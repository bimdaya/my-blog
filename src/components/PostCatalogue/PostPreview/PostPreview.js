import React from 'react';
import Link from 'next/link';

import postPreviewStyles from './PostPreview.module.css';

const PostPreview = ({ slug, title, date, description }) => {
  return (
    <div className={postPreviewStyles.post_margin}>
      <h4>
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className={postPreviewStyles.post_name}>
            📋 {title},<span className="post_published_date"> 📆 {date}</span>
          </a>
        </Link>
      </h4>
      <p className={postPreviewStyles.post_description}>{description}</p>
    </div>
  );
};

export default PostPreview;
