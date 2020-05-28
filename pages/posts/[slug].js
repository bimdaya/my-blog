import { withRouter } from 'next/router';

import Post from '../../src/components/Post';
import { getPostBySlug } from '../../lib/getPosts';
import markDownToHtml from '../../lib/markDownToHtml';
import ErrorPage from '../../src/ErrorPage';

const PostPage = (props) => {
  const { post, error } = props;

  if (!post) {
    return <ErrorPage statusCode={404} />;
  }

  if (error) {
    return <ErrorPage statusCode={error.statusCode} />;
  }

  return <Post {...post} />;
};

export default PostPage;

export async function getServerSideProps(req) {
  if (req) {
    const { slug } = req.query;

    try {
      const post = await getPostBySlug(`${slug}.md`);

      if (post) {
        post.content = await markDownToHtml(post.content || '');
      }

      return { props: { post: { ...post } } };
    } catch (error) {
      const statusCode = (error && error.statusCode) || 500;

      return { props: { post: {}, error: { statusCode: statusCode } } };
    }
  }

  return { props: {} };
}

// export async function getStaticProps({ params }) {
//   const post = await getPostBySlug(`${params.slug}.md`);

//   if (post) {
//     post.content = await markDownToHtml(post.content || '');
//   }

//   return {
//     props: {
//       post,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const slugs = await getAllPosts();

//   return {
//     paths: slugs.map((slug) => {
//       return {
//         params: {
//           slug,
//         },
//       };
//     }),
//     fallback: false,
//   };
// }
