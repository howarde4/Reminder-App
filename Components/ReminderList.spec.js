import React from 'react';
import { render } from '@testing-library/react-native';
import 'jest-styled-components';
import ReminderList from './ReminderList';

describe('ReminderList', () => {
    const item = {
        reminder: 'Walk dog',
        time: '2022-10-05T12:48:00.000Z'
    }

    it('should render', () => {
        const component = <ReminderList item={item} />;
        const tree = render.create(component).toJSON()
        expect(tree).toMatchSnapshot();
    });
});