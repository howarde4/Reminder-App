import React from 'react';
import { render } from '@testing-library/react-native';
import 'jest-styled-components';
import Empty from './Empty';

describe('ReminderList', () => {

    it('should render', () => {
        const component = <Empty />;
        const tree = render.create(component).toJSON()
        expect(tree).toMatchSnapshot();
    });
});