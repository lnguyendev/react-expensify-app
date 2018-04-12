import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenses, total}) => (
    <div>
        <p>
            Viewing {expenses.length} expense{expenses.length > 1 ? 's' : ''} totalling {numeral(total).format('$0,0.00')}
        </p>
    </div>
);

const mapStateToProps = (state) => {
    const expenses = selectExpenses(state.expenses, state.filters);
    return {
        expenses: expenses,
        total: getExpensesTotal(expenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
