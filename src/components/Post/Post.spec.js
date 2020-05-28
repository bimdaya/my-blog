import React from 'react';
import { render } from '@testing-library/react';
import Post from './Post';

describe('Post', () => {
  it('renders', () => {
    const post = { title: 'Test title', content: 'Test content' };
    const { container } = render(<Post post={post} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
