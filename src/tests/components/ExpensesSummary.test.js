import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should correct render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} total={expenses[0].amount} />);
    expect(wrapper).toMatchSnapshot();
});

test('should correct render ExpensesSummary with multiple expenses', () => {
});
