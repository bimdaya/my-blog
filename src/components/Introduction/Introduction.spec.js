import React from 'react';
import { render } from '@testing-library/react';
import Introduction from './Introduction';

describe('Introduction', () => {
  it('renders', () => {
    const { container } = render(<Introduction />);

    expect(container.firstChild).toMatchInlineSnapshot(`
    <div>
      <h2>
        Hello there, My name is Bim and welcome to my blog 🤗
      </h2>
    </div>
    `);
  });
});
