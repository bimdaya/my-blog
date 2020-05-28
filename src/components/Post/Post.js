import React from 'react';

import postStyles from './Post.module.css';

const Post = (post) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <div className="max-w-2xl mx-auto">
        <div
          className={postStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
};

export default Post;
