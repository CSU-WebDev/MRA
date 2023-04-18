import React from 'react';
import App from '../App';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
  const {asFragment} = render(<App />);
        expect(asFragment()).toMatchSnapshot()
});
