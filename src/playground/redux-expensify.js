import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';
//ADD_EXPENSE

const addExpense = ({description="",note="",amount=1500}={}) => ({
    type: "ADD_EXPENSE",
    expenses: {
        id: uuid(),
        description,
        note,
        amount
    }
})
//REMOVE_EXPENSE
//EDIT_EXPENSE
//SET_TEXT_FILER
//SORT_BY_AMOUNT
//SET_START_DATE
//SET_END_STATE


const expensesReducerDefaultState = [];


const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
    
        default:
            return state;
    }
}

const filterReducerDefaultState = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState , action) => {
    switch (action.type) {
    
        default:
            return state;
    }
}



const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
})
);



const demoState = {
    expenses: [{
        id: '',
        description: 'Saul',
        note: 'Final Payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

console.log(store.getState());



