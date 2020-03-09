import {createStore, combineReducers} from 'redux';
import { v4 as uuid } from 'uuid';
//ADD_EXPENSE

const addExpense = ({description="",note="",amount=0, createdAt=0}={}) => ({
    type: "ADD_EXPENSE",
    expenses: {
        id: uuid(),
        description,
        note,
        amount
    }
});



//REMOVE_EXPENSE

const removeExpense = ({id} ={}) => ({ //No need of default ID
    type: "DELETE_EXPENSE",
    id
});
//EDIT_EXPENSE

const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});
//SET_TEXT_FILER

const setTextFilter = (text='') => ({
    type: "SET_TEXT_FILTER",
    text
})

//SORT_BY_AMOUNT

const sortByAmmount = () => ({
    type: "SORT_BY_AMOUNT"
})
//SORT_BY_DATE
const sortByDate = () => ({
    type: "SORT_BY_DATE"
})

//SET_START_DATE
const sortByStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate
})

//SET_END_DATE
const sortByEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate
})


const expensesReducerDefaultState = [];


const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {

        case 'ADD_EXPENSE': 
        return [...state, action.expenses] //= state.concat(action.expenses)
    
        case 'DELETE_EXPENSE':
        return state.filter(expenses=>expenses.id!==action.id) //Expenses is any object of the array

        case 'EDIT_EXPENSE':
            return state.map((expenses) => {
                if(expenses.id===action.id){

                    return {
                        ...expenses,
                        ...action.updates
                    }
                }
                    else 
                return expense
            })


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
    
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                ...action //?
            }

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
            
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
            
        case 'SET_START_DATE': 
        return {
            ...state,
            startDate: action.startDate

        }

        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

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

store.subscribe(()=> {
    console.log(store.getState());
})

// const expenseOne =store.dispatch(addExpense({
//     description: 'Rent',
//     amount: 500,
// }))

// const expenseTwo =store.dispatch(addExpense({
//     description: 'Coffee',
//     amount: 100,
// }))


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

store.dispatch(sortByStartDate(12345));
store.dispatch(sortByEndDate(12345));

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