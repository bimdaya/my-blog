import React from 'react';

import Header from '../components/Header';
import Introduction from '../components/Introduction';
import PostCatalogue from '../components/PostCatalogue';
import Footer from '../components/Footer';

const Homepage = ({ allPosts }) => {
  return (
    <>
      <Header />
      <Introduction />
      <PostCatalogue posts={allPosts} />
      <Footer />
    </>
  );
};

export default Homepage;
