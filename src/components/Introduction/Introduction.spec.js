import React from 'react';
import { render } from '@testing-library/react';
import Introduction from './Introduction';

describe('Introduction', () => {
  it('renders', () => {
    render(<Introduction />);
  });
});
