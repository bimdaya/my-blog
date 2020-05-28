import React from 'react';
import { render } from '@testing-library/react';
import Homepage from './Homepage';

describe('Homepage', () => {
  it('renders', () => {
    const allposts = {
      posts: [
        {
          slug: 'test_slug',
          title: 'test title',
          date: '2020.04.05',
          description: 'test description',
        },
      ],
    };
    const { container } = render(<Homepage allposts={allposts} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
