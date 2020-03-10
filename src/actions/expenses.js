import { v4 as uuid } from 'uuid';

export const addExpense = ({description="",note="",amount=0, createdAt=0}={}) => ({
    type: "ADD_EXPENSE",
    expenses: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt,
    }
});



//REMOVE_EXPENSE

export const removeExpense = ({id} ={}) => ({ //No need of default ID
    type: "DELETE_EXPENSE",
    id
});
//EDIT_EXPENSE

export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});