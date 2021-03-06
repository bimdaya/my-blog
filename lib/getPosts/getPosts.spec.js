import { promises as fs } from 'fs';

import getAllPostContent, { getAllPostFileNames, getPostBySlug } from './getPosts';

describe('getPosts', () => {
  describe('getPostBySlug()', () => {
    it('Returns page content', async () => {
      jest.spyOn(fs, 'readFile').mockImplementation(() => {
        return `This is a test content`;
      });

      const postContent = await getPostBySlug('/test');
      expect(postContent).toStrictEqual({ content: 'This is a test content' });
    });

    it('Returns an empty object when an error occured', async () => {
      jest.spyOn(fs, 'readFile').mockImplementation(() => {
        throw Error('File read error');
      });

      jest.spyOn(console, 'error').mockImplementation(() => {});

      const postContent = await getPostBySlug('/test');
      expect(postContent).toBeInstanceOf(Error);
    });
  });

  describe('getAllPostContent()', () => {
    it('Returns an array of page contents', async () => {
      jest.spyOn(fs, 'readdir').mockImplementation(() => {
        return ['test.md'];
      });

      jest.spyOn(fs, 'readFile').mockImplementation(() => {
        return `This is a test content`;
      });

      const posts = await getAllPostContent();
      expect(posts).toStrictEqual([{ content: 'This is a test content' }]);
    });

    it('Returns an empty array when an error occured', async () => {
      jest.spyOn(fs, 'readdir').mockImplementation(() => {
        throw Error('File read error');
      });

      const posts = await getAllPostContent();
      expect(posts).toBeInstanceOf(Error);
    });
  });
});
