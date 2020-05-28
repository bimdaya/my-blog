import React from 'react';
import { render } from '@testing-library/react';
import PostPreview from './PostPreview';

describe('PostPreview', () => {
  it('renders', () => {
    const post = {
      slug: 'test_slug',
      title: 'test title',
      date: '2020.04.05',
      description: 'test description',
    };
    render(<PostPreview {...post} />);
  });
});
