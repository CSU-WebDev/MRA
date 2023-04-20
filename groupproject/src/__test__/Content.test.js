import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Content from '../components/Content';

test('ChecksTextBoxWithLabel changes after input', () => {
  const {asFragment} = render(<Content />);
        expect(asFragment()).toMatchSnapshot()
});