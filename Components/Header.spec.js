import React from 'react';
import { render } from '@testing-library/react-native';
import 'jest-styled-components';
import Header from './Header';

describe('Header', () => {
    it('renders the correct message', () => {
        const { queryByText } = render(<Header />);
        expect(queryByText('Reminders')).not.toBeNull();
    });
});