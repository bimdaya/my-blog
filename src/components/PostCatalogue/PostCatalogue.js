import React from 'react';

import PostPreview from './PostPreview';

const PostCatalogue = ({ posts }) => {
  return (
    <section>
      <h2>Grab a cuppa ☕️ and enjoy the reading 📖</h2>
      <div>
        {posts &&
          posts.map((post) => (
            <PostPreview
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              description={post.description}
            />
          ))}
      </div>
    </section>
  );
};

export default PostCatalogue;
