import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>
      Bim's Blog
    </h1>
    `);
  });
});
