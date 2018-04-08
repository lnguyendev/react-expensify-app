import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500, createdAt: 1000}));
store.dispatch(addExpense({description: 'Gas bill', amount: 200, createdAt: 1500}));
store.dispatch(addExpense({description: 'Rent bill', amount: 0, createdAt: 500}));

var state = store.getState();
var expenses = getVisibleExpenses(state.expenses, state.filters);

console.log(expenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
