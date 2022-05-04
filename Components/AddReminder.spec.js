import React from 'react';
import { render } from '@testing-library/react-native';
import 'jest-styled-components';
import AddReminder from './AddReminder';

describe('ReminderList', () => {
    it('should render', () => {
        const component = <AddReminder />;
        const tree = render.create(component).toJSON()
        expect(tree).toMatchSnapshot();
    });
});