import React from 'react';
import { render } from '@testing-library/react';
import PostList from './PostCatalogue';

describe('PostList', () => {
  it('renders without passing posts', () => {
    const { container } = render(<PostList />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders when an array of posts are passed', () => {
    const posts = [
      {
        slug: 'test_slug',
        title: 'test title',
        date: '2020.04.05',
        description: 'test description',
      },
    ];
    const { container } = render(<PostList posts={posts} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
