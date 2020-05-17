import { render } from '@testing-library/react';

import ErrorPage from './ErrorPage';

// const router = createRouter('', { slug: 'sample_post.md' }, '', {
//   initialProps: {},
//   pageLoader: jest.fn(),
//   App: jest.fn(),
//   Component: jest.fn(),
// });

describe('ErrorPage', () => {
  it('renders when statusCode is 404', () => {
    const { container } = render(<ErrorPage statusCode={404} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>
      Page Not Found
    </h1>
  `);
  });

  it('renders when statusCode is 500', () => {
    const { container } = render(<ErrorPage statusCode={500} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>
      Sorry something went wrong... We will be right back !
    </h1>
  `);
  });

  it('renders when statusCode is 300', () => {
    const { container } = render(<ErrorPage statusCode={300} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>
      Sorry something went wrong...
    </h1>
  `);
  });
});
