import React from 'react' 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'
//Export a stateless functional component
// description, amount, createdAt

const ExpenseListItem = ({dispatch,id,description, amount, createdAt, history}) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h2>{description}</h2>
    </Link>
        <p>
        Precio: {amount} 
        - Fecha:{createdAt}
        </p>
        <button onClick={()=>{
            dispatch(removeExpense({id})) //
        }}>Remove</button>
    </div>)



export default connect()(ExpenseListItem)