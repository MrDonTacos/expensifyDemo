import {createStore, combineReducers} from 'redux';
import { v4 as uuid } from 'uuid';
//ADD_EXPENSE









store.subscribe(()=> {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
})

const expenseOne =store.dispatch(addExpense({
    description: 'Rent',
    amount: 500,
    createdAt: -2100
}))

const expenseTwo =store.dispatch(addExpense({
    description: 'Coffee',
    amount: 100,
    createdAt: -100
}))


// store.dispatch(removeExpense({
//     id: expenseOne.expenses.id
// }))

// store.dispatch(editExpense(expenseTwo.expenses.id, {
//     description: 'Laptop',
//     amount: 10000,
// }))

// store.dispatch(setTextFilter('rent'));

// store.dispatch(sortByAmmount());

// store.dispatch(sortByDate());

store.dispatch(sortByAmount());
// store.dispatch(sortByEndDate(12345));

// const demoState = {
//     expenses: [{
//         id: '',
//         description: 'Saul',
//         note: 'Final Payment',
//         amount: 54500,
//         createdAt: 0
//     }],
//     filters: {
//         text: 'rent',
//         sortBy: 'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// }


// const user = {
//     name: 'Saul',
//     age: 23
// }

// const anotherUser = {
//     age: 56
// }

// console.log({
//     ...user, ...anotherUser
// }); //This update the information