import { render } from '@testing-library/react';

import ErrorPage from './ErrorPage';

describe('ErrorPage', () => {
  it('renders when statusCode is 404', () => {
    render(<ErrorPage statusCode={404} />);
  });

  it('renders when statusCode is 500', () => {
    render(<ErrorPage statusCode={500} />);
  });

  it('renders when statusCode is 300', () => {
    render(<ErrorPage statusCode={300} />);
  });
});
