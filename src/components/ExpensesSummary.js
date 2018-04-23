import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenses, total}) => (
    <div className="page-header">
        <div className="content-container">
            <h1 className="page-header-title">
                Viewing <span>{expenses.length}</span> expense{expenses.length > 1 ? 's' : ''} totalling <span>{numeral(total).format('$0,0.00')}</span>
            </h1>
            <div className="page-header-actions">
                <Link className="button" to="/create">Add Expense</Link>
            </div>
        </div>
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
