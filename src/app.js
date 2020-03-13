import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter, sortByAmount} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import {Provider} from 'react-redux'

const store = configureStore();


store.dispatch(addExpense({
    amount: 150,
    description: 'Water',
    createdAt: 8000
}))

store.dispatch(addExpense({
    amount: 500,
    description: 'Coffee',
    createdAt: 1000
}))

store.dispatch(addExpense({
    amount: 8000,
    description: 'Rent',
    createdAt: 2000
}))


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

store.dispatch(sortByAmount())
console.log(visibleExpenses);



ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById("app"))







