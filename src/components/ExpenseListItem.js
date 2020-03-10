import React from 'react' 
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'
//Export a stateless functional component
// description, amount, createdAt

const ExpenseListItem = ({dispatch,id,description, amount, createdAt}) => (
    <div>
        <h2>{description}</h2>
        <p>
        Precio: {amount} 
        - Fecha:{createdAt}
        </p>
        <button onClick={()=>{
            dispatch(removeExpense({id})) //
        }}>Remove</button>
    </div>)



export default connect()(ExpenseListItem)