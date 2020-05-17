import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders', () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toMatchInlineSnapshot(`
    <h2>
      Good Bye 👋🏼 Have a nice day!
    </h2>
  `);
  });
});
