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

export default expensesReducer