import { promises as fs } from 'fs';
import matter from 'gray-matter';

export async function getAllPostFileNames() {
  let postSlugs = [];

  try {
    postSlugs = await fs.readdir('public/_posts');
  } catch (error) {
    console.error(error);
  }
  return postSlugs;
}

export default async function getAllPostContent() {
  let posts = [];

  try {
    const postSlugs = await getAllPostFileNames();
    posts = postSlugs && Promise.all(postSlugs.map((slug) => getPostBySlug(slug)));
  } catch (error) {
    console.error(error);
  }
  return posts;
}

export async function getPostBySlug(slug) {
  let postContent = {};
  try {
    const post = await fs.readFile(`public/_posts/${slug}`, 'utf8');
    const { data, content } = matter(post);

    postContent = { ...data, content };
  } catch (error) {
    console.error(error);
  }

  return postContent;
}
