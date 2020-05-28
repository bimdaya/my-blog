import { promises as fs } from 'fs';
import matter from 'gray-matter';

export async function getAllPostFileNames() {
  return await fs.readdir('public/_posts');
}

export default async function getAllPostContent() {
  try {
    const postSlugs = await getAllPostFileNames();
    return Promise.all(postSlugs.map((slug) => getPostBySlug(slug)));
  } catch (error) {
    return error;
  }
}

export async function getPostBySlug(slug) {
  try {
    const post = await fs.readFile(`public/_posts/${slug}`, 'utf8');
    const { data, content } = matter(post);
    const postContent = { ...data, content };

    return postContent;
  } catch (error) {
    return error;
  }
}
