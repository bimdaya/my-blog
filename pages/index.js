import React from 'react';

import Homepage from './../src/Homepage';
import getAllPostContent from './../lib/getPosts';
import ErrorPage from './_error';

export async function getStaticProps() {
  let pageProps = {};

  try {
    // Please refer https://github.com/zeit/next.js/issues/7755#issuecomment-624544303
    // if you think of removing this LOC
    pageProps.allPosts = await getAllPostContent();
  } catch (error) {
    pageProps.error = {};
    pageProps.error.statusCode = error.statusCode ? error.statusCode : 500;
    console.error(error);
  }

  return { props: pageProps };
}

const IndexPage = (props) => {
  if (props) {
    const { allPosts, error } = props;

    if (error) {
      return <ErrorPage {...error} />;
    }

    return <Homepage allPosts={allPosts} />;
  }
};

export default IndexPage;
